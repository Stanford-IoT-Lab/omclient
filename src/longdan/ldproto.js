var _;
function b(e){
	if(!e)return;
	var $=this;
}
_=b.prototype;
_.__type="LDJSONLoggable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}
function a(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.SequenceNumber=e['#'];
	if(e['@']!=null)$.Context=new c(e['@']);
	if(e['*']!=null)$.HelloChallenge=new e(e['*']);
	if(e['+']!=null)$.CompleteChallenge=new f(e['+']);
	if(e['-']!=null)$.Ping=new g(e['-']);
}
a.prototype=new b();
a.prototype.constructor = a;
_=a.prototype;
_.__type="LDRequestContainerBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.SequenceNumber!=null)o['#']=$.SequenceNumber;
	if($.Context!=null)o['@']=$.Context.encode();
	if($.HelloChallenge!=null)o['*']=$.HelloChallenge.encode();
	if($.CompleteChallenge!=null)o['+']=$.CompleteChallenge.encode();
	if($.Ping!=null)o['-']=$.Ping.encode();
	return o;
}
_.SequenceNumber=null;
_.Context=null;
_.HelloChallenge=null;
_.CompleteChallenge=null;
_.Ping=null;
function h(e){
	a.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.Signup=new i(e['a']);
	if(e['A']!=null)$.Administrative=new j(e['A']);
}
h.prototype=new a();
h.prototype.constructor = h;
_=h.prototype;
_.__type="LDDeviceToIdpRequestContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	a.prototype.encode.call($,o);
	if($.Signup!=null)o['a']=$.Signup.encode();
	if($.Administrative!=null)o['A']=$.Administrative.encode();
	return o;
}
_.Signup=null;
_.Administrative=null;
function l(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.SequenceNumber=e['#'];
	$.ErrorCode=e['!'];
	$.ErrorDetail=e['!!'];
	if(e['*']!=null)$.HelloChallenge=new m(e['*']);
	if(e['+']!=null)$.CompleteChallenge=new n(e['+']);
	if(e['=']!=null)$.Simple=new p(e['=']);
	if(e['-']!=null)$.Ping=new q(e['-']);
}
l.prototype=new b();
l.prototype.constructor = l;
_=l.prototype;
_.__type="LDResponseContainerBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.SequenceNumber!=null)o['#']=$.SequenceNumber;
	if($.ErrorCode!=null)o['!']=$.ErrorCode;
	if($.ErrorDetail!=null)o['!!']=$.ErrorDetail;
	if($.HelloChallenge!=null)o['*']=$.HelloChallenge.encode();
	if($.CompleteChallenge!=null)o['+']=$.CompleteChallenge.encode();
	if($.Simple!=null)o['=']=$.Simple.encode();
	if($.Ping!=null)o['-']=$.Ping.encode();
	return o;
}
_.SequenceNumber=null;
_.ErrorCode=null;
_.ErrorDetail=null;
_.HelloChallenge=null;
_.CompleteChallenge=null;
_.Simple=null;
_.Ping=null;
function r(e){
	l.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.Signup=new s(e['a']);
	if(e['A']!=null)$.Administrative=new u(e['A']);
}
r.prototype=new l();
r.prototype.constructor = r;
_=r.prototype;
_.__type="LDDeviceToIdpResponseContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	l.prototype.encode.call($,o);
	if($.Signup!=null)o['a']=$.Signup.encode();
	if($.Administrative!=null)o['A']=$.Administrative.encode();
	return o;
}
_.Signup=null;
_.Administrative=null;
function v(e){
	a.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new w(e['m']);
	if(e['i']!=null)$.Inbox=new x(e['i']);
	if(e['b']!=null)$.Blob=new y(e['b']);
	if(e['c']!=null)$.Contact=new z(e['c']);
	if(e['p']!=null)$.Profile=new A(e['p']);
	if(e['a']!=null)$.AddressBook=new B(e['a']);
	if(e['oas']!=null)$.OmletAppStore=new C(e['oas']);
	if(e['d']!=null)$.Device=new D(e['d']);
	if(e['cs']!=null)$.CloudSync=new E(e['cs']);
	if(e['g']!=null)$.GameChallenge=new F(e['g']);
	if(e['s']!=null)$.Subscription=new G(e['s']);
	if(e['h']!=null)$.HighScore=new H(e['h']);
	if(e['n']!=null)$.NearbyItem=new I(e['n']);
	if(e['M']!=null)$.Misc=new J(e['M']);
	if(e['o']!=null)$.Oob=new K(e['o']);
	if(e['w']!=null)$.WallPost=new L(e['w']);
	if(e['t']!=null)$.IdentityToken=new M(e['t']);
	if(e['pc']!=null)$.PublicChat=new N(e['pc']);
	if(e['pcv']!=null)$.ProfileCardViewed=new O(e['pcv']);
	if(e['es']!=null)$.EventSummary=new P(e['es']);
	if(e['um']!=null)$.UserModeration=new Q(e['um']);
	if(e['ps']!=null)$.Presence=new R(e['ps']);
}
v.prototype=new a();
v.prototype.constructor = v;
_=v.prototype;
_.__type="LDDeviceToClusterRequestContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	a.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	if($.Inbox!=null)o['i']=$.Inbox.encode();
	if($.Blob!=null)o['b']=$.Blob.encode();
	if($.Contact!=null)o['c']=$.Contact.encode();
	if($.Profile!=null)o['p']=$.Profile.encode();
	if($.AddressBook!=null)o['a']=$.AddressBook.encode();
	if($.OmletAppStore!=null)o['oas']=$.OmletAppStore.encode();
	if($.Device!=null)o['d']=$.Device.encode();
	if($.CloudSync!=null)o['cs']=$.CloudSync.encode();
	if($.GameChallenge!=null)o['g']=$.GameChallenge.encode();
	if($.Subscription!=null)o['s']=$.Subscription.encode();
	if($.HighScore!=null)o['h']=$.HighScore.encode();
	if($.NearbyItem!=null)o['n']=$.NearbyItem.encode();
	if($.Misc!=null)o['M']=$.Misc.encode();
	if($.Oob!=null)o['o']=$.Oob.encode();
	if($.WallPost!=null)o['w']=$.WallPost.encode();
	if($.IdentityToken!=null)o['t']=$.IdentityToken.encode();
	if($.PublicChat!=null)o['pc']=$.PublicChat.encode();
	if($.ProfileCardViewed!=null)o['pcv']=$.ProfileCardViewed.encode();
	if($.EventSummary!=null)o['es']=$.EventSummary.encode();
	if($.UserModeration!=null)o['um']=$.UserModeration.encode();
	if($.Presence!=null)o['ps']=$.Presence.encode();
	return o;
}
_.Message=null;
_.Inbox=null;
_.Blob=null;
_.Contact=null;
_.Profile=null;
_.AddressBook=null;
_.OmletAppStore=null;
_.Device=null;
_.CloudSync=null;
_.GameChallenge=null;
_.Subscription=null;
_.HighScore=null;
_.NearbyItem=null;
_.Misc=null;
_.Oob=null;
_.WallPost=null;
_.IdentityToken=null;
_.PublicChat=null;
_.ProfileCardViewed=null;
_.EventSummary=null;
_.UserModeration=null;
_.Presence=null;
function S(e){
	l.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new T(e['m']);
	if(e['i']!=null)$.Inbox=new U(e['i']);
	if(e['b']!=null)$.Blob=new V(e['b']);
	if(e['c']!=null)$.Contact=new W(e['c']);
	if(e['p']!=null)$.Profile=new X(e['p']);
	if(e['a']!=null)$.AddressBook=new Y(e['a']);
	if(e['oas']!=null)$.OmletAppStore=new Z(e['oas']);
	if(e['d']!=null)$.Device=new a_(e['d']);
	if(e['cs']!=null)$.CloudSync=new aa(e['cs']);
	if(e['g']!=null)$.GameChallenge=new ab(e['g']);
	if(e['s']!=null)$.Subscription=new ac(e['s']);
	if(e['h']!=null)$.HighScore=new ad(e['h']);
	if(e['n']!=null)$.NearbyItem=new ae(e['n']);
	if(e['M']!=null)$.Misc=new af(e['M']);
	if(e['o']!=null)$.Oob=new ag(e['o']);
	if(e['w']!=null)$.WallPost=new ah(e['w']);
	if(e['t']!=null)$.IdentityToken=new ai(e['t']);
	if(e['pc']!=null)$.PublicChat=new aj(e['pc']);
	if(e['pcv']!=null)$.ProfileCardViewed=new ak(e['pcv']);
	if(e['es']!=null)$.EventSummary=new al(e['es']);
	if(e['um']!=null)$.UserModeration=new am(e['um']);
	if(e['ps']!=null)$.Presence=new an(e['ps']);
}
S.prototype=new l();
S.prototype.constructor = S;
_=S.prototype;
_.__type="LDDeviceToClusterResponseContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	l.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	if($.Inbox!=null)o['i']=$.Inbox.encode();
	if($.Blob!=null)o['b']=$.Blob.encode();
	if($.Contact!=null)o['c']=$.Contact.encode();
	if($.Profile!=null)o['p']=$.Profile.encode();
	if($.AddressBook!=null)o['a']=$.AddressBook.encode();
	if($.OmletAppStore!=null)o['oas']=$.OmletAppStore.encode();
	if($.Device!=null)o['d']=$.Device.encode();
	if($.CloudSync!=null)o['cs']=$.CloudSync.encode();
	if($.GameChallenge!=null)o['g']=$.GameChallenge.encode();
	if($.Subscription!=null)o['s']=$.Subscription.encode();
	if($.HighScore!=null)o['h']=$.HighScore.encode();
	if($.NearbyItem!=null)o['n']=$.NearbyItem.encode();
	if($.Misc!=null)o['M']=$.Misc.encode();
	if($.Oob!=null)o['o']=$.Oob.encode();
	if($.WallPost!=null)o['w']=$.WallPost.encode();
	if($.IdentityToken!=null)o['t']=$.IdentityToken.encode();
	if($.PublicChat!=null)o['pc']=$.PublicChat.encode();
	if($.ProfileCardViewed!=null)o['pcv']=$.ProfileCardViewed.encode();
	if($.EventSummary!=null)o['es']=$.EventSummary.encode();
	if($.UserModeration!=null)o['um']=$.UserModeration.encode();
	if($.Presence!=null)o['ps']=$.Presence.encode();
	return o;
}
_.Message=null;
_.Inbox=null;
_.Blob=null;
_.Contact=null;
_.Profile=null;
_.AddressBook=null;
_.OmletAppStore=null;
_.Device=null;
_.CloudSync=null;
_.GameChallenge=null;
_.Subscription=null;
_.HighScore=null;
_.NearbyItem=null;
_.Misc=null;
_.Oob=null;
_.WallPost=null;
_.IdentityToken=null;
_.PublicChat=null;
_.ProfileCardViewed=null;
_.EventSummary=null;
_.UserModeration=null;
_.Presence=null;
function ao(e){
	if(!e)return;
	var $=this;
	if(e['ClusterEndpoints']!=null){
		$.ClusterEndpoints = {};
		var d = e['ClusterEndpoints'];
		for(var k in d) {
			var d2 = d[k];
			$.ClusterEndpoints[k]=[];
			for(var k2=0;k2<d2.length;++k2) $.ClusterEndpoints[k].push(d2[k2]);
		}
	}
	if(e['ClusterKeys']!=null){
		$.ClusterKeys = {};
		var d = e['ClusterKeys'];
		for(var k in d) $.ClusterKeys[k] = new Buffer(d[k], 'base64');
	}
	$.DefaultCluster=e['DefaultCluster'];
	if(e['IdpEndpoints']!=null){
		$.IdpEndpoints=[];
		var d = e['IdpEndpoints'];
		for(var k=0;k<d.length;++k)$.IdpEndpoints.push(d[k]);
	}
	if(e['IdpKey']!=null)$.IdpKey=new Buffer(e['IdpKey'],'base64');
	if(e['ReadOnlyEndpoints']!=null){
		$.ReadOnlyEndpoints=[];
		var d = e['ReadOnlyEndpoints'];
		for(var k=0;k<d.length;++k)$.ReadOnlyEndpoints.push(d[k]);
	}
	if(e['ReadOnlyKey']!=null)$.ReadOnlyKey=new Buffer(e['ReadOnlyKey'],'base64');
}
_=ao.prototype;
_.__type="LDPublicKeys";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ClusterEndpoints!=null) {
		o['ClusterEndpoints']={};
		var d=$.ClusterEndpoints;
		for(var k in d) {
			var d2=d[k];
			o['ClusterEndpoints'][k]=[];
			for(var k2 = 0; k2 < d2.length; ++k2) o['ClusterEndpoints'][k].push(d2[k2]);
		}
	}
	if($.ClusterKeys!=null){
		o['ClusterKeys']={};
		var d=$.ClusterKeys;
		for(var k in d)o['ClusterKeys'][k]=d[k].toString('base64');
	}
	if($.DefaultCluster!=null)o['DefaultCluster']=$.DefaultCluster;
	if($.IdpEndpoints!=null) {
		o['IdpEndpoints']=[];
		var d=$.IdpEndpoints;
		for(var k=0;k<d.length;++k) o['IdpEndpoints'].push(d[k]);
	}
	if($.IdpKey!=null)o['IdpKey']=$.IdpKey.toString('base64');
	if($.ReadOnlyEndpoints!=null) {
		o['ReadOnlyEndpoints']=[];
		var d=$.ReadOnlyEndpoints;
		for(var k=0;k<d.length;++k) o['ReadOnlyEndpoints'].push(d[k]);
	}
	if($.ReadOnlyKey!=null)o['ReadOnlyKey']=$.ReadOnlyKey.toString('base64');
	return o;
}
_.ClusterEndpoints=null;
_.ClusterKeys=null;
_.DefaultCluster=null;
_.IdpEndpoints=null;
_.IdpKey=null;
_.ReadOnlyEndpoints=null;
_.ReadOnlyKey=null;
function ap(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
ap.prototype=new b();
ap.prototype.constructor = ap;
_=ap.prototype;
_.__type="LDSynchronizedMessageBody";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function aq(e){
	ap.call(this,e);
	if(!e)return;
	var $=this;
	$.Acceptance=e['a'];
}
aq.prototype=new ap();
aq.prototype.constructor = aq;
_=aq.prototype;
_.__type="LDAcceptanceChange";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	ap.prototype.encode.call($,o);
	if($.Acceptance!=null)o['a']=$.Acceptance;
	return o;
}
_.Acceptance=null;
function ar(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Pin=e['p'];
	$.Expiration=e['e'];
	$.Latitude=e['a'];
	$.Longitude=e['g'];
	$.Radius=e['r'];
	$.Country=e['c'];
	$.BroadcasterAccount=e['b'];
}
ar.prototype=new b();
ar.prototype.constructor = ar;
_=ar.prototype;
_.__type="LDBroadcastSettings";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Pin!=null)o['p']=$.Pin;
	if($.Expiration!=null)o['e']=$.Expiration;
	if($.Latitude!=null)o['a']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.Radius!=null)o['r']=$.Radius;
	if($.Country!=null)o['c']=$.Country;
	if($.BroadcasterAccount!=null)o['b']=$.BroadcasterAccount;
	return o;
}
_.Pin=null;
_.Expiration=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
_.Country=null;
_.BroadcasterAccount=null;
function at(e){
	if(!e)return;
	var $=this;
	$.Account=e['aa'];
	$.ProfileName=e['an'];
	$.ProfileThumbnailLink=e['ap'];
	$.IntentLink=e['l'];
	$.Pin=e['p'];
	if(e['U']!=null)$.AppId=new Buffer(e['U'],'base64');
	if(e['ad']!=null)$.AppDetails=new au(e['ad']);
	$.MobileOS=e['mo'];
}
_=at.prototype;
_.__type="LDAddMeInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Account!=null)o['aa']=$.Account;
	if($.ProfileName!=null)o['an']=$.ProfileName;
	if($.ProfileThumbnailLink!=null)o['ap']=$.ProfileThumbnailLink;
	if($.IntentLink!=null)o['l']=$.IntentLink;
	if($.Pin!=null)o['p']=$.Pin;
	if($.AppId!=null)o['U']=$.AppId.toString('base64');
	if($.AppDetails!=null)o['ad']=$.AppDetails.encode();
	if($.MobileOS!=null)o['mo']=$.MobileOS;
	return o;
}
_.Account=null;
_.ProfileName=null;
_.ProfileThumbnailLink=null;
_.IntentLink=null;
_.Pin=null;
_.AppId=null;
_.AppDetails=null;
_.MobileOS=null;
function av(e){
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Pin=e['p'];
	$.FeedName=e['n'];
	$.FeedThumbnailLink=e['td'];
	$.IntentLink=e['l'];
	$.AdderAccount=e['aa'];
	$.AdderName=e['an'];
	$.AdderThumbnailLink=e['ap'];
	if(e['ad']!=null)$.AppDetails=new au(e['ad']);
	$.MobileOS=e['mo'];
}
_=av.prototype;
_.__type="LDJoinFeedInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Pin!=null)o['p']=$.Pin;
	if($.FeedName!=null)o['n']=$.FeedName;
	if($.FeedThumbnailLink!=null)o['td']=$.FeedThumbnailLink;
	if($.IntentLink!=null)o['l']=$.IntentLink;
	if($.AdderAccount!=null)o['aa']=$.AdderAccount;
	if($.AdderName!=null)o['an']=$.AdderName;
	if($.AdderThumbnailLink!=null)o['ap']=$.AdderThumbnailLink;
	if($.AppDetails!=null)o['ad']=$.AppDetails.encode();
	if($.MobileOS!=null)o['mo']=$.MobileOS;
	return o;
}
_.Feed=null;
_.Pin=null;
_.FeedName=null;
_.FeedThumbnailLink=null;
_.IntentLink=null;
_.AdderAccount=null;
_.AdderName=null;
_.AdderThumbnailLink=null;
_.AppDetails=null;
_.MobileOS=null;
function ax(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.EnabledTime=e['t'];
}
ax.prototype=new b();
ax.prototype.constructor = ax;
_=ax.prototype;
_.__type="LDFeatureSetting";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.EnabledTime!=null)o['t']=$.EnabledTime;
	return o;
}
_.EnabledTime=null;
function ay(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['q']!=null)$.Request=new h(e['q']);
	if(e['r']!=null)$.Response=new r(e['r']);
}
ay.prototype=new b();
ay.prototype.constructor = ay;
_=ay.prototype;
_.__type="LDDeviceToIdpRpcWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Request!=null)o['q']=$.Request.encode();
	if($.Response!=null)o['r']=$.Response.encode();
	return o;
}
_.Request=null;
_.Response=null;
function az(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['q']!=null)$.Request=new v(e['q']);
	if(e['r']!=null)$.Response=new S(e['r']);
}
az.prototype=new b();
az.prototype.constructor = az;
_=az.prototype;
_.__type="LDDeviceToClusterRpcWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Request!=null)o['q']=$.Request.encode();
	if($.Response!=null)o['r']=$.Response.encode();
	return o;
}
_.Request=null;
_.Response=null;
function c(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.DeviceId=new Buffer(e['b'],'base64');
	if(e['r']!=null)$.RootRequestId=new Buffer(e['r'],'base64');
	if(e['i']!=null)$.RequestId=new Buffer(e['i'],'base64');
	$.RequestingAccount=e['a'];
	$.SourceCluster=e['c'];
	$.ForwardedFromNode=e['f'];
	$.WriteSecure=e['s'];
	$.RootIpAddress=e['l'];
	if(e['A']!=null)$.AppId=new Buffer(e['A'],'base64');
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
	$.PackageId=e['P'];
}
c.prototype=new b();
c.prototype.constructor = c;
_=c.prototype;
_.__type="LDRpcContext";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.DeviceId!=null)o['b']=$.DeviceId.toString('base64');
	if($.RootRequestId!=null)o['r']=$.RootRequestId.toString('base64');
	if($.RequestId!=null)o['i']=$.RequestId.toString('base64');
	if($.RequestingAccount!=null)o['a']=$.RequestingAccount;
	if($.SourceCluster!=null)o['c']=$.SourceCluster;
	if($.ForwardedFromNode!=null)o['f']=$.ForwardedFromNode;
	if($.WriteSecure!=null)o['s']=$.WriteSecure;
	if($.RootIpAddress!=null)o['l']=$.RootIpAddress;
	if($.AppId!=null)o['A']=$.AppId.toString('base64');
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	if($.PackageId!=null)o['P']=$.PackageId;
	return o;
}
_.DeviceId=null;
_.RootRequestId=null;
_.RequestId=null;
_.RequestingAccount=null;
_.SourceCluster=null;
_.ForwardedFromNode=null;
_.WriteSecure=null;
_.RootIpAddress=null;
_.AppId=null;
_.Scopes=null;
_.PackageId=null;
function e(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['e']!=null)$.EphmeralKey=new Buffer(e['e'],'base64');
	if(e['k']!=null)$.SourceKey=new Buffer(e['k'],'base64');
	if(e['c']!=null)$.DestinationChallenge=new Buffer(e['c'],'base64');
	if(e['a']!=null)$.ApiKey=new Buffer(e['a'],'base64');
}
e.prototype=new b();
e.prototype.constructor = e;
_=e.prototype;
_.__type="LDHelloChallengeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.EphmeralKey!=null)o['e']=$.EphmeralKey.toString('base64');
	if($.SourceKey!=null)o['k']=$.SourceKey.toString('base64');
	if($.DestinationChallenge!=null)o['c']=$.DestinationChallenge.toString('base64');
	if($.ApiKey!=null)o['a']=$.ApiKey.toString('base64');
	return o;
}
_.EphmeralKey=null;
_.SourceKey=null;
_.DestinationChallenge=null;
_.ApiKey=null;
function f(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null)$.SourceResponse=new Buffer(e['r'],'base64');
	$.Type=e['t'];
	$.Manufacturer=e['m'];
	$.Model=e['d'];
	$.OsVersion=e['o'];
	$.ClientVersion=e['v'];
	$.Locale=e['l'];
	if(e['c']!=null)$.AppChallengeResponse=new Buffer(e['c'],'base64');
	$.System=e['s'];
	$.PackageId=e['p'];
	$.OmlibVersion=e['y'];
	$.PackageVersion=e['z'];
	$.PushReceivedSinceLastConnection=e['pr'];
}
f.prototype=new b();
f.prototype.constructor = f;
_=f.prototype;
_.__type="LDCompleteChallengeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.SourceResponse!=null)o['r']=$.SourceResponse.toString('base64');
	if($.Type!=null)o['t']=$.Type;
	if($.Manufacturer!=null)o['m']=$.Manufacturer;
	if($.Model!=null)o['d']=$.Model;
	if($.OsVersion!=null)o['o']=$.OsVersion;
	if($.ClientVersion!=null)o['v']=$.ClientVersion;
	if($.Locale!=null)o['l']=$.Locale;
	if($.AppChallengeResponse!=null)o['c']=$.AppChallengeResponse.toString('base64');
	if($.System!=null)o['s']=$.System;
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.OmlibVersion!=null)o['y']=$.OmlibVersion;
	if($.PackageVersion!=null)o['z']=$.PackageVersion;
	if($.PushReceivedSinceLastConnection!=null)o['pr']=$.PushReceivedSinceLastConnection;
	return o;
}
_.SourceResponse=null;
_.Type=null;
_.Manufacturer=null;
_.Model=null;
_.OsVersion=null;
_.ClientVersion=null;
_.Locale=null;
_.AppChallengeResponse=null;
_.System=null;
_.PackageId=null;
_.OmlibVersion=null;
_.PackageVersion=null;
_.PushReceivedSinceLastConnection=null;
function g(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.NextPingDelayMs=e['n'];
	$.LastRtt=e['l'];
}
g.prototype=new b();
g.prototype.constructor = g;
_=g.prototype;
_.__type="LDPingRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.NextPingDelayMs!=null)o['n']=$.NextPingDelayMs;
	if($.LastRtt!=null)o['l']=$.LastRtt;
	return o;
}
_.NextPingDelayMs=null;
_.LastRtt=null;
function aA(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
aA.prototype=new b();
aA.prototype.constructor = aA;
_=aA.prototype;
_.__type="LDRequestProtocolBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function i(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null)$.RegisterWithTokenRequest=new aB(e['r']);
	if(e['c']!=null)$.ConfirmTokenRequest=new aC(e['c']);
	if(e['o']!=null)$.RegisterWithOAuthRequest=new aD(e['o']);
	if(e['i']!=null)$.GetLinkedIdentitiesRequest=new aE(e['i']);
	if(e['l']!=null)$.CheckLinkedIdentityRequest=new aF(e['l']);
	if(e['u']!=null)$.UnlinkIdentityRequest=new aG(e['u']);
	if(e['O']!=null)$.LinkOmletIdentityRequest=new aH(e['O']);
	if(e['s']!=null)$.GetAppSigninLinkRequest=new aI(e['s']);
	if(e['C']!=null)$.ConfirmAuthCodeRequest=new aJ(e['C']);
	if(e['S']!=null)$.GetSigninLinkRequest=new aK(e['S']);
	if(e['cc']!=null)$.ConfirmSigninCodeRequest=new aL(e['cc']);
	if(e['so']!=null)$.GetSSOTokenRequest=new aM(e['so']);
	if(e['cs']!=null)$.CheckSSOTokenRequest=new aN(e['cs']);
	if(e['ao']!=null)$.ConfirmSSOTokenRequest=new aO(e['ao']);
	if(e['dp']!=null)$.DeviceRegistrationStateChangedPush=new aP(e['dp']);
}
i.prototype=new aA();
i.prototype.constructor = i;
_=i.prototype;
_.__type="LDDeviceToIdpSignupRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.RegisterWithTokenRequest!=null)o['r']=$.RegisterWithTokenRequest.encode();
	if($.ConfirmTokenRequest!=null)o['c']=$.ConfirmTokenRequest.encode();
	if($.RegisterWithOAuthRequest!=null)o['o']=$.RegisterWithOAuthRequest.encode();
	if($.GetLinkedIdentitiesRequest!=null)o['i']=$.GetLinkedIdentitiesRequest.encode();
	if($.CheckLinkedIdentityRequest!=null)o['l']=$.CheckLinkedIdentityRequest.encode();
	if($.UnlinkIdentityRequest!=null)o['u']=$.UnlinkIdentityRequest.encode();
	if($.LinkOmletIdentityRequest!=null)o['O']=$.LinkOmletIdentityRequest.encode();
	if($.GetAppSigninLinkRequest!=null)o['s']=$.GetAppSigninLinkRequest.encode();
	if($.ConfirmAuthCodeRequest!=null)o['C']=$.ConfirmAuthCodeRequest.encode();
	if($.GetSigninLinkRequest!=null)o['S']=$.GetSigninLinkRequest.encode();
	if($.ConfirmSigninCodeRequest!=null)o['cc']=$.ConfirmSigninCodeRequest.encode();
	if($.GetSSOTokenRequest!=null)o['so']=$.GetSSOTokenRequest.encode();
	if($.CheckSSOTokenRequest!=null)o['cs']=$.CheckSSOTokenRequest.encode();
	if($.ConfirmSSOTokenRequest!=null)o['ao']=$.ConfirmSSOTokenRequest.encode();
	if($.DeviceRegistrationStateChangedPush!=null)o['dp']=$.DeviceRegistrationStateChangedPush.encode();
	return o;
}
_.RegisterWithTokenRequest=null;
_.ConfirmTokenRequest=null;
_.RegisterWithOAuthRequest=null;
_.GetLinkedIdentitiesRequest=null;
_.CheckLinkedIdentityRequest=null;
_.UnlinkIdentityRequest=null;
_.LinkOmletIdentityRequest=null;
_.GetAppSigninLinkRequest=null;
_.ConfirmAuthCodeRequest=null;
_.GetSigninLinkRequest=null;
_.ConfirmSigninCodeRequest=null;
_.GetSSOTokenRequest=null;
_.CheckSSOTokenRequest=null;
_.ConfirmSSOTokenRequest=null;
_.DeviceRegistrationStateChangedPush=null;
function j(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.UnblockIdentity=new aQ(e['u']);
	if(e['e']!=null)$.GetEmailLoginLink=new aR(e['e']);
	if(e['a']!=null)$.GetDetailsByAccount=new aS(e['a']);
	if(e['i']!=null)$.GetDetailsByIdentity=new aT(e['i']);
	if(e['I']!=null)$.GetIdentityRecordsRequest=new aU(e['I']);
	if(e['f']!=null)$.ListFlaggedUsers=new aV(e['f']);
	if(e['n']!=null)$.ChangeUserName=new aW(e['n']);
	if(e['p']!=null)$.ChangeUserPicture=new aX(e['p']);
	if(e['g']!=null)$.DisableGameChallenge=new aY(e['g']);
	if(e['l']!=null)$.LogUserOut=new aZ(e['l']);
	if(e['d']!=null)$.GetDeviceRecords=new b_(e['d']);
	if(e['ds']!=null)$.DeleteScheduledJobRequest=new ba(e['ds']);
	if(e['cf']!=null)$.CreateCountryWideFeedRequest=new bb(e['cf']);
	if(e['bu']!=null)$.BanUserRequest=new bc(e['bu']);
	if(e['uu']!=null)$.UnbanUserRequest=new bd(e['uu']);
	if(e['bua']!=null)$.BanUserFromAppRequest=new be(e['bua']);
	if(e['uua']!=null)$.UnbanUserFromAppRequest=new bf(e['uua']);
	if(e['blu']!=null)$.BlockUserRequest=new bg(e['blu']);
	if(e['gp']!=null)$.GetPermissionsRequest=new bh(e['gp']);
}
j.prototype=new aA();
j.prototype.constructor = j;
_=j.prototype;
_.__type="LDDeviceToIdpAdministrativeRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.UnblockIdentity!=null)o['u']=$.UnblockIdentity.encode();
	if($.GetEmailLoginLink!=null)o['e']=$.GetEmailLoginLink.encode();
	if($.GetDetailsByAccount!=null)o['a']=$.GetDetailsByAccount.encode();
	if($.GetDetailsByIdentity!=null)o['i']=$.GetDetailsByIdentity.encode();
	if($.GetIdentityRecordsRequest!=null)o['I']=$.GetIdentityRecordsRequest.encode();
	if($.ListFlaggedUsers!=null)o['f']=$.ListFlaggedUsers.encode();
	if($.ChangeUserName!=null)o['n']=$.ChangeUserName.encode();
	if($.ChangeUserPicture!=null)o['p']=$.ChangeUserPicture.encode();
	if($.DisableGameChallenge!=null)o['g']=$.DisableGameChallenge.encode();
	if($.LogUserOut!=null)o['l']=$.LogUserOut.encode();
	if($.GetDeviceRecords!=null)o['d']=$.GetDeviceRecords.encode();
	if($.DeleteScheduledJobRequest!=null)o['ds']=$.DeleteScheduledJobRequest.encode();
	if($.CreateCountryWideFeedRequest!=null)o['cf']=$.CreateCountryWideFeedRequest.encode();
	if($.BanUserRequest!=null)o['bu']=$.BanUserRequest.encode();
	if($.UnbanUserRequest!=null)o['uu']=$.UnbanUserRequest.encode();
	if($.BanUserFromAppRequest!=null)o['bua']=$.BanUserFromAppRequest.encode();
	if($.UnbanUserFromAppRequest!=null)o['uua']=$.UnbanUserFromAppRequest.encode();
	if($.BlockUserRequest!=null)o['blu']=$.BlockUserRequest.encode();
	if($.GetPermissionsRequest!=null)o['gp']=$.GetPermissionsRequest.encode();
	return o;
}
_.UnblockIdentity=null;
_.GetEmailLoginLink=null;
_.GetDetailsByAccount=null;
_.GetDetailsByIdentity=null;
_.GetIdentityRecordsRequest=null;
_.ListFlaggedUsers=null;
_.ChangeUserName=null;
_.ChangeUserPicture=null;
_.DisableGameChallenge=null;
_.LogUserOut=null;
_.GetDeviceRecords=null;
_.DeleteScheduledJobRequest=null;
_.CreateCountryWideFeedRequest=null;
_.BanUserRequest=null;
_.UnbanUserRequest=null;
_.BanUserFromAppRequest=null;
_.UnbanUserFromAppRequest=null;
_.BlockUserRequest=null;
_.GetPermissionsRequest=null;
function m(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.SourceChallenge=new Buffer(e['c'],'base64');
	if(e['r']!=null)$.DestinationResponse=new Buffer(e['r'],'base64');
}
m.prototype=new b();
m.prototype.constructor = m;
_=m.prototype;
_.__type="LDHelloChallengeResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.SourceChallenge!=null)o['c']=$.SourceChallenge.toString('base64');
	if($.DestinationResponse!=null)o['r']=$.DestinationResponse.toString('base64');
	return o;
}
_.SourceChallenge=null;
_.DestinationResponse=null;
function n(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.LocationIndicator=e['l'];
}
n.prototype=new b();
n.prototype.constructor = n;
_=n.prototype;
_.__type="LDCompleteChallengeResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.LocationIndicator!=null)o['l']=$.LocationIndicator;
	return o;
}
_.LocationIndicator=null;
function p(e){
	if(!e)return;
	var $=this;
	if(e['v']!=null)$.Value=e['v'];
}
_=p.prototype;
_.__type="LDSimpleResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Value!=null)o['v']=$.Value;
	return o;
}
_.Value=null;
function q(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ObservedIp=e['i'];
	$.UtcMillis=e['t'];
}
q.prototype=new b();
q.prototype.constructor = q;
_=q.prototype;
_.__type="LDPingResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ObservedIp!=null)o['i']=$.ObservedIp;
	if($.UtcMillis!=null)o['t']=$.UtcMillis;
	return o;
}
_.ObservedIp=null;
_.UtcMillis=null;
function bi(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
bi.prototype=new b();
bi.prototype.constructor = bi;
_=bi.prototype;
_.__type="LDResponseProtocolBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function s(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AccountDetailsResponse=new bj(e['a']);
	if(e['i']!=null)$.GetLinkedIdentitiesResponse=new bk(e['i']);
	if(e['s']!=null)$.GetAppSigninLinkResponse=new bl(e['s']);
	if(e['S']!=null)$.GetSigninLinkResponse=new bm(e['S']);
	if(e['c']!=null)$.CheckSSOTokenResponse=new bn(e['c']);
}
s.prototype=new bi();
s.prototype.constructor = s;
_=s.prototype;
_.__type="LDDeviceToIdpSignupResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.AccountDetailsResponse!=null)o['a']=$.AccountDetailsResponse.encode();
	if($.GetLinkedIdentitiesResponse!=null)o['i']=$.GetLinkedIdentitiesResponse.encode();
	if($.GetAppSigninLinkResponse!=null)o['s']=$.GetAppSigninLinkResponse.encode();
	if($.GetSigninLinkResponse!=null)o['S']=$.GetSigninLinkResponse.encode();
	if($.CheckSSOTokenResponse!=null)o['c']=$.CheckSSOTokenResponse.encode();
	return o;
}
_.AccountDetailsResponse=null;
_.GetLinkedIdentitiesResponse=null;
_.GetAppSigninLinkResponse=null;
_.GetSigninLinkResponse=null;
_.CheckSSOTokenResponse=null;
function u(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AccountDetailsResponse=new bj(e['a']);
	if(e['I']!=null)$.GetIdentityRecordsResponse=new bo(e['I']);
	if(e['f']!=null)$.ListFlaggedUsers=new bp(e['f']);
	if(e['d']!=null)$.GetDeviceRecords=new bq(e['d']);
	if(e['gp']!=null)$.GetPermissionsResponse=new br(e['gp']);
}
u.prototype=new bi();
u.prototype.constructor = u;
_=u.prototype;
_.__type="LDDeviceToIdpAdministrativeResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.AccountDetailsResponse!=null)o['a']=$.AccountDetailsResponse.encode();
	if($.GetIdentityRecordsResponse!=null)o['I']=$.GetIdentityRecordsResponse.encode();
	if($.ListFlaggedUsers!=null)o['f']=$.ListFlaggedUsers.encode();
	if($.GetDeviceRecords!=null)o['d']=$.GetDeviceRecords.encode();
	if($.GetPermissionsResponse!=null)o['gp']=$.GetPermissionsResponse.encode();
	return o;
}
_.AccountDetailsResponse=null;
_.GetIdentityRecordsResponse=null;
_.ListFlaggedUsers=null;
_.GetDeviceRecords=null;
_.GetPermissionsResponse=null;
function w(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.CreateFeed=new bs(e['c']);
	if(e['s']!=null)$.GetMessagesSince=new bt(e['s']);
	if(e['b']!=null)$.GetMessagesBefore=new bu(e['b']);
	if(e['T']!=null)$.GetMessagesByType=new bv(e['T']);
	if(e['i']!=null)$.GetMessageById=new bw(e['i']);
	if(e['a']!=null)$.AddMessage=new bx(e['a']);
	if(e['u']!=null)$.UpdateMessage=new by(e['u']);
	if(e['o']!=null)$.OverwriteMessage=new bz(e['o']);
	if(e['d']!=null)$.DeleteMessage=new bA(e['d']);
	if(e['S']!=null)$.SubscribeFeed=new bB(e['S']);
	if(e['U']!=null)$.UnsubscribeFeed=new bC(e['U']);
	if(e['l']!=null)$.SubscribeFeedRealtime=new bD(e['l']);
	if(e['q']!=null)$.UnsubscribeFeedRealtime=new bE(e['q']);
	if(e['g']!=null)$.AddMember=new bF(e['g']);
	if(e['r']!=null)$.RemoveMember=new bG(e['r']);
	if(e['n']!=null)$.SetFeedName=new bH(e['n']);
	if(e['h']!=null)$.SetFeedThumbnail=new bI(e['h']);
	if(e['hv']!=null)$.SetFeedVideo=new bJ(e['hv']);
	if(e['L']!=null)$.SendRealtime=new bK(e['L']);
	if(e['LA']!=null)$.SendRealtimeToAccounts=new bL(e['LA']);
	if(e['f']!=null)$.AddPendingInvitation=new bM(e['f']);
	if(e['e']!=null)$.RemovePendingInvitation=new bN(e['e']);
	if(e['j']!=null)$.GetJoinFeedLink=new bO(e['j']);
	if(e['J']!=null)$.JoinFeed=new bP(e['J']);
	if(e['B']!=null)$.JoinBroadcast=new bQ(e['B']);
	if(e['x']!=null)$.DefaultAccess=new bR(e['x']);
	if(e['gf']!=null)$.GetFeedDetails=new bS(e['gf']);
	if(e['D']!=null)$.ApplyDocumentRequest=new bT(e['D']);
	if(e['p']!=null)$.MessageDeliveryPush=new bU(e['p']);
	if(e['P']!=null)$.RealtimeMessageDeliveryPush=new bV(e['P']);
	if(e['t']!=null)$.TerminatedPush=new bW(e['t']);
}
w.prototype=new aA();
w.prototype.constructor = w;
_=w.prototype;
_.__type="LDDeviceToClusterMessageRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.CreateFeed!=null)o['c']=$.CreateFeed.encode();
	if($.GetMessagesSince!=null)o['s']=$.GetMessagesSince.encode();
	if($.GetMessagesBefore!=null)o['b']=$.GetMessagesBefore.encode();
	if($.GetMessagesByType!=null)o['T']=$.GetMessagesByType.encode();
	if($.GetMessageById!=null)o['i']=$.GetMessageById.encode();
	if($.AddMessage!=null)o['a']=$.AddMessage.encode();
	if($.UpdateMessage!=null)o['u']=$.UpdateMessage.encode();
	if($.OverwriteMessage!=null)o['o']=$.OverwriteMessage.encode();
	if($.DeleteMessage!=null)o['d']=$.DeleteMessage.encode();
	if($.SubscribeFeed!=null)o['S']=$.SubscribeFeed.encode();
	if($.UnsubscribeFeed!=null)o['U']=$.UnsubscribeFeed.encode();
	if($.SubscribeFeedRealtime!=null)o['l']=$.SubscribeFeedRealtime.encode();
	if($.UnsubscribeFeedRealtime!=null)o['q']=$.UnsubscribeFeedRealtime.encode();
	if($.AddMember!=null)o['g']=$.AddMember.encode();
	if($.RemoveMember!=null)o['r']=$.RemoveMember.encode();
	if($.SetFeedName!=null)o['n']=$.SetFeedName.encode();
	if($.SetFeedThumbnail!=null)o['h']=$.SetFeedThumbnail.encode();
	if($.SetFeedVideo!=null)o['hv']=$.SetFeedVideo.encode();
	if($.SendRealtime!=null)o['L']=$.SendRealtime.encode();
	if($.SendRealtimeToAccounts!=null)o['LA']=$.SendRealtimeToAccounts.encode();
	if($.AddPendingInvitation!=null)o['f']=$.AddPendingInvitation.encode();
	if($.RemovePendingInvitation!=null)o['e']=$.RemovePendingInvitation.encode();
	if($.GetJoinFeedLink!=null)o['j']=$.GetJoinFeedLink.encode();
	if($.JoinFeed!=null)o['J']=$.JoinFeed.encode();
	if($.JoinBroadcast!=null)o['B']=$.JoinBroadcast.encode();
	if($.DefaultAccess!=null)o['x']=$.DefaultAccess.encode();
	if($.GetFeedDetails!=null)o['gf']=$.GetFeedDetails.encode();
	if($.ApplyDocumentRequest!=null)o['D']=$.ApplyDocumentRequest.encode();
	if($.MessageDeliveryPush!=null)o['p']=$.MessageDeliveryPush.encode();
	if($.RealtimeMessageDeliveryPush!=null)o['P']=$.RealtimeMessageDeliveryPush.encode();
	if($.TerminatedPush!=null)o['t']=$.TerminatedPush.encode();
	return o;
}
_.CreateFeed=null;
_.GetMessagesSince=null;
_.GetMessagesBefore=null;
_.GetMessagesByType=null;
_.GetMessageById=null;
_.AddMessage=null;
_.UpdateMessage=null;
_.OverwriteMessage=null;
_.DeleteMessage=null;
_.SubscribeFeed=null;
_.UnsubscribeFeed=null;
_.SubscribeFeedRealtime=null;
_.UnsubscribeFeedRealtime=null;
_.AddMember=null;
_.RemoveMember=null;
_.SetFeedName=null;
_.SetFeedThumbnail=null;
_.SetFeedVideo=null;
_.SendRealtime=null;
_.SendRealtimeToAccounts=null;
_.AddPendingInvitation=null;
_.RemovePendingInvitation=null;
_.GetJoinFeedLink=null;
_.JoinFeed=null;
_.JoinBroadcast=null;
_.DefaultAccess=null;
_.GetFeedDetails=null;
_.ApplyDocumentRequest=null;
_.MessageDeliveryPush=null;
_.RealtimeMessageDeliveryPush=null;
_.TerminatedPush=null;
function x(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['s']!=null)$.GetFeedState=new bX(e['s']);
	if(e['a']!=null)$.SetFeedAcceptance=new bY(e['a']);
	if(e['d']!=null)$.GetDirtyFeeds=new bZ(e['d']);
	if(e['S']!=null)$.SubscribeAccount=new c_(e['S']);
	if(e['U']!=null)$.UnsubscribeAccount=new ca(e['U']);
	if(e['r']!=null)$.RegisterPushNotificationKey=new cb(e['r']);
	if(e['m']!=null)$.MessagePush=new cc(e['m']);
	if(e['t']!=null)$.TerminatedPush=new cd(e['t']);
	if(e['b']!=null)$.SetAppleBadgeCount=new ce(e['b']);
}
x.prototype=new aA();
x.prototype.constructor = x;
_=x.prototype;
_.__type="LDDeviceToClusterInboxRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetFeedState!=null)o['s']=$.GetFeedState.encode();
	if($.SetFeedAcceptance!=null)o['a']=$.SetFeedAcceptance.encode();
	if($.GetDirtyFeeds!=null)o['d']=$.GetDirtyFeeds.encode();
	if($.SubscribeAccount!=null)o['S']=$.SubscribeAccount.encode();
	if($.UnsubscribeAccount!=null)o['U']=$.UnsubscribeAccount.encode();
	if($.RegisterPushNotificationKey!=null)o['r']=$.RegisterPushNotificationKey.encode();
	if($.MessagePush!=null)o['m']=$.MessagePush.encode();
	if($.TerminatedPush!=null)o['t']=$.TerminatedPush.encode();
	if($.SetAppleBadgeCount!=null)o['b']=$.SetAppleBadgeCount.encode();
	return o;
}
_.GetFeedState=null;
_.SetFeedAcceptance=null;
_.GetDirtyFeeds=null;
_.SubscribeAccount=null;
_.UnsubscribeAccount=null;
_.RegisterPushNotificationKey=null;
_.MessagePush=null;
_.TerminatedPush=null;
_.SetAppleBadgeCount=null;
function y(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.GetUploadTicket=new cf(e['ut']);
	if(e['mut']!=null)$.GetMultipartUploadTicket=new cg(e['mut']);
	if(e['vc']!=null)$.VerifyUploadCompleted=new ch(e['vc']);
	if(e['dt']!=null)$.GetDownloadTicket=new ci(e['dt']);
	if(e['ve']!=null)$.VerifyExistsAndPermanence=new cj(e['ve']);
}
y.prototype=new aA();
y.prototype.constructor = y;
_=y.prototype;
_.__type="LDClusterOrDeviceToClusterBlobRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetUploadTicket!=null)o['ut']=$.GetUploadTicket.encode();
	if($.GetMultipartUploadTicket!=null)o['mut']=$.GetMultipartUploadTicket.encode();
	if($.VerifyUploadCompleted!=null)o['vc']=$.VerifyUploadCompleted.encode();
	if($.GetDownloadTicket!=null)o['dt']=$.GetDownloadTicket.encode();
	if($.VerifyExistsAndPermanence!=null)o['ve']=$.VerifyExistsAndPermanence.encode();
	return o;
}
_.GetUploadTicket=null;
_.GetMultipartUploadTicket=null;
_.VerifyUploadCompleted=null;
_.GetDownloadTicket=null;
_.VerifyExistsAndPermanence=null;
function z(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['o']!=null)$.OverwriteContactsRequest=new ck(e['o']);
	if(e['r']!=null)$.RemoveContactRequest=new cl(e['r']);
	if(e['b']!=null)$.BlockContactRequest=new cm(e['b']);
	if(e['u']!=null)$.UnblockContactRequest=new cn(e['u']);
}
z.prototype=new aA();
z.prototype.constructor = z;
_=z.prototype;
_.__type="LDDeviceToClusterContactRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.OverwriteContactsRequest!=null)o['o']=$.OverwriteContactsRequest.encode();
	if($.RemoveContactRequest!=null)o['r']=$.RemoveContactRequest.encode();
	if($.BlockContactRequest!=null)o['b']=$.BlockContactRequest.encode();
	if($.UnblockContactRequest!=null)o['u']=$.UnblockContactRequest.encode();
	return o;
}
_.OverwriteContactsRequest=null;
_.RemoveContactRequest=null;
_.BlockContactRequest=null;
_.UnblockContactRequest=null;
function A(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.GetProfileDetailsRequest=new co(e['p']);
	if(e['n']!=null)$.SetNameRequest=new cp(e['n']);
	if(e['sp']!=null)$.SetProfilePictureRequest=new cq(e['sp']);
	if(e['sv']!=null)$.SetProfileVideoRequest=new cr(e['sv']);
	if(e['c']!=null)$.GetContactProfileRequest=new cs(e['c']);
	if(e['aip']!=null)$.AddItemsToProfileRequest=new ct(e['aip']);
	if(e['rip']!=null)$.RemoveItemsFromProfileRequest=new cu(e['rip']);
	if(e['afp']!=null)$.AddFeaturesToProfileRequest=new cv(e['afp']);
	if(e['rfp']!=null)$.RemoveFeaturesFromProfileRequest=new cw(e['rfp']);
	if(e['pps']!=null)$.GetProfilePublicStateRequest=new cx(e['pps']);
	if(e['ppp']!=null)$.GetProfileDetailsAndPublicStateRequest=new cy(e['ppp']);
}
A.prototype=new aA();
A.prototype.constructor = A;
_=A.prototype;
_.__type="LDDeviceToClusterProfileRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetProfileDetailsRequest!=null)o['p']=$.GetProfileDetailsRequest.encode();
	if($.SetNameRequest!=null)o['n']=$.SetNameRequest.encode();
	if($.SetProfilePictureRequest!=null)o['sp']=$.SetProfilePictureRequest.encode();
	if($.SetProfileVideoRequest!=null)o['sv']=$.SetProfileVideoRequest.encode();
	if($.GetContactProfileRequest!=null)o['c']=$.GetContactProfileRequest.encode();
	if($.AddItemsToProfileRequest!=null)o['aip']=$.AddItemsToProfileRequest.encode();
	if($.RemoveItemsFromProfileRequest!=null)o['rip']=$.RemoveItemsFromProfileRequest.encode();
	if($.AddFeaturesToProfileRequest!=null)o['afp']=$.AddFeaturesToProfileRequest.encode();
	if($.RemoveFeaturesFromProfileRequest!=null)o['rfp']=$.RemoveFeaturesFromProfileRequest.encode();
	if($.GetProfilePublicStateRequest!=null)o['pps']=$.GetProfilePublicStateRequest.encode();
	if($.GetProfileDetailsAndPublicStateRequest!=null)o['ppp']=$.GetProfileDetailsAndPublicStateRequest.encode();
	return o;
}
_.GetProfileDetailsRequest=null;
_.SetNameRequest=null;
_.SetProfilePictureRequest=null;
_.SetProfileVideoRequest=null;
_.GetContactProfileRequest=null;
_.AddItemsToProfileRequest=null;
_.RemoveItemsFromProfileRequest=null;
_.AddFeaturesToProfileRequest=null;
_.RemoveFeaturesFromProfileRequest=null;
_.GetProfilePublicStateRequest=null;
_.GetProfileDetailsAndPublicStateRequest=null;
function B(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.UploadEntriesRequest=new cz(e['u']);
	if(e['c']!=null)$.GetContactProfileRequest=new cA(e['c']);
	if(e['a']!=null)$.GetAddMeLinkRequest=new cB(e['a']);
	if(e['m']!=null)$.MutualAddContact=new cC(e['m']);
}
B.prototype=new aA();
B.prototype.constructor = B;
_=B.prototype;
_.__type="LDDeviceToClusterAddressBookRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.UploadEntriesRequest!=null)o['u']=$.UploadEntriesRequest.encode();
	if($.GetContactProfileRequest!=null)o['c']=$.GetContactProfileRequest.encode();
	if($.GetAddMeLinkRequest!=null)o['a']=$.GetAddMeLinkRequest.encode();
	if($.MutualAddContact!=null)o['m']=$.MutualAddContact.encode();
	return o;
}
_.UploadEntriesRequest=null;
_.GetContactProfileRequest=null;
_.GetAddMeLinkRequest=null;
_.MutualAddContact=null;
function C(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['cr']!=null)$.CreateItemInfoRequest=new cD(e['cr']);
	if(e['uu']!=null)$.UserUpdateItemInfoRequest=new cE(e['uu']);
	if(e['su']!=null)$.SystemUpdateItemInfoRequest=new cF(e['su']);
	if(e['ga']!=null)$.GetItemInfoRequest=new cG(e['ga']);
	if(e['re']!=null)$.ReviewItemRequest=new cH(e['re']);
	if(e['pu']!=null)$.PublishItemRequest=new cI(e['pu']);
	if(e['un']!=null)$.UnpublishItemRequest=new cJ(e['un']);
	if(e['de']!=null)$.DeleteItemRequest=new cK(e['de']);
	if(e['lc']!=null)$.ListItemsForAccountRequest=new cL(e['lc']);
	if(e['la']!=null)$.ListAllItemsRequest=new cM(e['la']);
	if(e['lp']!=null)$.ListPublishedItemsRequest=new cN(e['lp']);
	if(e['gg']!=null)$.GenerateGrantForItemRequest=new cO(e['gg']);
	if(e['gig']!=null)$.GetItemUsingGrantRequest=new cP(e['gig']);
	if(e['dihg']!=null)$.DoesItemHaveGrantRequest=new cQ(e['dihg']);
	if(e['dgfi']!=null)$.DeleteGrantForItemRequest=new cR(e['dgfi']);
	if(e['gk']!=null)$.GenerateApiKeyRequest=new cS(e['gk']);
	if(e['dk']!=null)$.DeactivateApiKeyRequest=new cT(e['dk']);
	if(e['lk']!=null)$.ListApiKeysRequest=new cU(e['lk']);
}
C.prototype=new aA();
C.prototype.constructor = C;
_=C.prototype;
_.__type="LDDeviceToClusterOmletItemStoreRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.CreateItemInfoRequest!=null)o['cr']=$.CreateItemInfoRequest.encode();
	if($.UserUpdateItemInfoRequest!=null)o['uu']=$.UserUpdateItemInfoRequest.encode();
	if($.SystemUpdateItemInfoRequest!=null)o['su']=$.SystemUpdateItemInfoRequest.encode();
	if($.GetItemInfoRequest!=null)o['ga']=$.GetItemInfoRequest.encode();
	if($.ReviewItemRequest!=null)o['re']=$.ReviewItemRequest.encode();
	if($.PublishItemRequest!=null)o['pu']=$.PublishItemRequest.encode();
	if($.UnpublishItemRequest!=null)o['un']=$.UnpublishItemRequest.encode();
	if($.DeleteItemRequest!=null)o['de']=$.DeleteItemRequest.encode();
	if($.ListItemsForAccountRequest!=null)o['lc']=$.ListItemsForAccountRequest.encode();
	if($.ListAllItemsRequest!=null)o['la']=$.ListAllItemsRequest.encode();
	if($.ListPublishedItemsRequest!=null)o['lp']=$.ListPublishedItemsRequest.encode();
	if($.GenerateGrantForItemRequest!=null)o['gg']=$.GenerateGrantForItemRequest.encode();
	if($.GetItemUsingGrantRequest!=null)o['gig']=$.GetItemUsingGrantRequest.encode();
	if($.DoesItemHaveGrantRequest!=null)o['dihg']=$.DoesItemHaveGrantRequest.encode();
	if($.DeleteGrantForItemRequest!=null)o['dgfi']=$.DeleteGrantForItemRequest.encode();
	if($.GenerateApiKeyRequest!=null)o['gk']=$.GenerateApiKeyRequest.encode();
	if($.DeactivateApiKeyRequest!=null)o['dk']=$.DeactivateApiKeyRequest.encode();
	if($.ListApiKeysRequest!=null)o['lk']=$.ListApiKeysRequest.encode();
	return o;
}
_.CreateItemInfoRequest=null;
_.UserUpdateItemInfoRequest=null;
_.SystemUpdateItemInfoRequest=null;
_.GetItemInfoRequest=null;
_.ReviewItemRequest=null;
_.PublishItemRequest=null;
_.UnpublishItemRequest=null;
_.DeleteItemRequest=null;
_.ListItemsForAccountRequest=null;
_.ListAllItemsRequest=null;
_.ListPublishedItemsRequest=null;
_.GenerateGrantForItemRequest=null;
_.GetItemUsingGrantRequest=null;
_.DoesItemHaveGrantRequest=null;
_.DeleteGrantForItemRequest=null;
_.GenerateApiKeyRequest=null;
_.DeactivateApiKeyRequest=null;
_.ListApiKeysRequest=null;
function D(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null)$.DeleteDeviceRequest=new cV(e['d']);
	if(e['c']!=null)$.AddDeviceRequest=new cW(e['c']);
	if(e['t']!=null)$.SetDingTimeoutRequest=new cX(e['t']);
}
D.prototype=new aA();
D.prototype.constructor = D;
_=D.prototype;
_.__type="LDDeviceToClusterDeviceRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.DeleteDeviceRequest!=null)o['d']=$.DeleteDeviceRequest.encode();
	if($.AddDeviceRequest!=null)o['c']=$.AddDeviceRequest.encode();
	if($.SetDingTimeoutRequest!=null)o['t']=$.SetDingTimeoutRequest.encode();
	return o;
}
_.DeleteDeviceRequest=null;
_.AddDeviceRequest=null;
_.SetDingTimeoutRequest=null;
function E(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetCloudConfigRequest=new cY(e['g']);
	if(e['s']!=null)$.SetCloudConfigRequest=new cZ(e['s']);
	if(e['r']!=null)$.RefreshCloudConfigRequest=new d_(e['r']);
	if(e['d']!=null)$.DisconnectCloudSyncRequest=new da(e['d']);
}
E.prototype=new aA();
E.prototype.constructor = E;
_=E.prototype;
_.__type="LDDeviceToClusterCloudSyncRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetCloudConfigRequest!=null)o['g']=$.GetCloudConfigRequest.encode();
	if($.SetCloudConfigRequest!=null)o['s']=$.SetCloudConfigRequest.encode();
	if($.RefreshCloudConfigRequest!=null)o['r']=$.RefreshCloudConfigRequest.encode();
	if($.DisconnectCloudSyncRequest!=null)o['d']=$.DisconnectCloudSyncRequest.encode();
	return o;
}
_.GetCloudConfigRequest=null;
_.SetCloudConfigRequest=null;
_.RefreshCloudConfigRequest=null;
_.DisconnectCloudSyncRequest=null;
function F(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['o']!=null)$.OptInForAllGamesChallengesRequest=new db(e['o']);
	if(e['f']!=null)$.FindGamers=new dc(e['f']);
	if(e['u']!=null)$.UpdateChallengeLocation=new dd(e['u']);
	if(e['d']!=null)$.GameChallengeComplete=new de(e['d']);
	if(e['c']!=null)$.GameChallenge=new df(e['c']);
	if(e['co']!=null)$.CheckAccountOptedIn=new dg(e['co']);
	if(e['ogs']!=null)$.OptInForGSChallengesRequest=new dh(e['ogs']);
	if(e['fgs']!=null)$.FindGamersGSRequest=new di(e['fgs']);
}
F.prototype=new aA();
F.prototype.constructor = F;
_=F.prototype;
_.__type="LDDeviceToClusterGameChallengeRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.OptInForAllGamesChallengesRequest!=null)o['o']=$.OptInForAllGamesChallengesRequest.encode();
	if($.FindGamers!=null)o['f']=$.FindGamers.encode();
	if($.UpdateChallengeLocation!=null)o['u']=$.UpdateChallengeLocation.encode();
	if($.GameChallengeComplete!=null)o['d']=$.GameChallengeComplete.encode();
	if($.GameChallenge!=null)o['c']=$.GameChallenge.encode();
	if($.CheckAccountOptedIn!=null)o['co']=$.CheckAccountOptedIn.encode();
	if($.OptInForGSChallengesRequest!=null)o['ogs']=$.OptInForGSChallengesRequest.encode();
	if($.FindGamersGSRequest!=null)o['fgs']=$.FindGamersGSRequest.encode();
	return o;
}
_.OptInForAllGamesChallengesRequest=null;
_.FindGamers=null;
_.UpdateChallengeLocation=null;
_.GameChallengeComplete=null;
_.GameChallenge=null;
_.CheckAccountOptedIn=null;
_.OptInForGSChallengesRequest=null;
_.FindGamersGSRequest=null;
function G(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.GetSubscriptionUrl=new dj(e['u']);
}
G.prototype=new aA();
G.prototype.constructor = G;
_=G.prototype;
_.__type="LDDeviceToClusterSubscriptionRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetSubscriptionUrl!=null)o['u']=$.GetSubscriptionUrl.encode();
	return o;
}
_.GetSubscriptionUrl=null;
function H(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['hs']!=null)$.GetHighScoreRequest=new dk(e['hs']);
	if(e['rs']!=null)$.ReportScoreRequest=new dl(e['rs']);
	if(e['ts']!=null)$.GetTopScoresRequest=new dm(e['ts']);
}
H.prototype=new aA();
H.prototype.constructor = H;
_=H.prototype;
_.__type="LDDeviceToClusterHighScoreRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetHighScoreRequest!=null)o['hs']=$.GetHighScoreRequest.encode();
	if($.ReportScoreRequest!=null)o['rs']=$.ReportScoreRequest.encode();
	if($.GetTopScoresRequest!=null)o['ts']=$.GetTopScoresRequest.encode();
	return o;
}
_.GetHighScoreRequest=null;
_.ReportScoreRequest=null;
_.GetTopScoresRequest=null;
function I(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.BroadcastItemRequest=new dn(e['b']);
	if(e['ub']!=null)$.UnbroadcastItemRequest=new dp(e['ub']);
	if(e['s']!=null)$.SubscribeForNearbyItemsRequest=new dq(e['s']);
	if(e['us']!=null)$.UnsubscribeForNearbyItemsRequest=new dr(e['us']);
	if(e['f']!=null)$.FetchNearbyItemsRequest=new ds(e['f']);
	if(e['bp']!=null)$.ItemBroadcastStateChangedPush=new dt(e['bp']);
	if(e['st']!=null)$.SubscriptionTerminatedPush=new du(e['st']);
}
I.prototype=new aA();
I.prototype.constructor = I;
_=I.prototype;
_.__type="LDDeviceToClusterNearbyItemRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.BroadcastItemRequest!=null)o['b']=$.BroadcastItemRequest.encode();
	if($.UnbroadcastItemRequest!=null)o['ub']=$.UnbroadcastItemRequest.encode();
	if($.SubscribeForNearbyItemsRequest!=null)o['s']=$.SubscribeForNearbyItemsRequest.encode();
	if($.UnsubscribeForNearbyItemsRequest!=null)o['us']=$.UnsubscribeForNearbyItemsRequest.encode();
	if($.FetchNearbyItemsRequest!=null)o['f']=$.FetchNearbyItemsRequest.encode();
	if($.ItemBroadcastStateChangedPush!=null)o['bp']=$.ItemBroadcastStateChangedPush.encode();
	if($.SubscriptionTerminatedPush!=null)o['st']=$.SubscriptionTerminatedPush.encode();
	return o;
}
_.BroadcastItemRequest=null;
_.UnbroadcastItemRequest=null;
_.SubscribeForNearbyItemsRequest=null;
_.UnsubscribeForNearbyItemsRequest=null;
_.FetchNearbyItemsRequest=null;
_.ItemBroadcastStateChangedPush=null;
_.SubscriptionTerminatedPush=null;
function J(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['wl']!=null)$.UrlToStoryRequest=new dv(e['wl']);
	if(e['is']!=null)$.ImageSearchRequest=new dw(e['is']);
	if(e['f']!=null)$.FailureReport=new dx(e['f']);
	if(e['R']!=null)$.EventReport=new dy(e['R']);
	if(e['F']!=null)$.FlagUser=new dz(e['F']);
	if(e['p']!=null)$.CreatePlaygroundRequest=new dA(e['p']);
	if(e['gf']!=null)$.GetFeedbackAccount=new dB(e['gf']);
	if(e['e']!=null)$.GetExtraVersions=new dC(e['e']);
}
J.prototype=new aA();
J.prototype.constructor = J;
_=J.prototype;
_.__type="LDDeviceToClusterMiscellaneousRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.UrlToStoryRequest!=null)o['wl']=$.UrlToStoryRequest.encode();
	if($.ImageSearchRequest!=null)o['is']=$.ImageSearchRequest.encode();
	if($.FailureReport!=null)o['f']=$.FailureReport.encode();
	if($.EventReport!=null)o['R']=$.EventReport.encode();
	if($.FlagUser!=null)o['F']=$.FlagUser.encode();
	if($.CreatePlaygroundRequest!=null)o['p']=$.CreatePlaygroundRequest.encode();
	if($.GetFeedbackAccount!=null)o['gf']=$.GetFeedbackAccount.encode();
	if($.GetExtraVersions!=null)o['e']=$.GetExtraVersions.encode();
	return o;
}
_.UrlToStoryRequest=null;
_.ImageSearchRequest=null;
_.FailureReport=null;
_.EventReport=null;
_.FlagUser=null;
_.CreatePlaygroundRequest=null;
_.GetFeedbackAccount=null;
_.GetExtraVersions=null;
function K(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['sf']!=null)$.GetSmsFeedRequest=new dD(e['sf']);
	if(e['sm']!=null)$.SendSmsMessageRequest=new dE(e['sm']);
	if(e['sp']!=null)$.SetSmsParticipationRequest=new dF(e['sp']);
}
K.prototype=new aA();
K.prototype.constructor = K;
_=K.prototype;
_.__type="LDDeviceToClusterDirectMessagingRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetSmsFeedRequest!=null)o['sf']=$.GetSmsFeedRequest.encode();
	if($.SendSmsMessageRequest!=null)o['sm']=$.SendSmsMessageRequest.encode();
	if($.SetSmsParticipationRequest!=null)o['sp']=$.SetSmsParticipationRequest.encode();
	return o;
}
_.GetSmsFeedRequest=null;
_.SendSmsMessageRequest=null;
_.SetSmsParticipationRequest=null;
function L(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['pv']!=null)$.PostVideo=new dG(e['pv']);
	if(e['pm']!=null)$.PostMessage=new dH(e['pm']);
	if(e['ps']!=null)$.PostScreenShot=new dI(e['ps']);
	if(e['l']!=null)$.LikePost=new dJ(e['l']);
	if(e['v']!=null)$.AddVideoView=new dK(e['v']);
	if(e['f']!=null)$.FollowUser=new dL(e['f']);
	if(e['guw']!=null)$.GetUserWall=new dM(e['guw']);
	if(e['ggw']!=null)$.GetGameWall=new dN(e['ggw']);
	if(e['gfw']!=null)$.GetFollowingWall=new dO(e['gfw']);
	if(e['gp']!=null)$.GetPost=new dP(e['gp']);
	if(e['gspt']!=null)$.GetStandardPostTags=new dQ(e['gspt']);
	if(e['gf']!=null)$.GetFollowers=new dR(e['gf']);
	if(e['gaf']!=null)$.GetAccountsFollowedRequest=new dS(e['gaf']);
	if(e['dp']!=null)$.DeletePostRequest=new dT(e['dp']);
	if(e['ges']!=null)$.GetExternalShareLink=new dU(e['ges']);
	if(e['cf']!=null)$.CheckFollowing=new dV(e['cf']);
	if(e['gfc']!=null)$.GetFollowerCount=new dW(e['gfc']);
	if(e['gafc']!=null)$.GetFollowingCount=new dX(e['gafc']);
	if(e['guwc']!=null)$.GetUserWallPostCount=new dY(e['guwc']);
	if(e['gpp']!=null)$.GetPackagePosts=new dZ(e['gpp']);
	if(e['upd']!=null)$.UpdatePostDetailsRequest=new e_(e['upd']);
	if(e['gppi']!=null)$.GetPackagesRequest=new ea(e['gppi']);
	if(e['grw']!=null)$.GetRecommendedWallRequest=new eb(e['grw']);
}
L.prototype=new aA();
L.prototype.constructor = L;
_=L.prototype;
_.__type="LDDeviceToClusterWallPostRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.PostVideo!=null)o['pv']=$.PostVideo.encode();
	if($.PostMessage!=null)o['pm']=$.PostMessage.encode();
	if($.PostScreenShot!=null)o['ps']=$.PostScreenShot.encode();
	if($.LikePost!=null)o['l']=$.LikePost.encode();
	if($.AddVideoView!=null)o['v']=$.AddVideoView.encode();
	if($.FollowUser!=null)o['f']=$.FollowUser.encode();
	if($.GetUserWall!=null)o['guw']=$.GetUserWall.encode();
	if($.GetGameWall!=null)o['ggw']=$.GetGameWall.encode();
	if($.GetFollowingWall!=null)o['gfw']=$.GetFollowingWall.encode();
	if($.GetPost!=null)o['gp']=$.GetPost.encode();
	if($.GetStandardPostTags!=null)o['gspt']=$.GetStandardPostTags.encode();
	if($.GetFollowers!=null)o['gf']=$.GetFollowers.encode();
	if($.GetAccountsFollowedRequest!=null)o['gaf']=$.GetAccountsFollowedRequest.encode();
	if($.DeletePostRequest!=null)o['dp']=$.DeletePostRequest.encode();
	if($.GetExternalShareLink!=null)o['ges']=$.GetExternalShareLink.encode();
	if($.CheckFollowing!=null)o['cf']=$.CheckFollowing.encode();
	if($.GetFollowerCount!=null)o['gfc']=$.GetFollowerCount.encode();
	if($.GetFollowingCount!=null)o['gafc']=$.GetFollowingCount.encode();
	if($.GetUserWallPostCount!=null)o['guwc']=$.GetUserWallPostCount.encode();
	if($.GetPackagePosts!=null)o['gpp']=$.GetPackagePosts.encode();
	if($.UpdatePostDetailsRequest!=null)o['upd']=$.UpdatePostDetailsRequest.encode();
	if($.GetPackagesRequest!=null)o['gppi']=$.GetPackagesRequest.encode();
	if($.GetRecommendedWallRequest!=null)o['grw']=$.GetRecommendedWallRequest.encode();
	return o;
}
_.PostVideo=null;
_.PostMessage=null;
_.PostScreenShot=null;
_.LikePost=null;
_.AddVideoView=null;
_.FollowUser=null;
_.GetUserWall=null;
_.GetGameWall=null;
_.GetFollowingWall=null;
_.GetPost=null;
_.GetStandardPostTags=null;
_.GetFollowers=null;
_.GetAccountsFollowedRequest=null;
_.DeletePostRequest=null;
_.GetExternalShareLink=null;
_.CheckFollowing=null;
_.GetFollowerCount=null;
_.GetFollowingCount=null;
_.GetUserWallPostCount=null;
_.GetPackagePosts=null;
_.UpdatePostDetailsRequest=null;
_.GetPackagesRequest=null;
_.GetRecommendedWallRequest=null;
function M(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetIdentityTokenRequest=new ec(e['g']);
}
M.prototype=new aA();
M.prototype.constructor = M;
_=M.prototype;
_.__type="LDDeviceToClusterIdentityTokenRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetIdentityTokenRequest!=null)o['g']=$.GetIdentityTokenRequest.encode();
	return o;
}
_.GetIdentityTokenRequest=null;
function N(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetPublicChatRequest=new ed(e['g']);
	if(e['j']!=null)$.JoinPublicChatRequest=new ee(e['j']);
	if(e['l']!=null)$.LeavePublicChatRequest=new ef(e['l']);
	if(e['w']!=null)$.WriteToPublicChatRequest=new eg(e['w']);
	if(e['gm']!=null)$.GetPublicChatMembersRequest=new eh(e['gm']);
	if(e['gr']!=null)$.GetRecentMessagesRequest=new ei(e['gr']);
	if(e['lc']!=null)$.ListLiveChatsRequest=new ej(e['lc']);
	if(e['li']!=null)$.ListInterestingChatsRequest=new ek(e['li']);
	if(e['p']!=null)$.PublicChatMessageDeliveryPush=new el(e['p']);
	if(e['t']!=null)$.PublicChatTerminatedPush=new em(e['t']);
}
N.prototype=new aA();
N.prototype.constructor = N;
_=N.prototype;
_.__type="LDDeviceToClusterPublicChatRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetPublicChatRequest!=null)o['g']=$.GetPublicChatRequest.encode();
	if($.JoinPublicChatRequest!=null)o['j']=$.JoinPublicChatRequest.encode();
	if($.LeavePublicChatRequest!=null)o['l']=$.LeavePublicChatRequest.encode();
	if($.WriteToPublicChatRequest!=null)o['w']=$.WriteToPublicChatRequest.encode();
	if($.GetPublicChatMembersRequest!=null)o['gm']=$.GetPublicChatMembersRequest.encode();
	if($.GetRecentMessagesRequest!=null)o['gr']=$.GetRecentMessagesRequest.encode();
	if($.ListLiveChatsRequest!=null)o['lc']=$.ListLiveChatsRequest.encode();
	if($.ListInterestingChatsRequest!=null)o['li']=$.ListInterestingChatsRequest.encode();
	if($.PublicChatMessageDeliveryPush!=null)o['p']=$.PublicChatMessageDeliveryPush.encode();
	if($.PublicChatTerminatedPush!=null)o['t']=$.PublicChatTerminatedPush.encode();
	return o;
}
_.GetPublicChatRequest=null;
_.JoinPublicChatRequest=null;
_.LeavePublicChatRequest=null;
_.WriteToPublicChatRequest=null;
_.GetPublicChatMembersRequest=null;
_.GetRecentMessagesRequest=null;
_.ListLiveChatsRequest=null;
_.ListInterestingChatsRequest=null;
_.PublicChatMessageDeliveryPush=null;
_.PublicChatTerminatedPush=null;
function O(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
}
O.prototype=new aA();
O.prototype.constructor = O;
_=O.prototype;
_.__type="LDDeviceToClusterProfileCardRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	return o;
}
function P(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null)$.ReportSummaryEventsRequest=new en(e['r']);
	if(e['ga']!=null)$.GatherEventsByAppRequest=new eo(e['ga']);
}
P.prototype=new aA();
P.prototype.constructor = P;
_=P.prototype;
_.__type="LDClusterOrDeviceToClusterEventSummaryRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.ReportSummaryEventsRequest!=null)o['r']=$.ReportSummaryEventsRequest.encode();
	if($.GatherEventsByAppRequest!=null)o['ga']=$.GatherEventsByAppRequest.encode();
	return o;
}
_.ReportSummaryEventsRequest=null;
_.GatherEventsByAppRequest=null;
function Q(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null)$.ListBlockedUsersRequest=new ep(e['l']);
	if(e['u']!=null)$.UnblockUserRequest=new eq(e['u']);
	if(e['b']!=null)$.BlockUserRequest=new er(e['b']);
	if(e['r']!=null)$.ReportUserRequest=new es(e['r']);
}
Q.prototype=new aA();
Q.prototype.constructor = Q;
_=Q.prototype;
_.__type="LDDeviceToClusterUserModerationRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.ListBlockedUsersRequest!=null)o['l']=$.ListBlockedUsersRequest.encode();
	if($.UnblockUserRequest!=null)o['u']=$.UnblockUserRequest.encode();
	if($.BlockUserRequest!=null)o['b']=$.BlockUserRequest.encode();
	if($.ReportUserRequest!=null)o['r']=$.ReportUserRequest.encode();
	return o;
}
_.ListBlockedUsersRequest=null;
_.UnblockUserRequest=null;
_.BlockUserRequest=null;
_.ReportUserRequest=null;
function R(e){
	aA.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetPresencesRequest=new et(e['g']);
	if(e['o']!=null)$.SetOnlineStatusRequest=new eu(e['o']);
	if(e['s']!=null)$.GetStreamingLinkRequest=new ev(e['s']);
}
R.prototype=new aA();
R.prototype.constructor = R;
_=R.prototype;
_.__type="LDDeviceToClusterPresenceRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	aA.prototype.encode.call($,o);
	if($.GetPresencesRequest!=null)o['g']=$.GetPresencesRequest.encode();
	if($.SetOnlineStatusRequest!=null)o['o']=$.SetOnlineStatusRequest.encode();
	if($.GetStreamingLinkRequest!=null)o['s']=$.GetStreamingLinkRequest.encode();
	return o;
}
_.GetPresencesRequest=null;
_.SetOnlineStatusRequest=null;
_.GetStreamingLinkRequest=null;
function T(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.GetMessageResponse=new ew(e['m']);
	if(e['M']!=null)$.GetMessagesResponse=new ex(e['M']);
	if(e['C']!=null)$.GetMessagesWithContinuationResponse=new ey(e['C']);
	if(e['l']!=null)$.GetJoinFeedLinkResponse=new ez(e['l']);
	if(e['gf']!=null)$.GetFeedDetails=new eA(e['gf']);
}
T.prototype=new bi();
T.prototype.constructor = T;
_=T.prototype;
_.__type="LDDeviceToClusterMessageResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetMessageResponse!=null)o['m']=$.GetMessageResponse.encode();
	if($.GetMessagesResponse!=null)o['M']=$.GetMessagesResponse.encode();
	if($.GetMessagesWithContinuationResponse!=null)o['C']=$.GetMessagesWithContinuationResponse.encode();
	if($.GetJoinFeedLinkResponse!=null)o['l']=$.GetJoinFeedLinkResponse.encode();
	if($.GetFeedDetails!=null)o['gf']=$.GetFeedDetails.encode();
	return o;
}
_.GetMessageResponse=null;
_.GetMessagesResponse=null;
_.GetMessagesWithContinuationResponse=null;
_.GetJoinFeedLinkResponse=null;
_.GetFeedDetails=null;
function U(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null)$.DirtyFeeds=new eB(e['d']);
	if(e['s']!=null)$.FeedState=new eC(e['s']);
}
U.prototype=new bi();
U.prototype.constructor = U;
_=U.prototype;
_.__type="LDDeviceToClusterInboxResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.DirtyFeeds!=null)o['d']=$.DirtyFeeds.encode();
	if($.FeedState!=null)o['s']=$.FeedState.encode();
	return o;
}
_.DirtyFeeds=null;
_.FeedState=null;
function V(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.GetUploadTicketResponse=new eD(e['ut']);
	if(e['mut']!=null)$.GetMultipartUploadTicketResponse=new eE(e['mut']);
	if(e['dt']!=null)$.GetDownloadTicketResponse=new eF(e['dt']);
}
V.prototype=new bi();
V.prototype.constructor = V;
_=V.prototype;
_.__type="LDClusterOrDeviceToClusterBlobResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetUploadTicketResponse!=null)o['ut']=$.GetUploadTicketResponse.encode();
	if($.GetMultipartUploadTicketResponse!=null)o['mut']=$.GetMultipartUploadTicketResponse.encode();
	if($.GetDownloadTicketResponse!=null)o['dt']=$.GetDownloadTicketResponse.encode();
	return o;
}
_.GetUploadTicketResponse=null;
_.GetMultipartUploadTicketResponse=null;
_.GetDownloadTicketResponse=null;
function W(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactDetailsResponse=new eG(e['c']);
}
W.prototype=new bi();
W.prototype.constructor = W;
_=W.prototype;
_.__type="LDDeviceToClusterContactResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.ContactDetailsResponse!=null)o['c']=$.ContactDetailsResponse.encode();
	return o;
}
_.ContactDetailsResponse=null;
function X(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ProfileDetailsResponse=new eH(e['p']);
	if(e['c']!=null)$.ContactProfileResponse=new eI(e['c']);
	if(e['pps']!=null)$.GetProfilePublicStateResponse=new eJ(e['pps']);
	if(e['ppp']!=null)$.GetProfileDetailsAndPublicStateResponse=new eK(e['ppp']);
}
X.prototype=new bi();
X.prototype.constructor = X;
_=X.prototype;
_.__type="LDDeviceToClusterProfileResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.ProfileDetailsResponse!=null)o['p']=$.ProfileDetailsResponse.encode();
	if($.ContactProfileResponse!=null)o['c']=$.ContactProfileResponse.encode();
	if($.GetProfilePublicStateResponse!=null)o['pps']=$.GetProfilePublicStateResponse.encode();
	if($.GetProfileDetailsAndPublicStateResponse!=null)o['ppp']=$.GetProfileDetailsAndPublicStateResponse.encode();
	return o;
}
_.ProfileDetailsResponse=null;
_.ContactProfileResponse=null;
_.GetProfilePublicStateResponse=null;
_.GetProfileDetailsAndPublicStateResponse=null;
function Y(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactProfileResponse=new eL(e['c']);
}
Y.prototype=new bi();
Y.prototype.constructor = Y;
_=Y.prototype;
_.__type="LDDeviceToClusterAddressBookResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.ContactProfileResponse!=null)o['c']=$.ContactProfileResponse.encode();
	return o;
}
_.ContactProfileResponse=null;
function Z(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetItemInfoResponse=new eM(e['g']);
	if(e['l']!=null)$.ListItemsResponse=new eN(e['l']);
	if(e['gg']!=null)$.GenerateGrantForItemResponse=new eO(e['gg']);
	if(e['gk']!=null)$.GenerateApiKeyResponse=new eP(e['gk']);
	if(e['lk']!=null)$.ListApiKeysResponse=new eQ(e['lk']);
}
Z.prototype=new bi();
Z.prototype.constructor = Z;
_=Z.prototype;
_.__type="LDDeviceToClusterOmletItemStoreResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetItemInfoResponse!=null)o['g']=$.GetItemInfoResponse.encode();
	if($.ListItemsResponse!=null)o['l']=$.ListItemsResponse.encode();
	if($.GenerateGrantForItemResponse!=null)o['gg']=$.GenerateGrantForItemResponse.encode();
	if($.GenerateApiKeyResponse!=null)o['gk']=$.GenerateApiKeyResponse.encode();
	if($.ListApiKeysResponse!=null)o['lk']=$.ListApiKeysResponse.encode();
	return o;
}
_.GetItemInfoResponse=null;
_.ListItemsResponse=null;
_.GenerateGrantForItemResponse=null;
_.GenerateApiKeyResponse=null;
_.ListApiKeysResponse=null;
function a_(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
}
a_.prototype=new bi();
a_.prototype.constructor = a_;
_=a_.prototype;
_.__type="LDDeviceToClusterDeviceResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	return o;
}
function aa(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetClientCloudConfigResponse=new eR(e['g']);
}
aa.prototype=new bi();
aa.prototype.constructor = aa;
_=aa.prototype;
_.__type="LDDeviceToClusterCloudSyncResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetClientCloudConfigResponse!=null)o['g']=$.GetClientCloudConfigResponse.encode();
	return o;
}
_.GetClientCloudConfigResponse=null;
function ab(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.FindGamers=new eS(e['f']);
}
ab.prototype=new bi();
ab.prototype.constructor = ab;
_=ab.prototype;
_.__type="LDDeviceToClusterGameChallengeResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.FindGamers!=null)o['f']=$.FindGamers.encode();
	return o;
}
_.FindGamers=null;
function ac(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null)$.GetSubscriptionUrl=new eT(e['u']);
}
ac.prototype=new bi();
ac.prototype.constructor = ac;
_=ac.prototype;
_.__type="LDDeviceToClusterSubscriptionResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetSubscriptionUrl!=null)o['u']=$.GetSubscriptionUrl.encode();
	return o;
}
_.GetSubscriptionUrl=null;
function ad(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['s']!=null)$.ScoreResponse=new eU(e['s']);
	if(e['ss']!=null)$.ScoresResponse=new eV(e['ss']);
}
ad.prototype=new bi();
ad.prototype.constructor = ad;
_=ad.prototype;
_.__type="LDDeviceToClusterHighScoreResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.ScoreResponse!=null)o['s']=$.ScoreResponse.encode();
	if($.ScoresResponse!=null)o['ss']=$.ScoresResponse.encode();
	return o;
}
_.ScoreResponse=null;
_.ScoresResponse=null;
function ae(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.BroadcastItemResponse=new eW(e['b']);
	if(e['f']!=null)$.FetchNearbyItemsResponse=new eX(e['f']);
}
ae.prototype=new bi();
ae.prototype.constructor = ae;
_=ae.prototype;
_.__type="LDDeviceToClusterNearbyItemResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.BroadcastItemResponse!=null)o['b']=$.BroadcastItemResponse.encode();
	if($.FetchNearbyItemsResponse!=null)o['f']=$.FetchNearbyItemsResponse.encode();
	return o;
}
_.BroadcastItemResponse=null;
_.FetchNearbyItemsResponse=null;
function af(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['wl']!=null)$.UrlToStoryResponse=new eY(e['wl']);
	if(e['is']!=null)$.ImageSearchResponse=new eZ(e['is']);
	if(e['p']!=null)$.CreatePlaygroundResponse=new f_(e['p']);
	if(e['e']!=null)$.GetExtraVersions=new fa(e['e']);
}
af.prototype=new bi();
af.prototype.constructor = af;
_=af.prototype;
_.__type="LDDeviceToClusterMiscellaneousResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.UrlToStoryResponse!=null)o['wl']=$.UrlToStoryResponse.encode();
	if($.ImageSearchResponse!=null)o['is']=$.ImageSearchResponse.encode();
	if($.CreatePlaygroundResponse!=null)o['p']=$.CreatePlaygroundResponse.encode();
	if($.GetExtraVersions!=null)o['e']=$.GetExtraVersions.encode();
	return o;
}
_.UrlToStoryResponse=null;
_.ImageSearchResponse=null;
_.CreatePlaygroundResponse=null;
_.GetExtraVersions=null;
function ag(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['gs']!=null)$.GetSmsFeedResponse=new fb(e['gs']);
	if(e['sm']!=null)$.SendSmsMessageResponse=new fc(e['sm']);
}
ag.prototype=new bi();
ag.prototype.constructor = ag;
_=ag.prototype;
_.__type="LDDeviceToClusterDirectMessagingResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetSmsFeedResponse!=null)o['gs']=$.GetSmsFeedResponse.encode();
	if($.SendSmsMessageResponse!=null)o['sm']=$.SendSmsMessageResponse.encode();
	return o;
}
_.GetSmsFeedResponse=null;
_.SendSmsMessageResponse=null;
function ah(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['w']!=null)$.WallResponse=new fd(e['w']);
	if(e['ws']!=null)$.WallsResponse=new fe(e['ws']);
	if(e['gp']!=null)$.GetPostResponse=new ff(e['gp']);
	if(e['ap']!=null)$.AddPostResponse=new fg(e['ap']);
	if(e['gaf']!=null)$.GetAccountsFollowedResponse=new fh(e['gaf']);
	if(e['gspt']!=null)$.GetStandardPostTagsResponse=new fi(e['gspt']);
	if(e['gf']!=null)$.GetFollowersResponse=new fj(e['gf']);
	if(e['ges']!=null)$.GetExternalShareLink=new fk(e['ges']);
	if(e['gppi']!=null)$.GetPackagesResponse=new fl(e['gppi']);
}
ah.prototype=new bi();
ah.prototype.constructor = ah;
_=ah.prototype;
_.__type="LDDeviceToClusterWallPostResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.WallResponse!=null)o['w']=$.WallResponse.encode();
	if($.WallsResponse!=null)o['ws']=$.WallsResponse.encode();
	if($.GetPostResponse!=null)o['gp']=$.GetPostResponse.encode();
	if($.AddPostResponse!=null)o['ap']=$.AddPostResponse.encode();
	if($.GetAccountsFollowedResponse!=null)o['gaf']=$.GetAccountsFollowedResponse.encode();
	if($.GetStandardPostTagsResponse!=null)o['gspt']=$.GetStandardPostTagsResponse.encode();
	if($.GetFollowersResponse!=null)o['gf']=$.GetFollowersResponse.encode();
	if($.GetExternalShareLink!=null)o['ges']=$.GetExternalShareLink.encode();
	if($.GetPackagesResponse!=null)o['gppi']=$.GetPackagesResponse.encode();
	return o;
}
_.WallResponse=null;
_.WallsResponse=null;
_.GetPostResponse=null;
_.AddPostResponse=null;
_.GetAccountsFollowedResponse=null;
_.GetStandardPostTagsResponse=null;
_.GetFollowersResponse=null;
_.GetExternalShareLink=null;
_.GetPackagesResponse=null;
function ai(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetIdentityTokenResponse=new fm(e['g']);
}
ai.prototype=new bi();
ai.prototype.constructor = ai;
_=ai.prototype;
_.__type="LDDeviceToClusterIdentityTokenResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetIdentityTokenResponse!=null)o['g']=$.GetIdentityTokenResponse.encode();
	return o;
}
_.GetIdentityTokenResponse=null;
function aj(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GetPublicChatResponse=new fn(e['g']);
	if(e['gm']!=null)$.GetPublicChatMembersResponse=new fo(e['gm']);
	if(e['gr']!=null)$.GetRecentMessagesResponse=new fp(e['gr']);
	if(e['lc']!=null)$.ListLiveChatsResponse=new fq(e['lc']);
}
aj.prototype=new bi();
aj.prototype.constructor = aj;
_=aj.prototype;
_.__type="LDDeviceToClusterPublicChatResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetPublicChatResponse!=null)o['g']=$.GetPublicChatResponse.encode();
	if($.GetPublicChatMembersResponse!=null)o['gm']=$.GetPublicChatMembersResponse.encode();
	if($.GetRecentMessagesResponse!=null)o['gr']=$.GetRecentMessagesResponse.encode();
	if($.ListLiveChatsResponse!=null)o['lc']=$.ListLiveChatsResponse.encode();
	return o;
}
_.GetPublicChatResponse=null;
_.GetPublicChatMembersResponse=null;
_.GetRecentMessagesResponse=null;
_.ListLiveChatsResponse=null;
function ak(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
}
ak.prototype=new bi();
ak.prototype.constructor = ak;
_=ak.prototype;
_.__type="LDDeviceToClusterProfileCardResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	return o;
}
function al(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ga']!=null)$.GatherEventsByAppResponse=new fr(e['ga']);
}
al.prototype=new bi();
al.prototype.constructor = al;
_=al.prototype;
_.__type="LDClusterOrDeviceToClusterEventSummaryResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GatherEventsByAppResponse!=null)o['ga']=$.GatherEventsByAppResponse.encode();
	return o;
}
_.GatherEventsByAppResponse=null;
function am(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
}
am.prototype=new bi();
am.prototype.constructor = am;
_=am.prototype;
_.__type="LDDeviceToClusterUserModerationResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	return o;
}
function an(e){
	bi.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.GetPresencesResponse=new fs(e['p']);
}
an.prototype=new bi();
an.prototype.constructor = an;
_=an.prototype;
_.__type="LDDeviceToClusterPresenceResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	bi.prototype.encode.call($,o);
	if($.GetPresencesResponse!=null)o['p']=$.GetPresencesResponse.encode();
	return o;
}
_.GetPresencesResponse=null;
function ft(e){
	if(!e)return;
	var $=this;
}
_=ft.prototype;
_.__type="LDURI";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}
function au(e){
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.NameTranslations=e['nt'];
	$.Description=e['d'];
	$.DescriptionTranslations=e['dt'];
	$.IOSStoreUrl=e['sui'];
	$.AndroidStoreUrl=e['sua'];
	$.AndroidPackageName=e['apn'];
	$.IconBlobLinkString=e['ibls'];
	if(e['ssl']!=null){
		$.ScreenShotLinks=[];
		var d = e['ssl'];
		for(var k=0;k<d.length;++k)$.ScreenShotLinks.push(d[k]);
	}
}
_=au.prototype;
_.__type="LDAppRestletDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Name!=null)o['n']=$.Name;
	if($.NameTranslations!=null)o['nt']=$.NameTranslations;
	if($.Description!=null)o['d']=$.Description;
	if($.DescriptionTranslations!=null)o['dt']=$.DescriptionTranslations;
	if($.IOSStoreUrl!=null)o['sui']=$.IOSStoreUrl;
	if($.AndroidStoreUrl!=null)o['sua']=$.AndroidStoreUrl;
	if($.AndroidPackageName!=null)o['apn']=$.AndroidPackageName;
	if($.IconBlobLinkString!=null)o['ibls']=$.IconBlobLinkString;
	if($.ScreenShotLinks!=null) {
		o['ssl']=[];
		var d=$.ScreenShotLinks;
		for(var k=0;k<d.length;++k) o['ssl'].push(d[k]);
	}
	return o;
}
_.Name=null;
_.NameTranslations=null;
_.Description=null;
_.DescriptionTranslations=null;
_.IOSStoreUrl=null;
_.AndroidStoreUrl=null;
_.AndroidPackageName=null;
_.IconBlobLinkString=null;
_.ScreenShotLinks=null;
function aw(e){
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Kind=e['t'];
	if(e['k']!=null)$.Key=new Buffer(e['k'],'base64');
}
_=aw.prototype;
_.__type="LDFeed";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Account!=null)o['a']=$.Account;
	if($.Kind!=null)o['t']=$.Kind;
	if($.Key!=null)o['k']=$.Key.toString('base64');
	return o;
}
_.Account=null;
_.Kind=null;
_.Key=null;
function fu(e){
	if(!e)return;
	var $=this;
}
_=fu.prototype;
_.__type="LDEnum";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}
function fv(e){
	fu.call(this,e);
	if(!e)return;
	var $=this;
}
fv.prototype=new fu();
fv.prototype.constructor = fv;
_=fv.prototype;
_.__type="LDAccessScope";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	fu.prototype.encode.call($,o);
	return o;
}
function aB(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.Account=e['a'];
	$.Locale=e['l'];
	$.IpAddress=e['p'];
	$.RequestedCluster=e['c'];
}
aB.prototype=new b();
aB.prototype.constructor = aB;
_=aB.prototype;
_.__type="LDRegisterWithTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.Account!=null)o['a']=$.Account;
	if($.Locale!=null)o['l']=$.Locale;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.RequestedCluster!=null)o['c']=$.RequestedCluster;
	return o;
}
_.Identity=null;
_.Account=null;
_.Locale=null;
_.IpAddress=null;
_.RequestedCluster=null;
function aC(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.Token=e['t'];
}
aC.prototype=new b();
aC.prototype.constructor = aC;
_=aC.prototype;
_.__type="LDConfirmTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Identity=null;
_.Token=null;
function aD(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ServiceType=e['s'];
	$.Key=e['k'];
	$.Account=e['a'];
	$.IpAddress=e['p'];
	$.RequestedCluster=e['c'];
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
}
aD.prototype=new b();
aD.prototype.constructor = aD;
_=aD.prototype;
_.__type="LDRegisterWithOAuthRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ServiceType!=null)o['s']=$.ServiceType;
	if($.Key!=null)o['k']=$.Key;
	if($.Account!=null)o['a']=$.Account;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.RequestedCluster!=null)o['c']=$.RequestedCluster;
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	return o;
}
_.ServiceType=null;
_.Key=null;
_.Account=null;
_.IpAddress=null;
_.RequestedCluster=null;
_.Scopes=null;
function aE(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
aE.prototype=new b();
aE.prototype.constructor = aE;
_=aE.prototype;
_.__type="LDGetLinkedIdentitiesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
function aF(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.IpAddress=e['p'];
	$.RequestedCluster=e['c'];
}
aF.prototype=new b();
aF.prototype.constructor = aF;
_=aF.prototype;
_.__type="LDCheckIdentityLinkedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.RequestedCluster!=null)o['c']=$.RequestedCluster;
	return o;
}
_.IpAddress=null;
_.RequestedCluster=null;
function aG(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.Account=e['a'];
}
aG.prototype=new b();
aG.prototype.constructor = aG;
_=aG.prototype;
_.__type="LDUnlinkIdentityRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Identity=null;
_.Account=null;
function aH(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.Account=e['a'];
}
aH.prototype=new b();
aH.prototype.constructor = aH;
_=aH.prototype;
_.__type="LDLinkOmletIdentityRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Identity=null;
_.Account=null;
function aI(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.RedirectPage=e['r'];
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
	$.LoginServiceType=e['s'];
	$.LoginKey=e['k'];
	$.Flow=e['f'];
	$.IpAddress=e['p'];
	$.Partner=e['P'];
}
aI.prototype=new b();
aI.prototype.constructor = aI;
_=aI.prototype;
_.__type="LDGetAppSigninLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.RedirectPage!=null)o['r']=$.RedirectPage;
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	if($.LoginServiceType!=null)o['s']=$.LoginServiceType;
	if($.LoginKey!=null)o['k']=$.LoginKey;
	if($.Flow!=null)o['f']=$.Flow;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.Partner!=null)o['P']=$.Partner;
	return o;
}
_.RedirectPage=null;
_.Scopes=null;
_.LoginServiceType=null;
_.LoginKey=null;
_.Flow=null;
_.IpAddress=null;
_.Partner=null;
function aJ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AuthCode=e['a'];
	$.QueryKey=e['k'];
	$.IpAddress=e['p'];
}
aJ.prototype=new b();
aJ.prototype.constructor = aJ;
_=aJ.prototype;
_.__type="LDConfirmAuthCodeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AuthCode!=null)o['a']=$.AuthCode;
	if($.QueryKey!=null)o['k']=$.QueryKey;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	return o;
}
_.AuthCode=null;
_.QueryKey=null;
_.IpAddress=null;
function aK(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.RedirectPage=e['r'];
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
	$.IpAddress=e['p'];
	$.RequestedCluster=e['c'];
	$.Jwt=e['j'];
}
aK.prototype=new b();
aK.prototype.constructor = aK;
_=aK.prototype;
_.__type="LDGetSigninLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.RedirectPage!=null)o['r']=$.RedirectPage;
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	if($.IpAddress!=null)o['p']=$.IpAddress;
	if($.RequestedCluster!=null)o['c']=$.RequestedCluster;
	if($.Jwt!=null)o['j']=$.Jwt;
	return o;
}
_.RedirectPage=null;
_.Scopes=null;
_.IpAddress=null;
_.RequestedCluster=null;
_.Jwt=null;
function aL(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AuthCode=e['a'];
	$.QueryKey=e['k'];
	$.IpAddress=e['p'];
}
aL.prototype=new b();
aL.prototype.constructor = aL;
_=aL.prototype;
_.__type="LDConfirmSigninCodeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AuthCode!=null)o['a']=$.AuthCode;
	if($.QueryKey!=null)o['k']=$.QueryKey;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	return o;
}
_.AuthCode=null;
_.QueryKey=null;
_.IpAddress=null;
function aM(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
}
aM.prototype=new b();
aM.prototype.constructor = aM;
_=aM.prototype;
_.__type="LDGetSSOTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	return o;
}
_.Scopes=null;
function aN(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Token=e['t'];
}
aN.prototype=new b();
aN.prototype.constructor = aN;
_=aN.prototype;
_.__type="LDCheckSSOTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Account=null;
_.Token=null;
function aO(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Token=e['t'];
}
aO.prototype=new b();
aO.prototype.constructor = aO;
_=aO.prototype;
_.__type="LDConfirmSSOTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Account=null;
_.Token=null;
function aP(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
aP.prototype=new b();
aP.prototype.constructor = aP;
_=aP.prototype;
_.__type="LDDeviceRegistrationStateChangedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function aQ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.AdminAccount=e['a'];
}
aQ.prototype=new b();
aQ.prototype.constructor = aQ;
_=aQ.prototype;
_.__type="LDUnblockIdentityRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
function aR(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.AdminAccount=e['a'];
}
aR.prototype=new b();
aR.prototype.constructor = aR;
_=aR.prototype;
_.__type="LDGetEmailLoginLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
function aS(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.AccountToLookup=e['A'];
}
aS.prototype=new b();
aS.prototype.constructor = aS;
_=aS.prototype;
_.__type="LDGetAccountDetailsByAccountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.AccountToLookup!=null)o['A']=$.AccountToLookup;
	return o;
}
_.AdminAccount=null;
_.AccountToLookup=null;
function aT(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.AdminAccount=e['a'];
}
aT.prototype=new b();
aT.prototype.constructor = aT;
_=aT.prototype;
_.__type="LDGetAccountDetailsByIdentityRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
function aU(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.AdminAccount=e['a'];
}
aU.prototype=new b();
aU.prototype.constructor = aU;
_=aU.prototype;
_.__type="LDGetIdentityRecordsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
function aV(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.End=e['e'];
	$.Start=e['s'];
	if(e['k']!=null)$.ContinuationKey=new Buffer(e['k'],'base64');
	$.AdminAccount=e['a'];
}
aV.prototype=new b();
aV.prototype.constructor = aV;
_=aV.prototype;
_.__type="LDListFlaggedUsersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.End!=null)o['e']=$.End;
	if($.Start!=null)o['s']=$.Start;
	if($.ContinuationKey!=null)o['k']=$.ContinuationKey.toString('base64');
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	return o;
}
_.End=null;
_.Start=null;
_.ContinuationKey=null;
_.AdminAccount=null;
function aW(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Account=e['A'];
	$.Name=e['n'];
}
aW.prototype=new b();
aW.prototype.constructor = aW;
_=aW.prototype;
_.__type="LDChangeUserNameRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Account!=null)o['A']=$.Account;
	if($.Name!=null)o['n']=$.Name;
	return o;
}
_.AdminAccount=null;
_.Account=null;
_.Name=null;
function aX(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Account=e['A'];
	$.BlobLinkString=e['p'];
	if(e['d']!=null)$.DecryptedHash=new Buffer(e['d'],'base64');
}
aX.prototype=new b();
aX.prototype.constructor = aX;
_=aX.prototype;
_.__type="LDChangeUserProfilePictureRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Account!=null)o['A']=$.Account;
	if($.BlobLinkString!=null)o['p']=$.BlobLinkString;
	if($.DecryptedHash!=null)o['d']=$.DecryptedHash.toString('base64');
	return o;
}
_.AdminAccount=null;
_.Account=null;
_.BlobLinkString=null;
_.DecryptedHash=null;
function aY(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Account=e['A'];
}
aY.prototype=new b();
aY.prototype.constructor = aY;
_=aY.prototype;
_.__type="LDDisableUserGameChallengeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Account!=null)o['A']=$.Account;
	return o;
}
_.AdminAccount=null;
_.Account=null;
function aZ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Account=e['A'];
}
aZ.prototype=new b();
aZ.prototype.constructor = aZ;
_=aZ.prototype;
_.__type="LDLogUserOutRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Account!=null)o['A']=$.Account;
	return o;
}
_.AdminAccount=null;
_.Account=null;
function b_(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Device=e['i'];
	$.AdminAccount=e['a'];
}
b_.prototype=new b();
b_.prototype.constructor = b_;
_=b_.prototype;
_.__type="LDGetDeviceRecordsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Device!=null)o['i']=$.Device;
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	return o;
}
_.Device=null;
_.AdminAccount=null;
function ba(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Cluster=e['c'];
	if(e['id']!=null)$.JobId=new Buffer(e['id'],'base64');
	$.JobIdAsRedisString=e['s'];
}
ba.prototype=new b();
ba.prototype.constructor = ba;
_=ba.prototype;
_.__type="LDDeleteScheduledJobRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.JobId!=null)o['id']=$.JobId.toString('base64');
	if($.JobIdAsRedisString!=null)o['s']=$.JobIdAsRedisString;
	return o;
}
_.AdminAccount=null;
_.Cluster=null;
_.JobId=null;
_.JobIdAsRedisString=null;
function bb(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Country=e['c'];
	$.Days=e['d'];
}
bb.prototype=new b();
bb.prototype.constructor = bb;
_=bb.prototype;
_.__type="LDCreateCountryWideFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Country!=null)o['c']=$.Country;
	if($.Days!=null)o['d']=$.Days;
	return o;
}
_.AdminAccount=null;
_.Country=null;
_.Days=null;
function bc(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	$.Duration=e['d'];
	$.Cluster=e['c'];
}
bc.prototype=new b();
bc.prototype.constructor = bc;
_=bc.prototype;
_.__type="LDAdminBanUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.Duration!=null)o['d']=$.Duration;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.Duration=null;
_.Cluster=null;
function bd(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	$.Cluster=e['c'];
}
bd.prototype=new b();
bd.prototype.constructor = bd;
_=bd.prototype;
_.__type="LDAdminUnbanUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.Cluster=null;
function be(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	if(e['s']!=null)$.AppScopeId=new fx(e['s']);
	if(e['i']!=null)$.ItemId=new fy(e['i']);
	$.PackageId=e['pid'];
	$.Duration=e['d'];
	$.Pub=e['p'];
	$.Cluster=e['c'];
}
be.prototype=new b();
be.prototype.constructor = be;
_=be.prototype;
_.__type="LDAdminBanUserFromAppRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.AppScopeId!=null)o['s']=$.AppScopeId.encode();
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.Duration!=null)o['d']=$.Duration;
	if($.Pub!=null)o['p']=$.Pub;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.AppScopeId=null;
