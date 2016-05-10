var _;
function b(e){
}
_=b.prototype;
_.__type="LDJSONLoggable";
_.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function a(e){
	b.call(this,e);
	if(e&&(e['#']!==null&&e['#']!==undefined))this.SequenceNumber=e['#'];else this.SequenceNumber=null;
	if(e&&(e['@']!==null&&e['@']!==undefined))this.Context=new c(e['@']);
	if(e&&(e['*']!==null&&e['*']!==undefined))this.HelloChallenge=new e(e['*']);
	if(e&&(e['+']!==null&&e['+']!==undefined))this.CompleteChallenge=new f(e['+']);
	if(e&&(e['-']!==null&&e['-']!==undefined))this.Ping=new g(e['-']);
}
a.prototype=new b();
a.prototype.constructor = a;
_=a.prototype;
_.__type="LDRequestContainerBase";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.SequenceNumber!=null)o['#']=this.SequenceNumber;
	if(this.Context!=null)o['@']=this.Context.encode();
	if(this.HelloChallenge!=null)o['*']=this.HelloChallenge.encode();
	if(this.CompleteChallenge!=null)o['+']=this.CompleteChallenge.encode();
	if(this.Ping!=null)o['-']=this.Ping.encode();
	return o;
}
_.SequenceNumber=null;
_.Context=null;
_.HelloChallenge=null;
_.CompleteChallenge=null;
_.Ping=null;
function h(e){
	a.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Signup=new i(e['a']);
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Administrative=new j(e['A']);
}
h.prototype=new a();
h.prototype.constructor = h;
_=h.prototype;
_.__type="LDDeviceToIdpRequestContainer";
_.encode=function(o){
	if(o===undefined)o={};
	a.prototype.encode.call(this,o);
	if(this.Signup!=null)o['a']=this.Signup.encode();
	if(this.Administrative!=null)o['A']=this.Administrative.encode();
	return o;
}
_.Signup=null;
_.Administrative=null;
function l(e){
	b.call(this,e);
	if(e&&(e['#']!==null&&e['#']!==undefined))this.SequenceNumber=e['#'];else this.SequenceNumber=null;
	if(e&&(e['!']!==null&&e['!']!==undefined))this.ErrorCode=e['!'];else this.ErrorCode=null;
	if(e&&(e['!!']!==null&&e['!!']!==undefined))this.ErrorDetail=e['!!'];else this.ErrorDetail=null;
	if(e&&(e['*']!==null&&e['*']!==undefined))this.HelloChallenge=new m(e['*']);
	if(e&&(e['+']!==null&&e['+']!==undefined))this.CompleteChallenge=new n(e['+']);
	if(e&&(e['=']!==null&&e['=']!==undefined))this.Simple=new p(e['=']);
	if(e&&(e['-']!==null&&e['-']!==undefined))this.Ping=new q(e['-']);
}
l.prototype=new b();
l.prototype.constructor = l;
_=l.prototype;
_.__type="LDResponseContainerBase";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.SequenceNumber!=null)o['#']=this.SequenceNumber;
	if(this.ErrorCode!=null)o['!']=this.ErrorCode;
	if(this.ErrorDetail!=null)o['!!']=this.ErrorDetail;
	if(this.HelloChallenge!=null)o['*']=this.HelloChallenge.encode();
	if(this.CompleteChallenge!=null)o['+']=this.CompleteChallenge.encode();
	if(this.Simple!=null)o['=']=this.Simple.encode();
	if(this.Ping!=null)o['-']=this.Ping.encode();
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Signup=new s(e['a']);
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Administrative=new u(e['A']);
}
r.prototype=new l();
r.prototype.constructor = r;
_=r.prototype;
_.__type="LDDeviceToIdpResponseContainer";
_.encode=function(o){
	if(o===undefined)o={};
	l.prototype.encode.call(this,o);
	if(this.Signup!=null)o['a']=this.Signup.encode();
	if(this.Administrative!=null)o['A']=this.Administrative.encode();
	return o;
}
_.Signup=null;
_.Administrative=null;
function v(e){
	a.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new w(e['m']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Inbox=new x(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Blob=new y(e['b']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Contact=new z(e['c']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Profile=new A(e['p']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AddressBook=new B(e['a']);
	if(e&&(e['oas']!==null&&e['oas']!==undefined))this.OmletAppStore=new C(e['oas']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Device=new D(e['d']);
	if(e&&(e['cs']!==null&&e['cs']!==undefined))this.CloudSync=new E(e['cs']);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameChallenge=new F(e['g']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Subscription=new G(e['s']);
	if(e&&(e['h']!==null&&e['h']!==undefined))this.HighScore=new H(e['h']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NearbyItem=new I(e['n']);
	if(e&&(e['M']!==null&&e['M']!==undefined))this.Misc=new J(e['M']);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.Oob=new K(e['o']);
	if(e&&(e['w']!==null&&e['w']!==undefined))this.WallPost=new L(e['w']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.IdentityToken=new M(e['t']);
	if(e&&(e['pc']!==null&&e['pc']!==undefined))this.PublicChat=new N(e['pc']);
	if(e&&(e['pcv']!==null&&e['pcv']!==undefined))this.ProfileCardViewed=new O(e['pcv']);
	if(e&&(e['es']!==null&&e['es']!==undefined))this.EventSummary=new P(e['es']);
	if(e&&(e['um']!==null&&e['um']!==undefined))this.UserModeration=new Q(e['um']);
	if(e&&(e['ps']!==null&&e['ps']!==undefined))this.Presence=new R(e['ps']);
}
v.prototype=new a();
v.prototype.constructor = v;
_=v.prototype;
_.__type="LDDeviceToClusterRequestContainer";
_.encode=function(o){
	if(o===undefined)o={};
	a.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	if(this.Inbox!=null)o['i']=this.Inbox.encode();
	if(this.Blob!=null)o['b']=this.Blob.encode();
	if(this.Contact!=null)o['c']=this.Contact.encode();
	if(this.Profile!=null)o['p']=this.Profile.encode();
	if(this.AddressBook!=null)o['a']=this.AddressBook.encode();
	if(this.OmletAppStore!=null)o['oas']=this.OmletAppStore.encode();
	if(this.Device!=null)o['d']=this.Device.encode();
	if(this.CloudSync!=null)o['cs']=this.CloudSync.encode();
	if(this.GameChallenge!=null)o['g']=this.GameChallenge.encode();
	if(this.Subscription!=null)o['s']=this.Subscription.encode();
	if(this.HighScore!=null)o['h']=this.HighScore.encode();
	if(this.NearbyItem!=null)o['n']=this.NearbyItem.encode();
	if(this.Misc!=null)o['M']=this.Misc.encode();
	if(this.Oob!=null)o['o']=this.Oob.encode();
	if(this.WallPost!=null)o['w']=this.WallPost.encode();
	if(this.IdentityToken!=null)o['t']=this.IdentityToken.encode();
	if(this.PublicChat!=null)o['pc']=this.PublicChat.encode();
	if(this.ProfileCardViewed!=null)o['pcv']=this.ProfileCardViewed.encode();
	if(this.EventSummary!=null)o['es']=this.EventSummary.encode();
	if(this.UserModeration!=null)o['um']=this.UserModeration.encode();
	if(this.Presence!=null)o['ps']=this.Presence.encode();
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
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new T(e['m']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Inbox=new U(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Blob=new V(e['b']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Contact=new W(e['c']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Profile=new X(e['p']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AddressBook=new Y(e['a']);
	if(e&&(e['oas']!==null&&e['oas']!==undefined))this.OmletAppStore=new Z(e['oas']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Device=new a_(e['d']);
	if(e&&(e['cs']!==null&&e['cs']!==undefined))this.CloudSync=new aa(e['cs']);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameChallenge=new ab(e['g']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Subscription=new ac(e['s']);
	if(e&&(e['h']!==null&&e['h']!==undefined))this.HighScore=new ad(e['h']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NearbyItem=new ae(e['n']);
	if(e&&(e['M']!==null&&e['M']!==undefined))this.Misc=new af(e['M']);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.Oob=new ag(e['o']);
	if(e&&(e['w']!==null&&e['w']!==undefined))this.WallPost=new ah(e['w']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.IdentityToken=new ai(e['t']);
	if(e&&(e['pc']!==null&&e['pc']!==undefined))this.PublicChat=new aj(e['pc']);
	if(e&&(e['pcv']!==null&&e['pcv']!==undefined))this.ProfileCardViewed=new ak(e['pcv']);
	if(e&&(e['es']!==null&&e['es']!==undefined))this.EventSummary=new al(e['es']);
	if(e&&(e['um']!==null&&e['um']!==undefined))this.UserModeration=new am(e['um']);
	if(e&&(e['ps']!==null&&e['ps']!==undefined))this.Presence=new an(e['ps']);
}
S.prototype=new l();
S.prototype.constructor = S;
_=S.prototype;
_.__type="LDDeviceToClusterResponseContainer";
_.encode=function(o){
	if(o===undefined)o={};
	l.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	if(this.Inbox!=null)o['i']=this.Inbox.encode();
	if(this.Blob!=null)o['b']=this.Blob.encode();
	if(this.Contact!=null)o['c']=this.Contact.encode();
	if(this.Profile!=null)o['p']=this.Profile.encode();
	if(this.AddressBook!=null)o['a']=this.AddressBook.encode();
	if(this.OmletAppStore!=null)o['oas']=this.OmletAppStore.encode();
	if(this.Device!=null)o['d']=this.Device.encode();
	if(this.CloudSync!=null)o['cs']=this.CloudSync.encode();
	if(this.GameChallenge!=null)o['g']=this.GameChallenge.encode();
	if(this.Subscription!=null)o['s']=this.Subscription.encode();
	if(this.HighScore!=null)o['h']=this.HighScore.encode();
	if(this.NearbyItem!=null)o['n']=this.NearbyItem.encode();
	if(this.Misc!=null)o['M']=this.Misc.encode();
	if(this.Oob!=null)o['o']=this.Oob.encode();
	if(this.WallPost!=null)o['w']=this.WallPost.encode();
	if(this.IdentityToken!=null)o['t']=this.IdentityToken.encode();
	if(this.PublicChat!=null)o['pc']=this.PublicChat.encode();
	if(this.ProfileCardViewed!=null)o['pcv']=this.ProfileCardViewed.encode();
	if(this.EventSummary!=null)o['es']=this.EventSummary.encode();
	if(this.UserModeration!=null)o['um']=this.UserModeration.encode();
	if(this.Presence!=null)o['ps']=this.Presence.encode();
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
	if(e&&(e['ClusterEndpoints']!==null&&e['ClusterEndpoints']!==undefined)){
		this.ClusterEndpoints = {};
		var d = e['ClusterEndpoints'];
		for(var k in d) {
			var d2 = d[k];
			this.ClusterEndpoints[k]=[];
			for(var k2 = 0; k2 < d2.length; ++k2) this.ClusterEndpoints[k].push(d2[k2]);
		}
	}
	if(e&&(e['ClusterKeys']!==null&&e['ClusterKeys']!==undefined)){
		this.ClusterKeys = {};
		var d = e['ClusterKeys'];
		for(var k in d) this.ClusterKeys[k] = new Buffer(d[k], 'base64');
	}
	if(e&&(e['DefaultCluster']!==null&&e['DefaultCluster']!==undefined))this.DefaultCluster=e['DefaultCluster'];else this.DefaultCluster=null;
	if(e&&(e['IdpEndpoints']!==null&&e['IdpEndpoints']!==undefined)){
		this.IdpEndpoints=[];
		var d = e['IdpEndpoints'];
		for(var k=0;k<d.length;++k)this.IdpEndpoints.push(d[k]);
	}
	if(e&&(e['IdpKey']!==null&&e['IdpKey']!==undefined))this.IdpKey=new Buffer(e['IdpKey'],'base64');
	if(e&&(e['ReadOnlyEndpoints']!==null&&e['ReadOnlyEndpoints']!==undefined)){
		this.ReadOnlyEndpoints=[];
		var d = e['ReadOnlyEndpoints'];
		for(var k=0;k<d.length;++k)this.ReadOnlyEndpoints.push(d[k]);
	}
	if(e&&(e['ReadOnlyKey']!==null&&e['ReadOnlyKey']!==undefined))this.ReadOnlyKey=new Buffer(e['ReadOnlyKey'],'base64');
}
_=ao.prototype;
_.__type="LDPublicKeys";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ClusterEndpoints!=null) {
		o['ClusterEndpoints']={};
		var d=this.ClusterEndpoints;
		for(var k in d) {
			var d2=d[k];
			o['ClusterEndpoints'][k]=[];
			for(var k2 = 0; k2 < d2.length; ++k2) o['ClusterEndpoints'][k].push(d2[k2]);
		}
	}
	if(this.ClusterKeys!=null){
		o['ClusterKeys']={};
		var d=this.ClusterKeys;
		for(var k in d)o['ClusterKeys'][k]=d[k].toString('base64');
	}
	if(this.DefaultCluster!=null)o['DefaultCluster']=this.DefaultCluster;
	if(this.IdpEndpoints!=null) {
		o['IdpEndpoints']=[];
		var d=this.IdpEndpoints;
		for(var k = 0; k < d.length; ++k) o['IdpEndpoints'].push(d[k]);
	}
	if(this.IdpKey!=null)o['IdpKey']=this.IdpKey.toString('base64');
	if(this.ReadOnlyEndpoints!=null) {
		o['ReadOnlyEndpoints']=[];
		var d=this.ReadOnlyEndpoints;
		for(var k = 0; k < d.length; ++k) o['ReadOnlyEndpoints'].push(d[k]);
	}
	if(this.ReadOnlyKey!=null)o['ReadOnlyKey']=this.ReadOnlyKey.toString('base64');
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
}
ap.prototype=new b();
ap.prototype.constructor = ap;
_=ap.prototype;
_.__type="LDSynchronizedMessageBody";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function aq(e){
	ap.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Acceptance=e['a'];else this.Acceptance=null;
}
aq.prototype=new ap();
aq.prototype.constructor = aq;
_=aq.prototype;
_.__type="LDAcceptanceChange";
_.encode=function(o){
	if(o===undefined)o={};
	ap.prototype.encode.call(this,o);
	if(this.Acceptance!=null)o['a']=this.Acceptance;
	return o;
}
_.Acceptance=null;
function ar(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Expiration=e['e'];else this.Expiration=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Latitude=e['a'];else this.Latitude=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];else this.Longitude=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Radius=e['r'];else this.Radius=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Country=e['c'];else this.Country=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BroadcasterAccount=e['b'];else this.BroadcasterAccount=null;
}
ar.prototype=new b();
ar.prototype.constructor = ar;
_=ar.prototype;
_.__type="LDBroadcastSettings";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Pin!=null)o['p']=this.Pin;
	if(this.Expiration!=null)o['e']=this.Expiration;
	if(this.Latitude!=null)o['a']=this.Latitude;
	if(this.Longitude!=null)o['g']=this.Longitude;
	if(this.Radius!=null)o['r']=this.Radius;
	if(this.Country!=null)o['c']=this.Country;
	if(this.BroadcasterAccount!=null)o['b']=this.BroadcasterAccount;
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
	if(e&&(e['aa']!==null&&e['aa']!==undefined))this.Account=e['aa'];else this.Account=null;
	if(e&&(e['an']!==null&&e['an']!==undefined))this.ProfileName=e['an'];else this.ProfileName=null;
	if(e&&(e['ap']!==null&&e['ap']!==undefined))this.ProfileThumbnailLink=e['ap'];else this.ProfileThumbnailLink=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.IntentLink=e['l'];else this.IntentLink=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['U']!==null&&e['U']!==undefined))this.AppId=new Buffer(e['U'],'base64');
	if(e&&(e['ad']!==null&&e['ad']!==undefined))this.AppDetails=new au(e['ad']);
	if(e&&(e['mo']!==null&&e['mo']!==undefined))this.MobileOS=e['mo'];else this.MobileOS=null;
}
_=at.prototype;
_.__type="LDAddMeInfo";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Account!=null)o['aa']=this.Account;
	if(this.ProfileName!=null)o['an']=this.ProfileName;
	if(this.ProfileThumbnailLink!=null)o['ap']=this.ProfileThumbnailLink;
	if(this.IntentLink!=null)o['l']=this.IntentLink;
	if(this.Pin!=null)o['p']=this.Pin;
	if(this.AppId!=null)o['U']=this.AppId.toString('base64');
	if(this.AppDetails!=null)o['ad']=this.AppDetails.encode();
	if(this.MobileOS!=null)o['mo']=this.MobileOS;
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
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.FeedName=e['n'];else this.FeedName=null;
	if(e&&(e['td']!==null&&e['td']!==undefined))this.FeedThumbnailLink=e['td'];else this.FeedThumbnailLink=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.IntentLink=e['l'];else this.IntentLink=null;
	if(e&&(e['aa']!==null&&e['aa']!==undefined))this.AdderAccount=e['aa'];else this.AdderAccount=null;
	if(e&&(e['an']!==null&&e['an']!==undefined))this.AdderName=e['an'];else this.AdderName=null;
	if(e&&(e['ap']!==null&&e['ap']!==undefined))this.AdderThumbnailLink=e['ap'];else this.AdderThumbnailLink=null;
	if(e&&(e['ad']!==null&&e['ad']!==undefined))this.AppDetails=new au(e['ad']);
	if(e&&(e['mo']!==null&&e['mo']!==undefined))this.MobileOS=e['mo'];else this.MobileOS=null;
}
_=av.prototype;
_.__type="LDJoinFeedInfo";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Pin!=null)o['p']=this.Pin;
	if(this.FeedName!=null)o['n']=this.FeedName;
	if(this.FeedThumbnailLink!=null)o['td']=this.FeedThumbnailLink;
	if(this.IntentLink!=null)o['l']=this.IntentLink;
	if(this.AdderAccount!=null)o['aa']=this.AdderAccount;
	if(this.AdderName!=null)o['an']=this.AdderName;
	if(this.AdderThumbnailLink!=null)o['ap']=this.AdderThumbnailLink;
	if(this.AppDetails!=null)o['ad']=this.AppDetails.encode();
	if(this.MobileOS!=null)o['mo']=this.MobileOS;
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
	if(e&&(e['t']!==null&&e['t']!==undefined))this.EnabledTime=e['t'];else this.EnabledTime=null;
}
ax.prototype=new b();
ax.prototype.constructor = ax;
_=ax.prototype;
_.__type="LDFeatureSetting";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.EnabledTime!=null)o['t']=this.EnabledTime;
	return o;
}
_.EnabledTime=null;
function ay(e){
	b.call(this,e);
	if(e&&(e['q']!==null&&e['q']!==undefined))this.Request=new h(e['q']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Response=new r(e['r']);
}
ay.prototype=new b();
ay.prototype.constructor = ay;
_=ay.prototype;
_.__type="LDDeviceToIdpRpcWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Request!=null)o['q']=this.Request.encode();
	if(this.Response!=null)o['r']=this.Response.encode();
	return o;
}
_.Request=null;
_.Response=null;
function az(e){
	b.call(this,e);
	if(e&&(e['q']!==null&&e['q']!==undefined))this.Request=new v(e['q']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Response=new S(e['r']);
}
az.prototype=new b();
az.prototype.constructor = az;
_=az.prototype;
_.__type="LDDeviceToClusterRpcWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Request!=null)o['q']=this.Request.encode();
	if(this.Response!=null)o['r']=this.Response.encode();
	return o;
}
_.Request=null;
_.Response=null;
function c(e){
	b.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.DeviceId=new Buffer(e['b'],'base64');
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RootRequestId=new Buffer(e['r'],'base64');
	if(e&&(e['i']!==null&&e['i']!==undefined))this.RequestId=new Buffer(e['i'],'base64');
	if(e&&(e['a']!==null&&e['a']!==undefined))this.RequestingAccount=e['a'];else this.RequestingAccount=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.SourceCluster=e['c'];else this.SourceCluster=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ForwardedFromNode=e['f'];else this.ForwardedFromNode=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.WriteSecure=e['s'];else this.WriteSecure=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.RootIpAddress=e['l'];else this.RootIpAddress=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.AppId=new Buffer(e['A'],'base64');
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
	if(e&&(e['P']!==null&&e['P']!==undefined))this.PackageId=e['P'];else this.PackageId=null;
}
c.prototype=new b();
c.prototype.constructor = c;
_=c.prototype;
_.__type="LDRpcContext";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.DeviceId!=null)o['b']=this.DeviceId.toString('base64');
	if(this.RootRequestId!=null)o['r']=this.RootRequestId.toString('base64');
	if(this.RequestId!=null)o['i']=this.RequestId.toString('base64');
	if(this.RequestingAccount!=null)o['a']=this.RequestingAccount;
	if(this.SourceCluster!=null)o['c']=this.SourceCluster;
	if(this.ForwardedFromNode!=null)o['f']=this.ForwardedFromNode;
	if(this.WriteSecure!=null)o['s']=this.WriteSecure;
	if(this.RootIpAddress!=null)o['l']=this.RootIpAddress;
	if(this.AppId!=null)o['A']=this.AppId.toString('base64');
	if(this.Scopes!=null) {
		o['S']=[];
		var d=this.Scopes;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k]);
	}
	if(this.PackageId!=null)o['P']=this.PackageId;
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
	if(e&&(e['e']!==null&&e['e']!==undefined))this.EphmeralKey=new Buffer(e['e'],'base64');
	if(e&&(e['k']!==null&&e['k']!==undefined))this.SourceKey=new Buffer(e['k'],'base64');
	if(e&&(e['c']!==null&&e['c']!==undefined))this.DestinationChallenge=new Buffer(e['c'],'base64');
	if(e&&(e['a']!==null&&e['a']!==undefined))this.ApiKey=new Buffer(e['a'],'base64');
}
e.prototype=new b();
e.prototype.constructor = e;
_=e.prototype;
_.__type="LDHelloChallengeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.EphmeralKey!=null)o['e']=this.EphmeralKey.toString('base64');
	if(this.SourceKey!=null)o['k']=this.SourceKey.toString('base64');
	if(this.DestinationChallenge!=null)o['c']=this.DestinationChallenge.toString('base64');
	if(this.ApiKey!=null)o['a']=this.ApiKey.toString('base64');
	return o;
}
_.EphmeralKey=null;
_.SourceKey=null;
_.DestinationChallenge=null;
_.ApiKey=null;
function f(e){
	b.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.SourceResponse=new Buffer(e['r'],'base64');
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Manufacturer=e['m'];else this.Manufacturer=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Model=e['d'];else this.Model=null;
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OsVersion=e['o'];else this.OsVersion=null;
	if(e&&(e['v']!==null&&e['v']!==undefined))this.ClientVersion=e['v'];else this.ClientVersion=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Locale=e['l'];else this.Locale=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.AppChallengeResponse=new Buffer(e['c'],'base64');
	if(e&&(e['s']!==null&&e['s']!==undefined))this.System=e['s'];else this.System=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.OmlibVersion=e['y'];else this.OmlibVersion=null;
	if(e&&(e['z']!==null&&e['z']!==undefined))this.PackageVersion=e['z'];else this.PackageVersion=null;
	if(e&&(e['pr']!==null&&e['pr']!==undefined))this.PushReceivedSinceLastConnection=e['pr'];else this.PushReceivedSinceLastConnection=null;
}
f.prototype=new b();
f.prototype.constructor = f;
_=f.prototype;
_.__type="LDCompleteChallengeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.SourceResponse!=null)o['r']=this.SourceResponse.toString('base64');
	if(this.Type!=null)o['t']=this.Type;
	if(this.Manufacturer!=null)o['m']=this.Manufacturer;
	if(this.Model!=null)o['d']=this.Model;
	if(this.OsVersion!=null)o['o']=this.OsVersion;
	if(this.ClientVersion!=null)o['v']=this.ClientVersion;
	if(this.Locale!=null)o['l']=this.Locale;
	if(this.AppChallengeResponse!=null)o['c']=this.AppChallengeResponse.toString('base64');
	if(this.System!=null)o['s']=this.System;
	if(this.PackageId!=null)o['p']=this.PackageId;
	if(this.OmlibVersion!=null)o['y']=this.OmlibVersion;
	if(this.PackageVersion!=null)o['z']=this.PackageVersion;
	if(this.PushReceivedSinceLastConnection!=null)o['pr']=this.PushReceivedSinceLastConnection;
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
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NextPingDelayMs=e['n'];else this.NextPingDelayMs=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LastRtt=e['l'];else this.LastRtt=null;
}
g.prototype=new b();
g.prototype.constructor = g;
_=g.prototype;
_.__type="LDPingRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.NextPingDelayMs!=null)o['n']=this.NextPingDelayMs;
	if(this.LastRtt!=null)o['l']=this.LastRtt;
	return o;
}
_.NextPingDelayMs=null;
_.LastRtt=null;
function aA(e){
	b.call(this,e);
}
aA.prototype=new b();
aA.prototype.constructor = aA;
_=aA.prototype;
_.__type="LDRequestProtocolBase";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function i(e){
	aA.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RegisterWithTokenRequest=new aB(e['r']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ConfirmTokenRequest=new aC(e['c']);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.RegisterWithOAuthRequest=new aD(e['o']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.GetLinkedIdentitiesRequest=new aE(e['i']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.CheckLinkedIdentityRequest=new aF(e['l']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UnlinkIdentityRequest=new aG(e['u']);
	if(e&&(e['O']!==null&&e['O']!==undefined))this.LinkOmletIdentityRequest=new aH(e['O']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.GetAppSigninLinkRequest=new aI(e['s']);
	if(e&&(e['C']!==null&&e['C']!==undefined))this.ConfirmAuthCodeRequest=new aJ(e['C']);
	if(e&&(e['S']!==null&&e['S']!==undefined))this.GetSigninLinkRequest=new aK(e['S']);
	if(e&&(e['cc']!==null&&e['cc']!==undefined))this.ConfirmSigninCodeRequest=new aL(e['cc']);
	if(e&&(e['so']!==null&&e['so']!==undefined))this.GetSSOTokenRequest=new aM(e['so']);
	if(e&&(e['cs']!==null&&e['cs']!==undefined))this.CheckSSOTokenRequest=new aN(e['cs']);
	if(e&&(e['ao']!==null&&e['ao']!==undefined))this.ConfirmSSOTokenRequest=new aO(e['ao']);
	if(e&&(e['dp']!==null&&e['dp']!==undefined))this.DeviceRegistrationStateChangedPush=new aP(e['dp']);
}
i.prototype=new aA();
i.prototype.constructor = i;
_=i.prototype;
_.__type="LDDeviceToIdpSignupRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.RegisterWithTokenRequest!=null)o['r']=this.RegisterWithTokenRequest.encode();
	if(this.ConfirmTokenRequest!=null)o['c']=this.ConfirmTokenRequest.encode();
	if(this.RegisterWithOAuthRequest!=null)o['o']=this.RegisterWithOAuthRequest.encode();
	if(this.GetLinkedIdentitiesRequest!=null)o['i']=this.GetLinkedIdentitiesRequest.encode();
	if(this.CheckLinkedIdentityRequest!=null)o['l']=this.CheckLinkedIdentityRequest.encode();
	if(this.UnlinkIdentityRequest!=null)o['u']=this.UnlinkIdentityRequest.encode();
	if(this.LinkOmletIdentityRequest!=null)o['O']=this.LinkOmletIdentityRequest.encode();
	if(this.GetAppSigninLinkRequest!=null)o['s']=this.GetAppSigninLinkRequest.encode();
	if(this.ConfirmAuthCodeRequest!=null)o['C']=this.ConfirmAuthCodeRequest.encode();
	if(this.GetSigninLinkRequest!=null)o['S']=this.GetSigninLinkRequest.encode();
	if(this.ConfirmSigninCodeRequest!=null)o['cc']=this.ConfirmSigninCodeRequest.encode();
	if(this.GetSSOTokenRequest!=null)o['so']=this.GetSSOTokenRequest.encode();
	if(this.CheckSSOTokenRequest!=null)o['cs']=this.CheckSSOTokenRequest.encode();
	if(this.ConfirmSSOTokenRequest!=null)o['ao']=this.ConfirmSSOTokenRequest.encode();
	if(this.DeviceRegistrationStateChangedPush!=null)o['dp']=this.DeviceRegistrationStateChangedPush.encode();
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
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UnblockIdentity=new aQ(e['u']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.GetEmailLoginLink=new aR(e['e']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.GetDetailsByAccount=new aS(e['a']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.GetDetailsByIdentity=new aT(e['i']);
	if(e&&(e['I']!==null&&e['I']!==undefined))this.GetIdentityRecordsRequest=new aU(e['I']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ListFlaggedUsers=new aV(e['f']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.ChangeUserName=new aW(e['n']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ChangeUserPicture=new aX(e['p']);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.DisableGameChallenge=new aY(e['g']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LogUserOut=new aZ(e['l']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.GetDeviceRecords=new b_(e['d']);
	if(e&&(e['ds']!==null&&e['ds']!==undefined))this.DeleteScheduledJobRequest=new ba(e['ds']);
	if(e&&(e['cf']!==null&&e['cf']!==undefined))this.CreateCountryWideFeedRequest=new bb(e['cf']);
	if(e&&(e['bu']!==null&&e['bu']!==undefined))this.BanUserRequest=new bc(e['bu']);
	if(e&&(e['uu']!==null&&e['uu']!==undefined))this.UnbanUserRequest=new bd(e['uu']);
	if(e&&(e['bua']!==null&&e['bua']!==undefined))this.BanUserFromAppRequest=new be(e['bua']);
	if(e&&(e['uua']!==null&&e['uua']!==undefined))this.UnbanUserFromAppRequest=new bf(e['uua']);
	if(e&&(e['blu']!==null&&e['blu']!==undefined))this.BlockUserRequest=new bg(e['blu']);
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GetPermissionsRequest=new bh(e['gp']);
}
j.prototype=new aA();
j.prototype.constructor = j;
_=j.prototype;
_.__type="LDDeviceToIdpAdministrativeRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.UnblockIdentity!=null)o['u']=this.UnblockIdentity.encode();
	if(this.GetEmailLoginLink!=null)o['e']=this.GetEmailLoginLink.encode();
	if(this.GetDetailsByAccount!=null)o['a']=this.GetDetailsByAccount.encode();
	if(this.GetDetailsByIdentity!=null)o['i']=this.GetDetailsByIdentity.encode();
	if(this.GetIdentityRecordsRequest!=null)o['I']=this.GetIdentityRecordsRequest.encode();
	if(this.ListFlaggedUsers!=null)o['f']=this.ListFlaggedUsers.encode();
	if(this.ChangeUserName!=null)o['n']=this.ChangeUserName.encode();
	if(this.ChangeUserPicture!=null)o['p']=this.ChangeUserPicture.encode();
	if(this.DisableGameChallenge!=null)o['g']=this.DisableGameChallenge.encode();
	if(this.LogUserOut!=null)o['l']=this.LogUserOut.encode();
	if(this.GetDeviceRecords!=null)o['d']=this.GetDeviceRecords.encode();
	if(this.DeleteScheduledJobRequest!=null)o['ds']=this.DeleteScheduledJobRequest.encode();
	if(this.CreateCountryWideFeedRequest!=null)o['cf']=this.CreateCountryWideFeedRequest.encode();
	if(this.BanUserRequest!=null)o['bu']=this.BanUserRequest.encode();
	if(this.UnbanUserRequest!=null)o['uu']=this.UnbanUserRequest.encode();
	if(this.BanUserFromAppRequest!=null)o['bua']=this.BanUserFromAppRequest.encode();
	if(this.UnbanUserFromAppRequest!=null)o['uua']=this.UnbanUserFromAppRequest.encode();
	if(this.BlockUserRequest!=null)o['blu']=this.BlockUserRequest.encode();
	if(this.GetPermissionsRequest!=null)o['gp']=this.GetPermissionsRequest.encode();
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
	if(e&&(e['c']!==null&&e['c']!==undefined))this.SourceChallenge=new Buffer(e['c'],'base64');
	if(e&&(e['r']!==null&&e['r']!==undefined))this.DestinationResponse=new Buffer(e['r'],'base64');
}
m.prototype=new b();
m.prototype.constructor = m;
_=m.prototype;
_.__type="LDHelloChallengeResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.SourceChallenge!=null)o['c']=this.SourceChallenge.toString('base64');
	if(this.DestinationResponse!=null)o['r']=this.DestinationResponse.toString('base64');
	return o;
}
_.SourceChallenge=null;
_.DestinationResponse=null;
function n(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LocationIndicator=e['l'];else this.LocationIndicator=null;
}
n.prototype=new b();
n.prototype.constructor = n;
_=n.prototype;
_.__type="LDCompleteChallengeResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.LocationIndicator!=null)o['l']=this.LocationIndicator;
	return o;
}
_.LocationIndicator=null;
function p(e){
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Value=e['v'];
}
_=p.prototype;
_.__type="LDSimpleResponse";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Value!=null)o['v']=this.Value;
	return o;
}
_.Value=null;
function q(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ObservedIp=e['i'];else this.ObservedIp=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.UtcMillis=e['t'];else this.UtcMillis=null;
}
q.prototype=new b();
q.prototype.constructor = q;
_=q.prototype;
_.__type="LDPingResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ObservedIp!=null)o['i']=this.ObservedIp;
	if(this.UtcMillis!=null)o['t']=this.UtcMillis;
	return o;
}
_.ObservedIp=null;
_.UtcMillis=null;
function bi(e){
	b.call(this,e);
}
bi.prototype=new b();
bi.prototype.constructor = bi;
_=bi.prototype;
_.__type="LDResponseProtocolBase";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function s(e){
	bi.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AccountDetailsResponse=new bj(e['a']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.GetLinkedIdentitiesResponse=new bk(e['i']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.GetAppSigninLinkResponse=new bl(e['s']);
	if(e&&(e['S']!==null&&e['S']!==undefined))this.GetSigninLinkResponse=new bm(e['S']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.CheckSSOTokenResponse=new bn(e['c']);
}
s.prototype=new bi();
s.prototype.constructor = s;
_=s.prototype;
_.__type="LDDeviceToIdpSignupResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.AccountDetailsResponse!=null)o['a']=this.AccountDetailsResponse.encode();
	if(this.GetLinkedIdentitiesResponse!=null)o['i']=this.GetLinkedIdentitiesResponse.encode();
	if(this.GetAppSigninLinkResponse!=null)o['s']=this.GetAppSigninLinkResponse.encode();
	if(this.GetSigninLinkResponse!=null)o['S']=this.GetSigninLinkResponse.encode();
	if(this.CheckSSOTokenResponse!=null)o['c']=this.CheckSSOTokenResponse.encode();
	return o;
}
_.AccountDetailsResponse=null;
_.GetLinkedIdentitiesResponse=null;
_.GetAppSigninLinkResponse=null;
_.GetSigninLinkResponse=null;
_.CheckSSOTokenResponse=null;
function u(e){
	bi.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AccountDetailsResponse=new bj(e['a']);
	if(e&&(e['I']!==null&&e['I']!==undefined))this.GetIdentityRecordsResponse=new bo(e['I']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ListFlaggedUsers=new bp(e['f']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.GetDeviceRecords=new bq(e['d']);
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GetPermissionsResponse=new br(e['gp']);
}
u.prototype=new bi();
u.prototype.constructor = u;
_=u.prototype;
_.__type="LDDeviceToIdpAdministrativeResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.AccountDetailsResponse!=null)o['a']=this.AccountDetailsResponse.encode();
	if(this.GetIdentityRecordsResponse!=null)o['I']=this.GetIdentityRecordsResponse.encode();
	if(this.ListFlaggedUsers!=null)o['f']=this.ListFlaggedUsers.encode();
	if(this.GetDeviceRecords!=null)o['d']=this.GetDeviceRecords.encode();
	if(this.GetPermissionsResponse!=null)o['gp']=this.GetPermissionsResponse.encode();
	return o;
}
_.AccountDetailsResponse=null;
_.GetIdentityRecordsResponse=null;
_.ListFlaggedUsers=null;
_.GetDeviceRecords=null;
_.GetPermissionsResponse=null;
function w(e){
	aA.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.CreateFeed=new bs(e['c']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.GetMessagesSince=new bt(e['s']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.GetMessagesBefore=new bu(e['b']);
	if(e&&(e['T']!==null&&e['T']!==undefined))this.GetMessagesByType=new bv(e['T']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.GetMessageById=new bw(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AddMessage=new bx(e['a']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UpdateMessage=new by(e['u']);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OverwriteMessage=new bz(e['o']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DeleteMessage=new bA(e['d']);
	if(e&&(e['S']!==null&&e['S']!==undefined))this.SubscribeFeed=new bB(e['S']);
	if(e&&(e['U']!==null&&e['U']!==undefined))this.UnsubscribeFeed=new bC(e['U']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.SubscribeFeedRealtime=new bD(e['l']);
	if(e&&(e['q']!==null&&e['q']!==undefined))this.UnsubscribeFeedRealtime=new bE(e['q']);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.AddMember=new bF(e['g']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RemoveMember=new bG(e['r']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.SetFeedName=new bH(e['n']);
	if(e&&(e['h']!==null&&e['h']!==undefined))this.SetFeedThumbnail=new bI(e['h']);
	if(e&&(e['hv']!==null&&e['hv']!==undefined))this.SetFeedVideo=new bJ(e['hv']);
	if(e&&(e['L']!==null&&e['L']!==undefined))this.SendRealtime=new bK(e['L']);
	if(e&&(e['LA']!==null&&e['LA']!==undefined))this.SendRealtimeToAccounts=new bL(e['LA']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.AddPendingInvitation=new bM(e['f']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.RemovePendingInvitation=new bN(e['e']);
	if(e&&(e['j']!==null&&e['j']!==undefined))this.GetJoinFeedLink=new bO(e['j']);
	if(e&&(e['J']!==null&&e['J']!==undefined))this.JoinFeed=new bP(e['J']);
	if(e&&(e['B']!==null&&e['B']!==undefined))this.JoinBroadcast=new bQ(e['B']);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.DefaultAccess=new bR(e['x']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFeedDetails=new bS(e['gf']);
	if(e&&(e['D']!==null&&e['D']!==undefined))this.ApplyDocumentRequest=new bT(e['D']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.MessageDeliveryPush=new bU(e['p']);
	if(e&&(e['P']!==null&&e['P']!==undefined))this.RealtimeMessageDeliveryPush=new bV(e['P']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.TerminatedPush=new bW(e['t']);
}
w.prototype=new aA();
w.prototype.constructor = w;
_=w.prototype;
_.__type="LDDeviceToClusterMessageRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.CreateFeed!=null)o['c']=this.CreateFeed.encode();
	if(this.GetMessagesSince!=null)o['s']=this.GetMessagesSince.encode();
	if(this.GetMessagesBefore!=null)o['b']=this.GetMessagesBefore.encode();
	if(this.GetMessagesByType!=null)o['T']=this.GetMessagesByType.encode();
	if(this.GetMessageById!=null)o['i']=this.GetMessageById.encode();
	if(this.AddMessage!=null)o['a']=this.AddMessage.encode();
	if(this.UpdateMessage!=null)o['u']=this.UpdateMessage.encode();
	if(this.OverwriteMessage!=null)o['o']=this.OverwriteMessage.encode();
	if(this.DeleteMessage!=null)o['d']=this.DeleteMessage.encode();
	if(this.SubscribeFeed!=null)o['S']=this.SubscribeFeed.encode();
	if(this.UnsubscribeFeed!=null)o['U']=this.UnsubscribeFeed.encode();
	if(this.SubscribeFeedRealtime!=null)o['l']=this.SubscribeFeedRealtime.encode();
	if(this.UnsubscribeFeedRealtime!=null)o['q']=this.UnsubscribeFeedRealtime.encode();
	if(this.AddMember!=null)o['g']=this.AddMember.encode();
	if(this.RemoveMember!=null)o['r']=this.RemoveMember.encode();
	if(this.SetFeedName!=null)o['n']=this.SetFeedName.encode();
	if(this.SetFeedThumbnail!=null)o['h']=this.SetFeedThumbnail.encode();
	if(this.SetFeedVideo!=null)o['hv']=this.SetFeedVideo.encode();
	if(this.SendRealtime!=null)o['L']=this.SendRealtime.encode();
	if(this.SendRealtimeToAccounts!=null)o['LA']=this.SendRealtimeToAccounts.encode();
	if(this.AddPendingInvitation!=null)o['f']=this.AddPendingInvitation.encode();
	if(this.RemovePendingInvitation!=null)o['e']=this.RemovePendingInvitation.encode();
	if(this.GetJoinFeedLink!=null)o['j']=this.GetJoinFeedLink.encode();
	if(this.JoinFeed!=null)o['J']=this.JoinFeed.encode();
	if(this.JoinBroadcast!=null)o['B']=this.JoinBroadcast.encode();
	if(this.DefaultAccess!=null)o['x']=this.DefaultAccess.encode();
	if(this.GetFeedDetails!=null)o['gf']=this.GetFeedDetails.encode();
	if(this.ApplyDocumentRequest!=null)o['D']=this.ApplyDocumentRequest.encode();
	if(this.MessageDeliveryPush!=null)o['p']=this.MessageDeliveryPush.encode();
	if(this.RealtimeMessageDeliveryPush!=null)o['P']=this.RealtimeMessageDeliveryPush.encode();
	if(this.TerminatedPush!=null)o['t']=this.TerminatedPush.encode();
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
	if(e&&(e['s']!==null&&e['s']!==undefined))this.GetFeedState=new bX(e['s']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.SetFeedAcceptance=new bY(e['a']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.GetDirtyFeeds=new bZ(e['d']);
	if(e&&(e['S']!==null&&e['S']!==undefined))this.SubscribeAccount=new c_(e['S']);
	if(e&&(e['U']!==null&&e['U']!==undefined))this.UnsubscribeAccount=new ca(e['U']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RegisterPushNotificationKey=new cb(e['r']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MessagePush=new cc(e['m']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.TerminatedPush=new cd(e['t']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.SetAppleBadgeCount=new ce(e['b']);
}
x.prototype=new aA();
x.prototype.constructor = x;
_=x.prototype;
_.__type="LDDeviceToClusterInboxRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetFeedState!=null)o['s']=this.GetFeedState.encode();
	if(this.SetFeedAcceptance!=null)o['a']=this.SetFeedAcceptance.encode();
	if(this.GetDirtyFeeds!=null)o['d']=this.GetDirtyFeeds.encode();
	if(this.SubscribeAccount!=null)o['S']=this.SubscribeAccount.encode();
	if(this.UnsubscribeAccount!=null)o['U']=this.UnsubscribeAccount.encode();
	if(this.RegisterPushNotificationKey!=null)o['r']=this.RegisterPushNotificationKey.encode();
	if(this.MessagePush!=null)o['m']=this.MessagePush.encode();
	if(this.TerminatedPush!=null)o['t']=this.TerminatedPush.encode();
	if(this.SetAppleBadgeCount!=null)o['b']=this.SetAppleBadgeCount.encode();
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
	if(e&&(e['ut']!==null&&e['ut']!==undefined))this.GetUploadTicket=new cf(e['ut']);
	if(e&&(e['mut']!==null&&e['mut']!==undefined))this.GetMultipartUploadTicket=new cg(e['mut']);
	if(e&&(e['vc']!==null&&e['vc']!==undefined))this.VerifyUploadCompleted=new ch(e['vc']);
	if(e&&(e['dt']!==null&&e['dt']!==undefined))this.GetDownloadTicket=new ci(e['dt']);
	if(e&&(e['ve']!==null&&e['ve']!==undefined))this.VerifyExistsAndPermanence=new cj(e['ve']);
}
y.prototype=new aA();
y.prototype.constructor = y;
_=y.prototype;
_.__type="LDClusterOrDeviceToClusterBlobRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetUploadTicket!=null)o['ut']=this.GetUploadTicket.encode();
	if(this.GetMultipartUploadTicket!=null)o['mut']=this.GetMultipartUploadTicket.encode();
	if(this.VerifyUploadCompleted!=null)o['vc']=this.VerifyUploadCompleted.encode();
	if(this.GetDownloadTicket!=null)o['dt']=this.GetDownloadTicket.encode();
	if(this.VerifyExistsAndPermanence!=null)o['ve']=this.VerifyExistsAndPermanence.encode();
	return o;
}
_.GetUploadTicket=null;
_.GetMultipartUploadTicket=null;
_.VerifyUploadCompleted=null;
_.GetDownloadTicket=null;
_.VerifyExistsAndPermanence=null;
function z(e){
	aA.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OverwriteContactsRequest=new ck(e['o']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RemoveContactRequest=new cl(e['r']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlockContactRequest=new cm(e['b']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UnblockContactRequest=new cn(e['u']);
}
z.prototype=new aA();
z.prototype.constructor = z;
_=z.prototype;
_.__type="LDDeviceToClusterContactRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.OverwriteContactsRequest!=null)o['o']=this.OverwriteContactsRequest.encode();
	if(this.RemoveContactRequest!=null)o['r']=this.RemoveContactRequest.encode();
	if(this.BlockContactRequest!=null)o['b']=this.BlockContactRequest.encode();
	if(this.UnblockContactRequest!=null)o['u']=this.UnblockContactRequest.encode();
	return o;
}
_.OverwriteContactsRequest=null;
_.RemoveContactRequest=null;
_.BlockContactRequest=null;
_.UnblockContactRequest=null;
function A(e){
	aA.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.GetProfileDetailsRequest=new co(e['p']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.SetNameRequest=new cp(e['n']);
	if(e&&(e['sp']!==null&&e['sp']!==undefined))this.SetProfilePictureRequest=new cq(e['sp']);
	if(e&&(e['sv']!==null&&e['sv']!==undefined))this.SetProfileVideoRequest=new cr(e['sv']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.GetContactProfileRequest=new cs(e['c']);
	if(e&&(e['aip']!==null&&e['aip']!==undefined))this.AddItemsToProfileRequest=new ct(e['aip']);
	if(e&&(e['rip']!==null&&e['rip']!==undefined))this.RemoveItemsFromProfileRequest=new cu(e['rip']);
	if(e&&(e['afp']!==null&&e['afp']!==undefined))this.AddFeaturesToProfileRequest=new cv(e['afp']);
	if(e&&(e['rfp']!==null&&e['rfp']!==undefined))this.RemoveFeaturesFromProfileRequest=new cw(e['rfp']);
	if(e&&(e['pps']!==null&&e['pps']!==undefined))this.GetProfilePublicStateRequest=new cx(e['pps']);
	if(e&&(e['ppp']!==null&&e['ppp']!==undefined))this.GetProfileDetailsAndPublicStateRequest=new cy(e['ppp']);
}
A.prototype=new aA();
A.prototype.constructor = A;
_=A.prototype;
_.__type="LDDeviceToClusterProfileRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetProfileDetailsRequest!=null)o['p']=this.GetProfileDetailsRequest.encode();
	if(this.SetNameRequest!=null)o['n']=this.SetNameRequest.encode();
	if(this.SetProfilePictureRequest!=null)o['sp']=this.SetProfilePictureRequest.encode();
	if(this.SetProfileVideoRequest!=null)o['sv']=this.SetProfileVideoRequest.encode();
	if(this.GetContactProfileRequest!=null)o['c']=this.GetContactProfileRequest.encode();
	if(this.AddItemsToProfileRequest!=null)o['aip']=this.AddItemsToProfileRequest.encode();
	if(this.RemoveItemsFromProfileRequest!=null)o['rip']=this.RemoveItemsFromProfileRequest.encode();
	if(this.AddFeaturesToProfileRequest!=null)o['afp']=this.AddFeaturesToProfileRequest.encode();
	if(this.RemoveFeaturesFromProfileRequest!=null)o['rfp']=this.RemoveFeaturesFromProfileRequest.encode();
	if(this.GetProfilePublicStateRequest!=null)o['pps']=this.GetProfilePublicStateRequest.encode();
	if(this.GetProfileDetailsAndPublicStateRequest!=null)o['ppp']=this.GetProfileDetailsAndPublicStateRequest.encode();
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
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UploadEntriesRequest=new cz(e['u']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.GetContactProfileRequest=new cA(e['c']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.GetAddMeLinkRequest=new cB(e['a']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MutualAddContact=new cC(e['m']);
}
B.prototype=new aA();
B.prototype.constructor = B;
_=B.prototype;
_.__type="LDDeviceToClusterAddressBookRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.UploadEntriesRequest!=null)o['u']=this.UploadEntriesRequest.encode();
	if(this.GetContactProfileRequest!=null)o['c']=this.GetContactProfileRequest.encode();
	if(this.GetAddMeLinkRequest!=null)o['a']=this.GetAddMeLinkRequest.encode();
	if(this.MutualAddContact!=null)o['m']=this.MutualAddContact.encode();
	return o;
}
_.UploadEntriesRequest=null;
_.GetContactProfileRequest=null;
_.GetAddMeLinkRequest=null;
_.MutualAddContact=null;
function C(e){
	aA.call(this,e);
	if(e&&(e['cr']!==null&&e['cr']!==undefined))this.CreateItemInfoRequest=new cD(e['cr']);
	if(e&&(e['uu']!==null&&e['uu']!==undefined))this.UserUpdateItemInfoRequest=new cE(e['uu']);
	if(e&&(e['su']!==null&&e['su']!==undefined))this.SystemUpdateItemInfoRequest=new cF(e['su']);
	if(e&&(e['ga']!==null&&e['ga']!==undefined))this.GetItemInfoRequest=new cG(e['ga']);
	if(e&&(e['re']!==null&&e['re']!==undefined))this.ReviewItemRequest=new cH(e['re']);
	if(e&&(e['pu']!==null&&e['pu']!==undefined))this.PublishItemRequest=new cI(e['pu']);
	if(e&&(e['un']!==null&&e['un']!==undefined))this.UnpublishItemRequest=new cJ(e['un']);
	if(e&&(e['de']!==null&&e['de']!==undefined))this.DeleteItemRequest=new cK(e['de']);
	if(e&&(e['lc']!==null&&e['lc']!==undefined))this.ListItemsForAccountRequest=new cL(e['lc']);
	if(e&&(e['la']!==null&&e['la']!==undefined))this.ListAllItemsRequest=new cM(e['la']);
	if(e&&(e['lp']!==null&&e['lp']!==undefined))this.ListPublishedItemsRequest=new cN(e['lp']);
	if(e&&(e['gg']!==null&&e['gg']!==undefined))this.GenerateGrantForItemRequest=new cO(e['gg']);
	if(e&&(e['gig']!==null&&e['gig']!==undefined))this.GetItemUsingGrantRequest=new cP(e['gig']);
	if(e&&(e['dihg']!==null&&e['dihg']!==undefined))this.DoesItemHaveGrantRequest=new cQ(e['dihg']);
	if(e&&(e['dgfi']!==null&&e['dgfi']!==undefined))this.DeleteGrantForItemRequest=new cR(e['dgfi']);
	if(e&&(e['gk']!==null&&e['gk']!==undefined))this.GenerateApiKeyRequest=new cS(e['gk']);
	if(e&&(e['dk']!==null&&e['dk']!==undefined))this.DeactivateApiKeyRequest=new cT(e['dk']);
	if(e&&(e['lk']!==null&&e['lk']!==undefined))this.ListApiKeysRequest=new cU(e['lk']);
}
C.prototype=new aA();
C.prototype.constructor = C;
_=C.prototype;
_.__type="LDDeviceToClusterOmletItemStoreRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.CreateItemInfoRequest!=null)o['cr']=this.CreateItemInfoRequest.encode();
	if(this.UserUpdateItemInfoRequest!=null)o['uu']=this.UserUpdateItemInfoRequest.encode();
	if(this.SystemUpdateItemInfoRequest!=null)o['su']=this.SystemUpdateItemInfoRequest.encode();
	if(this.GetItemInfoRequest!=null)o['ga']=this.GetItemInfoRequest.encode();
	if(this.ReviewItemRequest!=null)o['re']=this.ReviewItemRequest.encode();
	if(this.PublishItemRequest!=null)o['pu']=this.PublishItemRequest.encode();
	if(this.UnpublishItemRequest!=null)o['un']=this.UnpublishItemRequest.encode();
	if(this.DeleteItemRequest!=null)o['de']=this.DeleteItemRequest.encode();
	if(this.ListItemsForAccountRequest!=null)o['lc']=this.ListItemsForAccountRequest.encode();
	if(this.ListAllItemsRequest!=null)o['la']=this.ListAllItemsRequest.encode();
	if(this.ListPublishedItemsRequest!=null)o['lp']=this.ListPublishedItemsRequest.encode();
	if(this.GenerateGrantForItemRequest!=null)o['gg']=this.GenerateGrantForItemRequest.encode();
	if(this.GetItemUsingGrantRequest!=null)o['gig']=this.GetItemUsingGrantRequest.encode();
	if(this.DoesItemHaveGrantRequest!=null)o['dihg']=this.DoesItemHaveGrantRequest.encode();
	if(this.DeleteGrantForItemRequest!=null)o['dgfi']=this.DeleteGrantForItemRequest.encode();
	if(this.GenerateApiKeyRequest!=null)o['gk']=this.GenerateApiKeyRequest.encode();
	if(this.DeactivateApiKeyRequest!=null)o['dk']=this.DeactivateApiKeyRequest.encode();
	if(this.ListApiKeysRequest!=null)o['lk']=this.ListApiKeysRequest.encode();
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
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DeleteDeviceRequest=new cV(e['d']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.AddDeviceRequest=new cW(e['c']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.SetDingTimeoutRequest=new cX(e['t']);
}
D.prototype=new aA();
D.prototype.constructor = D;
_=D.prototype;
_.__type="LDDeviceToClusterDeviceRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.DeleteDeviceRequest!=null)o['d']=this.DeleteDeviceRequest.encode();
	if(this.AddDeviceRequest!=null)o['c']=this.AddDeviceRequest.encode();
	if(this.SetDingTimeoutRequest!=null)o['t']=this.SetDingTimeoutRequest.encode();
	return o;
}
_.DeleteDeviceRequest=null;
_.AddDeviceRequest=null;
_.SetDingTimeoutRequest=null;
function E(e){
	aA.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetCloudConfigRequest=new cY(e['g']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.SetCloudConfigRequest=new cZ(e['s']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RefreshCloudConfigRequest=new d_(e['r']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DisconnectCloudSyncRequest=new da(e['d']);
}
E.prototype=new aA();
E.prototype.constructor = E;
_=E.prototype;
_.__type="LDDeviceToClusterCloudSyncRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetCloudConfigRequest!=null)o['g']=this.GetCloudConfigRequest.encode();
	if(this.SetCloudConfigRequest!=null)o['s']=this.SetCloudConfigRequest.encode();
	if(this.RefreshCloudConfigRequest!=null)o['r']=this.RefreshCloudConfigRequest.encode();
	if(this.DisconnectCloudSyncRequest!=null)o['d']=this.DisconnectCloudSyncRequest.encode();
	return o;
}
_.GetCloudConfigRequest=null;
_.SetCloudConfigRequest=null;
_.RefreshCloudConfigRequest=null;
_.DisconnectCloudSyncRequest=null;
function F(e){
	aA.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OptInForAllGamesChallengesRequest=new db(e['o']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FindGamers=new dc(e['f']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UpdateChallengeLocation=new dd(e['u']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.GameChallengeComplete=new de(e['d']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.GameChallenge=new df(e['c']);
	if(e&&(e['co']!==null&&e['co']!==undefined))this.CheckAccountOptedIn=new dg(e['co']);
	if(e&&(e['ogs']!==null&&e['ogs']!==undefined))this.OptInForGSChallengesRequest=new dh(e['ogs']);
	if(e&&(e['fgs']!==null&&e['fgs']!==undefined))this.FindGamersGSRequest=new di(e['fgs']);
}
F.prototype=new aA();
F.prototype.constructor = F;
_=F.prototype;
_.__type="LDDeviceToClusterGameChallengeRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.OptInForAllGamesChallengesRequest!=null)o['o']=this.OptInForAllGamesChallengesRequest.encode();
	if(this.FindGamers!=null)o['f']=this.FindGamers.encode();
	if(this.UpdateChallengeLocation!=null)o['u']=this.UpdateChallengeLocation.encode();
	if(this.GameChallengeComplete!=null)o['d']=this.GameChallengeComplete.encode();
	if(this.GameChallenge!=null)o['c']=this.GameChallenge.encode();
	if(this.CheckAccountOptedIn!=null)o['co']=this.CheckAccountOptedIn.encode();
	if(this.OptInForGSChallengesRequest!=null)o['ogs']=this.OptInForGSChallengesRequest.encode();
	if(this.FindGamersGSRequest!=null)o['fgs']=this.FindGamersGSRequest.encode();
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
	if(e&&(e['u']!==null&&e['u']!==undefined))this.GetSubscriptionUrl=new dj(e['u']);
}
G.prototype=new aA();
G.prototype.constructor = G;
_=G.prototype;
_.__type="LDDeviceToClusterSubscriptionRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetSubscriptionUrl!=null)o['u']=this.GetSubscriptionUrl.encode();
	return o;
}
_.GetSubscriptionUrl=null;
function H(e){
	aA.call(this,e);
	if(e&&(e['hs']!==null&&e['hs']!==undefined))this.GetHighScoreRequest=new dk(e['hs']);
	if(e&&(e['rs']!==null&&e['rs']!==undefined))this.ReportScoreRequest=new dl(e['rs']);
	if(e&&(e['ts']!==null&&e['ts']!==undefined))this.GetTopScoresRequest=new dm(e['ts']);
}
H.prototype=new aA();
H.prototype.constructor = H;
_=H.prototype;
_.__type="LDDeviceToClusterHighScoreRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetHighScoreRequest!=null)o['hs']=this.GetHighScoreRequest.encode();
	if(this.ReportScoreRequest!=null)o['rs']=this.ReportScoreRequest.encode();
	if(this.GetTopScoresRequest!=null)o['ts']=this.GetTopScoresRequest.encode();
	return o;
}
_.GetHighScoreRequest=null;
_.ReportScoreRequest=null;
_.GetTopScoresRequest=null;
function I(e){
	aA.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BroadcastItemRequest=new dn(e['b']);
	if(e&&(e['ub']!==null&&e['ub']!==undefined))this.UnbroadcastItemRequest=new dp(e['ub']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.SubscribeForNearbyItemsRequest=new dq(e['s']);
	if(e&&(e['us']!==null&&e['us']!==undefined))this.UnsubscribeForNearbyItemsRequest=new dr(e['us']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FetchNearbyItemsRequest=new ds(e['f']);
	if(e&&(e['bp']!==null&&e['bp']!==undefined))this.ItemBroadcastStateChangedPush=new dt(e['bp']);
	if(e&&(e['st']!==null&&e['st']!==undefined))this.SubscriptionTerminatedPush=new du(e['st']);
}
I.prototype=new aA();
I.prototype.constructor = I;
_=I.prototype;
_.__type="LDDeviceToClusterNearbyItemRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.BroadcastItemRequest!=null)o['b']=this.BroadcastItemRequest.encode();
	if(this.UnbroadcastItemRequest!=null)o['ub']=this.UnbroadcastItemRequest.encode();
	if(this.SubscribeForNearbyItemsRequest!=null)o['s']=this.SubscribeForNearbyItemsRequest.encode();
	if(this.UnsubscribeForNearbyItemsRequest!=null)o['us']=this.UnsubscribeForNearbyItemsRequest.encode();
	if(this.FetchNearbyItemsRequest!=null)o['f']=this.FetchNearbyItemsRequest.encode();
	if(this.ItemBroadcastStateChangedPush!=null)o['bp']=this.ItemBroadcastStateChangedPush.encode();
	if(this.SubscriptionTerminatedPush!=null)o['st']=this.SubscriptionTerminatedPush.encode();
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
	if(e&&(e['wl']!==null&&e['wl']!==undefined))this.UrlToStoryRequest=new dv(e['wl']);
	if(e&&(e['is']!==null&&e['is']!==undefined))this.ImageSearchRequest=new dw(e['is']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FailureReport=new dx(e['f']);
	if(e&&(e['R']!==null&&e['R']!==undefined))this.EventReport=new dy(e['R']);
	if(e&&(e['F']!==null&&e['F']!==undefined))this.FlagUser=new dz(e['F']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.CreatePlaygroundRequest=new dA(e['p']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFeedbackAccount=new dB(e['gf']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.GetExtraVersions=new dC(e['e']);
}
J.prototype=new aA();
J.prototype.constructor = J;
_=J.prototype;
_.__type="LDDeviceToClusterMiscellaneousRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.UrlToStoryRequest!=null)o['wl']=this.UrlToStoryRequest.encode();
	if(this.ImageSearchRequest!=null)o['is']=this.ImageSearchRequest.encode();
	if(this.FailureReport!=null)o['f']=this.FailureReport.encode();
	if(this.EventReport!=null)o['R']=this.EventReport.encode();
	if(this.FlagUser!=null)o['F']=this.FlagUser.encode();
	if(this.CreatePlaygroundRequest!=null)o['p']=this.CreatePlaygroundRequest.encode();
	if(this.GetFeedbackAccount!=null)o['gf']=this.GetFeedbackAccount.encode();
	if(this.GetExtraVersions!=null)o['e']=this.GetExtraVersions.encode();
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
	if(e&&(e['sf']!==null&&e['sf']!==undefined))this.GetSmsFeedRequest=new dD(e['sf']);
	if(e&&(e['sm']!==null&&e['sm']!==undefined))this.SendSmsMessageRequest=new dE(e['sm']);
	if(e&&(e['sp']!==null&&e['sp']!==undefined))this.SetSmsParticipationRequest=new dF(e['sp']);
}
K.prototype=new aA();
K.prototype.constructor = K;
_=K.prototype;
_.__type="LDDeviceToClusterDirectMessagingRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetSmsFeedRequest!=null)o['sf']=this.GetSmsFeedRequest.encode();
	if(this.SendSmsMessageRequest!=null)o['sm']=this.SendSmsMessageRequest.encode();
	if(this.SetSmsParticipationRequest!=null)o['sp']=this.SetSmsParticipationRequest.encode();
	return o;
}
_.GetSmsFeedRequest=null;
_.SendSmsMessageRequest=null;
_.SetSmsParticipationRequest=null;
function L(e){
	aA.call(this,e);
	if(e&&(e['pv']!==null&&e['pv']!==undefined))this.PostVideo=new dG(e['pv']);
	if(e&&(e['pm']!==null&&e['pm']!==undefined))this.PostMessage=new dH(e['pm']);
	if(e&&(e['ps']!==null&&e['ps']!==undefined))this.PostScreenShot=new dI(e['ps']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LikePost=new dJ(e['l']);
	if(e&&(e['v']!==null&&e['v']!==undefined))this.AddVideoView=new dK(e['v']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FollowUser=new dL(e['f']);
	if(e&&(e['guw']!==null&&e['guw']!==undefined))this.GetUserWall=new dM(e['guw']);
	if(e&&(e['ggw']!==null&&e['ggw']!==undefined))this.GetGameWall=new dN(e['ggw']);
	if(e&&(e['gfw']!==null&&e['gfw']!==undefined))this.GetFollowingWall=new dO(e['gfw']);
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GetPost=new dP(e['gp']);
	if(e&&(e['gspt']!==null&&e['gspt']!==undefined))this.GetStandardPostTags=new dQ(e['gspt']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFollowers=new dR(e['gf']);
	if(e&&(e['gaf']!==null&&e['gaf']!==undefined))this.GetAccountsFollowedRequest=new dS(e['gaf']);
	if(e&&(e['dp']!==null&&e['dp']!==undefined))this.DeletePostRequest=new dT(e['dp']);
	if(e&&(e['ges']!==null&&e['ges']!==undefined))this.GetExternalShareLink=new dU(e['ges']);
	if(e&&(e['cf']!==null&&e['cf']!==undefined))this.CheckFollowing=new dV(e['cf']);
	if(e&&(e['gfc']!==null&&e['gfc']!==undefined))this.GetFollowerCount=new dW(e['gfc']);
	if(e&&(e['gafc']!==null&&e['gafc']!==undefined))this.GetFollowingCount=new dX(e['gafc']);
	if(e&&(e['guwc']!==null&&e['guwc']!==undefined))this.GetUserWallPostCount=new dY(e['guwc']);
	if(e&&(e['gpp']!==null&&e['gpp']!==undefined))this.GetPackagePosts=new dZ(e['gpp']);
	if(e&&(e['upd']!==null&&e['upd']!==undefined))this.UpdatePostDetailsRequest=new e_(e['upd']);
	if(e&&(e['gppi']!==null&&e['gppi']!==undefined))this.GetPackagesRequest=new ea(e['gppi']);
	if(e&&(e['grw']!==null&&e['grw']!==undefined))this.GetRecommendedWallRequest=new eb(e['grw']);
}
L.prototype=new aA();
L.prototype.constructor = L;
_=L.prototype;
_.__type="LDDeviceToClusterWallPostRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.PostVideo!=null)o['pv']=this.PostVideo.encode();
	if(this.PostMessage!=null)o['pm']=this.PostMessage.encode();
	if(this.PostScreenShot!=null)o['ps']=this.PostScreenShot.encode();
	if(this.LikePost!=null)o['l']=this.LikePost.encode();
	if(this.AddVideoView!=null)o['v']=this.AddVideoView.encode();
	if(this.FollowUser!=null)o['f']=this.FollowUser.encode();
	if(this.GetUserWall!=null)o['guw']=this.GetUserWall.encode();
	if(this.GetGameWall!=null)o['ggw']=this.GetGameWall.encode();
	if(this.GetFollowingWall!=null)o['gfw']=this.GetFollowingWall.encode();
	if(this.GetPost!=null)o['gp']=this.GetPost.encode();
	if(this.GetStandardPostTags!=null)o['gspt']=this.GetStandardPostTags.encode();
	if(this.GetFollowers!=null)o['gf']=this.GetFollowers.encode();
	if(this.GetAccountsFollowedRequest!=null)o['gaf']=this.GetAccountsFollowedRequest.encode();
	if(this.DeletePostRequest!=null)o['dp']=this.DeletePostRequest.encode();
	if(this.GetExternalShareLink!=null)o['ges']=this.GetExternalShareLink.encode();
	if(this.CheckFollowing!=null)o['cf']=this.CheckFollowing.encode();
	if(this.GetFollowerCount!=null)o['gfc']=this.GetFollowerCount.encode();
	if(this.GetFollowingCount!=null)o['gafc']=this.GetFollowingCount.encode();
	if(this.GetUserWallPostCount!=null)o['guwc']=this.GetUserWallPostCount.encode();
	if(this.GetPackagePosts!=null)o['gpp']=this.GetPackagePosts.encode();
	if(this.UpdatePostDetailsRequest!=null)o['upd']=this.UpdatePostDetailsRequest.encode();
	if(this.GetPackagesRequest!=null)o['gppi']=this.GetPackagesRequest.encode();
	if(this.GetRecommendedWallRequest!=null)o['grw']=this.GetRecommendedWallRequest.encode();
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
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetIdentityTokenRequest=new ec(e['g']);
}
M.prototype=new aA();
M.prototype.constructor = M;
_=M.prototype;
_.__type="LDDeviceToClusterIdentityTokenRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetIdentityTokenRequest!=null)o['g']=this.GetIdentityTokenRequest.encode();
	return o;
}
_.GetIdentityTokenRequest=null;
function N(e){
	aA.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetPublicChatRequest=new ed(e['g']);
	if(e&&(e['j']!==null&&e['j']!==undefined))this.JoinPublicChatRequest=new ee(e['j']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LeavePublicChatRequest=new ef(e['l']);
	if(e&&(e['w']!==null&&e['w']!==undefined))this.WriteToPublicChatRequest=new eg(e['w']);
	if(e&&(e['gm']!==null&&e['gm']!==undefined))this.GetPublicChatMembersRequest=new eh(e['gm']);
	if(e&&(e['gr']!==null&&e['gr']!==undefined))this.GetRecentMessagesRequest=new ei(e['gr']);
	if(e&&(e['lc']!==null&&e['lc']!==undefined))this.ListLiveChatsRequest=new ej(e['lc']);
	if(e&&(e['li']!==null&&e['li']!==undefined))this.ListInterestingChatsRequest=new ek(e['li']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PublicChatMessageDeliveryPush=new el(e['p']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.PublicChatTerminatedPush=new em(e['t']);
}
N.prototype=new aA();
N.prototype.constructor = N;
_=N.prototype;
_.__type="LDDeviceToClusterPublicChatRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetPublicChatRequest!=null)o['g']=this.GetPublicChatRequest.encode();
	if(this.JoinPublicChatRequest!=null)o['j']=this.JoinPublicChatRequest.encode();
	if(this.LeavePublicChatRequest!=null)o['l']=this.LeavePublicChatRequest.encode();
	if(this.WriteToPublicChatRequest!=null)o['w']=this.WriteToPublicChatRequest.encode();
	if(this.GetPublicChatMembersRequest!=null)o['gm']=this.GetPublicChatMembersRequest.encode();
	if(this.GetRecentMessagesRequest!=null)o['gr']=this.GetRecentMessagesRequest.encode();
	if(this.ListLiveChatsRequest!=null)o['lc']=this.ListLiveChatsRequest.encode();
	if(this.ListInterestingChatsRequest!=null)o['li']=this.ListInterestingChatsRequest.encode();
	if(this.PublicChatMessageDeliveryPush!=null)o['p']=this.PublicChatMessageDeliveryPush.encode();
	if(this.PublicChatTerminatedPush!=null)o['t']=this.PublicChatTerminatedPush.encode();
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
}
O.prototype=new aA();
O.prototype.constructor = O;
_=O.prototype;
_.__type="LDDeviceToClusterProfileCardRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	return o;
}
function P(e){
	aA.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.ReportSummaryEventsRequest=new en(e['r']);
	if(e&&(e['ga']!==null&&e['ga']!==undefined))this.GatherEventsByAppRequest=new eo(e['ga']);
}
P.prototype=new aA();
P.prototype.constructor = P;
_=P.prototype;
_.__type="LDClusterOrDeviceToClusterEventSummaryRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.ReportSummaryEventsRequest!=null)o['r']=this.ReportSummaryEventsRequest.encode();
	if(this.GatherEventsByAppRequest!=null)o['ga']=this.GatherEventsByAppRequest.encode();
	return o;
}
_.ReportSummaryEventsRequest=null;
_.GatherEventsByAppRequest=null;
function Q(e){
	aA.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.ListBlockedUsersRequest=new ep(e['l']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UnblockUserRequest=new eq(e['u']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlockUserRequest=new er(e['b']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.ReportUserRequest=new es(e['r']);
}
Q.prototype=new aA();
Q.prototype.constructor = Q;
_=Q.prototype;
_.__type="LDDeviceToClusterUserModerationRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.ListBlockedUsersRequest!=null)o['l']=this.ListBlockedUsersRequest.encode();
	if(this.UnblockUserRequest!=null)o['u']=this.UnblockUserRequest.encode();
	if(this.BlockUserRequest!=null)o['b']=this.BlockUserRequest.encode();
	if(this.ReportUserRequest!=null)o['r']=this.ReportUserRequest.encode();
	return o;
}
_.ListBlockedUsersRequest=null;
_.UnblockUserRequest=null;
_.BlockUserRequest=null;
_.ReportUserRequest=null;
function R(e){
	aA.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetPresencesRequest=new et(e['g']);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.SetOnlineStatusRequest=new eu(e['o']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.GetStreamingLinkRequest=new ev(e['s']);
}
R.prototype=new aA();
R.prototype.constructor = R;
_=R.prototype;
_.__type="LDDeviceToClusterPresenceRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	aA.prototype.encode.call(this,o);
	if(this.GetPresencesRequest!=null)o['g']=this.GetPresencesRequest.encode();
	if(this.SetOnlineStatusRequest!=null)o['o']=this.SetOnlineStatusRequest.encode();
	if(this.GetStreamingLinkRequest!=null)o['s']=this.GetStreamingLinkRequest.encode();
	return o;
}
_.GetPresencesRequest=null;
_.SetOnlineStatusRequest=null;
_.GetStreamingLinkRequest=null;
function T(e){
	bi.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.GetMessageResponse=new ew(e['m']);
	if(e&&(e['M']!==null&&e['M']!==undefined))this.GetMessagesResponse=new ex(e['M']);
	if(e&&(e['C']!==null&&e['C']!==undefined))this.GetMessagesWithContinuationResponse=new ey(e['C']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.GetJoinFeedLinkResponse=new ez(e['l']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFeedDetails=new eA(e['gf']);
}
T.prototype=new bi();
T.prototype.constructor = T;
_=T.prototype;
_.__type="LDDeviceToClusterMessageResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetMessageResponse!=null)o['m']=this.GetMessageResponse.encode();
	if(this.GetMessagesResponse!=null)o['M']=this.GetMessagesResponse.encode();
	if(this.GetMessagesWithContinuationResponse!=null)o['C']=this.GetMessagesWithContinuationResponse.encode();
	if(this.GetJoinFeedLinkResponse!=null)o['l']=this.GetJoinFeedLinkResponse.encode();
	if(this.GetFeedDetails!=null)o['gf']=this.GetFeedDetails.encode();
	return o;
}
_.GetMessageResponse=null;
_.GetMessagesResponse=null;
_.GetMessagesWithContinuationResponse=null;
_.GetJoinFeedLinkResponse=null;
_.GetFeedDetails=null;
function U(e){
	bi.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DirtyFeeds=new eB(e['d']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.FeedState=new eC(e['s']);
}
U.prototype=new bi();
U.prototype.constructor = U;
_=U.prototype;
_.__type="LDDeviceToClusterInboxResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.DirtyFeeds!=null)o['d']=this.DirtyFeeds.encode();
	if(this.FeedState!=null)o['s']=this.FeedState.encode();
	return o;
}
_.DirtyFeeds=null;
_.FeedState=null;
function V(e){
	bi.call(this,e);
	if(e&&(e['ut']!==null&&e['ut']!==undefined))this.GetUploadTicketResponse=new eD(e['ut']);
	if(e&&(e['mut']!==null&&e['mut']!==undefined))this.GetMultipartUploadTicketResponse=new eE(e['mut']);
	if(e&&(e['dt']!==null&&e['dt']!==undefined))this.GetDownloadTicketResponse=new eF(e['dt']);
}
V.prototype=new bi();
V.prototype.constructor = V;
_=V.prototype;
_.__type="LDClusterOrDeviceToClusterBlobResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetUploadTicketResponse!=null)o['ut']=this.GetUploadTicketResponse.encode();
	if(this.GetMultipartUploadTicketResponse!=null)o['mut']=this.GetMultipartUploadTicketResponse.encode();
	if(this.GetDownloadTicketResponse!=null)o['dt']=this.GetDownloadTicketResponse.encode();
	return o;
}
_.GetUploadTicketResponse=null;
_.GetMultipartUploadTicketResponse=null;
_.GetDownloadTicketResponse=null;
function W(e){
	bi.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactDetailsResponse=new eG(e['c']);
}
W.prototype=new bi();
W.prototype.constructor = W;
_=W.prototype;
_.__type="LDDeviceToClusterContactResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.ContactDetailsResponse!=null)o['c']=this.ContactDetailsResponse.encode();
	return o;
}
_.ContactDetailsResponse=null;
function X(e){
	bi.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfileDetailsResponse=new eH(e['p']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactProfileResponse=new eI(e['c']);
	if(e&&(e['pps']!==null&&e['pps']!==undefined))this.GetProfilePublicStateResponse=new eJ(e['pps']);
	if(e&&(e['ppp']!==null&&e['ppp']!==undefined))this.GetProfileDetailsAndPublicStateResponse=new eK(e['ppp']);
}
X.prototype=new bi();
X.prototype.constructor = X;
_=X.prototype;
_.__type="LDDeviceToClusterProfileResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.ProfileDetailsResponse!=null)o['p']=this.ProfileDetailsResponse.encode();
	if(this.ContactProfileResponse!=null)o['c']=this.ContactProfileResponse.encode();
	if(this.GetProfilePublicStateResponse!=null)o['pps']=this.GetProfilePublicStateResponse.encode();
	if(this.GetProfileDetailsAndPublicStateResponse!=null)o['ppp']=this.GetProfileDetailsAndPublicStateResponse.encode();
	return o;
}
_.ProfileDetailsResponse=null;
_.ContactProfileResponse=null;
_.GetProfilePublicStateResponse=null;
_.GetProfileDetailsAndPublicStateResponse=null;
function Y(e){
	bi.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactProfileResponse=new eL(e['c']);
}
Y.prototype=new bi();
Y.prototype.constructor = Y;
_=Y.prototype;
_.__type="LDDeviceToClusterAddressBookResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.ContactProfileResponse!=null)o['c']=this.ContactProfileResponse.encode();
	return o;
}
_.ContactProfileResponse=null;
function Z(e){
	bi.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetItemInfoResponse=new eM(e['g']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.ListItemsResponse=new eN(e['l']);
	if(e&&(e['gg']!==null&&e['gg']!==undefined))this.GenerateGrantForItemResponse=new eO(e['gg']);
	if(e&&(e['gk']!==null&&e['gk']!==undefined))this.GenerateApiKeyResponse=new eP(e['gk']);
	if(e&&(e['lk']!==null&&e['lk']!==undefined))this.ListApiKeysResponse=new eQ(e['lk']);
}
Z.prototype=new bi();
Z.prototype.constructor = Z;
_=Z.prototype;
_.__type="LDDeviceToClusterOmletItemStoreResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetItemInfoResponse!=null)o['g']=this.GetItemInfoResponse.encode();
	if(this.ListItemsResponse!=null)o['l']=this.ListItemsResponse.encode();
	if(this.GenerateGrantForItemResponse!=null)o['gg']=this.GenerateGrantForItemResponse.encode();
	if(this.GenerateApiKeyResponse!=null)o['gk']=this.GenerateApiKeyResponse.encode();
	if(this.ListApiKeysResponse!=null)o['lk']=this.ListApiKeysResponse.encode();
	return o;
}
_.GetItemInfoResponse=null;
_.ListItemsResponse=null;
_.GenerateGrantForItemResponse=null;
_.GenerateApiKeyResponse=null;
_.ListApiKeysResponse=null;
function a_(e){
	bi.call(this,e);
}
a_.prototype=new bi();
a_.prototype.constructor = a_;
_=a_.prototype;
_.__type="LDDeviceToClusterDeviceResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	return o;
}
function aa(e){
	bi.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetClientCloudConfigResponse=new eR(e['g']);
}
aa.prototype=new bi();
aa.prototype.constructor = aa;
_=aa.prototype;
_.__type="LDDeviceToClusterCloudSyncResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetClientCloudConfigResponse!=null)o['g']=this.GetClientCloudConfigResponse.encode();
	return o;
}
_.GetClientCloudConfigResponse=null;
function ab(e){
	bi.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FindGamers=new eS(e['f']);
}
ab.prototype=new bi();
ab.prototype.constructor = ab;
_=ab.prototype;
_.__type="LDDeviceToClusterGameChallengeResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.FindGamers!=null)o['f']=this.FindGamers.encode();
	return o;
}
_.FindGamers=null;
function ac(e){
	bi.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.GetSubscriptionUrl=new eT(e['u']);
}
ac.prototype=new bi();
ac.prototype.constructor = ac;
_=ac.prototype;
_.__type="LDDeviceToClusterSubscriptionResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetSubscriptionUrl!=null)o['u']=this.GetSubscriptionUrl.encode();
	return o;
}
_.GetSubscriptionUrl=null;
function ad(e){
	bi.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ScoreResponse=new eU(e['s']);
	if(e&&(e['ss']!==null&&e['ss']!==undefined))this.ScoresResponse=new eV(e['ss']);
}
ad.prototype=new bi();
ad.prototype.constructor = ad;
_=ad.prototype;
_.__type="LDDeviceToClusterHighScoreResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.ScoreResponse!=null)o['s']=this.ScoreResponse.encode();
	if(this.ScoresResponse!=null)o['ss']=this.ScoresResponse.encode();
	return o;
}
_.ScoreResponse=null;
_.ScoresResponse=null;
function ae(e){
	bi.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BroadcastItemResponse=new eW(e['b']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FetchNearbyItemsResponse=new eX(e['f']);
}
ae.prototype=new bi();
ae.prototype.constructor = ae;
_=ae.prototype;
_.__type="LDDeviceToClusterNearbyItemResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.BroadcastItemResponse!=null)o['b']=this.BroadcastItemResponse.encode();
	if(this.FetchNearbyItemsResponse!=null)o['f']=this.FetchNearbyItemsResponse.encode();
	return o;
}
_.BroadcastItemResponse=null;
_.FetchNearbyItemsResponse=null;
function af(e){
	bi.call(this,e);
	if(e&&(e['wl']!==null&&e['wl']!==undefined))this.UrlToStoryResponse=new eY(e['wl']);
	if(e&&(e['is']!==null&&e['is']!==undefined))this.ImageSearchResponse=new eZ(e['is']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.CreatePlaygroundResponse=new f_(e['p']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.GetExtraVersions=new fa(e['e']);
}
af.prototype=new bi();
af.prototype.constructor = af;
_=af.prototype;
_.__type="LDDeviceToClusterMiscellaneousResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.UrlToStoryResponse!=null)o['wl']=this.UrlToStoryResponse.encode();
	if(this.ImageSearchResponse!=null)o['is']=this.ImageSearchResponse.encode();
	if(this.CreatePlaygroundResponse!=null)o['p']=this.CreatePlaygroundResponse.encode();
	if(this.GetExtraVersions!=null)o['e']=this.GetExtraVersions.encode();
	return o;
}
_.UrlToStoryResponse=null;
_.ImageSearchResponse=null;
_.CreatePlaygroundResponse=null;
_.GetExtraVersions=null;
function ag(e){
	bi.call(this,e);
	if(e&&(e['gs']!==null&&e['gs']!==undefined))this.GetSmsFeedResponse=new fb(e['gs']);
	if(e&&(e['sm']!==null&&e['sm']!==undefined))this.SendSmsMessageResponse=new fc(e['sm']);
}
ag.prototype=new bi();
ag.prototype.constructor = ag;
_=ag.prototype;
_.__type="LDDeviceToClusterDirectMessagingResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetSmsFeedResponse!=null)o['gs']=this.GetSmsFeedResponse.encode();
	if(this.SendSmsMessageResponse!=null)o['sm']=this.SendSmsMessageResponse.encode();
	return o;
}
_.GetSmsFeedResponse=null;
_.SendSmsMessageResponse=null;
function ah(e){
	bi.call(this,e);
	if(e&&(e['w']!==null&&e['w']!==undefined))this.WallResponse=new fd(e['w']);
	if(e&&(e['ws']!==null&&e['ws']!==undefined))this.WallsResponse=new fe(e['ws']);
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GetPostResponse=new ff(e['gp']);
	if(e&&(e['ap']!==null&&e['ap']!==undefined))this.AddPostResponse=new fg(e['ap']);
	if(e&&(e['gaf']!==null&&e['gaf']!==undefined))this.GetAccountsFollowedResponse=new fh(e['gaf']);
	if(e&&(e['gspt']!==null&&e['gspt']!==undefined))this.GetStandardPostTagsResponse=new fi(e['gspt']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFollowersResponse=new fj(e['gf']);
	if(e&&(e['ges']!==null&&e['ges']!==undefined))this.GetExternalShareLink=new fk(e['ges']);
	if(e&&(e['gppi']!==null&&e['gppi']!==undefined))this.GetPackagesResponse=new fl(e['gppi']);
}
ah.prototype=new bi();
ah.prototype.constructor = ah;
_=ah.prototype;
_.__type="LDDeviceToClusterWallPostResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.WallResponse!=null)o['w']=this.WallResponse.encode();
	if(this.WallsResponse!=null)o['ws']=this.WallsResponse.encode();
	if(this.GetPostResponse!=null)o['gp']=this.GetPostResponse.encode();
	if(this.AddPostResponse!=null)o['ap']=this.AddPostResponse.encode();
	if(this.GetAccountsFollowedResponse!=null)o['gaf']=this.GetAccountsFollowedResponse.encode();
	if(this.GetStandardPostTagsResponse!=null)o['gspt']=this.GetStandardPostTagsResponse.encode();
	if(this.GetFollowersResponse!=null)o['gf']=this.GetFollowersResponse.encode();
	if(this.GetExternalShareLink!=null)o['ges']=this.GetExternalShareLink.encode();
	if(this.GetPackagesResponse!=null)o['gppi']=this.GetPackagesResponse.encode();
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
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetIdentityTokenResponse=new fm(e['g']);
}
ai.prototype=new bi();
ai.prototype.constructor = ai;
_=ai.prototype;
_.__type="LDDeviceToClusterIdentityTokenResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetIdentityTokenResponse!=null)o['g']=this.GetIdentityTokenResponse.encode();
	return o;
}
_.GetIdentityTokenResponse=null;
function aj(e){
	bi.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetPublicChatResponse=new fn(e['g']);
	if(e&&(e['gm']!==null&&e['gm']!==undefined))this.GetPublicChatMembersResponse=new fo(e['gm']);
	if(e&&(e['gr']!==null&&e['gr']!==undefined))this.GetRecentMessagesResponse=new fp(e['gr']);
	if(e&&(e['lc']!==null&&e['lc']!==undefined))this.ListLiveChatsResponse=new fq(e['lc']);
}
aj.prototype=new bi();
aj.prototype.constructor = aj;
_=aj.prototype;
_.__type="LDDeviceToClusterPublicChatResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetPublicChatResponse!=null)o['g']=this.GetPublicChatResponse.encode();
	if(this.GetPublicChatMembersResponse!=null)o['gm']=this.GetPublicChatMembersResponse.encode();
	if(this.GetRecentMessagesResponse!=null)o['gr']=this.GetRecentMessagesResponse.encode();
	if(this.ListLiveChatsResponse!=null)o['lc']=this.ListLiveChatsResponse.encode();
	return o;
}
_.GetPublicChatResponse=null;
_.GetPublicChatMembersResponse=null;
_.GetRecentMessagesResponse=null;
_.ListLiveChatsResponse=null;
function ak(e){
	bi.call(this,e);
}
ak.prototype=new bi();
ak.prototype.constructor = ak;
_=ak.prototype;
_.__type="LDDeviceToClusterProfileCardResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	return o;
}
function al(e){
	bi.call(this,e);
	if(e&&(e['ga']!==null&&e['ga']!==undefined))this.GatherEventsByAppResponse=new fr(e['ga']);
}
al.prototype=new bi();
al.prototype.constructor = al;
_=al.prototype;
_.__type="LDClusterOrDeviceToClusterEventSummaryResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GatherEventsByAppResponse!=null)o['ga']=this.GatherEventsByAppResponse.encode();
	return o;
}
_.GatherEventsByAppResponse=null;
function am(e){
	bi.call(this,e);
}
am.prototype=new bi();
am.prototype.constructor = am;
_=am.prototype;
_.__type="LDDeviceToClusterUserModerationResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	return o;
}
function an(e){
	bi.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.GetPresencesResponse=new fs(e['p']);
}
an.prototype=new bi();
an.prototype.constructor = an;
_=an.prototype;
_.__type="LDDeviceToClusterPresenceResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetPresencesResponse!=null)o['p']=this.GetPresencesResponse.encode();
	return o;
}
_.GetPresencesResponse=null;
function ft(e){
}
_=ft.prototype;
_.__type="LDURI";
_.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function au(e){
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['nt']!==null&&e['nt']!==undefined))this.NameTranslations=e['nt'];else this.NameTranslations=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['dt']!==null&&e['dt']!==undefined))this.DescriptionTranslations=e['dt'];else this.DescriptionTranslations=null;
	if(e&&(e['sui']!==null&&e['sui']!==undefined))this.IOSStoreUrl=e['sui'];else this.IOSStoreUrl=null;
	if(e&&(e['sua']!==null&&e['sua']!==undefined))this.AndroidStoreUrl=e['sua'];else this.AndroidStoreUrl=null;
	if(e&&(e['apn']!==null&&e['apn']!==undefined))this.AndroidPackageName=e['apn'];else this.AndroidPackageName=null;
	if(e&&(e['ibls']!==null&&e['ibls']!==undefined))this.IconBlobLinkString=e['ibls'];else this.IconBlobLinkString=null;
	if(e&&(e['ssl']!==null&&e['ssl']!==undefined)){
		this.ScreenShotLinks=[];
		var d = e['ssl'];
		for(var k=0;k<d.length;++k)this.ScreenShotLinks.push(d[k]);
	}
}
_=au.prototype;
_.__type="LDAppRestletDetails";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Name!=null)o['n']=this.Name;
	if(this.NameTranslations!=null)o['nt']=this.NameTranslations;
	if(this.Description!=null)o['d']=this.Description;
	if(this.DescriptionTranslations!=null)o['dt']=this.DescriptionTranslations;
	if(this.IOSStoreUrl!=null)o['sui']=this.IOSStoreUrl;
	if(this.AndroidStoreUrl!=null)o['sua']=this.AndroidStoreUrl;
	if(this.AndroidPackageName!=null)o['apn']=this.AndroidPackageName;
	if(this.IconBlobLinkString!=null)o['ibls']=this.IconBlobLinkString;
	if(this.ScreenShotLinks!=null) {
		o['ssl']=[];
		var d=this.ScreenShotLinks;
		for(var k = 0; k < d.length; ++k) o['ssl'].push(d[k]);
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Kind=e['t'];else this.Kind=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.Key=new Buffer(e['k'],'base64');
}
_=aw.prototype;
_.__type="LDFeed";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Account!=null)o['a']=this.Account;
	if(this.Kind!=null)o['t']=this.Kind;
	if(this.Key!=null)o['k']=this.Key.toString('base64');
	return o;
}
_.Account=null;
_.Kind=null;
_.Key=null;
function fu(e){
}
_=fu.prototype;
_.__type="LDEnum";
_.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function fv(e){
	fu.call(this,e);
}
fv.prototype=new fu();
fv.prototype.constructor = fv;
_=fv.prototype;
_.__type="LDAccessScope";
_.encode=function(o){
	if(o===undefined)o={};
	fu.prototype.encode.call(this,o);
	return o;
}
function aB(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Locale=e['l'];else this.Locale=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedCluster=e['c'];else this.RequestedCluster=null;
}
aB.prototype=new b();
aB.prototype.constructor = aB;
_=aB.prototype;
_.__type="LDRegisterWithTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.Account!=null)o['a']=this.Account;
	if(this.Locale!=null)o['l']=this.Locale;
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	if(this.RequestedCluster!=null)o['c']=this.RequestedCluster;
	return o;
}
_.Identity=null;
_.Account=null;
_.Locale=null;
_.IpAddress=null;
_.RequestedCluster=null;
function aC(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
aC.prototype=new b();
aC.prototype.constructor = aC;
_=aC.prototype;
_.__type="LDConfirmTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
_.Identity=null;
_.Token=null;
function aD(e){
	b.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ServiceType=e['s'];else this.ServiceType=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.Key=e['k'];else this.Key=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedCluster=e['c'];else this.RequestedCluster=null;
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
}
aD.prototype=new b();
aD.prototype.constructor = aD;
_=aD.prototype;
_.__type="LDRegisterWithOAuthRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ServiceType!=null)o['s']=this.ServiceType;
	if(this.Key!=null)o['k']=this.Key;
	if(this.Account!=null)o['a']=this.Account;
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	if(this.RequestedCluster!=null)o['c']=this.RequestedCluster;
	if(this.Scopes!=null) {
		o['S']=[];
		var d=this.Scopes;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k]);
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
aE.prototype=new b();
aE.prototype.constructor = aE;
_=aE.prototype;
_.__type="LDGetLinkedIdentitiesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
_.Account=null;
function aF(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedCluster=e['c'];else this.RequestedCluster=null;
}
aF.prototype=new b();
aF.prototype.constructor = aF;
_=aF.prototype;
_.__type="LDCheckIdentityLinkedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	if(this.RequestedCluster!=null)o['c']=this.RequestedCluster;
	return o;
}
_.IpAddress=null;
_.RequestedCluster=null;
function aG(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
aG.prototype=new b();
aG.prototype.constructor = aG;
_=aG.prototype;
_.__type="LDUnlinkIdentityRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
_.Identity=null;
_.Account=null;
function aH(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
aH.prototype=new b();
aH.prototype.constructor = aH;
_=aH.prototype;
_.__type="LDLinkOmletIdentityRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
_.Identity=null;
_.Account=null;
function aI(e){
	b.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RedirectPage=e['r'];else this.RedirectPage=null;
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
	if(e&&(e['s']!==null&&e['s']!==undefined))this.LoginServiceType=e['s'];else this.LoginServiceType=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.LoginKey=e['k'];else this.LoginKey=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Flow=e['f'];else this.Flow=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
	if(e&&(e['P']!==null&&e['P']!==undefined))this.Partner=e['P'];else this.Partner=null;
}
aI.prototype=new b();
aI.prototype.constructor = aI;
_=aI.prototype;
_.__type="LDGetAppSigninLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.RedirectPage!=null)o['r']=this.RedirectPage;
	if(this.Scopes!=null) {
		o['S']=[];
		var d=this.Scopes;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k]);
	}
	if(this.LoginServiceType!=null)o['s']=this.LoginServiceType;
	if(this.LoginKey!=null)o['k']=this.LoginKey;
	if(this.Flow!=null)o['f']=this.Flow;
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	if(this.Partner!=null)o['P']=this.Partner;
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AuthCode=e['a'];else this.AuthCode=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.QueryKey=e['k'];else this.QueryKey=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
}
aJ.prototype=new b();
aJ.prototype.constructor = aJ;
_=aJ.prototype;
_.__type="LDConfirmAuthCodeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AuthCode!=null)o['a']=this.AuthCode;
	if(this.QueryKey!=null)o['k']=this.QueryKey;
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	return o;
}
_.AuthCode=null;
_.QueryKey=null;
_.IpAddress=null;
function aK(e){
	b.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RedirectPage=e['r'];else this.RedirectPage=null;
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedCluster=e['c'];else this.RequestedCluster=null;
	if(e&&(e['j']!==null&&e['j']!==undefined))this.Jwt=e['j'];else this.Jwt=null;
}
aK.prototype=new b();
aK.prototype.constructor = aK;
_=aK.prototype;
_.__type="LDGetSigninLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.RedirectPage!=null)o['r']=this.RedirectPage;
	if(this.Scopes!=null) {
		o['S']=[];
		var d=this.Scopes;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k]);
	}
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	if(this.RequestedCluster!=null)o['c']=this.RequestedCluster;
	if(this.Jwt!=null)o['j']=this.Jwt;
	return o;
}
_.RedirectPage=null;
_.Scopes=null;
_.IpAddress=null;
_.RequestedCluster=null;
_.Jwt=null;
function aL(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AuthCode=e['a'];else this.AuthCode=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.QueryKey=e['k'];else this.QueryKey=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
}
aL.prototype=new b();
aL.prototype.constructor = aL;
_=aL.prototype;
_.__type="LDConfirmSigninCodeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AuthCode!=null)o['a']=this.AuthCode;
	if(this.QueryKey!=null)o['k']=this.QueryKey;
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	return o;
}
_.AuthCode=null;
_.QueryKey=null;
_.IpAddress=null;
function aM(e){
	b.call(this,e);
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
}
aM.prototype=new b();
aM.prototype.constructor = aM;
_=aM.prototype;
_.__type="LDGetSSOTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Scopes!=null) {
		o['S']=[];
		var d=this.Scopes;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k]);
	}
	return o;
}
_.Scopes=null;
function aN(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
aN.prototype=new b();
aN.prototype.constructor = aN;
_=aN.prototype;
_.__type="LDCheckSSOTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
_.Account=null;
_.Token=null;
function aO(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
aO.prototype=new b();
aO.prototype.constructor = aO;
_=aO.prototype;
_.__type="LDConfirmSSOTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
_.Account=null;
_.Token=null;
function aP(e){
	b.call(this,e);
}
aP.prototype=new b();
aP.prototype.constructor = aP;
_=aP.prototype;
_.__type="LDDeviceRegistrationStateChangedPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function aQ(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aQ.prototype=new b();
aQ.prototype.constructor = aQ;
_=aQ.prototype;
_.__type="LDUnblockIdentityRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
function aR(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aR.prototype=new b();
aR.prototype.constructor = aR;
_=aR.prototype;
_.__type="LDGetEmailLoginLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
function aS(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.AccountToLookup=e['A'];else this.AccountToLookup=null;
}
aS.prototype=new b();
aS.prototype.constructor = aS;
_=aS.prototype;
_.__type="LDGetAccountDetailsByAccountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.AccountToLookup!=null)o['A']=this.AccountToLookup;
	return o;
}
_.AdminAccount=null;
_.AccountToLookup=null;
function aT(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aT.prototype=new b();
aT.prototype.constructor = aT;
_=aT.prototype;
_.__type="LDGetAccountDetailsByIdentityRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
function aU(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aU.prototype=new b();
aU.prototype.constructor = aU;
_=aU.prototype;
_.__type="LDGetIdentityRecordsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
_.Identity=null;
_.AdminAccount=null;
function aV(e){
	b.call(this,e);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.End=e['e'];else this.End=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Start=e['s'];else this.Start=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ContinuationKey=new Buffer(e['k'],'base64');
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aV.prototype=new b();
aV.prototype.constructor = aV;
_=aV.prototype;
_.__type="LDListFlaggedUsersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.End!=null)o['e']=this.End;
	if(this.Start!=null)o['s']=this.Start;
	if(this.ContinuationKey!=null)o['k']=this.ContinuationKey.toString('base64');
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
_.End=null;
_.Start=null;
_.ContinuationKey=null;
_.AdminAccount=null;
function aW(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
}
aW.prototype=new b();
aW.prototype.constructor = aW;
_=aW.prototype;
_.__type="LDChangeUserNameRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	if(this.Name!=null)o['n']=this.Name;
	return o;
}
_.AdminAccount=null;
_.Account=null;
_.Name=null;
function aX(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
aX.prototype=new b();
aX.prototype.constructor = aX;
_=aX.prototype;
_.__type="LDChangeUserProfilePictureRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
_.AdminAccount=null;
_.Account=null;
_.BlobLinkString=null;
_.DecryptedHash=null;
function aY(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
}
aY.prototype=new b();
aY.prototype.constructor = aY;
_=aY.prototype;
_.__type="LDDisableUserGameChallengeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	return o;
}
_.AdminAccount=null;
_.Account=null;
function aZ(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
}
aZ.prototype=new b();
aZ.prototype.constructor = aZ;
_=aZ.prototype;
_.__type="LDLogUserOutRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	return o;
}
_.AdminAccount=null;
_.Account=null;
function b_(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Device=e['i'];else this.Device=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
b_.prototype=new b();
b_.prototype.constructor = b_;
_=b_.prototype;
_.__type="LDGetDeviceRecordsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Device!=null)o['i']=this.Device;
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
_.Device=null;
_.AdminAccount=null;
function ba(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.JobId=new Buffer(e['id'],'base64');
	if(e&&(e['s']!==null&&e['s']!==undefined))this.JobIdAsRedisString=e['s'];else this.JobIdAsRedisString=null;
}
ba.prototype=new b();
ba.prototype.constructor = ba;
_=ba.prototype;
_.__type="LDDeleteScheduledJobRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Cluster!=null)o['c']=this.Cluster;
	if(this.JobId!=null)o['id']=this.JobId.toString('base64');
	if(this.JobIdAsRedisString!=null)o['s']=this.JobIdAsRedisString;
	return o;
}
_.AdminAccount=null;
_.Cluster=null;
_.JobId=null;
_.JobIdAsRedisString=null;
function bb(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Country=e['c'];else this.Country=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Days=e['d'];else this.Days=null;
}
bb.prototype=new b();
bb.prototype.constructor = bb;
_=bb.prototype;
_.__type="LDCreateCountryWideFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Country!=null)o['c']=this.Country;
	if(this.Days!=null)o['d']=this.Days;
	return o;
}
_.AdminAccount=null;
_.Country=null;
_.Days=null;
function bc(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Duration=e['d'];else this.Duration=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
bc.prototype=new b();
bc.prototype.constructor = bc;
_=bc.prototype;
_.__type="LDAdminBanUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.Duration!=null)o['d']=this.Duration;
	if(this.Cluster!=null)o['c']=this.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.Duration=null;
_.Cluster=null;
function bd(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
bd.prototype=new b();
bd.prototype.constructor = bd;
_=bd.prototype;
_.__type="LDAdminUnbanUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.Cluster!=null)o['c']=this.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.Cluster=null;
function be(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.AppScopeId=new fx(e['s']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fy(e['i']);
	if(e&&(e['pid']!==null&&e['pid']!==undefined))this.PackageId=e['pid'];else this.PackageId=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Duration=e['d'];else this.Duration=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pub=e['p'];else this.Pub=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
be.prototype=new b();
be.prototype.constructor = be;
_=be.prototype;
_.__type="LDAdminBanUserFromAppRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.AppScopeId!=null)o['s']=this.AppScopeId.encode();
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	if(this.PackageId!=null)o['pid']=this.PackageId;
	if(this.Duration!=null)o['d']=this.Duration;
	if(this.Pub!=null)o['p']=this.Pub;
	if(this.Cluster!=null)o['c']=this.Cluster;
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.AppScopeId=new fx(e['s']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fy(e['i']);
	if(e&&(e['pid']!==null&&e['pid']!==undefined))this.PackageId=e['pid'];else this.PackageId=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pub=e['p'];else this.Pub=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
bf.prototype=new b();
bf.prototype.constructor = bf;
_=bf.prototype;
_.__type="LDAdminUnbanUserFromAppRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.AppScopeId!=null)o['s']=this.AppScopeId.encode();
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	if(this.PackageId!=null)o['pid']=this.PackageId;
	if(this.Pub!=null)o['p']=this.Pub;
	if(this.Cluster!=null)o['c']=this.Cluster;
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
}
bg.prototype=new b();
bg.prototype.constructor = bg;
_=bg.prototype;
_.__type="LDAdminBlockUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	return o;
}
_.AdminAccount=null;
_.Account=null;
function bh(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
bh.prototype=new b();
bh.prototype.constructor = bh;
_=bh.prototype;
_.__type="LDGetPermissionsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.Cluster!=null)o['c']=this.Cluster;
	return o;
}
_.AdminAccount=null;
_.UserKey=null;
_.Cluster=null;
function bj(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AccountDetails=new fz(e['a']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.WasLegacy=e['l'];else this.WasLegacy=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.AppId=new Buffer(e['i'],'base64');
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
}
bj.prototype=new b();
bj.prototype.constructor = bj;
_=bj.prototype;
_.__type="LDAccountDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AccountDetails!=null)o['a']=this.AccountDetails.encode();
	if(this.WasLegacy!=null)o['l']=this.WasLegacy;
	if(this.AppId!=null)o['i']=this.AppId.toString('base64');
	if(this.Scopes!=null) {
		o['S']=[];
		var d=this.Scopes;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k]);
	}
	return o;
}
_.AccountDetails=null;
_.WasLegacy=null;
_.AppId=null;
_.Scopes=null;
function bk(e){
	b.call(this,e);
	if(e&&(e['I']!==null&&e['I']!==undefined)){
		this.Identities=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)this.Identities.push(new fw(d[k]));
	}
}
bk.prototype=new b();
bk.prototype.constructor = bk;
_=bk.prototype;
_.__type="LDGetLinkedIdentitiesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identities!=null) {
		o['I']=[];
		var d=this.Identities;
		for(var k = 0; k < d.length; ++k) o['I'].push(d[k].encode());
	}
	return o;
}
_.Identities=null;
function bl(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Link=e['l'];else this.Link=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Status=e['s'];else this.Status=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RegisterAuthCode=e['r'];else this.RegisterAuthCode=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AccountDetailsResponse=new bj(e['a']);
}
bl.prototype=new b();
bl.prototype.constructor = bl;
_=bl.prototype;
_.__type="LDGetAppSigninLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Link!=null)o['l']=this.Link;
	if(this.Status!=null)o['s']=this.Status;
	if(this.RegisterAuthCode!=null)o['r']=this.RegisterAuthCode;
	if(this.AccountDetailsResponse!=null)o['a']=this.AccountDetailsResponse.encode();
	return o;
}
_.Link=null;
_.Status=null;
_.RegisterAuthCode=null;
_.AccountDetailsResponse=null;
function bm(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Link=e['l'];else this.Link=null;
}
bm.prototype=new b();
bm.prototype.constructor = bm;
_=bm.prototype;
_.__type="LDGetSigninLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Link!=null)o['l']=this.Link;
	return o;
}
_.Link=null;
function bn(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.AppName=e['n'];else this.AppName=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.AppIconDirectLink=e['p'];else this.AppIconDirectLink=null;
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.AuthCode=e['c'];else this.AuthCode=null;
}
bn.prototype=new b();
bn.prototype.constructor = bn;
_=bn.prototype;
_.__type="LDCheckSSOTokenResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppName!=null)o['n']=this.AppName;
	if(this.AppIconDirectLink!=null)o['p']=this.AppIconDirectLink;
	if(this.Scopes!=null) {
		o['S']=[];
		var d=this.Scopes;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k]);
	}
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AuthCode!=null)o['c']=this.AuthCode;
	return o;
}
_.AppName=null;
_.AppIconDirectLink=null;
_.Scopes=null;
_.Identity=null;
_.AuthCode=null;
function bo(e){
	b.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined)){
		this.Records=[];
		var d = e['r'];
		for(var k=0;k<d.length;++k)this.Records.push(d[k]);
	}
}
bo.prototype=new b();
bo.prototype.constructor = bo;
_=bo.prototype;
_.__type="LDGetIdentityRecordsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Records!=null) {
		o['r']=[];
		var d=this.Records;
		for(var k = 0; k < d.length; ++k) o['r'].push(d[k]);
	}
	return o;
}
_.Records=null;
function bp(e){
	b.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined)){
		this.Details=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)this.Details.push(new fA(d[k]));
	}
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ContinuationKey=new Buffer(e['k'],'base64');
}
bp.prototype=new b();
bp.prototype.constructor = bp;
_=bp.prototype;
_.__type="LDListFlaggedUsersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Details!=null) {
		o['d']=[];
		var d=this.Details;
		for(var k = 0; k < d.length; ++k) o['d'].push(d[k].encode());
	}
	if(this.ContinuationKey!=null)o['k']=this.ContinuationKey.toString('base64');
	return o;
}
_.Details=null;
_.ContinuationKey=null;
function bq(e){
	b.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined)){
		this.Records=[];
		var d = e['r'];
		for(var k=0;k<d.length;++k)this.Records.push(d[k]);
	}
}
bq.prototype=new b();
bq.prototype.constructor = bq;
_=bq.prototype;
_.__type="LDGetDeviceRecordsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Records!=null) {
		o['r']=[];
		var d=this.Records;
		for(var k = 0; k < d.length; ++k) o['r'].push(d[k]);
	}
	return o;
}
_.Records=null;
function br(e){
	b.call(this,e);
	if(e&&(e['pp']!==null&&e['pp']!==undefined))this.PrettyPermissions=new fB(e['pp']);
}
br.prototype=new b();
br.prototype.constructor = br;
_=br.prototype;
_.__type="LDGetPermissionsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PrettyPermissions!=null)o['pp']=this.PrettyPermissions.encode();
	return o;
}
_.PrettyPermissions=null;
function bs(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bs.prototype=new b();
bs.prototype.constructor = bs;
_=bs.prototype;
_.__type="LDCreateFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bt(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
}
bt.prototype=new b();
bt.prototype.constructor = bt;
_=bt.prototype;
_.__type="LDGetMessagesSinceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	return o;
}
_.Feed=null;
_.Timestamp=null;
function bu(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
}
bu.prototype=new b();
bu.prototype.constructor = bu;
_=bu.prototype;
_.__type="LDGetMessagesBeforeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	return o;
}
_.Feed=null;
_.Timestamp=null;
function bv(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NextResult=new Buffer(e['n'],'base64');
}
bv.prototype=new b();
bv.prototype.constructor = bv;
_=bv.prototype;
_.__type="LDGetMessagesByTypeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Type!=null)o['t']=this.Type;
	if(this.NextResult!=null)o['n']=this.NextResult.toString('base64');
	return o;
}
_.Feed=null;
_.Type=null;
_.NextResult=null;
function bw(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fC(e['i']);
}
bw.prototype=new b();
bw.prototype.constructor = bw;
_=bw.prototype;
_.__type="LDGetMessageByIdRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	return o;
}
_.Feed=null;
_.Id=null;
function bx(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fC(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.AnyMemberWritable=e['w'];else this.AnyMemberWritable=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.FromDevice=e['d'];else this.FromDevice=null;
}
bx.prototype=new b();
bx.prototype.constructor = bx;
_=bx.prototype;
_.__type="LDAddMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.AnyMemberWritable!=null)o['w']=this.AnyMemberWritable;
	if(this.FromDevice!=null)o['d']=this.FromDevice;
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
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fC(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['w']!==null&&e['w']!==undefined))this.AnyMemberWritable=e['w'];else this.AnyMemberWritable=null;
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OldVersion=e['o'];else this.OldVersion=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NewVersion=e['n'];else this.NewVersion=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.FromDevice=e['d'];else this.FromDevice=null;
}
by.prototype=new b();
by.prototype.constructor = by;
_=by.prototype;
_.__type="LDUpdateMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.AnyMemberWritable!=null)o['w']=this.AnyMemberWritable;
	if(this.OldVersion!=null)o['o']=this.OldVersion;
	if(this.NewVersion!=null)o['n']=this.NewVersion;
	if(this.FromDevice!=null)o['d']=this.FromDevice;
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
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fC(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.AnyMemberWritable=e['w'];else this.AnyMemberWritable=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Metadata=new Buffer(e['m'],'base64');
	if(e&&(e['d']!==null&&e['d']!==undefined))this.FromDevice=e['d'];else this.FromDevice=null;
}
bz.prototype=new b();
bz.prototype.constructor = bz;
_=bz.prototype;
_.__type="LDOverwriteMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.AnyMemberWritable!=null)o['w']=this.AnyMemberWritable;
	if(this.Metadata!=null)o['m']=this.Metadata.toString('base64');
	if(this.FromDevice!=null)o['d']=this.FromDevice;
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
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fC(e['i']);
}
bA.prototype=new b();
bA.prototype.constructor = bA;
_=bA.prototype;
_.__type="LDDeleteMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	return o;
}
_.Feed=null;
_.Id=null;
function bB(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bB.prototype=new b();
bB.prototype.constructor = bB;
_=bB.prototype;
_.__type="LDSubscribeFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bC(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bC.prototype=new b();
bC.prototype.constructor = bC;
_=bC.prototype;
_.__type="LDUnsubscribeFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bD(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bD.prototype=new b();
bD.prototype.constructor = bD;
_=bD.prototype;
_.__type="LDSubscribeFeedRealtimeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bE(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bE.prototype=new b();
bE.prototype.constructor = bE;
_=bE.prototype;
_.__type="LDUnsubscribeFeedRealtimeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bF(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Member=e['m'];else this.Member=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Acl=new fD(e['A']);
}
bF.prototype=new b();
bF.prototype.constructor = bF;
_=bF.prototype;
_.__type="LDAddMemberRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Member!=null)o['m']=this.Member;
	if(this.Acl!=null)o['A']=this.Acl.encode();
	return o;
}
_.Feed=null;
_.Member=null;
_.Acl=null;
function bG(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Member=e['m'];else this.Member=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Acl=new fD(e['A']);
}
bG.prototype=new b();
bG.prototype.constructor = bG;
_=bG.prototype;
_.__type="LDRemoveMemberRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Member!=null)o['m']=this.Member;
	if(this.Acl!=null)o['A']=this.Acl.encode();
	return o;
}
_.Feed=null;
_.Member=null;
_.Acl=null;
function bH(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
}
bH.prototype=new b();
bH.prototype.constructor = bH;
_=bH.prototype;
_.__type="LDSetFeedNameRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Name!=null)o['n']=this.Name;
	return o;
}
_.Feed=null;
_.Name=null;
function bI(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
bI.prototype=new b();
bI.prototype.constructor = bI;
_=bI.prototype;
_.__type="LDSetFeedThumbnailRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
_.Feed=null;
_.BlobLinkString=null;
_.DecryptedHash=null;
function bJ(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
bJ.prototype=new b();
bJ.prototype.constructor = bJ;
_=bJ.prototype;
_.__type="LDSetFeedVideoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
_.Feed=null;
_.BlobLinkString=null;
_.DecryptedHash=null;
function bK(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
}
bK.prototype=new b();
bK.prototype.constructor = bK;
_=bK.prototype;
_.__type="LDSendRealtimeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Type!=null)o['t']=this.Type;
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	return o;
}
_.Feed=null;
_.Type=null;
_.Body=null;
function fE(e){
	b.call(this,e);
}
fE.prototype=new b();
fE.prototype.constructor = fE;
_=fE.prototype;
_.__type="LDClusterPartitionableRpcRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function bL(e){
	fE.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined)){
		this.Accounts=[];
		var d = e['a'];
		for(var k=0;k<d.length;++k)this.Accounts.push(d[k]);
	}
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
}
bL.prototype=new fE();
bL.prototype.constructor = bL;
_=bL.prototype;
_.__type="LDSendRealtimeToAccountsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	fE.prototype.encode.call(this,o);
	if(this.Accounts!=null) {
		o['a']=[];
		var d=this.Accounts;
		for(var k = 0; k < d.length; ++k) o['a'].push(d[k]);
	}
	if(this.Type!=null)o['t']=this.Type;
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	return o;
}
_.Accounts=null;
_.Type=null;
_.Body=null;
function bM(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.IdentityHash=new fF(e['i']);
	if(e&&(e['I']!==null&&e['I']!==undefined))this.Identity=new fw(e['I']);
}
bM.prototype=new b();
bM.prototype.constructor = bM;
_=bM.prototype;
_.__type="LDAddPendingInvitationRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.IdentityHash!=null)o['i']=this.IdentityHash.encode();
	if(this.Identity!=null)o['I']=this.Identity.encode();
	return o;
}
_.Feed=null;
_.IdentityHash=null;
_.Identity=null;
function bN(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.IdentityHash=new fF(e['i']);
}
bN.prototype=new b();
bN.prototype.constructor = bN;
_=bN.prototype;
_.__type="LDRemovePendingInvitationRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.IdentityHash!=null)o['i']=this.IdentityHash.encode();
	return o;
}
_.Feed=null;
_.IdentityHash=null;
function bO(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bO.prototype=new b();
bO.prototype.constructor = bO;
_=bO.prototype;
_.__type="LDGetJoinFeedLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bP(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
}
bP.prototype=new b();
bP.prototype.constructor = bP;
_=bP.prototype;
_.__type="LDJoinFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Pin!=null)o['p']=this.Pin;
	return o;
}
_.Feed=null;
_.Pin=null;
function bQ(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
}
bQ.prototype=new b();
bQ.prototype.constructor = bQ;
_=bQ.prototype;
_.__type="LDJoinBroadcastRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Pin!=null)o['p']=this.Pin;
	return o;
}
_.Feed=null;
_.Pin=null;
function bR(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.PubliclyReadable=e['r'];else this.PubliclyReadable=null;
	if(e&&(e['mr']!==null&&e['mr']!==undefined))this.MemberReadable=e['mr'];else this.MemberReadable=null;
	if(e&&(e['pw']!==null&&e['pw']!==undefined))this.PubliclyWritable=e['pw'];else this.PubliclyWritable=null;
	if(e&&(e['mw']!==null&&e['mw']!==undefined))this.MemberWritable=e['mw'];else this.MemberWritable=null;
	if(e&&(e['mfs']!==null&&e['mfs']!==undefined))this.MemberFeedSettingsModifiable=e['mfs'];else this.MemberFeedSettingsModifiable=null;
	if(e&&(e['mma']!==null&&e['mma']!==undefined))this.MemberMembersAddable=e['mma'];else this.MemberMembersAddable=null;
	if(e&&(e['mmr']!==null&&e['mmr']!==undefined))this.MemberMembersRemovable=e['mmr'];else this.MemberMembersRemovable=null;
}
bR.prototype=new b();
bR.prototype.constructor = bR;
_=bR.prototype;
_.__type="LDSetDefaultAccessRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.PubliclyReadable!=null)o['r']=this.PubliclyReadable;
	if(this.MemberReadable!=null)o['mr']=this.MemberReadable;
	if(this.PubliclyWritable!=null)o['pw']=this.PubliclyWritable;
	if(this.MemberWritable!=null)o['mw']=this.MemberWritable;
	if(this.MemberFeedSettingsModifiable!=null)o['mfs']=this.MemberFeedSettingsModifiable;
	if(this.MemberMembersAddable!=null)o['mma']=this.MemberMembersAddable;
	if(this.MemberMembersRemovable!=null)o['mmr']=this.MemberMembersRemovable;
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
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bS.prototype=new b();
bS.prototype.constructor = bS;
_=bS.prototype;
_.__type="LDGetPublicFeedDetailsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bT(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fC(e['i']);
	if(e&&(e['j']!==null&&e['j']!==undefined))this.Javascript=e['j'];else this.Javascript=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Parameters=e['p'];else this.Parameters=null;
}
bT.prototype=new b();
bT.prototype.constructor = bT;
_=bT.prototype;
_.__type="LDApplyDocumentTransformRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Javascript!=null)o['j']=this.Javascript;
	if(this.Parameters!=null)o['p']=this.Parameters;
	return o;
}
_.Feed=null;
_.Id=null;
_.Javascript=null;
_.Parameters=null;
function bU(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fG(e['m']);
}
bU.prototype=new b();
bU.prototype.constructor = bU;
_=bU.prototype;
_.__type="LDMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
_.Message=null;
function bV(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fH(e['m']);
}
bV.prototype=new b();
bV.prototype.constructor = bV;
_=bV.prototype;
_.__type="LDRealtimeMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
_.Message=null;
function bW(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bW.prototype=new b();
bW.prototype.constructor = bW;
_=bW.prototype;
_.__type="LDMessageTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bX(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
bX.prototype=new b();
bX.prototype.constructor = bX;
_=bX.prototype;
_.__type="LDGetFeedStateRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function bY(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Acceptance=e['s'];else this.Acceptance=null;
}
bY.prototype=new b();
bY.prototype.constructor = bY;
_=bY.prototype;
_.__type="LDSetFeedAcceptanceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Acceptance!=null)o['s']=this.Acceptance;
	return o;
}
_.Feed=null;
_.Acceptance=null;
function bZ(e){
	b.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Since=e['s'];else this.Since=null;
}
bZ.prototype=new b();
bZ.prototype.constructor = bZ;
_=bZ.prototype;
_.__type="LDGetDirtyFeedsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Since!=null)o['s']=this.Since;
	return o;
}
_.Since=null;
function c_(e){
	b.call(this,e);
}
c_.prototype=new b();
c_.prototype.constructor = c_;
_=c_.prototype;
_.__type="LDSubscribeForAccountInboxRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function ca(e){
	b.call(this,e);
}
ca.prototype=new b();
ca.prototype.constructor = ca;
_=ca.prototype;
_.__type="LDUnsubscribeForAccountInboxRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function cb(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PushKey=new fI(e['p']);
}
cb.prototype=new b();
cb.prototype.constructor = cb;
_=cb.prototype;
_.__type="LDRegisterPushNotificationKeyRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PushKey!=null)o['p']=this.PushKey.encode();
	return o;
}
_.PushKey=null;
function cc(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fG(e['m']);
}
cc.prototype=new b();
cc.prototype.constructor = cc;
_=cc.prototype;
_.__type="LDInboxDeliveryMessagePush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
_.Message=null;
function cd(e){
	b.call(this,e);
}
cd.prototype=new b();
cd.prototype.constructor = cd;
_=cd.prototype;
_.__type="LDInboxDeliveryTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function ce(e){
	b.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BadgeCount=e['b'];else this.BadgeCount=null;
}
ce.prototype=new b();
ce.prototype.constructor = ce;
_=ce.prototype;
_.__type="LDSetAppleBadgeCountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BadgeCount!=null)o['b']=this.BadgeCount;
	return o;
}
_.BadgeCount=null;
function cf(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Metadata=new fJ(e['m']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IsPermanent=e['p'];else this.IsPermanent=null;
	if(e&&(e['prt']!==null&&e['prt']!==undefined))this.PermanenceRefTag=new Buffer(e['prt'],'base64');
	if(e&&(e['e']!==null&&e['e']!==undefined))this.PreferInsecure=e['e'];else this.PreferInsecure=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.AllowLarge=e['l'];else this.AllowLarge=null;
}
cf.prototype=new b();
cf.prototype.constructor = cf;
_=cf.prototype;
_.__type="LDGetUploadTicketRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Cluster!=null)o['c']=this.Cluster;
	if(this.Metadata!=null)o['m']=this.Metadata.encode();
	if(this.IsPermanent!=null)o['p']=this.IsPermanent;
	if(this.PermanenceRefTag!=null)o['prt']=this.PermanenceRefTag.toString('base64');
	if(this.PreferInsecure!=null)o['e']=this.PreferInsecure;
	if(this.AllowLarge!=null)o['l']=this.AllowLarge;
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['wm']!==null&&e['wm']!==undefined))this.WholeMetadata=new fJ(e['wm']);
	if(e&&(e['pm']!==null&&e['pm']!==undefined)){
		this.PartMetadataList=[];
		var d = e['pm'];
		for(var k=0; k<d.length;++k)this.PartMetadataList.push(new fJ(d[k]));
	}
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IsPermanent=e['p'];else this.IsPermanent=null;
	if(e&&(e['prt']!==null&&e['prt']!==undefined))this.PermanenceRefTag=new Buffer(e['prt'],'base64');
	if(e&&(e['e']!==null&&e['e']!==undefined))this.PreferInsecure=e['e'];else this.PreferInsecure=null;
}
cg.prototype=new b();
cg.prototype.constructor = cg;
_=cg.prototype;
_.__type="LDGetMultipartUploadTicketRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Cluster!=null)o['c']=this.Cluster;
	if(this.WholeMetadata!=null)o['wm']=this.WholeMetadata.encode();
	if(this.PartMetadataList!=null) {
		o['pm']=[];
		var d=this.PartMetadataList;
		for(var k = 0; k < d.length; ++k) o['pm'].push(d[k].encode());
	}
	if(this.IsPermanent!=null)o['p']=this.IsPermanent;
	if(this.PermanenceRefTag!=null)o['prt']=this.PermanenceRefTag.toString('base64');
	if(this.PreferInsecure!=null)o['e']=this.PreferInsecure;
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
	if(e&&(e['ut']!==null&&e['ut']!==undefined))this.BlobUploadTicket=new fK(e['ut']);
}
ch.prototype=new b();
ch.prototype.constructor = ch;
_=ch.prototype;
_.__type="LDVerifyUploadCompletedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobUploadTicket!=null)o['ut']=this.BlobUploadTicket.encode();
	return o;
}
_.BlobUploadTicket=null;
function ci(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.BlobLinkString=e['l'];else this.BlobLinkString=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.PreferInsecure=e['e'];else this.PreferInsecure=null;
}
ci.prototype=new b();
ci.prototype.constructor = ci;
_=ci.prototype;
_.__type="LDGetDownloadTicketRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobLinkString!=null)o['l']=this.BlobLinkString;
	if(this.PreferInsecure!=null)o['e']=this.PreferInsecure;
	return o;
}
_.BlobLinkString=null;
_.PreferInsecure=null;
function cj(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.BlobLinkString=e['l'];else this.BlobLinkString=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IsPermanent=e['p'];else this.IsPermanent=null;
	if(e&&(e['prt']!==null&&e['prt']!==undefined))this.PermanenceRefTag=new Buffer(e['prt'],'base64');
}
cj.prototype=new b();
cj.prototype.constructor = cj;
_=cj.prototype;
_.__type="LDVerifyExistsAndPermanenceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobLinkString!=null)o['l']=this.BlobLinkString;
	if(this.IsPermanent!=null)o['p']=this.IsPermanent;
	if(this.PermanenceRefTag!=null)o['prt']=this.PermanenceRefTag.toString('base64');
	return o;
}
_.BlobLinkString=null;
_.IsPermanent=null;
_.PermanenceRefTag=null;
function ck(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactAccount=e['c'];else this.ContactAccount=null;
}
ck.prototype=new b();
ck.prototype.constructor = ck;
_=ck.prototype;
_.__type="LDOverwriteContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactAccount!=null)o['c']=this.ContactAccount;
	return o;
}
_.ContactAccount=null;
function cl(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactAccount=e['c'];else this.ContactAccount=null;
}
cl.prototype=new b();
cl.prototype.constructor = cl;
_=cl.prototype;
_.__type="LDRemoveContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactAccount!=null)o['c']=this.ContactAccount;
	return o;
}
_.ContactAccount=null;
function cm(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactDetails=new fL(e['c']);
}
cm.prototype=new b();
cm.prototype.constructor = cm;
_=cm.prototype;
_.__type="LDBlockContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactDetails!=null)o['c']=this.ContactDetails.encode();
	return o;
}
_.ContactDetails=null;
function cn(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactAccount=e['c'];else this.ContactAccount=null;
}
cn.prototype=new b();
cn.prototype.constructor = cn;
_=cn.prototype;
_.__type="LDUnblockContactRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactAccount!=null)o['c']=this.ContactAccount;
	return o;
}
_.ContactAccount=null;
function co(e){
	b.call(this,e);
}
co.prototype=new b();
co.prototype.constructor = co;
_=co.prototype;
_.__type="LDGetProfileDetailsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function cp(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
}
cp.prototype=new b();
cp.prototype.constructor = cp;
_=cp.prototype;
_.__type="LDSetProfileNameRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Name!=null)o['n']=this.Name;
	return o;
}
_.Name=null;
function cq(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
cq.prototype=new b();
cq.prototype.constructor = cq;
_=cq.prototype;
_.__type="LDSetProfilePictureRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
_.BlobLinkString=null;
_.DecryptedHash=null;
function cr(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
cr.prototype=new b();
cr.prototype.constructor = cr;
_=cr.prototype;
_.__type="LDSetProfileVideoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
_.BlobLinkString=null;
_.DecryptedHash=null;
function cs(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedAccount=e['c'];else this.RequestedAccount=null;
}
cs.prototype=new b();
cs.prototype.constructor = cs;
_=cs.prototype;
_.__type="LDGetOmletContactProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.RequestedAccount!=null)o['c']=this.RequestedAccount;
	return o;
}
_.RequestedAccount=null;
function ct(e){
	b.call(this,e);
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new fy(d[k]));
	}
	if(e&&(e['pd']!==null&&e['pd']!==undefined))this.PurchaseData=new fM(e['pd']);
}
ct.prototype=new b();
ct.prototype.constructor = ct;
_=ct.prototype;
_.__type="LDAddItemsToProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Items!=null) {
		o['i']=[];
		var d=this.Items;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	if(this.PurchaseData!=null)o['pd']=this.PurchaseData.encode();
	return o;
}
_.ItemType=null;
_.Items=null;
_.PurchaseData=null;
function cu(e){
	b.call(this,e);
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new fy(d[k]));
	}
}
cu.prototype=new b();
cu.prototype.constructor = cu;
_=cu.prototype;
_.__type="LDRemoveItemsFromProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Items!=null) {
		o['i']=[];
		var d=this.Items;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.ItemType=null;
