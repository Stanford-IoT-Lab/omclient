var crypto = require('../util/crypto');
var http = require('http');
var https = require('https');
var Url = require('url');
var async = require('async');

var LDGetUploadTicketRequest = require('../longdan/ldproto/LDGetUploadTicketRequest');
var LDBlobMetadata = require('../longdan/ldproto/LDBlobMetadata');
var LDGetDownloadTicketRequest = require('../longdan/ldproto/LDGetDownloadTicketRequest');
var LDVerifyUploadCompletedRequest = require('../longdan/ldproto/LDVerifyUploadCompletedRequest');

class BlobUtils {

	constructor(client) {
		this._client = client;
		this._blobUrlCache = {};
	}

	ensureBlobSource(hash, source, timestamp, feed, callback) {
		this._client.store.getBlobs((blobsDb) => {
			blobsDb.getOrCreateObject(hash, (blob) => {
				for (var i = 0; i < blob.sources.length; i++) {
					if (blob.sources[i] == source) {
						if (callback) {
							callback.call();
						}
						return;
					}
				}

				blob.sources.push(source)
				blobsDb.update(blob, callback);

			});
		});

		return hash;
	}

	hashFromLongdanUrl(url) {
		var parser = Url.parse(url);

		if (parser.protocol == "hosted:") {
			var hash = url.split("#").pop();
			// cleansing
			hash = new Buffer(hash, "base64").toString("base64");
			return hash;
		}

		if (parser.protocol == "longdan:") {
			var path = parser.pathname.substring(1);
			var hash = path.split("/").pop();
			// cleansing
			hash = new Buffer(hash, "base64").toString("base64");
			return hash;
		}

		return null;
	}

	uploadBlob(data, mime, cb) {
		var req = new LDGetUploadTicketRequest();
		req.Account = this._client.account;
		req.Metadata = new LDBlobMetadata();
		req.Metadata.MimeType = mime;
		req.Metadata.Size = data.length;

		var md5 = crypto.createMD5();
		md5.update(data);
		req.Metadata.Hash = md5.digest("base64");

		this._client.msgCall(req, this._gotUploadTicket.bind(this, data, cb));
	}

	getDownloadLinkForHash(hash, cb) {
		if (hash in this._blobUrlCache) {
			var blob = this._blobUrlCache[hash];
			if (new Date().getTime() > blob.expires) {
				delete this._blobUrlCache[hash];
			} else {
				cb(undefined, blob.url);
				return;
			}
		}

		// Look up the blob as a 'low priority even', in case a blob+hash
		// has been scheduled for writing but is not yet available.
		async.nextTick(() => {
			this._client.store.getBlobs((blobsDb) => {
				blobsDb.getObjectByKey(hash, (blob) => {
					if (!blob) {
						cb("Blob not found");
						return;
					}

					var url, brl;
					for (var i = 0; i < blob.sources.length; i++) {
						var rec = blob.sources[i];
						if (rec.startsWith("hosted://") || rec.startsWith("longdan://")) {
							brl = blob.sources[i];
							break;
						} else if (rec.startsWith("http://") || rec.startsWith("https://")) {
							url = rec;
						}
					}

					if (brl === undefined && url !== undefined) {
						cb(undefined, url);
						return;
					}

					var req = new LDGetDownloadTicketRequest();
					req.BlobLinkString = brl;

					var me = this;
					this._client.msgCall(req, this._gotDownloadTicket.bind(this, function(err, url) {
						if (url) {
							var TEN_MINUTES = 1000 * 60 * 10;
							var expires = new Date().getTime() + TEN_MINUTES;
							me._blobUrlCache[hash] = {
								url: url,
								expires: expires
							};
						}
						cb(err, url);
					}));
				});
			});
		});
	}

	// An optimized version of getDownloadLinkForHash that checks
	// to see if the image is in the Browser's cache even if the link is no longer valid.
	// If not, attempt to get another blob download ticket from the server.
	getImageUrlForHash(hash, cb) {
		if (typeof document !== 'undefined') {
			// TODO: long-term persistence
			if (hash in this._blobUrlCache) {
				var blob = this._blobUrlCache[hash];
				var img = document.createElement('img');
				img.onerror = (e) => {
					this.getDownloadLinkForHash(hash, cb);
				};
				img.onload = () => {
					cb(undefined, blob.url);
				};
				img.src = blob.url;
			} else {
				this.getDownloadLinkForHash(hash, cb);
			}
		} else {
			this.getDownloadLinkForHash(hash, cb);
		}
	}


	getDownloadLinkForBrl(blobLinkString, cb) {
		var req = new LDGetDownloadTicketRequest();
		req.BlobLinkString = blobLinkString;

		this._client.msgCall(req, this._gotDownloadTicket.bind(this, cb));
	}

	_gotUploadTicket(data, cb, e, resp) {
		if (e) {
			cb(e);
			return;
		}
		var ticket = resp.BlobUploadTicket;

		if (ticket.AlreadyUploaded) {
			cb(undefined, ticket.BlobLinkString);
			return;
		}

		var p = Url.parse(ticket.UploadUrl);
		var options = {
			hostname: p.hostname,
			port: p.port,
			protocol: p.protocol,
			path: p.path,
			method: 'PUT',
			headers: ticket.UploadHeaders,
			withCredentials: false,
			responseType: 'arraybuffer'
		};
		if (!options.port) options.port = p.protocol == "https:" ? 443 : 80;
		options.headers['Content-Length'] = data.length;

		var invoker = p.protocol == "https:" ? https : http;
		var req = invoker.request(options, this._gotUploadResponse.bind(this, ticket, cb));
		req.on('error', function(e) {
			cb(e);
		});
		req.end(data);
	}