_.ItemId=null;
_.PackageId=null;
_.Duration=null;
_.Pub=null;
_.Cluster=null;
function bf(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	if(e['s']!=null)$.AppScopeId=new fx(e['s']);
	if(e['i']!=null)$.ItemId=new fy(e['i']);
	$.PackageId=e['pid'];
	$.Pub=e['p'];
	$.Cluster=e['c'];
}
bf.prototype=new b();
bf.prototype.constructor = bf;
_=bf.prototype;
_.__type="LDAdminUnbanUserFromAppRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.AppScopeId!=null)o['s']=$.AppScopeId.encode();
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.Pub!=null)o['p']=$.Pub;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.AppScopeId=null;
_.ItemId=null;
_.PackageId=null;
_.Pub=null;
_.Cluster=null;
function bg(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Account=e['A'];
}
bg.prototype=new b();
bg.prototype.constructor = bg;
_=bg.prototype;
_.__type="LDAdminBlockUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Account!=null)o['A']=$.Account;
	return o;
}
_.AdminAccount=null;
_.Account=null;
function bh(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.UserKey=e['k'];
	$.Cluster=e['c'];
}
bh.prototype=new b();
bh.prototype.constructor = bh;
_=bh.prototype;
_.__type="LDGetPermissionsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.Cluster!=null)o['c']=$.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.Cluster=null;
function bj(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AccountDetails=new fz(e['a']);
	$.WasLegacy=e['l'];
	if(e['i']!=null)$.AppId=new Buffer(e['i'],'base64');
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
}
bj.prototype=new b();
bj.prototype.constructor = bj;
_=bj.prototype;
_.__type="LDAccountDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AccountDetails!=null)o['a']=$.AccountDetails.encode();
	if($.WasLegacy!=null)o['l']=$.WasLegacy;
	if($.AppId!=null)o['i']=$.AppId.toString('base64');
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	return o;
}
_.AccountDetails=null;
_.WasLegacy=null;
_.AppId=null;
_.Scopes=null;
function bk(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['I']!=null){
		$.Identities=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)$.Identities.push(new fw(d[k]));
	}
}
bk.prototype=new b();
bk.prototype.constructor = bk;
_=bk.prototype;
_.__type="LDGetLinkedIdentitiesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Identities!=null) {
		o['I']=[];
		var d=$.Identities;
		for(var k=0;k<d.length;++k) o['I'].push(d[k].encode());
	}
	return o;
}
_.Identities=null;
function bl(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Link=e['l'];
	$.Status=e['s'];
	$.RegisterAuthCode=e['r'];
	if(e['a']!=null)$.AccountDetailsResponse=new bj(e['a']);
}
bl.prototype=new b();
bl.prototype.constructor = bl;
_=bl.prototype;
_.__type="LDGetAppSigninLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Link!=null)o['l']=$.Link;
	if($.Status!=null)o['s']=$.Status;
	if($.RegisterAuthCode!=null)o['r']=$.RegisterAuthCode;
	if($.AccountDetailsResponse!=null)o['a']=$.AccountDetailsResponse.encode();
	return o;
}
_.Link=null;
_.Status=null;
_.RegisterAuthCode=null;
_.AccountDetailsResponse=null;
function bm(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Link=e['l'];
}
bm.prototype=new b();
bm.prototype.constructor = bm;
_=bm.prototype;
_.__type="LDGetSigninLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Link!=null)o['l']=$.Link;
	return o;
}
_.Link=null;
function bn(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AppName=e['n'];
	$.AppIconDirectLink=e['p'];
	if(e['S']!=null){
		$.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)$.Scopes.push(d[k]);
	}
	if(e['i']!=null)$.Identity=new fw(e['i']);
	$.AuthCode=e['c'];
}
bn.prototype=new b();
bn.prototype.constructor = bn;
_=bn.prototype;
_.__type="LDCheckSSOTokenResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AppName!=null)o['n']=$.AppName;
	if($.AppIconDirectLink!=null)o['p']=$.AppIconDirectLink;
	if($.Scopes!=null) {
		o['S']=[];
		var d=$.Scopes;
		for(var k=0;k<d.length;++k) o['S'].push(d[k]);
	}
	if($.Identity!=null)o['i']=$.Identity.encode();
	if($.AuthCode!=null)o['c']=$.AuthCode;
	return o;
}
_.AppName=null;
_.AppIconDirectLink=null;
_.Scopes=null;
_.Identity=null;
_.AuthCode=null;
function bo(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null){
		$.Records=[];
		var d = e['r'];
		for(var k=0;k<d.length;++k)$.Records.push(d[k]);
	}
}
bo.prototype=new b();
bo.prototype.constructor = bo;
_=bo.prototype;
_.__type="LDGetIdentityRecordsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Records!=null) {
		o['r']=[];
		var d=$.Records;
		for(var k=0;k<d.length;++k) o['r'].push(d[k]);
	}
	return o;
}
_.Records=null;
function bp(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null){
		$.Details=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)$.Details.push(new fA(d[k]));
	}
	if(e['k']!=null)$.ContinuationKey=new Buffer(e['k'],'base64');
}
bp.prototype=new b();
bp.prototype.constructor = bp;
_=bp.prototype;
_.__type="LDListFlaggedUsersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Details!=null) {
		o['d']=[];
		var d=$.Details;
		for(var k=0;k<d.length;++k) o['d'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['k']=$.ContinuationKey.toString('base64');
	return o;
}
_.Details=null;
_.ContinuationKey=null;
function bq(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['r']!=null){
		$.Records=[];
		var d = e['r'];
		for(var k=0;k<d.length;++k)$.Records.push(d[k]);
	}
}
bq.prototype=new b();
bq.prototype.constructor = bq;
_=bq.prototype;
_.__type="LDGetDeviceRecordsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Records!=null) {
		o['r']=[];
		var d=$.Records;
		for(var k=0;k<d.length;++k) o['r'].push(d[k]);
	}
	return o;
}
_.Records=null;
function br(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['pp']!=null)$.PrettyPermissions=new fB(e['pp']);
}
br.prototype=new b();
br.prototype.constructor = br;
_=br.prototype;
_.__type="LDGetPermissionsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PrettyPermissions!=null)o['pp']=$.PrettyPermissions.encode();
	return o;
}
_.PrettyPermissions=null;
function bs(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bs.prototype=new b();
bs.prototype.constructor = bs;
_=bs.prototype;
_.__type="LDCreateFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bt(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Timestamp=e['t'];
}
bt.prototype=new b();
bt.prototype.constructor = bt;
_=bt.prototype;
_.__type="LDGetMessagesSinceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Timestamp!=null)o['t']=$.Timestamp;
	return o;
}
_.Feed=null;
_.Timestamp=null;
function bu(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Timestamp=e['t'];
}
bu.prototype=new b();
bu.prototype.constructor = bu;
_=bu.prototype;
_.__type="LDGetMessagesBeforeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Timestamp!=null)o['t']=$.Timestamp;
	return o;
}
_.Feed=null;
_.Timestamp=null;
function bv(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Type=e['t'];
	if(e['n']!=null)$.NextResult=new Buffer(e['n'],'base64');
}
bv.prototype=new b();
bv.prototype.constructor = bv;
_=bv.prototype;
_.__type="LDGetMessagesByTypeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Type!=null)o['t']=$.Type;
	if($.NextResult!=null)o['n']=$.NextResult.toString('base64');
	return o;
}
_.Feed=null;
_.Type=null;
_.NextResult=null;
function bw(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.Id=new fC(e['i']);
}
bw.prototype=new b();
bw.prototype.constructor = bw;
_=bw.prototype;
_.__type="LDGetMessageByIdRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	return o;
}
_.Feed=null;
_.Id=null;
function bx(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.Id=new fC(e['i']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.Version=e['v'];
	$.AnyMemberWritable=e['w'];
	$.FromDevice=e['d'];
}
bx.prototype=new b();
bx.prototype.constructor = bx;
_=bx.prototype;
_.__type="LDAddMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.AnyMemberWritable!=null)o['w']=$.AnyMemberWritable;
	if($.FromDevice!=null)o['d']=$.FromDevice;
	return o;
}
_.Feed=null;
_.Id=null;
_.Body=null;
_.Version=null;
_.AnyMemberWritable=null;
_.FromDevice=null;
function by(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.Id=new fC(e['i']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.AnyMemberWritable=e['w'];
	$.OldVersion=e['o'];
	$.NewVersion=e['n'];
	$.FromDevice=e['d'];
}
by.prototype=new b();
by.prototype.constructor = by;
_=by.prototype;
_.__type="LDUpdateMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.AnyMemberWritable!=null)o['w']=$.AnyMemberWritable;
	if($.OldVersion!=null)o['o']=$.OldVersion;
	if($.NewVersion!=null)o['n']=$.NewVersion;
	if($.FromDevice!=null)o['d']=$.FromDevice;
	return o;
}
_.Feed=null;
_.Id=null;
_.Body=null;
_.AnyMemberWritable=null;
_.OldVersion=null;
_.NewVersion=null;
_.FromDevice=null;
function bz(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.Id=new fC(e['i']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.Version=e['v'];
	$.AnyMemberWritable=e['w'];
	if(e['m']!=null)$.Metadata=new Buffer(e['m'],'base64');
	$.FromDevice=e['d'];
}
bz.prototype=new b();
bz.prototype.constructor = bz;
_=bz.prototype;
_.__type="LDOverwriteMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.AnyMemberWritable!=null)o['w']=$.AnyMemberWritable;
	if($.Metadata!=null)o['m']=$.Metadata.toString('base64');
	if($.FromDevice!=null)o['d']=$.FromDevice;
	return o;
}
_.Feed=null;
_.Id=null;
_.Body=null;
_.Version=null;
_.AnyMemberWritable=null;
_.Metadata=null;
_.FromDevice=null;
function bA(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.Id=new fC(e['i']);
}
bA.prototype=new b();
bA.prototype.constructor = bA;
_=bA.prototype;
_.__type="LDDeleteMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	return o;
}
_.Feed=null;
_.Id=null;
function bB(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bB.prototype=new b();
bB.prototype.constructor = bB;
_=bB.prototype;
_.__type="LDSubscribeFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bC(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bC.prototype=new b();
bC.prototype.constructor = bC;
_=bC.prototype;
_.__type="LDUnsubscribeFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bD(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bD.prototype=new b();
bD.prototype.constructor = bD;
_=bD.prototype;
_.__type="LDSubscribeFeedRealtimeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bE(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bE.prototype=new b();
bE.prototype.constructor = bE;
_=bE.prototype;
_.__type="LDUnsubscribeFeedRealtimeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bF(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Member=e['m'];
	if(e['A']!=null)$.Acl=new fD(e['A']);
}
bF.prototype=new b();
bF.prototype.constructor = bF;
_=bF.prototype;
_.__type="LDAddMemberRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Member!=null)o['m']=$.Member;
	if($.Acl!=null)o['A']=$.Acl.encode();
	return o;
}
_.Feed=null;
_.Member=null;
_.Acl=null;
function bG(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Member=e['m'];
	if(e['A']!=null)$.Acl=new fD(e['A']);
}
bG.prototype=new b();
bG.prototype.constructor = bG;
_=bG.prototype;
_.__type="LDRemoveMemberRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Member!=null)o['m']=$.Member;
	if($.Acl!=null)o['A']=$.Acl.encode();
	return o;
}
_.Feed=null;
_.Member=null;
_.Acl=null;
function bH(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Name=e['n'];
}
bH.prototype=new b();
bH.prototype.constructor = bH;
_=bH.prototype;
_.__type="LDSetFeedNameRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Name!=null)o['n']=$.Name;
	return o;
}
_.Feed=null;
_.Name=null;
function bI(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.BlobLinkString=e['p'];
	if(e['d']!=null)$.DecryptedHash=new Buffer(e['d'],'base64');
}
bI.prototype=new b();
bI.prototype.constructor = bI;
_=bI.prototype;
_.__type="LDSetFeedThumbnailRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.BlobLinkString!=null)o['p']=$.BlobLinkString;
	if($.DecryptedHash!=null)o['d']=$.DecryptedHash.toString('base64');
	return o;
}
_.Feed=null;
_.BlobLinkString=null;
_.DecryptedHash=null;
function bJ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.BlobLinkString=e['p'];
	if(e['d']!=null)$.DecryptedHash=new Buffer(e['d'],'base64');
}
bJ.prototype=new b();
bJ.prototype.constructor = bJ;
_=bJ.prototype;
_.__type="LDSetFeedVideoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.BlobLinkString!=null)o['p']=$.BlobLinkString;
	if($.DecryptedHash!=null)o['d']=$.DecryptedHash.toString('base64');
	return o;
}
_.Feed=null;
_.BlobLinkString=null;
_.DecryptedHash=null;
function bK(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Type=e['t'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
}
bK.prototype=new b();
bK.prototype.constructor = bK;
_=bK.prototype;
_.__type="LDSendRealtimeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Type!=null)o['t']=$.Type;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	return o;
}
_.Feed=null;
_.Type=null;
_.Body=null;
function fE(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
fE.prototype=new b();
fE.prototype.constructor = fE;
_=fE.prototype;
_.__type="LDClusterPartitionableRpcRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function bL(e){
	fE.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null){
		$.Accounts=[];
		var d = e['a'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
	$.Type=e['t'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
}
bL.prototype=new fE();
bL.prototype.constructor = bL;
_=bL.prototype;
_.__type="LDSendRealtimeToAccountsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	fE.prototype.encode.call($,o);
	if($.Accounts!=null) {
		o['a']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['a'].push(d[k]);
	}
	if($.Type!=null)o['t']=$.Type;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	return o;
}
_.Accounts=null;
_.Type=null;
_.Body=null;
function bM(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.IdentityHash=new fF(e['i']);
	if(e['I']!=null)$.Identity=new fw(e['I']);
}
bM.prototype=new b();
bM.prototype.constructor = bM;
_=bM.prototype;
_.__type="LDAddPendingInvitationRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.IdentityHash!=null)o['i']=$.IdentityHash.encode();
	if($.Identity!=null)o['I']=$.Identity.encode();
	return o;
}
_.Feed=null;
_.IdentityHash=null;
_.Identity=null;
function bN(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.IdentityHash=new fF(e['i']);
}
bN.prototype=new b();
bN.prototype.constructor = bN;
_=bN.prototype;
_.__type="LDRemovePendingInvitationRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.IdentityHash!=null)o['i']=$.IdentityHash.encode();
	return o;
}
_.Feed=null;
_.IdentityHash=null;
function bO(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bO.prototype=new b();
bO.prototype.constructor = bO;
_=bO.prototype;
_.__type="LDGetJoinFeedLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bP(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Pin=e['p'];
}
bP.prototype=new b();
bP.prototype.constructor = bP;
_=bP.prototype;
_.__type="LDJoinFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Pin!=null)o['p']=$.Pin;
	return o;
}
_.Feed=null;
_.Pin=null;
function bQ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Pin=e['p'];
}
bQ.prototype=new b();
bQ.prototype.constructor = bQ;
_=bQ.prototype;
_.__type="LDJoinBroadcastRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Pin!=null)o['p']=$.Pin;
	return o;
}
_.Feed=null;
_.Pin=null;
function bR(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.PubliclyReadable=e['r'];
	$.MemberReadable=e['mr'];
	$.PubliclyWritable=e['pw'];
	$.MemberWritable=e['mw'];
	$.MemberFeedSettingsModifiable=e['mfs'];
	$.MemberMembersAddable=e['mma'];
	$.MemberMembersRemovable=e['mmr'];
}
bR.prototype=new b();
bR.prototype.constructor = bR;
_=bR.prototype;
_.__type="LDSetDefaultAccessRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.PubliclyReadable!=null)o['r']=$.PubliclyReadable;
	if($.MemberReadable!=null)o['mr']=$.MemberReadable;
	if($.PubliclyWritable!=null)o['pw']=$.PubliclyWritable;
	if($.MemberWritable!=null)o['mw']=$.MemberWritable;
	if($.MemberFeedSettingsModifiable!=null)o['mfs']=$.MemberFeedSettingsModifiable;
	if($.MemberMembersAddable!=null)o['mma']=$.MemberMembersAddable;
	if($.MemberMembersRemovable!=null)o['mmr']=$.MemberMembersRemovable;
	return o;
}
_.Feed=null;
_.PubliclyReadable=null;
_.MemberReadable=null;
_.PubliclyWritable=null;
_.MemberWritable=null;
_.MemberFeedSettingsModifiable=null;
_.MemberMembersAddable=null;
_.MemberMembersRemovable=null;
function bS(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bS.prototype=new b();
bS.prototype.constructor = bS;
_=bS.prototype;
_.__type="LDGetPublicFeedDetailsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bT(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.Id=new fC(e['i']);
	$.Javascript=e['j'];
	$.Parameters=e['p'];
}
bT.prototype=new b();
bT.prototype.constructor = bT;
_=bT.prototype;
_.__type="LDApplyDocumentTransformRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Javascript!=null)o['j']=$.Javascript;
	if($.Parameters!=null)o['p']=$.Parameters;
	return o;
}
_.Feed=null;
_.Id=null;
_.Javascript=null;
_.Parameters=null;
function bU(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new fG(e['m']);
}
bU.prototype=new b();
bU.prototype.constructor = bU;
_=bU.prototype;
_.__type="LDMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;
function bV(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new fH(e['m']);
}
bV.prototype=new b();
bV.prototype.constructor = bV;
_=bV.prototype;
_.__type="LDRealtimeMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;
function bW(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bW.prototype=new b();
bW.prototype.constructor = bW;
_=bW.prototype;
_.__type="LDMessageTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bX(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
bX.prototype=new b();
bX.prototype.constructor = bX;
_=bX.prototype;
_.__type="LDGetFeedStateRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function bY(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Acceptance=e['s'];
}
bY.prototype=new b();
bY.prototype.constructor = bY;
_=bY.prototype;
_.__type="LDSetFeedAcceptanceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Acceptance!=null)o['s']=$.Acceptance;
	return o;
}
_.Feed=null;
_.Acceptance=null;
function bZ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Since=e['s'];
}
bZ.prototype=new b();
bZ.prototype.constructor = bZ;
_=bZ.prototype;
_.__type="LDGetDirtyFeedsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Since!=null)o['s']=$.Since;
	return o;
}
_.Since=null;
function c_(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
c_.prototype=new b();
c_.prototype.constructor = c_;
_=c_.prototype;
_.__type="LDSubscribeForAccountInboxRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function ca(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
ca.prototype=new b();
ca.prototype.constructor = ca;
_=ca.prototype;
_.__type="LDUnsubscribeForAccountInboxRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function cb(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.PushKey=new fI(e['p']);
}
cb.prototype=new b();
cb.prototype.constructor = cb;
_=cb.prototype;
_.__type="LDRegisterPushNotificationKeyRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PushKey!=null)o['p']=$.PushKey.encode();
	return o;
}
_.PushKey=null;
function cc(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new fG(e['m']);
}
cc.prototype=new b();
cc.prototype.constructor = cc;
_=cc.prototype;
_.__type="LDInboxDeliveryMessagePush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;
function cd(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
cd.prototype=new b();
cd.prototype.constructor = cd;
_=cd.prototype;
_.__type="LDInboxDeliveryTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function ce(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.BadgeCount=e['b'];
}
ce.prototype=new b();
ce.prototype.constructor = ce;
_=ce.prototype;
_.__type="LDSetAppleBadgeCountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BadgeCount!=null)o['b']=$.BadgeCount;
	return o;
}
_.BadgeCount=null;
function cf(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Cluster=e['c'];
	if(e['m']!=null)$.Metadata=new fJ(e['m']);
	$.IsPermanent=e['p'];
	if(e['prt']!=null)$.PermanenceRefTag=new Buffer(e['prt'],'base64');
	$.PreferInsecure=e['e'];
	$.AllowLarge=e['l'];
}
cf.prototype=new b();
cf.prototype.constructor = cf;
_=cf.prototype;
_.__type="LDGetUploadTicketRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.Metadata!=null)o['m']=$.Metadata.encode();
	if($.IsPermanent!=null)o['p']=$.IsPermanent;
	if($.PermanenceRefTag!=null)o['prt']=$.PermanenceRefTag.toString('base64');
	if($.PreferInsecure!=null)o['e']=$.PreferInsecure;
	if($.AllowLarge!=null)o['l']=$.AllowLarge;
	return o;
}
_.Account=null;
_.Cluster=null;
_.Metadata=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
_.PreferInsecure=null;
_.AllowLarge=null;
function cg(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Cluster=e['c'];
	if(e['wm']!=null)$.WholeMetadata=new fJ(e['wm']);
	if(e['pm']!=null){
		$.PartMetadataList=[];
		var d = e['pm'];
		for(var k=0; k<d.length;++k)$.PartMetadataList.push(new fJ(d[k]));
	}
	$.IsPermanent=e['p'];
	if(e['prt']!=null)$.PermanenceRefTag=new Buffer(e['prt'],'base64');
	$.PreferInsecure=e['e'];
}
cg.prototype=new b();
cg.prototype.constructor = cg;
_=cg.prototype;
_.__type="LDGetMultipartUploadTicketRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.WholeMetadata!=null)o['wm']=$.WholeMetadata.encode();
	if($.PartMetadataList!=null) {
		o['pm']=[];
		var d=$.PartMetadataList;
		for(var k=0;k<d.length;++k) o['pm'].push(d[k].encode());
	}
	if($.IsPermanent!=null)o['p']=$.IsPermanent;
	if($.PermanenceRefTag!=null)o['prt']=$.PermanenceRefTag.toString('base64');
	if($.PreferInsecure!=null)o['e']=$.PreferInsecure;
	return o;
}
_.Account=null;
_.Cluster=null;
_.WholeMetadata=null;
_.PartMetadataList=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
_.PreferInsecure=null;
function ch(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.BlobUploadTicket=new fK(e['ut']);
}
ch.prototype=new b();
ch.prototype.constructor = ch;
_=ch.prototype;
_.__type="LDVerifyUploadCompletedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BlobUploadTicket!=null)o['ut']=$.BlobUploadTicket.encode();
	return o;
}
_.BlobUploadTicket=null;
function ci(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['l'];
	$.PreferInsecure=e['e'];
}
ci.prototype=new b();
ci.prototype.constructor = ci;
_=ci.prototype;
_.__type="LDGetDownloadTicketRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['l']=$.BlobLinkString;
	if($.PreferInsecure!=null)o['e']=$.PreferInsecure;
	return o;
}
_.BlobLinkString=null;
_.PreferInsecure=null;
function cj(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['l'];
	$.IsPermanent=e['p'];
	if(e['prt']!=null)$.PermanenceRefTag=new Buffer(e['prt'],'base64');
}
cj.prototype=new b();
cj.prototype.constructor = cj;
_=cj.prototype;
_.__type="LDVerifyExistsAndPermanenceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['l']=$.BlobLinkString;
	if($.IsPermanent!=null)o['p']=$.IsPermanent;
	if($.PermanenceRefTag!=null)o['prt']=$.PermanenceRefTag.toString('base64');
	return o;
}
_.BlobLinkString=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
function ck(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ContactAccount=e['c'];
}
ck.prototype=new b();
ck.prototype.constructor = ck;
_=ck.prototype;
_.__type="LDOverwriteContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContactAccount!=null)o['c']=$.ContactAccount;
	return o;
}
_.ContactAccount=null;
function cl(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ContactAccount=e['c'];
}
cl.prototype=new b();
cl.prototype.constructor = cl;
_=cl.prototype;
_.__type="LDRemoveContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContactAccount!=null)o['c']=$.ContactAccount;
	return o;
}
_.ContactAccount=null;
function cm(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactDetails=new fL(e['c']);
}
cm.prototype=new b();
cm.prototype.constructor = cm;
_=cm.prototype;
_.__type="LDBlockContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContactDetails!=null)o['c']=$.ContactDetails.encode();
	return o;
}
_.ContactDetails=null;
function cn(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ContactAccount=e['c'];
}
cn.prototype=new b();
cn.prototype.constructor = cn;
_=cn.prototype;
_.__type="LDUnblockContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContactAccount!=null)o['c']=$.ContactAccount;
	return o;
}
_.ContactAccount=null;
function co(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
co.prototype=new b();
co.prototype.constructor = co;
_=co.prototype;
_.__type="LDGetProfileDetailsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function cp(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Name=e['n'];
}
cp.prototype=new b();
cp.prototype.constructor = cp;
_=cp.prototype;
_.__type="LDSetProfileNameRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Name!=null)o['n']=$.Name;
	return o;
}
_.Name=null;
function cq(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['p'];
	if(e['d']!=null)$.DecryptedHash=new Buffer(e['d'],'base64');
}
cq.prototype=new b();
cq.prototype.constructor = cq;
_=cq.prototype;
_.__type="LDSetProfilePictureRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['p']=$.BlobLinkString;
	if($.DecryptedHash!=null)o['d']=$.DecryptedHash.toString('base64');
	return o;
}
_.BlobLinkString=null;
_.DecryptedHash=null;
function cr(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.BlobLinkString=e['p'];
	if(e['d']!=null)$.DecryptedHash=new Buffer(e['d'],'base64');
}
cr.prototype=new b();
cr.prototype.constructor = cr;
_=cr.prototype;
_.__type="LDSetProfileVideoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BlobLinkString!=null)o['p']=$.BlobLinkString;
	if($.DecryptedHash!=null)o['d']=$.DecryptedHash.toString('base64');
	return o;
}
_.BlobLinkString=null;
_.DecryptedHash=null;
function cs(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.RequestedAccount=e['c'];
}
cs.prototype=new b();
cs.prototype.constructor = cs;
_=cs.prototype;
_.__type="LDGetOmletContactProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.RequestedAccount!=null)o['c']=$.RequestedAccount;
	return o;
}
_.RequestedAccount=null;
function ct(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new fy(d[k]));
	}
	if(e['pd']!=null)$.PurchaseData=new fM(e['pd']);
}
ct.prototype=new b();
ct.prototype.constructor = ct;
_=ct.prototype;
_.__type="LDAddItemsToProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Items!=null) {
		o['i']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.PurchaseData!=null)o['pd']=$.PurchaseData.encode();
	return o;
}
_.ItemType=null;
_.Items=null;
_.PurchaseData=null;
function cu(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new fy(d[k]));
	}
}
cu.prototype=new b();
cu.prototype.constructor = cu;
_=cu.prototype;
_.__type="LDRemoveItemsFromProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Items!=null) {
		o['i']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.ItemType=null;