_.Items=null;
function cv(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined)){
		this.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)this.Features.push(d[k]);
	}
}
cv.prototype=new b();
cv.prototype.constructor = cv;
_=cv.prototype;
_.__type="LDAddFeaturesToProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Features!=null) {
		o['f']=[];
		var d=this.Features;
		for(var k = 0; k < d.length; ++k) o['f'].push(d[k]);
	}
	return o;
}
_.Features=null;
function cw(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined)){
		this.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)this.Features.push(d[k]);
	}
}
cw.prototype=new b();
cw.prototype.constructor = cw;
_=cw.prototype;
_.__type="LDRemoveFeaturesFromProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Features!=null) {
		o['f']=[];
		var d=this.Features;
		for(var k = 0; k < d.length; ++k) o['f'].push(d[k]);
	}
	return o;
}
_.Features=null;
function cx(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedAccount=e['c'];else this.RequestedAccount=null;
}
cx.prototype=new b();
cx.prototype.constructor = cx;
_=cx.prototype;
_.__type="LDGetProfilePublicStateRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.RequestedAccount!=null)o['c']=this.RequestedAccount;
	return o;
}
_.RequestedAccount=null;
function cy(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedAccount=e['c'];else this.RequestedAccount=null;
}
cy.prototype=new b();
cy.prototype.constructor = cy;
_=cy.prototype;
_.__type="LDGetContactProfileAndPublicStateRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.RequestedAccount!=null)o['c']=this.RequestedAccount;
	return o;
}
_.RequestedAccount=null;
function cz(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.IdentityHashes=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.IdentityHashes.push(new fF(d[k]));
	}
}
cz.prototype=new b();
cz.prototype.constructor = cz;
_=cz.prototype;
_.__type="LDUploadAddressBookEntriesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.IdentityHashes!=null) {
		o['i']=[];
		var d=this.IdentityHashes;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.IdentityHashes=null;
