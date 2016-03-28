fs = require('fs');
var assert = require('assert')
var omlib;
if (typeof window === 'undefined') {
    omlib = require('../lib/omlib');
} else {
    omlib = require('omlib');
}

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
    this._client = new om.client.Client({ instance: i, keys:om.client.LocalConfiguration });
    this._client.onInterrupted = abort;
    this._index = i;
}

Gamer.prototype.register = function()
{
    var register = new om.proto.LDRegisterWithOAuthRequest();
    register.ServiceType = "evil";
    var key = new om.proto.LDGetLinkedIdentitiesResponse();
    var identity = new om.proto.LDIdentity();
    identity.Principal = this._index + "@test.omlet.me";
    identity.Type = om.proto.LDIdentityType.Email;
    key.Identities = [identity];
    register.Key = JSON.stringify(key.encode());
    register.Scopes = ["Arcade"];

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
    var profile = new om.proto.LDSetProfileNameRequest();
    profile.Name = this._name;
    this._client.msgCall(profile, this._onsetname.bind(this));
}
Gamer.prototype._onsetname = function (e, resp) {
    console.log("Set name " + this._name);
    assert.ifError(e);
    this._client.uploadBlob(this._profileData, "image/jpeg", this._onuploadpic.bind(this));
}
Gamer.prototype._onuploadpic = function (e, resp) {
    this._picLink = resp;
    console.log("Upload pic " + this._name);
    assert.ifError(e);
    var profile = new om.proto.LDSetProfilePictureRequest();
    profile.BlobLinkString = resp;
    this._client.msgCall(profile, this._onsetpic.bind(this));
}
Gamer.prototype._onsetpic = function (e, resp) {
    console.log("set pic " + this._name);
    assert.ifError(e);

    var d = fs.readFileSync("../../src/test/resources/screenshot" + this._index + ".jpg");
    this._client.uploadBlob(d, "image/jpeg", this._onuploadedpid.bind(this));

}

Gamer.prototype._onuploadedpid = function (e, resp) {
    console.log("uploaded vid " + this._name + " " + resp + " " + this._picLink);
    assert.ifError(e);

    var vid = new om.proto.LDPostScreenShotRequest();
    vid.Title = this._name + "'s screenshot " + Math.random();
    vid.Description = "This is a test screenshot that has simulated uploading";
    vid.BlobLinkString = resp;
    vid.ThumbnailBlobLinkString = this._picLink;
    vid.Height = 933;
    vid.Width = 1400;
    vid.PrimaryTag = new om.proto.LDPostTag();
    vid.PrimaryTag.TagType = om.proto.LDPostTagType.Game;
    vid.PrimaryTag.Tag = "com.example.android.opengl";
    vid.SecondaryTags = [];
    this._client.msgCall(vid, this._onposted.bind(this));

}
Gamer.prototype._onposted = function (e, resp) {
    console.log("posted " + this._name, resp);
    assert.ifError(e);
    this._postid = resp.PostId;
    var get = new om.proto.LDGetPostRequest();
    get.PostId = this._postid;
    this._client.msgCall(get, this._ongetpost.bind(this));

}
Gamer.prototype._ongetpost = function (e, resp) {
    console.log("got post " + this._name, resp);

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