_.Items=null;
function cv(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)$.Features.push(d[k]);
	}
}
cv.prototype=new b();
cv.prototype.constructor = cv;
_=cv.prototype;
_.__type="LDAddFeaturesToProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Features!=null) {
		o['f']=[];
		var d=$.Features;
		for(var k=0;k<d.length;++k) o['f'].push(d[k]);
	}
	return o;
}
_.Features=null;
function cw(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)$.Features.push(d[k]);
	}
}
cw.prototype=new b();
cw.prototype.constructor = cw;
_=cw.prototype;
_.__type="LDRemoveFeaturesFromProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Features!=null) {
		o['f']=[];
		var d=$.Features;
		for(var k=0;k<d.length;++k) o['f'].push(d[k]);
	}
	return o;
}
_.Features=null;
function cx(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.RequestedAccount=e['c'];
}
cx.prototype=new b();
cx.prototype.constructor = cx;
_=cx.prototype;
_.__type="LDGetProfilePublicStateRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.RequestedAccount!=null)o['c']=$.RequestedAccount;
	return o;
}
_.RequestedAccount=null;
function cy(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.RequestedAccount=e['c'];
}
cy.prototype=new b();
cy.prototype.constructor = cy;
_=cy.prototype;
_.__type="LDGetContactProfileAndPublicStateRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.RequestedAccount!=null)o['c']=$.RequestedAccount;
	return o;
}
_.RequestedAccount=null;
function cz(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null){
		$.IdentityHashes=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.IdentityHashes.push(new fF(d[k]));
	}
}
cz.prototype=new b();
cz.prototype.constructor = cz;
_=cz.prototype;
_.__type="LDUploadAddressBookEntriesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.IdentityHashes!=null) {
		o['i']=[];
		var d=$.IdentityHashes;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.IdentityHashes=null;