function cA(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.IdentityHash=new fF(e['i']);
}
cA.prototype=new b();
cA.prototype.constructor = cA;
_=cA.prototype;
_.__type="LDGetContactProfileRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.IdentityHash!=null)o['i']=this.IdentityHash.encode();
	return o;
}
_.IdentityHash=null;
function cB(e){
	b.call(this,e);
}
cB.prototype=new b();
cB.prototype.constructor = cB;
_=cB.prototype;
_.__type="LDGetAddMeLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function cC(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
cC.prototype=new b();
cC.prototype.constructor = cC;
_=cC.prototype;
_.__type="LDMutualAddContactByTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
_.Account=null;
_.Token=null;
function cD(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=e['id'];else this.ItemId=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.ItemInfoUserMutableContainer=new fN(e['u']);
}
_=cD.prototype;
_.__type="LDCreateItemInfoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	if(this.ItemId!=null)o['id']=this.ItemId;
	if(this.ItemInfoUserMutableContainer!=null)o['u']=this.ItemInfoUserMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoUserMutableContainer=null;
function cE(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.ItemId=e['ai'];else this.ItemId=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.ItemInfoUserMutableContainer=new fN(e['u']);
}
_=cE.prototype;
_.__type="LDUserUpdateItemInfoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	if(this.ItemId!=null)o['ai']=this.ItemId;
	if(this.ItemInfoUserMutableContainer!=null)o['u']=this.ItemInfoUserMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoUserMutableContainer=null;