	_gotUploadResponse(uploadTicket, cb, resp) {
		if (resp.statusCode != 200) {
			cb(resp.statusCode);
			return;
		}
		var req = new LDVerifyUploadCompletedRequest();
		req.BlobUploadTicket = uploadTicket;
		this._client.msgCall(req, this._gotBlobLinkString.bind(this, cb));

	}

	_gotBlobLinkString(cb, e, resp) {
		if (e) {
			cb(e);
			return;
		}
		cb(undefined, resp);
	}

	_gotDownloadTicket(cb, e, resp) {
		if (e) {
			cb(e);
			return;
		}
		if (resp.BlobDownloadTicket.Headers) {
			this._doDownload(this._gotDownload.bind(this, cb), undefined, resp);
		} else {
			cb(undefined, resp.BlobDownloadTicket.Url);
		}
	}

	_gotDownload(cb, e, resp) {
		if (e) {
			cb(e);
			return;
		}
		var uri = "data:application/octet-stream;base64," + resp.toString('base64');
		cb(undefined, uri);
	}

	download(blobLinkString, cb) {
		var req = new LDGetDownloadTicketRequest();
		req.BlobLinkString = blobLinkString;

		this._client.msgCall(req, this._doDownload.bind(this, cb));
	}

	_doDownload(cb, e, resp) {
		if (e) {
			cb(e);
			return;
		}

		var p = Url.parse(resp.BlobDownloadTicket.Url);
		var options = {
			protocol: p.protocol,
			hostname: p.hostname,
			port: p.port,
			path: p.path,
			headers: resp.BlobDownloadTicket.Headers,
			method: 'GET',
			withCredentials: false,
			responseType: 'arraybuffer'
		};

		if (!options.port) options.port = p.protocol == "https:" ? 443 : 80;
		var invoker = p.protocol == "https:" ? https : http;
		var req = invoker.request(options, this._gotDownloadResponse.bind(this, cb));
		req.on('error', function(e) {
			cb(e);
		});
		req.end();
	}

	downloadUrl(link, cb) {
		var p = Url.parse(link);
		var options = {
			protocol: p.protocol,
			hostname: p.hostname,
			port: p.port,
			path: p.path,
			method: 'GET',
			withCredentials: false,
			responseType: 'arraybuffer'
		};

		var invoker = p.protocol == "https:" ? https : http;
		var _responded = false;
		var req = invoker.request(options, (resp) => {
			if (resp.statusCode != 200) {
				if (!_responded) {
					_responded = true;
					cb(resp.statusCode ? resp.statusCode : "BrowserBlocked");
				}
				return;
			} else {
				var bufs = [];
				resp.on('data', (d) => {
					if (d.constructor == Uint8Array)
						d = new Buffer(d);
					bufs.push(d);
				});
				resp.on('end', () => {
					if (!_responded) {
						_responded = true;
						cb(undefined, Buffer.concat(bufs));
					}
				});
			}
		});
		req.on('error', function(e) {
			if (!_responded) {
				_responded = true;
				cb(e);
			}
		});
		req.end();
	}

	_gotDownloadResponse(cb, resp) {
		var _responded = false;
		if (resp.statusCode != 200) {
			if (!_responded) {
				_responded = true;
				cb(resp.statusCode ? resp.statusCode : "BrowserBlocked");
			}
			return;
		}
		var bufs = [];
		resp.on('data', function(d) {
			if (d.constructor == Uint8Array)
				d = new Buffer(d);
			bufs.push(d);
		});
		resp.on('end', () => {
			if (!_responded) {
				_responded = true;
				cb(undefined, Buffer.concat(bufs));
			}
		});
	}

	resizeImageCanvas(buf, sizes, cb) {
		var uri = "data:image/png;base64," + buf.toString('base64');
		var img = document.createElement('img');
		img.onerror = function(e) {
			cb("failed");
		}
		img.onload = function() {
			var sized = [];
			for (var i = 0; i < sizes.length; ++i) {
				var edge = sizes[i];
				var scale = edge / Math.max(img.width, img.height);
				scale = Math.min(1.0, scale);
				var canvas = document.createElement('canvas'),
					ctx = canvas.getContext('2d');
				canvas.width = scale * img.width;
				canvas.height = scale * img.height;
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				var enc = canvas.toDataURL();
				sized.push({
					data: new Buffer(enc.split(",")[1], 'base64'),
					width: canvas.width,
					height: canvas.height
				});
			}
			cb(undefined, sized);
		}
		img.src = uri;
	}

	resizeImageThingPediaPlatform(buf, sizes, cb) {
		var api = platform.getCapability('graphics-api');

		async.parallel(sizes.map((size) => {
			return function(callback) {
				var image = api.createImageFromBuffer(buf);
				image.resizeFit(size, size);
				image.toBuffer().then((buffer) => {
					var image2 = api.createImageFromBuffer(buffer);
					return image2.getSize().then((actualSize) => {
						return ({
							data: buffer,
							width: actualSize.width,
							height: actualSize.height
						});
					});
				}).nodeify(callback);
			}
		}), cb);
	}

	resizeImage(buf, sizes, cb) {
		if (typeof document !== 'undefined') {
			this.resizeImageCanvas(buf, sizes, cb);
		} else if (typeof platform !== 'undefined' &&
			platform.hasCapability('graphics-api')) {
			this.resizeImageThingPediaPlatform(buf, sizes, cb);
		} else {
			cb(new Error('Resizing is not available outside of a browser'));
		}
	}
}

module.exports = BlobUtils;