function cA(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.IdentityHash=new fF(e['i']);
}
cA.prototype=new b();
cA.prototype.constructor = cA;
_=cA.prototype;
_.__type="LDGetContactProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.IdentityHash!=null)o['i']=$.IdentityHash.encode();
	return o;
}
_.IdentityHash=null;
function cB(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
cB.prototype=new b();
cB.prototype.constructor = cB;
_=cB.prototype;
_.__type="LDGetAddMeLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function cC(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Token=e['t'];
}
cC.prototype=new b();
cC.prototype.constructor = cC;
_=cC.prototype;
_.__type="LDMutualAddContactByTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Account=null;
_.Token=null;
function cD(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
	$.ItemId=e['id'];
	if(e['u']!=null)$.ItemInfoUserMutableContainer=new fN(e['u']);
}
_=cD.prototype;
_.__type="LDCreateItemInfoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	if($.ItemId!=null)o['id']=$.ItemId;
	if($.ItemInfoUserMutableContainer!=null)o['u']=$.ItemInfoUserMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoUserMutableContainer=null;
function cE(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
	$.ItemId=e['ai'];
	if(e['u']!=null)$.ItemInfoUserMutableContainer=new fN(e['u']);
}
_=cE.prototype;
_.__type="LDUserUpdateItemInfoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	if($.ItemId!=null)o['ai']=$.ItemId;
	if($.ItemInfoUserMutableContainer!=null)o['u']=$.ItemInfoUserMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoUserMutableContainer=null;
function cF(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
	$.ItemId=e['id'];
	if(e['u']!=null)$.ItemInfoSystemMutableContainer=new fO(e['u']);
}
_=cF.prototype;
_.__type="LDSystemUpdateItemInfoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	if($.ItemId!=null)o['id']=$.ItemId;
	if($.ItemInfoSystemMutableContainer!=null)o['u']=$.ItemInfoSystemMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoSystemMutableContainer=null;