function cF(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=e['id'];else this.ItemId=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.ItemInfoSystemMutableContainer=new fO(e['u']);
}
_=cF.prototype;
_.__type="LDSystemUpdateItemInfoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	if(this.ItemId!=null)o['id']=this.ItemId;
	if(this.ItemInfoSystemMutableContainer!=null)o['u']=this.ItemInfoSystemMutableContainer.encode();
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
_.ItemInfoSystemMutableContainer=null;
function cG(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=new fy(e['id']);
}
_=cG.prototype;
_.__type="LDGetItemInfoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['id']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function cH(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fy(e['i']);
}
_=cH.prototype;
_.__type="LDReviewItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function cI(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fy(e['i']);
}
_=cI.prototype;
_.__type="LDPublishItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function cJ(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fy(e['i']);
}
_=cJ.prototype;
_.__type="LDUnpublishItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function cK(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=e['id'];else this.ItemId=null;
}
_=cK.prototype;
_.__type="LDDeleteItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	if(this.ItemId!=null)o['id']=this.ItemId;
	return o;
}
_.ItemType=null;
_.Account=null;
_.ItemId=null;
function cL(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
}
_=cL.prototype;
_.__type="LDListItemsForAccountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	return o;
}
_.ItemType=null;
_.Account=null;
function cM(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
_=cM.prototype;
_.__type="LDListAllItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.ItemType=null;
_.ContinuationKey=null;
function cN(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['lm']!==null&&e['lm']!==undefined))this.LastModified=e['lm'];else this.LastModified=null;
}
_=cN.prototype;
_.__type="LDListPublishedItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.LastModified!=null)o['lm']=this.LastModified;
	return o;
}
_.ItemType=null;
_.ContinuationKey=null;
_.LastModified=null;
function cO(e){
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.ItemId=new fy(e['ii']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.ExpirationTime=e['e'];else this.ExpirationTime=null;
}
_=cO.prototype;
_.__type="LDGenerateGrantForItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['ii']=this.ItemId.encode();
	if(this.ExpirationTime!=null)o['e']=this.ExpirationTime;
	return o;
}
_.ItemId=null;
_.ExpirationTime=null;
function cP(e){
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Grant=e['g'];else this.Grant=null;
}
_=cP.prototype;
_.__type="LDGetItemUsingGrantRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Grant!=null)o['g']=this.Grant;
	return o;
}
_.Grant=null;
function cQ(e){
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.ItemId=new fy(e['ii']);
}
_=cQ.prototype;
_.__type="LDDoesItemHaveGrantRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['ii']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function cR(e){
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.ItemId=new fy(e['ii']);
}
_=cR.prototype;
_.__type="LDDeleteGrantForItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['ii']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function cS(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=new fy(e['id']);
}
_=cS.prototype;
_.__type="LDGenerateApiKeyRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['id']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function cT(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ClientApiKeyId=new Buffer(e['id'],'base64');
}
_=cT.prototype;
_.__type="LDDeactivateApiKeyRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ClientApiKeyId!=null)o['id']=this.ClientApiKeyId.toString('base64');
	return o;
}
_.ClientApiKeyId=null;
function cU(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=new fy(e['id']);
}
_=cU.prototype;
_.__type="LDListApiKeysRequest";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['id']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function cV(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.PublicKey=new Buffer(e['k'],'base64');
}
cV.prototype=new b();
cV.prototype.constructor = cV;
_=cV.prototype;
_.__type="LDDeleteDeviceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PublicKey!=null)o['k']=this.PublicKey.toString('base64');
	return o;
}
_.PublicKey=null;
function cW(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.PublicKey=new Buffer(e['k'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
}
cW.prototype=new b();
cW.prototype.constructor = cW;
_=cW.prototype;
_.__type="LDAddDeviceRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PublicKey!=null)o['k']=this.PublicKey.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.Description!=null)o['d']=this.Description;
	return o;
}
_.PublicKey=null;
_.Version=null;
_.Description=null;
function cX(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.DingTimeoutMillis=e['t'];else this.DingTimeoutMillis=null;
}
cX.prototype=new b();
cX.prototype.constructor = cX;
_=cX.prototype;
_.__type="LDSetDingTimeoutRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.DingTimeoutMillis!=null)o['t']=this.DingTimeoutMillis;
	return o;
}
_.DingTimeoutMillis=null;
function cY(e){
	b.call(this,e);
}
cY.prototype=new b();
cY.prototype.constructor = cY;
_=cY.prototype;
_.__type="LDGetCloudConfigRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function cZ(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Config=new fP(e['c']);
}
cZ.prototype=new b();
cZ.prototype.constructor = cZ;
_=cZ.prototype;
_.__type="LDSetCloudConfigRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Config!=null)o['c']=this.Config.encode();
	return o;
}
_.Config=null;
function d_(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.DoNotTriggerSync=e['t'];else this.DoNotTriggerSync=null;
}
d_.prototype=new b();
d_.prototype.constructor = d_;
_=d_.prototype;
_.__type="LDRefreshCloudConfigRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.DoNotTriggerSync!=null)o['t']=this.DoNotTriggerSync;
	return o;
}
_.DoNotTriggerSync=null;
function da(e){
	b.call(this,e);
}
da.prototype=new b();
da.prototype.constructor = da;
_=da.prototype;
_.__type="LDDisconnectCloudSyncRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function db(e){
	b.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OptIn=e['o'];else this.OptIn=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ServerKicked=e['k'];else this.ServerKicked=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
