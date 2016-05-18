var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');

var crypto = require ('../lib/util/crypto');

var LDAccountDetails = require('../src/longdan/ldproto/LDAccountDetails');
var LDIdentity = require('../src/longdan/ldproto/LDIdentity');
var LDPublicKeys = require('../src/longdan/ldproto/LDPublicKeys');
var LDDeviceToClusterRequestContainer = require('../src/longdan/ldproto/LDDeviceToClusterRequestContainer');
var LDFeed = require('../src/longdan/ldproto/LDFeed');
var LDFeed = require('../src/longdan/ldproto/LDFeed');
var LDIdentityHash = require('../src/longdan/ldproto/LDIdentityHash');
var LDIdentityType = require('../src/longdan/ldproto/LDIdentityType');
var LDDeviceToClusterRpcWrapper = require('../src/longdan/ldproto/LDDeviceToClusterRpcWrapper');
var LDDeviceToClusterMessageRequestProtocol = require('../src/longdan/ldproto/LDDeviceToClusterMessageRequestProtocol');

var a = new LDAccountDetails();
a.Account = "acc";
a.Cluster = "clu";
a.Identities = [new LDIdentity()];
a.Identities[0].Type = "email";
a.Identities[0].Principal = "foo@bar.com";

assert.deepEqual(a, new LDAccountDetails(a.encode()));

var cc = { "ClusterEndpoints": { "ONE": ["http://127.0.0.1:3829"] },
		   "ClusterKeys": { "ONE": "80Qd+N2ml/Iahcd5kFfzLdT+3Kel7wS/2AwCybtGblA=" },
		   "DefaultCluster": "ONE",
		   "IdpEndpoints": ["http://127.0.0.1:4001"],
		   "IdpKey": "A2kW+bIHpCz0Xv2t7SVGPDjqXQbHPsBkFNtIhR3ruzk=" };

var ccs = new LDPublicKeys(cc);
assert.deepEqual(cc, ccs.encode());

var req = new LDDeviceToClusterRequestContainer();
req = new LDAddPendingInvitationRequest();
req.Feed = new LDFeed();
req.Feed.Account = "someone";
req.Feed.Key = crypto.createNonce();
req.IdentityHash = new LDIdentityHash();
req.IdentityHash.Type = LDIdentityType.Email;
req.IdentityHash.Hash = crypto.createNonce(16);

var wrapped = new LDDeviceToClusterRpcWrapper();
wrapped.Request = new LDDeviceToClusterRequestContainer();
wrapped.Request.Message = new LDDeviceToClusterMessageRequestProtocol();
wrapped.Request.Message.AddPendingInvitation = req;
assert.deepEqual(wrapped, new LDDeviceToClusterRpcWrapper(wrapped.encode()));
assert.deepEqual(req.makeClusterRpc(), new LDDeviceToClusterRpcWrapper(wrapped.encode()));