function cG(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ItemId=new fy(e['id']);
}
_=cG.prototype;
_.__type="LDGetItemInfoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['id']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function cH(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ItemId=new fy(e['i']);
}
_=cH.prototype;
_.__type="LDReviewItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function cI(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ItemId=new fy(e['i']);
}
_=cI.prototype;
_.__type="LDPublishItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function cJ(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ItemId=new fy(e['i']);
}
_=cJ.prototype;
_.__type="LDUnpublishItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function cK(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
	$.ItemId=e['id'];
}
_=cK.prototype;
_.__type="LDDeleteItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	if($.ItemId!=null)o['id']=$.ItemId;
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
function cL(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Account=e['ac'];
}
_=cL.prototype;
_.__type="LDListItemsForAccountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Account!=null)o['ac']=$.Account;
	return o;
}
_.ItemType=null;
_.Account=null;
function cM(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
_=cM.prototype;
_.__type="LDListAllItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.ItemType=null;
_.ContinuationKey=null;
function cN(e){
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.LastModified=e['lm'];
}
_=cN.prototype;
_.__type="LDListPublishedItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.LastModified!=null)o['lm']=$.LastModified;
	return o;
}
_.ItemType=null;
_.ContinuationKey=null;
_.LastModified=null;
function cO(e){
	if(!e)return;
	var $=this;
	if(e['ii']!=null)$.ItemId=new fy(e['ii']);
	$.ExpirationTime=e['e'];
}
_=cO.prototype;
_.__type="LDGenerateGrantForItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['ii']=$.ItemId.encode();
	if($.ExpirationTime!=null)o['e']=$.ExpirationTime;
	return o;
}
_.ItemId=null;
_.ExpirationTime=null;
function cP(e){
	if(!e)return;
	var $=this;
	$.Grant=e['g'];
}
_=cP.prototype;
_.__type="LDGetItemUsingGrantRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Grant!=null)o['g']=$.Grant;
	return o;
}
_.Grant=null;
function cQ(e){
	if(!e)return;
	var $=this;
	if(e['ii']!=null)$.ItemId=new fy(e['ii']);
}
_=cQ.prototype;
_.__type="LDDoesItemHaveGrantRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['ii']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function cR(e){
	if(!e)return;
	var $=this;
	if(e['ii']!=null)$.ItemId=new fy(e['ii']);
}
_=cR.prototype;
_.__type="LDDeleteGrantForItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['ii']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function cS(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ItemId=new fy(e['id']);
}
_=cS.prototype;
_.__type="LDGenerateApiKeyRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['id']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function cT(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ClientApiKeyId=new Buffer(e['id'],'base64');
}
_=cT.prototype;
_.__type="LDDeactivateApiKeyRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ClientApiKeyId!=null)o['id']=$.ClientApiKeyId.toString('base64');
	return o;
}
_.ClientApiKeyId=null;
function cU(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ItemId=new fy(e['id']);
}
_=cU.prototype;
_.__type="LDListApiKeysRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['id']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function cV(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['k']!=null)$.PublicKey=new Buffer(e['k'],'base64');
}
cV.prototype=new b();
cV.prototype.constructor = cV;
_=cV.prototype;
_.__type="LDDeleteDeviceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PublicKey!=null)o['k']=$.PublicKey.toString('base64');
	return o;
}
_.PublicKey=null;
function cW(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['k']!=null)$.PublicKey=new Buffer(e['k'],'base64');
	$.Version=e['v'];
	$.Description=e['d'];
}
cW.prototype=new b();
cW.prototype.constructor = cW;
_=cW.prototype;
_.__type="LDAddDeviceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PublicKey!=null)o['k']=$.PublicKey.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.Description!=null)o['d']=$.Description;
	return o;
}
_.PublicKey=null;
_.Version=null;
_.Description=null;
function cX(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.DingTimeoutMillis=e['t'];
}
cX.prototype=new b();
cX.prototype.constructor = cX;
_=cX.prototype;
_.__type="LDSetDingTimeoutRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.DingTimeoutMillis!=null)o['t']=$.DingTimeoutMillis;
	return o;
}
_.DingTimeoutMillis=null;
function cY(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
cY.prototype=new b();
cY.prototype.constructor = cY;
_=cY.prototype;
_.__type="LDGetCloudConfigRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function cZ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.Config=new fP(e['c']);
}
cZ.prototype=new b();
cZ.prototype.constructor = cZ;
_=cZ.prototype;
_.__type="LDSetCloudConfigRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Config!=null)o['c']=$.Config.encode();
	return o;
}
_.Config=null;
function d_(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.DoNotTriggerSync=e['t'];
}
d_.prototype=new b();
d_.prototype.constructor = d_;
_=d_.prototype;
_.__type="LDRefreshCloudConfigRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.DoNotTriggerSync!=null)o['t']=$.DoNotTriggerSync;
	return o;
}
_.DoNotTriggerSync=null;
function da(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
da.prototype=new b();
da.prototype.constructor = da;
_=da.prototype;
_.__type="LDDisconnectCloudSyncRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function db(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.OptIn=e['o'];
	$.ServerKicked=e['k'];
	$.Account=e['a'];
}
db.prototype=new b();
db.prototype.constructor = db;
_=db.prototype;
_.__type="LDOptInForAllGamesChallengesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.OptIn!=null)o['o']=$.OptIn;
	if($.ServerKicked!=null)o['k']=$.ServerKicked;
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.OptIn=null;
_.ServerKicked=null;
_.Account=null;
function dc(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['g']!=null)$.GameId=new fy(e['g']);
	$.Latitude=e['x'];
	$.Longitude=e['y'];
}
dc.prototype=new b();
dc.prototype.constructor = dc;
_=dc.prototype;
_.__type="LDFindGamersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.GameId!=null)o['g']=$.GameId.encode();
	if($.Latitude!=null)o['x']=$.Latitude;
	if($.Longitude!=null)o['y']=$.Longitude;
	return o;
}
_.GameId=null;
_.Latitude=null;
_.Longitude=null;
function dd(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Latitude=e['x'];
	$.Longitude=e['y'];
}
dd.prototype=new b();
dd.prototype.constructor = dd;
_=dd.prototype;
_.__type="LDUpdateChallengeLocationRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Latitude!=null)o['x']=$.Latitude;
	if($.Longitude!=null)o['y']=$.Longitude;
	return o;
}
_.Latitude=null;
_.Longitude=null;
function de(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Id=new fQ(e['i']);
	$.Score=e['s'];
	$.ChallengeRejected=e['x'];
	if(e['l']!=null)$.ChallengeeLocation=new fR(e['l']);
}
de.prototype=new b();
de.prototype.constructor = de;
_=de.prototype;
_.__type="LDGameChallengeCompleteRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Score!=null)o['s']=$.Score;
	if($.ChallengeRejected!=null)o['x']=$.ChallengeRejected;
	if($.ChallengeeLocation!=null)o['l']=$.ChallengeeLocation.encode();
	return o;
}
_.Id=null;
_.Score=null;
_.ChallengeRejected=null;
_.ChallengeeLocation=null;
function df(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Id=new fQ(e['i']);
	$.ReceiverAccount=e['r'];
	if(e['g']!=null)$.GameId=new fy(e['g']);
	$.Score=e['s'];
	$.GameState=e['t'];
	if(e['l']!=null)$.Location=new fR(e['l']);
}
df.prototype=new b();
df.prototype.constructor = df;
_=df.prototype;
_.__type="LDExtendChallengeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Id!=null)o['i']=$.Id.encode();
	if($.ReceiverAccount!=null)o['r']=$.ReceiverAccount;
	if($.GameId!=null)o['g']=$.GameId.encode();
	if($.Score!=null)o['s']=$.Score;
	if($.GameState!=null)o['t']=$.GameState;
	if($.Location!=null)o['l']=$.Location.encode();
	return o;
}
_.Id=null;
_.ReceiverAccount=null;
_.GameId=null;
_.Score=null;
_.GameState=null;
_.Location=null;
function dg(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['g']!=null)$.GameId=new fy(e['g']);
}
dg.prototype=new b();
dg.prototype.constructor = dg;
_=dg.prototype;
_.__type="LDCheckAccountOptedInRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.GameId!=null)o['g']=$.GameId.encode();
	return o;
}
_.Account=null;
_.GameId=null;
function dh(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.OptIn=e['o'];
	$.ServerKicked=e['k'];
	if(e['g']!=null)$.Game=new fy(e['g']);
	$.Account=e['a'];
	$.All=e['l'];
}
dh.prototype=new b();
dh.prototype.constructor = dh;
_=dh.prototype;
_.__type="LDOptInForGSChallengesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.OptIn!=null)o['o']=$.OptIn;
	if($.ServerKicked!=null)o['k']=$.ServerKicked;
	if($.Game!=null)o['g']=$.Game.encode();
	if($.Account!=null)o['a']=$.Account;
	if($.All!=null)o['l']=$.All;
	return o;
}
_.OptIn=null;
_.ServerKicked=null;
_.Game=null;
_.Account=null;
_.All=null;
function di(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Latitude=e['x'];
	$.Longitude=e['y'];
	if(e['g']!=null)$.GameId=new fy(e['g']);
	$.Tier=e['t'];
}
di.prototype=new b();
di.prototype.constructor = di;
_=di.prototype;
_.__type="LDFindGamersGSRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Latitude!=null)o['x']=$.Latitude;
	if($.Longitude!=null)o['y']=$.Longitude;
	if($.GameId!=null)o['g']=$.GameId.encode();
	if($.Tier!=null)o['t']=$.Tier;
	return o;
}
_.Latitude=null;
_.Longitude=null;
_.GameId=null;
_.Tier=null;
function dj(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.ProfilePictureLinkString=e['p'];
	if(e['d']!=null)$.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	$.Type=e['t'];
	$.CanRead=e['r'];
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
dj.prototype=new b();
dj.prototype.constructor = dj;
_=dj.prototype;
_.__type="LDCreateSubscriptionRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Name!=null)o['n']=$.Name;
	if($.ProfilePictureLinkString!=null)o['p']=$.ProfilePictureLinkString;
	if($.ProfileDecryptedHash!=null)o['d']=$.ProfileDecryptedHash.toString('base64');
	if($.Type!=null)o['t']=$.Type;
	if($.CanRead!=null)o['r']=$.CanRead;
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Name=null;
_.ProfilePictureLinkString=null;
_.ProfileDecryptedHash=null;
_.Type=null;
_.CanRead=null;
_.Feed=null;
function dk(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.GameId=new fy(e['id']);
	$.GameScoreboard=e['sb'];
	$.Account=e['a'];
	$.Latitude=e['la'];
	$.Longitude=e['lo'];
	$.SimilarScoresInCity=e['sc'];
	$.SimilarScoresInCountry=e['su'];
	$.SimilarScoresInContinent=e['st'];
	$.SimilarScoresGlobal=e['sg'];
	$.SimilarScoresLocal=e['sl'];
}
dk.prototype=new b();
dk.prototype.constructor = dk;
_=dk.prototype;
_.__type="LDGetHighScoreRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.GameId!=null)o['id']=$.GameId.encode();
	if($.GameScoreboard!=null)o['sb']=$.GameScoreboard;
	if($.Account!=null)o['a']=$.Account;
	if($.Latitude!=null)o['la']=$.Latitude;
	if($.Longitude!=null)o['lo']=$.Longitude;
	if($.SimilarScoresInCity!=null)o['sc']=$.SimilarScoresInCity;
	if($.SimilarScoresInCountry!=null)o['su']=$.SimilarScoresInCountry;
	if($.SimilarScoresInContinent!=null)o['st']=$.SimilarScoresInContinent;
	if($.SimilarScoresGlobal!=null)o['sg']=$.SimilarScoresGlobal;
	if($.SimilarScoresLocal!=null)o['sl']=$.SimilarScoresLocal;
	return o;
}
_.GameId=null;
_.GameScoreboard=null;
_.Account=null;
_.Latitude=null;
_.Longitude=null;
_.SimilarScoresInCity=null;
_.SimilarScoresInCountry=null;
_.SimilarScoresInContinent=null;
_.SimilarScoresGlobal=null;
_.SimilarScoresLocal=null;
function dl(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.GameId=new fy(e['id']);
	$.GameScoreboard=e['sb'];
	$.Score=e['s'];
	$.Latitude=e['la'];
	$.Longitude=e['lo'];
	$.SimilarScoresInCity=e['sc'];
	$.SimilarScoresInCountry=e['su'];
	$.SimilarScoresInContinent=e['st'];
	$.SimilarScoresGlobal=e['sg'];
	$.SimilarScoresLocal=e['sl'];
	$.Account=e['a'];
}
dl.prototype=new b();
dl.prototype.constructor = dl;
_=dl.prototype;
_.__type="LDReportScoreRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.GameId!=null)o['id']=$.GameId.encode();
	if($.GameScoreboard!=null)o['sb']=$.GameScoreboard;
	if($.Score!=null)o['s']=$.Score;
	if($.Latitude!=null)o['la']=$.Latitude;
	if($.Longitude!=null)o['lo']=$.Longitude;
	if($.SimilarScoresInCity!=null)o['sc']=$.SimilarScoresInCity;
	if($.SimilarScoresInCountry!=null)o['su']=$.SimilarScoresInCountry;
	if($.SimilarScoresInContinent!=null)o['st']=$.SimilarScoresInContinent;
	if($.SimilarScoresGlobal!=null)o['sg']=$.SimilarScoresGlobal;
	if($.SimilarScoresLocal!=null)o['sl']=$.SimilarScoresLocal;
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.GameId=null;
_.GameScoreboard=null;
_.Score=null;
_.Latitude=null;
_.Longitude=null;
_.SimilarScoresInCity=null;
_.SimilarScoresInCountry=null;
_.SimilarScoresInContinent=null;
_.SimilarScoresGlobal=null;
_.SimilarScoresLocal=null;
_.Account=null;
function dm(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.GameId=new fy(e['id']);
	$.GameScoreboard=e['sb'];
	$.Latitude=e['la'];
	$.Longitude=e['lo'];
	$.NumScores=e['n'];
	$.LocationType=e['l'];
}
dm.prototype=new b();
dm.prototype.constructor = dm;
_=dm.prototype;
_.__type="LDGetTopScoresRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.GameId!=null)o['id']=$.GameId.encode();
	if($.GameScoreboard!=null)o['sb']=$.GameScoreboard;
	if($.Latitude!=null)o['la']=$.Latitude;
	if($.Longitude!=null)o['lo']=$.Longitude;
	if($.NumScores!=null)o['n']=$.NumScores;
	if($.LocationType!=null)o['l']=$.LocationType;
	return o;
}
_.GameId=null;
_.GameScoreboard=null;
_.Latitude=null;
_.Longitude=null;
_.NumScores=null;
_.LocationType=null;
function dn(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Item=new fS(e['i']);
	$.Pin=e['p'];
	$.Ttl=e['e'];
	$.Latitude=e['a'];
	$.Longitude=e['g'];
	$.Radius=e['r'];
	$.Country=e['c'];
}
dn.prototype=new b();
dn.prototype.constructor = dn;
_=dn.prototype;
_.__type="LDBroadcastItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Item!=null)o['i']=$.Item.encode();
	if($.Pin!=null)o['p']=$.Pin;
	if($.Ttl!=null)o['e']=$.Ttl;
	if($.Latitude!=null)o['a']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.Radius!=null)o['r']=$.Radius;
	if($.Country!=null)o['c']=$.Country;
	return o;
}
_.Item=null;
_.Pin=null;
_.Ttl=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
_.Country=null;
function dp(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Item=new fS(e['i']);
}
dp.prototype=new b();
dp.prototype.constructor = dp;
_=dp.prototype;
_.__type="LDUnbroadcastItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Item!=null)o['i']=$.Item.encode();
	return o;
}
_.Item=null;
function dq(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['t'];
	$.Ttl=e['e'];
	$.Latitude=e['a'];
	$.Longitude=e['g'];
	$.Radius=e['r'];
}
dq.prototype=new b();
dq.prototype.constructor = dq;
_=dq.prototype;
_.__type="LDSubscribeForNearbyItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemType!=null)o['t']=$.ItemType;
	if($.Ttl!=null)o['e']=$.Ttl;
	if($.Latitude!=null)o['a']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.Radius!=null)o['r']=$.Radius;
	return o;
}
_.ItemType=null;
_.Ttl=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
function dr(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
dr.prototype=new b();
dr.prototype.constructor = dr;
_=dr.prototype;
_.__type="LDUnsubscribeForNearbyItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function ds(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['t'];
	$.Latitude=e['a'];
	$.Longitude=e['g'];
	$.Radius=e['r'];
}
ds.prototype=new b();
ds.prototype.constructor = ds;
_=ds.prototype;
_.__type="LDFetchNearbyItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemType!=null)o['t']=$.ItemType;
	if($.Latitude!=null)o['a']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.Radius!=null)o['r']=$.Radius;
	return o;
}
_.ItemType=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
function dt(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Item=new fS(e['i']);
}
dt.prototype=new b();
dt.prototype.constructor = dt;
_=dt.prototype;
_.__type="LDItemBroadcastStateChangedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Item!=null)o['i']=$.Item.encode();
	return o;
}
_.Item=null;
function du(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
du.prototype=new b();
du.prototype.constructor = du;
_=du.prototype;
_.__type="LDSubscriptionTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function dv(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Url=e['l'];
}
dv.prototype=new b();
dv.prototype.constructor = dv;
_=dv.prototype;
_.__type="LDUrlToStoryRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Url!=null)o['l']=$.Url;
	return o;
}
_.Url=null;
function dw(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Term=e['t'];
}
dw.prototype=new b();
dw.prototype.constructor = dw;
_=dw.prototype;
_.__type="LDImageSearchRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Term!=null)o['t']=$.Term;
	return o;
}
_.Term=null;
function dx(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Failure=e['t'];
}
dx.prototype=new b();
dx.prototype.constructor = dx;
_=dx.prototype;
_.__type="LDFailureReportRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Failure!=null)o['t']=$.Failure;
	return o;
}
_.Failure=null;
function dy(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['e']!=null){
		$.Events=[];
		var d = e['e'];
		for(var k=0; k<d.length;++k)$.Events.push(new fT(d[k]));
	}
}
dy.prototype=new b();
dy.prototype.constructor = dy;
_=dy.prototype;
_.__type="LDEventReportRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Events!=null) {
		o['e']=[];
		var d=$.Events;
		for(var k=0;k<d.length;++k) o['e'].push(d[k].encode());
	}
	return o;
}
_.Events=null;
function dz(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Reason=e['r'];
}
dz.prototype=new b();
dz.prototype.constructor = dz;
_=dz.prototype;
_.__type="LDFlagUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Reason!=null)o['r']=$.Reason;
	return o;
}
_.Account=null;
_.Reason=null;
function dA(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Type=e['t'];
}
dA.prototype=new b();
dA.prototype.constructor = dA;
_=dA.prototype;
_.__type="LDCreatePlaygroundRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Type!=null)o['t']=$.Type;
	return o;
}
_.Type=null;
function dB(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
dB.prototype=new b();
dB.prototype.constructor = dB;
_=dB.prototype;
_.__type="LDGetFeedbackAccountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function dC(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
dC.prototype=new b();
dC.prototype.constructor = dC;
_=dC.prototype;
_.__type="LDGetExtraVersionsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function dD(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['s']!=null)$.Sender=new fw(e['s']);
	if(e['r']!=null){
		$.Recipients=[];
		var d = e['r'];
		for(var k=0; k<d.length;++k)$.Recipients.push(new fw(d[k]));
	}
	$.FeedKind=e['k'];
}
dD.prototype=new b();
dD.prototype.constructor = dD;
_=dD.prototype;
_.__type="LDGetDirectFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Sender!=null)o['s']=$.Sender.encode();
	if($.Recipients!=null) {
		o['r']=[];
		var d=$.Recipients;
		for(var k=0;k<d.length;++k) o['r'].push(d[k].encode());
	}
	if($.FeedKind!=null)o['k']=$.FeedKind;
	return o;
}
_.Sender=null;
_.Recipients=null;
_.FeedKind=null;
function dE(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['_f']!=null)$.Feed=new aw(e['_f']);
	if(e['_a']!=null){
		$.Accounts=[];
		var d = e['_a'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
	if(e['s']!=null)$.Sender=new fw(e['s']);
	if(e['r']!=null){
		$.Recipients=[];
		var d = e['r'];
		for(var k=0; k<d.length;++k)$.Recipients.push(new fw(d[k]));
	}
	$.FeedKind=e['k'];
	if(e['i']!=null)$.Id=new fC(e['i']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.Version=e['v'];
	$.AnyMemberWritable=e['w'];
	$.SmsId=e['d'];
}
dE.prototype=new b();
dE.prototype.constructor = dE;
_=dE.prototype;
_.__type="LDSendDirectMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['_f']=$.Feed.encode();
	if($.Accounts!=null) {
		o['_a']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['_a'].push(d[k]);
	}
	if($.Sender!=null)o['s']=$.Sender.encode();
	if($.Recipients!=null) {
		o['r']=[];
		var d=$.Recipients;
		for(var k=0;k<d.length;++k) o['r'].push(d[k].encode());
	}
	if($.FeedKind!=null)o['k']=$.FeedKind;
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.AnyMemberWritable!=null)o['w']=$.AnyMemberWritable;
	if($.SmsId!=null)o['d']=$.SmsId;
	return o;
}
_.Feed=null;
_.Accounts=null;
_.Sender=null;
_.Recipients=null;
_.FeedKind=null;
_.Id=null;
_.Body=null;
_.Version=null;
_.AnyMemberWritable=null;
_.SmsId=null;
function dF(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.OptOut=e['o'];
}
dF.prototype=new b();
dF.prototype.constructor = dF;
_=dF.prototype;
_.__type="LDSetSmsParticipationRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.OptOut!=null)o['o']=$.OptOut;
	return o;
}
_.OptOut=null;
function fU(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AppName=e['ap'];
	$.AppIconBlobLink=e['ab'];
}
fU.prototype=new b();
fU.prototype.constructor = fU;
_=fU.prototype;
_.__type="LDPostBaseRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AppName!=null)o['ap']=$.AppName;
	if($.AppIconBlobLink!=null)o['ab']=$.AppIconBlobLink;
	return o;
}
_.AppName=null;
_.AppIconBlobLink=null;
function dG(e){
	fU.call(this,e);
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Description=e['d'];
	$.BlobLinkString=e['b'];
	if(e['r']!=null)$.VideoBlobRefTag=new Buffer(e['r'],'base64');
	$.Duration=e['dr'];
	$.ThumbnailBlobLinkString=e['B'];
	$.Height=e['H'];
	$.Width=e['W'];
	if(e['pt']!=null)$.PrimaryTag=new fV(e['pt']);
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new fV(d[k]));
	}
	if(e['rm']!=null){
		$.ReportMeta = {};
		var d = e['rm'];
		for(var k in d) $.ReportMeta[k]=d[k];
	}
}
dG.prototype=new fU();
dG.prototype.constructor = dG;
_=dG.prototype;
_.__type="LDPostVideoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	fU.prototype.encode.call($,o);
	if($.Title!=null)o['t']=$.Title;
	if($.Description!=null)o['d']=$.Description;
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.VideoBlobRefTag!=null)o['r']=$.VideoBlobRefTag.toString('base64');
	if($.Duration!=null)o['dr']=$.Duration;
	if($.ThumbnailBlobLinkString!=null)o['B']=$.ThumbnailBlobLinkString;
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	if($.PrimaryTag!=null)o['pt']=$.PrimaryTag.encode();
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
	if($.ReportMeta!=null){
		o['rm']={};
		var d=$.ReportMeta;
		for(var k in d)o['rm'][k]=d[k];
	}
	return o;
}
_.Title=null;
_.Description=null;
_.BlobLinkString=null;
_.VideoBlobRefTag=null;
_.Duration=null;
_.ThumbnailBlobLinkString=null;
_.Height=null;
_.Width=null;
_.PrimaryTag=null;
_.SecondaryTags=null;
_.ReportMeta=null;
function dH(e){
	fU.call(this,e);
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Message=e['m'];
	if(e['pt']!=null)$.PrimaryTag=new fV(e['pt']);
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new fV(d[k]));
	}
}
dH.prototype=new fU();
dH.prototype.constructor = dH;
_=dH.prototype;
_.__type="LDPostMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	fU.prototype.encode.call($,o);
	if($.Title!=null)o['t']=$.Title;
	if($.Message!=null)o['m']=$.Message;
	if($.PrimaryTag!=null)o['pt']=$.PrimaryTag.encode();
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
	return o;
}
_.Title=null;
_.Message=null;
_.PrimaryTag=null;
_.SecondaryTags=null;
function dI(e){
	fU.call(this,e);
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Description=e['d'];
	$.BlobLinkString=e['b'];
	$.ThumbnailLinkString=e['tn'];
	if(e['pt']!=null)$.PrimaryTag=new fV(e['pt']);
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new fV(d[k]));
	}
	$.Width=e['W'];
	$.Height=e['H'];
	if(e['rm']!=null){
		$.ReportMeta = {};
		var d = e['rm'];
		for(var k in d) $.ReportMeta[k]=d[k];
	}
}
dI.prototype=new fU();
dI.prototype.constructor = dI;
_=dI.prototype;
_.__type="LDPostScreenShotRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	fU.prototype.encode.call($,o);
	if($.Title!=null)o['t']=$.Title;
	if($.Description!=null)o['d']=$.Description;
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.ThumbnailLinkString!=null)o['tn']=$.ThumbnailLinkString;
	if($.PrimaryTag!=null)o['pt']=$.PrimaryTag.encode();
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
	if($.Width!=null)o['W']=$.Width;
	if($.Height!=null)o['H']=$.Height;
	if($.ReportMeta!=null){
		o['rm']={};
		var d=$.ReportMeta;
		for(var k in d)o['rm'][k]=d[k];
	}
	return o;
}
_.Title=null;
_.Description=null;
_.BlobLinkString=null;
_.ThumbnailLinkString=null;
_.PrimaryTag=null;
_.SecondaryTags=null;
_.Width=null;
_.Height=null;
_.ReportMeta=null;
function dJ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ud']!=null)$.PostId=new fW(e['ud']);
	$.Like=e['l'];
}
dJ.prototype=new b();
dJ.prototype.constructor = dJ;
_=dJ.prototype;
_.__type="LDLikePostRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['ud']=$.PostId.encode();
	if($.Like!=null)o['l']=$.Like;
	return o;
}
_.PostId=null;
_.Like=null;
function dK(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new fW(e['id']);
}
dK.prototype=new b();
dK.prototype.constructor = dK;
_=dK.prototype;
_.__type="LDAddViewRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	return o;
}
_.PostId=null;
function dL(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.AccountToFollow=e['a'];
	$.Follow=e['f'];
}
dL.prototype=new b();
dL.prototype.constructor = dL;
_=dL.prototype;
_.__type="LDFollowUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AccountToFollow!=null)o['a']=$.AccountToFollow;
	if($.Follow!=null)o['f']=$.Follow;
	return o;
}
_.AccountToFollow=null;
_.Follow=null;
function dM(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.PostsToGet=e['n'];
	$.After=e['t'];
}
dM.prototype=new b();
dM.prototype.constructor = dM;
_=dM.prototype;
_.__type="LDGetUserWallRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.PostsToGet!=null)o['n']=$.PostsToGet;
	if($.After!=null)o['t']=$.After;
	return o;
}
_.Account=null;
_.ContinuationKey=null;
_.PostsToGet=null;
_.After=null;
function dN(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.GameTag=e['g'];
	if(e['t']!=null)$.SecondTag=new fV(e['t']);
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.PostsToGet=e['n'];
}
dN.prototype=new b();
dN.prototype.constructor = dN;
_=dN.prototype;
_.__type="LDGetGameWallRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.GameTag!=null)o['g']=$.GameTag;
	if($.SecondTag!=null)o['t']=$.SecondTag.encode();
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.PostsToGet!=null)o['n']=$.PostsToGet;
	return o;
}
_.GameTag=null;
_.SecondTag=null;
_.ContinuationKey=null;
_.PostsToGet=null;
function dO(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
dO.prototype=new b();
dO.prototype.constructor = dO;
_=dO.prototype;
_.__type="LDGetFollowingWallRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.ContinuationKey=null;
function dP(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new fW(e['id']);
}
dP.prototype=new b();
dP.prototype.constructor = dP;
_=dP.prototype;
_.__type="LDGetPostRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	return o;
}
_.PostId=null;
function dQ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
dQ.prototype=new b();
dQ.prototype.constructor = dQ;
_=dQ.prototype;
_.__type="LDGetStandardPostTagsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function dR(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.NumToGet=e['n'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
dR.prototype=new b();
dR.prototype.constructor = dR;
_=dR.prototype;
_.__type="LDGetFollowersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.NumToGet!=null)o['n']=$.NumToGet;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Account=null;
_.NumToGet=null;
_.ContinuationKey=null;
function dS(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.NumToGet=e['n'];
}
dS.prototype=new b();
dS.prototype.constructor = dS;
_=dS.prototype;
_.__type="LDGetAccountsFollowedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.NumToGet!=null)o['n']=$.NumToGet;
	return o;
}
_.Account=null;
_.ContinuationKey=null;
_.NumToGet=null;
function dT(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new fW(e['id']);
}
dT.prototype=new b();
dT.prototype.constructor = dT;
_=dT.prototype;
_.__type="LDDeletePostRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	return o;
}
_.PostId=null;
function dU(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new fW(e['id']);
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.NumToGet=e['n'];
}
dU.prototype=new b();
dU.prototype.constructor = dU;
_=dU.prototype;
_.__type="LDGetExternalShareLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.NumToGet!=null)o['n']=$.NumToGet;
	return o;
}
_.PostId=null;
_.ContinuationKey=null;
_.NumToGet=null;
function dV(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
dV.prototype=new b();
dV.prototype.constructor = dV;
_=dV.prototype;
_.__type="LDCheckFollowingRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
function dW(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
dW.prototype=new b();
dW.prototype.constructor = dW;
_=dW.prototype;
_.__type="LDGetFollowerCountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
function dX(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
dX.prototype=new b();
dX.prototype.constructor = dX;
_=dX.prototype;
_.__type="LDGetFollowingCountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
function dY(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
}
dY.prototype=new b();
dY.prototype.constructor = dY;
_=dY.prototype;
_.__type="LDGetUserWallPostCountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	return o;
}
_.Account=null;
function dZ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ItemId=new fy(e['i']);
	$.PackageId=e['p'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
dZ.prototype=new b();
dZ.prototype.constructor = dZ;
_=dZ.prototype;
_.__type="LDGetPackagePostsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.ItemId=null;
_.PackageId=null;
_.ContinuationKey=null;
function e_(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.PostId=new fW(e['i']);
	$.Title=e['t'];
	$.Description=e['d'];
	$.Message=e['m'];
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new fV(d[k]));
	}
}
e_.prototype=new b();
e_.prototype.constructor = e_;
_=e_.prototype;
_.__type="LDUpdatePostDetailsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['i']=$.PostId.encode();
	if($.Title!=null)o['t']=$.Title;
	if($.Description!=null)o['d']=$.Description;
	if($.Message!=null)o['m']=$.Message;
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
	return o;
}
_.PostId=null;
_.Title=null;
_.Description=null;
_.Message=null;
_.SecondaryTags=null;
function ea(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ItemId=new fy(e['i']);
}
ea.prototype=new b();
ea.prototype.constructor = ea;
_=ea.prototype;
_.__type="LDGetPackagesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemId!=null)o['i']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function eb(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.PostId=new fW(e['p']);
	$.GameTag=e['g'];
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
eb.prototype=new b();
eb.prototype.constructor = eb;
_=eb.prototype;
_.__type="LDGetRecommendedWallRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['p']=$.PostId.encode();
	if($.GameTag!=null)o['g']=$.GameTag;
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.PostId=null;
_.GameTag=null;
_.ContinuationKey=null;
function ec(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ScopeString=e['s'];
}
ec.prototype=new b();
ec.prototype.constructor = ec;
_=ec.prototype;
_.__type="LDGetIdentityTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ScopeString!=null)o['s']=$.ScopeString;
	return o;
}
_.ScopeString=null;
function ed(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.AppId=new Buffer(e['id'],'base64');
	$.PackageId=e['pid'];
	$.LobbyName=e['n'];
	$.Cluster=e['c'];
	$.Stripe=e['s'];
	$.Longitude=e['gt'];
	$.Latitude=e['gp'];
}
ed.prototype=new b();
ed.prototype.constructor = ed;
_=ed.prototype;
_.__type="LDGetPublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AppId!=null)o['id']=$.AppId.toString('base64');
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.LobbyName!=null)o['n']=$.LobbyName;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.Stripe!=null)o['s']=$.Stripe;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.Latitude!=null)o['gp']=$.Latitude;
	return o;
}
_.AppId=null;
_.PackageId=null;
_.LobbyName=null;
_.Cluster=null;
_.Stripe=null;
_.Longitude=null;
_.Latitude=null;
function ee(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.DisplayName=e['n'];
}
ee.prototype=new b();
ee.prototype.constructor = ee;
_=ee.prototype;
_.__type="LDJoinPublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.DisplayName!=null)o['n']=$.DisplayName;
	return o;
}
_.Feed=null;
_.DisplayName=null;
function ef(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['n']!=null)$.Nonce=new Buffer(e['n'],'base64');
}
ef.prototype=new b();
ef.prototype.constructor = ef;
_=ef.prototype;
_.__type="LDLeavePublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Nonce!=null)o['n']=$.Nonce.toString('base64');
	return o;
}
_.Feed=null;
_.Nonce=null;
function eg(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['tid']!=null)$.TypedId=new fC(e['tid']);
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	$.Delete=e['d'];
}
eg.prototype=new b();
eg.prototype.constructor = eg;
_=eg.prototype;
_.__type="LDWriteToPublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.TypedId!=null)o['tid']=$.TypedId.encode();
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Delete!=null)o['d']=$.Delete;
	return o;
}
_.Feed=null;
_.TypedId=null;
_.Body=null;
_.Delete=null;
function eh(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
eh.prototype=new b();
eh.prototype.constructor = eh;
_=eh.prototype;
_.__type="LDGetPublicChatMembersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function ei(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Timestamp=e['t'];
}
ei.prototype=new b();
ei.prototype.constructor = ei;
_=ei.prototype;
_.__type="LDGetRecentMessagesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Timestamp!=null)o['t']=$.Timestamp;
	return o;
}
_.Feed=null;
_.Timestamp=null;
function ej(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
	$.PackageId=e['p'];
	$.Longitude=e['gt'];
	$.Latitude=e['gp'];
	$.ForwardingStage=e['f'];
}
ej.prototype=new b();
ej.prototype.constructor = ej;
_=ej.prototype;
_.__type="LDListLiveChatsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AppId!=null)o['a']=$.AppId.toString('base64');
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.Latitude!=null)o['gp']=$.Latitude;
	if($.ForwardingStage!=null)o['f']=$.ForwardingStage;
	return o;
}
_.AppId=null;
_.PackageId=null;
_.Longitude=null;
_.Latitude=null;
_.ForwardingStage=null;
function ek(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
	$.PackageId=e['p'];
	$.Longitude=e['gt'];
	$.Latitude=e['gp'];
	$.ForwardingStage=e['f'];
	$.ForAppScopeId=e['fa'];
	$.ForCountry=e['fc'];
	$.ForCity=e['fy'];
}
ek.prototype=new b();
ek.prototype.constructor = ek;
_=ek.prototype;
_.__type="LDListInterestingChatsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AppId!=null)o['a']=$.AppId.toString('base64');
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.Longitude!=null)o['gt']=$.Longitude;
	if($.Latitude!=null)o['gp']=$.Latitude;
	if($.ForwardingStage!=null)o['f']=$.ForwardingStage;
	if($.ForAppScopeId!=null)o['fa']=$.ForAppScopeId;
	if($.ForCountry!=null)o['fc']=$.ForCountry;
	if($.ForCity!=null)o['fy']=$.ForCity;
	return o;
}
_.AppId=null;
_.PackageId=null;
_.Longitude=null;
_.Latitude=null;
_.ForwardingStage=null;
_.ForAppScopeId=null;
_.ForCountry=null;
_.ForCity=null;
function el(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new fG(e['m']);
}
el.prototype=new b();
el.prototype.constructor = el;
_=el.prototype;
_.__type="LDPublicChatMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;
function em(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
em.prototype=new b();
em.prototype.constructor = em;
_=em.prototype;
_.__type="LDPublicChatMessageTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
function en(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['e']!=null){
		$.Events=[];
		var d = e['e'];
		for(var k=0; k<d.length;++k)$.Events.push(new fT(d[k]));
	}
}
en.prototype=new b();
en.prototype.constructor = en;
_=en.prototype;
_.__type="LDReportSummaryEventsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Events!=null) {
		o['e']=[];
		var d=$.Events;
		for(var k=0;k<d.length;++k) o['e'].push(d[k].encode());
	}
	return o;
}
_.Events=null;
function eo(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.ItemId=new fy(e['a']);
	$.PackageId=e['p'];
	$.Start=e['s'];
	$.End=e['e'];
	$.Zoom=e['z'];
}
eo.prototype=new b();
eo.prototype.constructor = eo;
_=eo.prototype;
_.__type="LDGatherEventsByAppRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemId!=null)o['a']=$.ItemId.encode();
	if($.PackageId!=null)o['p']=$.PackageId;
	if($.Start!=null)o['s']=$.Start;
	if($.End!=null)o['e']=$.End;
	if($.Zoom!=null)o['z']=$.Zoom;
	return o;
}
_.ItemId=null;
_.PackageId=null;
_.Start=null;
_.End=null;
_.Zoom=null;
function ep(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
ep.prototype=new b();
ep.prototype.constructor = ep;
_=ep.prototype;
_.__type="LDListBlockedUsersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function eq(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.UserKey=e['k'];
}
eq.prototype=new b();
eq.prototype.constructor = eq;
_=eq.prototype;
_.__type="LDUnblockUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.UserKey!=null)o['k']=$.UserKey;
	return o;
}
_.UserKey=null;
function er(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.UserKey=e['k'];
}
er.prototype=new b();
er.prototype.constructor = er;
_=er.prototype;
_.__type="LDBlockUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.UserKey!=null)o['k']=$.UserKey;
	return o;
}
_.UserKey=null;
function fX(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ContentType=e['ct'];
	if(e['cf']!=null)$.Feed=new aw(e['cf']);
	if(e['ci']!=null)$.TypedId=new fC(e['ci']);
	$.Account=e['ca'];
	$.ProfileVersion=e['cpv'];
}
fX.prototype=new b();
fX.prototype.constructor = fX;
_=fX.prototype;
_.__type="LDContentIdBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContentType!=null)o['ct']=$.ContentType;
	if($.Feed!=null)o['cf']=$.Feed.encode();
	if($.TypedId!=null)o['ci']=$.TypedId.encode();
	if($.Account!=null)o['ca']=$.Account;
	if($.ProfileVersion!=null)o['cpv']=$.ProfileVersion;
	return o;
}
_.ContentType=null;
_.Feed=null;
_.TypedId=null;
_.Account=null;
_.ProfileVersion=null;
function es(e){
	fX.call(this,e);
	if(!e)return;
	var $=this;
	$.Reporter=e['r'];
	$.UserKey=e['k'];
	$.Reason=e['rr'];
	$.Details=e['d'];
}
es.prototype=new fX();
es.prototype.constructor = es;
_=es.prototype;
_.__type="LDReportUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	fX.prototype.encode.call($,o);
	if($.Reporter!=null)o['r']=$.Reporter;
	if($.UserKey!=null)o['k']=$.UserKey;
	if($.Reason!=null)o['rr']=$.Reason;
	if($.Details!=null)o['d']=$.Details;
	return o;
}
_.Reporter=null;
_.UserKey=null;
_.Reason=null;
_.Details=null;
function et(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['A']!=null){
		$.Accounts=[];
		var d = e['A'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
}
et.prototype=new b();
et.prototype.constructor = et;
_=et.prototype;
_.__type="LDGetPresencesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Accounts!=null) {
		o['A']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['A'].push(d[k]);
	}
	return o;
}
_.Accounts=null;
function eu(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Online=e['o'];
	$.AppName=e['n'];
	$.AppIconBlobLink=e['b'];
}
eu.prototype=new b();
eu.prototype.constructor = eu;
_=eu.prototype;
_.__type="LDSetOnlineStatusRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Online!=null)o['o']=$.Online;
	if($.AppName!=null)o['n']=$.AppName;
	if($.AppIconBlobLink!=null)o['b']=$.AppIconBlobLink;
	return o;
}
_.Online=null;
_.AppName=null;
_.AppIconBlobLink=null;
function ev(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
}
ev.prototype=new b();
ev.prototype.constructor = ev;
_=ev.prototype;
_.__type="LDGetStreamingLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	return o;
}
function ew(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.Message=new fG(e['m']);
}
ew.prototype=new b();
ew.prototype.constructor = ew;
_=ew.prototype;
_.__type="LDGetMessageResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Message!=null)o['m']=$.Message.encode();
	return o;
}
_.Message=null;
function ex(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null){
		$.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.Messages.push(new fG(d[k]));
	}
	$.Partial=e['p'];
}
ex.prototype=new b();
ex.prototype.constructor = ex;
_=ex.prototype;
_.__type="LDGetMessagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Messages!=null) {
		o['m']=[];
		var d=$.Messages;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	if($.Partial!=null)o['p']=$.Partial;
	return o;
}
_.Messages=null;
_.Partial=null;
function ey(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null){
		$.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.Messages.push(new fG(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
ey.prototype=new b();
ey.prototype.constructor = ey;
_=ey.prototype;
_.__type="LDGetMessagesWithContinuationResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Messages!=null) {
		o['m']=[];
		var d=$.Messages;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Messages=null;
_.ContinuationKey=null;
function ez(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null)$.JoinLink=new fY(e['l']);
}
ez.prototype=new b();
ez.prototype.constructor = ez;
_=ez.prototype;
_.__type="LDGetJoinFeedLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.JoinLink!=null)o['l']=$.JoinLink.encode();
	return o;
}
_.JoinLink=null;
function eA(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.ThumbnailLink=e['td'];
}
eA.prototype=new b();
eA.prototype.constructor = eA;
_=eA.prototype;
_.__type="LDGetPublicFeedDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Name!=null)o['n']=$.Name;
	if($.ThumbnailLink!=null)o['td']=$.ThumbnailLink;
	return o;
}
_.Name=null;
_.ThumbnailLink=null;
function eB(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null){
		$.Dirty=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)$.Dirty.push(new fZ(d[k]));
	}
	$.Partial=e['p'];
	$.Window=e['w'];
}
eB.prototype=new b();
eB.prototype.constructor = eB;
_=eB.prototype;
_.__type="LDDirtyFeedsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Dirty!=null) {
		o['d']=[];
		var d=$.Dirty;
		for(var k=0;k<d.length;++k) o['d'].push(d[k].encode());
	}
	if($.Partial!=null)o['p']=$.Partial;
	if($.Window!=null)o['w']=$.Window;
	return o;
}
_.Dirty=null;
_.Partial=null;
_.Window=null;
function eC(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.LastWriteTime=e['t'];
	$.AcceptanceState=e['a'];
}
eC.prototype=new b();
eC.prototype.constructor = eC;
_=eC.prototype;
_.__type="LDFeedStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.LastWriteTime!=null)o['t']=$.LastWriteTime;
	if($.AcceptanceState!=null)o['a']=$.AcceptanceState;
	return o;
}
_.LastWriteTime=null;
_.AcceptanceState=null;
function eD(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null)$.BlobUploadTicket=new fK(e['ut']);
}
eD.prototype=new b();
eD.prototype.constructor = eD;
_=eD.prototype;
_.__type="LDGetUploadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BlobUploadTicket!=null)o['ut']=$.BlobUploadTicket.encode();
	return o;
}
_.BlobUploadTicket=null;
function eE(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ut']!=null){
		$.BlobUploadTickets=[];
		var d = e['ut'];
		for(var k=0; k<d.length;++k)$.BlobUploadTickets.push(new fK(d[k]));
	}
}
eE.prototype=new b();
eE.prototype.constructor = eE;
_=eE.prototype;
_.__type="LDGetMultipartUploadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BlobUploadTickets!=null) {
		o['ut']=[];
		var d=$.BlobUploadTickets;
		for(var k=0;k<d.length;++k) o['ut'].push(d[k].encode());
	}
	return o;
}
_.BlobUploadTickets=null;
function eF(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['dt']!=null)$.BlobDownloadTicket=new g_(e['dt']);
}
eF.prototype=new b();
eF.prototype.constructor = eF;
_=eF.prototype;
_.__type="LDGetDownloadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BlobDownloadTicket!=null)o['dt']=$.BlobDownloadTicket.encode();
	return o;
}
_.BlobDownloadTicket=null;
function eG(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactDetails=new fL(e['c']);
}
eG.prototype=new b();
eG.prototype.constructor = eG;
_=eG.prototype;
_.__type="LDGetContactDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContactDetails!=null)o['c']=$.ContactDetails.encode();
	return o;
}
_.ContactDetails=null;
function eH(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ProfileDetails=new ga(e['p']);
}
eH.prototype=new b();
eH.prototype.constructor = eH;
_=eH.prototype;
_.__type="LDGetProfileDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ProfileDetails!=null)o['p']=$.ProfileDetails.encode();
	return o;
}
_.ProfileDetails=null;
function eI(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ContactProfile=new gb(e['p']);
}
eI.prototype=new b();
eI.prototype.constructor = eI;
_=eI.prototype;
_.__type="LDGetOmletContactProfileResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContactProfile!=null)o['p']=$.ContactProfile.encode();
	return o;
}
_.ContactProfile=null;
function eJ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.ProfilePublicState=new gc(e['p']);
}
eJ.prototype=new b();
eJ.prototype.constructor = eJ;
_=eJ.prototype;
_.__type="LDGetProfilePublicStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ProfilePublicState!=null)o['p']=$.ProfilePublicState.encode();
	return o;
}
_.ProfilePublicState=null;
function eK(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.ContactProfile=new gb(e['c']);
	if(e['p']!=null)$.ProfilePublicState=new gc(e['p']);
}
eK.prototype=new b();
eK.prototype.constructor = eK;
_=eK.prototype;
_.__type="LDGetContactProfileAndPublicStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ContactProfile!=null)o['c']=$.ContactProfile.encode();
	if($.ProfilePublicState!=null)o['p']=$.ProfilePublicState.encode();
	return o;
}
_.ContactProfile=null;
_.ProfilePublicState=null;
function eL(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['p']!=null)$.ContactProfile=new gb(e['p']);
}
eL.prototype=new b();
eL.prototype.constructor = eL;
_=eL.prototype;
_.__type="LDGetContactProfileResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.ContactProfile!=null)o['p']=$.ContactProfile.encode();
	return o;
}
_.Account=null;
_.ContactProfile=null;
function eM(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['ii']!=null)$.ItemInfoContainer=new gd(e['ii']);
}
eM.prototype=new b();
eM.prototype.constructor = eM;
_=eM.prototype;
_.__type="LDGetItemInfoResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemInfoContainer!=null)o['ii']=$.ItemInfoContainer.encode();
	return o;
}
_.ItemInfoContainer=null;
function eN(e){
	if(!e)return;
	var $=this;
	if(e['l']!=null)$.ItemInfoListingContainer=new ge(e['l']);
}
_=eN.prototype;
_.__type="LDListItemsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemInfoListingContainer!=null)o['l']=$.ItemInfoListingContainer.encode();
	return o;
}
_.ItemInfoListingContainer=null;
function eO(e){
	if(!e)return;
	var $=this;
	$.ShareLink=e['s'];
	if(e['r']!=null)$.RawKey=new Buffer(e['r'],'base64');
}
_=eO.prototype;
_.__type="LDGenerateGrantForItemResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ShareLink!=null)o['s']=$.ShareLink;
	if($.RawKey!=null)o['r']=$.RawKey.toString('base64');
	return o;
}
_.ShareLink=null;
_.RawKey=null;
function eP(e){
	if(!e)return;
	var $=this;
	if(e['ak']!=null)$.ApiKey=new gf(e['ak']);
}
_=eP.prototype;
_.__type="LDGenerateApiKeyResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ApiKey!=null)o['ak']=$.ApiKey.encode();
	return o;
}
_.ApiKey=null;
function eQ(e){
	if(!e)return;
	var $=this;
	if(e['ak']!=null){
		$.ApiKeys=[];
		var d = e['ak'];
		for(var k=0; k<d.length;++k)$.ApiKeys.push(new gf(d[k]));
	}
}
_=eQ.prototype;
_.__type="LDListApiKeysResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ApiKeys!=null) {
		o['ak']=[];
		var d=$.ApiKeys;
		for(var k=0;k<d.length;++k) o['ak'].push(d[k].encode());
	}
	return o;
}
_.ApiKeys=null;
function eR(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null)$.Config=new fP(e['c']);
}
eR.prototype=new b();
eR.prototype.constructor = eR;
_=eR.prototype;
_.__type="LDGetCloudConfigResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Config!=null)o['c']=$.Config.encode();
	return o;
}
_.Config=null;
function eS(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null){
		$.Candidates=[];
		var d = e['c'];
		for(var k=0;k<d.length;++k)$.Candidates.push(d[k]);
	}
	$.LocationType=e['lt'];
	$.LocationName=e['ln'];
}
eS.prototype=new b();
eS.prototype.constructor = eS;
_=eS.prototype;
_.__type="LDFindGamersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Candidates!=null) {
		o['c']=[];
		var d=$.Candidates;
		for(var k=0;k<d.length;++k) o['c'].push(d[k]);
	}
	if($.LocationType!=null)o['lt']=$.LocationType;
	if($.LocationName!=null)o['ln']=$.LocationName;
	return o;
}
_.Candidates=null;
_.LocationType=null;
_.LocationName=null;
function eT(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.PublishingUrl=e['u'];
	$.Account=e['a'];
	if(e['k']!=null)$.DevicePrivateKey=new Buffer(e['k'],'base64');
}
eT.prototype=new b();
eT.prototype.constructor = eT;
_=eT.prototype;
_.__type="LDCreateSubscriptionResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PublishingUrl!=null)o['u']=$.PublishingUrl;
	if($.Account!=null)o['a']=$.Account;
	if($.DevicePrivateKey!=null)o['k']=$.DevicePrivateKey.toString('base64');
	return o;
}
_.PublishingUrl=null;
_.Account=null;
_.DevicePrivateKey=null;
function eU(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.City=e['c'];
	$.CityScore=e['cs'];
	$.CityRank=e['cr'];
	$.CityPercentile=e['cp'];
	if(e['css']!=null){
		$.CitySimilarScores=[];
		var d = e['css'];
		for(var k=0; k<d.length;++k)$.CitySimilarScores.push(new gg(d[k]));
	}
	$.Country=e['u'];
	$.CountryScore=e['us'];
	$.CountryRank=e['ur'];
	$.CountryPercentile=e['up'];
	if(e['uss']!=null){
		$.CountrySimilarScores=[];
		var d = e['uss'];
		for(var k=0; k<d.length;++k)$.CountrySimilarScores.push(new gg(d[k]));
	}
	$.Continent=e['t'];
	$.ContinentScore=e['ts'];
	$.ContinentRank=e['tr'];
	$.ContinentPercentile=e['tp'];
	if(e['tss']!=null){
		$.ContinentSimilarScores=[];
		var d = e['tss'];
		for(var k=0; k<d.length;++k)$.ContinentSimilarScores.push(new gg(d[k]));
	}
	$.GlobalScore=e['gs'];
	$.GlobalRank=e['gr'];
	$.GlobalPercentile=e['gp'];
	if(e['gss']!=null){
		$.GlobalSimilarScores=[];
		var d = e['gss'];
		for(var k=0; k<d.length;++k)$.GlobalSimilarScores.push(new gg(d[k]));
	}
	$.LocalLevel=e['ll'];
	$.LocalLocationName=e['ln'];
	$.LocalScore=e['ls'];
	$.LocalRank=e['lr'];
	$.LocalPercentile=e['lp'];
	if(e['lss']!=null){
		$.LocalSimilarScores=[];
		var d = e['lss'];
		for(var k=0; k<d.length;++k)$.LocalSimilarScores.push(new gg(d[k]));
	}
	$.DistanceBestFor=e['dbf'];
}
eU.prototype=new b();
eU.prototype.constructor = eU;
_=eU.prototype;
_.__type="LDScoreResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.City!=null)o['c']=$.City;
	if($.CityScore!=null)o['cs']=$.CityScore;
	if($.CityRank!=null)o['cr']=$.CityRank;
	if($.CityPercentile!=null)o['cp']=$.CityPercentile;
	if($.CitySimilarScores!=null) {
		o['css']=[];
		var d=$.CitySimilarScores;
		for(var k=0;k<d.length;++k) o['css'].push(d[k].encode());
	}
	if($.Country!=null)o['u']=$.Country;
	if($.CountryScore!=null)o['us']=$.CountryScore;
	if($.CountryRank!=null)o['ur']=$.CountryRank;
	if($.CountryPercentile!=null)o['up']=$.CountryPercentile;
	if($.CountrySimilarScores!=null) {
		o['uss']=[];
		var d=$.CountrySimilarScores;
		for(var k=0;k<d.length;++k) o['uss'].push(d[k].encode());
	}
	if($.Continent!=null)o['t']=$.Continent;
	if($.ContinentScore!=null)o['ts']=$.ContinentScore;
	if($.ContinentRank!=null)o['tr']=$.ContinentRank;
	if($.ContinentPercentile!=null)o['tp']=$.ContinentPercentile;
	if($.ContinentSimilarScores!=null) {
		o['tss']=[];
		var d=$.ContinentSimilarScores;
		for(var k=0;k<d.length;++k) o['tss'].push(d[k].encode());
	}
	if($.GlobalScore!=null)o['gs']=$.GlobalScore;
	if($.GlobalRank!=null)o['gr']=$.GlobalRank;
	if($.GlobalPercentile!=null)o['gp']=$.GlobalPercentile;
	if($.GlobalSimilarScores!=null) {
		o['gss']=[];
		var d=$.GlobalSimilarScores;
		for(var k=0;k<d.length;++k) o['gss'].push(d[k].encode());
	}
	if($.LocalLevel!=null)o['ll']=$.LocalLevel;
	if($.LocalLocationName!=null)o['ln']=$.LocalLocationName;
	if($.LocalScore!=null)o['ls']=$.LocalScore;
	if($.LocalRank!=null)o['lr']=$.LocalRank;
	if($.LocalPercentile!=null)o['lp']=$.LocalPercentile;
	if($.LocalSimilarScores!=null) {
		o['lss']=[];
		var d=$.LocalSimilarScores;
		for(var k=0;k<d.length;++k) o['lss'].push(d[k].encode());
	}
	if($.DistanceBestFor!=null)o['dbf']=$.DistanceBestFor;
	return o;
}
_.City=null;
_.CityScore=null;
_.CityRank=null;
_.CityPercentile=null;
_.CitySimilarScores=null;
_.Country=null;
_.CountryScore=null;
_.CountryRank=null;
_.CountryPercentile=null;
_.CountrySimilarScores=null;
_.Continent=null;
_.ContinentScore=null;
_.ContinentRank=null;
_.ContinentPercentile=null;
_.ContinentSimilarScores=null;
_.GlobalScore=null;
_.GlobalRank=null;
_.GlobalPercentile=null;
_.GlobalSimilarScores=null;
_.LocalLevel=null;
_.LocalLocationName=null;
_.LocalScore=null;
_.LocalRank=null;
_.LocalPercentile=null;
_.LocalSimilarScores=null;
_.DistanceBestFor=null;
function eV(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.LocationType=e['lt'];
	$.LocationName=e['ln'];
	if(e['s']!=null){
		$.Scores=[];
		var d = e['s'];
		for(var k=0; k<d.length;++k)$.Scores.push(new gg(d[k]));
	}
}
eV.prototype=new b();
eV.prototype.constructor = eV;
_=eV.prototype;
_.__type="LDScoresResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.LocationType!=null)o['lt']=$.LocationType;
	if($.LocationName!=null)o['ln']=$.LocationName;
	if($.Scores!=null) {
		o['s']=[];
		var d=$.Scores;
		for(var k=0;k<d.length;++k) o['s'].push(d[k].encode());
	}
	return o;
}
_.LocationType=null;
_.LocationName=null;
_.Scores=null;
function eW(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Pin=e['p'];
}
eW.prototype=new b();
eW.prototype.constructor = eW;
_=eW.prototype;
_.__type="LDBroadcastItemResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Pin!=null)o['p']=$.Pin;
	return o;
}
_.Pin=null;
function eX(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new fS(d[k]));
	}
}
eX.prototype=new b();
eX.prototype.constructor = eX;
_=eX.prototype;
_.__type="LDFetchNearbyItemsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Items!=null) {
		o['i']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.Items=null;
