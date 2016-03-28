var assert = require('assert')
var omlib;
if (typeof window === 'undefined') {
    omlib = require('../lib/omlib');
} else {
    omlib = require('omlib');
}
var crypto = require ('../lib/util/crypto');

var a = new omlib._proto.LDAccountDetails();
a.Account = "acc";
a.Cluster = "clu";
a.Identities = [new omlib._proto.LDIdentity()];
a.Identities[0].Type = "email";
a.Identities[0].Principal = "foo@bar.com";

assert.deepEqual(a, new omlib._proto.LDAccountDetails(a.encode()));

var cc = { "ClusterEndpoints": { "ONE": ["http://127.0.0.1:3829"] },
		   "ClusterKeys": { "ONE": "80Qd+N2ml/Iahcd5kFfzLdT+3Kel7wS/2AwCybtGblA=" },
		   "DefaultCluster": "ONE",
		   "IdpEndpoints": ["http://127.0.0.1:4001"],
		   "IdpKey": "A2kW+bIHpCz0Xv2t7SVGPDjqXQbHPsBkFNtIhR3ruzk=" };

var ccs = new omlib._proto.LDPublicKeys(cc);
assert.deepEqual(cc, ccs.encode());

var req = new omlib._proto.LDDeviceToClusterRequestContainer();
req = new omlib._proto.LDAddPendingInvitationRequest();
req.Feed = new omlib._proto.LDFeed();
req.Feed.Account = "someone";
req.Feed.Key = crypto.createNonce();
req.IdentityHash = new omlib._proto.LDIdentityHash();
req.IdentityHash.Type = omlib._proto.LDIdentityType.Email;
req.IdentityHash.Hash = crypto.createNonce(16);

var wrapped = new omlib._proto.LDDeviceToClusterRpcWrapper();
wrapped.Request = new omlib._proto.LDDeviceToClusterRequestContainer();
wrapped.Request.Message = new omlib._proto.LDDeviceToClusterMessageRequestProtocol();
wrapped.Request.Message.AddPendingInvitation = req;
assert.deepEqual(wrapped, new omlib._proto.LDDeviceToClusterRpcWrapper(wrapped.encode()));
assert.deepEqual(req.makeClusterRpc(), new omlib._proto.LDDeviceToClusterRpcWrapper(wrapped.encode()));
