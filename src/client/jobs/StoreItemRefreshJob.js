var OMFeed = require("../model/OMFeed");
var ObjTypes = require("../model/ObjTypes");
var async = require('async');
var crypto = require("../../util/crypto");

var LDItemId = require('../../longdan/ldproto/LDItemId');
var LDGetItemInfoRequest = require('../../longdan/ldproto/LDGetItemInfoRequest');
var LDStoreItemType = require('../../longdan/ldproto/LDStoreItemType');

class StoreItemRefreshJob {

	constructor(itemId) {
		this.type = "StoreItemRefreshJob";
		this._itemId = itemId;
	}

	requestAboutToBeScheduled(client) {

	}

	requestCommitted(client) {

	}

	perform(client, jobCallback) {
    if (this._itemId) {
      let req = new LDGetItemInfoRequest();
      req.ItemId = this._itemId;
      client.msgCall(req, (err, resp, req) => {
				jobCallback(err, resp);
			});
    }
	}

	requestComplete(client, err, resp) {
    if (!this._itemId) {
      return;
    }

    client.store.getStickers((stickerDb) => {
      let thumbnailHash;
      // only handle sticker pack for now
  		if (LDStoreItemType.StickerPack === this._itemId.ItemType) {
        let stickerPackInfo = resp.ItemInfoContainer.StickerPackInfo;
        let key = JSON.stringify(this._itemId);
        let info = stickerPackInfo.UserMutableContainer.StickerPackInfoUserMutable;
        let stickerJson = JSON.stringify(stickerPackInfo);
        let sticker = info.Stickers[0];
        thumbnailHash = client.blob.ensurePermanentBlobSource(sticker.ThumbnailDecryptedHash, sticker.ThumbnailBlobLinkString, null);

        if (info.PortraitPreviewPackLink)
          client.blob.ensurePermanentBlobSource(info.PortraitEncryptedPreviewHash, info.PortraitPreviewPackLink, null);
        if (info.LandscapePreviewPackLink)
          client.blob.ensurePermanentBlobSource(info.LandscapeEncryptedPreviewHash, info.LandscapePreviewPackLink, null);

        info.Stickers.forEach(s => {
          if (s.ThumbnailBlobLinkString) {
            client.blob.ensurePermanentBlobSource(s.ThumbnailDecryptedHash, s.ThumbnailBlobLinkString, null);
          }
          if (s.FullsizeBlobLinkString ) {
            client.blob.ensurePermanentBlobSource(s.FullsizeDecryptedHash, s.FullsizeBlobLinkString, null);
          }
        });

        stickerDb.getObjectByKey(key, (existing) => {
          if (existing) {
            if (thumbnailHash !== existing.thumbnailHash
                || stickerJson !== existing.json) {
              existing.thumbnailHash = thumbnailHash;
              this._setInfo(stickerPackInfo, existing, stickerJson, info);
              stickerDb.update(existing, () => {});
            }
					} else {
            let stickerObj = {};
            stickerObj.itemId = key;
            stickerObj.thumbnailHash = thumbnailHash;
            this._setInfo(stickerPackInfo, stickerObj, stickerJson, info);
						stickerDb.insert(stickerObj, () => {});
					}
        });
      }
    });
	}

  _setInfo(stickerPackInfo, sticker, stickerJson, info) {
    sticker.json = stickerJson;
    sticker.info = info;
    let tags = stickerPackInfo.UserMutableContainer.StickerPackInfoUserMutable.Tags;
    if (tags) {
      tags.forEach((tag) => {
        if ('chattable' === tag) {
          sticker.chattable = true;
        } else if ('placeable' === tag) {
          sticker.placeable = true;
        }
      });
    } else {
      sticker.chattable = true;
      sticker.placeable = true;
    }
  }
}

module.exports = StoreItemRefreshJob;