function eY(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ResponseType=e['t'];
	if(e['d']!=null)$.ResponseData=new Buffer(e['d'],'base64');
}
eY.prototype=new b();
eY.prototype.constructor = eY;
_=eY.prototype;
_.__type="LDUrlToStoryResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ResponseType!=null)o['t']=$.ResponseType;
	if($.ResponseData!=null)o['d']=$.ResponseData.toString('base64');
	return o;
}
_.ResponseType=null;
_.ResponseData=null;
function eZ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['h']!=null){
		$.Hits=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)$.Hits.push(new gh(d[k]));
	}
	$.ClientSearchVersion=e['v'];
}
eZ.prototype=new b();
eZ.prototype.constructor = eZ;
_=eZ.prototype;
_.__type="LDImageSearchResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Hits!=null) {
		o['h']=[];
		var d=$.Hits;
		for(var k=0;k<d.length;++k) o['h'].push(d[k].encode());
	}
	if($.ClientSearchVersion!=null)o['v']=$.ClientSearchVersion;
	return o;
}
_.Hits=null;
_.ClientSearchVersion=null;
function f_(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['ii']!=null){
		$.AddedItems=[];
		var d = e['ii'];
		for(var k=0; k<d.length;++k)$.AddedItems.push(new fy(d[k]));
	}
	$.Message=e['m'];
}
f_.prototype=new b();
f_.prototype.constructor = f_;
_=f_.prototype;
_.__type="LDCreatePlaygroundResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.AddedItems!=null) {
		o['ii']=[];
		var d=$.AddedItems;
		for(var k=0;k<d.length;++k) o['ii'].push(d[k].encode());
	}
	if($.Message!=null)o['m']=$.Message;
	return o;
}
_.Feed=null;
_.AddedItems=null;
_.Message=null;
function fa(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['h']!=null){
		$.ExtraVersions = {};
		var d = e['h'];
		for(var k in d) $.ExtraVersions[k]=d[k];
	}
}
fa.prototype=new b();
fa.prototype.constructor = fa;
_=fa.prototype;
_.__type="LDGetExtraVersionsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ExtraVersions!=null){
		o['h']={};
		var d=$.ExtraVersions;
		for(var k in d)o['h'][k]=d[k];
	}
	return o;
}
_.ExtraVersions=null;
function fb(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['u']!=null){
		$.UnmappedIdentities=[];
		var d = e['u'];
		for(var k=0; k<d.length;++k)$.UnmappedIdentities.push(new fw(d[k]));
	}
	if(e['o']!=null){
		$.OptOutIdentities=[];
		var d = e['o'];
		for(var k=0; k<d.length;++k)$.OptOutIdentities.push(new fw(d[k]));
	}
	if(e['a']!=null){
		$.Accounts=[];
		var d = e['a'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
fb.prototype=new b();
fb.prototype.constructor = fb;
_=fb.prototype;
_.__type="LDGetDirectFeedResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.UnmappedIdentities!=null) {
		o['u']=[];
		var d=$.UnmappedIdentities;
		for(var k=0;k<d.length;++k) o['u'].push(d[k].encode());
	}
	if($.OptOutIdentities!=null) {
		o['o']=[];
		var d=$.OptOutIdentities;
		for(var k=0;k<d.length;++k) o['o'].push(d[k].encode());
	}
	if($.Accounts!=null) {
		o['a']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['a'].push(d[k]);
	}
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.UnmappedIdentities=null;
_.OptOutIdentities=null;
_.Accounts=null;
_.Feed=null;
function fc(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Timestamp=e['t'];
	if(e['m']!=null)$.Metadata=new Buffer(e['m'],'base64');
	if(e['u']!=null){
		$.UnmappedIdentities=[];
		var d = e['u'];
		for(var k=0; k<d.length;++k)$.UnmappedIdentities.push(new fw(d[k]));
	}
	if(e['o']!=null){
		$.OptOutIdentities=[];
		var d = e['o'];
		for(var k=0; k<d.length;++k)$.OptOutIdentities.push(new fw(d[k]));
	}
}
fc.prototype=new b();
fc.prototype.constructor = fc;
_=fc.prototype;
_.__type="LDSendDirectMessageResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Timestamp!=null)o['t']=$.Timestamp;
	if($.Metadata!=null)o['m']=$.Metadata.toString('base64');
	if($.UnmappedIdentities!=null) {
		o['u']=[];
		var d=$.UnmappedIdentities;
		for(var k=0;k<d.length;++k) o['u'].push(d[k].encode());
	}
	if($.OptOutIdentities!=null) {
		o['o']=[];
		var d=$.OptOutIdentities;
		for(var k=0;k<d.length;++k) o['o'].push(d[k].encode());
	}
	return o;
}
_.Feed=null;
_.Timestamp=null;
_.Metadata=null;
_.UnmappedIdentities=null;
_.OptOutIdentities=null;
function fd(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['w']!=null)$.Wall=new gi(e['w']);
}
fd.prototype=new b();
fd.prototype.constructor = fd;
_=fd.prototype;
_.__type="LDWallResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Wall!=null)o['w']=$.Wall.encode();
	return o;
}
_.Wall=null;
function fe(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['w']!=null){
		$.Walls=[];
		var d = e['w'];
		for(var k=0; k<d.length;++k)$.Walls.push(new gi(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
fe.prototype=new b();
fe.prototype.constructor = fe;
_=fe.prototype;
_.__type="LDWallsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Walls!=null) {
		o['w']=[];
		var d=$.Walls;
		for(var k=0;k<d.length;++k) o['w'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Walls=null;
_.ContinuationKey=null;
function ff(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.Post=new gj(e['p']);
}
ff.prototype=new b();
ff.prototype.constructor = ff;
_=ff.prototype;
_.__type="LDGetPostResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Post!=null)o['p']=$.Post.encode();
	return o;
}
_.Post=null;
function fg(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new fW(e['id']);
	$.ExternalShareLink=e['e'];
}
fg.prototype=new b();
fg.prototype.constructor = fg;
_=fg.prototype;
_.__type="LDAddPostResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	if($.ExternalShareLink!=null)o['e']=$.ExternalShareLink;
	return o;
}
_.PostId=null;
_.ExternalShareLink=null;
function fh(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.AccountsFollowed=[];
		var d = e['f'];
		for(var k=0; k<d.length;++k)$.AccountsFollowed.push(new gk(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
fh.prototype=new b();
fh.prototype.constructor = fh;
_=fh.prototype;
_.__type="LDGetAccountsFollowedResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AccountsFollowed!=null) {
		o['f']=[];
		var d=$.AccountsFollowed;
		for(var k=0;k<d.length;++k) o['f'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.AccountsFollowed=null;
_.ContinuationKey=null;
function fi(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null){
		$.PostTags=[];
		var d = e['p'];
		for(var k=0; k<d.length;++k)$.PostTags.push(new gl(d[k]));
	}
	$.MaxVideoLength=e['l'];
}
fi.prototype=new b();
fi.prototype.constructor = fi;
_=fi.prototype;
_.__type="LDGetStandardPostTagsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostTags!=null) {
		o['p']=[];
		var d=$.PostTags;
		for(var k=0;k<d.length;++k) o['p'].push(d[k].encode());
	}
	if($.MaxVideoLength!=null)o['l']=$.MaxVideoLength;
	return o;
}
_.PostTags=null;
_.MaxVideoLength=null;
function fj(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.Followers=[];
		var d = e['f'];
		for(var k=0; k<d.length;++k)$.Followers.push(new gk(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
fj.prototype=new b();
fj.prototype.constructor = fj;
_=fj.prototype;
_.__type="LDGetFollowersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Followers!=null) {
		o['f']=[];
		var d=$.Followers;
		for(var k=0;k<d.length;++k) o['f'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Followers=null;
_.ContinuationKey=null;
function fk(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['l']!=null){
		$.Links=[];
		var d = e['l'];
		for(var k=0;k<d.length;++k)$.Links.push(d[k]);
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
fk.prototype=new b();
fk.prototype.constructor = fk;
_=fk.prototype;
_.__type="LDGetExternalShareLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Links!=null) {
		o['l']=[];
		var d=$.Links;
		for(var k=0;k<d.length;++k) o['l'].push(d[k]);
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Links=null;
_.ContinuationKey=null;
function fl(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['I']!=null){
		$.PackageInfos=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)$.PackageInfos.push(new gm(d[k]));
	}
}
fl.prototype=new b();
fl.prototype.constructor = fl;
_=fl.prototype;
_.__type="LDGetPackagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PackageInfos!=null) {
		o['I']=[];
		var d=$.PackageInfos;
		for(var k=0;k<d.length;++k) o['I'].push(d[k].encode());
	}
	return o;
}
_.PackageInfos=null;
function fm(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Token=e['t'];
}
fm.prototype=new b();
fm.prototype.constructor = fm;
_=fm.prototype;
_.__type="LDGetIdentityTokenResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Token!=null)o['t']=$.Token;
	return o;
}
_.Token=null;
function fn(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['i']!=null)$.PublicChatInfo=new gn(e['i']);
}
fn.prototype=new b();
fn.prototype.constructor = fn;
_=fn.prototype;
_.__type="LDGetPublicChatResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.PublicChatInfo!=null)o['i']=$.PublicChatInfo.encode();
	return o;
}
_.Feed=null;
_.PublicChatInfo=null;
function fo(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null){
		$.Ids=[];
		var d = e['id'];
		for(var k=0;k<d.length;++k)$.Ids.push(d[k]);
	}
	if(e['dn']!=null){
		$.DisplayNames=[];
		var d = e['dn'];
		for(var k=0;k<d.length;++k)$.DisplayNames.push(d[k]);
	}
}
fo.prototype=new b();
fo.prototype.constructor = fo;
_=fo.prototype;
_.__type="LDGetPublicChatMembersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Ids!=null) {
		o['id']=[];
		var d=$.Ids;
		for(var k=0;k<d.length;++k) o['id'].push(d[k]);
	}
	if($.DisplayNames!=null) {
		o['dn']=[];
		var d=$.DisplayNames;
		for(var k=0;k<d.length;++k) o['dn'].push(d[k]);
	}
	return o;
}
_.Ids=null;
_.DisplayNames=null;
function fp(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null){
		$.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.Messages.push(new fG(d[k]));
	}
}
fp.prototype=new b();
fp.prototype.constructor = fp;
_=fp.prototype;
_.__type="LDGetRecentMessagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Messages!=null) {
		o['m']=[];
		var d=$.Messages;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	return o;
}
_.Messages=null;
function fq(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['c']!=null){
		$.Chats=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)$.Chats.push(new gn(d[k]));
	}
}
fq.prototype=new b();
fq.prototype.constructor = fq;
_=fq.prototype;
_.__type="LDListChatsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Chats!=null) {
		o['c']=[];
		var d=$.Chats;
		for(var k=0;k<d.length;++k) o['c'].push(d[k].encode());
	}
	return o;
}
_.Chats=null;
function fr(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.Buckets=e['b'];
	if(e['c']!=null){
		$.Counts = {};
		var d = e['c'];
		for(var k in d) $.Counts[k]=d[k];
	}
}
fr.prototype=new b();
fr.prototype.constructor = fr;
_=fr.prototype;
_.__type="LDGatherEventsByAppResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Buckets!=null)o['b']=$.Buckets;
	if($.Counts!=null){
		o['c']={};
		var d=$.Counts;
		for(var k in d)o['c'][k]=d[k];
	}
	return o;
}
_.Buckets=null;
_.Counts=null;
function fs(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['S']!=null){
		$.States=[];
		var d = e['S'];
		for(var k=0; k<d.length;++k)$.States.push(new go(d[k]));
	}
}
fs.prototype=new b();
fs.prototype.constructor = fs;
_=fs.prototype;
_.__type="LDGetPresencesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.States!=null) {
		o['S']=[];
		var d=$.States;
		for(var k=0;k<d.length;++k) o['S'].push(d[k].encode());
	}
	return o;
}
_.States=null;
function gp(e){
	if(!e)return;
	var $=this;
}
_=gp.prototype;
_.__type="LDString";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}
function fw(e){
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	$.Principal=e['p'];
}
_=fw.prototype;
_.__type="LDIdentity";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Type!=null)o['t']=$.Type;
	if($.Principal!=null)o['p']=$.Principal;
	return o;
}
_.Type=null;
_.Principal=null;
function fx(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
	$.PackageId=e['p'];
}
fx.prototype=new b();
fx.prototype.constructor = fx;
_=fx.prototype;
_.__type="LDAppScopeId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.AppId!=null)o['a']=$.AppId.toString('base64');
	if($.PackageId!=null)o['p']=$.PackageId;
	return o;
}
_.AppId=null;
_.PackageId=null;
function fy(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.ItemType=e['it'];
	$.Creator=e['c'];
	$.GivenId=e['a'];
}
fy.prototype=new b();
fy.prototype.constructor = fy;
_=fy.prototype;
_.__type="LDItemId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ItemType!=null)o['it']=$.ItemType;
	if($.Creator!=null)o['c']=$.Creator;
	if($.GivenId!=null)o['a']=$.GivenId;
	return o;
}
_.ItemType=null;
_.Creator=null;
_.GivenId=null;
function fz(e){
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Cluster=e['c'];
	if(e['i']!=null){
		$.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Identities.push(new fw(d[k]));
	}
	$.MigratedName=e['n'];
	$.MigratedPictureLink=e['p'];
	if(e['m']!=null)$.MigratedCloudConfig=new fP(e['m']);
	$.CreationTime=e['s'];
}
_=fz.prototype;
_.__type="LDAccountDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Account!=null)o['a']=$.Account;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.Identities!=null) {
		o['i']=[];
		var d=$.Identities;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.MigratedName!=null)o['n']=$.MigratedName;
	if($.MigratedPictureLink!=null)o['p']=$.MigratedPictureLink;
	if($.MigratedCloudConfig!=null)o['m']=$.MigratedCloudConfig.encode();
	if($.CreationTime!=null)o['s']=$.CreationTime;
	return o;
}
_.Account=null;
_.Cluster=null;
_.Identities=null;
_.MigratedName=null;
_.MigratedPictureLink=null;
_.MigratedCloudConfig=null;
_.CreationTime=null;
function fA(e){
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['l']!=null){
		$.Records=[];
		var d = e['l'];
		for(var k=0; k<d.length;++k)$.Records.push(new gq(d[k]));
	}
}
_=fA.prototype;
_.__type="LDFlaggedDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Account!=null)o['a']=$.Account;
	if($.Records!=null) {
		o['l']=[];
		var d=$.Records;
		for(var k=0;k<d.length;++k) o['l'].push(d[k].encode());
	}
	return o;
}
_.Account=null;
_.Records=null;
function fB(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Banned=e['b'];
	if(e['a']!=null){
		$.RevokedApps = {};
		var d = e['a'];
		for(var k in d) $.RevokedApps[k]=d[k];
	}
	if(e['ap']!=null){
		$.PubRevokedApps = {};
		var d = e['ap'];
		for(var k in d) $.PubRevokedApps[k]=d[k];
	}
	$.RevokedUnsol=e['u'];
	if(e['bu']!=null){
		$.BlockedUsers=[];
		var d = e['bu'];
		for(var k=0;k<d.length;++k)$.BlockedUsers.push(d[k]);
	}
	if(e['bbu']!=null){
		$.BlockedByUsers=[];
		var d = e['bbu'];
		for(var k=0;k<d.length;++k)$.BlockedByUsers.push(d[k]);
	}
}
fB.prototype=new b();
fB.prototype.constructor = fB;
_=fB.prototype;
_.__type="LDPrettyPermissions";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Banned!=null)o['b']=$.Banned;
	if($.RevokedApps!=null){
		o['a']={};
		var d=$.RevokedApps;
		for(var k in d)o['a'][k]=d[k];
	}
	if($.PubRevokedApps!=null){
		o['ap']={};
		var d=$.PubRevokedApps;
		for(var k in d)o['ap'][k]=d[k];
	}
	if($.RevokedUnsol!=null)o['u']=$.RevokedUnsol;
	if($.BlockedUsers!=null) {
		o['bu']=[];
		var d=$.BlockedUsers;
		for(var k=0;k<d.length;++k) o['bu'].push(d[k]);
	}
	if($.BlockedByUsers!=null) {
		o['bbu']=[];
		var d=$.BlockedByUsers;
		for(var k=0;k<d.length;++k) o['bbu'].push(d[k]);
	}
	return o;
}
_.Banned=null;
_.RevokedApps=null;
_.PubRevokedApps=null;
_.RevokedUnsol=null;
_.BlockedUsers=null;
_.BlockedByUsers=null;
function fC(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	if(e['i']!=null)$.Id=new Buffer(e['i'],'base64');
}
fC.prototype=new b();
fC.prototype.constructor = fC;
_=fC.prototype;
_.__type="LDTypedId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Type!=null)o['t']=$.Type;
	if($.Id!=null)o['i']=$.Id.toString('base64');
	return o;
}
_.Type=null;
_.Id=null;
function fD(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	if(e['a']!=null)$.AppId=new Buffer(e['a'],'base64');
}
fD.prototype=new b();
fD.prototype.constructor = fD;
_=fD.prototype;
_.__type="LDAcl";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Type!=null)o['t']=$.Type;
	if($.AppId!=null)o['a']=$.AppId.toString('base64');
	return o;
}
_.Type=null;
_.AppId=null;
function fF(e){
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	if(e['h']!=null)$.Hash=new Buffer(e['h'],'base64');
}
_=fF.prototype;
_.__type="LDIdentityHash";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Type!=null)o['t']=$.Type;
	if($.Hash!=null)o['h']=$.Hash.toString('base64');
	return o;
}
_.Type=null;
_.Hash=null;
function fG(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Id=new fC(e['i']);
	$.Timestamp=e['t'];
	$.Owner=e['s'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	if(e['m']!=null)$.Metadata=new Buffer(e['m'],'base64');
	$.Version=e['v'];
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Deleted=e['d'];
	if(e['di']!=null)$.DeviceId=new Buffer(e['di'],'base64');
}
_=fG.prototype;
_.__type="LDMessage";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Id!=null)o['i']=$.Id.encode();
	if($.Timestamp!=null)o['t']=$.Timestamp;
	if($.Owner!=null)o['s']=$.Owner;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Metadata!=null)o['m']=$.Metadata.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Deleted!=null)o['d']=$.Deleted;
	if($.DeviceId!=null)o['di']=$.DeviceId.toString('base64');
	return o;
}
_.Id=null;
_.Timestamp=null;
_.Owner=null;
_.Body=null;
_.Metadata=null;
_.Version=null;
_.Feed=null;
_.Deleted=null;
_.DeviceId=null;
function fH(e){
	if(!e)return;
	var $=this;
	$.Type=e['T'];
	$.Timestamp=e['t'];
	$.Sender=e['s'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	if(e['f']!=null)$.Feed=new aw(e['f']);
}
_=fH.prototype;
_.__type="LDRealtimeMessage";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Type!=null)o['T']=$.Type;
	if($.Timestamp!=null)o['t']=$.Timestamp;
	if($.Sender!=null)o['s']=$.Sender;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Type=null;
