var assert = require('assert')
var omlib = (typeof window === 'undefined') ? require('../lib/omlib') : require('omlib');
fs = require('fs');

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
    this._client = new omlib._ldClient;
    this._client.onInterrupted = abort;
    this._index = i;
}

Gamer.prototype.register = function()
{
    var register = new omlib._proto.LDRegisterWithOAuthRequest();
    register.ServiceType = "evil";
    var key = new omlib._proto.LDGetLinkedIdentitiesResponse();
    var identity = new omlib._proto.LDIdentity();
    identity.Principal = this._index + "@test.omlet.me";
    identity.Type = omlib._proto.LDIdentityType.Email;
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
    var profile = new omlib._proto.LDSetProfileNameRequest();
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
    var profile = new omlib._proto.LDSetProfilePictureRequest();
    profile.BlobLinkString = resp;
    this._client.msgCall(profile, this._onsetpic.bind(this));
}
Gamer.prototype._onsetpic = function (e, resp) {
    console.log("set pic " + this._name);
    assert.ifError(e);

    var d = fs.readFileSync("../../src/test/resources/video.mp4");
    this._client.uploadBlob(d, "video/mp4", this._onuploadedvid.bind(this));

}
Gamer.prototype._onuploadedvid = function (e, resp) {
    console.log("uploaded vid " + this._name + " " + resp + " " + this._picLink);
    assert.ifError(e);

    var vid = new omlib._proto.LDPostVideoRequest();
    vid.Title = this._name + "'s Video " + Math.random();
    vid.Description = "This is a test video that has simulated uploading";
    vid.BlobLinkString = resp;
    vid.ThumbnailBlobLinkString = this._picLink;
    vid.Duration = 5;
    vid.Height = 720;
    vid.Width = 480;
    vid.PrimaryTag = new omlib._proto.LDPostTag();
    vid.PrimaryTag.TagType = omlib._proto.LDPostTagType.Game;
    vid.PrimaryTag.Tag = "com.example.android.opengl";
    
    vid.SecondaryTags = [];
    this._client.msgCall(vid, this._onposted.bind(this));

}
Gamer.prototype._onposted = function (e, resp) {
    console.log("posted " + this._name, resp);
    assert.ifError(e);
    this._postid = resp.PostId;
    var get = new omlib._proto.LDGetPostRequest();
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