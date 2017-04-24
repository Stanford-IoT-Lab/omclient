var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');
fs = require('fs');

var LDRegisterWithOAuthRequest = require('../src/longdan/ldproto/LDRegisterWithOAuthRequest');
var LDGetLinkedIdentitiesResponse = require('../src/longdan/ldproto/LDGetLinkedIdentitiesResponse');
var LDIdentity = require('../src/longdan/ldproto/LDIdentity');
var LDIdentityType = require('../src/longdan/ldproto/LDIdentityType');
var LDSetProfileNameRequest = require('../src/longdan/ldproto/LDSetProfileNameRequest');
var LDSetProfilePictureRequest = require('../src/longdan/ldproto/LDSetProfilePictureRequest');
var LDOptInForAllGamesChallengesRequest = require('../src/longdan/ldproto/LDOptInForAllGamesChallengesRequest');
var LDReportScoreRequest = require('../src/longdan/ldproto/LDReportScoreRequest');
var LDItemId = require('../src/longdan/ldproto/LDItemId');
var LDStoreItemType = require('../src/longdan/ldproto/LDStoreItemType');

omlib.init();

var res = fs.readdirSync("gamers");
var gamers = [];
for (var i in res) {
    var f = res[i];
    if (f.indexOf(".jpg") == -1)
        continue;
    gamers.push(f.substring(0, f.length - 4));
}
function Gamer(name, i) {
    this._name = name;
    this._profileData = fs.readFileSync("gamers/" + name + ".jpg");
    this._client = omlib._ldClient;
    this._client.onInterrupted = abort;
    this._index = i;
}

Gamer.prototype.register = function()
{
    var register = new LDRegisterWithOAuthRequest();
    register.ServiceType = "evil";
    var key = new LDGetLinkedIdentitiesResponse();
    var identity = new LDIdentity();
    identity.Principal = this._index + "@test.omlet.me";
    identity.Type = LDIdentityType.Email;
    key.Identities = [identity];
    register.Key = JSON.stringify(key.encode());

    if (this._client.account) {
        this._onsignedup();
    } else {
        this._client.onSignedUp = this._onsignedup.bind(this);
        this._client.idpCall(register, this._onregister.bind(this));
    }
    this._client.enable();
}
Gamer.prototype._onregister = function(e, resp) {
    console.log(resp);
    assert.ifError(e);
}
Gamer.prototype._onsignedup = function () {
    console.log("Signed up " + this._name);
    var profile = new LDSetProfileNameRequest();
    profile.Name = this._name;
    this._client.msgCall(profile, this._onsetname.bind(this));
}
Gamer.prototype._onsetname = function (e, resp) {
    console.log("Set name " + this._name);
    assert.ifError(e);
    this._client.uploadBlob(this._profileData, "image/jpeg", this._onuploadpic.bind(this));
}
Gamer.prototype._onuploadpic = function (e, resp) {
    console.log("Upload pic " + this._name);
    assert.ifError(e);
    var profile = new LDSetProfilePictureRequest();
    profile.BlobLinkString = resp;
    this._client.msgCall(profile, this._onsetpic.bind(this));
}
Gamer.prototype._onsetpic = function (e, resp) {
    console.log("set pic " + this._name);
    assert.ifError(e);

    var optin = new LDOptInForAllGamesChallengesRequest();
    optin.OptIn = true;
    this._client.msgCall(optin, this._onoptin.bind(this));

}
Gamer.prototype._onoptin = function (e, resp) {
    console.log("opted in to gaming " + this._name);
    assert.ifError(e);

    var newScore = new LDReportScoreRequest();
    newScore.GameId = new LDItemId();
    newScore.GameId.ItemType = LDStoreItemType.App;
    newScore.GameId.Creator = "system";
    newScore.GameId.GivenId = "mytestgame";
    newScore.Score = Math.floor((Math.random() * 10) + 1);
    newScore.Latitude = 37;
    newScore.Longitude = -122;
    newScore.GameScoreboard = "default";
    this._client.msgCall(newScore, this._onsubmittedscore.bind(this));
}
Gamer.prototype._onsubmittedscore = function (e, resp) {
    console.log("submitted score " + this._name);
    assert.ifError(e);

    this._ondone();
}

//TODO: add more callbacks here
//finally invoke this
Gamer.prototype._ondone = function(e, resp) {
    this._client.onInterrupted = null;
    this._client.disable();
}

function abort(cause) {
    console.log("aborting because connection was severed");
    throw cause;
}
for (var i = 0; i < gamers.length; ++i) {
    var g = new Gamer(gamers[i], i);
    g.register();
}