_.Timestamp=null;
_.Sender=null;
_.Body=null;
_.Feed=null;
function fI(e){
	if(!e)return;
	var $=this;
	$.Type=e['t'];
	$.Key=e['k'];
}
_=fI.prototype;
_.__type="LDPushKey";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Type!=null)o['t']=$.Type;
	if($.Key!=null)o['k']=$.Key;
	return o;
}
_.Type=null;
_.Key=null;
function fJ(e){
	if(!e)return;
	var $=this;
	if(e['h']!=null)$.Hash=new Buffer(e['h'],'base64');
	$.Size=e['s'];
	$.MimeType=e['m'];
}
_=fJ.prototype;
_.__type="LDBlobMetadata";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Hash!=null)o['h']=$.Hash.toString('base64');
	if($.Size!=null)o['s']=$.Size;
	if($.MimeType!=null)o['m']=$.MimeType;
	return o;
}
_.Hash=null;
_.Size=null;
_.MimeType=null;
function fK(e){
	if(!e)return;
	var $=this;
	$.UploadUrl=e['u'];
	if(e['h']!=null){
		$.UploadHeaders = {};
		var d = e['h'];
		for(var k in d) $.UploadHeaders[k]=d[k];
	}
	$.Cluster=e['c'];
	$.IsPermanent=e['p'];
	if(e['prt']!=null)$.PermanenceRefTag=new Buffer(e['prt'],'base64');
	$.AlreadyUploaded=e['a'];
	$.BlobLinkString=e['l'];
}
_=fK.prototype;
_.__type="LDBlobUploadTicket";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.UploadUrl!=null)o['u']=$.UploadUrl;
	if($.UploadHeaders!=null){
		o['h']={};
		var d=$.UploadHeaders;
		for(var k in d)o['h'][k]=d[k];
	}
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.IsPermanent!=null)o['p']=$.IsPermanent;
	if($.PermanenceRefTag!=null)o['prt']=$.PermanenceRefTag.toString('base64');
	if($.AlreadyUploaded!=null)o['a']=$.AlreadyUploaded;
	if($.BlobLinkString!=null)o['l']=$.BlobLinkString;
	return o;
}
_.UploadUrl=null;
_.UploadHeaders=null;
_.Cluster=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
_.AlreadyUploaded=null;
_.BlobLinkString=null;
function fL(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Name=e['n'];
	$.ProfilePictureLink=e['p'];
	if(e['D']!=null)$.ProfileDecryptedHash=new Buffer(e['D'],'base64');
	$.ProfileVideoLink=e['pv'];
	if(e['Dv']!=null)$.ProfileVideoDecryptedHash=new Buffer(e['Dv'],'base64');
	$.Version=e['v'];
	$.Display=e['d'];
	$.Blocked=e['b'];
	$.WasContact=e['wc'];
	$.HasAppTime=e['t'];
	if(e['h']!=null){
		$.Hashidentities=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)$.Hashidentities.push(new fF(d[k]));
	}
	if(e['i']!=null){
		$.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Identities.push(new fw(d[k]));
	}
}
fL.prototype=new b();
fL.prototype.constructor = fL;
_=fL.prototype;
_.__type="LDContactDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Name!=null)o['n']=$.Name;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.ProfileDecryptedHash!=null)o['D']=$.ProfileDecryptedHash.toString('base64');
	if($.ProfileVideoLink!=null)o['pv']=$.ProfileVideoLink;
	if($.ProfileVideoDecryptedHash!=null)o['Dv']=$.ProfileVideoDecryptedHash.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.Display!=null)o['d']=$.Display;
	if($.Blocked!=null)o['b']=$.Blocked;
	if($.WasContact!=null)o['wc']=$.WasContact;
	if($.HasAppTime!=null)o['t']=$.HasAppTime;
	if($.Hashidentities!=null) {
		o['h']=[];
		var d=$.Hashidentities;
		for(var k=0;k<d.length;++k) o['h'].push(d[k].encode());
	}
	if($.Identities!=null) {
		o['i']=[];
		var d=$.Identities;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.Account=null;
_.Name=null;
_.ProfilePictureLink=null;
_.ProfileDecryptedHash=null;
_.ProfileVideoLink=null;
_.ProfileVideoDecryptedHash=null;
_.Version=null;
_.Display=null;
_.Blocked=null;
_.WasContact=null;
_.HasAppTime=null;
_.Hashidentities=null;
_.Identities=null;
function fM(e){
	if(!e)return;
	var $=this;
	if(e['rc']!=null)$.ReceiptContainer=new gr(e['rc']);
	if(e['bic']!=null)$.BillingInfoContainer=new gs(e['bic']);
}
_=fM.prototype;
_.__type="LDPurchaseData";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ReceiptContainer!=null)o['rc']=$.ReceiptContainer.encode();
	if($.BillingInfoContainer!=null)o['bic']=$.BillingInfoContainer.encode();
	return o;
}
_.ReceiptContainer=null;
_.BillingInfoContainer=null;
function gt(e){
	fu.call(this,e);
	if(!e)return;
	var $=this;
}
gt.prototype=new fu();
gt.prototype.constructor = gt;
_=gt.prototype;
_.__type="LDFeature";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	fu.prototype.encode.call($,o);
	return o;
}
function fN(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfoUserMutable=new gu(e['ai']);
	if(e['si']!=null)$.StickerPackInfoUserMutable=new gv(e['si']);
}
_=fN.prototype;
_.__type="LDItemInfoUserMutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfoUserMutable!=null)o['ai']=$.AppInfoUserMutable.encode();
	if($.StickerPackInfoUserMutable!=null)o['si']=$.StickerPackInfoUserMutable.encode();
	return o;
}
_.AppInfoUserMutable=null;
_.StickerPackInfoUserMutable=null;
function fO(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfoSystemMutable=new gw(e['ai']);
	if(e['ii']!=null)$.StickerPackInfoSystemMutable=new gx(e['ii']);
}
_=fO.prototype;
_.__type="LDItemInfoSystemMutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfoSystemMutable!=null)o['ai']=$.AppInfoSystemMutable.encode();
	if($.StickerPackInfoSystemMutable!=null)o['ii']=$.StickerPackInfoSystemMutable.encode();
	return o;
}
_.AppInfoSystemMutable=null;
_.StickerPackInfoSystemMutable=null;
function fP(e){
	if(!e)return;
	var $=this;
	$.Provider=e['p'];
	$.Certificate=e['c'];
	$.ConsumerToken=e['ct'];
	$.ConsumerSecret=e['cs'];
	$.AccessToken=e['at'];
	$.AccessSecret=e['as'];
	$.RefreshToken=e['rt'];
	$.Expiration=e['e'];
	$.BlobsFolder=e['f'];
}
_=fP.prototype;
_.__type="LDCloudConfig";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Provider!=null)o['p']=$.Provider;
	if($.Certificate!=null)o['c']=$.Certificate;
	if($.ConsumerToken!=null)o['ct']=$.ConsumerToken;
	if($.ConsumerSecret!=null)o['cs']=$.ConsumerSecret;
	if($.AccessToken!=null)o['at']=$.AccessToken;
	if($.AccessSecret!=null)o['as']=$.AccessSecret;
	if($.RefreshToken!=null)o['rt']=$.RefreshToken;
	if($.Expiration!=null)o['e']=$.Expiration;
	if($.BlobsFolder!=null)o['f']=$.BlobsFolder;
	return o;
}
_.Provider=null;
_.Certificate=null;
_.ConsumerToken=null;
_.ConsumerSecret=null;
_.AccessToken=null;
_.AccessSecret=null;
_.RefreshToken=null;
_.Expiration=null;
_.BlobsFolder=null;
function fQ(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	if(e['i']!=null)$.Id=new Buffer(e['i'],'base64');
}
fQ.prototype=new b();
fQ.prototype.constructor = fQ;
_=fQ.prototype;
_.__type="LDGameChallengeId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.Id!=null)o['i']=$.Id.toString('base64');
	return o;
}
_.Account=null;
_.Id=null;
function fR(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Latitude=e['x'];
	$.Longitude=e['y'];
}
fR.prototype=new b();
fR.prototype.constructor = fR;
_=fR.prototype;
_.__type="LDGPSLocation";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Latitude!=null)o['x']=$.Latitude;
	if($.Longitude!=null)o['y']=$.Longitude;
	return o;
}
_.Latitude=null;
_.Longitude=null;
function fS(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Broadcasted=e['b'];
	$.Expiration=e['e'];
	$.ItemType=e['t'];
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['fm']!=null)$.FeedMetadata=new gy(e['fm']);
}
fS.prototype=new b();
fS.prototype.constructor = fS;
_=fS.prototype;
_.__type="LDNearbyItemContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Broadcasted!=null)o['b']=$.Broadcasted;
	if($.Expiration!=null)o['e']=$.Expiration;
	if($.ItemType!=null)o['t']=$.ItemType;
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.FeedMetadata!=null)o['fm']=$.FeedMetadata.encode();
	return o;
}
_.Broadcasted=null;
_.Expiration=null;
_.ItemType=null;
_.Feed=null;
_.FeedMetadata=null;
function fT(e){
	if(!e)return;
	var $=this;
	$.Key=e['k'];
	$.UtcTimestamp=e['t'];
	if(e['d']!=null){
		$.AuxiliaryData = {};
		var d = e['d'];
		for(var k in d) $.AuxiliaryData[k]=d[k];
	}
}
_=fT.prototype;
_.__type="LDClientEvent";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Key!=null)o['k']=$.Key;
	if($.UtcTimestamp!=null)o['t']=$.UtcTimestamp;
	if($.AuxiliaryData!=null){
		o['d']={};
		var d=$.AuxiliaryData;
		for(var k in d)o['d'][k]=d[k];
	}
	return o;
}
_.Key=null;
_.UtcTimestamp=null;
_.AuxiliaryData=null;
function fV(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.TagType=e['tt'];
	$.Tag=e['t'];
}
fV.prototype=new b();
fV.prototype.constructor = fV;
_=fV.prototype;
_.__type="LDPostTag";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.TagType!=null)o['tt']=$.TagType;
	if($.Tag!=null)o['t']=$.Tag;
	return o;
}
_.TagType=null;
_.Tag=null;
function fW(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Poster=e['a'];
	if(e['id']!=null)$.PostId=new Buffer(e['id'],'base64');
	$.PostType=e['t'];
}
fW.prototype=new b();
fW.prototype.constructor = fW;
_=fW.prototype;
_.__type="LDPostId";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Poster!=null)o['a']=$.Poster;
	if($.PostId!=null)o['id']=$.PostId.toString('base64');
	if($.PostType!=null)o['t']=$.PostType;
	return o;
}
_.Poster=null;
_.PostId=null;
_.PostType=null;
function fY(e){
	if(!e)return;
	var $=this;
	$.Timestamp=e['t'];
	$.Pin=e['p'];
	$.Url=e['l'];
}
_=fY.prototype;
_.__type="LDJoinFeedLink";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Timestamp!=null)o['t']=$.Timestamp;
	if($.Pin!=null)o['p']=$.Pin;
	if($.Url!=null)o['l']=$.Url;
	return o;
}
_.Timestamp=null;
_.Pin=null;
_.Url=null;
function fZ(e){
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	$.Acceptance=e['a'];
	$.LastWriteTime=e['t'];
	$.LastRenderableTime=e['r'];
}
_=fZ.prototype;
_.__type="LDDirtyFeed";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.Acceptance!=null)o['a']=$.Acceptance;
	if($.LastWriteTime!=null)o['t']=$.LastWriteTime;
	if($.LastRenderableTime!=null)o['r']=$.LastRenderableTime;
	return o;
}
_.Feed=null;
_.Acceptance=null;
_.LastWriteTime=null;
_.LastRenderableTime=null;
function g_(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Url=e['u'];
	if(e['h']!=null){
		$.Headers = {};
		var d = e['h'];
		for(var k in d) $.Headers[k]=d[k];
	}
}
g_.prototype=new b();
g_.prototype.constructor = g_;
_=g_.prototype;
_.__type="LDBlobDownloadTicket";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Url!=null)o['u']=$.Url;
	if($.Headers!=null){
		o['h']={};
		var d=$.Headers;
		for(var k in d)o['h'][k]=d[k];
	}
	return o;
}
_.Url=null;
_.Headers=null;
function ga(e){
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.ProfilePictureLink=e['p'];
	if(e['d']!=null)$.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	$.ProfileVideoLink=e['pv'];
	if(e['dv']!=null)$.ProfileVideoDecryptedHash=new Buffer(e['dv'],'base64');
	$.Version=e['v'];
	if(e['i']!=null){
		$.IdentitySettings=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.IdentitySettings.push(new gz(d[k]));
	}
	$.HasAppTime=e['t'];
}
_=ga.prototype;
_.__type="LDProfileDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Name!=null)o['n']=$.Name;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.ProfileDecryptedHash!=null)o['d']=$.ProfileDecryptedHash.toString('base64');
	if($.ProfileVideoLink!=null)o['pv']=$.ProfileVideoLink;
	if($.ProfileVideoDecryptedHash!=null)o['dv']=$.ProfileVideoDecryptedHash.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.IdentitySettings!=null) {
		o['i']=[];
		var d=$.IdentitySettings;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.HasAppTime!=null)o['t']=$.HasAppTime;
	return o;
}
_.Name=null;
_.ProfilePictureLink=null;
_.ProfileDecryptedHash=null;
_.ProfileVideoLink=null;
_.ProfileVideoDecryptedHash=null;
_.Version=null;
_.IdentitySettings=null;
_.HasAppTime=null;
function gb(e){
	if(!e)return;
	var $=this;
	$.Name=e['n'];
	$.ProfilePictureLink=e['p'];
	if(e['d']!=null)$.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	$.Version=e['v'];
	if(e['i']!=null){
		$.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Identities.push(new fw(d[k]));
	}
	$.HasAppTime=e['t'];
	$.ProfileVideoLink=e['pv'];
	if(e['dv']!=null)$.ProfileVideoDecryptedHash=new Buffer(e['dv'],'base64');
}
_=gb.prototype;
_.__type="LDContactProfile";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Name!=null)o['n']=$.Name;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.ProfileDecryptedHash!=null)o['d']=$.ProfileDecryptedHash.toString('base64');
	if($.Version!=null)o['v']=$.Version;
	if($.Identities!=null) {
		o['i']=[];
		var d=$.Identities;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.HasAppTime!=null)o['t']=$.HasAppTime;
	if($.ProfileVideoLink!=null)o['pv']=$.ProfileVideoLink;
	if($.ProfileVideoDecryptedHash!=null)o['dv']=$.ProfileVideoDecryptedHash.toString('base64');
	return o;
}
_.Name=null;
_.ProfilePictureLink=null;
_.ProfileDecryptedHash=null;
_.Version=null;
_.Identities=null;
_.HasAppTime=null;
_.ProfileVideoLink=null;
_.ProfileVideoDecryptedHash=null;
function gc(e){
	if(!e)return;
	var $=this;
	if(e['f']!=null){
		$.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)$.Features.push(d[k]);
	}
	if(e['p']!=null){
		$.Settings = {};
		var d = e['p'];
		for(var k in d) $.Settings[k]=new ax(d[k]);
	}
}
_=gc.prototype;
_.__type="LDProfilePublicState";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Features!=null) {
		o['f']=[];
		var d=$.Features;
		for(var k=0;k<d.length;++k) o['f'].push(d[k]);
	}
	if($.Settings!=null){
		o['p']={};
		var d=$.Settings;
		for(var k in d)o['p'][k]=d[k].encode();
	}
	return o;
}
_.Features=null;
_.Settings=null;
function gd(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfo=new gA(e['ai']);
	if(e['si']!=null)$.StickerPackInfo=new gB(e['si']);
}
_=gd.prototype;
_.__type="LDItemInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfo!=null)o['ai']=$.AppInfo.encode();
	if($.StickerPackInfo!=null)o['si']=$.StickerPackInfo.encode();
	return o;
}
_.AppInfo=null;
_.StickerPackInfo=null;
function ge(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfoList=new gC(e['ai']);
	if(e['si']!=null)$.StickerPackInfoList=new gD(e['si']);
}
_=ge.prototype;
_.__type="LDItemInfoListingContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfoList!=null)o['ai']=$.AppInfoList.encode();
	if($.StickerPackInfoList!=null)o['si']=$.StickerPackInfoList.encode();
	return o;
}
_.AppInfoList=null;
_.StickerPackInfoList=null;
function gf(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['k']!=null)$.ClientApiKeyId=new Buffer(e['k'],'base64');
	if(e['s']!=null)$.ClientApiKeySecret=new Buffer(e['s'],'base64');
	if(e['S']!=null)$.ServerApiKeySecret=new Buffer(e['S'],'base64');
	$.CreationTime=e['t'];
	$.Deactivated=e['d'];
}
gf.prototype=new b();
gf.prototype.constructor = gf;
_=gf.prototype;
_.__type="LDApiKey";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.ClientApiKeyId!=null)o['k']=$.ClientApiKeyId.toString('base64');
	if($.ClientApiKeySecret!=null)o['s']=$.ClientApiKeySecret.toString('base64');
	if($.ServerApiKeySecret!=null)o['S']=$.ServerApiKeySecret.toString('base64');
	if($.CreationTime!=null)o['t']=$.CreationTime;
	if($.Deactivated!=null)o['d']=$.Deactivated;
	return o;
}
_.ClientApiKeyId=null;
_.ClientApiKeySecret=null;
_.ServerApiKeySecret=null;
_.CreationTime=null;
_.Deactivated=null;
function gg(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.ProfileName=e['n'];
	$.ProfilePictureLink=e['p'];
	$.Score=e['s'];
	$.Rank=e['r'];
	if(e['d']!=null)$.ProfileDecryptedHash=new Buffer(e['d'],'base64');
}
gg.prototype=new b();
gg.prototype.constructor = gg;
_=gg.prototype;
_.__type="LDScoreBoardEntry";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.ProfileName!=null)o['n']=$.ProfileName;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.Score!=null)o['s']=$.Score;
	if($.Rank!=null)o['r']=$.Rank;
	if($.ProfileDecryptedHash!=null)o['d']=$.ProfileDecryptedHash.toString('base64');
	return o;
}
_.Account=null;
_.ProfileName=null;
_.ProfilePictureLink=null;
_.Score=null;
_.Rank=null;
_.ProfileDecryptedHash=null;
function gh(e){
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Width=e['w'];
	$.Height=e['h'];
	$.ThumbnailUrl=e['s'];
	$.FullsizeUrl=e['f'];
	$.FileSize=e['S'];
	$.ContentType=e['c'];
}
_=gh.prototype;
_.__type="LDImageSearchResult";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Title!=null)o['t']=$.Title;
	if($.Width!=null)o['w']=$.Width;
	if($.Height!=null)o['h']=$.Height;
	if($.ThumbnailUrl!=null)o['s']=$.ThumbnailUrl;
	if($.FullsizeUrl!=null)o['f']=$.FullsizeUrl;
	if($.FileSize!=null)o['S']=$.FileSize;
	if($.ContentType!=null)o['c']=$.ContentType;
	return o;
}
_.Title=null;
_.Width=null;
_.Height=null;
_.ThumbnailUrl=null;
_.FullsizeUrl=null;
_.FileSize=null;
_.ContentType=null;
function gi(e){
	if(!e)return;
	var $=this;
	if(e['p']!=null){
		$.Posts=[];
		var d = e['p'];
		for(var k=0; k<d.length;++k)$.Posts.push(new gj(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
_=gi.prototype;
_.__type="LDWall";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Posts!=null) {
		o['p']=[];
		var d=$.Posts;
		for(var k=0;k<d.length;++k) o['p'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Posts=null;
_.ContinuationKey=null;
function gj(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['v']!=null)$.VideoPost=new gE(e['v']);
	if(e['m']!=null)$.MessagePost=new gF(e['m']);
	if(e['s']!=null)$.ScreenShotPost=new gG(e['s']);
}
gj.prototype=new b();
gj.prototype.constructor = gj;
_=gj.prototype;
_.__type="LDPostContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.VideoPost!=null)o['v']=$.VideoPost.encode();
	if($.MessagePost!=null)o['m']=$.MessagePost.encode();
	if($.ScreenShotPost!=null)o['s']=$.ScreenShotPost.encode();
	return o;
}
_.VideoPost=null;
_.MessagePost=null;
_.ScreenShotPost=null;
function gk(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.DisplayName=e['n'];
	$.ProfilePictureLink=e['p'];
	if(e['o']!=null)$.OmletId=new fw(e['o']);
}
gk.prototype=new b();
gk.prototype.constructor = gk;
_=gk.prototype;
_.__type="LDUser";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.DisplayName!=null)o['n']=$.DisplayName;
	if($.ProfilePictureLink!=null)o['p']=$.ProfilePictureLink;
	if($.OmletId!=null)o['o']=$.OmletId.encode();
	return o;
}
_.Account=null;
_.DisplayName=null;
_.ProfilePictureLink=null;
_.OmletId=null;
function gl(e){
	if(!e)return;
	var $=this;
	if(e['pt']!=null)$.PostTag=new fV(e['pt']);
	$.Localization=e['l'];
}
_=gl.prototype;
_.__type="LDPostTagWithLocalization";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.PostTag!=null)o['pt']=$.PostTag.encode();
	if($.Localization!=null)o['l']=$.Localization;
	return o;
}
_.PostTag=null;
_.Localization=null;
function gm(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.PackageName=e['p'];
	$.AppName=e['n'];
	$.IconBlobLink=e['i'];
	$.WallPostCount=e['c'];
}
gm.prototype=new b();
gm.prototype.constructor = gm;
_=gm.prototype;
_.__type="LDPackageInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PackageName!=null)o['p']=$.PackageName;
	if($.AppName!=null)o['n']=$.AppName;
	if($.IconBlobLink!=null)o['i']=$.IconBlobLink;
	if($.WallPostCount!=null)o['c']=$.WallPostCount;
	return o;
}
_.PackageName=null;
_.AppName=null;
_.IconBlobLink=null;
_.WallPostCount=null;
function gn(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new aw(e['f']);
	if(e['id']!=null)$.AppId=new Buffer(e['id'],'base64');
	$.PackageId=e['pid'];
	$.LobbyName=e['n'];
	$.Stripe=e['s'];
	$.DisplayName=e['dn'];
	$.Members=e['m'];
}
gn.prototype=new b();
gn.prototype.constructor = gn;
_=gn.prototype;
_.__type="LDPublicChatInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.AppId!=null)o['id']=$.AppId.toString('base64');
	if($.PackageId!=null)o['pid']=$.PackageId;
	if($.LobbyName!=null)o['n']=$.LobbyName;
	if($.Stripe!=null)o['s']=$.Stripe;
	if($.DisplayName!=null)o['dn']=$.DisplayName;
	if($.Members!=null)o['m']=$.Members;
	return o;
}
_.Feed=null;
_.AppId=null;
_.PackageId=null;
_.LobbyName=null;
_.Stripe=null;
_.DisplayName=null;
_.Members=null;
function go(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.LastAppName=e['n'];
	$.LastAppIconBlobLink=e['b'];
	$.Online=e['o'];
	$.LastOnline=e['t'];
	$.StreamingLink=e['s'];
	$.LastStream=e['S'];
}
go.prototype=new b();
go.prototype.constructor = go;
_=go.prototype;
_.__type="LDPresenceState";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.Account!=null)o['a']=$.Account;
	if($.LastAppName!=null)o['n']=$.LastAppName;
	if($.LastAppIconBlobLink!=null)o['b']=$.LastAppIconBlobLink;
	if($.Online!=null)o['o']=$.Online;
	if($.LastOnline!=null)o['t']=$.LastOnline;
	if($.StreamingLink!=null)o['s']=$.StreamingLink;
	if($.LastStream!=null)o['S']=$.LastStream;
	return o;
}
_.Account=null;
_.LastAppName=null;
_.LastAppIconBlobLink=null;
_.Online=null;
_.LastOnline=null;
_.StreamingLink=null;
_.LastStream=null;
function gq(e){
	if(!e)return;
	var $=this;
	$.Flagger=e['w'];
	$.Reason=e['r'];
	$.Timestamp=e['t'];
}
_=gq.prototype;
_.__type="LDFlaggedRecord";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Flagger!=null)o['w']=$.Flagger;
	if($.Reason!=null)o['r']=$.Reason;
	if($.Timestamp!=null)o['t']=$.Timestamp;
	return o;
}
_.Flagger=null;
_.Reason=null;
_.Timestamp=null;
function gr(e){
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.MockReceipt=new gH(e['m']);
}
_=gr.prototype;
_.__type="LDReceiptContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.MockReceipt!=null)o['m']=$.MockReceipt.encode();
	return o;
}
_.MockReceipt=null;
function gs(e){
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.MockBillingInfo=new gI(e['m']);
}
_=gs.prototype;
_.__type="LDBillingInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.MockBillingInfo!=null)o['m']=$.MockBillingInfo.encode();
	return o;
}
_.MockBillingInfo=null;
function gJ(e){
	if(!e)return;
	var $=this;
}
_=gJ.prototype;
_.__type="LDItemInfoUserMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}
function gu(e){
	gJ.call(this,e);
	if(!e)return;
	var $=this;
	$.AndroidEnabled=e['ae'];
	$.AndroidDrawer=e['adr'];
	$.AndroidEditor=e['aed'];
	$.AndroidGame=e['aga'];
	$.IOSEnabled=e['ie'];
	$.IOSDrawer=e['idr'];
	$.IOSEditor=e['ied'];
	$.IOSGame=e['iga'];
	$.WebEnabled=e['we'];
	$.WebDrawer=e['wdr'];
	$.WebEditor=e['wed'];
	$.WebGame=e['wga'];
	$.IOSStoreUrl=e['sui'];
	$.AndroidStoreUrl=e['sua'];
	$.WebUrl=e['suw'];
	$.IOSCallback=e['icb'];
	$.AndroidPackageName=e['apn'];
	$.IconBlobLinkString=e['ibls'];
	if(e['ssl']!=null){
		$.ScreenShotsList=[];
		var d = e['ssl'];
		for(var k=0; k<d.length;++k)$.ScreenShotsList.push(new gK(d[k]));
	}
	if(e['asl']!=null){
		$.AppStoresList=[];
		var d = e['asl'];
		for(var k=0; k<d.length;++k)$.AppStoresList.push(new gL(d[k]));
	}
	$.Languages=e['lc'];
	$.Name=e['n'];
	$.NameTranslations=e['nt'];
	$.RedirectUris=e['ru'];
	$.VideoPostReportUri=e['vpru'];
	$.VideoPostDomain=e['vpd'];
	$.Description=e['d'];
	$.DescriptionTranslations=e['dt'];
	$.UserCardDomain=e['ucd'];
	$.UserCardFullIOSAppId=e['ucfiai'];
	$.UserCardIOSLinkScheme=e['ucils'];
	$.UserCardTemplate=e['uctpl'];
	$.UserCardWebBackground=e['ucwbg'];
	$.UserCardAssetCardBackground=e['ucacbg'];
	$.UserCardAssetDefaultProfile=e['ucadp'];
	$.UserCardAssetProfileForeground=e['ucapfg'];
	$.UserCardDefaultMessage=e['ucdm'];
	$.UserCardShareTitleTemplate=e['ucstt'];
	$.UserCardShareDescriptionTemplate=e['ucsdt'];
	$.UserCardIOSAppStoreId=e['uciasi'];
	$.AndroidPackageSigningKeySha256s=e['apsks'];
	$.UserCardIntroTitle=e['ucit'];
	$.UserCardIntroDescription=e['ucid'];
	$.PortalBetaMetadata=e['pbmd'];
}
gu.prototype=new gJ();
gu.prototype.constructor = gu;
_=gu.prototype;
_.__type="LDAppInfoUserMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gJ.prototype.encode.call($,o);
	if($.AndroidEnabled!=null)o['ae']=$.AndroidEnabled;
	if($.AndroidDrawer!=null)o['adr']=$.AndroidDrawer;
	if($.AndroidEditor!=null)o['aed']=$.AndroidEditor;
	if($.AndroidGame!=null)o['aga']=$.AndroidGame;
	if($.IOSEnabled!=null)o['ie']=$.IOSEnabled;
	if($.IOSDrawer!=null)o['idr']=$.IOSDrawer;
	if($.IOSEditor!=null)o['ied']=$.IOSEditor;
	if($.IOSGame!=null)o['iga']=$.IOSGame;
	if($.WebEnabled!=null)o['we']=$.WebEnabled;
	if($.WebDrawer!=null)o['wdr']=$.WebDrawer;
	if($.WebEditor!=null)o['wed']=$.WebEditor;
	if($.WebGame!=null)o['wga']=$.WebGame;
	if($.IOSStoreUrl!=null)o['sui']=$.IOSStoreUrl;
	if($.AndroidStoreUrl!=null)o['sua']=$.AndroidStoreUrl;
	if($.WebUrl!=null)o['suw']=$.WebUrl;
	if($.IOSCallback!=null)o['icb']=$.IOSCallback;
	if($.AndroidPackageName!=null)o['apn']=$.AndroidPackageName;
	if($.IconBlobLinkString!=null)o['ibls']=$.IconBlobLinkString;
	if($.ScreenShotsList!=null) {
		o['ssl']=[];
		var d=$.ScreenShotsList;
		for(var k=0;k<d.length;++k) o['ssl'].push(d[k].encode());
	}
	if($.AppStoresList!=null) {
		o['asl']=[];
		var d=$.AppStoresList;
		for(var k=0;k<d.length;++k) o['asl'].push(d[k].encode());
	}
	if($.Languages!=null)o['lc']=$.Languages;
	if($.Name!=null)o['n']=$.Name;
	if($.NameTranslations!=null)o['nt']=$.NameTranslations;
	if($.RedirectUris!=null)o['ru']=$.RedirectUris;
	if($.VideoPostReportUri!=null)o['vpru']=$.VideoPostReportUri;
	if($.VideoPostDomain!=null)o['vpd']=$.VideoPostDomain;
	if($.Description!=null)o['d']=$.Description;
	if($.DescriptionTranslations!=null)o['dt']=$.DescriptionTranslations;
	if($.UserCardDomain!=null)o['ucd']=$.UserCardDomain;
	if($.UserCardFullIOSAppId!=null)o['ucfiai']=$.UserCardFullIOSAppId;
	if($.UserCardIOSLinkScheme!=null)o['ucils']=$.UserCardIOSLinkScheme;
	if($.UserCardTemplate!=null)o['uctpl']=$.UserCardTemplate;
	if($.UserCardWebBackground!=null)o['ucwbg']=$.UserCardWebBackground;
	if($.UserCardAssetCardBackground!=null)o['ucacbg']=$.UserCardAssetCardBackground;
	if($.UserCardAssetDefaultProfile!=null)o['ucadp']=$.UserCardAssetDefaultProfile;
	if($.UserCardAssetProfileForeground!=null)o['ucapfg']=$.UserCardAssetProfileForeground;
	if($.UserCardDefaultMessage!=null)o['ucdm']=$.UserCardDefaultMessage;
	if($.UserCardShareTitleTemplate!=null)o['ucstt']=$.UserCardShareTitleTemplate;
	if($.UserCardShareDescriptionTemplate!=null)o['ucsdt']=$.UserCardShareDescriptionTemplate;
	if($.UserCardIOSAppStoreId!=null)o['uciasi']=$.UserCardIOSAppStoreId;
	if($.AndroidPackageSigningKeySha256s!=null)o['apsks']=$.AndroidPackageSigningKeySha256s;
	if($.UserCardIntroTitle!=null)o['ucit']=$.UserCardIntroTitle;
	if($.UserCardIntroDescription!=null)o['ucid']=$.UserCardIntroDescription;
	if($.PortalBetaMetadata!=null)o['pbmd']=$.PortalBetaMetadata;
	return o;
}
_.AndroidEnabled=null;
_.AndroidDrawer=null;
_.AndroidEditor=null;
_.AndroidGame=null;
_.IOSEnabled=null;
_.IOSDrawer=null;
_.IOSEditor=null;
_.IOSGame=null;
_.WebEnabled=null;
_.WebDrawer=null;
_.WebEditor=null;
_.WebGame=null;
_.IOSStoreUrl=null;
_.AndroidStoreUrl=null;
_.WebUrl=null;
_.IOSCallback=null;
_.AndroidPackageName=null;
_.IconBlobLinkString=null;
_.ScreenShotsList=null;
_.AppStoresList=null;
_.Languages=null;
_.Name=null;
_.NameTranslations=null;
_.RedirectUris=null;
_.VideoPostReportUri=null;
_.VideoPostDomain=null;
_.Description=null;
_.DescriptionTranslations=null;
_.UserCardDomain=null;
_.UserCardFullIOSAppId=null;
_.UserCardIOSLinkScheme=null;
_.UserCardTemplate=null;
_.UserCardWebBackground=null;
_.UserCardAssetCardBackground=null;
_.UserCardAssetDefaultProfile=null;
_.UserCardAssetProfileForeground=null;
_.UserCardDefaultMessage=null;
_.UserCardShareTitleTemplate=null;
_.UserCardShareDescriptionTemplate=null;
_.UserCardIOSAppStoreId=null;
_.AndroidPackageSigningKeySha256s=null;
_.UserCardIntroTitle=null;
_.UserCardIntroDescription=null;
_.PortalBetaMetadata=null;
function gv(e){
	gJ.call(this,e);
	if(!e)return;
	var $=this;
	$.Languages=e['lc'];
	if(e['tg']!=null){
		$.Tags=[];
		var d = e['tg'];
		for(var k=0;k<d.length;++k)$.Tags.push(d[k]);
	}
	$.Name=e['n'];
	if(e['nt']!=null){
		$.NameTranslations = {};
		var d = e['nt'];
		for(var k in d) $.NameTranslations[k]=d[k];
	}
	$.Description=e['d'];
	if(e['dt']!=null){
		$.DescriptionTranslations = {};
		var d = e['dt'];
		for(var k in d) $.DescriptionTranslations[k]=d[k];
	}
	$.PortraitPreviewPackLink=e['p'];
	$.LandscapePreviewPackLink=e['pl'];
	if(e['pdh']!=null)$.PortraitEncryptedPreviewHash=new Buffer(e['pdh'],'base64');
	if(e['pdhl']!=null)$.LandscapeEncryptedPreviewHash=new Buffer(e['pdhl'],'base64');
	if(e['s']!=null){
		$.Stickers=[];
		var d = e['s'];
		for(var k=0; k<d.length;++k)$.Stickers.push(new gM(d[k]));
	}
	$.OriginalPublisher=e['op'];
}
gv.prototype=new gJ();
gv.prototype.constructor = gv;
_=gv.prototype;
_.__type="LDStickerPackInfoUserMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gJ.prototype.encode.call($,o);
	if($.Languages!=null)o['lc']=$.Languages;
	if($.Tags!=null) {
		o['tg']=[];
		var d=$.Tags;
		for(var k=0;k<d.length;++k) o['tg'].push(d[k]);
	}
	if($.Name!=null)o['n']=$.Name;
	if($.NameTranslations!=null){
		o['nt']={};
		var d=$.NameTranslations;
		for(var k in d)o['nt'][k]=d[k];
	}
	if($.Description!=null)o['d']=$.Description;
	if($.DescriptionTranslations!=null){
		o['dt']={};
		var d=$.DescriptionTranslations;
		for(var k in d)o['dt'][k]=d[k];
	}
	if($.PortraitPreviewPackLink!=null)o['p']=$.PortraitPreviewPackLink;
	if($.LandscapePreviewPackLink!=null)o['pl']=$.LandscapePreviewPackLink;
	if($.PortraitEncryptedPreviewHash!=null)o['pdh']=$.PortraitEncryptedPreviewHash.toString('base64');
	if($.LandscapeEncryptedPreviewHash!=null)o['pdhl']=$.LandscapeEncryptedPreviewHash.toString('base64');
	if($.Stickers!=null) {
		o['s']=[];
		var d=$.Stickers;
		for(var k=0;k<d.length;++k) o['s'].push(d[k].encode());
	}
	if($.OriginalPublisher!=null)o['op']=$.OriginalPublisher;
	return o;
}
_.Languages=null;
_.Tags=null;
_.Name=null;
_.NameTranslations=null;
_.Description=null;
_.DescriptionTranslations=null;
_.PortraitPreviewPackLink=null;
_.LandscapePreviewPackLink=null;
_.PortraitEncryptedPreviewHash=null;
_.LandscapeEncryptedPreviewHash=null;
_.Stickers=null;
_.OriginalPublisher=null;
function gN(e){
	if(!e)return;
	var $=this;
	$.PublishedState=e['p'];
	$.WasEverPublished=e['ep'];
	if(e['$']!=null)$.Price=new gO(e['$']);
	$.CreationTimestamp=e['c'];
	$.LastModifiedTimestamp=e['m'];
}
_=gN.prototype;
_.__type="LDItemInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.PublishedState!=null)o['p']=$.PublishedState;
	if($.WasEverPublished!=null)o['ep']=$.WasEverPublished;
	if($.Price!=null)o['$']=$.Price.encode();
	if($.CreationTimestamp!=null)o['c']=$.CreationTimestamp;
	if($.LastModifiedTimestamp!=null)o['m']=$.LastModifiedTimestamp;
	return o;
}
_.PublishedState=null;
_.WasEverPublished=null;
_.Price=null;
_.CreationTimestamp=null;
_.LastModifiedTimestamp=null;
function gw(e){
	gN.call(this,e);
	if(!e)return;
	var $=this;
}
gw.prototype=new gN();
gw.prototype.constructor = gw;
_=gw.prototype;
_.__type="LDAppInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gN.prototype.encode.call($,o);
	return o;
}
function gx(e){
	gN.call(this,e);
	if(!e)return;
	var $=this;
}
gx.prototype=new gN();
gx.prototype.constructor = gx;
_=gx.prototype;
_.__type="LDStickerPackInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gN.prototype.encode.call($,o);
	return o;
}
function gy(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.FeedName=e['n'];
	$.ThumbnailLink=e['t'];
	if(e['d']!=null)$.ThumbnailDecryptedHash=new Buffer(e['d'],'base64');
	$.RequiresPin=e['p'];
	$.Latitude=e['l'];
	$.Longitude=e['g'];
	$.BroadcasterAccount=e['b'];
}
gy.prototype=new b();
gy.prototype.constructor = gy;
_=gy.prototype;
_.__type="LDNearbyItemFeedMetadata";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.FeedName!=null)o['n']=$.FeedName;
	if($.ThumbnailLink!=null)o['t']=$.ThumbnailLink;
	if($.ThumbnailDecryptedHash!=null)o['d']=$.ThumbnailDecryptedHash.toString('base64');
	if($.RequiresPin!=null)o['p']=$.RequiresPin;
	if($.Latitude!=null)o['l']=$.Latitude;
	if($.Longitude!=null)o['g']=$.Longitude;
	if($.BroadcasterAccount!=null)o['b']=$.BroadcasterAccount;
	return o;
}
_.FeedName=null;
_.ThumbnailLink=null;
_.ThumbnailDecryptedHash=null;
_.RequiresPin=null;
_.Latitude=null;
_.Longitude=null;
_.BroadcasterAccount=null;
function gz(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new fw(e['i']);
}
_=gz.prototype;
_.__type="LDProfileIdentitySetting";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Identity!=null)o['i']=$.Identity.encode();
	return o;
}
_.Identity=null;
function gP(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ImmutableContainer=new gQ(e['i']);
	if(e['s']!=null)$.SystemMutableContainer=new fO(e['s']);
	if(e['u']!=null)$.UserMutableContainer=new fN(e['u']);
}
_=gP.prototype;
_.__type="LDItemInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ImmutableContainer!=null)o['i']=$.ImmutableContainer.encode();
	if($.SystemMutableContainer!=null)o['s']=$.SystemMutableContainer.encode();
	if($.UserMutableContainer!=null)o['u']=$.UserMutableContainer.encode();
	return o;
}
_.ImmutableContainer=null;
_.SystemMutableContainer=null;
_.UserMutableContainer=null;
function gA(e){
	gP.call(this,e);
	if(!e)return;
	var $=this;
}
gA.prototype=new gP();
gA.prototype.constructor = gA;
_=gA.prototype;
_.__type="LDAppInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gP.prototype.encode.call($,o);
	return o;
}
function gB(e){
	gP.call(this,e);
	if(!e)return;
	var $=this;
}
gB.prototype=new gP();
gB.prototype.constructor = gB;
_=gB.prototype;
_.__type="LDStickerPackInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gP.prototype.encode.call($,o);
	return o;
}
function gC(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new gA(d[k]));
	}
	if(e['nt']!=null)$.NextToken=new Buffer(e['nt'],'base64');
}
_=gC.prototype;
_.__type="LDAppInfoListingWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Items!=null) {
		o['i']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.NextToken!=null)o['nt']=$.NextToken.toString('base64');
	return o;
}
_.Items=null;
_.NextToken=null;
function gD(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null){
		$.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Items.push(new gB(d[k]));
	}
	if(e['nt']!=null)$.NextToken=new Buffer(e['nt'],'base64');
}
_=gD.prototype;
_.__type="LDStickerPackInfoListingWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Items!=null) {
		o['i']=[];
		var d=$.Items;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.NextToken!=null)o['nt']=$.NextToken.toString('base64');
	return o;
}
_.Items=null;
_.NextToken=null;
function gR(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new fW(e['id']);
	$.CreationDate=e['ct'];
	$.Title=e['t'];
	$.Views=e['v'];
	$.Likes=e['l'];
	if(e['c']!=null){
		$.Comments=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)$.Comments.push(new gS(d[k]));
	}
	$.Score=e['s'];
	if(e['g']!=null){
		$.PostTags=[];
		var d = e['g'];
		for(var k=0; k<d.length;++k)$.PostTags.push(new fV(d[k]));
	}
	$.PosterName=e['un'];
	$.PosterProfilePictureLink=e['up'];
	if(e['oi']!=null)$.OmletId=new fw(e['oi']);
	$.YouLiked=e['yl'];
	$.AppName=e['an'];
	$.AppIconBlobLink=e['ai'];
}
gR.prototype=new b();
gR.prototype.constructor = gR;
_=gR.prototype;
_.__type="LDPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	if($.CreationDate!=null)o['ct']=$.CreationDate;
	if($.Title!=null)o['t']=$.Title;
	if($.Views!=null)o['v']=$.Views;
	if($.Likes!=null)o['l']=$.Likes;
	if($.Comments!=null) {
		o['c']=[];
		var d=$.Comments;
		for(var k=0;k<d.length;++k) o['c'].push(d[k].encode());
	}
	if($.Score!=null)o['s']=$.Score;
	if($.PostTags!=null) {
		o['g']=[];
		var d=$.PostTags;
		for(var k=0;k<d.length;++k) o['g'].push(d[k].encode());
	}
	if($.PosterName!=null)o['un']=$.PosterName;
	if($.PosterProfilePictureLink!=null)o['up']=$.PosterProfilePictureLink;
	if($.OmletId!=null)o['oi']=$.OmletId.encode();
	if($.YouLiked!=null)o['yl']=$.YouLiked;
	if($.AppName!=null)o['an']=$.AppName;
	if($.AppIconBlobLink!=null)o['ai']=$.AppIconBlobLink;
	return o;
}
_.PostId=null;
_.CreationDate=null;
_.Title=null;
_.Views=null;
_.Likes=null;
_.Comments=null;
_.Score=null;
_.PostTags=null;
_.PosterName=null;
_.PosterProfilePictureLink=null;
_.OmletId=null;
_.YouLiked=null;
_.AppName=null;
_.AppIconBlobLink=null;
function gE(e){
	gR.call(this,e);
	if(!e)return;
	var $=this;
	$.Description=e['d'];
	$.BlobLinkString=e['b'];
	if(e['r']!=null)$.VideoBlobRefTag=new Buffer(e['r'],'base64');
	$.ThumbnailBlobLinkString=e['B'];
	$.HlsUrl=e['h'];
	$.LinkUrl=e['u'];
	if(e['m']!=null){
		$.M3u8s=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)$.M3u8s.push(new gT(d[k]));
	}
	$.Height=e['H'];
	$.Width=e['W'];
	$.Duration=e['D'];
}
gE.prototype=new gR();
gE.prototype.constructor = gE;
_=gE.prototype;
_.__type="LDVideoPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gR.prototype.encode.call($,o);
	if($.Description!=null)o['d']=$.Description;
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.VideoBlobRefTag!=null)o['r']=$.VideoBlobRefTag.toString('base64');
	if($.ThumbnailBlobLinkString!=null)o['B']=$.ThumbnailBlobLinkString;
	if($.HlsUrl!=null)o['h']=$.HlsUrl;
	if($.LinkUrl!=null)o['u']=$.LinkUrl;
	if($.M3u8s!=null) {
		o['m']=[];
		var d=$.M3u8s;
		for(var k=0;k<d.length;++k) o['m'].push(d[k].encode());
	}
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	if($.Duration!=null)o['D']=$.Duration;
	return o;
}
_.Description=null;
_.BlobLinkString=null;
_.VideoBlobRefTag=null;
_.ThumbnailBlobLinkString=null;
_.HlsUrl=null;
_.LinkUrl=null;
_.M3u8s=null;
_.Height=null;
_.Width=null;
_.Duration=null;
function gF(e){
	gR.call(this,e);
	if(!e)return;
	var $=this;
	$.Message=e['d'];
}
gF.prototype=new gR();
gF.prototype.constructor = gF;
_=gF.prototype;
_.__type="LDMessagePost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gR.prototype.encode.call($,o);
	if($.Message!=null)o['d']=$.Message;
	return o;
}
_.Message=null;
function gG(e){
	gR.call(this,e);
	if(!e)return;
	var $=this;
	$.Description=e['d'];
	$.BlobLinkString=e['b'];
	$.ThumbnailLinkString=e['tn'];
	$.LinkUrl=e['u'];
	$.Height=e['H'];
	$.Width=e['W'];
}
gG.prototype=new gR();
gG.prototype.constructor = gG;
_=gG.prototype;
_.__type="LDScreenShotPost";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gR.prototype.encode.call($,o);
	if($.Description!=null)o['d']=$.Description;
	if($.BlobLinkString!=null)o['b']=$.BlobLinkString;
	if($.ThumbnailLinkString!=null)o['tn']=$.ThumbnailLinkString;
	if($.LinkUrl!=null)o['u']=$.LinkUrl;
	if($.Height!=null)o['H']=$.Height;
	if($.Width!=null)o['W']=$.Width;
	return o;
}
_.Description=null;
_.BlobLinkString=null;
_.ThumbnailLinkString=null;
_.LinkUrl=null;
_.Height=null;
_.Width=null;
function gH(e){
	if(!e)return;
	var $=this;
	if(e['j']!=null)$.Junk=new Buffer(e['j'],'base64');
}
_=gH.prototype;
_.__type="LDMockReceipt";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Junk!=null)o['j']=$.Junk.toString('base64');
	return o;
}
_.Junk=null;
function gI(e){
	if(!e)return;
	var $=this;
	if(e['j']!=null)$.Junk=new Buffer(e['j'],'base64');
}
_=gI.prototype;
_.__type="LDMockBillingInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Junk!=null)o['j']=$.Junk.toString('base64');
	return o;
}
_.Junk=null;
function gK(e){
	if(!e)return;
	var $=this;
	$.ThumbnailBlobLinkString=e['tb'];
	$.FullsizeBlobLinkString=e['fb'];
}
_=gK.prototype;
_.__type="LDAppScreenshot";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ThumbnailBlobLinkString!=null)o['tb']=$.ThumbnailBlobLinkString;
	if($.FullsizeBlobLinkString!=null)o['fb']=$.FullsizeBlobLinkString;
	return o;
}
_.ThumbnailBlobLinkString=null;
_.FullsizeBlobLinkString=null;
function gL(e){
	if(!e)return;
	var $=this;
	$.PackageName=e['e'];
	$.Url=e['d'];
}
_=gL.prototype;
_.__type="LDAppStore";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.PackageName!=null)o['e']=$.PackageName;
	if($.Url!=null)o['d']=$.Url;
	return o;
}
_.PackageName=null;
_.Url=null;
function gM(e){
	if(!e)return;
	var $=this;
	$.Id=e['i'];
	$.Width=e['w'];
	$.Height=e['h'];
	$.ThumbnailBlobLinkString=e['tb'];
	if(e['tdh']!=null)$.ThumbnailDecryptedHash=new Buffer(e['tdh'],'base64');
	$.FullsizeBlobLinkString=e['fb'];
	if(e['fdh']!=null)$.FullsizeDecryptedHash=new Buffer(e['fdh'],'base64');
	$.IsVideo=e['v'];
	$.Name=e['n'];
	$.Description=e['d'];
	if(e['t']!=null){
		$.Tags=[];
		var d = e['t'];
		for(var k=0;k<d.length;++k)$.Tags.push(d[k]);
	}
}
_=gM.prototype;
_.__type="LDSticker";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Id!=null)o['i']=$.Id;
	if($.Width!=null)o['w']=$.Width;
	if($.Height!=null)o['h']=$.Height;
	if($.ThumbnailBlobLinkString!=null)o['tb']=$.ThumbnailBlobLinkString;
	if($.ThumbnailDecryptedHash!=null)o['tdh']=$.ThumbnailDecryptedHash.toString('base64');
	if($.FullsizeBlobLinkString!=null)o['fb']=$.FullsizeBlobLinkString;
	if($.FullsizeDecryptedHash!=null)o['fdh']=$.FullsizeDecryptedHash.toString('base64');
	if($.IsVideo!=null)o['v']=$.IsVideo;
	if($.Name!=null)o['n']=$.Name;
	if($.Description!=null)o['d']=$.Description;
	if($.Tags!=null) {
		o['t']=[];
		var d=$.Tags;
		for(var k=0;k<d.length;++k) o['t'].push(d[k]);
	}
	return o;
}
_.Id=null;
_.Width=null;
_.Height=null;
_.ThumbnailBlobLinkString=null;
_.ThumbnailDecryptedHash=null;
_.FullsizeBlobLinkString=null;
_.FullsizeDecryptedHash=null;
_.IsVideo=null;
_.Name=null;
_.Description=null;
_.Tags=null;
function gO(e){
	if(!e)return;
	var $=this;
	$.Free=e['f'];
	$.Usd=e['usd'];
}
_=gO.prototype;
_.__type="LDPrice";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Free!=null)o['f']=$.Free;
	if($.Usd!=null)o['usd']=$.Usd;
	return o;
}
_.Free=null;
_.Usd=null;
function gQ(e){
	if(!e)return;
	var $=this;
	if(e['ai']!=null)$.AppInfoImmutable=new gU(e['ai']);
	if(e['si']!=null)$.StickerPackInfoImmutable=new gV(e['si']);
}
_=gQ.prototype;
_.__type="LDItemInfoImmutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.AppInfoImmutable!=null)o['ai']=$.AppInfoImmutable.encode();
	if($.StickerPackInfoImmutable!=null)o['si']=$.StickerPackInfoImmutable.encode();
	return o;
}
_.AppInfoImmutable=null;
_.StickerPackInfoImmutable=null;
function gS(e){
	if(!e)return;
	var $=this;
	$.Commenter=e['ct'];
	if(e['c']!=null)$.Comment=new Buffer(e['c'],'base64');
}
_=gS.prototype;
_.__type="LDComment";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Commenter!=null)o['ct']=$.Commenter;
	if($.Comment!=null)o['c']=$.Comment.toString('base64');
	return o;
}
_.Commenter=null;
_.Comment=null;
function gT(e){
	b.call(this,e);
	if(!e)return;
	var $=this;
	$.BitRate=e['r'];
	if(e['h']!=null){
		$.Headers=[];
		var d = e['h'];
		for(var k=0;k<d.length;++k)$.Headers.push(d[k]);
	}
	if(e['t']!=null){
		$.Duration=[];
		var d = e['t'];
		for(var k=0;k<d.length;++k)$.Duration.push(d[k]);
	}
	if(e['b']!=null){
		$.File=[];
		var d = e['b'];
		for(var k=0;k<d.length;++k)$.File.push(d[k]);
	}
}
gT.prototype=new b();
gT.prototype.constructor = gT;
_=gT.prototype;
_.__type="LDM3U8Info";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	b.prototype.encode.call($,o);
	if($.BitRate!=null)o['r']=$.BitRate;
	if($.Headers!=null) {
		o['h']=[];
		var d=$.Headers;
		for(var k=0;k<d.length;++k) o['h'].push(d[k]);
	}
	if($.Duration!=null) {
		o['t']=[];
		var d=$.Duration;
		for(var k=0;k<d.length;++k) o['t'].push(d[k]);
	}
	if($.File!=null) {
		o['b']=[];
		var d=$.File;
		for(var k=0;k<d.length;++k) o['b'].push(d[k]);
	}
	return o;
}
_.BitRate=null;
_.Headers=null;
_.Duration=null;
_.File=null;
function gW(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ItemId=new fy(e['id']);
}
_=gW.prototype;
_.__type="LDItemInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['id']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
function gU(e){
	gW.call(this,e);
	if(!e)return;
	var $=this;
}
gU.prototype=new gW();
gU.prototype.constructor = gU;
_=gU.prototype;
_.__type="LDAppInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gW.prototype.encode.call($,o);
	return o;
}
function gV(e){
	gW.call(this,e);
	if(!e)return;
	var $=this;
}
gV.prototype=new gW();
gV.prototype.constructor = gV;
_=gV.prototype;
_.__type="LDStickerPackInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	gW.prototype.encode.call($,o);
	return o;
}
dX.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetFollowingCount=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dz.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.FlagUser=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
eb.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetRecommendedWallRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dw.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.ImageSearchRequest=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bH.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.SetFeedName=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
db.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.OptInForAllGamesChallengesRequest=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dv.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.UrlToStoryRequest=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cI.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.PublishItemRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cY.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new E();
	t.GetCloudConfigRequest=o;
	o=t;
	t=new v();
	t.CloudSync=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bO.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.GetJoinFeedLink=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dc.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.FindGamers=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
de.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.GameChallengeComplete=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cO.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.GenerateGrantForItemRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
by.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.UpdateMessage=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
b_.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetDeviceRecords=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aX.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.ChangeUserPicture=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ef.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.LeavePublicChatRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cu.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.RemoveItemsFromProfileRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dU.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetExternalShareLink=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aH.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.LinkOmletIdentityRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dF.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new K();
	t.SetSmsParticipationRequest=o;
	o=t;
	t=new v();
	t.Oob=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aC.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.ConfirmTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
eo.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new P();
	t.GatherEventsByAppRequest=o;
	o=t;
	t=new v();
	t.EventSummary=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cK.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.DeleteItemRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ec.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new M();
	t.GetIdentityTokenRequest=o;
	o=t;
	t=new v();
	t.IdentityToken=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ep.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new Q();
	t.ListBlockedUsersRequest=o;
	o=t;
	t=new v();
	t.UserModeration=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cs.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.GetContactProfileRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cC.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new B();
	t.MutualAddContact=o;
	o=t;
	t=new v();
	t.AddressBook=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dH.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.PostMessage=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dr.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.UnsubscribeForNearbyItemsRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cX.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new D();
	t.SetDingTimeoutRequest=o;
	o=t;
	t=new v();
	t.Device=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bF.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.AddMember=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cM.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.ListAllItemsRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dm.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new H();
	t.GetTopScoresRequest=o;
	o=t;
	t=new v();
	t.HighScore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aW.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.ChangeUserName=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bs.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.CreateFeed=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
en.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new P();
	t.ReportSummaryEventsRequest=o;
	o=t;
	t=new v();
	t.EventSummary=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dq.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.SubscribeForNearbyItemsRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cv.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.AddFeaturesToProfileRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bX.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.GetFeedState=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aG.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.UnlinkIdentityRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
da.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new E();
	t.DisconnectCloudSyncRequest=o;
	o=t;
	t=new v();
	t.CloudSync=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cw.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.RemoveFeaturesFromProfileRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
e.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new h();
	t.HelloChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
e.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new v();
	t.HelloChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cV.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new D();
	t.DeleteDeviceRequest=o;
	o=t;
	t=new v();
	t.Device=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cB.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new B();
	t.GetAddMeLinkRequest=o;
	o=t;
	t=new v();
	t.AddressBook=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dd.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.UpdateChallengeLocation=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cZ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new E();
	t.SetCloudConfigRequest=o;
	o=t;
	t=new v();
	t.CloudSync=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
g.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new v();
	t.Ping=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
g.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new h();
	t.Ping=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bZ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.GetDirtyFeeds=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cL.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.ListItemsForAccountRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ed.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.GetPublicChatRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bd.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.UnbanUserRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ej.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.ListLiveChatsRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aI.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.GetAppSigninLinkRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aT.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetDetailsByIdentity=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dA.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.CreatePlaygroundRequest=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bA.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.DeleteMessage=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bG.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.RemoveMember=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bS.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.GetFeedDetails=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bb.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.CreateCountryWideFeedRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
d_.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new E();
	t.RefreshCloudConfigRequest=o;
	o=t;
	t=new v();
	t.CloudSync=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dL.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.FollowUser=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dk.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new H();
	t.GetHighScoreRequest=o;
	o=t;
	t=new v();
	t.HighScore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bP.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.JoinFeed=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dS.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetAccountsFollowedRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bB.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.SubscribeFeed=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
df.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.GameChallenge=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
eq.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new Q();
	t.UnblockUserRequest=o;
	o=t;
	t=new v();
	t.UserModeration=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dN.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetGameWall=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aQ.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.UnblockIdentity=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
cU.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.ListApiKeysRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bD.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.SubscribeFeedRealtime=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cz.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new B();
	t.UploadEntriesRequest=o;
	o=t;
	t=new v();
	t.AddressBook=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cW.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new D();
	t.AddDeviceRequest=o;
	o=t;
	t=new v();
	t.Device=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bu.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.GetMessagesBefore=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bx.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.AddMessage=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ei.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.GetRecentMessagesRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dn.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.BroadcastItemRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bh.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetPermissionsRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
cb.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.RegisterPushNotificationKey=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cx.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.GetProfilePublicStateRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ct.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.AddItemsToProfileRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bC.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.UnsubscribeFeed=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cy.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.GetProfileDetailsAndPublicStateRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cf.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new y();
	t.GetUploadTicket=o;
	o=t;
	t=new v();
	t.Blob=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ev.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new R();
	t.GetStreamingLinkRequest=o;
	o=t;
	t=new v();
	t.Presence=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bf.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.UnbanUserFromAppRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
cA.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new B();
	t.GetContactProfileRequest=o;
	o=t;
	t=new v();
	t.AddressBook=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aM.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.GetSSOTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
es.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new Q();
	t.ReportUserRequest=o;
	o=t;
	t=new v();
	t.UserModeration=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bR.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.DefaultAccess=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bE.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.UnsubscribeFeedRealtime=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
co.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.GetProfileDetailsRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bN.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.RemovePendingInvitation=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dp.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.UnbroadcastItemRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cq.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.SetProfilePictureRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dW.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetFollowerCount=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dD.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new K();
	t.GetSmsFeedRequest=o;
	o=t;
	t=new v();
	t.Oob=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dO.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetFollowingWall=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aF.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.CheckLinkedIdentityRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aS.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetDetailsByAccount=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ds.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.FetchNearbyItemsRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dR.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetFollowers=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cJ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.UnpublishItemRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