db.prototype=new b();
db.prototype.constructor = db;
_=db.prototype;
_.__type="LDOptInForAllGamesChallengesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.OptIn!=null)o['o']=this.OptIn;
	if(this.ServerKicked!=null)o['k']=this.ServerKicked;
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
_.OptIn=null;
_.ServerKicked=null;
_.Account=null;
function dc(e){
	b.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameId=new fy(e['g']);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.Latitude=e['x'];else this.Latitude=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.Longitude=e['y'];else this.Longitude=null;
}
dc.prototype=new b();
dc.prototype.constructor = dc;
_=dc.prototype;
_.__type="LDFindGamersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.GameId!=null)o['g']=this.GameId.encode();
	if(this.Latitude!=null)o['x']=this.Latitude;
	if(this.Longitude!=null)o['y']=this.Longitude;
	return o;
}
_.GameId=null;
_.Latitude=null;
_.Longitude=null;
function dd(e){
	b.call(this,e);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.Latitude=e['x'];else this.Latitude=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.Longitude=e['y'];else this.Longitude=null;
}
dd.prototype=new b();
dd.prototype.constructor = dd;
_=dd.prototype;
_.__type="LDUpdateChallengeLocationRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Latitude!=null)o['x']=this.Latitude;
	if(this.Longitude!=null)o['y']=this.Longitude;
	return o;
}
_.Latitude=null;
_.Longitude=null;
function de(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fQ(e['i']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];else this.Score=null;
	if(e&&(e['x']!==null&&e['x']!==undefined))this.ChallengeRejected=e['x'];else this.ChallengeRejected=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.ChallengeeLocation=new fR(e['l']);
}
de.prototype=new b();
de.prototype.constructor = de;
_=de.prototype;
_.__type="LDGameChallengeCompleteRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Score!=null)o['s']=this.Score;
	if(this.ChallengeRejected!=null)o['x']=this.ChallengeRejected;
	if(this.ChallengeeLocation!=null)o['l']=this.ChallengeeLocation.encode();
	return o;
}
_.Id=null;
_.Score=null;
_.ChallengeRejected=null;
_.ChallengeeLocation=null;
function df(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fQ(e['i']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.ReceiverAccount=e['r'];else this.ReceiverAccount=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameId=new fy(e['g']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];else this.Score=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.GameState=e['t'];else this.GameState=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Location=new fR(e['l']);
}
df.prototype=new b();
df.prototype.constructor = df;
_=df.prototype;
_.__type="LDExtendChallengeRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.ReceiverAccount!=null)o['r']=this.ReceiverAccount;
	if(this.GameId!=null)o['g']=this.GameId.encode();
	if(this.Score!=null)o['s']=this.Score;
	if(this.GameState!=null)o['t']=this.GameState;
	if(this.Location!=null)o['l']=this.Location.encode();
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameId=new fy(e['g']);
}
dg.prototype=new b();
dg.prototype.constructor = dg;
_=dg.prototype;
_.__type="LDCheckAccountOptedInRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.GameId!=null)o['g']=this.GameId.encode();
	return o;
}
_.Account=null;
_.GameId=null;
function dh(e){
	b.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OptIn=e['o'];else this.OptIn=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ServerKicked=e['k'];else this.ServerKicked=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Game=new fy(e['g']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.All=e['l'];else this.All=null;
}
dh.prototype=new b();
dh.prototype.constructor = dh;
_=dh.prototype;
_.__type="LDOptInForGSChallengesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.OptIn!=null)o['o']=this.OptIn;
	if(this.ServerKicked!=null)o['k']=this.ServerKicked;
	if(this.Game!=null)o['g']=this.Game.encode();
	if(this.Account!=null)o['a']=this.Account;
	if(this.All!=null)o['l']=this.All;
	return o;
}
_.OptIn=null;
_.ServerKicked=null;
_.Game=null;
_.Account=null;
_.All=null;
function di(e){
	b.call(this,e);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.Latitude=e['x'];else this.Latitude=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.Longitude=e['y'];else this.Longitude=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameId=new fy(e['g']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Tier=e['t'];else this.Tier=null;
}
di.prototype=new b();
di.prototype.constructor = di;
_=di.prototype;
_.__type="LDFindGamersGSRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Latitude!=null)o['x']=this.Latitude;
	if(this.Longitude!=null)o['y']=this.Longitude;
	if(this.GameId!=null)o['g']=this.GameId.encode();
	if(this.Tier!=null)o['t']=this.Tier;
	return o;
}
_.Latitude=null;
_.Longitude=null;
_.GameId=null;
_.Tier=null;
function dj(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLinkString=e['p'];else this.ProfilePictureLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.CanRead=e['r'];else this.CanRead=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
dj.prototype=new b();
dj.prototype.constructor = dj;
_=dj.prototype;
_.__type="LDCreateSubscriptionRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Name!=null)o['n']=this.Name;
	if(this.ProfilePictureLinkString!=null)o['p']=this.ProfilePictureLinkString;
	if(this.ProfileDecryptedHash!=null)o['d']=this.ProfileDecryptedHash.toString('base64');
	if(this.Type!=null)o['t']=this.Type;
	if(this.CanRead!=null)o['r']=this.CanRead;
	if(this.Feed!=null)o['f']=this.Feed.encode();
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
	if(e&&(e['id']!==null&&e['id']!==undefined))this.GameId=new fy(e['id']);
	if(e&&(e['sb']!==null&&e['sb']!==undefined))this.GameScoreboard=e['sb'];else this.GameScoreboard=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['la']!==null&&e['la']!==undefined))this.Latitude=e['la'];else this.Latitude=null;
	if(e&&(e['lo']!==null&&e['lo']!==undefined))this.Longitude=e['lo'];else this.Longitude=null;
	if(e&&(e['sc']!==null&&e['sc']!==undefined))this.SimilarScoresInCity=e['sc'];else this.SimilarScoresInCity=null;
	if(e&&(e['su']!==null&&e['su']!==undefined))this.SimilarScoresInCountry=e['su'];else this.SimilarScoresInCountry=null;
	if(e&&(e['st']!==null&&e['st']!==undefined))this.SimilarScoresInContinent=e['st'];else this.SimilarScoresInContinent=null;
	if(e&&(e['sg']!==null&&e['sg']!==undefined))this.SimilarScoresGlobal=e['sg'];else this.SimilarScoresGlobal=null;
	if(e&&(e['sl']!==null&&e['sl']!==undefined))this.SimilarScoresLocal=e['sl'];else this.SimilarScoresLocal=null;
}
dk.prototype=new b();
dk.prototype.constructor = dk;
_=dk.prototype;
_.__type="LDGetHighScoreRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.GameId!=null)o['id']=this.GameId.encode();
	if(this.GameScoreboard!=null)o['sb']=this.GameScoreboard;
	if(this.Account!=null)o['a']=this.Account;
	if(this.Latitude!=null)o['la']=this.Latitude;
	if(this.Longitude!=null)o['lo']=this.Longitude;
	if(this.SimilarScoresInCity!=null)o['sc']=this.SimilarScoresInCity;
	if(this.SimilarScoresInCountry!=null)o['su']=this.SimilarScoresInCountry;
	if(this.SimilarScoresInContinent!=null)o['st']=this.SimilarScoresInContinent;
	if(this.SimilarScoresGlobal!=null)o['sg']=this.SimilarScoresGlobal;
	if(this.SimilarScoresLocal!=null)o['sl']=this.SimilarScoresLocal;
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
	if(e&&(e['id']!==null&&e['id']!==undefined))this.GameId=new fy(e['id']);
	if(e&&(e['sb']!==null&&e['sb']!==undefined))this.GameScoreboard=e['sb'];else this.GameScoreboard=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];else this.Score=null;
	if(e&&(e['la']!==null&&e['la']!==undefined))this.Latitude=e['la'];else this.Latitude=null;
	if(e&&(e['lo']!==null&&e['lo']!==undefined))this.Longitude=e['lo'];else this.Longitude=null;
	if(e&&(e['sc']!==null&&e['sc']!==undefined))this.SimilarScoresInCity=e['sc'];else this.SimilarScoresInCity=null;
	if(e&&(e['su']!==null&&e['su']!==undefined))this.SimilarScoresInCountry=e['su'];else this.SimilarScoresInCountry=null;
	if(e&&(e['st']!==null&&e['st']!==undefined))this.SimilarScoresInContinent=e['st'];else this.SimilarScoresInContinent=null;
	if(e&&(e['sg']!==null&&e['sg']!==undefined))this.SimilarScoresGlobal=e['sg'];else this.SimilarScoresGlobal=null;
	if(e&&(e['sl']!==null&&e['sl']!==undefined))this.SimilarScoresLocal=e['sl'];else this.SimilarScoresLocal=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dl.prototype=new b();