di.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.FindGamersGSRequest=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
e_.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.UpdatePostDetailsRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cn.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new z();
	t.UnblockContactRequest=o;
	o=t;
	t=new v();
	t.Contact=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dx.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.FailureReport=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aN.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.CheckSSOTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aL.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.ConfirmSigninCodeRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aE.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.GetLinkedIdentitiesRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dT.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.DeletePostRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cN.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.ListPublishedItemsRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aK.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.GetSigninLinkRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dJ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.LikePost=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dh.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.OptInForGSChallengesRequest=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bL.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.SendRealtimeToAccounts=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dQ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetStandardPostTags=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
eu.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new R();
	t.SetOnlineStatusRequest=o;
	o=t;
	t=new v();
	t.Presence=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dj.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new G();
	t.GetSubscriptionUrl=o;
	o=t;
	t=new v();
	t.Subscription=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
f.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new v();
	t.CompleteChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
f.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new h();
	t.CompleteChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ek.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.ListInterestingChatsRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
eg.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.WriteToPublicChatRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aZ.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.LogUserOut=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dl.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new H();
	t.ReportScoreRequest=o;
	o=t;
	t=new v();
	t.HighScore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
be.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.BanUserFromAppRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dB.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.GetFeedbackAccount=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cp.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.SetNameRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cr.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new A();
	t.SetProfileVideoRequest=o;
	o=t;
	t=new v();
	t.Profile=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bM.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.AddPendingInvitation=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bY.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.SetFeedAcceptance=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aR.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetEmailLoginLink=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bK.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.SendRealtime=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bT.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.ApplyDocumentRequest=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cg.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new y();
	t.GetMultipartUploadTicket=o;
	o=t;
	t=new v();
	t.Blob=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dC.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.GetExtraVersions=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cE.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.UserUpdateItemInfoRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ee.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.JoinPublicChatRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ba.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.DeleteScheduledJobRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
cS.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.GenerateApiKeyRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cD.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.CreateItemInfoRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cF.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.SystemUpdateItemInfoRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bw.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.GetMessageById=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cT.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.DeactivateApiKeyRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bz.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.OverwriteMessage=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
c_.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.SubscribeAccount=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ce.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.SetAppleBadgeCount=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bI.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.SetFeedThumbnail=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cP.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.GetItemUsingGrantRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cH.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.ReviewItemRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bJ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.SetFeedVideo=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dE.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new K();
	t.SendSmsMessageRequest=o;
	o=t;
	t=new v();
	t.Oob=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
et.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new R();
	t.GetPresencesRequest=o;
	o=t;
	t=new v();
	t.Presence=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aD.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.RegisterWithOAuthRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aV.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.ListFlaggedUsers=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bQ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.JoinBroadcast=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cm.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new z();
	t.BlockContactRequest=o;
	o=t;
	t=new v();
	t.Contact=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ch.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new y();
	t.VerifyUploadCompleted=o;
	o=t;
	t=new v();
	t.Blob=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ck.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new z();
	t.OverwriteContactsRequest=o;
	o=t;
	t=new v();
	t.Contact=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dK.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.AddVideoView=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cl.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new z();
	t.RemoveContactRequest=o;
	o=t;
	t=new v();
	t.Contact=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cR.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.DeleteGrantForItemRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aJ.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.ConfirmAuthCodeRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
cj.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new y();
	t.VerifyExistsAndPermanence=o;
	o=t;
	t=new v();
	t.Blob=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dI.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.PostScreenShot=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
eh.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.GetPublicChatMembersRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ca.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.UnsubscribeAccount=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bg.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.BlockUserRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dG.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.PostVideo=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dV.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.CheckFollowing=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cQ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.DoesItemHaveGrantRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dZ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetPackagePosts=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aU.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetIdentityRecordsRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dM.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetUserWall=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
bc.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.BanUserRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bv.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.GetMessagesByType=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ea.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetPackagesRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
cG.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new C();
	t.GetItemInfoRequest=o;
	o=t;
	t=new v();
	t.OmletAppStore=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dy.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.EventReport=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
ci.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new y();
	t.GetDownloadTicket=o;
	o=t;
	t=new v();
	t.Blob=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
er.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new Q();
	t.BlockUserRequest=o;
	o=t;
	t=new v();
	t.UserModeration=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aY.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.DisableGameChallenge=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bt.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.GetMessagesSince=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dP.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetPost=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dY.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetUserWallPostCount=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
dg.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.CheckAccountOptedIn=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new az();
	t.Request=o;
	o=t;
	return o;
}
aB.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.RegisterWithTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aO.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.ConfirmSSOTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
var gX = {}
gX.InvalidFeedId="InvalidFeedId";
gX.FeedDoesNotHaveProperties="FeedDoesNotHaveProperties";
gX.DeviceMustBeRegistered="DeviceMustBeRegistered";
gX.MustSpecifyValidIdentity="MustSpecifyValidIdentity";
gX.OwnerCannotLosePrivilege="OwnerCannotLosePrivilege";
gX.BadAuthentication="BadAuthentication";
gX.InvalidToken="InvalidToken";
gX.InvalidIdentityType="InvalidIdentityType";
gX.UnexpectedFieldsInObjData="UnexpectedFieldsInObjData";
gX.UnknownError="UnknownError";
gX.MissingFieldsInRequest="MissingFieldsInRequest";
gX.RedirectURIMismatch="RedirectURIMismatch";
gX.IdentityNotLinkedToDevice="IdentityNotLinkedToDevice";
gX.BadFeedState="BadFeedState";
gX.DocumentChangeRejected="DocumentChangeRejected";
gX.BadDocumentKeyFormat="BadDocumentKeyFormat";
gX.ScriptTimeoutException="ScriptTimeoutException";
gX.MessageAlreadyExists="MessageAlreadyExists";
gX.MessageDoesNotExist="MessageDoesNotExist";
gX.MessageVersionMismatch="MessageVersionMismatch";
gX.MessageNotWritable="MessageNotWritable";
gX.MustRespondToChallenge="MustRespondToChallenge";
gX.MustHello="MustHello";
gX.BadPushResponseSequenceNumber="BadPushResponseSequenceNumber";
gX.BadRequestSequenceNumber="BadRequestSequenceNumber";
gX.UnknownRequestType="UnknownRequestType";
gX.UnknownSourceCluster="UnknownSourceCluster";
gX.ChallengeTooSmall="ChallengeTooSmall";
gX.AccountMismatch="AccountMismatch";
gX.BadPushSequenceNumber="BadPushSequenceNumber";
gX.BadResponseSequenceNumber="BadResponseSequenceNumber";
gX.AccountNotMappedToCluster="AccountNotMappedToCluster";
gX.ImplementationFailure="ImplementationFailure";
gX.UnknownResponseType="UnknownResponseType";
gX.UnknownPushType="UnknownPushType";
gX.OperationNotAllowedCrossCluster="OperationNotAllowedCrossCluster";
gX.OperationOnlyAllowedCrossCluster="OperationOnlyAllowedCrossCluster";
gX.OperationNotAllowedByClient="OperationNotAllowedByClient";
gX.WrongClusterSource="WrongClusterSource";
gX.OperationNotAllowedCrossNode="OperationNotAllowedCrossNode";
gX.DeviceAlreadyAssociated="DeviceAlreadyAssociated";
gX.TokenAuthBlocked="TokenAuthBlocked";
gX.DeviceNotFound="DeviceNotFound";
gX.AccountNotFound="AccountNotFound";
gX.TokenCannotBeDelivered="TokenCannotBeDelivered";
gX.InvalidIdpCaller="InvalidIdpCaller";
gX.InvalidDeliveryInterest="InvalidDeliveryInterest";
gX.IdentityMismatch="IdentityMismatch";
gX.UnknownServiceType="UnknownServiceType";
gX.IdentityNotFound="IdentityNotFound";
gX.AlreadySubscribed="AlreadySubscribed";
gX.NotSubscribed="NotSubscribed";
gX.NoStateForFeed="NoStateForFeed";
gX.MemberNotFound="MemberNotFound";
gX.UserAlreadyHasOmletId="UserAlreadyHasOmletId";
gX.OmletIdHasBeenTaken="OmletIdHasBeenTaken";
gX.SizeLimitExceeded="SizeLimitExceeded";
gX.InvalidLocalBatchWrite="InvalidLocalBatchWrite";
gX.InvalidMessageTransform="InvalidMessageTransform";
gX.MessageTooLarge="MessageTooLarge";
gX.InvalidBlobLink="InvalidBlobLink";
gX.BlobSizeTooLarge="BlobSizeTooLarge";
gX.Blob_BlobIsPermanent="Blob_BlobIsPermanent";
gX.Blob_BlobMayNotHaveRefTags="Blob_BlobMayNotHaveRefTags";
gX.Blob_BlobMustHaveRefTags="Blob_BlobMustHaveRefTags";
gX.OmletAppStore_AppInfoAlreadyExists="OmletAppStore_AppInfoAlreadyExists";
gX.OmletItemStore_ItemInfoNotFound="OmletItemStore_ItemInfoNotFound";
gX.OmletItemStore_ItemInfoAlreadyExists="OmletItemStore_ItemInfoAlreadyExists";
gX.OmletItemStore_InvalidGrantException="OmletItemStore_InvalidGrantException";
gX.Profile_ItemAlreadyDeleted="Profile_ItemAlreadyDeleted";
gX.Profile_ItemNotOwned="Profile_ItemNotOwned";
gX.BadRequest="BadRequest";
gX.Unauthorized="Unauthorized";
gX.FailedToGenerateLink="FailedToGenerateLink";
gX.EncryptionRequired="EncryptionRequired";
gX.CorruptRequest="CorruptRequest";
gX.OperationNotAllowedToIdp="OperationNotAllowedToIdp";
gX.OperationNotAllowByLegacy="OperationNotAllowByLegacy";
gX.MissingGameChallenge="MissingGameChallenge";
gX.GameChallengeAlreadyComplete="GameChallengeAlreadyComplete";
gX.OperationNotAllowedToLegacy="OperationNotAllowedToLegacy";
gX.MigrationTimingIssue="MigrationTimingIssue";
gX.IdentityAlreadyExists="IdentityAlreadyExists";
gX.BadSubscriptionContext="BadSubscriptionContext";
gX.InvalidWebhookUrl="InvalidWebhookUrl";
gX.BadOAuthToken="BadOAuthToken";
gX.UndecryptableRequest="UndecryptableRequest";
gX.CannotUnlinkAllIdentities="CannotUnlinkAllIdentities";
gX.CannotUnlinkAnOmletID="CannotUnlinkAnOmletID";
gX.LegacyAccountFound="LegacyAccountFound";
gX.AccountAlreadyExists="AccountAlreadyExists";
gX.LegacyMigrationToWrongCluster="LegacyMigrationToWrongCluster";
gX.OperationNotAllowedToNonDefault="OperationNotAllowedToNonDefault";
gX.OperationNotApplicableToSelf="OperationNotApplicableToSelf";
gX.InvalidPingInterval="InvalidPingInterval";
gX.OperationNotAllowedByIdp="OperationNotAllowedByIdp";
gX.FailedToDeliverToken="FailedToDeliverToken";
gX.UnsupportedEncoding="UnsupportedEncoding";
gX.InvalidUrl="InvalidUrl";
gX.CorruptMessageBody="CorruptMessageBody";
gX.UnknownCluster="UnknownCluster";
gX.CloudTokenWillNeverWork="CloudTokenWillNeverWork";
gX.CloudTokenTemporarilyFailed="CloudTokenTemporarilyFailed";
gX.PushServiceNotSupportedInChina="PushServiceNotSupportedInChina";
gX.CloudProviderNotSupportedInChina="CloudProviderNotSupportedInChina";
gX.GameChallengeService_UserNotOptedIn="GameChallengeService_UserNotOptedIn";
gX.GameChallengeService_MaxOptIns="GameChallengeService_MaxOptIns";
gX.GameChallengeService_ChallengeExpired="GameChallengeService_ChallengeExpired";
gX.GameChallengeService_ChallengeNotYetExpired="GameChallengeService_ChallengeNotYetExpired";
gX.PingTimeout="PingTimeout";
gX.ClientPingTimeout="ClientPingTimeout";
gX.EmailBounced="EmailBounced";
gX.OmletItemStore_MaxApiKeysExceeded="OmletItemStore_MaxApiKeysExceeded";
gX.OmletItemStore_OperationNotAllowedToType="OmletItemStore_OperationNotAllowedToType";
gX.InvalidApiKey="InvalidApiKey";
gX.DeviceMappedToWrongApp="DeviceMappedToWrongApp";
gX.TokenService_InvalidToken="TokenService_InvalidToken";
gX.TokenService_ExpiredToken="TokenService_ExpiredToken";
gX.InvalidContentType="InvalidContentType";
gX.ShareLinkNotExistsOrExpired="ShareLinkNotExistsOrExpired";
gX.NoVideoStreamFound="NoVideoStreamFound";
gX.InvalidVideoCodecFound="InvalidVideoCodecFound";
gX.WallPostNotFound="WallPostNotFound";
gX.WallPost_AlreadyPosted="WallPost_AlreadyPosted";
gX.OmletIdNotFound="OmletIdNotFound";
gX.OmletIdAuthMismatch="OmletIdAuthMismatch";
gX.OmletIDExist="OmletIDExist";
gX.IdentityExist="IdentityExist";
gX.AuthCodeMismatch="AuthCodeMismatch";
gX.FeedNotAuthorizedForApp="FeedNotAuthorizedForApp";
gX.OmletItemStore_MismatchedItemType="OmletItemStore_MismatchedItemType";
gX.OmletItemStore_IncompleteItemInfo="OmletItemStore_IncompleteItemInfo";
gX.CannotChangeAppScope="CannotChangeAppScope";
gX.ScheduledJobService_FailToSchedule_WrongNode="ScheduledJobService_FailToSchedule_WrongNode";
gX.PublicChatService_NotJoined="PublicChatService_NotJoined";
gX.InvalidFeedKind="InvalidFeedKind";
gX.InvalidEventRange="InvalidEventRange";
gX.InvalidZoom="InvalidZoom";
gX.KeyAlreadyExists="KeyAlreadyExists";
gX.ItemNotFound="ItemNotFound";
gX.UserCardDomainConflict="UserCardDomainConflict";
gX.UserCardDomainTooShort="UserCardDomainTooShort";
gX.UserCardDomainTooLong="UserCardDomainTooLong";
gX.UserCardDomainMustBeLowerCase="UserCardDomainMustBeLowerCase";
gX.UserCardDomainMustBeAscii="UserCardDomainMustBeAscii";
gX.InvalidHttpAuthScheme="InvalidHttpAuthScheme";
gX.BadAuthorizationHeader="BadAuthorizationHeader";
gX.AttemptsExceeded="AttemptsExceeded";
gX.OmletAppStore_InvalidReportUri="OmletAppStore_InvalidReportUri";
gX.OmletAppStore_InvalidDomain="OmletAppStore_InvalidDomain";
gX.OmletAppStore_InvalidStoreUrl="OmletAppStore_InvalidStoreUrl";
gX.PermissionRevoked="PermissionRevoked";
gX.BlockedByUser="BlockedByUser";
gX.UserModerationService_AlreadyReported="UserModerationService_AlreadyReported";
gX.UserModerationService_InvalidReport="UserModerationService_InvalidReport";
gX.FilteringService_RequestFiltered="FilteringService_RequestFiltered";
gX.InvalidPassword="InvalidPassword";
gX.PasswordNotSet="PasswordNotSet";
gX.PasswordIncorrect="PasswordIncorrect";
gX.ReservedDomain="ReservedDomain";
gX.InvalidJwt="InvalidJwt";
gX.BadJwt="BadJwt";
var gY = {}
gY.No="No";
gY.Yes="Yes";
gY.Push="Push";
gY.Removed="Removed";
gY.Restricted="Restricted";
gY.RestrictedPush="RestrictedPush";
gY.Blocked="Blocked";
var gZ = {}
gZ.Default="Default";
gZ.AutoCreate="AutoCreate";
gZ.UserLogin="UserLogin";
var h_ = {}
h_.BAIDU="BAIDU";
h_.BARCLAYS="BARCLAYS";
h_.ASUS="ASUS";
var ha = {}
ha.CONFIRM_SCOPE_LINK="CONFIRM_SCOPE_LINK";
ha.LINK="LINK";
ha.SIGNED_IN="SIGNED_IN";
var hb = {}
hb.App="App";
hb.StickerPack="StickerPack";
var hc = {}
hc.BRONZE="BRONZE";
hc.SILVER="SILVER";
hc.GOLD="GOLD";
hc.DIAMOND="DIAMOND";
var hd = {}
hd.CITY="CITY";
hd.COUNTRY="COUNTRY";
hd.CONTINENT="CONTINENT";
hd.GLOBAL="GLOBAL";
hd.LOCAL="LOCAL";
var he = {}
he.Feed=0;
var hf = {}
hf.PROFILE_PICTURE="PROFILE_PICTURE";
hf.PROFILE_NAME="PROFILE_NAME";
hf.MESSAGE="MESSAGE";
hf.PUBLIC_CHAT_MESSAGE="PUBLIC_CHAT_MESSAGE";
var hg = {}
hg.PORN="PORN";
hg.GORE="GORE";
hg.ADS="ADS";
hg.SPAM="SPAM";
hg.OFFENSIVE="OFFENSIVE";
hg.ILLEGAL="ILLEGAL";
hg.OTHER="OTHER";
var hh = {}
hh.Unknown="unknown";
hh.Email="email";
hh.Facebook="fb";
hh.Phone="phone";
hh.Subscription="sub";
hh.OmletId="omlet";
hh.Huawei="huawei";
hh.Htc="htc";
hh.Account="account";
hh.Baidu="baidu";
hh.ExternalApp="eapp";
var hi = {}
hi.OmletScope="OmletScope";
hi.App="App";
hi.Sms="Sms";
hi.Arcade="Arcade";
var hj = {}
hj.GCM="GCM";
hj.APNS="APNS";
hj.Baidu="Baidu";
hj.Amazon="Amazon";
hj.WPNS="WPNS";
var hk = {}
hk.Dropbox="Dropbox";
hk.Box="Box";
hk.BaiduPCS="BaiduPCS";
hk.OneDrive="OneDrive";
hk.GoogleDrive="GoogleDrive";
hk.OmStore="OmStore";
hk.Dummy="Dummy";
var hl = {}
hl.Game="Game";
hl.String="String";
var hm = {}
hm.Video="Video";
hm.Message="Message";
hm.ScreenShot="ScreenShot";
var hn = {}
hn.NotPublished="NotPublished";
hn.Published="Published";
hn.InReview="InReview";
hn.Deleted="Deleted";
module.exports={
	LDJSONLoggable:b,
	LDRequestContainerBase:a,
	LDDeviceToIdpRequestContainer:h,
	LDResponseContainerBase:l,
	LDDeviceToIdpResponseContainer:r,
	LDDeviceToClusterRequestContainer:v,
	LDDeviceToClusterResponseContainer:S,
	LDPublicKeys:ao,
	LDSynchronizedMessageBody:ap,
	LDAcceptanceChange:aq,
	LDBroadcastSettings:ar,
	LDAddMeInfo:at,
	LDJoinFeedInfo:av,
	LDFeatureSetting:ax,
	LDDeviceToIdpRpcWrapper:ay,
	LDDeviceToClusterRpcWrapper:az,
	LDRpcContext:c,
	LDHelloChallengeRequest:e,
	LDCompleteChallengeRequest:f,
	LDPingRequest:g,
	LDRequestProtocolBase:aA,
	LDDeviceToIdpSignupRequestProtocol:i,
	LDDeviceToIdpAdministrativeRequestProtocol:j,
	LDHelloChallengeResponse:m,
	LDCompleteChallengeResponse:n,
	LDSimpleResponse:p,
	LDPingResponse:q,
	LDResponseProtocolBase:bi,
	LDDeviceToIdpSignupResponseProtocol:s,
	LDDeviceToIdpAdministrativeResponseProtocol:u,
	LDDeviceToClusterMessageRequestProtocol:w,
	LDDeviceToClusterInboxRequestProtocol:x,
	LDClusterOrDeviceToClusterBlobRequestProtocol:y,
	LDDeviceToClusterContactRequestProtocol:z,
	LDDeviceToClusterProfileRequestProtocol:A,
	LDDeviceToClusterAddressBookRequestProtocol:B,
	LDDeviceToClusterOmletItemStoreRequestProtocol:C,
	LDDeviceToClusterDeviceRequestProtocol:D,
	LDDeviceToClusterCloudSyncRequestProtocol:E,
	LDDeviceToClusterGameChallengeRequestProtocol:F,
	LDDeviceToClusterSubscriptionRequestProtocol:G,
	LDDeviceToClusterHighScoreRequestProtocol:H,
	LDDeviceToClusterNearbyItemRequestProtocol:I,
	LDDeviceToClusterMiscellaneousRequestProtocol:J,
	LDDeviceToClusterDirectMessagingRequestProtocol:K,
	LDDeviceToClusterWallPostRequestProtocol:L,
	LDDeviceToClusterIdentityTokenRequestProtocol:M,
	LDDeviceToClusterPublicChatRequestProtocol:N,
	LDDeviceToClusterProfileCardRequestProtocol:O,
	LDClusterOrDeviceToClusterEventSummaryRequestProtocol:P,
	LDDeviceToClusterUserModerationRequestProtocol:Q,
	LDDeviceToClusterPresenceRequestProtocol:R,
	LDDeviceToClusterMessageResponseProtocol:T,
	LDDeviceToClusterInboxResponseProtocol:U,
	LDClusterOrDeviceToClusterBlobResponseProtocol:V,
	LDDeviceToClusterContactResponseProtocol:W,
	LDDeviceToClusterProfileResponseProtocol:X,
	LDDeviceToClusterAddressBookResponseProtocol:Y,
	LDDeviceToClusterOmletItemStoreResponseProtocol:Z,
	LDDeviceToClusterDeviceResponseProtocol:a_,
	LDDeviceToClusterCloudSyncResponseProtocol:aa,
	LDDeviceToClusterGameChallengeResponseProtocol:ab,
	LDDeviceToClusterSubscriptionResponseProtocol:ac,
	LDDeviceToClusterHighScoreResponseProtocol:ad,
	LDDeviceToClusterNearbyItemResponseProtocol:ae,
	LDDeviceToClusterMiscellaneousResponseProtocol:af,
	LDDeviceToClusterDirectMessagingResponseProtocol:ag,
	LDDeviceToClusterWallPostResponseProtocol:ah,
	LDDeviceToClusterIdentityTokenResponseProtocol:ai,
	LDDeviceToClusterPublicChatResponseProtocol:aj,
	LDDeviceToClusterProfileCardResponseProtocol:ak,
	LDClusterOrDeviceToClusterEventSummaryResponseProtocol:al,
	LDDeviceToClusterUserModerationResponseProtocol:am,
	LDDeviceToClusterPresenceResponseProtocol:an,
	LDURI:ft,
	LDAppRestletDetails:au,
	LDFeed:aw,
	LDEnum:fu,
	LDAccessScope:fv,
	LDRegisterWithTokenRequest:aB,
	LDConfirmTokenRequest:aC,
	LDRegisterWithOAuthRequest:aD,
	LDGetLinkedIdentitiesRequest:aE,
	LDCheckIdentityLinkedRequest:aF,
	LDUnlinkIdentityRequest:aG,
	LDLinkOmletIdentityRequest:aH,
	LDGetAppSigninLinkRequest:aI,
	LDConfirmAuthCodeRequest:aJ,
	LDGetSigninLinkRequest:aK,
	LDConfirmSigninCodeRequest:aL,
	LDGetSSOTokenRequest:aM,
	LDCheckSSOTokenRequest:aN,
	LDConfirmSSOTokenRequest:aO,
	LDDeviceRegistrationStateChangedPush:aP,
	LDUnblockIdentityRequest:aQ,
	LDGetEmailLoginLinkRequest:aR,
	LDGetAccountDetailsByAccountRequest:aS,
	LDGetAccountDetailsByIdentityRequest:aT,
	LDGetIdentityRecordsRequest:aU,
	LDListFlaggedUsersRequest:aV,
	LDChangeUserNameRequest:aW,
	LDChangeUserProfilePictureRequest:aX,
	LDDisableUserGameChallengeRequest:aY,
	LDLogUserOutRequest:aZ,
	LDGetDeviceRecordsRequest:b_,
	LDDeleteScheduledJobRequest:ba,
	LDCreateCountryWideFeedRequest:bb,
	LDAdminBanUserRequest:bc,
	LDAdminUnbanUserRequest:bd,
	LDAdminBanUserFromAppRequest:be,
	LDAdminUnbanUserFromAppRequest:bf,
	LDAdminBlockUserRequest:bg,
	LDGetPermissionsRequest:bh,
	LDAccountDetailsResponse:bj,
	LDGetLinkedIdentitiesResponse:bk,
	LDGetAppSigninLinkResponse:bl,
	LDGetSigninLinkResponse:bm,
	LDCheckSSOTokenResponse:bn,
	LDGetIdentityRecordsResponse:bo,
	LDListFlaggedUsersResponse:bp,
	LDGetDeviceRecordsResponse:bq,
	LDGetPermissionsResponse:br,
	LDCreateFeedRequest:bs,
	LDGetMessagesSinceRequest:bt,
	LDGetMessagesBeforeRequest:bu,
	LDGetMessagesByTypeRequest:bv,
	LDGetMessageByIdRequest:bw,
	LDAddMessageRequest:bx,
	LDUpdateMessageRequest:by,
	LDOverwriteMessageRequest:bz,
	LDDeleteMessageRequest:bA,
	LDSubscribeFeedRequest:bB,
	LDUnsubscribeFeedRequest:bC,
	LDSubscribeFeedRealtimeRequest:bD,
	LDUnsubscribeFeedRealtimeRequest:bE,
	LDAddMemberRequest:bF,
	LDRemoveMemberRequest:bG,
	LDSetFeedNameRequest:bH,
	LDSetFeedThumbnailRequest:bI,
	LDSetFeedVideoRequest:bJ,
	LDSendRealtimeRequest:bK,
	LDClusterPartitionableRpcRequest:fE,
	LDSendRealtimeToAccountsRequest:bL,
	LDAddPendingInvitationRequest:bM,
	LDRemovePendingInvitationRequest:bN,
	LDGetJoinFeedLinkRequest:bO,
	LDJoinFeedRequest:bP,
	LDJoinBroadcastRequest:bQ,
	LDSetDefaultAccessRequest:bR,
	LDGetPublicFeedDetailsRequest:bS,
	LDApplyDocumentTransformRequest:bT,
	LDMessageDeliveryPush:bU,
	LDRealtimeMessageDeliveryPush:bV,
	LDMessageTerminatedPush:bW,
	LDGetFeedStateRequest:bX,
	LDSetFeedAcceptanceRequest:bY,
	LDGetDirtyFeedsRequest:bZ,
	LDSubscribeForAccountInboxRequest:c_,
	LDUnsubscribeForAccountInboxRequest:ca,
	LDRegisterPushNotificationKeyRequest:cb,
	LDInboxDeliveryMessagePush:cc,
	LDInboxDeliveryTerminatedPush:cd,
	LDSetAppleBadgeCountRequest:ce,
	LDGetUploadTicketRequest:cf,
	LDGetMultipartUploadTicketRequest:cg,
	LDVerifyUploadCompletedRequest:ch,
	LDGetDownloadTicketRequest:ci,
	LDVerifyExistsAndPermanenceRequest:cj,
	LDOverwriteContactRequest:ck,
	LDRemoveContactRequest:cl,
	LDBlockContactRequest:cm,
	LDUnblockContactRequest:cn,
	LDGetProfileDetailsRequest:co,
	LDSetProfileNameRequest:cp,
	LDSetProfilePictureRequest:cq,
	LDSetProfileVideoRequest:cr,
	LDGetOmletContactProfileRequest:cs,
	LDAddItemsToProfileRequest:ct,
	LDRemoveItemsFromProfileRequest:cu,
	LDAddFeaturesToProfileRequest:cv,
	LDRemoveFeaturesFromProfileRequest:cw,
	LDGetProfilePublicStateRequest:cx,
	LDGetContactProfileAndPublicStateRequest:cy,
	LDUploadAddressBookEntriesRequest:cz,
	LDGetContactProfileRequest:cA,
	LDGetAddMeLinkRequest:cB,
	LDMutualAddContactByTokenRequest:cC,
	LDCreateItemInfoRequest:cD,
	LDUserUpdateItemInfoRequest:cE,
	LDSystemUpdateItemInfoRequest:cF,
	LDGetItemInfoRequest:cG,
	LDReviewItemRequest:cH,
	LDPublishItemRequest:cI,
	LDUnpublishItemRequest:cJ,
	LDDeleteItemRequest:cK,
	LDListItemsForAccountRequest:cL,
	LDListAllItemsRequest:cM,
	LDListPublishedItemsRequest:cN,
	LDGenerateGrantForItemRequest:cO,
	LDGetItemUsingGrantRequest:cP,
	LDDoesItemHaveGrantRequest:cQ,
	LDDeleteGrantForItemRequest:cR,
	LDGenerateApiKeyRequest:cS,
	LDDeactivateApiKeyRequest:cT,
	LDListApiKeysRequest:cU,
	LDDeleteDeviceRequest:cV,
	LDAddDeviceRequest:cW,
	LDSetDingTimeoutRequest:cX,
	LDGetCloudConfigRequest:cY,
	LDSetCloudConfigRequest:cZ,
	LDRefreshCloudConfigRequest:d_,
	LDDisconnectCloudSyncRequest:da,
	LDOptInForAllGamesChallengesRequest:db,
	LDFindGamersRequest:dc,
	LDUpdateChallengeLocationRequest:dd,
	LDGameChallengeCompleteRequest:de,
	LDExtendChallengeRequest:df,
	LDCheckAccountOptedInRequest:dg,
	LDOptInForGSChallengesRequest:dh,
	LDFindGamersGSRequest:di,
	LDCreateSubscriptionRequest:dj,
	LDGetHighScoreRequest:dk,
	LDReportScoreRequest:dl,
	LDGetTopScoresRequest:dm,
	LDBroadcastItemRequest:dn,
	LDUnbroadcastItemRequest:dp,
	LDSubscribeForNearbyItemsRequest:dq,
	LDUnsubscribeForNearbyItemsRequest:dr,
	LDFetchNearbyItemsRequest:ds,
	LDItemBroadcastStateChangedPush:dt,
	LDSubscriptionTerminatedPush:du,
	LDUrlToStoryRequest:dv,
	LDImageSearchRequest:dw,
	LDFailureReportRequest:dx,
	LDEventReportRequest:dy,
	LDFlagUserRequest:dz,
	LDCreatePlaygroundRequest:dA,
	LDGetFeedbackAccountRequest:dB,
	LDGetExtraVersionsRequest:dC,
	LDGetDirectFeedRequest:dD,
	LDSendDirectMessageRequest:dE,
	LDSetSmsParticipationRequest:dF,
	LDPostBaseRequest:fU,
	LDPostVideoRequest:dG,
	LDPostMessageRequest:dH,
	LDPostScreenShotRequest:dI,
	LDLikePostRequest:dJ,
	LDAddViewRequest:dK,
	LDFollowUserRequest:dL,
	LDGetUserWallRequest:dM,
	LDGetGameWallRequest:dN,
	LDGetFollowingWallRequest:dO,
	LDGetPostRequest:dP,
	LDGetStandardPostTagsRequest:dQ,
	LDGetFollowersRequest:dR,
	LDGetAccountsFollowedRequest:dS,
	LDDeletePostRequest:dT,
	LDGetExternalShareLinkRequest:dU,
	LDCheckFollowingRequest:dV,
	LDGetFollowerCountRequest:dW,
	LDGetFollowingCountRequest:dX,
	LDGetUserWallPostCountRequest:dY,
	LDGetPackagePostsRequest:dZ,
	LDUpdatePostDetailsRequest:e_,
	LDGetPackagesRequest:ea,
	LDGetRecommendedWallRequest:eb,
	LDGetIdentityTokenRequest:ec,
	LDGetPublicChatRequest:ed,
	LDJoinPublicChatRequest:ee,
	LDLeavePublicChatRequest:ef,
	LDWriteToPublicChatRequest:eg,
	LDGetPublicChatMembersRequest:eh,
	LDGetRecentMessagesRequest:ei,
	LDListLiveChatsRequest:ej,
	LDListInterestingChatsRequest:ek,
	LDPublicChatMessageDeliveryPush:el,
	LDPublicChatMessageTerminatedPush:em,
	LDReportSummaryEventsRequest:en,
	LDGatherEventsByAppRequest:eo,
	LDListBlockedUsersRequest:ep,
	LDUnblockUserRequest:eq,
	LDBlockUserRequest:er,
	LDContentIdBase:fX,
	LDReportUserRequest:es,
	LDGetPresencesRequest:et,
	LDSetOnlineStatusRequest:eu,
	LDGetStreamingLinkRequest:ev,
	LDGetMessageResponse:ew,
	LDGetMessagesResponse:ex,
	LDGetMessagesWithContinuationResponse:ey,
	LDGetJoinFeedLinkResponse:ez,
	LDGetPublicFeedDetailsResponse:eA,
	LDDirtyFeedsResponse:eB,
	LDFeedStateResponse:eC,
	LDGetUploadTicketResponse:eD,
	LDGetMultipartUploadTicketResponse:eE,
	LDGetDownloadTicketResponse:eF,
	LDGetContactDetailsResponse:eG,
	LDGetProfileDetailsResponse:eH,
	LDGetOmletContactProfileResponse:eI,
	LDGetProfilePublicStateResponse:eJ,
	LDGetContactProfileAndPublicStateResponse:eK,
	LDGetContactProfileResponse:eL,
	LDGetItemInfoResponse:eM,
	LDListItemsResponse:eN,
	LDGenerateGrantForItemResponse:eO,
	LDGenerateApiKeyResponse:eP,
	LDListApiKeysResponse:eQ,
	LDGetCloudConfigResponse:eR,
	LDFindGamersResponse:eS,
	LDCreateSubscriptionResponse:eT,
	LDScoreResponse:eU,
	LDScoresResponse:eV,
	LDBroadcastItemResponse:eW,
	LDFetchNearbyItemsResponse:eX,
	LDUrlToStoryResponse:eY,
	LDImageSearchResponse:eZ,
	LDCreatePlaygroundResponse:f_,
	LDGetExtraVersionsResponse:fa,
	LDGetDirectFeedResponse:fb,
	LDSendDirectMessageResponse:fc,
	LDWallResponse:fd,
	LDWallsResponse:fe,
	LDGetPostResponse:ff,
	LDAddPostResponse:fg,
	LDGetAccountsFollowedResponse:fh,
	LDGetStandardPostTagsResponse:fi,
	LDGetFollowersResponse:fj,
	LDGetExternalShareLinkResponse:fk,
	LDGetPackagesResponse:fl,
	LDGetIdentityTokenResponse:fm,
	LDGetPublicChatResponse:fn,
	LDGetPublicChatMembersResponse:fo,
	LDGetRecentMessagesResponse:fp,
	LDListChatsResponse:fq,
	LDGatherEventsByAppResponse:fr,
	LDGetPresencesResponse:fs,
	LDString:gp,
	LDIdentity:fw,
	LDAppScopeId:fx,
	LDItemId:fy,
	LDAccountDetails:fz,
	LDFlaggedDetails:fA,
	LDPrettyPermissions:fB,
	LDTypedId:fC,
	LDAcl:fD,
	LDIdentityHash:fF,
	LDMessage:fG,
	LDRealtimeMessage:fH,
	LDPushKey:fI,
	LDBlobMetadata:fJ,
	LDBlobUploadTicket:fK,
	LDContactDetails:fL,
	LDPurchaseData:fM,
	LDFeature:gt,
	LDItemInfoUserMutableContainer:fN,
	LDItemInfoSystemMutableContainer:fO,
	LDCloudConfig:fP,
	LDGameChallengeId:fQ,
	LDGPSLocation:fR,
	LDNearbyItemContainer:fS,
	LDClientEvent:fT,
	LDPostTag:fV,
	LDPostId:fW,
	LDJoinFeedLink:fY,
	LDDirtyFeed:fZ,
	LDBlobDownloadTicket:g_,
	LDProfileDetails:ga,
	LDContactProfile:gb,
	LDProfilePublicState:gc,
	LDItemInfoContainer:gd,
	LDItemInfoListingContainer:ge,
	LDApiKey:gf,
	LDScoreBoardEntry:gg,
	LDImageSearchResult:gh,
	LDWall:gi,
	LDPostContainer:gj,
	LDUser:gk,
	LDPostTagWithLocalization:gl,
	LDPackageInfo:gm,
	LDPublicChatInfo:gn,
	LDPresenceState:go,
	LDFlaggedRecord:gq,
	LDReceiptContainer:gr,
	LDBillingInfoContainer:gs,
	LDItemInfoUserMutable:gJ,
	LDAppInfoUserMutable:gu,
	LDStickerPackInfoUserMutable:gv,
	LDItemInfoSystemMutable:gN,
	LDAppInfoSystemMutable:gw,
	LDStickerPackInfoSystemMutable:gx,
	LDNearbyItemFeedMetadata:gy,
	LDProfileIdentitySetting:gz,
	LDItemInfo:gP,
	LDAppInfo:gA,
	LDStickerPackInfo:gB,
	LDAppInfoListingWrapper:gC,
	LDStickerPackInfoListingWrapper:gD,
	LDPost:gR,
	LDVideoPost:gE,
	LDMessagePost:gF,
	LDScreenShotPost:gG,
	LDMockReceipt:gH,
	LDMockBillingInfo:gI,
	LDAppScreenshot:gK,
	LDAppStore:gL,
	LDSticker:gM,
	LDPrice:gO,
	LDItemInfoImmutableContainer:gQ,
	LDComment:gS,
	LDM3U8Info:gT,
	LDItemInfoImmutable:gW,
	LDAppInfoImmutable:gU,
	LDStickerPackInfoImmutable:gV,
	LDApiCode:gX,
	LDAcceptanceState:gY,
	LDFlow:gZ,
	LDPartner:h_,
	LDStatus:ha,
	LDStoreItemType:hb,
	LDTier:hc,
	LDLocationType:hd,
	LDTaggedItemType:he,
	LDContentType:hf,
	LDReportReason:hg,
	LDIdentityType:hh,
	LDAclType:hi,
	LDPushType:hj,
	LDProvider:hk,
	LDPostTagType:hl,
	LDPostType:hm,
	LDPublishedState:hn
};
Object.freeze(module.exports);