dl.prototype.constructor = dl;
_=dl.prototype;
_.__type="LDReportScoreRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.GameId!=null)o['id']=this.GameId.encode();
	if(this.GameScoreboard!=null)o['sb']=this.GameScoreboard;
	if(this.Score!=null)o['s']=this.Score;
	if(this.Latitude!=null)o['la']=this.Latitude;
	if(this.Longitude!=null)o['lo']=this.Longitude;
	if(this.SimilarScoresInCity!=null)o['sc']=this.SimilarScoresInCity;
	if(this.SimilarScoresInCountry!=null)o['su']=this.SimilarScoresInCountry;
	if(this.SimilarScoresInContinent!=null)o['st']=this.SimilarScoresInContinent;
	if(this.SimilarScoresGlobal!=null)o['sg']=this.SimilarScoresGlobal;
	if(this.SimilarScoresLocal!=null)o['sl']=this.SimilarScoresLocal;
	if(this.Account!=null)o['a']=this.Account;
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
	if(e&&(e['id']!==null&&e['id']!==undefined))this.GameId=new fy(e['id']);
	if(e&&(e['sb']!==null&&e['sb']!==undefined))this.GameScoreboard=e['sb'];else this.GameScoreboard=null;
	if(e&&(e['la']!==null&&e['la']!==undefined))this.Latitude=e['la'];else this.Latitude=null;
	if(e&&(e['lo']!==null&&e['lo']!==undefined))this.Longitude=e['lo'];else this.Longitude=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NumScores=e['n'];else this.NumScores=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LocationType=e['l'];else this.LocationType=null;
}
dm.prototype=new b();
dm.prototype.constructor = dm;
_=dm.prototype;
_.__type="LDGetTopScoresRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.GameId!=null)o['id']=this.GameId.encode();
	if(this.GameScoreboard!=null)o['sb']=this.GameScoreboard;
	if(this.Latitude!=null)o['la']=this.Latitude;
	if(this.Longitude!=null)o['lo']=this.Longitude;
	if(this.NumScores!=null)o['n']=this.NumScores;
	if(this.LocationType!=null)o['l']=this.LocationType;
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
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Item=new fS(e['i']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Ttl=e['e'];else this.Ttl=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Latitude=e['a'];else this.Latitude=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];else this.Longitude=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Radius=e['r'];else this.Radius=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Country=e['c'];else this.Country=null;
}
dn.prototype=new b();
dn.prototype.constructor = dn;
_=dn.prototype;
_.__type="LDBroadcastItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Item!=null)o['i']=this.Item.encode();
	if(this.Pin!=null)o['p']=this.Pin;
	if(this.Ttl!=null)o['e']=this.Ttl;
	if(this.Latitude!=null)o['a']=this.Latitude;
	if(this.Longitude!=null)o['g']=this.Longitude;
	if(this.Radius!=null)o['r']=this.Radius;
	if(this.Country!=null)o['c']=this.Country;
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
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Item=new fS(e['i']);
}
dp.prototype=new b();
dp.prototype.constructor = dp;
_=dp.prototype;
_.__type="LDUnbroadcastItemRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Item!=null)o['i']=this.Item.encode();
	return o;
}
_.Item=null;
function dq(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ItemType=e['t'];else this.ItemType=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Ttl=e['e'];else this.Ttl=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Latitude=e['a'];else this.Latitude=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];else this.Longitude=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Radius=e['r'];else this.Radius=null;
}
dq.prototype=new b();
dq.prototype.constructor = dq;
_=dq.prototype;
_.__type="LDSubscribeForNearbyItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemType!=null)o['t']=this.ItemType;
	if(this.Ttl!=null)o['e']=this.Ttl;
	if(this.Latitude!=null)o['a']=this.Latitude;
	if(this.Longitude!=null)o['g']=this.Longitude;
	if(this.Radius!=null)o['r']=this.Radius;
	return o;
}
_.ItemType=null;
_.Ttl=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
function dr(e){
	b.call(this,e);
}
dr.prototype=new b();
dr.prototype.constructor = dr;
_=dr.prototype;
_.__type="LDUnsubscribeForNearbyItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function ds(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ItemType=e['t'];else this.ItemType=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Latitude=e['a'];else this.Latitude=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];else this.Longitude=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Radius=e['r'];else this.Radius=null;
}
ds.prototype=new b();
ds.prototype.constructor = ds;
_=ds.prototype;
_.__type="LDFetchNearbyItemsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemType!=null)o['t']=this.ItemType;
	if(this.Latitude!=null)o['a']=this.Latitude;
	if(this.Longitude!=null)o['g']=this.Longitude;
	if(this.Radius!=null)o['r']=this.Radius;
	return o;
}
_.ItemType=null;
_.Latitude=null;
_.Longitude=null;
_.Radius=null;
function dt(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Item=new fS(e['i']);
}
dt.prototype=new b();
dt.prototype.constructor = dt;
_=dt.prototype;
_.__type="LDItemBroadcastStateChangedPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Item!=null)o['i']=this.Item.encode();
	return o;
}
_.Item=null;
function du(e){
	b.call(this,e);
}
du.prototype=new b();
du.prototype.constructor = du;
_=du.prototype;
_.__type="LDSubscriptionTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dv(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Url=e['l'];else this.Url=null;
}
dv.prototype=new b();
dv.prototype.constructor = dv;
_=dv.prototype;
_.__type="LDUrlToStoryRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Url!=null)o['l']=this.Url;
	return o;
}
_.Url=null;
function dw(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Term=e['t'];else this.Term=null;
}
dw.prototype=new b();
dw.prototype.constructor = dw;
_=dw.prototype;
_.__type="LDImageSearchRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Term!=null)o['t']=this.Term;
	return o;
}
_.Term=null;
function dx(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Failure=e['t'];else this.Failure=null;
}
dx.prototype=new b();
dx.prototype.constructor = dx;
_=dx.prototype;
_.__type="LDFailureReportRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Failure!=null)o['t']=this.Failure;
	return o;
}
_.Failure=null;
function dy(e){
	b.call(this,e);
	if(e&&(e['e']!==null&&e['e']!==undefined)){
		this.Events=[];
		var d = e['e'];
		for(var k=0; k<d.length;++k)this.Events.push(new fT(d[k]));
	}
}
dy.prototype=new b();
dy.prototype.constructor = dy;
_=dy.prototype;
_.__type="LDEventReportRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Events!=null) {
		o['e']=[];
		var d=this.Events;
		for(var k = 0; k < d.length; ++k) o['e'].push(d[k].encode());
	}
	return o;
}
_.Events=null;
function dz(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Reason=e['r'];else this.Reason=null;
}
dz.prototype=new b();
dz.prototype.constructor = dz;
_=dz.prototype;
_.__type="LDFlagUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Reason!=null)o['r']=this.Reason;
	return o;
}
_.Account=null;
_.Reason=null;
function dA(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
}
dA.prototype=new b();
dA.prototype.constructor = dA;
_=dA.prototype;
_.__type="LDCreatePlaygroundRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Type!=null)o['t']=this.Type;
	return o;
}
_.Type=null;
function dB(e){
	b.call(this,e);
}
dB.prototype=new b();
dB.prototype.constructor = dB;
_=dB.prototype;
_.__type="LDGetFeedbackAccountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dC(e){
	b.call(this,e);
}
dC.prototype=new b();
dC.prototype.constructor = dC;
_=dC.prototype;
_.__type="LDGetExtraVersionsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dD(e){
	b.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Sender=new fw(e['s']);
	if(e&&(e['r']!==null&&e['r']!==undefined)){
		this.Recipients=[];
		var d = e['r'];
		for(var k=0; k<d.length;++k)this.Recipients.push(new fw(d[k]));
	}
	if(e&&(e['k']!==null&&e['k']!==undefined))this.FeedKind=e['k'];else this.FeedKind=null;
}
dD.prototype=new b();
dD.prototype.constructor = dD;
_=dD.prototype;
_.__type="LDGetDirectFeedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Sender!=null)o['s']=this.Sender.encode();
	if(this.Recipients!=null) {
		o['r']=[];
		var d=this.Recipients;
		for(var k = 0; k < d.length; ++k) o['r'].push(d[k].encode());
	}
	if(this.FeedKind!=null)o['k']=this.FeedKind;
	return o;
}
_.Sender=null;
_.Recipients=null;
_.FeedKind=null;
function dE(e){
	b.call(this,e);
	if(e&&(e['_f']!==null&&e['_f']!==undefined))this.Feed=new aw(e['_f']);
	if(e&&(e['_a']!==null&&e['_a']!==undefined)){
		this.Accounts=[];
		var d = e['_a'];
		for(var k=0;k<d.length;++k)this.Accounts.push(d[k]);
	}
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Sender=new fw(e['s']);
	if(e&&(e['r']!==null&&e['r']!==undefined)){
		this.Recipients=[];
		var d = e['r'];
		for(var k=0; k<d.length;++k)this.Recipients.push(new fw(d[k]));
	}
	if(e&&(e['k']!==null&&e['k']!==undefined))this.FeedKind=e['k'];else this.FeedKind=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fC(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.AnyMemberWritable=e['w'];else this.AnyMemberWritable=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.SmsId=e['d'];else this.SmsId=null;
}
dE.prototype=new b();
dE.prototype.constructor = dE;
_=dE.prototype;
_.__type="LDSendDirectMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['_f']=this.Feed.encode();
	if(this.Accounts!=null) {
		o['_a']=[];
		var d=this.Accounts;
		for(var k = 0; k < d.length; ++k) o['_a'].push(d[k]);
	}
	if(this.Sender!=null)o['s']=this.Sender.encode();
	if(this.Recipients!=null) {
		o['r']=[];
		var d=this.Recipients;
		for(var k = 0; k < d.length; ++k) o['r'].push(d[k].encode());
	}
	if(this.FeedKind!=null)o['k']=this.FeedKind;
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.AnyMemberWritable!=null)o['w']=this.AnyMemberWritable;
	if(this.SmsId!=null)o['d']=this.SmsId;
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
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OptOut=e['o'];else this.OptOut=null;
}
dF.prototype=new b();
dF.prototype.constructor = dF;
_=dF.prototype;
_.__type="LDSetSmsParticipationRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.OptOut!=null)o['o']=this.OptOut;
	return o;
}
_.OptOut=null;
function fU(e){
	b.call(this,e);
	if(e&&(e['ap']!==null&&e['ap']!==undefined))this.AppName=e['ap'];else this.AppName=null;
	if(e&&(e['ab']!==null&&e['ab']!==undefined))this.AppIconBlobLink=e['ab'];else this.AppIconBlobLink=null;
	if(e&&(e['rm']!==null&&e['rm']!==undefined)){
		this.ReportMeta = {};
		var d = e['rm'];
		for(var k in d) this.ReportMeta[k]=d[k];
	}
}
fU.prototype=new b();
fU.prototype.constructor = fU;
_=fU.prototype;
_.__type="LDPostBaseRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppName!=null)o['ap']=this.AppName;
	if(this.AppIconBlobLink!=null)o['ab']=this.AppIconBlobLink;
	if(this.ReportMeta!=null){
		o['rm']={};
		var d=this.ReportMeta;
		for(var k in d)o['rm'][k]=d[k];
	}
	return o;
}
_.AppName=null;
_.AppIconBlobLink=null;
_.ReportMeta=null;
function dG(e){
	fU.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlobLinkString=e['b'];else this.BlobLinkString=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.VideoBlobRefTag=new Buffer(e['r'],'base64');
	if(e&&(e['dr']!==null&&e['dr']!==undefined))this.Duration=e['dr'];else this.Duration=null;
	if(e&&(e['B']!==null&&e['B']!==undefined))this.ThumbnailBlobLinkString=e['B'];else this.ThumbnailBlobLinkString=null;
	if(e&&(e['H']!==null&&e['H']!==undefined))this.Height=e['H'];else this.Height=null;
	if(e&&(e['W']!==null&&e['W']!==undefined))this.Width=e['W'];else this.Width=null;
	if(e&&(e['pt']!==null&&e['pt']!==undefined))this.PrimaryTag=new fV(e['pt']);
	if(e&&(e['st']!==null&&e['st']!==undefined)){
		this.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)this.SecondaryTags.push(new fV(d[k]));
	}
}
dG.prototype=new fU();
dG.prototype.constructor = dG;
_=dG.prototype;
_.__type="LDPostVideoRequest";
_.encode=function(o){
	if(o===undefined)o={};
	fU.prototype.encode.call(this,o);
	if(this.Title!=null)o['t']=this.Title;
	if(this.Description!=null)o['d']=this.Description;
	if(this.BlobLinkString!=null)o['b']=this.BlobLinkString;
	if(this.VideoBlobRefTag!=null)o['r']=this.VideoBlobRefTag.toString('base64');
	if(this.Duration!=null)o['dr']=this.Duration;
	if(this.ThumbnailBlobLinkString!=null)o['B']=this.ThumbnailBlobLinkString;
	if(this.Height!=null)o['H']=this.Height;
	if(this.Width!=null)o['W']=this.Width;
	if(this.PrimaryTag!=null)o['pt']=this.PrimaryTag.encode();
	if(this.SecondaryTags!=null) {
		o['st']=[];
		var d=this.SecondaryTags;
		for(var k = 0; k < d.length; ++k) o['st'].push(d[k].encode());
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
function dH(e){
	fU.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=e['m'];else this.Message=null;
	if(e&&(e['pt']!==null&&e['pt']!==undefined))this.PrimaryTag=new fV(e['pt']);
	if(e&&(e['st']!==null&&e['st']!==undefined)){
		this.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)this.SecondaryTags.push(new fV(d[k]));
	}
}
dH.prototype=new fU();
dH.prototype.constructor = dH;
_=dH.prototype;
_.__type="LDPostMessageRequest";
_.encode=function(o){
	if(o===undefined)o={};
	fU.prototype.encode.call(this,o);
	if(this.Title!=null)o['t']=this.Title;
	if(this.Message!=null)o['m']=this.Message;
	if(this.PrimaryTag!=null)o['pt']=this.PrimaryTag.encode();
	if(this.SecondaryTags!=null) {
		o['st']=[];
		var d=this.SecondaryTags;
		for(var k = 0; k < d.length; ++k) o['st'].push(d[k].encode());
	}
	return o;
}
_.Title=null;
_.Message=null;
_.PrimaryTag=null;
_.SecondaryTags=null;
function dI(e){
	fU.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlobLinkString=e['b'];else this.BlobLinkString=null;
	if(e&&(e['tn']!==null&&e['tn']!==undefined))this.ThumbnailLinkString=e['tn'];else this.ThumbnailLinkString=null;
	if(e&&(e['pt']!==null&&e['pt']!==undefined))this.PrimaryTag=new fV(e['pt']);
	if(e&&(e['st']!==null&&e['st']!==undefined)){
		this.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)this.SecondaryTags.push(new fV(d[k]));
	}
	if(e&&(e['W']!==null&&e['W']!==undefined))this.Width=e['W'];else this.Width=null;
	if(e&&(e['H']!==null&&e['H']!==undefined))this.Height=e['H'];else this.Height=null;
}
dI.prototype=new fU();
dI.prototype.constructor = dI;
_=dI.prototype;
_.__type="LDPostScreenShotRequest";
_.encode=function(o){
	if(o===undefined)o={};
	fU.prototype.encode.call(this,o);
	if(this.Title!=null)o['t']=this.Title;
	if(this.Description!=null)o['d']=this.Description;
	if(this.BlobLinkString!=null)o['b']=this.BlobLinkString;
	if(this.ThumbnailLinkString!=null)o['tn']=this.ThumbnailLinkString;
	if(this.PrimaryTag!=null)o['pt']=this.PrimaryTag.encode();
	if(this.SecondaryTags!=null) {
		o['st']=[];
		var d=this.SecondaryTags;
		for(var k = 0; k < d.length; ++k) o['st'].push(d[k].encode());
	}
	if(this.Width!=null)o['W']=this.Width;
	if(this.Height!=null)o['H']=this.Height;
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
function dJ(e){
	b.call(this,e);
	if(e&&(e['ud']!==null&&e['ud']!==undefined))this.PostId=new fW(e['ud']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Like=e['l'];else this.Like=null;
}
dJ.prototype=new b();
dJ.prototype.constructor = dJ;
_=dJ.prototype;
_.__type="LDLikePostRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['ud']=this.PostId.encode();
	if(this.Like!=null)o['l']=this.Like;
	return o;
}
_.PostId=null;
_.Like=null;
function dK(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fW(e['id']);
}
dK.prototype=new b();
dK.prototype.constructor = dK;
_=dK.prototype;
_.__type="LDAddViewRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	return o;
}
_.PostId=null;
function dL(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AccountToFollow=e['a'];else this.AccountToFollow=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Follow=e['f'];else this.Follow=null;
}
dL.prototype=new b();
dL.prototype.constructor = dL;
_=dL.prototype;
_.__type="LDFollowUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AccountToFollow!=null)o['a']=this.AccountToFollow;
	if(this.Follow!=null)o['f']=this.Follow;
	return o;
}
_.AccountToFollow=null;
_.Follow=null;
function dM(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['n']!==null&&e['n']!==undefined))this.PostsToGet=e['n'];else this.PostsToGet=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.After=e['t'];else this.After=null;
}
dM.prototype=new b();
dM.prototype.constructor = dM;
_=dM.prototype;
_.__type="LDGetUserWallRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.PostsToGet!=null)o['n']=this.PostsToGet;
	if(this.After!=null)o['t']=this.After;
	return o;
}
_.Account=null;
_.ContinuationKey=null;
_.PostsToGet=null;
_.After=null;
function dN(e){
	b.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameTag=e['g'];else this.GameTag=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.SecondTag=new fV(e['t']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['n']!==null&&e['n']!==undefined))this.PostsToGet=e['n'];else this.PostsToGet=null;
}
dN.prototype=new b();
dN.prototype.constructor = dN;
_=dN.prototype;
_.__type="LDGetGameWallRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.GameTag!=null)o['g']=this.GameTag;
	if(this.SecondTag!=null)o['t']=this.SecondTag.encode();
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.PostsToGet!=null)o['n']=this.PostsToGet;
	return o;
}
_.GameTag=null;
_.SecondTag=null;
_.ContinuationKey=null;
_.PostsToGet=null;
function dO(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
dO.prototype=new b();
dO.prototype.constructor = dO;
_=dO.prototype;
_.__type="LDGetFollowingWallRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.ContinuationKey=null;
function dP(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fW(e['id']);
}
dP.prototype=new b();
dP.prototype.constructor = dP;
_=dP.prototype;
_.__type="LDGetPostRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	return o;
}
_.PostId=null;
function dQ(e){
	b.call(this,e);
}
dQ.prototype=new b();
dQ.prototype.constructor = dQ;
_=dQ.prototype;
_.__type="LDGetStandardPostTagsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dR(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NumToGet=e['n'];else this.NumToGet=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
dR.prototype=new b();
dR.prototype.constructor = dR;
_=dR.prototype;
_.__type="LDGetFollowersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.NumToGet!=null)o['n']=this.NumToGet;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.Account=null;
_.NumToGet=null;
_.ContinuationKey=null;
function dS(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NumToGet=e['n'];else this.NumToGet=null;
}
dS.prototype=new b();
dS.prototype.constructor = dS;
_=dS.prototype;
_.__type="LDGetAccountsFollowedRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.NumToGet!=null)o['n']=this.NumToGet;
	return o;
}
_.Account=null;
_.ContinuationKey=null;
_.NumToGet=null;
function dT(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fW(e['id']);
}
dT.prototype=new b();
dT.prototype.constructor = dT;
_=dT.prototype;
_.__type="LDDeletePostRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	return o;
}
_.PostId=null;
function dU(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fW(e['id']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NumToGet=e['n'];else this.NumToGet=null;
}
dU.prototype=new b();
dU.prototype.constructor = dU;
_=dU.prototype;
_.__type="LDGetExternalShareLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.NumToGet!=null)o['n']=this.NumToGet;
	return o;
}
_.PostId=null;
_.ContinuationKey=null;
_.NumToGet=null;
function dV(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dV.prototype=new b();
dV.prototype.constructor = dV;
_=dV.prototype;
_.__type="LDCheckFollowingRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
_.Account=null;
function dW(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dW.prototype=new b();
dW.prototype.constructor = dW;
_=dW.prototype;
_.__type="LDGetFollowerCountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
_.Account=null;
function dX(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dX.prototype=new b();
dX.prototype.constructor = dX;
_=dX.prototype;
_.__type="LDGetFollowingCountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
_.Account=null;
function dY(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dY.prototype=new b();
dY.prototype.constructor = dY;
_=dY.prototype;
_.__type="LDGetUserWallPostCountRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
_.Account=null;
function dZ(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fy(e['i']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
dZ.prototype=new b();
dZ.prototype.constructor = dZ;
_=dZ.prototype;
_.__type="LDGetPackagePostsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	if(this.PackageId!=null)o['p']=this.PackageId;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.ItemId=null;
_.PackageId=null;
_.ContinuationKey=null;
function e_(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.PostId=new fW(e['i']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=e['m'];else this.Message=null;
	if(e&&(e['st']!==null&&e['st']!==undefined)){
		this.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)this.SecondaryTags.push(new fV(d[k]));
	}
}
e_.prototype=new b();
e_.prototype.constructor = e_;
_=e_.prototype;
_.__type="LDUpdatePostDetailsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['i']=this.PostId.encode();
	if(this.Title!=null)o['t']=this.Title;
	if(this.Description!=null)o['d']=this.Description;
	if(this.Message!=null)o['m']=this.Message;
	if(this.SecondaryTags!=null) {
		o['st']=[];
		var d=this.SecondaryTags;
		for(var k = 0; k < d.length; ++k) o['st'].push(d[k].encode());
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
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fy(e['i']);
}
ea.prototype=new b();
ea.prototype.constructor = ea;
_=ea.prototype;
_.__type="LDGetPackagesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function eb(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PostId=new fW(e['p']);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameTag=e['g'];else this.GameTag=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
eb.prototype=new b();
eb.prototype.constructor = eb;
_=eb.prototype;
_.__type="LDGetRecommendedWallRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['p']=this.PostId.encode();
	if(this.GameTag!=null)o['g']=this.GameTag;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.PostId=null;
_.GameTag=null;
_.ContinuationKey=null;
function ec(e){
	b.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ScopeString=e['s'];else this.ScopeString=null;
}
ec.prototype=new b();
ec.prototype.constructor = ec;
_=ec.prototype;
_.__type="LDGetIdentityTokenRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ScopeString!=null)o['s']=this.ScopeString;
	return o;
}
_.ScopeString=null;
function ed(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.AppId=new Buffer(e['id'],'base64');
	if(e&&(e['pid']!==null&&e['pid']!==undefined))this.PackageId=e['pid'];else this.PackageId=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.LobbyName=e['n'];else this.LobbyName=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Stripe=e['s'];else this.Stripe=null;
	if(e&&(e['gt']!==null&&e['gt']!==undefined))this.Longitude=e['gt'];else this.Longitude=null;
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.Latitude=e['gp'];else this.Latitude=null;
}
ed.prototype=new b();
ed.prototype.constructor = ed;
_=ed.prototype;
_.__type="LDGetPublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppId!=null)o['id']=this.AppId.toString('base64');
	if(this.PackageId!=null)o['pid']=this.PackageId;
	if(this.LobbyName!=null)o['n']=this.LobbyName;
	if(this.Cluster!=null)o['c']=this.Cluster;
	if(this.Stripe!=null)o['s']=this.Stripe;
	if(this.Longitude!=null)o['gt']=this.Longitude;
	if(this.Latitude!=null)o['gp']=this.Latitude;
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
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.DisplayName=e['n'];else this.DisplayName=null;
}
ee.prototype=new b();
ee.prototype.constructor = ee;
_=ee.prototype;
_.__type="LDJoinPublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.DisplayName!=null)o['n']=this.DisplayName;
	return o;
}
_.Feed=null;
_.DisplayName=null;
function ef(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Nonce=new Buffer(e['n'],'base64');
}
ef.prototype=new b();
ef.prototype.constructor = ef;
_=ef.prototype;
_.__type="LDLeavePublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Nonce!=null)o['n']=this.Nonce.toString('base64');
	return o;
}
_.Feed=null;
_.Nonce=null;
function eg(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['tid']!==null&&e['tid']!==undefined))this.TypedId=new fC(e['tid']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Delete=e['d'];else this.Delete=null;
}
eg.prototype=new b();
eg.prototype.constructor = eg;
_=eg.prototype;
_.__type="LDWriteToPublicChatRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.TypedId!=null)o['tid']=this.TypedId.encode();
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.Delete!=null)o['d']=this.Delete;
	return o;
}
_.Feed=null;
_.TypedId=null;
_.Body=null;
_.Delete=null;
function eh(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
eh.prototype=new b();
eh.prototype.constructor = eh;
_=eh.prototype;
_.__type="LDGetPublicChatMembersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function ei(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
}
ei.prototype=new b();
ei.prototype.constructor = ei;
_=ei.prototype;
_.__type="LDGetRecentMessagesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	return o;
}
_.Feed=null;
_.Timestamp=null;
function ej(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AppId=new Buffer(e['a'],'base64');
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['gt']!==null&&e['gt']!==undefined))this.Longitude=e['gt'];else this.Longitude=null;
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.Latitude=e['gp'];else this.Latitude=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ForwardingStage=e['f'];else this.ForwardingStage=null;
}
ej.prototype=new b();
ej.prototype.constructor = ej;
_=ej.prototype;
_.__type="LDListLiveChatsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppId!=null)o['a']=this.AppId.toString('base64');
	if(this.PackageId!=null)o['p']=this.PackageId;
	if(this.Longitude!=null)o['gt']=this.Longitude;
	if(this.Latitude!=null)o['gp']=this.Latitude;
	if(this.ForwardingStage!=null)o['f']=this.ForwardingStage;
	return o;
}
_.AppId=null;
_.PackageId=null;
_.Longitude=null;
_.Latitude=null;
_.ForwardingStage=null;
function ek(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AppId=new Buffer(e['a'],'base64');
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['gt']!==null&&e['gt']!==undefined))this.Longitude=e['gt'];else this.Longitude=null;
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.Latitude=e['gp'];else this.Latitude=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ForwardingStage=e['f'];else this.ForwardingStage=null;
	if(e&&(e['fa']!==null&&e['fa']!==undefined))this.ForAppScopeId=e['fa'];else this.ForAppScopeId=null;
	if(e&&(e['fc']!==null&&e['fc']!==undefined))this.ForCountry=e['fc'];else this.ForCountry=null;
	if(e&&(e['fy']!==null&&e['fy']!==undefined))this.ForCity=e['fy'];else this.ForCity=null;
}
ek.prototype=new b();
ek.prototype.constructor = ek;
_=ek.prototype;
_.__type="LDListInterestingChatsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppId!=null)o['a']=this.AppId.toString('base64');
	if(this.PackageId!=null)o['p']=this.PackageId;
	if(this.Longitude!=null)o['gt']=this.Longitude;
	if(this.Latitude!=null)o['gp']=this.Latitude;
	if(this.ForwardingStage!=null)o['f']=this.ForwardingStage;
	if(this.ForAppScopeId!=null)o['fa']=this.ForAppScopeId;
	if(this.ForCountry!=null)o['fc']=this.ForCountry;
	if(this.ForCity!=null)o['fy']=this.ForCity;
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
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fG(e['m']);
}
el.prototype=new b();
el.prototype.constructor = el;
_=el.prototype;
_.__type="LDPublicChatMessageDeliveryPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
_.Message=null;
function em(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
em.prototype=new b();
em.prototype.constructor = em;
_=em.prototype;
_.__type="LDPublicChatMessageTerminatedPush";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Feed=null;
function en(e){
	b.call(this,e);
	if(e&&(e['e']!==null&&e['e']!==undefined)){
		this.Events=[];
		var d = e['e'];
		for(var k=0; k<d.length;++k)this.Events.push(new fT(d[k]));
	}
}
en.prototype=new b();
en.prototype.constructor = en;
_=en.prototype;
_.__type="LDReportSummaryEventsRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Events!=null) {
		o['e']=[];
		var d=this.Events;
		for(var k = 0; k < d.length; ++k) o['e'].push(d[k].encode());
	}
	return o;
}
_.Events=null;
function eo(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.ItemId=new fy(e['a']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Start=e['s'];else this.Start=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.End=e['e'];else this.End=null;
	if(e&&(e['z']!==null&&e['z']!==undefined))this.Zoom=e['z'];else this.Zoom=null;
}
eo.prototype=new b();
eo.prototype.constructor = eo;
_=eo.prototype;
_.__type="LDGatherEventsByAppRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemId!=null)o['a']=this.ItemId.encode();
	if(this.PackageId!=null)o['p']=this.PackageId;
	if(this.Start!=null)o['s']=this.Start;
	if(this.End!=null)o['e']=this.End;
	if(this.Zoom!=null)o['z']=this.Zoom;
	return o;
}
_.ItemId=null;
_.PackageId=null;
_.Start=null;
_.End=null;
_.Zoom=null;
function ep(e){
	b.call(this,e);
}
ep.prototype=new b();
ep.prototype.constructor = ep;
_=ep.prototype;
_.__type="LDListBlockedUsersRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function eq(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
}
eq.prototype=new b();
eq.prototype.constructor = eq;
_=eq.prototype;
_.__type="LDUnblockUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.UserKey!=null)o['k']=this.UserKey;
	return o;
}
_.UserKey=null;
function er(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
}
er.prototype=new b();
er.prototype.constructor = er;
_=er.prototype;
_.__type="LDBlockUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.UserKey!=null)o['k']=this.UserKey;
	return o;
}
_.UserKey=null;
function fX(e){
	b.call(this,e);
	if(e&&(e['ct']!==null&&e['ct']!==undefined))this.ContentType=e['ct'];else this.ContentType=null;
	if(e&&(e['cf']!==null&&e['cf']!==undefined))this.Feed=new aw(e['cf']);
	if(e&&(e['ci']!==null&&e['ci']!==undefined))this.TypedId=new fC(e['ci']);
	if(e&&(e['ca']!==null&&e['ca']!==undefined))this.Account=e['ca'];else this.Account=null;
	if(e&&(e['cpv']!==null&&e['cpv']!==undefined))this.ProfileVersion=e['cpv'];else this.ProfileVersion=null;
}
fX.prototype=new b();
fX.prototype.constructor = fX;
_=fX.prototype;
_.__type="LDContentIdBase";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContentType!=null)o['ct']=this.ContentType;
	if(this.Feed!=null)o['cf']=this.Feed.encode();
	if(this.TypedId!=null)o['ci']=this.TypedId.encode();
	if(this.Account!=null)o['ca']=this.Account;
	if(this.ProfileVersion!=null)o['cpv']=this.ProfileVersion;
	return o;
}
_.ContentType=null;
_.Feed=null;
_.TypedId=null;
_.Account=null;
_.ProfileVersion=null;
function es(e){
	fX.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Reporter=e['r'];else this.Reporter=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['rr']!==null&&e['rr']!==undefined))this.Reason=e['rr'];else this.Reason=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Details=e['d'];else this.Details=null;
}
es.prototype=new fX();
es.prototype.constructor = es;
_=es.prototype;
_.__type="LDReportUserRequest";
_.encode=function(o){
	if(o===undefined)o={};
	fX.prototype.encode.call(this,o);
	if(this.Reporter!=null)o['r']=this.Reporter;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.Reason!=null)o['rr']=this.Reason;
	if(this.Details!=null)o['d']=this.Details;
	return o;
}
_.Reporter=null;
_.UserKey=null;
_.Reason=null;
_.Details=null;
function et(e){
	b.call(this,e);
	if(e&&(e['A']!==null&&e['A']!==undefined)){
		this.Accounts=[];
		var d = e['A'];
		for(var k=0;k<d.length;++k)this.Accounts.push(d[k]);
	}
}
et.prototype=new b();
et.prototype.constructor = et;
_=et.prototype;
_.__type="LDGetPresencesRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Accounts!=null) {
		o['A']=[];
		var d=this.Accounts;
		for(var k = 0; k < d.length; ++k) o['A'].push(d[k]);
	}
	return o;
}
_.Accounts=null;
function eu(e){
	b.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.Online=e['o'];else this.Online=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.AppName=e['n'];else this.AppName=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.AppIconBlobLink=e['b'];else this.AppIconBlobLink=null;
}
eu.prototype=new b();
eu.prototype.constructor = eu;
_=eu.prototype;
_.__type="LDSetOnlineStatusRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Online!=null)o['o']=this.Online;
	if(this.AppName!=null)o['n']=this.AppName;
	if(this.AppIconBlobLink!=null)o['b']=this.AppIconBlobLink;
	return o;
}
_.Online=null;
_.AppName=null;
_.AppIconBlobLink=null;
function ev(e){
	b.call(this,e);
}
ev.prototype=new b();
ev.prototype.constructor = ev;
_=ev.prototype;
_.__type="LDGetStreamingLinkRequest";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function ew(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fG(e['m']);
}
ew.prototype=new b();
ew.prototype.constructor = ew;
_=ew.prototype;
_.__type="LDGetMessageResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
_.Message=null;
function ex(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined)){
		this.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)this.Messages.push(new fG(d[k]));
	}
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Partial=e['p'];else this.Partial=null;
}
ex.prototype=new b();
ex.prototype.constructor = ex;
_=ex.prototype;
_.__type="LDGetMessagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Messages!=null) {
		o['m']=[];
		var d=this.Messages;
		for(var k = 0; k < d.length; ++k) o['m'].push(d[k].encode());
	}
	if(this.Partial!=null)o['p']=this.Partial;
	return o;
}
_.Messages=null;
_.Partial=null;
function ey(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined)){
		this.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)this.Messages.push(new fG(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
ey.prototype=new b();
ey.prototype.constructor = ey;
_=ey.prototype;
_.__type="LDGetMessagesWithContinuationResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Messages!=null) {
		o['m']=[];
		var d=this.Messages;
		for(var k = 0; k < d.length; ++k) o['m'].push(d[k].encode());
	}
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.Messages=null;
_.ContinuationKey=null;
function ez(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.JoinLink=new fY(e['l']);
}
ez.prototype=new b();
ez.prototype.constructor = ez;
_=ez.prototype;
_.__type="LDGetJoinFeedLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.JoinLink!=null)o['l']=this.JoinLink.encode();
	return o;
}
_.JoinLink=null;
function eA(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['td']!==null&&e['td']!==undefined))this.ThumbnailLink=e['td'];else this.ThumbnailLink=null;
}
eA.prototype=new b();
eA.prototype.constructor = eA;
_=eA.prototype;
_.__type="LDGetPublicFeedDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Name!=null)o['n']=this.Name;
	if(this.ThumbnailLink!=null)o['td']=this.ThumbnailLink;
	return o;
}
_.Name=null;
_.ThumbnailLink=null;
function eB(e){
	b.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined)){
		this.Dirty=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)this.Dirty.push(new fZ(d[k]));
	}
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Partial=e['p'];else this.Partial=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Window=e['w'];else this.Window=null;
}
eB.prototype=new b();
eB.prototype.constructor = eB;
_=eB.prototype;
_.__type="LDDirtyFeedsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Dirty!=null) {
		o['d']=[];
		var d=this.Dirty;
		for(var k = 0; k < d.length; ++k) o['d'].push(d[k].encode());
	}
	if(this.Partial!=null)o['p']=this.Partial;
	if(this.Window!=null)o['w']=this.Window;
	return o;
}
_.Dirty=null;
_.Partial=null;
_.Window=null;
function eC(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.LastWriteTime=e['t'];else this.LastWriteTime=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AcceptanceState=e['a'];else this.AcceptanceState=null;
}
eC.prototype=new b();
eC.prototype.constructor = eC;
_=eC.prototype;
_.__type="LDFeedStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.LastWriteTime!=null)o['t']=this.LastWriteTime;
	if(this.AcceptanceState!=null)o['a']=this.AcceptanceState;
	return o;
}
_.LastWriteTime=null;
_.AcceptanceState=null;
function eD(e){
	b.call(this,e);
	if(e&&(e['ut']!==null&&e['ut']!==undefined))this.BlobUploadTicket=new fK(e['ut']);
}
eD.prototype=new b();
eD.prototype.constructor = eD;
_=eD.prototype;
_.__type="LDGetUploadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobUploadTicket!=null)o['ut']=this.BlobUploadTicket.encode();
	return o;
}
_.BlobUploadTicket=null;
function eE(e){
	b.call(this,e);
	if(e&&(e['ut']!==null&&e['ut']!==undefined)){
		this.BlobUploadTickets=[];
		var d = e['ut'];
		for(var k=0; k<d.length;++k)this.BlobUploadTickets.push(new fK(d[k]));
	}
}
eE.prototype=new b();
eE.prototype.constructor = eE;
_=eE.prototype;
_.__type="LDGetMultipartUploadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobUploadTickets!=null) {
		o['ut']=[];
		var d=this.BlobUploadTickets;
		for(var k = 0; k < d.length; ++k) o['ut'].push(d[k].encode());
	}
	return o;
}
_.BlobUploadTickets=null;
function eF(e){
	b.call(this,e);
	if(e&&(e['dt']!==null&&e['dt']!==undefined))this.BlobDownloadTicket=new g_(e['dt']);
}
eF.prototype=new b();
eF.prototype.constructor = eF;
_=eF.prototype;
_.__type="LDGetDownloadTicketResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobDownloadTicket!=null)o['dt']=this.BlobDownloadTicket.encode();
	return o;
}
_.BlobDownloadTicket=null;
function eG(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactDetails=new fL(e['c']);
}
eG.prototype=new b();
eG.prototype.constructor = eG;
_=eG.prototype;
_.__type="LDGetContactDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactDetails!=null)o['c']=this.ContactDetails.encode();
	return o;
}
_.ContactDetails=null;
function eH(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfileDetails=new ga(e['p']);
}
eH.prototype=new b();
eH.prototype.constructor = eH;
_=eH.prototype;
_.__type="LDGetProfileDetailsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ProfileDetails!=null)o['p']=this.ProfileDetails.encode();
	return o;
}
_.ProfileDetails=null;
function eI(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ContactProfile=new gb(e['p']);
}
eI.prototype=new b();
eI.prototype.constructor = eI;
_=eI.prototype;
_.__type="LDGetOmletContactProfileResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactProfile!=null)o['p']=this.ContactProfile.encode();
	return o;
}
_.ContactProfile=null;
function eJ(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePublicState=new gc(e['p']);
}
eJ.prototype=new b();
eJ.prototype.constructor = eJ;
_=eJ.prototype;
_.__type="LDGetProfilePublicStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ProfilePublicState!=null)o['p']=this.ProfilePublicState.encode();
	return o;
}
_.ProfilePublicState=null;
function eK(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactProfile=new gb(e['c']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePublicState=new gc(e['p']);
}
eK.prototype=new b();
eK.prototype.constructor = eK;
_=eK.prototype;
_.__type="LDGetContactProfileAndPublicStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactProfile!=null)o['c']=this.ContactProfile.encode();
	if(this.ProfilePublicState!=null)o['p']=this.ProfilePublicState.encode();
	return o;
}
_.ContactProfile=null;
_.ProfilePublicState=null;
function eL(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ContactProfile=new gb(e['p']);
}
eL.prototype=new b();
eL.prototype.constructor = eL;
_=eL.prototype;
_.__type="LDGetContactProfileResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.ContactProfile!=null)o['p']=this.ContactProfile.encode();
	return o;
}
_.Account=null;
_.ContactProfile=null;
function eM(e){
	b.call(this,e);
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.ItemInfoContainer=new gd(e['ii']);
}
eM.prototype=new b();
eM.prototype.constructor = eM;
_=eM.prototype;
_.__type="LDGetItemInfoResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemInfoContainer!=null)o['ii']=this.ItemInfoContainer.encode();
	return o;
}
_.ItemInfoContainer=null;
function eN(e){
	if(e&&(e['l']!==null&&e['l']!==undefined))this.ItemInfoListingContainer=new ge(e['l']);
}
_=eN.prototype;
_.__type="LDListItemsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemInfoListingContainer!=null)o['l']=this.ItemInfoListingContainer.encode();
	return o;
}
_.ItemInfoListingContainer=null;
function eO(e){
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ShareLink=e['s'];else this.ShareLink=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RawKey=new Buffer(e['r'],'base64');
}
_=eO.prototype;
_.__type="LDGenerateGrantForItemResponse";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ShareLink!=null)o['s']=this.ShareLink;
	if(this.RawKey!=null)o['r']=this.RawKey.toString('base64');
	return o;
}
_.ShareLink=null;
_.RawKey=null;
function eP(e){
	if(e&&(e['ak']!==null&&e['ak']!==undefined))this.ApiKey=new gf(e['ak']);
}
_=eP.prototype;
_.__type="LDGenerateApiKeyResponse";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ApiKey!=null)o['ak']=this.ApiKey.encode();
	return o;
}
_.ApiKey=null;
function eQ(e){
	if(e&&(e['ak']!==null&&e['ak']!==undefined)){
		this.ApiKeys=[];
		var d = e['ak'];
		for(var k=0; k<d.length;++k)this.ApiKeys.push(new gf(d[k]));
	}
}
_=eQ.prototype;
_.__type="LDListApiKeysResponse";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ApiKeys!=null) {
		o['ak']=[];
		var d=this.ApiKeys;
		for(var k = 0; k < d.length; ++k) o['ak'].push(d[k].encode());
	}
	return o;
}
_.ApiKeys=null;
function eR(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Config=new fP(e['c']);
}
eR.prototype=new b();
eR.prototype.constructor = eR;
_=eR.prototype;
_.__type="LDGetCloudConfigResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Config!=null)o['c']=this.Config.encode();
	return o;
}
_.Config=null;
function eS(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined)){
		this.Candidates=[];
		var d = e['c'];
		for(var k=0;k<d.length;++k)this.Candidates.push(d[k]);
	}
	if(e&&(e['lt']!==null&&e['lt']!==undefined))this.LocationType=e['lt'];else this.LocationType=null;
	if(e&&(e['ln']!==null&&e['ln']!==undefined))this.LocationName=e['ln'];else this.LocationName=null;
}
eS.prototype=new b();
eS.prototype.constructor = eS;
_=eS.prototype;
_.__type="LDFindGamersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Candidates!=null) {
		o['c']=[];
		var d=this.Candidates;
		for(var k = 0; k < d.length; ++k) o['c'].push(d[k]);
	}
	if(this.LocationType!=null)o['lt']=this.LocationType;
	if(this.LocationName!=null)o['ln']=this.LocationName;
	return o;
}
_.Candidates=null;
_.LocationType=null;
_.LocationName=null;
function eT(e){
	b.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.PublishingUrl=e['u'];else this.PublishingUrl=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.DevicePrivateKey=new Buffer(e['k'],'base64');
}
eT.prototype=new b();
eT.prototype.constructor = eT;
_=eT.prototype;
_.__type="LDCreateSubscriptionResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PublishingUrl!=null)o['u']=this.PublishingUrl;
	if(this.Account!=null)o['a']=this.Account;
	if(this.DevicePrivateKey!=null)o['k']=this.DevicePrivateKey.toString('base64');
	return o;
}
_.PublishingUrl=null;
_.Account=null;
_.DevicePrivateKey=null;
function eU(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.City=e['c'];else this.City=null;
	if(e&&(e['cs']!==null&&e['cs']!==undefined))this.CityScore=e['cs'];else this.CityScore=null;
	if(e&&(e['cr']!==null&&e['cr']!==undefined))this.CityRank=e['cr'];else this.CityRank=null;
	if(e&&(e['cp']!==null&&e['cp']!==undefined))this.CityPercentile=e['cp'];else this.CityPercentile=null;
	if(e&&(e['css']!==null&&e['css']!==undefined)){
		this.CitySimilarScores=[];
		var d = e['css'];
		for(var k=0; k<d.length;++k)this.CitySimilarScores.push(new gg(d[k]));
	}
	if(e&&(e['u']!==null&&e['u']!==undefined))this.Country=e['u'];else this.Country=null;
	if(e&&(e['us']!==null&&e['us']!==undefined))this.CountryScore=e['us'];else this.CountryScore=null;
	if(e&&(e['ur']!==null&&e['ur']!==undefined))this.CountryRank=e['ur'];else this.CountryRank=null;
	if(e&&(e['up']!==null&&e['up']!==undefined))this.CountryPercentile=e['up'];else this.CountryPercentile=null;
	if(e&&(e['uss']!==null&&e['uss']!==undefined)){
		this.CountrySimilarScores=[];
		var d = e['uss'];
		for(var k=0; k<d.length;++k)this.CountrySimilarScores.push(new gg(d[k]));
	}
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Continent=e['t'];else this.Continent=null;
	if(e&&(e['ts']!==null&&e['ts']!==undefined))this.ContinentScore=e['ts'];else this.ContinentScore=null;
	if(e&&(e['tr']!==null&&e['tr']!==undefined))this.ContinentRank=e['tr'];else this.ContinentRank=null;
	if(e&&(e['tp']!==null&&e['tp']!==undefined))this.ContinentPercentile=e['tp'];else this.ContinentPercentile=null;
	if(e&&(e['tss']!==null&&e['tss']!==undefined)){
		this.ContinentSimilarScores=[];
		var d = e['tss'];
		for(var k=0; k<d.length;++k)this.ContinentSimilarScores.push(new gg(d[k]));
	}
	if(e&&(e['gs']!==null&&e['gs']!==undefined))this.GlobalScore=e['gs'];else this.GlobalScore=null;
	if(e&&(e['gr']!==null&&e['gr']!==undefined))this.GlobalRank=e['gr'];else this.GlobalRank=null;
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GlobalPercentile=e['gp'];else this.GlobalPercentile=null;
	if(e&&(e['gss']!==null&&e['gss']!==undefined)){
		this.GlobalSimilarScores=[];
		var d = e['gss'];
		for(var k=0; k<d.length;++k)this.GlobalSimilarScores.push(new gg(d[k]));
	}
	if(e&&(e['ll']!==null&&e['ll']!==undefined))this.LocalLevel=e['ll'];else this.LocalLevel=null;
	if(e&&(e['ln']!==null&&e['ln']!==undefined))this.LocalLocationName=e['ln'];else this.LocalLocationName=null;
	if(e&&(e['ls']!==null&&e['ls']!==undefined))this.LocalScore=e['ls'];else this.LocalScore=null;
	if(e&&(e['lr']!==null&&e['lr']!==undefined))this.LocalRank=e['lr'];else this.LocalRank=null;
	if(e&&(e['lp']!==null&&e['lp']!==undefined))this.LocalPercentile=e['lp'];else this.LocalPercentile=null;
	if(e&&(e['lss']!==null&&e['lss']!==undefined)){
		this.LocalSimilarScores=[];
		var d = e['lss'];
		for(var k=0; k<d.length;++k)this.LocalSimilarScores.push(new gg(d[k]));
	}
	if(e&&(e['dbf']!==null&&e['dbf']!==undefined))this.DistanceBestFor=e['dbf'];else this.DistanceBestFor=null;
}
eU.prototype=new b();
eU.prototype.constructor = eU;
_=eU.prototype;
_.__type="LDScoreResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.City!=null)o['c']=this.City;
	if(this.CityScore!=null)o['cs']=this.CityScore;
	if(this.CityRank!=null)o['cr']=this.CityRank;
	if(this.CityPercentile!=null)o['cp']=this.CityPercentile;
	if(this.CitySimilarScores!=null) {
		o['css']=[];
		var d=this.CitySimilarScores;
		for(var k = 0; k < d.length; ++k) o['css'].push(d[k].encode());
	}
	if(this.Country!=null)o['u']=this.Country;
	if(this.CountryScore!=null)o['us']=this.CountryScore;
	if(this.CountryRank!=null)o['ur']=this.CountryRank;
	if(this.CountryPercentile!=null)o['up']=this.CountryPercentile;
	if(this.CountrySimilarScores!=null) {
		o['uss']=[];
		var d=this.CountrySimilarScores;
		for(var k = 0; k < d.length; ++k) o['uss'].push(d[k].encode());
	}
	if(this.Continent!=null)o['t']=this.Continent;
	if(this.ContinentScore!=null)o['ts']=this.ContinentScore;
	if(this.ContinentRank!=null)o['tr']=this.ContinentRank;
	if(this.ContinentPercentile!=null)o['tp']=this.ContinentPercentile;
	if(this.ContinentSimilarScores!=null) {
		o['tss']=[];
		var d=this.ContinentSimilarScores;
		for(var k = 0; k < d.length; ++k) o['tss'].push(d[k].encode());
	}
	if(this.GlobalScore!=null)o['gs']=this.GlobalScore;
	if(this.GlobalRank!=null)o['gr']=this.GlobalRank;
	if(this.GlobalPercentile!=null)o['gp']=this.GlobalPercentile;
	if(this.GlobalSimilarScores!=null) {
		o['gss']=[];
		var d=this.GlobalSimilarScores;
		for(var k = 0; k < d.length; ++k) o['gss'].push(d[k].encode());
	}
	if(this.LocalLevel!=null)o['ll']=this.LocalLevel;
	if(this.LocalLocationName!=null)o['ln']=this.LocalLocationName;
	if(this.LocalScore!=null)o['ls']=this.LocalScore;
	if(this.LocalRank!=null)o['lr']=this.LocalRank;
	if(this.LocalPercentile!=null)o['lp']=this.LocalPercentile;
	if(this.LocalSimilarScores!=null) {
		o['lss']=[];
		var d=this.LocalSimilarScores;
		for(var k = 0; k < d.length; ++k) o['lss'].push(d[k].encode());
	}
	if(this.DistanceBestFor!=null)o['dbf']=this.DistanceBestFor;
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
	if(e&&(e['lt']!==null&&e['lt']!==undefined))this.LocationType=e['lt'];else this.LocationType=null;
	if(e&&(e['ln']!==null&&e['ln']!==undefined))this.LocationName=e['ln'];else this.LocationName=null;
	if(e&&(e['s']!==null&&e['s']!==undefined)){
		this.Scores=[];
		var d = e['s'];
		for(var k=0; k<d.length;++k)this.Scores.push(new gg(d[k]));
	}
}
eV.prototype=new b();
eV.prototype.constructor = eV;
_=eV.prototype;
_.__type="LDScoresResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.LocationType!=null)o['lt']=this.LocationType;
	if(this.LocationName!=null)o['ln']=this.LocationName;
	if(this.Scores!=null) {
		o['s']=[];
		var d=this.Scores;
		for(var k = 0; k < d.length; ++k) o['s'].push(d[k].encode());
	}
	return o;
}
_.LocationType=null;
_.LocationName=null;
_.Scores=null;
function eW(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
}
eW.prototype=new b();
eW.prototype.constructor = eW;
_=eW.prototype;
_.__type="LDBroadcastItemResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Pin!=null)o['p']=this.Pin;
	return o;
}
_.Pin=null;
function eX(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new fS(d[k]));
	}
}
eX.prototype=new b();
eX.prototype.constructor = eX;
_=eX.prototype;
_.__type="LDFetchNearbyItemsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Items!=null) {
		o['i']=[];
		var d=this.Items;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	return o;
}
_.Items=null;
function eY(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ResponseType=e['t'];else this.ResponseType=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ResponseData=new Buffer(e['d'],'base64');
}
eY.prototype=new b();
eY.prototype.constructor = eY;
_=eY.prototype;
_.__type="LDUrlToStoryResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ResponseType!=null)o['t']=this.ResponseType;
	if(this.ResponseData!=null)o['d']=this.ResponseData.toString('base64');
	return o;
}
_.ResponseType=null;
_.ResponseData=null;
function eZ(e){
	b.call(this,e);
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.Hits=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)this.Hits.push(new gh(d[k]));
	}
	if(e&&(e['v']!==null&&e['v']!==undefined))this.ClientSearchVersion=e['v'];else this.ClientSearchVersion=null;
}
eZ.prototype=new b();
eZ.prototype.constructor = eZ;
_=eZ.prototype;
_.__type="LDImageSearchResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Hits!=null) {
		o['h']=[];
		var d=this.Hits;
		for(var k = 0; k < d.length; ++k) o['h'].push(d[k].encode());
	}
	if(this.ClientSearchVersion!=null)o['v']=this.ClientSearchVersion;
	return o;
}
_.Hits=null;
_.ClientSearchVersion=null;
function f_(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['ii']!==null&&e['ii']!==undefined)){
		this.AddedItems=[];
		var d = e['ii'];
		for(var k=0; k<d.length;++k)this.AddedItems.push(new fy(d[k]));
	}
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=e['m'];else this.Message=null;
}
f_.prototype=new b();
f_.prototype.constructor = f_;
_=f_.prototype;
_.__type="LDCreatePlaygroundResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.AddedItems!=null) {
		o['ii']=[];
		var d=this.AddedItems;
		for(var k = 0; k < d.length; ++k) o['ii'].push(d[k].encode());
	}
	if(this.Message!=null)o['m']=this.Message;
	return o;
}
_.Feed=null;
_.AddedItems=null;
_.Message=null;
function fa(e){
	b.call(this,e);
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.ExtraVersions = {};
		var d = e['h'];
		for(var k in d) this.ExtraVersions[k]=d[k];
	}
}
fa.prototype=new b();
fa.prototype.constructor = fa;
_=fa.prototype;
_.__type="LDGetExtraVersionsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ExtraVersions!=null){
		o['h']={};
		var d=this.ExtraVersions;
		for(var k in d)o['h'][k]=d[k];
	}
	return o;
}
_.ExtraVersions=null;
function fb(e){
	b.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined)){
		this.UnmappedIdentities=[];
		var d = e['u'];
		for(var k=0; k<d.length;++k)this.UnmappedIdentities.push(new fw(d[k]));
	}
	if(e&&(e['o']!==null&&e['o']!==undefined)){
		this.OptOutIdentities=[];
		var d = e['o'];
		for(var k=0; k<d.length;++k)this.OptOutIdentities.push(new fw(d[k]));
	}
	if(e&&(e['a']!==null&&e['a']!==undefined)){
		this.Accounts=[];
		var d = e['a'];
		for(var k=0;k<d.length;++k)this.Accounts.push(d[k]);
	}
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
fb.prototype=new b();
fb.prototype.constructor = fb;
_=fb.prototype;
_.__type="LDGetDirectFeedResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.UnmappedIdentities!=null) {
		o['u']=[];
		var d=this.UnmappedIdentities;
		for(var k = 0; k < d.length; ++k) o['u'].push(d[k].encode());
	}
	if(this.OptOutIdentities!=null) {
		o['o']=[];
		var d=this.OptOutIdentities;
		for(var k = 0; k < d.length; ++k) o['o'].push(d[k].encode());
	}
	if(this.Accounts!=null) {
		o['a']=[];
		var d=this.Accounts;
		for(var k = 0; k < d.length; ++k) o['a'].push(d[k]);
	}
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.UnmappedIdentities=null;
_.OptOutIdentities=null;
_.Accounts=null;
_.Feed=null;
function fc(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Metadata=new Buffer(e['m'],'base64');
	if(e&&(e['u']!==null&&e['u']!==undefined)){
		this.UnmappedIdentities=[];
		var d = e['u'];
		for(var k=0; k<d.length;++k)this.UnmappedIdentities.push(new fw(d[k]));
	}
	if(e&&(e['o']!==null&&e['o']!==undefined)){
		this.OptOutIdentities=[];
		var d = e['o'];
		for(var k=0; k<d.length;++k)this.OptOutIdentities.push(new fw(d[k]));
	}
}
fc.prototype=new b();
fc.prototype.constructor = fc;
_=fc.prototype;
_.__type="LDSendDirectMessageResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	if(this.Metadata!=null)o['m']=this.Metadata.toString('base64');
	if(this.UnmappedIdentities!=null) {
		o['u']=[];
		var d=this.UnmappedIdentities;
		for(var k = 0; k < d.length; ++k) o['u'].push(d[k].encode());
	}
	if(this.OptOutIdentities!=null) {
		o['o']=[];
		var d=this.OptOutIdentities;
		for(var k = 0; k < d.length; ++k) o['o'].push(d[k].encode());
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
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Wall=new gi(e['w']);
}
fd.prototype=new b();
fd.prototype.constructor = fd;
_=fd.prototype;
_.__type="LDWallResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Wall!=null)o['w']=this.Wall.encode();
	return o;
}
_.Wall=null;
function fe(e){
	b.call(this,e);
	if(e&&(e['w']!==null&&e['w']!==undefined)){
		this.Walls=[];
		var d = e['w'];
		for(var k=0; k<d.length;++k)this.Walls.push(new gi(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
fe.prototype=new b();
fe.prototype.constructor = fe;
_=fe.prototype;
_.__type="LDWallsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Walls!=null) {
		o['w']=[];
		var d=this.Walls;
		for(var k = 0; k < d.length; ++k) o['w'].push(d[k].encode());
	}
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.Walls=null;
_.ContinuationKey=null;
function ff(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Post=new gj(e['p']);
}
ff.prototype=new b();
ff.prototype.constructor = ff;
_=ff.prototype;
_.__type="LDGetPostResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Post!=null)o['p']=this.Post.encode();
	return o;
}
_.Post=null;
function fg(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fW(e['id']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.ExternalShareLink=e['e'];else this.ExternalShareLink=null;
}
fg.prototype=new b();
fg.prototype.constructor = fg;
_=fg.prototype;
_.__type="LDAddPostResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	if(this.ExternalShareLink!=null)o['e']=this.ExternalShareLink;
	return o;
}
_.PostId=null;
_.ExternalShareLink=null;
function fh(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined)){
		this.AccountsFollowed=[];
		var d = e['f'];
		for(var k=0; k<d.length;++k)this.AccountsFollowed.push(new gk(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
fh.prototype=new b();
fh.prototype.constructor = fh;
_=fh.prototype;
_.__type="LDGetAccountsFollowedResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AccountsFollowed!=null) {
		o['f']=[];
		var d=this.AccountsFollowed;
		for(var k = 0; k < d.length; ++k) o['f'].push(d[k].encode());
	}
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.AccountsFollowed=null;
_.ContinuationKey=null;
function fi(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined)){
		this.PostTags=[];
		var d = e['p'];
		for(var k=0; k<d.length;++k)this.PostTags.push(new gl(d[k]));
	}
	if(e&&(e['l']!==null&&e['l']!==undefined))this.MaxVideoLength=e['l'];else this.MaxVideoLength=null;
}
fi.prototype=new b();
fi.prototype.constructor = fi;
_=fi.prototype;
_.__type="LDGetStandardPostTagsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostTags!=null) {
		o['p']=[];
		var d=this.PostTags;
		for(var k = 0; k < d.length; ++k) o['p'].push(d[k].encode());
	}
	if(this.MaxVideoLength!=null)o['l']=this.MaxVideoLength;
	return o;
}
_.PostTags=null;
_.MaxVideoLength=null;
function fj(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined)){
		this.Followers=[];
		var d = e['f'];
		for(var k=0; k<d.length;++k)this.Followers.push(new gk(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
fj.prototype=new b();
fj.prototype.constructor = fj;
_=fj.prototype;
_.__type="LDGetFollowersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Followers!=null) {
		o['f']=[];
		var d=this.Followers;
		for(var k = 0; k < d.length; ++k) o['f'].push(d[k].encode());
	}
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.Followers=null;
_.ContinuationKey=null;
function fk(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined)){
		this.Links=[];
		var d = e['l'];
		for(var k=0;k<d.length;++k)this.Links.push(d[k]);
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
fk.prototype=new b();
fk.prototype.constructor = fk;
_=fk.prototype;
_.__type="LDGetExternalShareLinkResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Links!=null) {
		o['l']=[];
		var d=this.Links;
		for(var k = 0; k < d.length; ++k) o['l'].push(d[k]);
	}
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.Links=null;
_.ContinuationKey=null;
function fl(e){
	b.call(this,e);
	if(e&&(e['I']!==null&&e['I']!==undefined)){
		this.PackageInfos=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)this.PackageInfos.push(new gm(d[k]));
	}
}
fl.prototype=new b();
fl.prototype.constructor = fl;
_=fl.prototype;
_.__type="LDGetPackagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PackageInfos!=null) {
		o['I']=[];
		var d=this.PackageInfos;
		for(var k = 0; k < d.length; ++k) o['I'].push(d[k].encode());
	}
	return o;
}
_.PackageInfos=null;
function fm(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
fm.prototype=new b();
fm.prototype.constructor = fm;
_=fm.prototype;
_.__type="LDGetIdentityTokenResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
_.Token=null;
function fn(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.PublicChatInfo=new gn(e['i']);
}
fn.prototype=new b();
fn.prototype.constructor = fn;
_=fn.prototype;
_.__type="LDGetPublicChatResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.PublicChatInfo!=null)o['i']=this.PublicChatInfo.encode();
	return o;
}
_.Feed=null;
_.PublicChatInfo=null;
function fo(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined)){
		this.Ids=[];
		var d = e['id'];
		for(var k=0;k<d.length;++k)this.Ids.push(d[k]);
	}
	if(e&&(e['dn']!==null&&e['dn']!==undefined)){
		this.DisplayNames=[];
		var d = e['dn'];
		for(var k=0;k<d.length;++k)this.DisplayNames.push(d[k]);
	}
}
fo.prototype=new b();
fo.prototype.constructor = fo;
_=fo.prototype;
_.__type="LDGetPublicChatMembersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Ids!=null) {
		o['id']=[];
		var d=this.Ids;
		for(var k = 0; k < d.length; ++k) o['id'].push(d[k]);
	}
	if(this.DisplayNames!=null) {
		o['dn']=[];
		var d=this.DisplayNames;
		for(var k = 0; k < d.length; ++k) o['dn'].push(d[k]);
	}
	return o;
}
_.Ids=null;
_.DisplayNames=null;
function fp(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined)){
		this.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)this.Messages.push(new fG(d[k]));
	}
}
fp.prototype=new b();
fp.prototype.constructor = fp;
_=fp.prototype;
_.__type="LDGetRecentMessagesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Messages!=null) {
		o['m']=[];
		var d=this.Messages;
		for(var k = 0; k < d.length; ++k) o['m'].push(d[k].encode());
	}
	return o;
}
_.Messages=null;
function fq(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined)){
		this.Chats=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)this.Chats.push(new gn(d[k]));
	}
}
fq.prototype=new b();
fq.prototype.constructor = fq;
_=fq.prototype;
_.__type="LDListChatsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Chats!=null) {
		o['c']=[];
		var d=this.Chats;
		for(var k = 0; k < d.length; ++k) o['c'].push(d[k].encode());
	}
	return o;
}
_.Chats=null;
function fr(e){
	b.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Buckets=e['b'];
	if(e&&(e['c']!==null&&e['c']!==undefined)){
		this.Counts = {};
		var d = e['c'];
		for(var k in d) this.Counts[k]=d[k];
	}
}
fr.prototype=new b();
fr.prototype.constructor = fr;
_=fr.prototype;
_.__type="LDGatherEventsByAppResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Buckets!=null)o['b']=this.Buckets;
	if(this.Counts!=null){
		o['c']={};
		var d=this.Counts;
		for(var k in d)o['c'][k]=d[k];
	}
	return o;
}
_.Buckets=null;
_.Counts=null;
function fs(e){
	b.call(this,e);
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.States=[];
		var d = e['S'];
		for(var k=0; k<d.length;++k)this.States.push(new go(d[k]));
	}
}
fs.prototype=new b();
fs.prototype.constructor = fs;
_=fs.prototype;
_.__type="LDGetPresencesResponse";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.States!=null) {
		o['S']=[];
		var d=this.States;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k].encode());
	}
	return o;
}
_.States=null;
function gp(e){
}
_=gp.prototype;
_.__type="LDString";
_.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function fw(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Principal=e['p'];else this.Principal=null;
}
_=fw.prototype;
_.__type="LDIdentity";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Type!=null)o['t']=this.Type;
	if(this.Principal!=null)o['p']=this.Principal;
	return o;
}
_.Type=null;
_.Principal=null;
function fx(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AppId=new Buffer(e['a'],'base64');
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
}
fx.prototype=new b();
fx.prototype.constructor = fx;
_=fx.prototype;
_.__type="LDAppScopeId";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppId!=null)o['a']=this.AppId.toString('base64');
	if(this.PackageId!=null)o['p']=this.PackageId;
	return o;
}
_.AppId=null;
_.PackageId=null;
function fy(e){
	b.call(this,e);
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Creator=e['c'];else this.Creator=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.GivenId=e['a'];else this.GivenId=null;
}
fy.prototype=new b();
fy.prototype.constructor = fy;
_=fy.prototype;
_.__type="LDItemId";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Creator!=null)o['c']=this.Creator;
	if(this.GivenId!=null)o['a']=this.GivenId;
	return o;
}
_.ItemType=null;
_.Creator=null;
_.GivenId=null;
function fz(e){
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Identities.push(new fw(d[k]));
	}
	if(e&&(e['n']!==null&&e['n']!==undefined))this.MigratedName=e['n'];else this.MigratedName=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.MigratedPictureLink=e['p'];else this.MigratedPictureLink=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MigratedCloudConfig=new fP(e['m']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.CreationTime=e['s'];else this.CreationTime=null;
}
_=fz.prototype;
_.__type="LDAccountDetails";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Account!=null)o['a']=this.Account;
	if(this.Cluster!=null)o['c']=this.Cluster;
	if(this.Identities!=null) {
		o['i']=[];
		var d=this.Identities;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	if(this.MigratedName!=null)o['n']=this.MigratedName;
	if(this.MigratedPictureLink!=null)o['p']=this.MigratedPictureLink;
	if(this.MigratedCloudConfig!=null)o['m']=this.MigratedCloudConfig.encode();
	if(this.CreationTime!=null)o['s']=this.CreationTime;
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['l']!==null&&e['l']!==undefined)){
		this.Records=[];
		var d = e['l'];
		for(var k=0; k<d.length;++k)this.Records.push(new gq(d[k]));
	}
}
_=fA.prototype;
_.__type="LDFlaggedDetails";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Account!=null)o['a']=this.Account;
	if(this.Records!=null) {
		o['l']=[];
		var d=this.Records;
		for(var k = 0; k < d.length; ++k) o['l'].push(d[k].encode());
	}
	return o;
}
_.Account=null;
_.Records=null;
function fB(e){
	b.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Banned=e['b'];else this.Banned=null;
	if(e&&(e['a']!==null&&e['a']!==undefined)){
		this.RevokedApps = {};
		var d = e['a'];
		for(var k in d) this.RevokedApps[k]=d[k];
	}
	if(e&&(e['ap']!==null&&e['ap']!==undefined)){
		this.PubRevokedApps = {};
		var d = e['ap'];
		for(var k in d) this.PubRevokedApps[k]=d[k];
	}
	if(e&&(e['u']!==null&&e['u']!==undefined))this.RevokedUnsol=e['u'];else this.RevokedUnsol=null;
	if(e&&(e['bu']!==null&&e['bu']!==undefined)){
		this.BlockedUsers=[];
		var d = e['bu'];
		for(var k=0;k<d.length;++k)this.BlockedUsers.push(d[k]);
	}
	if(e&&(e['bbu']!==null&&e['bbu']!==undefined)){
		this.BlockedByUsers=[];
		var d = e['bbu'];
		for(var k=0;k<d.length;++k)this.BlockedByUsers.push(d[k]);
	}
}
fB.prototype=new b();
fB.prototype.constructor = fB;
_=fB.prototype;
_.__type="LDPrettyPermissions";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Banned!=null)o['b']=this.Banned;
	if(this.RevokedApps!=null){
		o['a']={};
		var d=this.RevokedApps;
		for(var k in d)o['a'][k]=d[k];
	}
	if(this.PubRevokedApps!=null){
		o['ap']={};
		var d=this.PubRevokedApps;
		for(var k in d)o['ap'][k]=d[k];
	}
	if(this.RevokedUnsol!=null)o['u']=this.RevokedUnsol;
	if(this.BlockedUsers!=null) {
		o['bu']=[];
		var d=this.BlockedUsers;
		for(var k = 0; k < d.length; ++k) o['bu'].push(d[k]);
	}
	if(this.BlockedByUsers!=null) {
		o['bbu']=[];
		var d=this.BlockedByUsers;
		for(var k = 0; k < d.length; ++k) o['bbu'].push(d[k]);
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
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new Buffer(e['i'],'base64');
}
fC.prototype=new b();
fC.prototype.constructor = fC;
_=fC.prototype;
_.__type="LDTypedId";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Type!=null)o['t']=this.Type;
	if(this.Id!=null)o['i']=this.Id.toString('base64');
	return o;
}
_.Type=null;
_.Id=null;
function fD(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AppId=new Buffer(e['a'],'base64');
}
fD.prototype=new b();
fD.prototype.constructor = fD;
_=fD.prototype;
_.__type="LDAcl";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Type!=null)o['t']=this.Type;
	if(this.AppId!=null)o['a']=this.AppId.toString('base64');
	return o;
}
_.Type=null;
_.AppId=null;
function fF(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['h']!==null&&e['h']!==undefined))this.Hash=new Buffer(e['h'],'base64');
}
_=fF.prototype;
_.__type="LDIdentityHash";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Type!=null)o['t']=this.Type;
	if(this.Hash!=null)o['h']=this.Hash.toString('base64');
	return o;
}
_.Type=null;
_.Hash=null;
function fG(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fC(e['i']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Owner=e['s'];else this.Owner=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Metadata=new Buffer(e['m'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Deleted=e['d'];else this.Deleted=null;
	if(e&&(e['di']!==null&&e['di']!==undefined))this.DeviceId=new Buffer(e['di'],'base64');
}
_=fG.prototype;
_.__type="LDMessage";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	if(this.Owner!=null)o['s']=this.Owner;
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.Metadata!=null)o['m']=this.Metadata.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Deleted!=null)o['d']=this.Deleted;
	if(this.DeviceId!=null)o['di']=this.DeviceId.toString('base64');
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
	if(e&&(e['T']!==null&&e['T']!==undefined))this.Type=e['T'];else this.Type=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Sender=e['s'];else this.Sender=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
}
_=fH.prototype;
_.__type="LDRealtimeMessage";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Type!=null)o['T']=this.Type;
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	if(this.Sender!=null)o['s']=this.Sender;
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
_.Type=null;
_.Timestamp=null;
_.Sender=null;
_.Body=null;
_.Feed=null;
function fI(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.Key=e['k'];else this.Key=null;
}
_=fI.prototype;
_.__type="LDPushKey";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Type!=null)o['t']=this.Type;
	if(this.Key!=null)o['k']=this.Key;
	return o;
}
_.Type=null;
_.Key=null;
function fJ(e){
	if(e&&(e['h']!==null&&e['h']!==undefined))this.Hash=new Buffer(e['h'],'base64');
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Size=e['s'];else this.Size=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MimeType=e['m'];else this.MimeType=null;
}
_=fJ.prototype;
_.__type="LDBlobMetadata";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Hash!=null)o['h']=this.Hash.toString('base64');
	if(this.Size!=null)o['s']=this.Size;
	if(this.MimeType!=null)o['m']=this.MimeType;
	return o;
}
_.Hash=null;
_.Size=null;
_.MimeType=null;
function fK(e){
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UploadUrl=e['u'];else this.UploadUrl=null;
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.UploadHeaders = {};
		var d = e['h'];
		for(var k in d) this.UploadHeaders[k]=d[k];
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IsPermanent=e['p'];else this.IsPermanent=null;
	if(e&&(e['prt']!==null&&e['prt']!==undefined))this.PermanenceRefTag=new Buffer(e['prt'],'base64');
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AlreadyUploaded=e['a'];else this.AlreadyUploaded=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.BlobLinkString=e['l'];else this.BlobLinkString=null;
}
_=fK.prototype;
_.__type="LDBlobUploadTicket";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.UploadUrl!=null)o['u']=this.UploadUrl;
	if(this.UploadHeaders!=null){
		o['h']={};
		var d=this.UploadHeaders;
		for(var k in d)o['h'][k]=d[k];
	}
	if(this.Cluster!=null)o['c']=this.Cluster;
	if(this.IsPermanent!=null)o['p']=this.IsPermanent;
	if(this.PermanenceRefTag!=null)o['prt']=this.PermanenceRefTag.toString('base64');
	if(this.AlreadyUploaded!=null)o['a']=this.AlreadyUploaded;
	if(this.BlobLinkString!=null)o['l']=this.BlobLinkString;
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
	if(e&&(e['D']!==null&&e['D']!==undefined))this.ProfileDecryptedHash=new Buffer(e['D'],'base64');
	if(e&&(e['pv']!==null&&e['pv']!==undefined))this.ProfileVideoLink=e['pv'];else this.ProfileVideoLink=null;
	if(e&&(e['Dv']!==null&&e['Dv']!==undefined))this.ProfileVideoDecryptedHash=new Buffer(e['Dv'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Display=e['d'];else this.Display=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Blocked=e['b'];else this.Blocked=null;
	if(e&&(e['wc']!==null&&e['wc']!==undefined))this.WasContact=e['wc'];else this.WasContact=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.HasAppTime=e['t'];else this.HasAppTime=null;
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.Hashidentities=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)this.Hashidentities.push(new fF(d[k]));
	}
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Identities.push(new fw(d[k]));
	}
}
fL.prototype=new b();
fL.prototype.constructor = fL;
_=fL.prototype;
_.__type="LDContactDetails";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Name!=null)o['n']=this.Name;
	if(this.ProfilePictureLink!=null)o['p']=this.ProfilePictureLink;
	if(this.ProfileDecryptedHash!=null)o['D']=this.ProfileDecryptedHash.toString('base64');
	if(this.ProfileVideoLink!=null)o['pv']=this.ProfileVideoLink;
	if(this.ProfileVideoDecryptedHash!=null)o['Dv']=this.ProfileVideoDecryptedHash.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.Display!=null)o['d']=this.Display;
	if(this.Blocked!=null)o['b']=this.Blocked;
	if(this.WasContact!=null)o['wc']=this.WasContact;
	if(this.HasAppTime!=null)o['t']=this.HasAppTime;
	if(this.Hashidentities!=null) {
		o['h']=[];
		var d=this.Hashidentities;
		for(var k = 0; k < d.length; ++k) o['h'].push(d[k].encode());
	}
	if(this.Identities!=null) {
		o['i']=[];
		var d=this.Identities;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
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
	if(e&&(e['rc']!==null&&e['rc']!==undefined))this.ReceiptContainer=new gr(e['rc']);
	if(e&&(e['bic']!==null&&e['bic']!==undefined))this.BillingInfoContainer=new gs(e['bic']);
}
_=fM.prototype;
_.__type="LDPurchaseData";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ReceiptContainer!=null)o['rc']=this.ReceiptContainer.encode();
	if(this.BillingInfoContainer!=null)o['bic']=this.BillingInfoContainer.encode();
	return o;
}
_.ReceiptContainer=null;
_.BillingInfoContainer=null;
function gt(e){
	fu.call(this,e);
}
gt.prototype=new fu();
gt.prototype.constructor = gt;
_=gt.prototype;
_.__type="LDFeature";
_.encode=function(o){
	if(o===undefined)o={};
	fu.prototype.encode.call(this,o);
	return o;
}
function fN(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfoUserMutable=new gu(e['ai']);
	if(e&&(e['si']!==null&&e['si']!==undefined))this.StickerPackInfoUserMutable=new gv(e['si']);
}
_=fN.prototype;
_.__type="LDItemInfoUserMutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfoUserMutable!=null)o['ai']=this.AppInfoUserMutable.encode();
	if(this.StickerPackInfoUserMutable!=null)o['si']=this.StickerPackInfoUserMutable.encode();
	return o;
}
_.AppInfoUserMutable=null;
_.StickerPackInfoUserMutable=null;
function fO(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfoSystemMutable=new gw(e['ai']);
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.StickerPackInfoSystemMutable=new gx(e['ii']);
}
_=fO.prototype;
_.__type="LDItemInfoSystemMutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfoSystemMutable!=null)o['ai']=this.AppInfoSystemMutable.encode();
	if(this.StickerPackInfoSystemMutable!=null)o['ii']=this.StickerPackInfoSystemMutable.encode();
	return o;
}
_.AppInfoSystemMutable=null;
_.StickerPackInfoSystemMutable=null;
function fP(e){
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Provider=e['p'];else this.Provider=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Certificate=e['c'];else this.Certificate=null;
	if(e&&(e['ct']!==null&&e['ct']!==undefined))this.ConsumerToken=e['ct'];else this.ConsumerToken=null;
	if(e&&(e['cs']!==null&&e['cs']!==undefined))this.ConsumerSecret=e['cs'];else this.ConsumerSecret=null;
	if(e&&(e['at']!==null&&e['at']!==undefined))this.AccessToken=e['at'];else this.AccessToken=null;
	if(e&&(e['as']!==null&&e['as']!==undefined))this.AccessSecret=e['as'];else this.AccessSecret=null;
	if(e&&(e['rt']!==null&&e['rt']!==undefined))this.RefreshToken=e['rt'];else this.RefreshToken=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Expiration=e['e'];else this.Expiration=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.BlobsFolder=e['f'];else this.BlobsFolder=null;
}
_=fP.prototype;
_.__type="LDCloudConfig";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Provider!=null)o['p']=this.Provider;
	if(this.Certificate!=null)o['c']=this.Certificate;
	if(this.ConsumerToken!=null)o['ct']=this.ConsumerToken;
	if(this.ConsumerSecret!=null)o['cs']=this.ConsumerSecret;
	if(this.AccessToken!=null)o['at']=this.AccessToken;
	if(this.AccessSecret!=null)o['as']=this.AccessSecret;
	if(this.RefreshToken!=null)o['rt']=this.RefreshToken;
	if(this.Expiration!=null)o['e']=this.Expiration;
	if(this.BlobsFolder!=null)o['f']=this.BlobsFolder;
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new Buffer(e['i'],'base64');
}
fQ.prototype=new b();
fQ.prototype.constructor = fQ;
_=fQ.prototype;
_.__type="LDGameChallengeId";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Id!=null)o['i']=this.Id.toString('base64');
	return o;
}
_.Account=null;
_.Id=null;
function fR(e){
	b.call(this,e);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.Latitude=e['x'];else this.Latitude=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.Longitude=e['y'];else this.Longitude=null;
}
fR.prototype=new b();
fR.prototype.constructor = fR;
_=fR.prototype;
_.__type="LDGPSLocation";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Latitude!=null)o['x']=this.Latitude;
	if(this.Longitude!=null)o['y']=this.Longitude;
	return o;
}
_.Latitude=null;
_.Longitude=null;
function fS(e){
	b.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Broadcasted=e['b'];else this.Broadcasted=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Expiration=e['e'];else this.Expiration=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ItemType=e['t'];else this.ItemType=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['fm']!==null&&e['fm']!==undefined))this.FeedMetadata=new gy(e['fm']);
}
fS.prototype=new b();
fS.prototype.constructor = fS;
_=fS.prototype;
_.__type="LDNearbyItemContainer";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Broadcasted!=null)o['b']=this.Broadcasted;
	if(this.Expiration!=null)o['e']=this.Expiration;
	if(this.ItemType!=null)o['t']=this.ItemType;
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.FeedMetadata!=null)o['fm']=this.FeedMetadata.encode();
	return o;
}
_.Broadcasted=null;
_.Expiration=null;
_.ItemType=null;
_.Feed=null;
_.FeedMetadata=null;
function fT(e){
	if(e&&(e['k']!==null&&e['k']!==undefined))this.Key=e['k'];else this.Key=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.UtcTimestamp=e['t'];else this.UtcTimestamp=null;
	if(e&&(e['d']!==null&&e['d']!==undefined)){
		this.AuxiliaryData = {};
		var d = e['d'];
		for(var k in d) this.AuxiliaryData[k]=d[k];
	}
}
_=fT.prototype;
_.__type="LDClientEvent";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Key!=null)o['k']=this.Key;
	if(this.UtcTimestamp!=null)o['t']=this.UtcTimestamp;
	if(this.AuxiliaryData!=null){
		o['d']={};
		var d=this.AuxiliaryData;
		for(var k in d)o['d'][k]=d[k];
	}
	return o;
}
_.Key=null;
_.UtcTimestamp=null;
_.AuxiliaryData=null;
function fV(e){
	b.call(this,e);
	if(e&&(e['tt']!==null&&e['tt']!==undefined))this.TagType=e['tt'];else this.TagType=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Tag=e['t'];else this.Tag=null;
}
fV.prototype=new b();
fV.prototype.constructor = fV;
_=fV.prototype;
_.__type="LDPostTag";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.TagType!=null)o['tt']=this.TagType;
	if(this.Tag!=null)o['t']=this.Tag;
	return o;
}
_.TagType=null;
_.Tag=null;
function fW(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Poster=e['a'];else this.Poster=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new Buffer(e['id'],'base64');
	if(e&&(e['t']!==null&&e['t']!==undefined))this.PostType=e['t'];else this.PostType=null;
}
fW.prototype=new b();
fW.prototype.constructor = fW;
_=fW.prototype;
_.__type="LDPostId";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Poster!=null)o['a']=this.Poster;
	if(this.PostId!=null)o['id']=this.PostId.toString('base64');
	if(this.PostType!=null)o['t']=this.PostType;
	return o;
}
_.Poster=null;
_.PostId=null;
_.PostType=null;
function fY(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Url=e['l'];else this.Url=null;
}
_=fY.prototype;
_.__type="LDJoinFeedLink";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	if(this.Pin!=null)o['p']=this.Pin;
	if(this.Url!=null)o['l']=this.Url;
	return o;
}
_.Timestamp=null;
_.Pin=null;
_.Url=null;
function fZ(e){
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Acceptance=e['a'];else this.Acceptance=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.LastWriteTime=e['t'];else this.LastWriteTime=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.LastRenderableTime=e['r'];else this.LastRenderableTime=null;
}
_=fZ.prototype;
_.__type="LDDirtyFeed";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Acceptance!=null)o['a']=this.Acceptance;
	if(this.LastWriteTime!=null)o['t']=this.LastWriteTime;
	if(this.LastRenderableTime!=null)o['r']=this.LastRenderableTime;
	return o;
}
_.Feed=null;
_.Acceptance=null;
_.LastWriteTime=null;
_.LastRenderableTime=null;
function g_(e){
	b.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.Url=e['u'];else this.Url=null;
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.Headers = {};
		var d = e['h'];
		for(var k in d) this.Headers[k]=d[k];
	}
}
g_.prototype=new b();
g_.prototype.constructor = g_;
_=g_.prototype;
_.__type="LDBlobDownloadTicket";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Url!=null)o['u']=this.Url;
	if(this.Headers!=null){
		o['h']={};
		var d=this.Headers;
		for(var k in d)o['h'][k]=d[k];
	}
	return o;
}
_.Url=null;
_.Headers=null;
function ga(e){
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	if(e&&(e['pv']!==null&&e['pv']!==undefined))this.ProfileVideoLink=e['pv'];else this.ProfileVideoLink=null;
	if(e&&(e['dv']!==null&&e['dv']!==undefined))this.ProfileVideoDecryptedHash=new Buffer(e['dv'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.IdentitySettings=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.IdentitySettings.push(new gz(d[k]));
	}
	if(e&&(e['t']!==null&&e['t']!==undefined))this.HasAppTime=e['t'];else this.HasAppTime=null;
}
_=ga.prototype;
_.__type="LDProfileDetails";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Name!=null)o['n']=this.Name;
	if(this.ProfilePictureLink!=null)o['p']=this.ProfilePictureLink;
	if(this.ProfileDecryptedHash!=null)o['d']=this.ProfileDecryptedHash.toString('base64');
	if(this.ProfileVideoLink!=null)o['pv']=this.ProfileVideoLink;
	if(this.ProfileVideoDecryptedHash!=null)o['dv']=this.ProfileVideoDecryptedHash.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.IdentitySettings!=null) {
		o['i']=[];
		var d=this.IdentitySettings;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	if(this.HasAppTime!=null)o['t']=this.HasAppTime;
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
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Identities.push(new fw(d[k]));
	}
	if(e&&(e['t']!==null&&e['t']!==undefined))this.HasAppTime=e['t'];else this.HasAppTime=null;
	if(e&&(e['pv']!==null&&e['pv']!==undefined))this.ProfileVideoLink=e['pv'];else this.ProfileVideoLink=null;
	if(e&&(e['dv']!==null&&e['dv']!==undefined))this.ProfileVideoDecryptedHash=new Buffer(e['dv'],'base64');
}
_=gb.prototype;
_.__type="LDContactProfile";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Name!=null)o['n']=this.Name;
	if(this.ProfilePictureLink!=null)o['p']=this.ProfilePictureLink;
	if(this.ProfileDecryptedHash!=null)o['d']=this.ProfileDecryptedHash.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.Identities!=null) {
		o['i']=[];
		var d=this.Identities;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	if(this.HasAppTime!=null)o['t']=this.HasAppTime;
	if(this.ProfileVideoLink!=null)o['pv']=this.ProfileVideoLink;
	if(this.ProfileVideoDecryptedHash!=null)o['dv']=this.ProfileVideoDecryptedHash.toString('base64');
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
	if(e&&(e['f']!==null&&e['f']!==undefined)){
		this.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)this.Features.push(d[k]);
	}
	if(e&&(e['p']!==null&&e['p']!==undefined)){
		this.Settings = {};
		var d = e['p'];
		for(var k in d) this.Settings[k]=new ax(d[k]);
	}
}
_=gc.prototype;
_.__type="LDProfilePublicState";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Features!=null) {
		o['f']=[];
		var d=this.Features;
		for(var k = 0; k < d.length; ++k) o['f'].push(d[k]);
	}
	if(this.Settings!=null){
		o['p']={};
		var d=this.Settings;
		for(var k in d)o['p'][k]=d[k].encode();
	}
	return o;
}
_.Features=null;
_.Settings=null;
function gd(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfo=new gA(e['ai']);
	if(e&&(e['si']!==null&&e['si']!==undefined))this.StickerPackInfo=new gB(e['si']);
}
_=gd.prototype;
_.__type="LDItemInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfo!=null)o['ai']=this.AppInfo.encode();
	if(this.StickerPackInfo!=null)o['si']=this.StickerPackInfo.encode();
	return o;
}
_.AppInfo=null;
_.StickerPackInfo=null;
function ge(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfoList=new gC(e['ai']);
	if(e&&(e['si']!==null&&e['si']!==undefined))this.StickerPackInfoList=new gD(e['si']);
}
_=ge.prototype;
_.__type="LDItemInfoListingContainer";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfoList!=null)o['ai']=this.AppInfoList.encode();
	if(this.StickerPackInfoList!=null)o['si']=this.StickerPackInfoList.encode();
	return o;
}
_.AppInfoList=null;
_.StickerPackInfoList=null;
function gf(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ClientApiKeyId=new Buffer(e['k'],'base64');
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ClientApiKeySecret=new Buffer(e['s'],'base64');
	if(e&&(e['S']!==null&&e['S']!==undefined))this.ServerApiKeySecret=new Buffer(e['S'],'base64');
	if(e&&(e['t']!==null&&e['t']!==undefined))this.CreationTime=e['t'];else this.CreationTime=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Deactivated=e['d'];else this.Deactivated=null;
}
gf.prototype=new b();
gf.prototype.constructor = gf;
_=gf.prototype;
_.__type="LDApiKey";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ClientApiKeyId!=null)o['k']=this.ClientApiKeyId.toString('base64');
	if(this.ClientApiKeySecret!=null)o['s']=this.ClientApiKeySecret.toString('base64');
	if(this.ServerApiKeySecret!=null)o['S']=this.ServerApiKeySecret.toString('base64');
	if(this.CreationTime!=null)o['t']=this.CreationTime;
	if(this.Deactivated!=null)o['d']=this.Deactivated;
	return o;
}
_.ClientApiKeyId=null;
_.ClientApiKeySecret=null;
_.ServerApiKeySecret=null;
_.CreationTime=null;
_.Deactivated=null;
function gg(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.ProfileName=e['n'];else this.ProfileName=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];else this.Score=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Rank=e['r'];else this.Rank=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ProfileDecryptedHash=new Buffer(e['d'],'base64');
}
gg.prototype=new b();
gg.prototype.constructor = gg;
_=gg.prototype;
_.__type="LDScoreBoardEntry";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.ProfileName!=null)o['n']=this.ProfileName;
	if(this.ProfilePictureLink!=null)o['p']=this.ProfilePictureLink;
	if(this.Score!=null)o['s']=this.Score;
	if(this.Rank!=null)o['r']=this.Rank;
	if(this.ProfileDecryptedHash!=null)o['d']=this.ProfileDecryptedHash.toString('base64');
	return o;
}
_.Account=null;
_.ProfileName=null;
_.ProfilePictureLink=null;
_.Score=null;
_.Rank=null;
_.ProfileDecryptedHash=null;
function gh(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Width=e['w'];else this.Width=null;
	if(e&&(e['h']!==null&&e['h']!==undefined))this.Height=e['h'];else this.Height=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ThumbnailUrl=e['s'];else this.ThumbnailUrl=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FullsizeUrl=e['f'];else this.FullsizeUrl=null;
	if(e&&(e['S']!==null&&e['S']!==undefined))this.FileSize=e['S'];else this.FileSize=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContentType=e['c'];else this.ContentType=null;
}
_=gh.prototype;
_.__type="LDImageSearchResult";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Title!=null)o['t']=this.Title;
	if(this.Width!=null)o['w']=this.Width;
	if(this.Height!=null)o['h']=this.Height;
	if(this.ThumbnailUrl!=null)o['s']=this.ThumbnailUrl;
	if(this.FullsizeUrl!=null)o['f']=this.FullsizeUrl;
	if(this.FileSize!=null)o['S']=this.FileSize;
	if(this.ContentType!=null)o['c']=this.ContentType;
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
	if(e&&(e['p']!==null&&e['p']!==undefined)){
		this.Posts=[];
		var d = e['p'];
		for(var k=0; k<d.length;++k)this.Posts.push(new gj(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
_=gi.prototype;
_.__type="LDWall";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Posts!=null) {
		o['p']=[];
		var d=this.Posts;
		for(var k = 0; k < d.length; ++k) o['p'].push(d[k].encode());
	}
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
_.Posts=null;
_.ContinuationKey=null;
function gj(e){
	b.call(this,e);
	if(e&&(e['v']!==null&&e['v']!==undefined))this.VideoPost=new gE(e['v']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MessagePost=new gF(e['m']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ScreenShotPost=new gG(e['s']);
}
gj.prototype=new b();
gj.prototype.constructor = gj;
_=gj.prototype;
_.__type="LDPostContainer";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.VideoPost!=null)o['v']=this.VideoPost.encode();
	if(this.MessagePost!=null)o['m']=this.MessagePost.encode();
	if(this.ScreenShotPost!=null)o['s']=this.ScreenShotPost.encode();
	return o;
}
_.VideoPost=null;
_.MessagePost=null;
_.ScreenShotPost=null;
function gk(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.DisplayName=e['n'];else this.DisplayName=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OmletId=new fw(e['o']);
}
gk.prototype=new b();
gk.prototype.constructor = gk;
_=gk.prototype;
_.__type="LDUser";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.DisplayName!=null)o['n']=this.DisplayName;
	if(this.ProfilePictureLink!=null)o['p']=this.ProfilePictureLink;
	if(this.OmletId!=null)o['o']=this.OmletId.encode();
	return o;
}
_.Account=null;
_.DisplayName=null;
_.ProfilePictureLink=null;
_.OmletId=null;
function gl(e){
	if(e&&(e['pt']!==null&&e['pt']!==undefined))this.PostTag=new fV(e['pt']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Localization=e['l'];else this.Localization=null;
}
_=gl.prototype;
_.__type="LDPostTagWithLocalization";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.PostTag!=null)o['pt']=this.PostTag.encode();
	if(this.Localization!=null)o['l']=this.Localization;
	return o;
}
_.PostTag=null;
_.Localization=null;
function gm(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageName=e['p'];else this.PackageName=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.AppName=e['n'];else this.AppName=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.IconBlobLink=e['i'];else this.IconBlobLink=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.WallPostCount=e['c'];else this.WallPostCount=null;
}
gm.prototype=new b();
gm.prototype.constructor = gm;
_=gm.prototype;
_.__type="LDPackageInfo";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PackageName!=null)o['p']=this.PackageName;
	if(this.AppName!=null)o['n']=this.AppName;
	if(this.IconBlobLink!=null)o['i']=this.IconBlobLink;
	if(this.WallPostCount!=null)o['c']=this.WallPostCount;
	return o;
}
_.PackageName=null;
_.AppName=null;
_.IconBlobLink=null;
_.WallPostCount=null;
function gn(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new aw(e['f']);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.AppId=new Buffer(e['id'],'base64');
	if(e&&(e['pid']!==null&&e['pid']!==undefined))this.PackageId=e['pid'];else this.PackageId=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.LobbyName=e['n'];else this.LobbyName=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Stripe=e['s'];else this.Stripe=null;
	if(e&&(e['dn']!==null&&e['dn']!==undefined))this.DisplayName=e['dn'];else this.DisplayName=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Members=e['m'];else this.Members=null;
}
gn.prototype=new b();
gn.prototype.constructor = gn;
_=gn.prototype;
_.__type="LDPublicChatInfo";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.AppId!=null)o['id']=this.AppId.toString('base64');
	if(this.PackageId!=null)o['pid']=this.PackageId;
	if(this.LobbyName!=null)o['n']=this.LobbyName;
	if(this.Stripe!=null)o['s']=this.Stripe;
	if(this.DisplayName!=null)o['dn']=this.DisplayName;
	if(this.Members!=null)o['m']=this.Members;
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
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.LastAppName=e['n'];else this.LastAppName=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.LastAppIconBlobLink=e['b'];else this.LastAppIconBlobLink=null;
	if(e&&(e['o']!==null&&e['o']!==undefined))this.Online=e['o'];else this.Online=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.LastOnline=e['t'];else this.LastOnline=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.StreamingLink=e['s'];else this.StreamingLink=null;
	if(e&&(e['S']!==null&&e['S']!==undefined))this.LastStream=e['S'];else this.LastStream=null;
}
go.prototype=new b();
go.prototype.constructor = go;
_=go.prototype;
_.__type="LDPresenceState";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.LastAppName!=null)o['n']=this.LastAppName;
	if(this.LastAppIconBlobLink!=null)o['b']=this.LastAppIconBlobLink;
	if(this.Online!=null)o['o']=this.Online;
	if(this.LastOnline!=null)o['t']=this.LastOnline;
	if(this.StreamingLink!=null)o['s']=this.StreamingLink;
	if(this.LastStream!=null)o['S']=this.LastStream;
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
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Flagger=e['w'];else this.Flagger=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Reason=e['r'];else this.Reason=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
}
_=gq.prototype;
_.__type="LDFlaggedRecord";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Flagger!=null)o['w']=this.Flagger;
	if(this.Reason!=null)o['r']=this.Reason;
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	return o;
}
_.Flagger=null;
_.Reason=null;
_.Timestamp=null;
function gr(e){
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MockReceipt=new gH(e['m']);
}
_=gr.prototype;
_.__type="LDReceiptContainer";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.MockReceipt!=null)o['m']=this.MockReceipt.encode();
	return o;
}
_.MockReceipt=null;
function gs(e){
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MockBillingInfo=new gI(e['m']);
}
_=gs.prototype;
_.__type="LDBillingInfoContainer";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.MockBillingInfo!=null)o['m']=this.MockBillingInfo.encode();
	return o;
}
_.MockBillingInfo=null;
function gJ(e){
}
_=gJ.prototype;
_.__type="LDItemInfoUserMutable";
_.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function gu(e){
	gJ.call(this,e);
	if(e&&(e['ae']!==null&&e['ae']!==undefined))this.AndroidEnabled=e['ae'];else this.AndroidEnabled=null;
	if(e&&(e['adr']!==null&&e['adr']!==undefined))this.AndroidDrawer=e['adr'];else this.AndroidDrawer=null;
	if(e&&(e['aed']!==null&&e['aed']!==undefined))this.AndroidEditor=e['aed'];else this.AndroidEditor=null;
	if(e&&(e['aga']!==null&&e['aga']!==undefined))this.AndroidGame=e['aga'];else this.AndroidGame=null;
	if(e&&(e['ie']!==null&&e['ie']!==undefined))this.IOSEnabled=e['ie'];else this.IOSEnabled=null;
	if(e&&(e['idr']!==null&&e['idr']!==undefined))this.IOSDrawer=e['idr'];else this.IOSDrawer=null;
	if(e&&(e['ied']!==null&&e['ied']!==undefined))this.IOSEditor=e['ied'];else this.IOSEditor=null;
	if(e&&(e['iga']!==null&&e['iga']!==undefined))this.IOSGame=e['iga'];else this.IOSGame=null;
	if(e&&(e['we']!==null&&e['we']!==undefined))this.WebEnabled=e['we'];else this.WebEnabled=null;
	if(e&&(e['wdr']!==null&&e['wdr']!==undefined))this.WebDrawer=e['wdr'];else this.WebDrawer=null;
	if(e&&(e['wed']!==null&&e['wed']!==undefined))this.WebEditor=e['wed'];else this.WebEditor=null;
	if(e&&(e['wga']!==null&&e['wga']!==undefined))this.WebGame=e['wga'];else this.WebGame=null;
	if(e&&(e['sui']!==null&&e['sui']!==undefined))this.IOSStoreUrl=e['sui'];else this.IOSStoreUrl=null;
	if(e&&(e['sua']!==null&&e['sua']!==undefined))this.AndroidStoreUrl=e['sua'];else this.AndroidStoreUrl=null;
	if(e&&(e['suw']!==null&&e['suw']!==undefined))this.WebUrl=e['suw'];else this.WebUrl=null;
	if(e&&(e['icb']!==null&&e['icb']!==undefined))this.IOSCallback=e['icb'];else this.IOSCallback=null;
	if(e&&(e['apn']!==null&&e['apn']!==undefined))this.AndroidPackageName=e['apn'];else this.AndroidPackageName=null;
	if(e&&(e['ibls']!==null&&e['ibls']!==undefined))this.IconBlobLinkString=e['ibls'];else this.IconBlobLinkString=null;
	if(e&&(e['ssl']!==null&&e['ssl']!==undefined)){
		this.ScreenShotsList=[];
		var d = e['ssl'];
		for(var k=0; k<d.length;++k)this.ScreenShotsList.push(new gK(d[k]));
	}
	if(e&&(e['asl']!==null&&e['asl']!==undefined)){
		this.AppStoresList=[];
		var d = e['asl'];
		for(var k=0; k<d.length;++k)this.AppStoresList.push(new gL(d[k]));
	}
	if(e&&(e['lc']!==null&&e['lc']!==undefined))this.Languages=e['lc'];else this.Languages=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['nt']!==null&&e['nt']!==undefined))this.NameTranslations=e['nt'];else this.NameTranslations=null;
	if(e&&(e['ru']!==null&&e['ru']!==undefined))this.RedirectUris=e['ru'];else this.RedirectUris=null;
	if(e&&(e['vpru']!==null&&e['vpru']!==undefined))this.VideoPostReportUri=e['vpru'];else this.VideoPostReportUri=null;
	if(e&&(e['vpd']!==null&&e['vpd']!==undefined))this.VideoPostDomain=e['vpd'];else this.VideoPostDomain=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['dt']!==null&&e['dt']!==undefined))this.DescriptionTranslations=e['dt'];else this.DescriptionTranslations=null;
	if(e&&(e['ucd']!==null&&e['ucd']!==undefined))this.UserCardDomain=e['ucd'];else this.UserCardDomain=null;
	if(e&&(e['ucfiai']!==null&&e['ucfiai']!==undefined))this.UserCardFullIOSAppId=e['ucfiai'];else this.UserCardFullIOSAppId=null;
	if(e&&(e['ucils']!==null&&e['ucils']!==undefined))this.UserCardIOSLinkScheme=e['ucils'];else this.UserCardIOSLinkScheme=null;
	if(e&&(e['uctpl']!==null&&e['uctpl']!==undefined))this.UserCardTemplate=e['uctpl'];else this.UserCardTemplate=null;
	if(e&&(e['ucwbg']!==null&&e['ucwbg']!==undefined))this.UserCardWebBackground=e['ucwbg'];else this.UserCardWebBackground=null;
	if(e&&(e['ucacbg']!==null&&e['ucacbg']!==undefined))this.UserCardAssetCardBackground=e['ucacbg'];else this.UserCardAssetCardBackground=null;
	if(e&&(e['ucadp']!==null&&e['ucadp']!==undefined))this.UserCardAssetDefaultProfile=e['ucadp'];else this.UserCardAssetDefaultProfile=null;
	if(e&&(e['ucapfg']!==null&&e['ucapfg']!==undefined))this.UserCardAssetProfileForeground=e['ucapfg'];else this.UserCardAssetProfileForeground=null;
	if(e&&(e['ucdm']!==null&&e['ucdm']!==undefined))this.UserCardDefaultMessage=e['ucdm'];else this.UserCardDefaultMessage=null;
	if(e&&(e['ucstt']!==null&&e['ucstt']!==undefined))this.UserCardShareTitleTemplate=e['ucstt'];else this.UserCardShareTitleTemplate=null;
	if(e&&(e['ucsdt']!==null&&e['ucsdt']!==undefined))this.UserCardShareDescriptionTemplate=e['ucsdt'];else this.UserCardShareDescriptionTemplate=null;
	if(e&&(e['uciasi']!==null&&e['uciasi']!==undefined))this.UserCardIOSAppStoreId=e['uciasi'];else this.UserCardIOSAppStoreId=null;
	if(e&&(e['apsks']!==null&&e['apsks']!==undefined))this.AndroidPackageSigningKeySha256s=e['apsks'];else this.AndroidPackageSigningKeySha256s=null;
	if(e&&(e['ucit']!==null&&e['ucit']!==undefined))this.UserCardIntroTitle=e['ucit'];else this.UserCardIntroTitle=null;
	if(e&&(e['ucid']!==null&&e['ucid']!==undefined))this.UserCardIntroDescription=e['ucid'];else this.UserCardIntroDescription=null;
	if(e&&(e['pbmd']!==null&&e['pbmd']!==undefined))this.PortalBetaMetadata=e['pbmd'];else this.PortalBetaMetadata=null;
}
gu.prototype=new gJ();
gu.prototype.constructor = gu;
_=gu.prototype;
_.__type="LDAppInfoUserMutable";
_.encode=function(o){
	if(o===undefined)o={};
	gJ.prototype.encode.call(this,o);
	if(this.AndroidEnabled!=null)o['ae']=this.AndroidEnabled;
	if(this.AndroidDrawer!=null)o['adr']=this.AndroidDrawer;
	if(this.AndroidEditor!=null)o['aed']=this.AndroidEditor;
	if(this.AndroidGame!=null)o['aga']=this.AndroidGame;
	if(this.IOSEnabled!=null)o['ie']=this.IOSEnabled;
	if(this.IOSDrawer!=null)o['idr']=this.IOSDrawer;
	if(this.IOSEditor!=null)o['ied']=this.IOSEditor;
	if(this.IOSGame!=null)o['iga']=this.IOSGame;
	if(this.WebEnabled!=null)o['we']=this.WebEnabled;
	if(this.WebDrawer!=null)o['wdr']=this.WebDrawer;
	if(this.WebEditor!=null)o['wed']=this.WebEditor;
	if(this.WebGame!=null)o['wga']=this.WebGame;
	if(this.IOSStoreUrl!=null)o['sui']=this.IOSStoreUrl;
	if(this.AndroidStoreUrl!=null)o['sua']=this.AndroidStoreUrl;
	if(this.WebUrl!=null)o['suw']=this.WebUrl;
	if(this.IOSCallback!=null)o['icb']=this.IOSCallback;
	if(this.AndroidPackageName!=null)o['apn']=this.AndroidPackageName;
	if(this.IconBlobLinkString!=null)o['ibls']=this.IconBlobLinkString;
	if(this.ScreenShotsList!=null) {
		o['ssl']=[];
		var d=this.ScreenShotsList;
		for(var k = 0; k < d.length; ++k) o['ssl'].push(d[k].encode());
	}
	if(this.AppStoresList!=null) {
		o['asl']=[];
		var d=this.AppStoresList;
		for(var k = 0; k < d.length; ++k) o['asl'].push(d[k].encode());
	}
	if(this.Languages!=null)o['lc']=this.Languages;
	if(this.Name!=null)o['n']=this.Name;
	if(this.NameTranslations!=null)o['nt']=this.NameTranslations;
	if(this.RedirectUris!=null)o['ru']=this.RedirectUris;
	if(this.VideoPostReportUri!=null)o['vpru']=this.VideoPostReportUri;
	if(this.VideoPostDomain!=null)o['vpd']=this.VideoPostDomain;
	if(this.Description!=null)o['d']=this.Description;
	if(this.DescriptionTranslations!=null)o['dt']=this.DescriptionTranslations;
	if(this.UserCardDomain!=null)o['ucd']=this.UserCardDomain;
	if(this.UserCardFullIOSAppId!=null)o['ucfiai']=this.UserCardFullIOSAppId;
	if(this.UserCardIOSLinkScheme!=null)o['ucils']=this.UserCardIOSLinkScheme;
	if(this.UserCardTemplate!=null)o['uctpl']=this.UserCardTemplate;
	if(this.UserCardWebBackground!=null)o['ucwbg']=this.UserCardWebBackground;
	if(this.UserCardAssetCardBackground!=null)o['ucacbg']=this.UserCardAssetCardBackground;
	if(this.UserCardAssetDefaultProfile!=null)o['ucadp']=this.UserCardAssetDefaultProfile;
	if(this.UserCardAssetProfileForeground!=null)o['ucapfg']=this.UserCardAssetProfileForeground;
	if(this.UserCardDefaultMessage!=null)o['ucdm']=this.UserCardDefaultMessage;
	if(this.UserCardShareTitleTemplate!=null)o['ucstt']=this.UserCardShareTitleTemplate;
	if(this.UserCardShareDescriptionTemplate!=null)o['ucsdt']=this.UserCardShareDescriptionTemplate;
	if(this.UserCardIOSAppStoreId!=null)o['uciasi']=this.UserCardIOSAppStoreId;
	if(this.AndroidPackageSigningKeySha256s!=null)o['apsks']=this.AndroidPackageSigningKeySha256s;
	if(this.UserCardIntroTitle!=null)o['ucit']=this.UserCardIntroTitle;
	if(this.UserCardIntroDescription!=null)o['ucid']=this.UserCardIntroDescription;
	if(this.PortalBetaMetadata!=null)o['pbmd']=this.PortalBetaMetadata;
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
	if(e&&(e['lc']!==null&&e['lc']!==undefined))this.Languages=e['lc'];else this.Languages=null;
	if(e&&(e['tg']!==null&&e['tg']!==undefined)){
		this.Tags=[];
		var d = e['tg'];
		for(var k=0;k<d.length;++k)this.Tags.push(d[k]);
	}
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['nt']!==null&&e['nt']!==undefined)){
		this.NameTranslations = {};
		var d = e['nt'];
		for(var k in d) this.NameTranslations[k]=d[k];
	}
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['dt']!==null&&e['dt']!==undefined)){
		this.DescriptionTranslations = {};
		var d = e['dt'];
		for(var k in d) this.DescriptionTranslations[k]=d[k];
	}
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PortraitPreviewPackLink=e['p'];else this.PortraitPreviewPackLink=null;
	if(e&&(e['pl']!==null&&e['pl']!==undefined))this.LandscapePreviewPackLink=e['pl'];else this.LandscapePreviewPackLink=null;
	if(e&&(e['pdh']!==null&&e['pdh']!==undefined))this.PortraitEncryptedPreviewHash=new Buffer(e['pdh'],'base64');
	if(e&&(e['pdhl']!==null&&e['pdhl']!==undefined))this.LandscapeEncryptedPreviewHash=new Buffer(e['pdhl'],'base64');
	if(e&&(e['s']!==null&&e['s']!==undefined)){
		this.Stickers=[];
		var d = e['s'];
		for(var k=0; k<d.length;++k)this.Stickers.push(new gM(d[k]));
	}
	if(e&&(e['op']!==null&&e['op']!==undefined))this.OriginalPublisher=e['op'];else this.OriginalPublisher=null;
}
gv.prototype=new gJ();
gv.prototype.constructor = gv;
_=gv.prototype;
_.__type="LDStickerPackInfoUserMutable";
_.encode=function(o){
	if(o===undefined)o={};
	gJ.prototype.encode.call(this,o);
	if(this.Languages!=null)o['lc']=this.Languages;
	if(this.Tags!=null) {
		o['tg']=[];
		var d=this.Tags;
		for(var k = 0; k < d.length; ++k) o['tg'].push(d[k]);
	}
	if(this.Name!=null)o['n']=this.Name;
	if(this.NameTranslations!=null){
		o['nt']={};
		var d=this.NameTranslations;
		for(var k in d)o['nt'][k]=d[k];
	}
	if(this.Description!=null)o['d']=this.Description;
	if(this.DescriptionTranslations!=null){
		o['dt']={};
		var d=this.DescriptionTranslations;
		for(var k in d)o['dt'][k]=d[k];
	}
	if(this.PortraitPreviewPackLink!=null)o['p']=this.PortraitPreviewPackLink;
	if(this.LandscapePreviewPackLink!=null)o['pl']=this.LandscapePreviewPackLink;
	if(this.PortraitEncryptedPreviewHash!=null)o['pdh']=this.PortraitEncryptedPreviewHash.toString('base64');
	if(this.LandscapeEncryptedPreviewHash!=null)o['pdhl']=this.LandscapeEncryptedPreviewHash.toString('base64');
	if(this.Stickers!=null) {
		o['s']=[];
		var d=this.Stickers;
		for(var k = 0; k < d.length; ++k) o['s'].push(d[k].encode());
	}
	if(this.OriginalPublisher!=null)o['op']=this.OriginalPublisher;
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
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PublishedState=e['p'];else this.PublishedState=null;
	if(e&&(e['ep']!==null&&e['ep']!==undefined))this.WasEverPublished=e['ep'];else this.WasEverPublished=null;
	if(e&&(e['$']!==null&&e['$']!==undefined))this.Price=new gO(e['$']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.CreationTimestamp=e['c'];else this.CreationTimestamp=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.LastModifiedTimestamp=e['m'];else this.LastModifiedTimestamp=null;
}
_=gN.prototype;
_.__type="LDItemInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.PublishedState!=null)o['p']=this.PublishedState;
	if(this.WasEverPublished!=null)o['ep']=this.WasEverPublished;
	if(this.Price!=null)o['$']=this.Price.encode();
	if(this.CreationTimestamp!=null)o['c']=this.CreationTimestamp;
	if(this.LastModifiedTimestamp!=null)o['m']=this.LastModifiedTimestamp;
	return o;
}
_.PublishedState=null;
_.WasEverPublished=null;
_.Price=null;
_.CreationTimestamp=null;
_.LastModifiedTimestamp=null;
function gw(e){
	gN.call(this,e);
}
gw.prototype=new gN();
gw.prototype.constructor = gw;
_=gw.prototype;
_.__type="LDAppInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	gN.prototype.encode.call(this,o);
	return o;
}
function gx(e){
	gN.call(this,e);
}
gx.prototype=new gN();
gx.prototype.constructor = gx;
_=gx.prototype;
_.__type="LDStickerPackInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	gN.prototype.encode.call(this,o);
	return o;
}
function gy(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.FeedName=e['n'];else this.FeedName=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ThumbnailLink=e['t'];else this.ThumbnailLink=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ThumbnailDecryptedHash=new Buffer(e['d'],'base64');
	if(e&&(e['p']!==null&&e['p']!==undefined))this.RequiresPin=e['p'];else this.RequiresPin=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Latitude=e['l'];else this.Latitude=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];else this.Longitude=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BroadcasterAccount=e['b'];else this.BroadcasterAccount=null;
}
gy.prototype=new b();
gy.prototype.constructor = gy;
_=gy.prototype;
_.__type="LDNearbyItemFeedMetadata";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.FeedName!=null)o['n']=this.FeedName;
	if(this.ThumbnailLink!=null)o['t']=this.ThumbnailLink;
	if(this.ThumbnailDecryptedHash!=null)o['d']=this.ThumbnailDecryptedHash.toString('base64');
	if(this.RequiresPin!=null)o['p']=this.RequiresPin;
	if(this.Latitude!=null)o['l']=this.Latitude;
	if(this.Longitude!=null)o['g']=this.Longitude;
	if(this.BroadcasterAccount!=null)o['b']=this.BroadcasterAccount;
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
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fw(e['i']);
}
_=gz.prototype;
_.__type="LDProfileIdentitySetting";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Identity!=null)o['i']=this.Identity.encode();
	return o;
}
_.Identity=null;
function gP(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ImmutableContainer=new gQ(e['i']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.SystemMutableContainer=new fO(e['s']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UserMutableContainer=new fN(e['u']);
}
_=gP.prototype;
_.__type="LDItemInfo";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ImmutableContainer!=null)o['i']=this.ImmutableContainer.encode();
	if(this.SystemMutableContainer!=null)o['s']=this.SystemMutableContainer.encode();
	if(this.UserMutableContainer!=null)o['u']=this.UserMutableContainer.encode();
	return o;
}
_.ImmutableContainer=null;
_.SystemMutableContainer=null;
_.UserMutableContainer=null;
function gA(e){
	gP.call(this,e);
}
gA.prototype=new gP();
gA.prototype.constructor = gA;
_=gA.prototype;
_.__type="LDAppInfo";
_.encode=function(o){
	if(o===undefined)o={};
	gP.prototype.encode.call(this,o);
	return o;
}
function gB(e){
	gP.call(this,e);
}
gB.prototype=new gP();
gB.prototype.constructor = gB;
_=gB.prototype;
_.__type="LDStickerPackInfo";
_.encode=function(o){
	if(o===undefined)o={};
	gP.prototype.encode.call(this,o);
	return o;
}
function gC(e){
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new gA(d[k]));
	}
	if(e&&(e['nt']!==null&&e['nt']!==undefined))this.NextToken=new Buffer(e['nt'],'base64');
}
_=gC.prototype;
_.__type="LDAppInfoListingWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Items!=null) {
		o['i']=[];
		var d=this.Items;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	if(this.NextToken!=null)o['nt']=this.NextToken.toString('base64');
	return o;
}
_.Items=null;
_.NextToken=null;
function gD(e){
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new gB(d[k]));
	}
	if(e&&(e['nt']!==null&&e['nt']!==undefined))this.NextToken=new Buffer(e['nt'],'base64');
}
_=gD.prototype;
_.__type="LDStickerPackInfoListingWrapper";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Items!=null) {
		o['i']=[];
		var d=this.Items;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	if(this.NextToken!=null)o['nt']=this.NextToken.toString('base64');
	return o;
}
_.Items=null;
_.NextToken=null;
function gR(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fW(e['id']);
	if(e&&(e['ct']!==null&&e['ct']!==undefined))this.CreationDate=e['ct'];else this.CreationDate=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Views=e['v'];else this.Views=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Likes=e['l'];else this.Likes=null;
	if(e&&(e['c']!==null&&e['c']!==undefined)){
		this.Comments=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)this.Comments.push(new gS(d[k]));
	}
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];else this.Score=null;
	if(e&&(e['g']!==null&&e['g']!==undefined)){
		this.PostTags=[];
		var d = e['g'];
		for(var k=0; k<d.length;++k)this.PostTags.push(new fV(d[k]));
	}
	if(e&&(e['un']!==null&&e['un']!==undefined))this.PosterName=e['un'];else this.PosterName=null;
	if(e&&(e['up']!==null&&e['up']!==undefined))this.PosterProfilePictureLink=e['up'];else this.PosterProfilePictureLink=null;
	if(e&&(e['oi']!==null&&e['oi']!==undefined))this.OmletId=new fw(e['oi']);
	if(e&&(e['yl']!==null&&e['yl']!==undefined))this.YouLiked=e['yl'];else this.YouLiked=null;
	if(e&&(e['an']!==null&&e['an']!==undefined))this.AppName=e['an'];else this.AppName=null;
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppIconBlobLink=e['ai'];else this.AppIconBlobLink=null;
}
gR.prototype=new b();
gR.prototype.constructor = gR;
_=gR.prototype;
_.__type="LDPost";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	if(this.CreationDate!=null)o['ct']=this.CreationDate;
	if(this.Title!=null)o['t']=this.Title;
	if(this.Views!=null)o['v']=this.Views;
	if(this.Likes!=null)o['l']=this.Likes;
	if(this.Comments!=null) {
		o['c']=[];
		var d=this.Comments;
		for(var k = 0; k < d.length; ++k) o['c'].push(d[k].encode());
	}
	if(this.Score!=null)o['s']=this.Score;
	if(this.PostTags!=null) {
		o['g']=[];
		var d=this.PostTags;
		for(var k = 0; k < d.length; ++k) o['g'].push(d[k].encode());
	}
	if(this.PosterName!=null)o['un']=this.PosterName;
	if(this.PosterProfilePictureLink!=null)o['up']=this.PosterProfilePictureLink;
	if(this.OmletId!=null)o['oi']=this.OmletId.encode();
	if(this.YouLiked!=null)o['yl']=this.YouLiked;
	if(this.AppName!=null)o['an']=this.AppName;
	if(this.AppIconBlobLink!=null)o['ai']=this.AppIconBlobLink;
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
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlobLinkString=e['b'];else this.BlobLinkString=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.VideoBlobRefTag=new Buffer(e['r'],'base64');
	if(e&&(e['B']!==null&&e['B']!==undefined))this.ThumbnailBlobLinkString=e['B'];else this.ThumbnailBlobLinkString=null;
	if(e&&(e['h']!==null&&e['h']!==undefined))this.HlsUrl=e['h'];else this.HlsUrl=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.LinkUrl=e['u'];else this.LinkUrl=null;
	if(e&&(e['m']!==null&&e['m']!==undefined)){
		this.M3u8s=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)this.M3u8s.push(new gT(d[k]));
	}
	if(e&&(e['H']!==null&&e['H']!==undefined))this.Height=e['H'];else this.Height=null;
	if(e&&(e['W']!==null&&e['W']!==undefined))this.Width=e['W'];else this.Width=null;
	if(e&&(e['D']!==null&&e['D']!==undefined))this.Duration=e['D'];else this.Duration=null;
}
gE.prototype=new gR();
gE.prototype.constructor = gE;
_=gE.prototype;
_.__type="LDVideoPost";
_.encode=function(o){
	if(o===undefined)o={};
	gR.prototype.encode.call(this,o);
	if(this.Description!=null)o['d']=this.Description;
	if(this.BlobLinkString!=null)o['b']=this.BlobLinkString;
	if(this.VideoBlobRefTag!=null)o['r']=this.VideoBlobRefTag.toString('base64');
	if(this.ThumbnailBlobLinkString!=null)o['B']=this.ThumbnailBlobLinkString;
	if(this.HlsUrl!=null)o['h']=this.HlsUrl;
	if(this.LinkUrl!=null)o['u']=this.LinkUrl;
	if(this.M3u8s!=null) {
		o['m']=[];
		var d=this.M3u8s;
		for(var k = 0; k < d.length; ++k) o['m'].push(d[k].encode());
	}
	if(this.Height!=null)o['H']=this.Height;
	if(this.Width!=null)o['W']=this.Width;
	if(this.Duration!=null)o['D']=this.Duration;
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
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Message=e['d'];else this.Message=null;
}
gF.prototype=new gR();
gF.prototype.constructor = gF;
_=gF.prototype;
_.__type="LDMessagePost";
_.encode=function(o){
	if(o===undefined)o={};
	gR.prototype.encode.call(this,o);
	if(this.Message!=null)o['d']=this.Message;
	return o;
}
_.Message=null;
function gG(e){
	gR.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlobLinkString=e['b'];else this.BlobLinkString=null;
	if(e&&(e['tn']!==null&&e['tn']!==undefined))this.ThumbnailLinkString=e['tn'];else this.ThumbnailLinkString=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.LinkUrl=e['u'];else this.LinkUrl=null;
	if(e&&(e['H']!==null&&e['H']!==undefined))this.Height=e['H'];else this.Height=null;
	if(e&&(e['W']!==null&&e['W']!==undefined))this.Width=e['W'];else this.Width=null;
}
gG.prototype=new gR();
gG.prototype.constructor = gG;
_=gG.prototype;
_.__type="LDScreenShotPost";
_.encode=function(o){
	if(o===undefined)o={};
	gR.prototype.encode.call(this,o);
	if(this.Description!=null)o['d']=this.Description;
	if(this.BlobLinkString!=null)o['b']=this.BlobLinkString;
	if(this.ThumbnailLinkString!=null)o['tn']=this.ThumbnailLinkString;
	if(this.LinkUrl!=null)o['u']=this.LinkUrl;
	if(this.Height!=null)o['H']=this.Height;
	if(this.Width!=null)o['W']=this.Width;
	return o;
}
_.Description=null;
_.BlobLinkString=null;
_.ThumbnailLinkString=null;
_.LinkUrl=null;
_.Height=null;
_.Width=null;
function gH(e){
	if(e&&(e['j']!==null&&e['j']!==undefined))this.Junk=new Buffer(e['j'],'base64');
}
_=gH.prototype;
_.__type="LDMockReceipt";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Junk!=null)o['j']=this.Junk.toString('base64');
	return o;
}
_.Junk=null;
function gI(e){
	if(e&&(e['j']!==null&&e['j']!==undefined))this.Junk=new Buffer(e['j'],'base64');
}
_=gI.prototype;
_.__type="LDMockBillingInfo";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Junk!=null)o['j']=this.Junk.toString('base64');
	return o;
}
_.Junk=null;
function gK(e){
	if(e&&(e['tb']!==null&&e['tb']!==undefined))this.ThumbnailBlobLinkString=e['tb'];else this.ThumbnailBlobLinkString=null;
	if(e&&(e['fb']!==null&&e['fb']!==undefined))this.FullsizeBlobLinkString=e['fb'];else this.FullsizeBlobLinkString=null;
}
_=gK.prototype;
_.__type="LDAppScreenshot";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ThumbnailBlobLinkString!=null)o['tb']=this.ThumbnailBlobLinkString;
	if(this.FullsizeBlobLinkString!=null)o['fb']=this.FullsizeBlobLinkString;
	return o;
}
_.ThumbnailBlobLinkString=null;
_.FullsizeBlobLinkString=null;
function gL(e){
	if(e&&(e['e']!==null&&e['e']!==undefined))this.PackageName=e['e'];else this.PackageName=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Url=e['d'];else this.Url=null;
}
_=gL.prototype;
_.__type="LDAppStore";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.PackageName!=null)o['e']=this.PackageName;
	if(this.Url!=null)o['d']=this.Url;
	return o;
}
_.PackageName=null;
_.Url=null;
function gM(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=e['i'];else this.Id=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Width=e['w'];else this.Width=null;
	if(e&&(e['h']!==null&&e['h']!==undefined))this.Height=e['h'];else this.Height=null;
	if(e&&(e['tb']!==null&&e['tb']!==undefined))this.ThumbnailBlobLinkString=e['tb'];else this.ThumbnailBlobLinkString=null;
	if(e&&(e['tdh']!==null&&e['tdh']!==undefined))this.ThumbnailDecryptedHash=new Buffer(e['tdh'],'base64');
	if(e&&(e['fb']!==null&&e['fb']!==undefined))this.FullsizeBlobLinkString=e['fb'];else this.FullsizeBlobLinkString=null;
	if(e&&(e['fdh']!==null&&e['fdh']!==undefined))this.FullsizeDecryptedHash=new Buffer(e['fdh'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.IsVideo=e['v'];else this.IsVideo=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['t']!==null&&e['t']!==undefined)){
		this.Tags=[];
		var d = e['t'];
		for(var k=0;k<d.length;++k)this.Tags.push(d[k]);
	}
}
_=gM.prototype;
_.__type="LDSticker";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Id!=null)o['i']=this.Id;
	if(this.Width!=null)o['w']=this.Width;
	if(this.Height!=null)o['h']=this.Height;
	if(this.ThumbnailBlobLinkString!=null)o['tb']=this.ThumbnailBlobLinkString;
	if(this.ThumbnailDecryptedHash!=null)o['tdh']=this.ThumbnailDecryptedHash.toString('base64');
	if(this.FullsizeBlobLinkString!=null)o['fb']=this.FullsizeBlobLinkString;
	if(this.FullsizeDecryptedHash!=null)o['fdh']=this.FullsizeDecryptedHash.toString('base64');
	if(this.IsVideo!=null)o['v']=this.IsVideo;
	if(this.Name!=null)o['n']=this.Name;
	if(this.Description!=null)o['d']=this.Description;
	if(this.Tags!=null) {
		o['t']=[];
		var d=this.Tags;
		for(var k = 0; k < d.length; ++k) o['t'].push(d[k]);
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
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Free=e['f'];else this.Free=null;
	if(e&&(e['usd']!==null&&e['usd']!==undefined))this.Usd=e['usd'];else this.Usd=null;
}
_=gO.prototype;
_.__type="LDPrice";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Free!=null)o['f']=this.Free;
	if(this.Usd!=null)o['usd']=this.Usd;
	return o;
}
_.Free=null;
_.Usd=null;
function gQ(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfoImmutable=new gU(e['ai']);
	if(e&&(e['si']!==null&&e['si']!==undefined))this.StickerPackInfoImmutable=new gV(e['si']);
}
_=gQ.prototype;
_.__type="LDItemInfoImmutableContainer";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfoImmutable!=null)o['ai']=this.AppInfoImmutable.encode();
	if(this.StickerPackInfoImmutable!=null)o['si']=this.StickerPackInfoImmutable.encode();
	return o;
}
_.AppInfoImmutable=null;
_.StickerPackInfoImmutable=null;
function gS(e){
	if(e&&(e['ct']!==null&&e['ct']!==undefined))this.Commenter=e['ct'];else this.Commenter=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Comment=new Buffer(e['c'],'base64');
}
_=gS.prototype;
_.__type="LDComment";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.Commenter!=null)o['ct']=this.Commenter;
	if(this.Comment!=null)o['c']=this.Comment.toString('base64');
	return o;
}
_.Commenter=null;
_.Comment=null;
function gT(e){
	b.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.BitRate=e['r'];else this.BitRate=null;
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.Headers=[];
		var d = e['h'];
		for(var k=0;k<d.length;++k)this.Headers.push(d[k]);
	}
	if(e&&(e['t']!==null&&e['t']!==undefined)){
		this.Duration=[];
		var d = e['t'];
		for(var k=0;k<d.length;++k)this.Duration.push(d[k]);
	}
	if(e&&(e['b']!==null&&e['b']!==undefined)){
		this.File=[];
		var d = e['b'];
		for(var k=0;k<d.length;++k)this.File.push(d[k]);
	}
}
gT.prototype=new b();
gT.prototype.constructor = gT;
_=gT.prototype;
_.__type="LDM3U8Info";
_.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BitRate!=null)o['r']=this.BitRate;
	if(this.Headers!=null) {
		o['h']=[];
		var d=this.Headers;
		for(var k = 0; k < d.length; ++k) o['h'].push(d[k]);
	}
	if(this.Duration!=null) {
		o['t']=[];
		var d=this.Duration;
		for(var k = 0; k < d.length; ++k) o['t'].push(d[k]);
	}
	if(this.File!=null) {
		o['b']=[];
		var d=this.File;
		for(var k = 0; k < d.length; ++k) o['b'].push(d[k]);
	}
	return o;
}
_.BitRate=null;
_.Headers=null;
_.Duration=null;
_.File=null;
function gW(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=new fy(e['id']);
}
_=gW.prototype;
_.__type="LDItemInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['id']=this.ItemId.encode();
	return o;
}
_.ItemId=null;
function gU(e){
	gW.call(this,e);
}
gU.prototype=new gW();
gU.prototype.constructor = gU;
_=gU.prototype;
_.__type="LDAppInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	gW.prototype.encode.call(this,o);
	return o;
}
function gV(e){
	gW.call(this,e);
}
gV.prototype=new gW();
gV.prototype.constructor = gV;
_=gV.prototype;
_.__type="LDStickerPackInfoImmutable";
_.encode=function(o){
	if(o===undefined)o={};
	gW.prototype.encode.call(this,o);
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
