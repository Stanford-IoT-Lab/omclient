function b(e){
}
b.prototype.encode=function(o){
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
a.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.SequenceNumber!=null)o['#']=this.SequenceNumber;
	if(this.Context!=null)o['@']=this.Context.encode();
	if(this.HelloChallenge!=null)o['*']=this.HelloChallenge.encode();
	if(this.CompleteChallenge!=null)o['+']=this.CompleteChallenge.encode();
	if(this.Ping!=null)o['-']=this.Ping.encode();
	return o;
}
a.prototype.SequenceNumber=null;
a.prototype.Context=null;
a.prototype.HelloChallenge=null;
a.prototype.CompleteChallenge=null;
a.prototype.Ping=null;
function h(e){
	a.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Signup=new i(e['a']);
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Administrative=new j(e['A']);
}
h.prototype=new a();
h.prototype.constructor = h;
h.prototype.encode=function(o){
	if(o===undefined)o={};
	a.prototype.encode.call(this,o);
	if(this.Signup!=null)o['a']=this.Signup.encode();
	if(this.Administrative!=null)o['A']=this.Administrative.encode();
	return o;
}
h.prototype.Signup=null;
h.prototype.Administrative=null;
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
l.prototype.encode=function(o){
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
l.prototype.SequenceNumber=null;
l.prototype.ErrorCode=null;
l.prototype.ErrorDetail=null;
l.prototype.HelloChallenge=null;
l.prototype.CompleteChallenge=null;
l.prototype.Simple=null;
l.prototype.Ping=null;
function r(e){
	l.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Signup=new s(e['a']);
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Administrative=new u(e['A']);
}
r.prototype=new l();
r.prototype.constructor = r;
r.prototype.encode=function(o){
	if(o===undefined)o={};
	l.prototype.encode.call(this,o);
	if(this.Signup!=null)o['a']=this.Signup.encode();
	if(this.Administrative!=null)o['A']=this.Administrative.encode();
	return o;
}
r.prototype.Signup=null;
r.prototype.Administrative=null;
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
}
v.prototype=new a();
v.prototype.constructor = v;
v.prototype.encode=function(o){
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
	return o;
}
v.prototype.Message=null;
v.prototype.Inbox=null;
v.prototype.Blob=null;
v.prototype.Contact=null;
v.prototype.Profile=null;
v.prototype.AddressBook=null;
v.prototype.OmletAppStore=null;
v.prototype.Device=null;
v.prototype.CloudSync=null;
v.prototype.GameChallenge=null;
v.prototype.Subscription=null;
v.prototype.HighScore=null;
v.prototype.NearbyItem=null;
v.prototype.Misc=null;
v.prototype.Oob=null;
v.prototype.WallPost=null;
v.prototype.IdentityToken=null;
v.prototype.PublicChat=null;
v.prototype.ProfileCardViewed=null;
v.prototype.EventSummary=null;
v.prototype.UserModeration=null;
function R(e){
	l.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new S(e['m']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Inbox=new T(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Blob=new U(e['b']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Contact=new V(e['c']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Profile=new W(e['p']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AddressBook=new X(e['a']);
	if(e&&(e['oas']!==null&&e['oas']!==undefined))this.OmletAppStore=new Y(e['oas']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Device=new Z(e['d']);
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
}
R.prototype=new l();
R.prototype.constructor = R;
R.prototype.encode=function(o){
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
	return o;
}
R.prototype.Message=null;
R.prototype.Inbox=null;
R.prototype.Blob=null;
R.prototype.Contact=null;
R.prototype.Profile=null;
R.prototype.AddressBook=null;
R.prototype.OmletAppStore=null;
R.prototype.Device=null;
R.prototype.CloudSync=null;
R.prototype.GameChallenge=null;
R.prototype.Subscription=null;
R.prototype.HighScore=null;
R.prototype.NearbyItem=null;
R.prototype.Misc=null;
R.prototype.Oob=null;
R.prototype.WallPost=null;
R.prototype.IdentityToken=null;
R.prototype.PublicChat=null;
R.prototype.ProfileCardViewed=null;
R.prototype.EventSummary=null;
R.prototype.UserModeration=null;
function an(e){
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
an.prototype.encode=function(o){
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
an.prototype.ClusterEndpoints=null;
an.prototype.ClusterKeys=null;
an.prototype.DefaultCluster=null;
an.prototype.IdpEndpoints=null;
an.prototype.IdpKey=null;
an.prototype.ReadOnlyEndpoints=null;
an.prototype.ReadOnlyKey=null;
function ao(e){
	b.call(this,e);
}
ao.prototype=new b();
ao.prototype.constructor = ao;
ao.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function ap(e){
	ao.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Acceptance=e['a'];else this.Acceptance=null;
}
ap.prototype=new ao();
ap.prototype.constructor = ap;
ap.prototype.encode=function(o){
	if(o===undefined)o={};
	ao.prototype.encode.call(this,o);
	if(this.Acceptance!=null)o['a']=this.Acceptance;
	return o;
}
ap.prototype.Acceptance=null;
function aq(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Expiration=e['e'];
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Latitude=e['a'];
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Radius=e['r'];
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Country=e['c'];else this.Country=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BroadcasterAccount=e['b'];else this.BroadcasterAccount=null;
}
aq.prototype=new b();
aq.prototype.constructor = aq;
aq.prototype.encode=function(o){
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
aq.prototype.Pin=null;
aq.prototype.Expiration=null;
aq.prototype.Latitude=null;
aq.prototype.Longitude=null;
aq.prototype.Radius=null;
aq.prototype.Country=null;
aq.prototype.BroadcasterAccount=null;
function ar(e){
	if(e&&(e['aa']!==null&&e['aa']!==undefined))this.Account=e['aa'];else this.Account=null;
	if(e&&(e['an']!==null&&e['an']!==undefined))this.ProfileName=e['an'];else this.ProfileName=null;
	if(e&&(e['ap']!==null&&e['ap']!==undefined))this.ProfileThumbnailLink=e['ap'];else this.ProfileThumbnailLink=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.IntentLink=e['l'];else this.IntentLink=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['U']!==null&&e['U']!==undefined))this.AppId=new Buffer(e['U'],'base64');
	if(e&&(e['ad']!==null&&e['ad']!==undefined))this.AppDetails=new at(e['ad']);
	if(e&&(e['mo']!==null&&e['mo']!==undefined))this.MobileOS=e['mo'];else this.MobileOS=null;
}
ar.prototype.encode=function(o){
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
ar.prototype.Account=null;
ar.prototype.ProfileName=null;
ar.prototype.ProfileThumbnailLink=null;
ar.prototype.IntentLink=null;
ar.prototype.Pin=null;
ar.prototype.AppId=null;
ar.prototype.AppDetails=null;
ar.prototype.MobileOS=null;
function au(e){
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.FeedName=e['n'];else this.FeedName=null;
	if(e&&(e['td']!==null&&e['td']!==undefined))this.FeedThumbnailLink=e['td'];else this.FeedThumbnailLink=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.IntentLink=e['l'];else this.IntentLink=null;
	if(e&&(e['aa']!==null&&e['aa']!==undefined))this.AdderAccount=e['aa'];else this.AdderAccount=null;
	if(e&&(e['an']!==null&&e['an']!==undefined))this.AdderName=e['an'];else this.AdderName=null;
	if(e&&(e['ap']!==null&&e['ap']!==undefined))this.AdderThumbnailLink=e['ap'];else this.AdderThumbnailLink=null;
	if(e&&(e['ad']!==null&&e['ad']!==undefined))this.AppDetails=new at(e['ad']);
	if(e&&(e['mo']!==null&&e['mo']!==undefined))this.MobileOS=e['mo'];else this.MobileOS=null;
}
au.prototype.encode=function(o){
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
au.prototype.Feed=null;
au.prototype.Pin=null;
au.prototype.FeedName=null;
au.prototype.FeedThumbnailLink=null;
au.prototype.IntentLink=null;
au.prototype.AdderAccount=null;
au.prototype.AdderName=null;
au.prototype.AdderThumbnailLink=null;
au.prototype.AppDetails=null;
au.prototype.MobileOS=null;
function aw(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.EnabledTime=e['t'];else this.EnabledTime=null;
}
aw.prototype=new b();
aw.prototype.constructor = aw;
aw.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.EnabledTime!=null)o['t']=this.EnabledTime;
	return o;
}
aw.prototype.EnabledTime=null;
function ax(e){
	b.call(this,e);
	if(e&&(e['q']!==null&&e['q']!==undefined))this.Request=new h(e['q']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Response=new r(e['r']);
}
ax.prototype=new b();
ax.prototype.constructor = ax;
ax.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Request!=null)o['q']=this.Request.encode();
	if(this.Response!=null)o['r']=this.Response.encode();
	return o;
}
ax.prototype.Request=null;
ax.prototype.Response=null;
function ay(e){
	b.call(this,e);
	if(e&&(e['q']!==null&&e['q']!==undefined))this.Request=new v(e['q']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Response=new R(e['r']);
}
ay.prototype=new b();
ay.prototype.constructor = ay;
ay.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Request!=null)o['q']=this.Request.encode();
	if(this.Response!=null)o['r']=this.Response.encode();
	return o;
}
ay.prototype.Request=null;
ay.prototype.Response=null;
function c(e){
	b.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.DeviceId=new Buffer(e['b'],'base64');
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RootRequestId=new Buffer(e['r'],'base64');
	if(e&&(e['i']!==null&&e['i']!==undefined))this.RequestId=new Buffer(e['i'],'base64');
	if(e&&(e['a']!==null&&e['a']!==undefined))this.RequestingAccount=e['a'];else this.RequestingAccount=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.SourceCluster=e['c'];else this.SourceCluster=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ForwardedFromNode=e['f'];else this.ForwardedFromNode=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.WriteSecure=e['s'];
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
c.prototype.encode=function(o){
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
c.prototype.DeviceId=null;
c.prototype.RootRequestId=null;
c.prototype.RequestId=null;
c.prototype.RequestingAccount=null;
c.prototype.SourceCluster=null;
c.prototype.ForwardedFromNode=null;
c.prototype.WriteSecure=null;
c.prototype.RootIpAddress=null;
c.prototype.AppId=null;
c.prototype.Scopes=null;
c.prototype.PackageId=null;
function e(e){
	b.call(this,e);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.EphmeralKey=new Buffer(e['e'],'base64');
	if(e&&(e['k']!==null&&e['k']!==undefined))this.SourceKey=new Buffer(e['k'],'base64');
	if(e&&(e['c']!==null&&e['c']!==undefined))this.DestinationChallenge=new Buffer(e['c'],'base64');
	if(e&&(e['a']!==null&&e['a']!==undefined))this.ApiKey=new Buffer(e['a'],'base64');
}
e.prototype=new b();
e.prototype.constructor = e;
e.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.EphmeralKey!=null)o['e']=this.EphmeralKey.toString('base64');
	if(this.SourceKey!=null)o['k']=this.SourceKey.toString('base64');
	if(this.DestinationChallenge!=null)o['c']=this.DestinationChallenge.toString('base64');
	if(this.ApiKey!=null)o['a']=this.ApiKey.toString('base64');
	return o;
}
e.prototype.EphmeralKey=null;
e.prototype.SourceKey=null;
e.prototype.DestinationChallenge=null;
e.prototype.ApiKey=null;
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
	if(e&&(e['s']!==null&&e['s']!==undefined))this.System=e['s'];
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.OmlibVersion=e['y'];
	if(e&&(e['z']!==null&&e['z']!==undefined))this.PackageVersion=e['z'];else this.PackageVersion=null;
	if(e&&(e['pr']!==null&&e['pr']!==undefined))this.PushReceivedSinceLastConnection=e['pr'];
}
f.prototype=new b();
f.prototype.constructor = f;
f.prototype.encode=function(o){
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
f.prototype.SourceResponse=null;
f.prototype.Type=null;
f.prototype.Manufacturer=null;
f.prototype.Model=null;
f.prototype.OsVersion=null;
f.prototype.ClientVersion=null;
f.prototype.Locale=null;
f.prototype.AppChallengeResponse=null;
f.prototype.System=null;
f.prototype.PackageId=null;
f.prototype.OmlibVersion=null;
f.prototype.PackageVersion=null;
f.prototype.PushReceivedSinceLastConnection=null;
function g(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NextPingDelayMs=e['n'];else this.NextPingDelayMs=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LastRtt=e['l'];
}
g.prototype=new b();
g.prototype.constructor = g;
g.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.NextPingDelayMs!=null)o['n']=this.NextPingDelayMs;
	if(this.LastRtt!=null)o['l']=this.LastRtt;
	return o;
}
g.prototype.NextPingDelayMs=null;
g.prototype.LastRtt=null;
function az(e){
	b.call(this,e);
}
az.prototype=new b();
az.prototype.constructor = az;
az.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function i(e){
	az.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RegisterWithTokenRequest=new aA(e['r']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ConfirmTokenRequest=new aB(e['c']);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.RegisterWithOAuthRequest=new aC(e['o']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.GetLinkedIdentitiesRequest=new aD(e['i']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.CheckLinkedIdentityRequest=new aE(e['l']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UnlinkIdentityRequest=new aF(e['u']);
	if(e&&(e['O']!==null&&e['O']!==undefined))this.LinkOmletIdentityRequest=new aG(e['O']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.GetAppSigninLinkRequest=new aH(e['s']);
	if(e&&(e['C']!==null&&e['C']!==undefined))this.ConfirmAuthCodeRequest=new aI(e['C']);
	if(e&&(e['S']!==null&&e['S']!==undefined))this.GetSigninLinkRequest=new aJ(e['S']);
	if(e&&(e['cc']!==null&&e['cc']!==undefined))this.ConfirmSigninCodeRequest=new aK(e['cc']);
	if(e&&(e['so']!==null&&e['so']!==undefined))this.GetSSOTokenRequest=new aL(e['so']);
	if(e&&(e['cs']!==null&&e['cs']!==undefined))this.CheckSSOTokenRequest=new aM(e['cs']);
	if(e&&(e['ao']!==null&&e['ao']!==undefined))this.ConfirmSSOTokenRequest=new aN(e['ao']);
	if(e&&(e['dp']!==null&&e['dp']!==undefined))this.DeviceRegistrationStateChangedPush=new aO(e['dp']);
}
i.prototype=new az();
i.prototype.constructor = i;
i.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
i.prototype.RegisterWithTokenRequest=null;
i.prototype.ConfirmTokenRequest=null;
i.prototype.RegisterWithOAuthRequest=null;
i.prototype.GetLinkedIdentitiesRequest=null;
i.prototype.CheckLinkedIdentityRequest=null;
i.prototype.UnlinkIdentityRequest=null;
i.prototype.LinkOmletIdentityRequest=null;
i.prototype.GetAppSigninLinkRequest=null;
i.prototype.ConfirmAuthCodeRequest=null;
i.prototype.GetSigninLinkRequest=null;
i.prototype.ConfirmSigninCodeRequest=null;
i.prototype.GetSSOTokenRequest=null;
i.prototype.CheckSSOTokenRequest=null;
i.prototype.ConfirmSSOTokenRequest=null;
i.prototype.DeviceRegistrationStateChangedPush=null;
function j(e){
	az.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UnblockIdentity=new aP(e['u']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.GetEmailLoginLink=new aQ(e['e']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.GetDetailsByAccount=new aR(e['a']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.GetDetailsByIdentity=new aS(e['i']);
	if(e&&(e['I']!==null&&e['I']!==undefined))this.GetIdentityRecordsRequest=new aT(e['I']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ListFlaggedUsers=new aU(e['f']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.ChangeUserName=new aV(e['n']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ChangeUserPicture=new aW(e['p']);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.DisableGameChallenge=new aX(e['g']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LogUserOut=new aY(e['l']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.GetDeviceRecords=new aZ(e['d']);
	if(e&&(e['ds']!==null&&e['ds']!==undefined))this.DeleteScheduledJobRequest=new ba(e['ds']);
	if(e&&(e['cf']!==null&&e['cf']!==undefined))this.CreateCountryWideFeedRequest=new bb(e['cf']);
	if(e&&(e['bu']!==null&&e['bu']!==undefined))this.BanUserRequest=new bc(e['bu']);
	if(e&&(e['uu']!==null&&e['uu']!==undefined))this.UnbanUserRequest=new bd(e['uu']);
	if(e&&(e['bua']!==null&&e['bua']!==undefined))this.BanUserFromAppRequest=new be(e['bua']);
	if(e&&(e['uua']!==null&&e['uua']!==undefined))this.UnbanUserFromAppRequest=new bf(e['uua']);
	if(e&&(e['blu']!==null&&e['blu']!==undefined))this.BlockUserRequest=new bg(e['blu']);
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GetPermissionsRequest=new bh(e['gp']);
}
j.prototype=new az();
j.prototype.constructor = j;
j.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
j.prototype.UnblockIdentity=null;
j.prototype.GetEmailLoginLink=null;
j.prototype.GetDetailsByAccount=null;
j.prototype.GetDetailsByIdentity=null;
j.prototype.GetIdentityRecordsRequest=null;
j.prototype.ListFlaggedUsers=null;
j.prototype.ChangeUserName=null;
j.prototype.ChangeUserPicture=null;
j.prototype.DisableGameChallenge=null;
j.prototype.LogUserOut=null;
j.prototype.GetDeviceRecords=null;
j.prototype.DeleteScheduledJobRequest=null;
j.prototype.CreateCountryWideFeedRequest=null;
j.prototype.BanUserRequest=null;
j.prototype.UnbanUserRequest=null;
j.prototype.BanUserFromAppRequest=null;
j.prototype.UnbanUserFromAppRequest=null;
j.prototype.BlockUserRequest=null;
j.prototype.GetPermissionsRequest=null;
function m(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.SourceChallenge=new Buffer(e['c'],'base64');
	if(e&&(e['r']!==null&&e['r']!==undefined))this.DestinationResponse=new Buffer(e['r'],'base64');
}
m.prototype=new b();
m.prototype.constructor = m;
m.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.SourceChallenge!=null)o['c']=this.SourceChallenge.toString('base64');
	if(this.DestinationResponse!=null)o['r']=this.DestinationResponse.toString('base64');
	return o;
}
m.prototype.SourceChallenge=null;
m.prototype.DestinationResponse=null;
function n(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LocationIndicator=e['l'];else this.LocationIndicator=null;
}
n.prototype=new b();
n.prototype.constructor = n;
n.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.LocationIndicator!=null)o['l']=this.LocationIndicator;
	return o;
}
n.prototype.LocationIndicator=null;
function p(e){
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Value=e['v'];
}
p.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Value!=null)o['v']=this.Value;
	return o;
}
p.prototype.Value=null;
function q(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ObservedIp=e['i'];else this.ObservedIp=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.UtcMillis=e['t'];else this.UtcMillis=null;
}
q.prototype=new b();
q.prototype.constructor = q;
q.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ObservedIp!=null)o['i']=this.ObservedIp;
	if(this.UtcMillis!=null)o['t']=this.UtcMillis;
	return o;
}
q.prototype.ObservedIp=null;
q.prototype.UtcMillis=null;
function bi(e){
	b.call(this,e);
}
bi.prototype=new b();
bi.prototype.constructor = bi;
bi.prototype.encode=function(o){
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
s.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.AccountDetailsResponse!=null)o['a']=this.AccountDetailsResponse.encode();
	if(this.GetLinkedIdentitiesResponse!=null)o['i']=this.GetLinkedIdentitiesResponse.encode();
	if(this.GetAppSigninLinkResponse!=null)o['s']=this.GetAppSigninLinkResponse.encode();
	if(this.GetSigninLinkResponse!=null)o['S']=this.GetSigninLinkResponse.encode();
	if(this.CheckSSOTokenResponse!=null)o['c']=this.CheckSSOTokenResponse.encode();
	return o;
}
s.prototype.AccountDetailsResponse=null;
s.prototype.GetLinkedIdentitiesResponse=null;
s.prototype.GetAppSigninLinkResponse=null;
s.prototype.GetSigninLinkResponse=null;
s.prototype.CheckSSOTokenResponse=null;
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
u.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.AccountDetailsResponse!=null)o['a']=this.AccountDetailsResponse.encode();
	if(this.GetIdentityRecordsResponse!=null)o['I']=this.GetIdentityRecordsResponse.encode();
	if(this.ListFlaggedUsers!=null)o['f']=this.ListFlaggedUsers.encode();
	if(this.GetDeviceRecords!=null)o['d']=this.GetDeviceRecords.encode();
	if(this.GetPermissionsResponse!=null)o['gp']=this.GetPermissionsResponse.encode();
	return o;
}
u.prototype.AccountDetailsResponse=null;
u.prototype.GetIdentityRecordsResponse=null;
u.prototype.ListFlaggedUsers=null;
u.prototype.GetDeviceRecords=null;
u.prototype.GetPermissionsResponse=null;
function w(e){
	az.call(this,e);
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
	if(e&&(e['f']!==null&&e['f']!==undefined))this.AddPendingInvitation=new bL(e['f']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.RemovePendingInvitation=new bM(e['e']);
	if(e&&(e['j']!==null&&e['j']!==undefined))this.GetJoinFeedLink=new bN(e['j']);
	if(e&&(e['J']!==null&&e['J']!==undefined))this.JoinFeed=new bO(e['J']);
	if(e&&(e['B']!==null&&e['B']!==undefined))this.JoinBroadcast=new bP(e['B']);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.DefaultAccess=new bQ(e['x']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFeedDetails=new bR(e['gf']);
	if(e&&(e['D']!==null&&e['D']!==undefined))this.ApplyDocumentRequest=new bS(e['D']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.MessageDeliveryPush=new bT(e['p']);
	if(e&&(e['P']!==null&&e['P']!==undefined))this.RealtimeMessageDeliveryPush=new bU(e['P']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.TerminatedPush=new bV(e['t']);
}
w.prototype=new az();
w.prototype.constructor = w;
w.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
w.prototype.CreateFeed=null;
w.prototype.GetMessagesSince=null;
w.prototype.GetMessagesBefore=null;
w.prototype.GetMessagesByType=null;
w.prototype.GetMessageById=null;
w.prototype.AddMessage=null;
w.prototype.UpdateMessage=null;
w.prototype.OverwriteMessage=null;
w.prototype.DeleteMessage=null;
w.prototype.SubscribeFeed=null;
w.prototype.UnsubscribeFeed=null;
w.prototype.SubscribeFeedRealtime=null;
w.prototype.UnsubscribeFeedRealtime=null;
w.prototype.AddMember=null;
w.prototype.RemoveMember=null;
w.prototype.SetFeedName=null;
w.prototype.SetFeedThumbnail=null;
w.prototype.SetFeedVideo=null;
w.prototype.SendRealtime=null;
w.prototype.AddPendingInvitation=null;
w.prototype.RemovePendingInvitation=null;
w.prototype.GetJoinFeedLink=null;
w.prototype.JoinFeed=null;
w.prototype.JoinBroadcast=null;
w.prototype.DefaultAccess=null;
w.prototype.GetFeedDetails=null;
w.prototype.ApplyDocumentRequest=null;
w.prototype.MessageDeliveryPush=null;
w.prototype.RealtimeMessageDeliveryPush=null;
w.prototype.TerminatedPush=null;
function x(e){
	az.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.GetFeedState=new bW(e['s']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.SetFeedAcceptance=new bX(e['a']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.GetDirtyFeeds=new bY(e['d']);
	if(e&&(e['S']!==null&&e['S']!==undefined))this.SubscribeAccount=new bZ(e['S']);
	if(e&&(e['U']!==null&&e['U']!==undefined))this.UnsubscribeAccount=new ca(e['U']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RegisterPushNotificationKey=new cb(e['r']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MessagePush=new cc(e['m']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.TerminatedPush=new cd(e['t']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.SetAppleBadgeCount=new ce(e['b']);
}
x.prototype=new az();
x.prototype.constructor = x;
x.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
x.prototype.GetFeedState=null;
x.prototype.SetFeedAcceptance=null;
x.prototype.GetDirtyFeeds=null;
x.prototype.SubscribeAccount=null;
x.prototype.UnsubscribeAccount=null;
x.prototype.RegisterPushNotificationKey=null;
x.prototype.MessagePush=null;
x.prototype.TerminatedPush=null;
x.prototype.SetAppleBadgeCount=null;
function y(e){
	az.call(this,e);
	if(e&&(e['ut']!==null&&e['ut']!==undefined))this.GetUploadTicket=new cf(e['ut']);
	if(e&&(e['mut']!==null&&e['mut']!==undefined))this.GetMultipartUploadTicket=new cg(e['mut']);
	if(e&&(e['vc']!==null&&e['vc']!==undefined))this.VerifyUploadCompleted=new ch(e['vc']);
	if(e&&(e['dt']!==null&&e['dt']!==undefined))this.GetDownloadTicket=new ci(e['dt']);
	if(e&&(e['ve']!==null&&e['ve']!==undefined))this.VerifyExistsAndPermanence=new cj(e['ve']);
}
y.prototype=new az();
y.prototype.constructor = y;
y.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.GetUploadTicket!=null)o['ut']=this.GetUploadTicket.encode();
	if(this.GetMultipartUploadTicket!=null)o['mut']=this.GetMultipartUploadTicket.encode();
	if(this.VerifyUploadCompleted!=null)o['vc']=this.VerifyUploadCompleted.encode();
	if(this.GetDownloadTicket!=null)o['dt']=this.GetDownloadTicket.encode();
	if(this.VerifyExistsAndPermanence!=null)o['ve']=this.VerifyExistsAndPermanence.encode();
	return o;
}
y.prototype.GetUploadTicket=null;
y.prototype.GetMultipartUploadTicket=null;
y.prototype.VerifyUploadCompleted=null;
y.prototype.GetDownloadTicket=null;
y.prototype.VerifyExistsAndPermanence=null;
function z(e){
	az.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OverwriteContactsRequest=new ck(e['o']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RemoveContactRequest=new cl(e['r']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlockContactRequest=new cm(e['b']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UnblockContactRequest=new cn(e['u']);
}
z.prototype=new az();
z.prototype.constructor = z;
z.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.OverwriteContactsRequest!=null)o['o']=this.OverwriteContactsRequest.encode();
	if(this.RemoveContactRequest!=null)o['r']=this.RemoveContactRequest.encode();
	if(this.BlockContactRequest!=null)o['b']=this.BlockContactRequest.encode();
	if(this.UnblockContactRequest!=null)o['u']=this.UnblockContactRequest.encode();
	return o;
}
z.prototype.OverwriteContactsRequest=null;
z.prototype.RemoveContactRequest=null;
z.prototype.BlockContactRequest=null;
z.prototype.UnblockContactRequest=null;
function A(e){
	az.call(this,e);
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
A.prototype=new az();
A.prototype.constructor = A;
A.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
A.prototype.GetProfileDetailsRequest=null;
A.prototype.SetNameRequest=null;
A.prototype.SetProfilePictureRequest=null;
A.prototype.SetProfileVideoRequest=null;
A.prototype.GetContactProfileRequest=null;
A.prototype.AddItemsToProfileRequest=null;
A.prototype.RemoveItemsFromProfileRequest=null;
A.prototype.AddFeaturesToProfileRequest=null;
A.prototype.RemoveFeaturesFromProfileRequest=null;
A.prototype.GetProfilePublicStateRequest=null;
A.prototype.GetProfileDetailsAndPublicStateRequest=null;
function B(e){
	az.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UploadEntriesRequest=new cz(e['u']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.GetContactProfileRequest=new cA(e['c']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.GetAddMeLinkRequest=new cB(e['a']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MutualAddContact=new cC(e['m']);
}
B.prototype=new az();
B.prototype.constructor = B;
B.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.UploadEntriesRequest!=null)o['u']=this.UploadEntriesRequest.encode();
	if(this.GetContactProfileRequest!=null)o['c']=this.GetContactProfileRequest.encode();
	if(this.GetAddMeLinkRequest!=null)o['a']=this.GetAddMeLinkRequest.encode();
	if(this.MutualAddContact!=null)o['m']=this.MutualAddContact.encode();
	return o;
}
B.prototype.UploadEntriesRequest=null;
B.prototype.GetContactProfileRequest=null;
B.prototype.GetAddMeLinkRequest=null;
B.prototype.MutualAddContact=null;
function C(e){
	az.call(this,e);
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
C.prototype=new az();
C.prototype.constructor = C;
C.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
C.prototype.CreateItemInfoRequest=null;
C.prototype.UserUpdateItemInfoRequest=null;
C.prototype.SystemUpdateItemInfoRequest=null;
C.prototype.GetItemInfoRequest=null;
C.prototype.ReviewItemRequest=null;
C.prototype.PublishItemRequest=null;
C.prototype.UnpublishItemRequest=null;
C.prototype.DeleteItemRequest=null;
C.prototype.ListItemsForAccountRequest=null;
C.prototype.ListAllItemsRequest=null;
C.prototype.ListPublishedItemsRequest=null;
C.prototype.GenerateGrantForItemRequest=null;
C.prototype.GetItemUsingGrantRequest=null;
C.prototype.DoesItemHaveGrantRequest=null;
C.prototype.DeleteGrantForItemRequest=null;
C.prototype.GenerateApiKeyRequest=null;
C.prototype.DeactivateApiKeyRequest=null;
C.prototype.ListApiKeysRequest=null;
function D(e){
	az.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DeleteDeviceRequest=new cV(e['d']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.AddDeviceRequest=new cW(e['c']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.SetDingTimeoutRequest=new cX(e['t']);
}
D.prototype=new az();
D.prototype.constructor = D;
D.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.DeleteDeviceRequest!=null)o['d']=this.DeleteDeviceRequest.encode();
	if(this.AddDeviceRequest!=null)o['c']=this.AddDeviceRequest.encode();
	if(this.SetDingTimeoutRequest!=null)o['t']=this.SetDingTimeoutRequest.encode();
	return o;
}
D.prototype.DeleteDeviceRequest=null;
D.prototype.AddDeviceRequest=null;
D.prototype.SetDingTimeoutRequest=null;
function E(e){
	az.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetCloudConfigRequest=new cY(e['g']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.SetCloudConfigRequest=new cZ(e['s']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RefreshCloudConfigRequest=new da(e['r']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DisconnectCloudSyncRequest=new db(e['d']);
}
E.prototype=new az();
E.prototype.constructor = E;
E.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.GetCloudConfigRequest!=null)o['g']=this.GetCloudConfigRequest.encode();
	if(this.SetCloudConfigRequest!=null)o['s']=this.SetCloudConfigRequest.encode();
	if(this.RefreshCloudConfigRequest!=null)o['r']=this.RefreshCloudConfigRequest.encode();
	if(this.DisconnectCloudSyncRequest!=null)o['d']=this.DisconnectCloudSyncRequest.encode();
	return o;
}
E.prototype.GetCloudConfigRequest=null;
E.prototype.SetCloudConfigRequest=null;
E.prototype.RefreshCloudConfigRequest=null;
E.prototype.DisconnectCloudSyncRequest=null;
function F(e){
	az.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OptInForAllGamesChallengesRequest=new dc(e['o']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FindGamers=new dd(e['f']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UpdateChallengeLocation=new de(e['u']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.GameChallengeComplete=new df(e['d']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.GameChallenge=new dg(e['c']);
	if(e&&(e['co']!==null&&e['co']!==undefined))this.CheckAccountOptedIn=new dh(e['co']);
	if(e&&(e['ogs']!==null&&e['ogs']!==undefined))this.OptInForGSChallengesRequest=new di(e['ogs']);
	if(e&&(e['fgs']!==null&&e['fgs']!==undefined))this.FindGamersGSRequest=new dj(e['fgs']);
}
F.prototype=new az();
F.prototype.constructor = F;
F.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
F.prototype.OptInForAllGamesChallengesRequest=null;
F.prototype.FindGamers=null;
F.prototype.UpdateChallengeLocation=null;
F.prototype.GameChallengeComplete=null;
F.prototype.GameChallenge=null;
F.prototype.CheckAccountOptedIn=null;
F.prototype.OptInForGSChallengesRequest=null;
F.prototype.FindGamersGSRequest=null;
function G(e){
	az.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.GetSubscriptionUrl=new dk(e['u']);
}
G.prototype=new az();
G.prototype.constructor = G;
G.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.GetSubscriptionUrl!=null)o['u']=this.GetSubscriptionUrl.encode();
	return o;
}
G.prototype.GetSubscriptionUrl=null;
function H(e){
	az.call(this,e);
	if(e&&(e['hs']!==null&&e['hs']!==undefined))this.GetHighScoreRequest=new dl(e['hs']);
	if(e&&(e['rs']!==null&&e['rs']!==undefined))this.ReportScoreRequest=new dm(e['rs']);
	if(e&&(e['ts']!==null&&e['ts']!==undefined))this.GetTopScoresRequest=new dn(e['ts']);
}
H.prototype=new az();
H.prototype.constructor = H;
H.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.GetHighScoreRequest!=null)o['hs']=this.GetHighScoreRequest.encode();
	if(this.ReportScoreRequest!=null)o['rs']=this.ReportScoreRequest.encode();
	if(this.GetTopScoresRequest!=null)o['ts']=this.GetTopScoresRequest.encode();
	return o;
}
H.prototype.GetHighScoreRequest=null;
H.prototype.ReportScoreRequest=null;
H.prototype.GetTopScoresRequest=null;
function I(e){
	az.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BroadcastItemRequest=new dp(e['b']);
	if(e&&(e['ub']!==null&&e['ub']!==undefined))this.UnbroadcastItemRequest=new dq(e['ub']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.SubscribeForNearbyItemsRequest=new dr(e['s']);
	if(e&&(e['us']!==null&&e['us']!==undefined))this.UnsubscribeForNearbyItemsRequest=new ds(e['us']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FetchNearbyItemsRequest=new dt(e['f']);
	if(e&&(e['bp']!==null&&e['bp']!==undefined))this.ItemBroadcastStateChangedPush=new du(e['bp']);
	if(e&&(e['st']!==null&&e['st']!==undefined))this.SubscriptionTerminatedPush=new dv(e['st']);
}
I.prototype=new az();
I.prototype.constructor = I;
I.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.BroadcastItemRequest!=null)o['b']=this.BroadcastItemRequest.encode();
	if(this.UnbroadcastItemRequest!=null)o['ub']=this.UnbroadcastItemRequest.encode();
	if(this.SubscribeForNearbyItemsRequest!=null)o['s']=this.SubscribeForNearbyItemsRequest.encode();
	if(this.UnsubscribeForNearbyItemsRequest!=null)o['us']=this.UnsubscribeForNearbyItemsRequest.encode();
	if(this.FetchNearbyItemsRequest!=null)o['f']=this.FetchNearbyItemsRequest.encode();
	if(this.ItemBroadcastStateChangedPush!=null)o['bp']=this.ItemBroadcastStateChangedPush.encode();
	if(this.SubscriptionTerminatedPush!=null)o['st']=this.SubscriptionTerminatedPush.encode();
	return o;
}
I.prototype.BroadcastItemRequest=null;
I.prototype.UnbroadcastItemRequest=null;
I.prototype.SubscribeForNearbyItemsRequest=null;
I.prototype.UnsubscribeForNearbyItemsRequest=null;
I.prototype.FetchNearbyItemsRequest=null;
I.prototype.ItemBroadcastStateChangedPush=null;
I.prototype.SubscriptionTerminatedPush=null;
function J(e){
	az.call(this,e);
	if(e&&(e['wl']!==null&&e['wl']!==undefined))this.UrlToStoryRequest=new dw(e['wl']);
	if(e&&(e['is']!==null&&e['is']!==undefined))this.ImageSearchRequest=new dx(e['is']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FailureReport=new dy(e['f']);
	if(e&&(e['R']!==null&&e['R']!==undefined))this.EventReport=new dz(e['R']);
	if(e&&(e['F']!==null&&e['F']!==undefined))this.FlagUser=new dA(e['F']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.CreatePlaygroundRequest=new dB(e['p']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFeedbackAccount=new dC(e['gf']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.GetExtraVersions=new dD(e['e']);
}
J.prototype=new az();
J.prototype.constructor = J;
J.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
J.prototype.UrlToStoryRequest=null;
J.prototype.ImageSearchRequest=null;
J.prototype.FailureReport=null;
J.prototype.EventReport=null;
J.prototype.FlagUser=null;
J.prototype.CreatePlaygroundRequest=null;
J.prototype.GetFeedbackAccount=null;
J.prototype.GetExtraVersions=null;
function K(e){
	az.call(this,e);
	if(e&&(e['sf']!==null&&e['sf']!==undefined))this.GetSmsFeedRequest=new dE(e['sf']);
	if(e&&(e['sm']!==null&&e['sm']!==undefined))this.SendSmsMessageRequest=new dF(e['sm']);
	if(e&&(e['sp']!==null&&e['sp']!==undefined))this.SetSmsParticipationRequest=new dG(e['sp']);
}
K.prototype=new az();
K.prototype.constructor = K;
K.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.GetSmsFeedRequest!=null)o['sf']=this.GetSmsFeedRequest.encode();
	if(this.SendSmsMessageRequest!=null)o['sm']=this.SendSmsMessageRequest.encode();
	if(this.SetSmsParticipationRequest!=null)o['sp']=this.SetSmsParticipationRequest.encode();
	return o;
}
K.prototype.GetSmsFeedRequest=null;
K.prototype.SendSmsMessageRequest=null;
K.prototype.SetSmsParticipationRequest=null;
function L(e){
	az.call(this,e);
	if(e&&(e['pv']!==null&&e['pv']!==undefined))this.PostVideo=new dH(e['pv']);
	if(e&&(e['pm']!==null&&e['pm']!==undefined))this.PostMessage=new dI(e['pm']);
	if(e&&(e['ps']!==null&&e['ps']!==undefined))this.PostScreenShot=new dJ(e['ps']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LikePost=new dK(e['l']);
	if(e&&(e['v']!==null&&e['v']!==undefined))this.AddVideoView=new dL(e['v']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FollowUser=new dM(e['f']);
	if(e&&(e['guw']!==null&&e['guw']!==undefined))this.GetUserWall=new dN(e['guw']);
	if(e&&(e['ggw']!==null&&e['ggw']!==undefined))this.GetGameWall=new dO(e['ggw']);
	if(e&&(e['gfw']!==null&&e['gfw']!==undefined))this.GetFollowingWall=new dP(e['gfw']);
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GetPost=new dQ(e['gp']);
	if(e&&(e['gspt']!==null&&e['gspt']!==undefined))this.GetStandardPostTags=new dR(e['gspt']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFollowers=new dS(e['gf']);
	if(e&&(e['gaf']!==null&&e['gaf']!==undefined))this.GetAccountsFollowedRequest=new dT(e['gaf']);
	if(e&&(e['dp']!==null&&e['dp']!==undefined))this.DeletePostRequest=new dU(e['dp']);
	if(e&&(e['ges']!==null&&e['ges']!==undefined))this.GetExternalShareLink=new dV(e['ges']);
	if(e&&(e['cf']!==null&&e['cf']!==undefined))this.CheckFollowing=new dW(e['cf']);
	if(e&&(e['gfc']!==null&&e['gfc']!==undefined))this.GetFollowerCount=new dX(e['gfc']);
	if(e&&(e['gafc']!==null&&e['gafc']!==undefined))this.GetFollowingCount=new dY(e['gafc']);
	if(e&&(e['guwc']!==null&&e['guwc']!==undefined))this.GetUserWallPostCount=new dZ(e['guwc']);
	if(e&&(e['gpp']!==null&&e['gpp']!==undefined))this.GetPackagePosts=new ea(e['gpp']);
	if(e&&(e['upd']!==null&&e['upd']!==undefined))this.UpdatePostDetailsRequest=new eb(e['upd']);
	if(e&&(e['gppi']!==null&&e['gppi']!==undefined))this.GetPackagesRequest=new ec(e['gppi']);
}
L.prototype=new az();
L.prototype.constructor = L;
L.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
	return o;
}
L.prototype.PostVideo=null;
L.prototype.PostMessage=null;
L.prototype.PostScreenShot=null;
L.prototype.LikePost=null;
L.prototype.AddVideoView=null;
L.prototype.FollowUser=null;
L.prototype.GetUserWall=null;
L.prototype.GetGameWall=null;
L.prototype.GetFollowingWall=null;
L.prototype.GetPost=null;
L.prototype.GetStandardPostTags=null;
L.prototype.GetFollowers=null;
L.prototype.GetAccountsFollowedRequest=null;
L.prototype.DeletePostRequest=null;
L.prototype.GetExternalShareLink=null;
L.prototype.CheckFollowing=null;
L.prototype.GetFollowerCount=null;
L.prototype.GetFollowingCount=null;
L.prototype.GetUserWallPostCount=null;
L.prototype.GetPackagePosts=null;
L.prototype.UpdatePostDetailsRequest=null;
L.prototype.GetPackagesRequest=null;
function M(e){
	az.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetIdentityTokenRequest=new ed(e['g']);
}
M.prototype=new az();
M.prototype.constructor = M;
M.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.GetIdentityTokenRequest!=null)o['g']=this.GetIdentityTokenRequest.encode();
	return o;
}
M.prototype.GetIdentityTokenRequest=null;
function N(e){
	az.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetPublicChatRequest=new ee(e['g']);
	if(e&&(e['j']!==null&&e['j']!==undefined))this.JoinPublicChatRequest=new ef(e['j']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LeavePublicChatRequest=new eg(e['l']);
	if(e&&(e['w']!==null&&e['w']!==undefined))this.WriteToPublicChatRequest=new eh(e['w']);
	if(e&&(e['gm']!==null&&e['gm']!==undefined))this.GetPublicChatMembersRequest=new ei(e['gm']);
	if(e&&(e['gr']!==null&&e['gr']!==undefined))this.GetRecentMessagesRequest=new ej(e['gr']);
	if(e&&(e['lc']!==null&&e['lc']!==undefined))this.ListLiveChatsRequest=new ek(e['lc']);
	if(e&&(e['li']!==null&&e['li']!==undefined))this.ListInterestingChatsRequest=new el(e['li']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PublicChatMessageDeliveryPush=new em(e['p']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.PublicChatTerminatedPush=new en(e['t']);
}
N.prototype=new az();
N.prototype.constructor = N;
N.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
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
N.prototype.GetPublicChatRequest=null;
N.prototype.JoinPublicChatRequest=null;
N.prototype.LeavePublicChatRequest=null;
N.prototype.WriteToPublicChatRequest=null;
N.prototype.GetPublicChatMembersRequest=null;
N.prototype.GetRecentMessagesRequest=null;
N.prototype.ListLiveChatsRequest=null;
N.prototype.ListInterestingChatsRequest=null;
N.prototype.PublicChatMessageDeliveryPush=null;
N.prototype.PublicChatTerminatedPush=null;
function O(e){
	az.call(this,e);
}
O.prototype=new az();
O.prototype.constructor = O;
O.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	return o;
}
function P(e){
	az.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.ReportSummaryEventsRequest=new eo(e['r']);
	if(e&&(e['ga']!==null&&e['ga']!==undefined))this.GatherEventsByAppRequest=new ep(e['ga']);
}
P.prototype=new az();
P.prototype.constructor = P;
P.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.ReportSummaryEventsRequest!=null)o['r']=this.ReportSummaryEventsRequest.encode();
	if(this.GatherEventsByAppRequest!=null)o['ga']=this.GatherEventsByAppRequest.encode();
	return o;
}
P.prototype.ReportSummaryEventsRequest=null;
P.prototype.GatherEventsByAppRequest=null;
function Q(e){
	az.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.ListBlockedUsersRequest=new eq(e['l']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UnblockUserRequest=new er(e['u']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlockUserRequest=new es(e['b']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.ReportUserRequest=new et(e['r']);
}
Q.prototype=new az();
Q.prototype.constructor = Q;
Q.prototype.encode=function(o){
	if(o===undefined)o={};
	az.prototype.encode.call(this,o);
	if(this.ListBlockedUsersRequest!=null)o['l']=this.ListBlockedUsersRequest.encode();
	if(this.UnblockUserRequest!=null)o['u']=this.UnblockUserRequest.encode();
	if(this.BlockUserRequest!=null)o['b']=this.BlockUserRequest.encode();
	if(this.ReportUserRequest!=null)o['r']=this.ReportUserRequest.encode();
	return o;
}
Q.prototype.ListBlockedUsersRequest=null;
Q.prototype.UnblockUserRequest=null;
Q.prototype.BlockUserRequest=null;
Q.prototype.ReportUserRequest=null;
function S(e){
	bi.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.GetMessageResponse=new eu(e['m']);
	if(e&&(e['M']!==null&&e['M']!==undefined))this.GetMessagesResponse=new ev(e['M']);
	if(e&&(e['C']!==null&&e['C']!==undefined))this.GetMessagesWithContinuationResponse=new ew(e['C']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.GetJoinFeedLinkResponse=new ex(e['l']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFeedDetails=new ey(e['gf']);
}
S.prototype=new bi();
S.prototype.constructor = S;
S.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetMessageResponse!=null)o['m']=this.GetMessageResponse.encode();
	if(this.GetMessagesResponse!=null)o['M']=this.GetMessagesResponse.encode();
	if(this.GetMessagesWithContinuationResponse!=null)o['C']=this.GetMessagesWithContinuationResponse.encode();
	if(this.GetJoinFeedLinkResponse!=null)o['l']=this.GetJoinFeedLinkResponse.encode();
	if(this.GetFeedDetails!=null)o['gf']=this.GetFeedDetails.encode();
	return o;
}
S.prototype.GetMessageResponse=null;
S.prototype.GetMessagesResponse=null;
S.prototype.GetMessagesWithContinuationResponse=null;
S.prototype.GetJoinFeedLinkResponse=null;
S.prototype.GetFeedDetails=null;
function T(e){
	bi.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DirtyFeeds=new ez(e['d']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.FeedState=new eA(e['s']);
}
T.prototype=new bi();
T.prototype.constructor = T;
T.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.DirtyFeeds!=null)o['d']=this.DirtyFeeds.encode();
	if(this.FeedState!=null)o['s']=this.FeedState.encode();
	return o;
}
T.prototype.DirtyFeeds=null;
T.prototype.FeedState=null;
function U(e){
	bi.call(this,e);
	if(e&&(e['ut']!==null&&e['ut']!==undefined))this.GetUploadTicketResponse=new eB(e['ut']);
	if(e&&(e['mut']!==null&&e['mut']!==undefined))this.GetMultipartUploadTicketResponse=new eC(e['mut']);
	if(e&&(e['dt']!==null&&e['dt']!==undefined))this.GetDownloadTicketResponse=new eD(e['dt']);
}
U.prototype=new bi();
U.prototype.constructor = U;
U.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetUploadTicketResponse!=null)o['ut']=this.GetUploadTicketResponse.encode();
	if(this.GetMultipartUploadTicketResponse!=null)o['mut']=this.GetMultipartUploadTicketResponse.encode();
	if(this.GetDownloadTicketResponse!=null)o['dt']=this.GetDownloadTicketResponse.encode();
	return o;
}
U.prototype.GetUploadTicketResponse=null;
U.prototype.GetMultipartUploadTicketResponse=null;
U.prototype.GetDownloadTicketResponse=null;
function V(e){
	bi.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactDetailsResponse=new eE(e['c']);
}
V.prototype=new bi();
V.prototype.constructor = V;
V.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.ContactDetailsResponse!=null)o['c']=this.ContactDetailsResponse.encode();
	return o;
}
V.prototype.ContactDetailsResponse=null;
function W(e){
	bi.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfileDetailsResponse=new eF(e['p']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactProfileResponse=new eG(e['c']);
	if(e&&(e['pps']!==null&&e['pps']!==undefined))this.GetProfilePublicStateResponse=new eH(e['pps']);
	if(e&&(e['ppp']!==null&&e['ppp']!==undefined))this.GetProfileDetailsAndPublicStateResponse=new eI(e['ppp']);
}
W.prototype=new bi();
W.prototype.constructor = W;
W.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.ProfileDetailsResponse!=null)o['p']=this.ProfileDetailsResponse.encode();
	if(this.ContactProfileResponse!=null)o['c']=this.ContactProfileResponse.encode();
	if(this.GetProfilePublicStateResponse!=null)o['pps']=this.GetProfilePublicStateResponse.encode();
	if(this.GetProfileDetailsAndPublicStateResponse!=null)o['ppp']=this.GetProfileDetailsAndPublicStateResponse.encode();
	return o;
}
W.prototype.ProfileDetailsResponse=null;
W.prototype.ContactProfileResponse=null;
W.prototype.GetProfilePublicStateResponse=null;
W.prototype.GetProfileDetailsAndPublicStateResponse=null;
function X(e){
	bi.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactProfileResponse=new eJ(e['c']);
}
X.prototype=new bi();
X.prototype.constructor = X;
X.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.ContactProfileResponse!=null)o['c']=this.ContactProfileResponse.encode();
	return o;
}
X.prototype.ContactProfileResponse=null;
function Y(e){
	bi.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetItemInfoResponse=new eK(e['g']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.ListItemsResponse=new eL(e['l']);
	if(e&&(e['gg']!==null&&e['gg']!==undefined))this.GenerateGrantForItemResponse=new eM(e['gg']);
	if(e&&(e['gk']!==null&&e['gk']!==undefined))this.GenerateApiKeyResponse=new eN(e['gk']);
	if(e&&(e['lk']!==null&&e['lk']!==undefined))this.ListApiKeysResponse=new eO(e['lk']);
}
Y.prototype=new bi();
Y.prototype.constructor = Y;
Y.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetItemInfoResponse!=null)o['g']=this.GetItemInfoResponse.encode();
	if(this.ListItemsResponse!=null)o['l']=this.ListItemsResponse.encode();
	if(this.GenerateGrantForItemResponse!=null)o['gg']=this.GenerateGrantForItemResponse.encode();
	if(this.GenerateApiKeyResponse!=null)o['gk']=this.GenerateApiKeyResponse.encode();
	if(this.ListApiKeysResponse!=null)o['lk']=this.ListApiKeysResponse.encode();
	return o;
}
Y.prototype.GetItemInfoResponse=null;
Y.prototype.ListItemsResponse=null;
Y.prototype.GenerateGrantForItemResponse=null;
Y.prototype.GenerateApiKeyResponse=null;
Y.prototype.ListApiKeysResponse=null;
function Z(e){
	bi.call(this,e);
}
Z.prototype=new bi();
Z.prototype.constructor = Z;
Z.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	return o;
}
function aa(e){
	bi.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetClientCloudConfigResponse=new eP(e['g']);
}
aa.prototype=new bi();
aa.prototype.constructor = aa;
aa.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetClientCloudConfigResponse!=null)o['g']=this.GetClientCloudConfigResponse.encode();
	return o;
}
aa.prototype.GetClientCloudConfigResponse=null;
function ab(e){
	bi.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FindGamers=new eQ(e['f']);
}
ab.prototype=new bi();
ab.prototype.constructor = ab;
ab.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.FindGamers!=null)o['f']=this.FindGamers.encode();
	return o;
}
ab.prototype.FindGamers=null;
function ac(e){
	bi.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.GetSubscriptionUrl=new eR(e['u']);
}
ac.prototype=new bi();
ac.prototype.constructor = ac;
ac.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetSubscriptionUrl!=null)o['u']=this.GetSubscriptionUrl.encode();
	return o;
}
ac.prototype.GetSubscriptionUrl=null;
function ad(e){
	bi.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ScoreResponse=new eS(e['s']);
	if(e&&(e['ss']!==null&&e['ss']!==undefined))this.ScoresResponse=new eT(e['ss']);
}
ad.prototype=new bi();
ad.prototype.constructor = ad;
ad.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.ScoreResponse!=null)o['s']=this.ScoreResponse.encode();
	if(this.ScoresResponse!=null)o['ss']=this.ScoresResponse.encode();
	return o;
}
ad.prototype.ScoreResponse=null;
ad.prototype.ScoresResponse=null;
function ae(e){
	bi.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BroadcastItemResponse=new eU(e['b']);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FetchNearbyItemsResponse=new eV(e['f']);
}
ae.prototype=new bi();
ae.prototype.constructor = ae;
ae.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.BroadcastItemResponse!=null)o['b']=this.BroadcastItemResponse.encode();
	if(this.FetchNearbyItemsResponse!=null)o['f']=this.FetchNearbyItemsResponse.encode();
	return o;
}
ae.prototype.BroadcastItemResponse=null;
ae.prototype.FetchNearbyItemsResponse=null;
function af(e){
	bi.call(this,e);
	if(e&&(e['wl']!==null&&e['wl']!==undefined))this.UrlToStoryResponse=new eW(e['wl']);
	if(e&&(e['is']!==null&&e['is']!==undefined))this.ImageSearchResponse=new eX(e['is']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.CreatePlaygroundResponse=new eY(e['p']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.GetExtraVersions=new eZ(e['e']);
}
af.prototype=new bi();
af.prototype.constructor = af;
af.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.UrlToStoryResponse!=null)o['wl']=this.UrlToStoryResponse.encode();
	if(this.ImageSearchResponse!=null)o['is']=this.ImageSearchResponse.encode();
	if(this.CreatePlaygroundResponse!=null)o['p']=this.CreatePlaygroundResponse.encode();
	if(this.GetExtraVersions!=null)o['e']=this.GetExtraVersions.encode();
	return o;
}
af.prototype.UrlToStoryResponse=null;
af.prototype.ImageSearchResponse=null;
af.prototype.CreatePlaygroundResponse=null;
af.prototype.GetExtraVersions=null;
function ag(e){
	bi.call(this,e);
	if(e&&(e['gs']!==null&&e['gs']!==undefined))this.GetSmsFeedResponse=new fa(e['gs']);
	if(e&&(e['sm']!==null&&e['sm']!==undefined))this.SendSmsMessageResponse=new fb(e['sm']);
}
ag.prototype=new bi();
ag.prototype.constructor = ag;
ag.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetSmsFeedResponse!=null)o['gs']=this.GetSmsFeedResponse.encode();
	if(this.SendSmsMessageResponse!=null)o['sm']=this.SendSmsMessageResponse.encode();
	return o;
}
ag.prototype.GetSmsFeedResponse=null;
ag.prototype.SendSmsMessageResponse=null;
function ah(e){
	bi.call(this,e);
	if(e&&(e['w']!==null&&e['w']!==undefined))this.WallResponse=new fc(e['w']);
	if(e&&(e['ws']!==null&&e['ws']!==undefined))this.WallsResponse=new fd(e['ws']);
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GetPostResponse=new fe(e['gp']);
	if(e&&(e['ap']!==null&&e['ap']!==undefined))this.AddPostResponse=new ff(e['ap']);
	if(e&&(e['gaf']!==null&&e['gaf']!==undefined))this.GetAccountsFollowedResponse=new fg(e['gaf']);
	if(e&&(e['gspt']!==null&&e['gspt']!==undefined))this.GetStandardPostTagsResponse=new fh(e['gspt']);
	if(e&&(e['gf']!==null&&e['gf']!==undefined))this.GetFollowersResponse=new fi(e['gf']);
	if(e&&(e['ges']!==null&&e['ges']!==undefined))this.GetExternalShareLink=new fj(e['ges']);
	if(e&&(e['gppi']!==null&&e['gppi']!==undefined))this.GetPackagesResponse=new fk(e['gppi']);
}
ah.prototype=new bi();
ah.prototype.constructor = ah;
ah.prototype.encode=function(o){
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
ah.prototype.WallResponse=null;
ah.prototype.WallsResponse=null;
ah.prototype.GetPostResponse=null;
ah.prototype.AddPostResponse=null;
ah.prototype.GetAccountsFollowedResponse=null;
ah.prototype.GetStandardPostTagsResponse=null;
ah.prototype.GetFollowersResponse=null;
ah.prototype.GetExternalShareLink=null;
ah.prototype.GetPackagesResponse=null;
function ai(e){
	bi.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetIdentityTokenResponse=new fl(e['g']);
}
ai.prototype=new bi();
ai.prototype.constructor = ai;
ai.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetIdentityTokenResponse!=null)o['g']=this.GetIdentityTokenResponse.encode();
	return o;
}
ai.prototype.GetIdentityTokenResponse=null;
function aj(e){
	bi.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GetPublicChatResponse=new fm(e['g']);
	if(e&&(e['gm']!==null&&e['gm']!==undefined))this.GetPublicChatMembersResponse=new fn(e['gm']);
	if(e&&(e['gr']!==null&&e['gr']!==undefined))this.GetRecentMessagesResponse=new fo(e['gr']);
	if(e&&(e['lc']!==null&&e['lc']!==undefined))this.ListLiveChatsResponse=new fp(e['lc']);
}
aj.prototype=new bi();
aj.prototype.constructor = aj;
aj.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GetPublicChatResponse!=null)o['g']=this.GetPublicChatResponse.encode();
	if(this.GetPublicChatMembersResponse!=null)o['gm']=this.GetPublicChatMembersResponse.encode();
	if(this.GetRecentMessagesResponse!=null)o['gr']=this.GetRecentMessagesResponse.encode();
	if(this.ListLiveChatsResponse!=null)o['lc']=this.ListLiveChatsResponse.encode();
	return o;
}
aj.prototype.GetPublicChatResponse=null;
aj.prototype.GetPublicChatMembersResponse=null;
aj.prototype.GetRecentMessagesResponse=null;
aj.prototype.ListLiveChatsResponse=null;
function ak(e){
	bi.call(this,e);
}
ak.prototype=new bi();
ak.prototype.constructor = ak;
ak.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	return o;
}
function al(e){
	bi.call(this,e);
	if(e&&(e['ga']!==null&&e['ga']!==undefined))this.GatherEventsByAppResponse=new fq(e['ga']);
}
al.prototype=new bi();
al.prototype.constructor = al;
al.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	if(this.GatherEventsByAppResponse!=null)o['ga']=this.GatherEventsByAppResponse.encode();
	return o;
}
al.prototype.GatherEventsByAppResponse=null;
function am(e){
	bi.call(this,e);
}
am.prototype=new bi();
am.prototype.constructor = am;
am.prototype.encode=function(o){
	if(o===undefined)o={};
	bi.prototype.encode.call(this,o);
	return o;
}
function fr(e){
}
fr.prototype.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function at(e){
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
at.prototype.encode=function(o){
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
at.prototype.Name=null;
at.prototype.NameTranslations=null;
at.prototype.Description=null;
at.prototype.DescriptionTranslations=null;
at.prototype.IOSStoreUrl=null;
at.prototype.AndroidStoreUrl=null;
at.prototype.AndroidPackageName=null;
at.prototype.IconBlobLinkString=null;
at.prototype.ScreenShotLinks=null;
function av(e){
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Kind=e['t'];else this.Kind=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.Key=new Buffer(e['k'],'base64');
}
av.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Account!=null)o['a']=this.Account;
	if(this.Kind!=null)o['t']=this.Kind;
	if(this.Key!=null)o['k']=this.Key.toString('base64');
	return o;
}
av.prototype.Account=null;
av.prototype.Kind=null;
av.prototype.Key=null;
function fs(e){
}
fs.prototype.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function ft(e){
	fs.call(this,e);
}
ft.prototype=new fs();
ft.prototype.constructor = ft;
ft.prototype.encode=function(o){
	if(o===undefined)o={};
	fs.prototype.encode.call(this,o);
	return o;
}
function aA(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Locale=e['l'];else this.Locale=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedCluster=e['c'];else this.RequestedCluster=null;
}
aA.prototype=new b();
aA.prototype.constructor = aA;
aA.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.Account!=null)o['a']=this.Account;
	if(this.Locale!=null)o['l']=this.Locale;
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	if(this.RequestedCluster!=null)o['c']=this.RequestedCluster;
	return o;
}
aA.prototype.Identity=null;
aA.prototype.Account=null;
aA.prototype.Locale=null;
aA.prototype.IpAddress=null;
aA.prototype.RequestedCluster=null;
function aB(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
aB.prototype=new b();
aB.prototype.constructor = aB;
aB.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
aB.prototype.Identity=null;
aB.prototype.Token=null;
function aC(e){
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
aC.prototype=new b();
aC.prototype.constructor = aC;
aC.prototype.encode=function(o){
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
aC.prototype.ServiceType=null;
aC.prototype.Key=null;
aC.prototype.Account=null;
aC.prototype.IpAddress=null;
aC.prototype.RequestedCluster=null;
aC.prototype.Scopes=null;
function aD(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
aD.prototype=new b();
aD.prototype.constructor = aD;
aD.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
aD.prototype.Account=null;
function aE(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedCluster=e['c'];else this.RequestedCluster=null;
}
aE.prototype=new b();
aE.prototype.constructor = aE;
aE.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	if(this.RequestedCluster!=null)o['c']=this.RequestedCluster;
	return o;
}
aE.prototype.IpAddress=null;
aE.prototype.RequestedCluster=null;
function aF(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
aF.prototype=new b();
aF.prototype.constructor = aF;
aF.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
aF.prototype.Identity=null;
aF.prototype.Account=null;
function aG(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
aG.prototype=new b();
aG.prototype.constructor = aG;
aG.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
aG.prototype.Identity=null;
aG.prototype.Account=null;
function aH(e){
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
aH.prototype=new b();
aH.prototype.constructor = aH;
aH.prototype.encode=function(o){
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
aH.prototype.RedirectPage=null;
aH.prototype.Scopes=null;
aH.prototype.LoginServiceType=null;
aH.prototype.LoginKey=null;
aH.prototype.Flow=null;
aH.prototype.IpAddress=null;
aH.prototype.Partner=null;
function aI(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AuthCode=e['a'];else this.AuthCode=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.QueryKey=e['k'];else this.QueryKey=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
}
aI.prototype=new b();
aI.prototype.constructor = aI;
aI.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AuthCode!=null)o['a']=this.AuthCode;
	if(this.QueryKey!=null)o['k']=this.QueryKey;
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	return o;
}
aI.prototype.AuthCode=null;
aI.prototype.QueryKey=null;
aI.prototype.IpAddress=null;
function aJ(e){
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
aJ.prototype=new b();
aJ.prototype.constructor = aJ;
aJ.prototype.encode=function(o){
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
aJ.prototype.RedirectPage=null;
aJ.prototype.Scopes=null;
aJ.prototype.IpAddress=null;
aJ.prototype.RequestedCluster=null;
aJ.prototype.Jwt=null;
function aK(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AuthCode=e['a'];else this.AuthCode=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.QueryKey=e['k'];else this.QueryKey=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IpAddress=e['p'];else this.IpAddress=null;
}
aK.prototype=new b();
aK.prototype.constructor = aK;
aK.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AuthCode!=null)o['a']=this.AuthCode;
	if(this.QueryKey!=null)o['k']=this.QueryKey;
	if(this.IpAddress!=null)o['p']=this.IpAddress;
	return o;
}
aK.prototype.AuthCode=null;
aK.prototype.QueryKey=null;
aK.prototype.IpAddress=null;
function aL(e){
	b.call(this,e);
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
}
aL.prototype=new b();
aL.prototype.constructor = aL;
aL.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Scopes!=null) {
		o['S']=[];
		var d=this.Scopes;
		for(var k = 0; k < d.length; ++k) o['S'].push(d[k]);
	}
	return o;
}
aL.prototype.Scopes=null;
function aM(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
aM.prototype=new b();
aM.prototype.constructor = aM;
aM.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
aM.prototype.Account=null;
aM.prototype.Token=null;
function aN(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
aN.prototype=new b();
aN.prototype.constructor = aN;
aN.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
aN.prototype.Account=null;
aN.prototype.Token=null;
function aO(e){
	b.call(this,e);
}
aO.prototype=new b();
aO.prototype.constructor = aO;
aO.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function aP(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aP.prototype=new b();
aP.prototype.constructor = aP;
aP.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
aP.prototype.Identity=null;
aP.prototype.AdminAccount=null;
function aQ(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aQ.prototype=new b();
aQ.prototype.constructor = aQ;
aQ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
aQ.prototype.Identity=null;
aQ.prototype.AdminAccount=null;
function aR(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.AccountToLookup=e['A'];else this.AccountToLookup=null;
}
aR.prototype=new b();
aR.prototype.constructor = aR;
aR.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.AccountToLookup!=null)o['A']=this.AccountToLookup;
	return o;
}
aR.prototype.AdminAccount=null;
aR.prototype.AccountToLookup=null;
function aS(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aS.prototype=new b();
aS.prototype.constructor = aS;
aS.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
aS.prototype.Identity=null;
aS.prototype.AdminAccount=null;
function aT(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aT.prototype=new b();
aT.prototype.constructor = aT;
aT.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identity!=null)o['i']=this.Identity.encode();
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
aT.prototype.Identity=null;
aT.prototype.AdminAccount=null;
function aU(e){
	b.call(this,e);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.End=e['e'];else this.End=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Start=e['s'];else this.Start=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ContinuationKey=new Buffer(e['k'],'base64');
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aU.prototype=new b();
aU.prototype.constructor = aU;
aU.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.End!=null)o['e']=this.End;
	if(this.Start!=null)o['s']=this.Start;
	if(this.ContinuationKey!=null)o['k']=this.ContinuationKey.toString('base64');
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
aU.prototype.End=null;
aU.prototype.Start=null;
aU.prototype.ContinuationKey=null;
aU.prototype.AdminAccount=null;
function aV(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
}
aV.prototype=new b();
aV.prototype.constructor = aV;
aV.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	if(this.Name!=null)o['n']=this.Name;
	return o;
}
aV.prototype.AdminAccount=null;
aV.prototype.Account=null;
aV.prototype.Name=null;
function aW(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
aW.prototype=new b();
aW.prototype.constructor = aW;
aW.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
aW.prototype.AdminAccount=null;
aW.prototype.Account=null;
aW.prototype.BlobLinkString=null;
aW.prototype.DecryptedHash=null;
function aX(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
}
aX.prototype=new b();
aX.prototype.constructor = aX;
aX.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	return o;
}
aX.prototype.AdminAccount=null;
aX.prototype.Account=null;
function aY(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
}
aY.prototype=new b();
aY.prototype.constructor = aY;
aY.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	return o;
}
aY.prototype.AdminAccount=null;
aY.prototype.Account=null;
function aZ(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Device=e['i'];else this.Device=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
}
aZ.prototype=new b();
aZ.prototype.constructor = aZ;
aZ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Device!=null)o['i']=this.Device;
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	return o;
}
aZ.prototype.Device=null;
aZ.prototype.AdminAccount=null;
function ba(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.JobId=new Buffer(e['id'],'base64');
	if(e&&(e['s']!==null&&e['s']!==undefined))this.JobIdAsRedisString=e['s'];else this.JobIdAsRedisString=null;
}
ba.prototype=new b();
ba.prototype.constructor = ba;
ba.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Cluster!=null)o['c']=this.Cluster;
	if(this.JobId!=null)o['id']=this.JobId.toString('base64');
	if(this.JobIdAsRedisString!=null)o['s']=this.JobIdAsRedisString;
	return o;
}
ba.prototype.AdminAccount=null;
ba.prototype.Cluster=null;
ba.prototype.JobId=null;
ba.prototype.JobIdAsRedisString=null;
function bb(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Country=e['c'];else this.Country=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Days=e['d'];
}
bb.prototype=new b();
bb.prototype.constructor = bb;
bb.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Country!=null)o['c']=this.Country;
	if(this.Days!=null)o['d']=this.Days;
	return o;
}
bb.prototype.AdminAccount=null;
bb.prototype.Country=null;
bb.prototype.Days=null;
function bc(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Duration=e['d'];
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
bc.prototype=new b();
bc.prototype.constructor = bc;
bc.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.Duration!=null)o['d']=this.Duration;
	if(this.Cluster!=null)o['c']=this.Cluster;
	return o;
}
bc.prototype.AdminAccount=null;
bc.prototype.UserKey=null;
bc.prototype.Duration=null;
bc.prototype.Cluster=null;
function bd(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
bd.prototype=new b();
bd.prototype.constructor = bd;
bd.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.Cluster!=null)o['c']=this.Cluster;
	return o;
}
bd.prototype.AdminAccount=null;
bd.prototype.UserKey=null;
bd.prototype.Cluster=null;
function be(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.AppScopeId=new fv(e['s']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Duration=e['d'];
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
be.prototype=new b();
be.prototype.constructor = be;
be.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.AppScopeId!=null)o['s']=this.AppScopeId.encode();
	if(this.Duration!=null)o['d']=this.Duration;
	if(this.Cluster!=null)o['c']=this.Cluster;
	return o;
}
be.prototype.AdminAccount=null;
be.prototype.UserKey=null;
be.prototype.AppScopeId=null;
be.prototype.Duration=null;
be.prototype.Cluster=null;
function bf(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.AppScopeId=new fv(e['s']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
bf.prototype=new b();
bf.prototype.constructor = bf;
bf.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.AppScopeId!=null)o['s']=this.AppScopeId.encode();
	if(this.Cluster!=null)o['c']=this.Cluster;
	return o;
}
bf.prototype.AdminAccount=null;
bf.prototype.UserKey=null;
bf.prototype.AppScopeId=null;
bf.prototype.Cluster=null;
function bg(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Account=e['A'];else this.Account=null;
}
bg.prototype=new b();
bg.prototype.constructor = bg;
bg.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.Account!=null)o['A']=this.Account;
	return o;
}
bg.prototype.AdminAccount=null;
bg.prototype.Account=null;
function bh(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AdminAccount=e['a'];else this.AdminAccount=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
}
bh.prototype=new b();
bh.prototype.constructor = bh;
bh.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AdminAccount!=null)o['a']=this.AdminAccount;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.Cluster!=null)o['c']=this.Cluster;
	return o;
}
bh.prototype.AdminAccount=null;
bh.prototype.UserKey=null;
bh.prototype.Cluster=null;
function bj(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AccountDetails=new fw(e['a']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.WasLegacy=e['l'];
	if(e&&(e['i']!==null&&e['i']!==undefined))this.AppId=new Buffer(e['i'],'base64');
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
}
bj.prototype=new b();
bj.prototype.constructor = bj;
bj.prototype.encode=function(o){
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
bj.prototype.AccountDetails=null;
bj.prototype.WasLegacy=null;
bj.prototype.AppId=null;
bj.prototype.Scopes=null;
function bk(e){
	b.call(this,e);
	if(e&&(e['I']!==null&&e['I']!==undefined)){
		this.Identities=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)this.Identities.push(new fu(d[k]));
	}
}
bk.prototype=new b();
bk.prototype.constructor = bk;
bk.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Identities!=null) {
		o['I']=[];
		var d=this.Identities;
		for(var k = 0; k < d.length; ++k) o['I'].push(d[k].encode());
	}
	return o;
}
bk.prototype.Identities=null;
function bl(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Link=e['l'];else this.Link=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Status=e['s'];else this.Status=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RegisterAuthCode=e['r'];else this.RegisterAuthCode=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AccountDetailsResponse=new bj(e['a']);
}
bl.prototype=new b();
bl.prototype.constructor = bl;
bl.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Link!=null)o['l']=this.Link;
	if(this.Status!=null)o['s']=this.Status;
	if(this.RegisterAuthCode!=null)o['r']=this.RegisterAuthCode;
	if(this.AccountDetailsResponse!=null)o['a']=this.AccountDetailsResponse.encode();
	return o;
}
bl.prototype.Link=null;
bl.prototype.Status=null;
bl.prototype.RegisterAuthCode=null;
bl.prototype.AccountDetailsResponse=null;
function bm(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Link=e['l'];else this.Link=null;
}
bm.prototype=new b();
bm.prototype.constructor = bm;
bm.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Link!=null)o['l']=this.Link;
	return o;
}
bm.prototype.Link=null;
function bn(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.AppName=e['n'];else this.AppName=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.AppIconDirectLink=e['p'];else this.AppIconDirectLink=null;
	if(e&&(e['S']!==null&&e['S']!==undefined)){
		this.Scopes=[];
		var d = e['S'];
		for(var k=0;k<d.length;++k)this.Scopes.push(d[k]);
	}
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.AuthCode=e['c'];else this.AuthCode=null;
}
bn.prototype=new b();
bn.prototype.constructor = bn;
bn.prototype.encode=function(o){
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
bn.prototype.AppName=null;
bn.prototype.AppIconDirectLink=null;
bn.prototype.Scopes=null;
bn.prototype.Identity=null;
bn.prototype.AuthCode=null;
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
bo.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Records!=null) {
		o['r']=[];
		var d=this.Records;
		for(var k = 0; k < d.length; ++k) o['r'].push(d[k]);
	}
	return o;
}
bo.prototype.Records=null;
function bp(e){
	b.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined)){
		this.Details=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)this.Details.push(new fx(d[k]));
	}
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ContinuationKey=new Buffer(e['k'],'base64');
}
bp.prototype=new b();
bp.prototype.constructor = bp;
bp.prototype.encode=function(o){
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
bp.prototype.Details=null;
bp.prototype.ContinuationKey=null;
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
bq.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Records!=null) {
		o['r']=[];
		var d=this.Records;
		for(var k = 0; k < d.length; ++k) o['r'].push(d[k]);
	}
	return o;
}
bq.prototype.Records=null;
function br(e){
	b.call(this,e);
}
br.prototype=new b();
br.prototype.constructor = br;
br.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function bs(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bs.prototype=new b();
bs.prototype.constructor = bs;
bs.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bs.prototype.Feed=null;
function bt(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
}
bt.prototype=new b();
bt.prototype.constructor = bt;
bt.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	return o;
}
bt.prototype.Feed=null;
bt.prototype.Timestamp=null;
function bu(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
}
bu.prototype=new b();
bu.prototype.constructor = bu;
bu.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	return o;
}
bu.prototype.Feed=null;
bu.prototype.Timestamp=null;
function bv(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NextResult=new Buffer(e['n'],'base64');
}
bv.prototype=new b();
bv.prototype.constructor = bv;
bv.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Type!=null)o['t']=this.Type;
	if(this.NextResult!=null)o['n']=this.NextResult.toString('base64');
	return o;
}
bv.prototype.Feed=null;
bv.prototype.Type=null;
bv.prototype.NextResult=null;
function bw(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fy(e['i']);
}
bw.prototype=new b();
bw.prototype.constructor = bw;
bw.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	return o;
}
bw.prototype.Feed=null;
bw.prototype.Id=null;
function bx(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fy(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.AnyMemberWritable=e['w'];else this.AnyMemberWritable=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.FromDevice=e['d'];
}
bx.prototype=new b();
bx.prototype.constructor = bx;
bx.prototype.encode=function(o){
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
bx.prototype.Feed=null;
bx.prototype.Id=null;
bx.prototype.Body=null;
bx.prototype.Version=null;
bx.prototype.AnyMemberWritable=null;
bx.prototype.FromDevice=null;
function by(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fy(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['w']!==null&&e['w']!==undefined))this.AnyMemberWritable=e['w'];else this.AnyMemberWritable=null;
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OldVersion=e['o'];else this.OldVersion=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NewVersion=e['n'];else this.NewVersion=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.FromDevice=e['d'];
}
by.prototype=new b();
by.prototype.constructor = by;
by.prototype.encode=function(o){
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
by.prototype.Feed=null;
by.prototype.Id=null;
by.prototype.Body=null;
by.prototype.AnyMemberWritable=null;
by.prototype.OldVersion=null;
by.prototype.NewVersion=null;
by.prototype.FromDevice=null;
function bz(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fy(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.AnyMemberWritable=e['w'];else this.AnyMemberWritable=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Metadata=new Buffer(e['m'],'base64');
	if(e&&(e['d']!==null&&e['d']!==undefined))this.FromDevice=e['d'];
}
bz.prototype=new b();
bz.prototype.constructor = bz;
bz.prototype.encode=function(o){
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
bz.prototype.Feed=null;
bz.prototype.Id=null;
bz.prototype.Body=null;
bz.prototype.Version=null;
bz.prototype.AnyMemberWritable=null;
bz.prototype.Metadata=null;
bz.prototype.FromDevice=null;
function bA(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fy(e['i']);
}
bA.prototype=new b();
bA.prototype.constructor = bA;
bA.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	return o;
}
bA.prototype.Feed=null;
bA.prototype.Id=null;
function bB(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bB.prototype=new b();
bB.prototype.constructor = bB;
bB.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bB.prototype.Feed=null;
function bC(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bC.prototype=new b();
bC.prototype.constructor = bC;
bC.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bC.prototype.Feed=null;
function bD(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bD.prototype=new b();
bD.prototype.constructor = bD;
bD.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bD.prototype.Feed=null;
function bE(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bE.prototype=new b();
bE.prototype.constructor = bE;
bE.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bE.prototype.Feed=null;
function bF(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Member=e['m'];else this.Member=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Acl=new fz(e['A']);
}
bF.prototype=new b();
bF.prototype.constructor = bF;
bF.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Member!=null)o['m']=this.Member;
	if(this.Acl!=null)o['A']=this.Acl.encode();
	return o;
}
bF.prototype.Feed=null;
bF.prototype.Member=null;
bF.prototype.Acl=null;
function bG(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Member=e['m'];else this.Member=null;
	if(e&&(e['A']!==null&&e['A']!==undefined))this.Acl=new fz(e['A']);
}
bG.prototype=new b();
bG.prototype.constructor = bG;
bG.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Member!=null)o['m']=this.Member;
	if(this.Acl!=null)o['A']=this.Acl.encode();
	return o;
}
bG.prototype.Feed=null;
bG.prototype.Member=null;
bG.prototype.Acl=null;
function bH(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
}
bH.prototype=new b();
bH.prototype.constructor = bH;
bH.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Name!=null)o['n']=this.Name;
	return o;
}
bH.prototype.Feed=null;
bH.prototype.Name=null;
function bI(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
bI.prototype=new b();
bI.prototype.constructor = bI;
bI.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
bI.prototype.Feed=null;
bI.prototype.BlobLinkString=null;
bI.prototype.DecryptedHash=null;
function bJ(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
bJ.prototype=new b();
bJ.prototype.constructor = bJ;
bJ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
bJ.prototype.Feed=null;
bJ.prototype.BlobLinkString=null;
bJ.prototype.DecryptedHash=null;
function bK(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
}
bK.prototype=new b();
bK.prototype.constructor = bK;
bK.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Type!=null)o['t']=this.Type;
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	return o;
}
bK.prototype.Feed=null;
bK.prototype.Type=null;
bK.prototype.Body=null;
function bL(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.IdentityHash=new fA(e['i']);
	if(e&&(e['I']!==null&&e['I']!==undefined))this.Identity=new fu(e['I']);
}
bL.prototype=new b();
bL.prototype.constructor = bL;
bL.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.IdentityHash!=null)o['i']=this.IdentityHash.encode();
	if(this.Identity!=null)o['I']=this.Identity.encode();
	return o;
}
bL.prototype.Feed=null;
bL.prototype.IdentityHash=null;
bL.prototype.Identity=null;
function bM(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.IdentityHash=new fA(e['i']);
}
bM.prototype=new b();
bM.prototype.constructor = bM;
bM.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.IdentityHash!=null)o['i']=this.IdentityHash.encode();
	return o;
}
bM.prototype.Feed=null;
bM.prototype.IdentityHash=null;
function bN(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bN.prototype=new b();
bN.prototype.constructor = bN;
bN.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bN.prototype.Feed=null;
function bO(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
}
bO.prototype=new b();
bO.prototype.constructor = bO;
bO.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Pin!=null)o['p']=this.Pin;
	return o;
}
bO.prototype.Feed=null;
bO.prototype.Pin=null;
function bP(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
}
bP.prototype=new b();
bP.prototype.constructor = bP;
bP.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Pin!=null)o['p']=this.Pin;
	return o;
}
bP.prototype.Feed=null;
bP.prototype.Pin=null;
function bQ(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.PubliclyReadable=e['r'];
	if(e&&(e['mr']!==null&&e['mr']!==undefined))this.MemberReadable=e['mr'];
	if(e&&(e['pw']!==null&&e['pw']!==undefined))this.PubliclyWritable=e['pw'];
	if(e&&(e['mw']!==null&&e['mw']!==undefined))this.MemberWritable=e['mw'];
	if(e&&(e['mfs']!==null&&e['mfs']!==undefined))this.MemberFeedSettingsModifiable=e['mfs'];
	if(e&&(e['mma']!==null&&e['mma']!==undefined))this.MemberMembersAddable=e['mma'];
	if(e&&(e['mmr']!==null&&e['mmr']!==undefined))this.MemberMembersRemovable=e['mmr'];
}
bQ.prototype=new b();
bQ.prototype.constructor = bQ;
bQ.prototype.encode=function(o){
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
bQ.prototype.Feed=null;
bQ.prototype.PubliclyReadable=null;
bQ.prototype.MemberReadable=null;
bQ.prototype.PubliclyWritable=null;
bQ.prototype.MemberWritable=null;
bQ.prototype.MemberFeedSettingsModifiable=null;
bQ.prototype.MemberMembersAddable=null;
bQ.prototype.MemberMembersRemovable=null;
function bR(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bR.prototype=new b();
bR.prototype.constructor = bR;
bR.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bR.prototype.Feed=null;
function bS(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fy(e['i']);
	if(e&&(e['j']!==null&&e['j']!==undefined))this.Javascript=e['j'];else this.Javascript=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Parameters=e['p'];else this.Parameters=null;
}
bS.prototype=new b();
bS.prototype.constructor = bS;
bS.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Javascript!=null)o['j']=this.Javascript;
	if(this.Parameters!=null)o['p']=this.Parameters;
	return o;
}
bS.prototype.Feed=null;
bS.prototype.Id=null;
bS.prototype.Javascript=null;
bS.prototype.Parameters=null;
function bT(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fB(e['m']);
}
bT.prototype=new b();
bT.prototype.constructor = bT;
bT.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
bT.prototype.Message=null;
function bU(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fC(e['m']);
}
bU.prototype=new b();
bU.prototype.constructor = bU;
bU.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
bU.prototype.Message=null;
function bV(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bV.prototype=new b();
bV.prototype.constructor = bV;
bV.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bV.prototype.Feed=null;
function bW(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
bW.prototype=new b();
bW.prototype.constructor = bW;
bW.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
bW.prototype.Feed=null;
function bX(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Acceptance=e['s'];else this.Acceptance=null;
}
bX.prototype=new b();
bX.prototype.constructor = bX;
bX.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Acceptance!=null)o['s']=this.Acceptance;
	return o;
}
bX.prototype.Feed=null;
bX.prototype.Acceptance=null;
function bY(e){
	b.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Since=e['s'];else this.Since=null;
}
bY.prototype=new b();
bY.prototype.constructor = bY;
bY.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Since!=null)o['s']=this.Since;
	return o;
}
bY.prototype.Since=null;
function bZ(e){
	b.call(this,e);
}
bZ.prototype=new b();
bZ.prototype.constructor = bZ;
bZ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function ca(e){
	b.call(this,e);
}
ca.prototype=new b();
ca.prototype.constructor = ca;
ca.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function cb(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PushKey=new fD(e['p']);
}
cb.prototype=new b();
cb.prototype.constructor = cb;
cb.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PushKey!=null)o['p']=this.PushKey.encode();
	return o;
}
cb.prototype.PushKey=null;
function cc(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fB(e['m']);
}
cc.prototype=new b();
cc.prototype.constructor = cc;
cc.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
cc.prototype.Message=null;
function cd(e){
	b.call(this,e);
}
cd.prototype=new b();
cd.prototype.constructor = cd;
cd.prototype.encode=function(o){
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
ce.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BadgeCount!=null)o['b']=this.BadgeCount;
	return o;
}
ce.prototype.BadgeCount=null;
function cf(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Metadata=new fE(e['m']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IsPermanent=e['p'];else this.IsPermanent=null;
	if(e&&(e['prt']!==null&&e['prt']!==undefined))this.PermanenceRefTag=new Buffer(e['prt'],'base64');
	if(e&&(e['e']!==null&&e['e']!==undefined))this.PreferInsecure=e['e'];else this.PreferInsecure=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.AllowLarge=e['l'];else this.AllowLarge=null;
}
cf.prototype=new b();
cf.prototype.constructor = cf;
cf.prototype.encode=function(o){
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
cf.prototype.Account=null;
cf.prototype.Cluster=null;
cf.prototype.Metadata=null;
cf.prototype.IsPermanent=null;
cf.prototype.PermanenceRefTag=null;
cf.prototype.PreferInsecure=null;
cf.prototype.AllowLarge=null;
function cg(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['wm']!==null&&e['wm']!==undefined))this.WholeMetadata=new fE(e['wm']);
	if(e&&(e['pm']!==null&&e['pm']!==undefined)){
		this.PartMetadataList=[];
		var d = e['pm'];
		for(var k=0; k<d.length;++k)this.PartMetadataList.push(new fE(d[k]));
	}
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IsPermanent=e['p'];else this.IsPermanent=null;
	if(e&&(e['prt']!==null&&e['prt']!==undefined))this.PermanenceRefTag=new Buffer(e['prt'],'base64');
	if(e&&(e['e']!==null&&e['e']!==undefined))this.PreferInsecure=e['e'];else this.PreferInsecure=null;
}
cg.prototype=new b();
cg.prototype.constructor = cg;
cg.prototype.encode=function(o){
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
cg.prototype.Account=null;
cg.prototype.Cluster=null;
cg.prototype.WholeMetadata=null;
cg.prototype.PartMetadataList=null;
cg.prototype.IsPermanent=null;
cg.prototype.PermanenceRefTag=null;
cg.prototype.PreferInsecure=null;
function ch(e){
	b.call(this,e);
	if(e&&(e['ut']!==null&&e['ut']!==undefined))this.BlobUploadTicket=new fF(e['ut']);
}
ch.prototype=new b();
ch.prototype.constructor = ch;
ch.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobUploadTicket!=null)o['ut']=this.BlobUploadTicket.encode();
	return o;
}
ch.prototype.BlobUploadTicket=null;
function ci(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.BlobLinkString=e['l'];else this.BlobLinkString=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.PreferInsecure=e['e'];else this.PreferInsecure=null;
}
ci.prototype=new b();
ci.prototype.constructor = ci;
ci.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobLinkString!=null)o['l']=this.BlobLinkString;
	if(this.PreferInsecure!=null)o['e']=this.PreferInsecure;
	return o;
}
ci.prototype.BlobLinkString=null;
ci.prototype.PreferInsecure=null;
function cj(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.BlobLinkString=e['l'];else this.BlobLinkString=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.IsPermanent=e['p'];else this.IsPermanent=null;
	if(e&&(e['prt']!==null&&e['prt']!==undefined))this.PermanenceRefTag=new Buffer(e['prt'],'base64');
}
cj.prototype=new b();
cj.prototype.constructor = cj;
cj.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobLinkString!=null)o['l']=this.BlobLinkString;
	if(this.IsPermanent!=null)o['p']=this.IsPermanent;
	if(this.PermanenceRefTag!=null)o['prt']=this.PermanenceRefTag.toString('base64');
	return o;
}
cj.prototype.BlobLinkString=null;
cj.prototype.IsPermanent=null;
cj.prototype.PermanenceRefTag=null;
function ck(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactAccount=e['c'];else this.ContactAccount=null;
}
ck.prototype=new b();
ck.prototype.constructor = ck;
ck.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactAccount!=null)o['c']=this.ContactAccount;
	return o;
}
ck.prototype.ContactAccount=null;
function cl(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactAccount=e['c'];else this.ContactAccount=null;
}
cl.prototype=new b();
cl.prototype.constructor = cl;
cl.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactAccount!=null)o['c']=this.ContactAccount;
	return o;
}
cl.prototype.ContactAccount=null;
function cm(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactDetails=new fG(e['c']);
}
cm.prototype=new b();
cm.prototype.constructor = cm;
cm.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactDetails!=null)o['c']=this.ContactDetails.encode();
	return o;
}
cm.prototype.ContactDetails=null;
function cn(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactAccount=e['c'];else this.ContactAccount=null;
}
cn.prototype=new b();
cn.prototype.constructor = cn;
cn.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactAccount!=null)o['c']=this.ContactAccount;
	return o;
}
cn.prototype.ContactAccount=null;
function co(e){
	b.call(this,e);
}
co.prototype=new b();
co.prototype.constructor = co;
co.prototype.encode=function(o){
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
cp.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Name!=null)o['n']=this.Name;
	return o;
}
cp.prototype.Name=null;
function cq(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
cq.prototype=new b();
cq.prototype.constructor = cq;
cq.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
cq.prototype.BlobLinkString=null;
cq.prototype.DecryptedHash=null;
function cr(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.BlobLinkString=e['p'];else this.BlobLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.DecryptedHash=new Buffer(e['d'],'base64');
}
cr.prototype=new b();
cr.prototype.constructor = cr;
cr.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobLinkString!=null)o['p']=this.BlobLinkString;
	if(this.DecryptedHash!=null)o['d']=this.DecryptedHash.toString('base64');
	return o;
}
cr.prototype.BlobLinkString=null;
cr.prototype.DecryptedHash=null;
function cs(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedAccount=e['c'];else this.RequestedAccount=null;
}
cs.prototype=new b();
cs.prototype.constructor = cs;
cs.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.RequestedAccount!=null)o['c']=this.RequestedAccount;
	return o;
}
cs.prototype.RequestedAccount=null;
function ct(e){
	b.call(this,e);
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new fH(d[k]));
	}
	if(e&&(e['pd']!==null&&e['pd']!==undefined))this.PurchaseData=new fI(e['pd']);
}
ct.prototype=new b();
ct.prototype.constructor = ct;
ct.prototype.encode=function(o){
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
ct.prototype.ItemType=null;
ct.prototype.Items=null;
ct.prototype.PurchaseData=null;
function cu(e){
	b.call(this,e);
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new fH(d[k]));
	}
}
cu.prototype=new b();
cu.prototype.constructor = cu;
cu.prototype.encode=function(o){
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
cu.prototype.ItemType=null;
cu.prototype.Items=null;
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
cv.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Features!=null) {
		o['f']=[];
		var d=this.Features;
		for(var k = 0; k < d.length; ++k) o['f'].push(d[k]);
	}
	return o;
}
cv.prototype.Features=null;
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
cw.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Features!=null) {
		o['f']=[];
		var d=this.Features;
		for(var k = 0; k < d.length; ++k) o['f'].push(d[k]);
	}
	return o;
}
cw.prototype.Features=null;
function cx(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedAccount=e['c'];else this.RequestedAccount=null;
}
cx.prototype=new b();
cx.prototype.constructor = cx;
cx.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.RequestedAccount!=null)o['c']=this.RequestedAccount;
	return o;
}
cx.prototype.RequestedAccount=null;
function cy(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.RequestedAccount=e['c'];else this.RequestedAccount=null;
}
cy.prototype=new b();
cy.prototype.constructor = cy;
cy.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.RequestedAccount!=null)o['c']=this.RequestedAccount;
	return o;
}
cy.prototype.RequestedAccount=null;
function cz(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.IdentityHashes=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.IdentityHashes.push(new fA(d[k]));
	}
}
cz.prototype=new b();
cz.prototype.constructor = cz;
cz.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.IdentityHashes!=null) {
		o['i']=[];
		var d=this.IdentityHashes;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	return o;
}
cz.prototype.IdentityHashes=null;
function cA(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.IdentityHash=new fA(e['i']);
}
cA.prototype=new b();
cA.prototype.constructor = cA;
cA.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.IdentityHash!=null)o['i']=this.IdentityHash.encode();
	return o;
}
cA.prototype.IdentityHash=null;
function cB(e){
	b.call(this,e);
}
cB.prototype=new b();
cB.prototype.constructor = cB;
cB.prototype.encode=function(o){
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
cC.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
cC.prototype.Account=null;
cC.prototype.Token=null;
function cD(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=e['id'];else this.ItemId=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.ItemInfoUserMutableContainer=new fJ(e['u']);
}
cD.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	if(this.ItemId!=null)o['id']=this.ItemId;
	if(this.ItemInfoUserMutableContainer!=null)o['u']=this.ItemInfoUserMutableContainer.encode();
	return o;
}
cD.prototype.ItemType=null;
cD.prototype.Account=null;
cD.prototype.ItemId=null;
cD.prototype.ItemInfoUserMutableContainer=null;
function cE(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.ItemId=e['ai'];else this.ItemId=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.ItemInfoUserMutableContainer=new fJ(e['u']);
}
cE.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	if(this.ItemId!=null)o['ai']=this.ItemId;
	if(this.ItemInfoUserMutableContainer!=null)o['u']=this.ItemInfoUserMutableContainer.encode();
	return o;
}
cE.prototype.ItemType=null;
cE.prototype.Account=null;
cE.prototype.ItemId=null;
cE.prototype.ItemInfoUserMutableContainer=null;
function cF(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=e['id'];else this.ItemId=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.ItemInfoSystemMutableContainer=new fK(e['u']);
}
cF.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	if(this.ItemId!=null)o['id']=this.ItemId;
	if(this.ItemInfoSystemMutableContainer!=null)o['u']=this.ItemInfoSystemMutableContainer.encode();
	return o;
}
cF.prototype.ItemType=null;
cF.prototype.Account=null;
cF.prototype.ItemId=null;
cF.prototype.ItemInfoSystemMutableContainer=null;
function cG(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=new fH(e['id']);
}
cG.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['id']=this.ItemId.encode();
	return o;
}
cG.prototype.ItemId=null;
function cH(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fH(e['i']);
}
cH.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	return o;
}
cH.prototype.ItemId=null;
function cI(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fH(e['i']);
}
cI.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	return o;
}
cI.prototype.ItemId=null;
function cJ(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fH(e['i']);
}
cJ.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	return o;
}
cJ.prototype.ItemId=null;
function cK(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=e['id'];else this.ItemId=null;
}
cK.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	if(this.ItemId!=null)o['id']=this.ItemId;
	return o;
}
cK.prototype.ItemType=null;
cK.prototype.Account=null;
cK.prototype.ItemId=null;
function cL(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['ac']!==null&&e['ac']!==undefined))this.Account=e['ac'];else this.Account=null;
}
cL.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Account!=null)o['ac']=this.Account;
	return o;
}
cL.prototype.ItemType=null;
cL.prototype.Account=null;
function cM(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
cM.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
cM.prototype.ItemType=null;
cM.prototype.ContinuationKey=null;
function cN(e){
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['lm']!==null&&e['lm']!==undefined))this.LastModified=e['lm'];
}
cN.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.LastModified!=null)o['lm']=this.LastModified;
	return o;
}
cN.prototype.ItemType=null;
cN.prototype.ContinuationKey=null;
cN.prototype.LastModified=null;
function cO(e){
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.ItemId=new fH(e['ii']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.ExpirationTime=e['e'];else this.ExpirationTime=null;
}
cO.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['ii']=this.ItemId.encode();
	if(this.ExpirationTime!=null)o['e']=this.ExpirationTime;
	return o;
}
cO.prototype.ItemId=null;
cO.prototype.ExpirationTime=null;
function cP(e){
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Grant=e['g'];else this.Grant=null;
}
cP.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Grant!=null)o['g']=this.Grant;
	return o;
}
cP.prototype.Grant=null;
function cQ(e){
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.ItemId=new fH(e['ii']);
}
cQ.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['ii']=this.ItemId.encode();
	return o;
}
cQ.prototype.ItemId=null;
function cR(e){
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.ItemId=new fH(e['ii']);
}
cR.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['ii']=this.ItemId.encode();
	return o;
}
cR.prototype.ItemId=null;
function cS(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=new fH(e['id']);
}
cS.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['id']=this.ItemId.encode();
	return o;
}
cS.prototype.ItemId=null;
function cT(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ClientApiKeyId=new Buffer(e['id'],'base64');
}
cT.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ClientApiKeyId!=null)o['id']=this.ClientApiKeyId.toString('base64');
	return o;
}
cT.prototype.ClientApiKeyId=null;
function cU(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=new fH(e['id']);
}
cU.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['id']=this.ItemId.encode();
	return o;
}
cU.prototype.ItemId=null;
function cV(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.PublicKey=new Buffer(e['k'],'base64');
}
cV.prototype=new b();
cV.prototype.constructor = cV;
cV.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PublicKey!=null)o['k']=this.PublicKey.toString('base64');
	return o;
}
cV.prototype.PublicKey=null;
function cW(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.PublicKey=new Buffer(e['k'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
}
cW.prototype=new b();
cW.prototype.constructor = cW;
cW.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PublicKey!=null)o['k']=this.PublicKey.toString('base64');
	if(this.Version!=null)o['v']=this.Version;
	if(this.Description!=null)o['d']=this.Description;
	return o;
}
cW.prototype.PublicKey=null;
cW.prototype.Version=null;
cW.prototype.Description=null;
function cX(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.DingTimeoutMillis=e['t'];else this.DingTimeoutMillis=null;
}
cX.prototype=new b();
cX.prototype.constructor = cX;
cX.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.DingTimeoutMillis!=null)o['t']=this.DingTimeoutMillis;
	return o;
}
cX.prototype.DingTimeoutMillis=null;
function cY(e){
	b.call(this,e);
}
cY.prototype=new b();
cY.prototype.constructor = cY;
cY.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function cZ(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Config=new fL(e['c']);
}
cZ.prototype=new b();
cZ.prototype.constructor = cZ;
cZ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Config!=null)o['c']=this.Config.encode();
	return o;
}
cZ.prototype.Config=null;
function da(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.DoNotTriggerSync=e['t'];else this.DoNotTriggerSync=null;
}
da.prototype=new b();
da.prototype.constructor = da;
da.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.DoNotTriggerSync!=null)o['t']=this.DoNotTriggerSync;
	return o;
}
da.prototype.DoNotTriggerSync=null;
function db(e){
	b.call(this,e);
}
db.prototype=new b();
db.prototype.constructor = db;
db.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dc(e){
	b.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OptIn=e['o'];else this.OptIn=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ServerKicked=e['k'];else this.ServerKicked=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dc.prototype=new b();
dc.prototype.constructor = dc;
dc.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.OptIn!=null)o['o']=this.OptIn;
	if(this.ServerKicked!=null)o['k']=this.ServerKicked;
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
dc.prototype.OptIn=null;
dc.prototype.ServerKicked=null;
dc.prototype.Account=null;
function dd(e){
	b.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameId=new fH(e['g']);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.Latitude=e['x'];else this.Latitude=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.Longitude=e['y'];else this.Longitude=null;
}
dd.prototype=new b();
dd.prototype.constructor = dd;
dd.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.GameId!=null)o['g']=this.GameId.encode();
	if(this.Latitude!=null)o['x']=this.Latitude;
	if(this.Longitude!=null)o['y']=this.Longitude;
	return o;
}
dd.prototype.GameId=null;
dd.prototype.Latitude=null;
dd.prototype.Longitude=null;
function de(e){
	b.call(this,e);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.Latitude=e['x'];else this.Latitude=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.Longitude=e['y'];else this.Longitude=null;
}
de.prototype=new b();
de.prototype.constructor = de;
de.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Latitude!=null)o['x']=this.Latitude;
	if(this.Longitude!=null)o['y']=this.Longitude;
	return o;
}
de.prototype.Latitude=null;
de.prototype.Longitude=null;
function df(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fM(e['i']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];else this.Score=null;
	if(e&&(e['x']!==null&&e['x']!==undefined))this.ChallengeRejected=e['x'];else this.ChallengeRejected=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.ChallengeeLocation=new fN(e['l']);
}
df.prototype=new b();
df.prototype.constructor = df;
df.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Id!=null)o['i']=this.Id.encode();
	if(this.Score!=null)o['s']=this.Score;
	if(this.ChallengeRejected!=null)o['x']=this.ChallengeRejected;
	if(this.ChallengeeLocation!=null)o['l']=this.ChallengeeLocation.encode();
	return o;
}
df.prototype.Id=null;
df.prototype.Score=null;
df.prototype.ChallengeRejected=null;
df.prototype.ChallengeeLocation=null;
function dg(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fM(e['i']);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.ReceiverAccount=e['r'];else this.ReceiverAccount=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameId=new fH(e['g']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];else this.Score=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.GameState=e['t'];else this.GameState=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Location=new fN(e['l']);
}
dg.prototype=new b();
dg.prototype.constructor = dg;
dg.prototype.encode=function(o){
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
dg.prototype.Id=null;
dg.prototype.ReceiverAccount=null;
dg.prototype.GameId=null;
dg.prototype.Score=null;
dg.prototype.GameState=null;
dg.prototype.Location=null;
function dh(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameId=new fH(e['g']);
}
dh.prototype=new b();
dh.prototype.constructor = dh;
dh.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.GameId!=null)o['g']=this.GameId.encode();
	return o;
}
dh.prototype.Account=null;
dh.prototype.GameId=null;
function di(e){
	b.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OptIn=e['o'];else this.OptIn=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ServerKicked=e['k'];else this.ServerKicked=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Game=new fH(e['g']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.All=e['l'];else this.All=null;
}
di.prototype=new b();
di.prototype.constructor = di;
di.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.OptIn!=null)o['o']=this.OptIn;
	if(this.ServerKicked!=null)o['k']=this.ServerKicked;
	if(this.Game!=null)o['g']=this.Game.encode();
	if(this.Account!=null)o['a']=this.Account;
	if(this.All!=null)o['l']=this.All;
	return o;
}
di.prototype.OptIn=null;
di.prototype.ServerKicked=null;
di.prototype.Game=null;
di.prototype.Account=null;
di.prototype.All=null;
function dj(e){
	b.call(this,e);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.Latitude=e['x'];else this.Latitude=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.Longitude=e['y'];else this.Longitude=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameId=new fH(e['g']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Tier=e['t'];else this.Tier=null;
}
dj.prototype=new b();
dj.prototype.constructor = dj;
dj.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Latitude!=null)o['x']=this.Latitude;
	if(this.Longitude!=null)o['y']=this.Longitude;
	if(this.GameId!=null)o['g']=this.GameId.encode();
	if(this.Tier!=null)o['t']=this.Tier;
	return o;
}
dj.prototype.Latitude=null;
dj.prototype.Longitude=null;
dj.prototype.GameId=null;
dj.prototype.Tier=null;
function dk(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLinkString=e['p'];else this.ProfilePictureLinkString=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.CanRead=e['r'];else this.CanRead=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
dk.prototype=new b();
dk.prototype.constructor = dk;
dk.prototype.encode=function(o){
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
dk.prototype.Name=null;
dk.prototype.ProfilePictureLinkString=null;
dk.prototype.ProfileDecryptedHash=null;
dk.prototype.Type=null;
dk.prototype.CanRead=null;
dk.prototype.Feed=null;
function dl(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.GameId=new fH(e['id']);
	if(e&&(e['sb']!==null&&e['sb']!==undefined))this.GameScoreboard=e['sb'];else this.GameScoreboard=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['la']!==null&&e['la']!==undefined))this.Latitude=e['la'];
	if(e&&(e['lo']!==null&&e['lo']!==undefined))this.Longitude=e['lo'];
	if(e&&(e['sc']!==null&&e['sc']!==undefined))this.SimilarScoresInCity=e['sc'];else this.SimilarScoresInCity=null;
	if(e&&(e['su']!==null&&e['su']!==undefined))this.SimilarScoresInCountry=e['su'];else this.SimilarScoresInCountry=null;
	if(e&&(e['st']!==null&&e['st']!==undefined))this.SimilarScoresInContinent=e['st'];else this.SimilarScoresInContinent=null;
	if(e&&(e['sg']!==null&&e['sg']!==undefined))this.SimilarScoresGlobal=e['sg'];else this.SimilarScoresGlobal=null;
	if(e&&(e['sl']!==null&&e['sl']!==undefined))this.SimilarScoresLocal=e['sl'];else this.SimilarScoresLocal=null;
}
dl.prototype=new b();
dl.prototype.constructor = dl;
dl.prototype.encode=function(o){
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
dl.prototype.GameId=null;
dl.prototype.GameScoreboard=null;
dl.prototype.Account=null;
dl.prototype.Latitude=null;
dl.prototype.Longitude=null;
dl.prototype.SimilarScoresInCity=null;
dl.prototype.SimilarScoresInCountry=null;
dl.prototype.SimilarScoresInContinent=null;
dl.prototype.SimilarScoresGlobal=null;
dl.prototype.SimilarScoresLocal=null;
function dm(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.GameId=new fH(e['id']);
	if(e&&(e['sb']!==null&&e['sb']!==undefined))this.GameScoreboard=e['sb'];else this.GameScoreboard=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];
	if(e&&(e['la']!==null&&e['la']!==undefined))this.Latitude=e['la'];
	if(e&&(e['lo']!==null&&e['lo']!==undefined))this.Longitude=e['lo'];
	if(e&&(e['sc']!==null&&e['sc']!==undefined))this.SimilarScoresInCity=e['sc'];else this.SimilarScoresInCity=null;
	if(e&&(e['su']!==null&&e['su']!==undefined))this.SimilarScoresInCountry=e['su'];else this.SimilarScoresInCountry=null;
	if(e&&(e['st']!==null&&e['st']!==undefined))this.SimilarScoresInContinent=e['st'];else this.SimilarScoresInContinent=null;
	if(e&&(e['sg']!==null&&e['sg']!==undefined))this.SimilarScoresGlobal=e['sg'];else this.SimilarScoresGlobal=null;
	if(e&&(e['sl']!==null&&e['sl']!==undefined))this.SimilarScoresLocal=e['sl'];else this.SimilarScoresLocal=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dm.prototype=new b();
dm.prototype.constructor = dm;
dm.prototype.encode=function(o){
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
dm.prototype.GameId=null;
dm.prototype.GameScoreboard=null;
dm.prototype.Score=null;
dm.prototype.Latitude=null;
dm.prototype.Longitude=null;
dm.prototype.SimilarScoresInCity=null;
dm.prototype.SimilarScoresInCountry=null;
dm.prototype.SimilarScoresInContinent=null;
dm.prototype.SimilarScoresGlobal=null;
dm.prototype.SimilarScoresLocal=null;
dm.prototype.Account=null;
function dn(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.GameId=new fH(e['id']);
	if(e&&(e['sb']!==null&&e['sb']!==undefined))this.GameScoreboard=e['sb'];else this.GameScoreboard=null;
	if(e&&(e['la']!==null&&e['la']!==undefined))this.Latitude=e['la'];
	if(e&&(e['lo']!==null&&e['lo']!==undefined))this.Longitude=e['lo'];
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NumScores=e['n'];
	if(e&&(e['l']!==null&&e['l']!==undefined))this.LocationType=e['l'];else this.LocationType=null;
}
dn.prototype=new b();
dn.prototype.constructor = dn;
dn.prototype.encode=function(o){
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
dn.prototype.GameId=null;
dn.prototype.GameScoreboard=null;
dn.prototype.Latitude=null;
dn.prototype.Longitude=null;
dn.prototype.NumScores=null;
dn.prototype.LocationType=null;
function dp(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Item=new fO(e['i']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Ttl=e['e'];
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Latitude=e['a'];
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Radius=e['r'];
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Country=e['c'];else this.Country=null;
}
dp.prototype=new b();
dp.prototype.constructor = dp;
dp.prototype.encode=function(o){
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
dp.prototype.Item=null;
dp.prototype.Pin=null;
dp.prototype.Ttl=null;
dp.prototype.Latitude=null;
dp.prototype.Longitude=null;
dp.prototype.Radius=null;
dp.prototype.Country=null;
function dq(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Item=new fO(e['i']);
}
dq.prototype=new b();
dq.prototype.constructor = dq;
dq.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Item!=null)o['i']=this.Item.encode();
	return o;
}
dq.prototype.Item=null;
function dr(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ItemType=e['t'];else this.ItemType=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Ttl=e['e'];
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Latitude=e['a'];
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Radius=e['r'];
}
dr.prototype=new b();
dr.prototype.constructor = dr;
dr.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemType!=null)o['t']=this.ItemType;
	if(this.Ttl!=null)o['e']=this.Ttl;
	if(this.Latitude!=null)o['a']=this.Latitude;
	if(this.Longitude!=null)o['g']=this.Longitude;
	if(this.Radius!=null)o['r']=this.Radius;
	return o;
}
dr.prototype.ItemType=null;
dr.prototype.Ttl=null;
dr.prototype.Latitude=null;
dr.prototype.Longitude=null;
dr.prototype.Radius=null;
function ds(e){
	b.call(this,e);
}
ds.prototype=new b();
ds.prototype.constructor = ds;
ds.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dt(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ItemType=e['t'];else this.ItemType=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Latitude=e['a'];
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Radius=e['r'];
}
dt.prototype=new b();
dt.prototype.constructor = dt;
dt.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemType!=null)o['t']=this.ItemType;
	if(this.Latitude!=null)o['a']=this.Latitude;
	if(this.Longitude!=null)o['g']=this.Longitude;
	if(this.Radius!=null)o['r']=this.Radius;
	return o;
}
dt.prototype.ItemType=null;
dt.prototype.Latitude=null;
dt.prototype.Longitude=null;
dt.prototype.Radius=null;
function du(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Item=new fO(e['i']);
}
du.prototype=new b();
du.prototype.constructor = du;
du.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Item!=null)o['i']=this.Item.encode();
	return o;
}
du.prototype.Item=null;
function dv(e){
	b.call(this,e);
}
dv.prototype=new b();
dv.prototype.constructor = dv;
dv.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dw(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Url=e['l'];else this.Url=null;
}
dw.prototype=new b();
dw.prototype.constructor = dw;
dw.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Url!=null)o['l']=this.Url;
	return o;
}
dw.prototype.Url=null;
function dx(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Term=e['t'];else this.Term=null;
}
dx.prototype=new b();
dx.prototype.constructor = dx;
dx.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Term!=null)o['t']=this.Term;
	return o;
}
dx.prototype.Term=null;
function dy(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Failure=e['t'];else this.Failure=null;
}
dy.prototype=new b();
dy.prototype.constructor = dy;
dy.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Failure!=null)o['t']=this.Failure;
	return o;
}
dy.prototype.Failure=null;
function dz(e){
	b.call(this,e);
	if(e&&(e['e']!==null&&e['e']!==undefined)){
		this.Events=[];
		var d = e['e'];
		for(var k=0; k<d.length;++k)this.Events.push(new fP(d[k]));
	}
}
dz.prototype=new b();
dz.prototype.constructor = dz;
dz.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Events!=null) {
		o['e']=[];
		var d=this.Events;
		for(var k = 0; k < d.length; ++k) o['e'].push(d[k].encode());
	}
	return o;
}
dz.prototype.Events=null;
function dA(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Reason=e['r'];else this.Reason=null;
}
dA.prototype=new b();
dA.prototype.constructor = dA;
dA.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Reason!=null)o['r']=this.Reason;
	return o;
}
dA.prototype.Account=null;
dA.prototype.Reason=null;
function dB(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
}
dB.prototype=new b();
dB.prototype.constructor = dB;
dB.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Type!=null)o['t']=this.Type;
	return o;
}
dB.prototype.Type=null;
function dC(e){
	b.call(this,e);
}
dC.prototype=new b();
dC.prototype.constructor = dC;
dC.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dD(e){
	b.call(this,e);
}
dD.prototype=new b();
dD.prototype.constructor = dD;
dD.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dE(e){
	b.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Sender=new fu(e['s']);
	if(e&&(e['r']!==null&&e['r']!==undefined)){
		this.Recipients=[];
		var d = e['r'];
		for(var k=0; k<d.length;++k)this.Recipients.push(new fu(d[k]));
	}
	if(e&&(e['k']!==null&&e['k']!==undefined))this.FeedKind=e['k'];else this.FeedKind=null;
}
dE.prototype=new b();
dE.prototype.constructor = dE;
dE.prototype.encode=function(o){
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
dE.prototype.Sender=null;
dE.prototype.Recipients=null;
dE.prototype.FeedKind=null;
function dF(e){
	b.call(this,e);
	if(e&&(e['_f']!==null&&e['_f']!==undefined))this.Feed=new av(e['_f']);
	if(e&&(e['_a']!==null&&e['_a']!==undefined)){
		this.Accounts=[];
		var d = e['_a'];
		for(var k=0;k<d.length;++k)this.Accounts.push(d[k]);
	}
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Sender=new fu(e['s']);
	if(e&&(e['r']!==null&&e['r']!==undefined)){
		this.Recipients=[];
		var d = e['r'];
		for(var k=0; k<d.length;++k)this.Recipients.push(new fu(d[k]));
	}
	if(e&&(e['k']!==null&&e['k']!==undefined))this.FeedKind=e['k'];else this.FeedKind=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fy(e['i']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.AnyMemberWritable=e['w'];else this.AnyMemberWritable=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.SmsId=e['d'];else this.SmsId=null;
}
dF.prototype=new b();
dF.prototype.constructor = dF;
dF.prototype.encode=function(o){
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
dF.prototype.Feed=null;
dF.prototype.Accounts=null;
dF.prototype.Sender=null;
dF.prototype.Recipients=null;
dF.prototype.FeedKind=null;
dF.prototype.Id=null;
dF.prototype.Body=null;
dF.prototype.Version=null;
dF.prototype.AnyMemberWritable=null;
dF.prototype.SmsId=null;
function dG(e){
	b.call(this,e);
	if(e&&(e['o']!==null&&e['o']!==undefined))this.OptOut=e['o'];else this.OptOut=null;
}
dG.prototype=new b();
dG.prototype.constructor = dG;
dG.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.OptOut!=null)o['o']=this.OptOut;
	return o;
}
dG.prototype.OptOut=null;
function fQ(e){
	b.call(this,e);
	if(e&&(e['ap']!==null&&e['ap']!==undefined))this.AppName=e['ap'];else this.AppName=null;
	if(e&&(e['ab']!==null&&e['ab']!==undefined))this.AppIconBlobLink=e['ab'];else this.AppIconBlobLink=null;
}
fQ.prototype=new b();
fQ.prototype.constructor = fQ;
fQ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppName!=null)o['ap']=this.AppName;
	if(this.AppIconBlobLink!=null)o['ab']=this.AppIconBlobLink;
	return o;
}
fQ.prototype.AppName=null;
fQ.prototype.AppIconBlobLink=null;
function dH(e){
	fQ.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlobLinkString=e['b'];else this.BlobLinkString=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.VideoBlobRefTag=new Buffer(e['r'],'base64');
	if(e&&(e['dr']!==null&&e['dr']!==undefined))this.Duration=e['dr'];
	if(e&&(e['B']!==null&&e['B']!==undefined))this.ThumbnailBlobLinkString=e['B'];else this.ThumbnailBlobLinkString=null;
	if(e&&(e['H']!==null&&e['H']!==undefined))this.Height=e['H'];
	if(e&&(e['W']!==null&&e['W']!==undefined))this.Width=e['W'];
	if(e&&(e['pt']!==null&&e['pt']!==undefined))this.PrimaryTag=new fR(e['pt']);
	if(e&&(e['st']!==null&&e['st']!==undefined)){
		this.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)this.SecondaryTags.push(new fR(d[k]));
	}
	if(e&&(e['rm']!==null&&e['rm']!==undefined)){
		this.ReportMeta = {};
		var d = e['rm'];
		for(var k in d) this.ReportMeta[k]=d[k];
	}
}
dH.prototype=new fQ();
dH.prototype.constructor = dH;
dH.prototype.encode=function(o){
	if(o===undefined)o={};
	fQ.prototype.encode.call(this,o);
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
	if(this.ReportMeta!=null){
		o['rm']={};
		var d=this.ReportMeta;
		for(var k in d)o['rm'][k]=d[k];
	}
	return o;
}
dH.prototype.Title=null;
dH.prototype.Description=null;
dH.prototype.BlobLinkString=null;
dH.prototype.VideoBlobRefTag=null;
dH.prototype.Duration=null;
dH.prototype.ThumbnailBlobLinkString=null;
dH.prototype.Height=null;
dH.prototype.Width=null;
dH.prototype.PrimaryTag=null;
dH.prototype.SecondaryTags=null;
dH.prototype.ReportMeta=null;
function dI(e){
	fQ.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=e['m'];else this.Message=null;
	if(e&&(e['pt']!==null&&e['pt']!==undefined))this.PrimaryTag=new fR(e['pt']);
	if(e&&(e['st']!==null&&e['st']!==undefined)){
		this.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)this.SecondaryTags.push(new fR(d[k]));
	}
}
dI.prototype=new fQ();
dI.prototype.constructor = dI;
dI.prototype.encode=function(o){
	if(o===undefined)o={};
	fQ.prototype.encode.call(this,o);
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
dI.prototype.Title=null;
dI.prototype.Message=null;
dI.prototype.PrimaryTag=null;
dI.prototype.SecondaryTags=null;
function dJ(e){
	fQ.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlobLinkString=e['b'];else this.BlobLinkString=null;
	if(e&&(e['tn']!==null&&e['tn']!==undefined))this.ThumbnailLinkString=e['tn'];else this.ThumbnailLinkString=null;
	if(e&&(e['pt']!==null&&e['pt']!==undefined))this.PrimaryTag=new fR(e['pt']);
	if(e&&(e['st']!==null&&e['st']!==undefined)){
		this.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)this.SecondaryTags.push(new fR(d[k]));
	}
	if(e&&(e['W']!==null&&e['W']!==undefined))this.Width=e['W'];
	if(e&&(e['H']!==null&&e['H']!==undefined))this.Height=e['H'];
	if(e&&(e['rm']!==null&&e['rm']!==undefined)){
		this.ReportMeta = {};
		var d = e['rm'];
		for(var k in d) this.ReportMeta[k]=d[k];
	}
}
dJ.prototype=new fQ();
dJ.prototype.constructor = dJ;
dJ.prototype.encode=function(o){
	if(o===undefined)o={};
	fQ.prototype.encode.call(this,o);
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
	if(this.ReportMeta!=null){
		o['rm']={};
		var d=this.ReportMeta;
		for(var k in d)o['rm'][k]=d[k];
	}
	return o;
}
dJ.prototype.Title=null;
dJ.prototype.Description=null;
dJ.prototype.BlobLinkString=null;
dJ.prototype.ThumbnailLinkString=null;
dJ.prototype.PrimaryTag=null;
dJ.prototype.SecondaryTags=null;
dJ.prototype.Width=null;
dJ.prototype.Height=null;
dJ.prototype.ReportMeta=null;
function dK(e){
	b.call(this,e);
	if(e&&(e['ud']!==null&&e['ud']!==undefined))this.PostId=new fS(e['ud']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Like=e['l'];else this.Like=null;
}
dK.prototype=new b();
dK.prototype.constructor = dK;
dK.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['ud']=this.PostId.encode();
	if(this.Like!=null)o['l']=this.Like;
	return o;
}
dK.prototype.PostId=null;
dK.prototype.Like=null;
function dL(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fS(e['id']);
}
dL.prototype=new b();
dL.prototype.constructor = dL;
dL.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	return o;
}
dL.prototype.PostId=null;
function dM(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AccountToFollow=e['a'];else this.AccountToFollow=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Follow=e['f'];else this.Follow=null;
}
dM.prototype=new b();
dM.prototype.constructor = dM;
dM.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AccountToFollow!=null)o['a']=this.AccountToFollow;
	if(this.Follow!=null)o['f']=this.Follow;
	return o;
}
dM.prototype.AccountToFollow=null;
dM.prototype.Follow=null;
function dN(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['n']!==null&&e['n']!==undefined))this.PostsToGet=e['n'];else this.PostsToGet=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.After=e['t'];
}
dN.prototype=new b();
dN.prototype.constructor = dN;
dN.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.PostsToGet!=null)o['n']=this.PostsToGet;
	if(this.After!=null)o['t']=this.After;
	return o;
}
dN.prototype.Account=null;
dN.prototype.ContinuationKey=null;
dN.prototype.PostsToGet=null;
dN.prototype.After=null;
function dO(e){
	b.call(this,e);
	if(e&&(e['g']!==null&&e['g']!==undefined))this.GameTag=e['g'];else this.GameTag=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.SecondTag=new fR(e['t']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['n']!==null&&e['n']!==undefined))this.PostsToGet=e['n'];else this.PostsToGet=null;
}
dO.prototype=new b();
dO.prototype.constructor = dO;
dO.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.GameTag!=null)o['g']=this.GameTag;
	if(this.SecondTag!=null)o['t']=this.SecondTag.encode();
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.PostsToGet!=null)o['n']=this.PostsToGet;
	return o;
}
dO.prototype.GameTag=null;
dO.prototype.SecondTag=null;
dO.prototype.ContinuationKey=null;
dO.prototype.PostsToGet=null;
function dP(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
dP.prototype=new b();
dP.prototype.constructor = dP;
dP.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
dP.prototype.ContinuationKey=null;
function dQ(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fS(e['id']);
}
dQ.prototype=new b();
dQ.prototype.constructor = dQ;
dQ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	return o;
}
dQ.prototype.PostId=null;
function dR(e){
	b.call(this,e);
}
dR.prototype=new b();
dR.prototype.constructor = dR;
dR.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function dS(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NumToGet=e['n'];
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
dS.prototype=new b();
dS.prototype.constructor = dS;
dS.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.NumToGet!=null)o['n']=this.NumToGet;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
dS.prototype.Account=null;
dS.prototype.NumToGet=null;
dS.prototype.ContinuationKey=null;
function dT(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NumToGet=e['n'];
}
dT.prototype=new b();
dT.prototype.constructor = dT;
dT.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.NumToGet!=null)o['n']=this.NumToGet;
	return o;
}
dT.prototype.Account=null;
dT.prototype.ContinuationKey=null;
dT.prototype.NumToGet=null;
function dU(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fS(e['id']);
}
dU.prototype=new b();
dU.prototype.constructor = dU;
dU.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	return o;
}
dU.prototype.PostId=null;
function dV(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fS(e['id']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
	if(e&&(e['n']!==null&&e['n']!==undefined))this.NumToGet=e['n'];
}
dV.prototype=new b();
dV.prototype.constructor = dV;
dV.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	if(this.NumToGet!=null)o['n']=this.NumToGet;
	return o;
}
dV.prototype.PostId=null;
dV.prototype.ContinuationKey=null;
dV.prototype.NumToGet=null;
function dW(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dW.prototype=new b();
dW.prototype.constructor = dW;
dW.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
dW.prototype.Account=null;
function dX(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dX.prototype=new b();
dX.prototype.constructor = dX;
dX.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
dX.prototype.Account=null;
function dY(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dY.prototype=new b();
dY.prototype.constructor = dY;
dY.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
dY.prototype.Account=null;
function dZ(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
}
dZ.prototype=new b();
dZ.prototype.constructor = dZ;
dZ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	return o;
}
dZ.prototype.Account=null;
function ea(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fH(e['i']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
ea.prototype=new b();
ea.prototype.constructor = ea;
ea.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	if(this.PackageId!=null)o['p']=this.PackageId;
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
ea.prototype.ItemId=null;
ea.prototype.PackageId=null;
ea.prototype.ContinuationKey=null;
function eb(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.PostId=new fS(e['i']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=e['m'];else this.Message=null;
	if(e&&(e['st']!==null&&e['st']!==undefined)){
		this.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)this.SecondaryTags.push(new fR(d[k]));
	}
}
eb.prototype=new b();
eb.prototype.constructor = eb;
eb.prototype.encode=function(o){
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
eb.prototype.PostId=null;
eb.prototype.Title=null;
eb.prototype.Description=null;
eb.prototype.Message=null;
eb.prototype.SecondaryTags=null;
function ec(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ItemId=new fH(e['i']);
}
ec.prototype=new b();
ec.prototype.constructor = ec;
ec.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemId!=null)o['i']=this.ItemId.encode();
	return o;
}
ec.prototype.ItemId=null;
function ed(e){
	b.call(this,e);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ScopeString=e['s'];else this.ScopeString=null;
}
ed.prototype=new b();
ed.prototype.constructor = ed;
ed.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ScopeString!=null)o['s']=this.ScopeString;
	return o;
}
ed.prototype.ScopeString=null;
function ee(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.AppId=new Buffer(e['id'],'base64');
	if(e&&(e['pid']!==null&&e['pid']!==undefined))this.PackageId=e['pid'];else this.PackageId=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.LobbyName=e['n'];else this.LobbyName=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Stripe=e['s'];
	if(e&&(e['gt']!==null&&e['gt']!==undefined))this.Longitude=e['gt'];
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.Latitude=e['gp'];
}
ee.prototype=new b();
ee.prototype.constructor = ee;
ee.prototype.encode=function(o){
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
ee.prototype.AppId=null;
ee.prototype.PackageId=null;
ee.prototype.LobbyName=null;
ee.prototype.Cluster=null;
ee.prototype.Stripe=null;
ee.prototype.Longitude=null;
ee.prototype.Latitude=null;
function ef(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.DisplayName=e['n'];else this.DisplayName=null;
}
ef.prototype=new b();
ef.prototype.constructor = ef;
ef.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.DisplayName!=null)o['n']=this.DisplayName;
	return o;
}
ef.prototype.Feed=null;
ef.prototype.DisplayName=null;
function eg(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Nonce=new Buffer(e['n'],'base64');
}
eg.prototype=new b();
eg.prototype.constructor = eg;
eg.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Nonce!=null)o['n']=this.Nonce.toString('base64');
	return o;
}
eg.prototype.Feed=null;
eg.prototype.Nonce=null;
function eh(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['tid']!==null&&e['tid']!==undefined))this.TypedId=new fy(e['tid']);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Delete=e['d'];
}
eh.prototype=new b();
eh.prototype.constructor = eh;
eh.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.TypedId!=null)o['tid']=this.TypedId.encode();
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.Delete!=null)o['d']=this.Delete;
	return o;
}
eh.prototype.Feed=null;
eh.prototype.TypedId=null;
eh.prototype.Body=null;
eh.prototype.Delete=null;
function ei(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
ei.prototype=new b();
ei.prototype.constructor = ei;
ei.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
ei.prototype.Feed=null;
function ej(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];
}
ej.prototype=new b();
ej.prototype.constructor = ej;
ej.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	return o;
}
ej.prototype.Feed=null;
ej.prototype.Timestamp=null;
function ek(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AppId=new Buffer(e['a'],'base64');
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['gt']!==null&&e['gt']!==undefined))this.Longitude=e['gt'];
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.Latitude=e['gp'];
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ForwardingStage=e['f'];else this.ForwardingStage=null;
}
ek.prototype=new b();
ek.prototype.constructor = ek;
ek.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppId!=null)o['a']=this.AppId.toString('base64');
	if(this.PackageId!=null)o['p']=this.PackageId;
	if(this.Longitude!=null)o['gt']=this.Longitude;
	if(this.Latitude!=null)o['gp']=this.Latitude;
	if(this.ForwardingStage!=null)o['f']=this.ForwardingStage;
	return o;
}
ek.prototype.AppId=null;
ek.prototype.PackageId=null;
ek.prototype.Longitude=null;
ek.prototype.Latitude=null;
ek.prototype.ForwardingStage=null;
function el(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AppId=new Buffer(e['a'],'base64');
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['gt']!==null&&e['gt']!==undefined))this.Longitude=e['gt'];
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.Latitude=e['gp'];
	if(e&&(e['f']!==null&&e['f']!==undefined))this.ForwardingStage=e['f'];else this.ForwardingStage=null;
	if(e&&(e['fa']!==null&&e['fa']!==undefined))this.ForAppScopeId=e['fa'];else this.ForAppScopeId=null;
	if(e&&(e['fc']!==null&&e['fc']!==undefined))this.ForCountry=e['fc'];else this.ForCountry=null;
	if(e&&(e['fy']!==null&&e['fy']!==undefined))this.ForCity=e['fy'];else this.ForCity=null;
}
el.prototype=new b();
el.prototype.constructor = el;
el.prototype.encode=function(o){
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
el.prototype.AppId=null;
el.prototype.PackageId=null;
el.prototype.Longitude=null;
el.prototype.Latitude=null;
el.prototype.ForwardingStage=null;
el.prototype.ForAppScopeId=null;
el.prototype.ForCountry=null;
el.prototype.ForCity=null;
function em(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fB(e['m']);
}
em.prototype=new b();
em.prototype.constructor = em;
em.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
em.prototype.Message=null;
function en(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
en.prototype=new b();
en.prototype.constructor = en;
en.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
en.prototype.Feed=null;
function eo(e){
	b.call(this,e);
	if(e&&(e['e']!==null&&e['e']!==undefined)){
		this.Events=[];
		var d = e['e'];
		for(var k=0; k<d.length;++k)this.Events.push(new fP(d[k]));
	}
}
eo.prototype=new b();
eo.prototype.constructor = eo;
eo.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Events!=null) {
		o['e']=[];
		var d=this.Events;
		for(var k = 0; k < d.length; ++k) o['e'].push(d[k].encode());
	}
	return o;
}
eo.prototype.Events=null;
function ep(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.ItemId=new fH(e['a']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Start=e['s'];
	if(e&&(e['e']!==null&&e['e']!==undefined))this.End=e['e'];
	if(e&&(e['z']!==null&&e['z']!==undefined))this.Zoom=e['z'];else this.Zoom=null;
}
ep.prototype=new b();
ep.prototype.constructor = ep;
ep.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemId!=null)o['a']=this.ItemId.encode();
	if(this.PackageId!=null)o['p']=this.PackageId;
	if(this.Start!=null)o['s']=this.Start;
	if(this.End!=null)o['e']=this.End;
	if(this.Zoom!=null)o['z']=this.Zoom;
	return o;
}
ep.prototype.ItemId=null;
ep.prototype.PackageId=null;
ep.prototype.Start=null;
ep.prototype.End=null;
ep.prototype.Zoom=null;
function eq(e){
	b.call(this,e);
}
eq.prototype=new b();
eq.prototype.constructor = eq;
eq.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	return o;
}
function er(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
}
er.prototype=new b();
er.prototype.constructor = er;
er.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.UserKey!=null)o['k']=this.UserKey;
	return o;
}
er.prototype.UserKey=null;
function es(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
}
es.prototype=new b();
es.prototype.constructor = es;
es.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.UserKey!=null)o['k']=this.UserKey;
	return o;
}
es.prototype.UserKey=null;
function fT(e){
	b.call(this,e);
	if(e&&(e['ct']!==null&&e['ct']!==undefined))this.ContentType=e['ct'];else this.ContentType=null;
	if(e&&(e['cf']!==null&&e['cf']!==undefined))this.Feed=new av(e['cf']);
	if(e&&(e['ci']!==null&&e['ci']!==undefined))this.TypedId=new fy(e['ci']);
	if(e&&(e['ca']!==null&&e['ca']!==undefined))this.Account=e['ca'];else this.Account=null;
	if(e&&(e['cpv']!==null&&e['cpv']!==undefined))this.ProfileVersion=e['cpv'];
}
fT.prototype=new b();
fT.prototype.constructor = fT;
fT.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContentType!=null)o['ct']=this.ContentType;
	if(this.Feed!=null)o['cf']=this.Feed.encode();
	if(this.TypedId!=null)o['ci']=this.TypedId.encode();
	if(this.Account!=null)o['ca']=this.Account;
	if(this.ProfileVersion!=null)o['cpv']=this.ProfileVersion;
	return o;
}
fT.prototype.ContentType=null;
fT.prototype.Feed=null;
fT.prototype.TypedId=null;
fT.prototype.Account=null;
fT.prototype.ProfileVersion=null;
function et(e){
	fT.call(this,e);
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Reporter=e['r'];else this.Reporter=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.UserKey=e['k'];else this.UserKey=null;
	if(e&&(e['rr']!==null&&e['rr']!==undefined))this.Reason=e['rr'];else this.Reason=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Details=e['d'];else this.Details=null;
}
et.prototype=new fT();
et.prototype.constructor = et;
et.prototype.encode=function(o){
	if(o===undefined)o={};
	fT.prototype.encode.call(this,o);
	if(this.Reporter!=null)o['r']=this.Reporter;
	if(this.UserKey!=null)o['k']=this.UserKey;
	if(this.Reason!=null)o['rr']=this.Reason;
	if(this.Details!=null)o['d']=this.Details;
	return o;
}
et.prototype.Reporter=null;
et.prototype.UserKey=null;
et.prototype.Reason=null;
et.prototype.Details=null;
function eu(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=new fB(e['m']);
}
eu.prototype=new b();
eu.prototype.constructor = eu;
eu.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Message!=null)o['m']=this.Message.encode();
	return o;
}
eu.prototype.Message=null;
function ev(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined)){
		this.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)this.Messages.push(new fB(d[k]));
	}
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Partial=e['p'];else this.Partial=null;
}
ev.prototype=new b();
ev.prototype.constructor = ev;
ev.prototype.encode=function(o){
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
ev.prototype.Messages=null;
ev.prototype.Partial=null;
function ew(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined)){
		this.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)this.Messages.push(new fB(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
ew.prototype=new b();
ew.prototype.constructor = ew;
ew.prototype.encode=function(o){
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
ew.prototype.Messages=null;
ew.prototype.ContinuationKey=null;
function ex(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.JoinLink=new fU(e['l']);
}
ex.prototype=new b();
ex.prototype.constructor = ex;
ex.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.JoinLink!=null)o['l']=this.JoinLink.encode();
	return o;
}
ex.prototype.JoinLink=null;
function ey(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['td']!==null&&e['td']!==undefined))this.ThumbnailLink=e['td'];else this.ThumbnailLink=null;
}
ey.prototype=new b();
ey.prototype.constructor = ey;
ey.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Name!=null)o['n']=this.Name;
	if(this.ThumbnailLink!=null)o['td']=this.ThumbnailLink;
	return o;
}
ey.prototype.Name=null;
ey.prototype.ThumbnailLink=null;
function ez(e){
	b.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined)){
		this.Dirty=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)this.Dirty.push(new fV(d[k]));
	}
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Partial=e['p'];
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Window=e['w'];else this.Window=null;
}
ez.prototype=new b();
ez.prototype.constructor = ez;
ez.prototype.encode=function(o){
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
ez.prototype.Dirty=null;
ez.prototype.Partial=null;
ez.prototype.Window=null;
function eA(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.LastWriteTime=e['t'];else this.LastWriteTime=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AcceptanceState=e['a'];else this.AcceptanceState=null;
}
eA.prototype=new b();
eA.prototype.constructor = eA;
eA.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.LastWriteTime!=null)o['t']=this.LastWriteTime;
	if(this.AcceptanceState!=null)o['a']=this.AcceptanceState;
	return o;
}
eA.prototype.LastWriteTime=null;
eA.prototype.AcceptanceState=null;
function eB(e){
	b.call(this,e);
	if(e&&(e['ut']!==null&&e['ut']!==undefined))this.BlobUploadTicket=new fF(e['ut']);
}
eB.prototype=new b();
eB.prototype.constructor = eB;
eB.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobUploadTicket!=null)o['ut']=this.BlobUploadTicket.encode();
	return o;
}
eB.prototype.BlobUploadTicket=null;
function eC(e){
	b.call(this,e);
	if(e&&(e['ut']!==null&&e['ut']!==undefined)){
		this.BlobUploadTickets=[];
		var d = e['ut'];
		for(var k=0; k<d.length;++k)this.BlobUploadTickets.push(new fF(d[k]));
	}
}
eC.prototype=new b();
eC.prototype.constructor = eC;
eC.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobUploadTickets!=null) {
		o['ut']=[];
		var d=this.BlobUploadTickets;
		for(var k = 0; k < d.length; ++k) o['ut'].push(d[k].encode());
	}
	return o;
}
eC.prototype.BlobUploadTickets=null;
function eD(e){
	b.call(this,e);
	if(e&&(e['dt']!==null&&e['dt']!==undefined))this.BlobDownloadTicket=new fW(e['dt']);
}
eD.prototype=new b();
eD.prototype.constructor = eD;
eD.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.BlobDownloadTicket!=null)o['dt']=this.BlobDownloadTicket.encode();
	return o;
}
eD.prototype.BlobDownloadTicket=null;
function eE(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactDetails=new fG(e['c']);
}
eE.prototype=new b();
eE.prototype.constructor = eE;
eE.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactDetails!=null)o['c']=this.ContactDetails.encode();
	return o;
}
eE.prototype.ContactDetails=null;
function eF(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfileDetails=new fX(e['p']);
}
eF.prototype=new b();
eF.prototype.constructor = eF;
eF.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ProfileDetails!=null)o['p']=this.ProfileDetails.encode();
	return o;
}
eF.prototype.ProfileDetails=null;
function eG(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ContactProfile=new fY(e['p']);
}
eG.prototype=new b();
eG.prototype.constructor = eG;
eG.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactProfile!=null)o['p']=this.ContactProfile.encode();
	return o;
}
eG.prototype.ContactProfile=null;
function eH(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePublicState=new fZ(e['p']);
}
eH.prototype=new b();
eH.prototype.constructor = eH;
eH.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ProfilePublicState!=null)o['p']=this.ProfilePublicState.encode();
	return o;
}
eH.prototype.ProfilePublicState=null;
function eI(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContactProfile=new fY(e['c']);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePublicState=new fZ(e['p']);
}
eI.prototype=new b();
eI.prototype.constructor = eI;
eI.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ContactProfile!=null)o['c']=this.ContactProfile.encode();
	if(this.ProfilePublicState!=null)o['p']=this.ProfilePublicState.encode();
	return o;
}
eI.prototype.ContactProfile=null;
eI.prototype.ProfilePublicState=null;
function eJ(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ContactProfile=new fY(e['p']);
}
eJ.prototype=new b();
eJ.prototype.constructor = eJ;
eJ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.ContactProfile!=null)o['p']=this.ContactProfile.encode();
	return o;
}
eJ.prototype.Account=null;
eJ.prototype.ContactProfile=null;
function eK(e){
	b.call(this,e);
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.ItemInfoContainer=new ga(e['ii']);
}
eK.prototype=new b();
eK.prototype.constructor = eK;
eK.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemInfoContainer!=null)o['ii']=this.ItemInfoContainer.encode();
	return o;
}
eK.prototype.ItemInfoContainer=null;
function eL(e){
	if(e&&(e['l']!==null&&e['l']!==undefined))this.ItemInfoListingContainer=new gb(e['l']);
}
eL.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemInfoListingContainer!=null)o['l']=this.ItemInfoListingContainer.encode();
	return o;
}
eL.prototype.ItemInfoListingContainer=null;
function eM(e){
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ShareLink=e['s'];else this.ShareLink=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.RawKey=new Buffer(e['r'],'base64');
}
eM.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ShareLink!=null)o['s']=this.ShareLink;
	if(this.RawKey!=null)o['r']=this.RawKey.toString('base64');
	return o;
}
eM.prototype.ShareLink=null;
eM.prototype.RawKey=null;
function eN(e){
	if(e&&(e['ak']!==null&&e['ak']!==undefined))this.ApiKey=new gc(e['ak']);
}
eN.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ApiKey!=null)o['ak']=this.ApiKey.encode();
	return o;
}
eN.prototype.ApiKey=null;
function eO(e){
	if(e&&(e['ak']!==null&&e['ak']!==undefined)){
		this.ApiKeys=[];
		var d = e['ak'];
		for(var k=0; k<d.length;++k)this.ApiKeys.push(new gc(d[k]));
	}
}
eO.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ApiKeys!=null) {
		o['ak']=[];
		var d=this.ApiKeys;
		for(var k = 0; k < d.length; ++k) o['ak'].push(d[k].encode());
	}
	return o;
}
eO.prototype.ApiKeys=null;
function eP(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Config=new fL(e['c']);
}
eP.prototype=new b();
eP.prototype.constructor = eP;
eP.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Config!=null)o['c']=this.Config.encode();
	return o;
}
eP.prototype.Config=null;
function eQ(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined)){
		this.Candidates=[];
		var d = e['c'];
		for(var k=0;k<d.length;++k)this.Candidates.push(d[k]);
	}
	if(e&&(e['lt']!==null&&e['lt']!==undefined))this.LocationType=e['lt'];else this.LocationType=null;
	if(e&&(e['ln']!==null&&e['ln']!==undefined))this.LocationName=e['ln'];else this.LocationName=null;
}
eQ.prototype=new b();
eQ.prototype.constructor = eQ;
eQ.prototype.encode=function(o){
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
eQ.prototype.Candidates=null;
eQ.prototype.LocationType=null;
eQ.prototype.LocationName=null;
function eR(e){
	b.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.PublishingUrl=e['u'];else this.PublishingUrl=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.DevicePrivateKey=new Buffer(e['k'],'base64');
}
eR.prototype=new b();
eR.prototype.constructor = eR;
eR.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PublishingUrl!=null)o['u']=this.PublishingUrl;
	if(this.Account!=null)o['a']=this.Account;
	if(this.DevicePrivateKey!=null)o['k']=this.DevicePrivateKey.toString('base64');
	return o;
}
eR.prototype.PublishingUrl=null;
eR.prototype.Account=null;
eR.prototype.DevicePrivateKey=null;
function eS(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.City=e['c'];else this.City=null;
	if(e&&(e['cs']!==null&&e['cs']!==undefined))this.CityScore=e['cs'];
	if(e&&(e['cr']!==null&&e['cr']!==undefined))this.CityRank=e['cr'];
	if(e&&(e['cp']!==null&&e['cp']!==undefined))this.CityPercentile=e['cp'];
	if(e&&(e['css']!==null&&e['css']!==undefined)){
		this.CitySimilarScores=[];
		var d = e['css'];
		for(var k=0; k<d.length;++k)this.CitySimilarScores.push(new gd(d[k]));
	}
	if(e&&(e['u']!==null&&e['u']!==undefined))this.Country=e['u'];else this.Country=null;
	if(e&&(e['us']!==null&&e['us']!==undefined))this.CountryScore=e['us'];
	if(e&&(e['ur']!==null&&e['ur']!==undefined))this.CountryRank=e['ur'];
	if(e&&(e['up']!==null&&e['up']!==undefined))this.CountryPercentile=e['up'];
	if(e&&(e['uss']!==null&&e['uss']!==undefined)){
		this.CountrySimilarScores=[];
		var d = e['uss'];
		for(var k=0; k<d.length;++k)this.CountrySimilarScores.push(new gd(d[k]));
	}
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Continent=e['t'];else this.Continent=null;
	if(e&&(e['ts']!==null&&e['ts']!==undefined))this.ContinentScore=e['ts'];
	if(e&&(e['tr']!==null&&e['tr']!==undefined))this.ContinentRank=e['tr'];
	if(e&&(e['tp']!==null&&e['tp']!==undefined))this.ContinentPercentile=e['tp'];
	if(e&&(e['tss']!==null&&e['tss']!==undefined)){
		this.ContinentSimilarScores=[];
		var d = e['tss'];
		for(var k=0; k<d.length;++k)this.ContinentSimilarScores.push(new gd(d[k]));
	}
	if(e&&(e['gs']!==null&&e['gs']!==undefined))this.GlobalScore=e['gs'];
	if(e&&(e['gr']!==null&&e['gr']!==undefined))this.GlobalRank=e['gr'];
	if(e&&(e['gp']!==null&&e['gp']!==undefined))this.GlobalPercentile=e['gp'];
	if(e&&(e['gss']!==null&&e['gss']!==undefined)){
		this.GlobalSimilarScores=[];
		var d = e['gss'];
		for(var k=0; k<d.length;++k)this.GlobalSimilarScores.push(new gd(d[k]));
	}
	if(e&&(e['ll']!==null&&e['ll']!==undefined))this.LocalLevel=e['ll'];else this.LocalLevel=null;
	if(e&&(e['ln']!==null&&e['ln']!==undefined))this.LocalLocationName=e['ln'];else this.LocalLocationName=null;
	if(e&&(e['ls']!==null&&e['ls']!==undefined))this.LocalScore=e['ls'];
	if(e&&(e['lr']!==null&&e['lr']!==undefined))this.LocalRank=e['lr'];
	if(e&&(e['lp']!==null&&e['lp']!==undefined))this.LocalPercentile=e['lp'];
	if(e&&(e['lss']!==null&&e['lss']!==undefined)){
		this.LocalSimilarScores=[];
		var d = e['lss'];
		for(var k=0; k<d.length;++k)this.LocalSimilarScores.push(new gd(d[k]));
	}
	if(e&&(e['dbf']!==null&&e['dbf']!==undefined))this.DistanceBestFor=e['dbf'];
}
eS.prototype=new b();
eS.prototype.constructor = eS;
eS.prototype.encode=function(o){
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
eS.prototype.City=null;
eS.prototype.CityScore=null;
eS.prototype.CityRank=null;
eS.prototype.CityPercentile=null;
eS.prototype.CitySimilarScores=null;
eS.prototype.Country=null;
eS.prototype.CountryScore=null;
eS.prototype.CountryRank=null;
eS.prototype.CountryPercentile=null;
eS.prototype.CountrySimilarScores=null;
eS.prototype.Continent=null;
eS.prototype.ContinentScore=null;
eS.prototype.ContinentRank=null;
eS.prototype.ContinentPercentile=null;
eS.prototype.ContinentSimilarScores=null;
eS.prototype.GlobalScore=null;
eS.prototype.GlobalRank=null;
eS.prototype.GlobalPercentile=null;
eS.prototype.GlobalSimilarScores=null;
eS.prototype.LocalLevel=null;
eS.prototype.LocalLocationName=null;
eS.prototype.LocalScore=null;
eS.prototype.LocalRank=null;
eS.prototype.LocalPercentile=null;
eS.prototype.LocalSimilarScores=null;
eS.prototype.DistanceBestFor=null;
function eT(e){
	b.call(this,e);
	if(e&&(e['lt']!==null&&e['lt']!==undefined))this.LocationType=e['lt'];else this.LocationType=null;
	if(e&&(e['ln']!==null&&e['ln']!==undefined))this.LocationName=e['ln'];else this.LocationName=null;
	if(e&&(e['s']!==null&&e['s']!==undefined)){
		this.Scores=[];
		var d = e['s'];
		for(var k=0; k<d.length;++k)this.Scores.push(new gd(d[k]));
	}
}
eT.prototype=new b();
eT.prototype.constructor = eT;
eT.prototype.encode=function(o){
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
eT.prototype.LocationType=null;
eT.prototype.LocationName=null;
eT.prototype.Scores=null;
function eU(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
}
eU.prototype=new b();
eU.prototype.constructor = eU;
eU.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Pin!=null)o['p']=this.Pin;
	return o;
}
eU.prototype.Pin=null;
function eV(e){
	b.call(this,e);
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new fO(d[k]));
	}
}
eV.prototype=new b();
eV.prototype.constructor = eV;
eV.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Items!=null) {
		o['i']=[];
		var d=this.Items;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	return o;
}
eV.prototype.Items=null;
function eW(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ResponseType=e['t'];else this.ResponseType=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ResponseData=new Buffer(e['d'],'base64');
}
eW.prototype=new b();
eW.prototype.constructor = eW;
eW.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ResponseType!=null)o['t']=this.ResponseType;
	if(this.ResponseData!=null)o['d']=this.ResponseData.toString('base64');
	return o;
}
eW.prototype.ResponseType=null;
eW.prototype.ResponseData=null;
function eX(e){
	b.call(this,e);
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.Hits=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)this.Hits.push(new ge(d[k]));
	}
	if(e&&(e['v']!==null&&e['v']!==undefined))this.ClientSearchVersion=e['v'];else this.ClientSearchVersion=null;
}
eX.prototype=new b();
eX.prototype.constructor = eX;
eX.prototype.encode=function(o){
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
eX.prototype.Hits=null;
eX.prototype.ClientSearchVersion=null;
function eY(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['ii']!==null&&e['ii']!==undefined)){
		this.AddedItems=[];
		var d = e['ii'];
		for(var k=0; k<d.length;++k)this.AddedItems.push(new fH(d[k]));
	}
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Message=e['m'];else this.Message=null;
}
eY.prototype=new b();
eY.prototype.constructor = eY;
eY.prototype.encode=function(o){
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
eY.prototype.Feed=null;
eY.prototype.AddedItems=null;
eY.prototype.Message=null;
function eZ(e){
	b.call(this,e);
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.ExtraVersions = {};
		var d = e['h'];
		for(var k in d) this.ExtraVersions[k]=new gf(d[k]);
	}
}
eZ.prototype=new b();
eZ.prototype.constructor = eZ;
eZ.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ExtraVersions!=null){
		o['h']={};
		var d=this.ExtraVersions;
		for(var k in d)o['h'][k]=d[k].encode();
	}
	return o;
}
eZ.prototype.ExtraVersions=null;
function fa(e){
	b.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined)){
		this.UnmappedIdentities=[];
		var d = e['u'];
		for(var k=0; k<d.length;++k)this.UnmappedIdentities.push(new fu(d[k]));
	}
	if(e&&(e['o']!==null&&e['o']!==undefined)){
		this.OptOutIdentities=[];
		var d = e['o'];
		for(var k=0; k<d.length;++k)this.OptOutIdentities.push(new fu(d[k]));
	}
	if(e&&(e['a']!==null&&e['a']!==undefined)){
		this.Accounts=[];
		var d = e['a'];
		for(var k=0;k<d.length;++k)this.Accounts.push(d[k]);
	}
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
fa.prototype=new b();
fa.prototype.constructor = fa;
fa.prototype.encode=function(o){
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
fa.prototype.UnmappedIdentities=null;
fa.prototype.OptOutIdentities=null;
fa.prototype.Accounts=null;
fa.prototype.Feed=null;
function fb(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Metadata=new Buffer(e['m'],'base64');
	if(e&&(e['u']!==null&&e['u']!==undefined)){
		this.UnmappedIdentities=[];
		var d = e['u'];
		for(var k=0; k<d.length;++k)this.UnmappedIdentities.push(new fu(d[k]));
	}
	if(e&&(e['o']!==null&&e['o']!==undefined)){
		this.OptOutIdentities=[];
		var d = e['o'];
		for(var k=0; k<d.length;++k)this.OptOutIdentities.push(new fu(d[k]));
	}
}
fb.prototype=new b();
fb.prototype.constructor = fb;
fb.prototype.encode=function(o){
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
fb.prototype.Feed=null;
fb.prototype.Timestamp=null;
fb.prototype.Metadata=null;
fb.prototype.UnmappedIdentities=null;
fb.prototype.OptOutIdentities=null;
function fc(e){
	b.call(this,e);
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Wall=new gg(e['w']);
}
fc.prototype=new b();
fc.prototype.constructor = fc;
fc.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Wall!=null)o['w']=this.Wall.encode();
	return o;
}
fc.prototype.Wall=null;
function fd(e){
	b.call(this,e);
	if(e&&(e['w']!==null&&e['w']!==undefined)){
		this.Walls=[];
		var d = e['w'];
		for(var k=0; k<d.length;++k)this.Walls.push(new gg(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
fd.prototype=new b();
fd.prototype.constructor = fd;
fd.prototype.encode=function(o){
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
fd.prototype.Walls=null;
fd.prototype.ContinuationKey=null;
function fe(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Post=new gh(e['p']);
}
fe.prototype=new b();
fe.prototype.constructor = fe;
fe.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Post!=null)o['p']=this.Post.encode();
	return o;
}
fe.prototype.Post=null;
function ff(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fS(e['id']);
	if(e&&(e['e']!==null&&e['e']!==undefined))this.ExternalShareLink=e['e'];else this.ExternalShareLink=null;
}
ff.prototype=new b();
ff.prototype.constructor = ff;
ff.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PostId!=null)o['id']=this.PostId.encode();
	if(this.ExternalShareLink!=null)o['e']=this.ExternalShareLink;
	return o;
}
ff.prototype.PostId=null;
ff.prototype.ExternalShareLink=null;
function fg(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined)){
		this.AccountsFollowed=[];
		var d = e['f'];
		for(var k=0; k<d.length;++k)this.AccountsFollowed.push(new gi(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
fg.prototype=new b();
fg.prototype.constructor = fg;
fg.prototype.encode=function(o){
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
fg.prototype.AccountsFollowed=null;
fg.prototype.ContinuationKey=null;
function fh(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined)){
		this.PostTags=[];
		var d = e['p'];
		for(var k=0; k<d.length;++k)this.PostTags.push(new gj(d[k]));
	}
	if(e&&(e['l']!==null&&e['l']!==undefined))this.MaxVideoLength=e['l'];
}
fh.prototype=new b();
fh.prototype.constructor = fh;
fh.prototype.encode=function(o){
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
fh.prototype.PostTags=null;
fh.prototype.MaxVideoLength=null;
function fi(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined)){
		this.Followers=[];
		var d = e['f'];
		for(var k=0; k<d.length;++k)this.Followers.push(new gi(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
fi.prototype=new b();
fi.prototype.constructor = fi;
fi.prototype.encode=function(o){
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
fi.prototype.Followers=null;
fi.prototype.ContinuationKey=null;
function fj(e){
	b.call(this,e);
	if(e&&(e['l']!==null&&e['l']!==undefined)){
		this.Links=[];
		var d = e['l'];
		for(var k=0;k<d.length;++k)this.Links.push(d[k]);
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
fj.prototype=new b();
fj.prototype.constructor = fj;
fj.prototype.encode=function(o){
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
fj.prototype.Links=null;
fj.prototype.ContinuationKey=null;
function fk(e){
	b.call(this,e);
	if(e&&(e['I']!==null&&e['I']!==undefined)){
		this.PackageInfos=[];
		var d = e['I'];
		for(var k=0; k<d.length;++k)this.PackageInfos.push(new gk(d[k]));
	}
}
fk.prototype=new b();
fk.prototype.constructor = fk;
fk.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PackageInfos!=null) {
		o['I']=[];
		var d=this.PackageInfos;
		for(var k = 0; k < d.length; ++k) o['I'].push(d[k].encode());
	}
	return o;
}
fk.prototype.PackageInfos=null;
function fl(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Token=e['t'];else this.Token=null;
}
fl.prototype=new b();
fl.prototype.constructor = fl;
fl.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Token!=null)o['t']=this.Token;
	return o;
}
fl.prototype.Token=null;
function fm(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['i']!==null&&e['i']!==undefined))this.PublicChatInfo=new gl(e['i']);
}
fm.prototype=new b();
fm.prototype.constructor = fm;
fm.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.PublicChatInfo!=null)o['i']=this.PublicChatInfo.encode();
	return o;
}
fm.prototype.Feed=null;
fm.prototype.PublicChatInfo=null;
function fn(e){
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
fn.prototype=new b();
fn.prototype.constructor = fn;
fn.prototype.encode=function(o){
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
fn.prototype.Ids=null;
fn.prototype.DisplayNames=null;
function fo(e){
	b.call(this,e);
	if(e&&(e['m']!==null&&e['m']!==undefined)){
		this.Messages=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)this.Messages.push(new fB(d[k]));
	}
}
fo.prototype=new b();
fo.prototype.constructor = fo;
fo.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Messages!=null) {
		o['m']=[];
		var d=this.Messages;
		for(var k = 0; k < d.length; ++k) o['m'].push(d[k].encode());
	}
	return o;
}
fo.prototype.Messages=null;
function fp(e){
	b.call(this,e);
	if(e&&(e['c']!==null&&e['c']!==undefined)){
		this.Chats=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)this.Chats.push(new gl(d[k]));
	}
}
fp.prototype=new b();
fp.prototype.constructor = fp;
fp.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Chats!=null) {
		o['c']=[];
		var d=this.Chats;
		for(var k = 0; k < d.length; ++k) o['c'].push(d[k].encode());
	}
	return o;
}
fp.prototype.Chats=null;
function fq(e){
	b.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Buckets=e['b'];
	if(e&&(e['c']!==null&&e['c']!==undefined)){
		this.Counts = {};
		var d = e['c'];
		for(var k in d) this.Counts[k]=d[k];
	}
}
fq.prototype=new b();
fq.prototype.constructor = fq;
fq.prototype.encode=function(o){
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
fq.prototype.Buckets=null;
fq.prototype.Counts=null;
function gm(e){
}
gm.prototype.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function fu(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Principal=e['p'];else this.Principal=null;
}
fu.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Type!=null)o['t']=this.Type;
	if(this.Principal!=null)o['p']=this.Principal;
	return o;
}
fu.prototype.Type=null;
fu.prototype.Principal=null;
function fv(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AppId=new Buffer(e['a'],'base64');
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageId=e['p'];else this.PackageId=null;
}
fv.prototype=new b();
fv.prototype.constructor = fv;
fv.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.AppId!=null)o['a']=this.AppId.toString('base64');
	if(this.PackageId!=null)o['p']=this.PackageId;
	return o;
}
fv.prototype.AppId=null;
fv.prototype.PackageId=null;
function fw(e){
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Cluster=e['c'];else this.Cluster=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Identities.push(new fu(d[k]));
	}
	if(e&&(e['n']!==null&&e['n']!==undefined))this.MigratedName=e['n'];else this.MigratedName=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.MigratedPictureLink=e['p'];else this.MigratedPictureLink=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MigratedCloudConfig=new fL(e['m']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.CreationTime=e['s'];else this.CreationTime=null;
}
fw.prototype.encode=function(o){
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
fw.prototype.Account=null;
fw.prototype.Cluster=null;
fw.prototype.Identities=null;
fw.prototype.MigratedName=null;
fw.prototype.MigratedPictureLink=null;
fw.prototype.MigratedCloudConfig=null;
fw.prototype.CreationTime=null;
function fx(e){
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['l']!==null&&e['l']!==undefined)){
		this.Records=[];
		var d = e['l'];
		for(var k=0; k<d.length;++k)this.Records.push(new gn(d[k]));
	}
}
fx.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Account!=null)o['a']=this.Account;
	if(this.Records!=null) {
		o['l']=[];
		var d=this.Records;
		for(var k = 0; k < d.length; ++k) o['l'].push(d[k].encode());
	}
	return o;
}
fx.prototype.Account=null;
fx.prototype.Records=null;
function fy(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new Buffer(e['i'],'base64');
}
fy.prototype=new b();
fy.prototype.constructor = fy;
fy.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Type!=null)o['t']=this.Type;
	if(this.Id!=null)o['i']=this.Id.toString('base64');
	return o;
}
fy.prototype.Type=null;
fy.prototype.Id=null;
function fz(e){
	b.call(this,e);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.AppId=new Buffer(e['a'],'base64');
}
fz.prototype=new b();
fz.prototype.constructor = fz;
fz.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Type!=null)o['t']=this.Type;
	if(this.AppId!=null)o['a']=this.AppId.toString('base64');
	return o;
}
fz.prototype.Type=null;
fz.prototype.AppId=null;
function fA(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['h']!==null&&e['h']!==undefined))this.Hash=new Buffer(e['h'],'base64');
}
fA.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Type!=null)o['t']=this.Type;
	if(this.Hash!=null)o['h']=this.Hash.toString('base64');
	return o;
}
fA.prototype.Type=null;
fA.prototype.Hash=null;
function fB(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new fy(e['i']);
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Owner=e['s'];else this.Owner=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Metadata=new Buffer(e['m'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Deleted=e['d'];
	if(e&&(e['di']!==null&&e['di']!==undefined))this.DeviceId=new Buffer(e['di'],'base64');
}
fB.prototype.encode=function(o){
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
fB.prototype.Id=null;
fB.prototype.Timestamp=null;
fB.prototype.Owner=null;
fB.prototype.Body=null;
fB.prototype.Metadata=null;
fB.prototype.Version=null;
fB.prototype.Feed=null;
fB.prototype.Deleted=null;
fB.prototype.DeviceId=null;
function fC(e){
	if(e&&(e['T']!==null&&e['T']!==undefined))this.Type=e['T'];else this.Type=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Sender=e['s'];else this.Sender=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Body=new Buffer(e['b'],'base64');
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
}
fC.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Type!=null)o['T']=this.Type;
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	if(this.Sender!=null)o['s']=this.Sender;
	if(this.Body!=null)o['b']=this.Body.toString('base64');
	if(this.Feed!=null)o['f']=this.Feed.encode();
	return o;
}
fC.prototype.Type=null;
fC.prototype.Timestamp=null;
fC.prototype.Sender=null;
fC.prototype.Body=null;
fC.prototype.Feed=null;
function fD(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Type=e['t'];else this.Type=null;
	if(e&&(e['k']!==null&&e['k']!==undefined))this.Key=e['k'];else this.Key=null;
}
fD.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Type!=null)o['t']=this.Type;
	if(this.Key!=null)o['k']=this.Key;
	return o;
}
fD.prototype.Type=null;
fD.prototype.Key=null;
function fE(e){
	if(e&&(e['h']!==null&&e['h']!==undefined))this.Hash=new Buffer(e['h'],'base64');
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Size=e['s'];else this.Size=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MimeType=e['m'];else this.MimeType=null;
}
fE.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Hash!=null)o['h']=this.Hash.toString('base64');
	if(this.Size!=null)o['s']=this.Size;
	if(this.MimeType!=null)o['m']=this.MimeType;
	return o;
}
fE.prototype.Hash=null;
fE.prototype.Size=null;
fE.prototype.MimeType=null;
function fF(e){
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
fF.prototype.encode=function(o){
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
fF.prototype.UploadUrl=null;
fF.prototype.UploadHeaders=null;
fF.prototype.Cluster=null;
fF.prototype.IsPermanent=null;
fF.prototype.PermanenceRefTag=null;
fF.prototype.AlreadyUploaded=null;
fF.prototype.BlobLinkString=null;
function fG(e){
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
	if(e&&(e['wc']!==null&&e['wc']!==undefined))this.WasContact=e['wc'];
	if(e&&(e['t']!==null&&e['t']!==undefined))this.HasAppTime=e['t'];
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.Hashidentities=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)this.Hashidentities.push(new fA(d[k]));
	}
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Identities.push(new fu(d[k]));
	}
}
fG.prototype=new b();
fG.prototype.constructor = fG;
fG.prototype.encode=function(o){
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
fG.prototype.Account=null;
fG.prototype.Name=null;
fG.prototype.ProfilePictureLink=null;
fG.prototype.ProfileDecryptedHash=null;
fG.prototype.ProfileVideoLink=null;
fG.prototype.ProfileVideoDecryptedHash=null;
fG.prototype.Version=null;
fG.prototype.Display=null;
fG.prototype.Blocked=null;
fG.prototype.WasContact=null;
fG.prototype.HasAppTime=null;
fG.prototype.Hashidentities=null;
fG.prototype.Identities=null;
function fH(e){
	b.call(this,e);
	if(e&&(e['it']!==null&&e['it']!==undefined))this.ItemType=e['it'];else this.ItemType=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Creator=e['c'];else this.Creator=null;
	if(e&&(e['a']!==null&&e['a']!==undefined))this.GivenId=e['a'];else this.GivenId=null;
}
fH.prototype=new b();
fH.prototype.constructor = fH;
fH.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ItemType!=null)o['it']=this.ItemType;
	if(this.Creator!=null)o['c']=this.Creator;
	if(this.GivenId!=null)o['a']=this.GivenId;
	return o;
}
fH.prototype.ItemType=null;
fH.prototype.Creator=null;
fH.prototype.GivenId=null;
function fI(e){
	if(e&&(e['rc']!==null&&e['rc']!==undefined))this.ReceiptContainer=new go(e['rc']);
	if(e&&(e['bic']!==null&&e['bic']!==undefined))this.BillingInfoContainer=new gp(e['bic']);
}
fI.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ReceiptContainer!=null)o['rc']=this.ReceiptContainer.encode();
	if(this.BillingInfoContainer!=null)o['bic']=this.BillingInfoContainer.encode();
	return o;
}
fI.prototype.ReceiptContainer=null;
fI.prototype.BillingInfoContainer=null;
function gq(e){
	fs.call(this,e);
}
gq.prototype=new fs();
gq.prototype.constructor = gq;
gq.prototype.encode=function(o){
	if(o===undefined)o={};
	fs.prototype.encode.call(this,o);
	return o;
}
function fJ(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfoUserMutable=new gr(e['ai']);
	if(e&&(e['si']!==null&&e['si']!==undefined))this.StickerPackInfoUserMutable=new gs(e['si']);
}
fJ.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfoUserMutable!=null)o['ai']=this.AppInfoUserMutable.encode();
	if(this.StickerPackInfoUserMutable!=null)o['si']=this.StickerPackInfoUserMutable.encode();
	return o;
}
fJ.prototype.AppInfoUserMutable=null;
fJ.prototype.StickerPackInfoUserMutable=null;
function fK(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfoSystemMutable=new gt(e['ai']);
	if(e&&(e['ii']!==null&&e['ii']!==undefined))this.StickerPackInfoSystemMutable=new gu(e['ii']);
}
fK.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfoSystemMutable!=null)o['ai']=this.AppInfoSystemMutable.encode();
	if(this.StickerPackInfoSystemMutable!=null)o['ii']=this.StickerPackInfoSystemMutable.encode();
	return o;
}
fK.prototype.AppInfoSystemMutable=null;
fK.prototype.StickerPackInfoSystemMutable=null;
function fL(e){
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Provider=e['p'];else this.Provider=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Certificate=e['c'];else this.Certificate=null;
	if(e&&(e['ct']!==null&&e['ct']!==undefined))this.ConsumerToken=e['ct'];else this.ConsumerToken=null;
	if(e&&(e['cs']!==null&&e['cs']!==undefined))this.ConsumerSecret=e['cs'];else this.ConsumerSecret=null;
	if(e&&(e['at']!==null&&e['at']!==undefined))this.AccessToken=e['at'];else this.AccessToken=null;
	if(e&&(e['as']!==null&&e['as']!==undefined))this.AccessSecret=e['as'];else this.AccessSecret=null;
	if(e&&(e['rt']!==null&&e['rt']!==undefined))this.RefreshToken=e['rt'];else this.RefreshToken=null;
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Expiration=e['e'];
	if(e&&(e['f']!==null&&e['f']!==undefined))this.BlobsFolder=e['f'];else this.BlobsFolder=null;
}
fL.prototype.encode=function(o){
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
fL.prototype.Provider=null;
fL.prototype.Certificate=null;
fL.prototype.ConsumerToken=null;
fL.prototype.ConsumerSecret=null;
fL.prototype.AccessToken=null;
fL.prototype.AccessSecret=null;
fL.prototype.RefreshToken=null;
fL.prototype.Expiration=null;
fL.prototype.BlobsFolder=null;
function fM(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Id=new Buffer(e['i'],'base64');
}
fM.prototype=new b();
fM.prototype.constructor = fM;
fM.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.Id!=null)o['i']=this.Id.toString('base64');
	return o;
}
fM.prototype.Account=null;
fM.prototype.Id=null;
function fN(e){
	b.call(this,e);
	if(e&&(e['x']!==null&&e['x']!==undefined))this.Latitude=e['x'];else this.Latitude=null;
	if(e&&(e['y']!==null&&e['y']!==undefined))this.Longitude=e['y'];else this.Longitude=null;
}
fN.prototype=new b();
fN.prototype.constructor = fN;
fN.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Latitude!=null)o['x']=this.Latitude;
	if(this.Longitude!=null)o['y']=this.Longitude;
	return o;
}
fN.prototype.Latitude=null;
fN.prototype.Longitude=null;
function fO(e){
	b.call(this,e);
	if(e&&(e['b']!==null&&e['b']!==undefined))this.Broadcasted=e['b'];
	if(e&&(e['e']!==null&&e['e']!==undefined))this.Expiration=e['e'];
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ItemType=e['t'];else this.ItemType=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['fm']!==null&&e['fm']!==undefined))this.FeedMetadata=new gv(e['fm']);
}
fO.prototype=new b();
fO.prototype.constructor = fO;
fO.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Broadcasted!=null)o['b']=this.Broadcasted;
	if(this.Expiration!=null)o['e']=this.Expiration;
	if(this.ItemType!=null)o['t']=this.ItemType;
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.FeedMetadata!=null)o['fm']=this.FeedMetadata.encode();
	return o;
}
fO.prototype.Broadcasted=null;
fO.prototype.Expiration=null;
fO.prototype.ItemType=null;
fO.prototype.Feed=null;
fO.prototype.FeedMetadata=null;
function fP(e){
	if(e&&(e['k']!==null&&e['k']!==undefined))this.Key=e['k'];else this.Key=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.UtcTimestamp=e['t'];else this.UtcTimestamp=null;
}
fP.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Key!=null)o['k']=this.Key;
	if(this.UtcTimestamp!=null)o['t']=this.UtcTimestamp;
	return o;
}
fP.prototype.Key=null;
fP.prototype.UtcTimestamp=null;
function fR(e){
	b.call(this,e);
	if(e&&(e['tt']!==null&&e['tt']!==undefined))this.TagType=e['tt'];else this.TagType=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Tag=e['t'];else this.Tag=null;
}
fR.prototype=new b();
fR.prototype.constructor = fR;
fR.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.TagType!=null)o['tt']=this.TagType;
	if(this.Tag!=null)o['t']=this.Tag;
	return o;
}
fR.prototype.TagType=null;
fR.prototype.Tag=null;
function fS(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Poster=e['a'];else this.Poster=null;
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new Buffer(e['id'],'base64');
	if(e&&(e['t']!==null&&e['t']!==undefined))this.PostType=e['t'];else this.PostType=null;
}
fS.prototype=new b();
fS.prototype.constructor = fS;
fS.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Poster!=null)o['a']=this.Poster;
	if(this.PostId!=null)o['id']=this.PostId.toString('base64');
	if(this.PostType!=null)o['t']=this.PostType;
	return o;
}
fS.prototype.Poster=null;
fS.prototype.PostId=null;
fS.prototype.PostType=null;
function fU(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.Pin=e['p'];else this.Pin=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Url=e['l'];else this.Url=null;
}
fU.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	if(this.Pin!=null)o['p']=this.Pin;
	if(this.Url!=null)o['l']=this.Url;
	return o;
}
fU.prototype.Timestamp=null;
fU.prototype.Pin=null;
fU.prototype.Url=null;
function fV(e){
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Acceptance=e['a'];else this.Acceptance=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.LastWriteTime=e['t'];else this.LastWriteTime=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.LastRenderableTime=e['r'];
}
fV.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Feed!=null)o['f']=this.Feed.encode();
	if(this.Acceptance!=null)o['a']=this.Acceptance;
	if(this.LastWriteTime!=null)o['t']=this.LastWriteTime;
	if(this.LastRenderableTime!=null)o['r']=this.LastRenderableTime;
	return o;
}
fV.prototype.Feed=null;
fV.prototype.Acceptance=null;
fV.prototype.LastWriteTime=null;
fV.prototype.LastRenderableTime=null;
function fW(e){
	b.call(this,e);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.Url=e['u'];else this.Url=null;
	if(e&&(e['h']!==null&&e['h']!==undefined)){
		this.Headers = {};
		var d = e['h'];
		for(var k in d) this.Headers[k]=d[k];
	}
}
fW.prototype=new b();
fW.prototype.constructor = fW;
fW.prototype.encode=function(o){
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
fW.prototype.Url=null;
fW.prototype.Headers=null;
function fX(e){
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	if(e&&(e['pv']!==null&&e['pv']!==undefined))this.ProfileVideoLink=e['pv'];else this.ProfileVideoLink=null;
	if(e&&(e['dv']!==null&&e['dv']!==undefined))this.ProfileVideoDecryptedHash=new Buffer(e['dv'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.IdentitySettings=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.IdentitySettings.push(new gw(d[k]));
	}
	if(e&&(e['t']!==null&&e['t']!==undefined))this.HasAppTime=e['t'];
}
fX.prototype.encode=function(o){
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
fX.prototype.Name=null;
fX.prototype.ProfilePictureLink=null;
fX.prototype.ProfileDecryptedHash=null;
fX.prototype.ProfileVideoLink=null;
fX.prototype.ProfileVideoDecryptedHash=null;
fX.prototype.Version=null;
fX.prototype.IdentitySettings=null;
fX.prototype.HasAppTime=null;
function fY(e){
	if(e&&(e['n']!==null&&e['n']!==undefined))this.Name=e['n'];else this.Name=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ProfileDecryptedHash=new Buffer(e['d'],'base64');
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Version=e['v'];else this.Version=null;
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Identities.push(new fu(d[k]));
	}
	if(e&&(e['t']!==null&&e['t']!==undefined))this.HasAppTime=e['t'];
	if(e&&(e['pv']!==null&&e['pv']!==undefined))this.ProfileVideoLink=e['pv'];else this.ProfileVideoLink=null;
	if(e&&(e['dv']!==null&&e['dv']!==undefined))this.ProfileVideoDecryptedHash=new Buffer(e['dv'],'base64');
}
fY.prototype.encode=function(o){
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
fY.prototype.Name=null;
fY.prototype.ProfilePictureLink=null;
fY.prototype.ProfileDecryptedHash=null;
fY.prototype.Version=null;
fY.prototype.Identities=null;
fY.prototype.HasAppTime=null;
fY.prototype.ProfileVideoLink=null;
fY.prototype.ProfileVideoDecryptedHash=null;
function fZ(e){
	if(e&&(e['f']!==null&&e['f']!==undefined)){
		this.Features=[];
		var d = e['f'];
		for(var k=0;k<d.length;++k)this.Features.push(d[k]);
	}
	if(e&&(e['p']!==null&&e['p']!==undefined)){
		this.Settings = {};
		var d = e['p'];
		for(var k in d) this.Settings[k]=new aw(d[k]);
	}
}
fZ.prototype.encode=function(o){
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
fZ.prototype.Features=null;
fZ.prototype.Settings=null;
function ga(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfo=new gx(e['ai']);
	if(e&&(e['si']!==null&&e['si']!==undefined))this.StickerPackInfo=new gy(e['si']);
}
ga.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfo!=null)o['ai']=this.AppInfo.encode();
	if(this.StickerPackInfo!=null)o['si']=this.StickerPackInfo.encode();
	return o;
}
ga.prototype.AppInfo=null;
ga.prototype.StickerPackInfo=null;
function gb(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfoList=new gz(e['ai']);
	if(e&&(e['si']!==null&&e['si']!==undefined))this.StickerPackInfoList=new gA(e['si']);
}
gb.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfoList!=null)o['ai']=this.AppInfoList.encode();
	if(this.StickerPackInfoList!=null)o['si']=this.StickerPackInfoList.encode();
	return o;
}
gb.prototype.AppInfoList=null;
gb.prototype.StickerPackInfoList=null;
function gc(e){
	b.call(this,e);
	if(e&&(e['k']!==null&&e['k']!==undefined))this.ClientApiKeyId=new Buffer(e['k'],'base64');
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ClientApiKeySecret=new Buffer(e['s'],'base64');
	if(e&&(e['S']!==null&&e['S']!==undefined))this.ServerApiKeySecret=new Buffer(e['S'],'base64');
	if(e&&(e['t']!==null&&e['t']!==undefined))this.CreationTime=e['t'];else this.CreationTime=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Deactivated=e['d'];else this.Deactivated=null;
}
gc.prototype=new b();
gc.prototype.constructor = gc;
gc.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.ClientApiKeyId!=null)o['k']=this.ClientApiKeyId.toString('base64');
	if(this.ClientApiKeySecret!=null)o['s']=this.ClientApiKeySecret.toString('base64');
	if(this.ServerApiKeySecret!=null)o['S']=this.ServerApiKeySecret.toString('base64');
	if(this.CreationTime!=null)o['t']=this.CreationTime;
	if(this.Deactivated!=null)o['d']=this.Deactivated;
	return o;
}
gc.prototype.ClientApiKeyId=null;
gc.prototype.ClientApiKeySecret=null;
gc.prototype.ServerApiKeySecret=null;
gc.prototype.CreationTime=null;
gc.prototype.Deactivated=null;
function gd(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.ProfileName=e['n'];else this.ProfileName=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Rank=e['r'];
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ProfileDecryptedHash=new Buffer(e['d'],'base64');
}
gd.prototype=new b();
gd.prototype.constructor = gd;
gd.prototype.encode=function(o){
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
gd.prototype.Account=null;
gd.prototype.ProfileName=null;
gd.prototype.ProfilePictureLink=null;
gd.prototype.Score=null;
gd.prototype.Rank=null;
gd.prototype.ProfileDecryptedHash=null;
function ge(e){
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Width=e['w'];else this.Width=null;
	if(e&&(e['h']!==null&&e['h']!==undefined))this.Height=e['h'];else this.Height=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ThumbnailUrl=e['s'];else this.ThumbnailUrl=null;
	if(e&&(e['f']!==null&&e['f']!==undefined))this.FullsizeUrl=e['f'];else this.FullsizeUrl=null;
	if(e&&(e['S']!==null&&e['S']!==undefined))this.FileSize=e['S'];else this.FileSize=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContentType=e['c'];else this.ContentType=null;
}
ge.prototype.encode=function(o){
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
ge.prototype.Title=null;
ge.prototype.Width=null;
ge.prototype.Height=null;
ge.prototype.ThumbnailUrl=null;
ge.prototype.FullsizeUrl=null;
ge.prototype.FileSize=null;
ge.prototype.ContentType=null;
function gg(e){
	if(e&&(e['p']!==null&&e['p']!==undefined)){
		this.Posts=[];
		var d = e['p'];
		for(var k=0; k<d.length;++k)this.Posts.push(new gh(d[k]));
	}
	if(e&&(e['c']!==null&&e['c']!==undefined))this.ContinuationKey=new Buffer(e['c'],'base64');
}
gg.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Posts!=null) {
		o['p']=[];
		var d=this.Posts;
		for(var k = 0; k < d.length; ++k) o['p'].push(d[k].encode());
	}
	if(this.ContinuationKey!=null)o['c']=this.ContinuationKey.toString('base64');
	return o;
}
gg.prototype.Posts=null;
gg.prototype.ContinuationKey=null;
function gh(e){
	b.call(this,e);
	if(e&&(e['v']!==null&&e['v']!==undefined))this.VideoPost=new gB(e['v']);
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MessagePost=new gC(e['m']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.ScreenShotPost=new gD(e['s']);
}
gh.prototype=new b();
gh.prototype.constructor = gh;
gh.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.VideoPost!=null)o['v']=this.VideoPost.encode();
	if(this.MessagePost!=null)o['m']=this.MessagePost.encode();
	if(this.ScreenShotPost!=null)o['s']=this.ScreenShotPost.encode();
	return o;
}
gh.prototype.VideoPost=null;
gh.prototype.MessagePost=null;
gh.prototype.ScreenShotPost=null;
function gi(e){
	b.call(this,e);
	if(e&&(e['a']!==null&&e['a']!==undefined))this.Account=e['a'];else this.Account=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.DisplayName=e['n'];else this.DisplayName=null;
	if(e&&(e['p']!==null&&e['p']!==undefined))this.ProfilePictureLink=e['p'];else this.ProfilePictureLink=null;
}
gi.prototype=new b();
gi.prototype.constructor = gi;
gi.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.Account!=null)o['a']=this.Account;
	if(this.DisplayName!=null)o['n']=this.DisplayName;
	if(this.ProfilePictureLink!=null)o['p']=this.ProfilePictureLink;
	return o;
}
gi.prototype.Account=null;
gi.prototype.DisplayName=null;
gi.prototype.ProfilePictureLink=null;
function gj(e){
	if(e&&(e['pt']!==null&&e['pt']!==undefined))this.PostTag=new fR(e['pt']);
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Localization=e['l'];else this.Localization=null;
}
gj.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.PostTag!=null)o['pt']=this.PostTag.encode();
	if(this.Localization!=null)o['l']=this.Localization;
	return o;
}
gj.prototype.PostTag=null;
gj.prototype.Localization=null;
function gk(e){
	b.call(this,e);
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PackageName=e['p'];else this.PackageName=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.AppName=e['n'];else this.AppName=null;
	if(e&&(e['i']!==null&&e['i']!==undefined))this.IconBlobLink=e['i'];else this.IconBlobLink=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.WallPostCount=e['c'];
}
gk.prototype=new b();
gk.prototype.constructor = gk;
gk.prototype.encode=function(o){
	if(o===undefined)o={};
	b.prototype.encode.call(this,o);
	if(this.PackageName!=null)o['p']=this.PackageName;
	if(this.AppName!=null)o['n']=this.AppName;
	if(this.IconBlobLink!=null)o['i']=this.IconBlobLink;
	if(this.WallPostCount!=null)o['c']=this.WallPostCount;
	return o;
}
gk.prototype.PackageName=null;
gk.prototype.AppName=null;
gk.prototype.IconBlobLink=null;
gk.prototype.WallPostCount=null;
function gl(e){
	b.call(this,e);
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Feed=new av(e['f']);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.AppId=new Buffer(e['id'],'base64');
	if(e&&(e['pid']!==null&&e['pid']!==undefined))this.PackageId=e['pid'];else this.PackageId=null;
	if(e&&(e['n']!==null&&e['n']!==undefined))this.LobbyName=e['n'];else this.LobbyName=null;
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Stripe=e['s'];else this.Stripe=null;
	if(e&&(e['dn']!==null&&e['dn']!==undefined))this.DisplayName=e['dn'];else this.DisplayName=null;
	if(e&&(e['m']!==null&&e['m']!==undefined))this.Members=e['m'];else this.Members=null;
}
gl.prototype=new b();
gl.prototype.constructor = gl;
gl.prototype.encode=function(o){
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
gl.prototype.Feed=null;
gl.prototype.AppId=null;
gl.prototype.PackageId=null;
gl.prototype.LobbyName=null;
gl.prototype.Stripe=null;
gl.prototype.DisplayName=null;
gl.prototype.Members=null;
function gn(e){
	if(e&&(e['w']!==null&&e['w']!==undefined))this.Flagger=e['w'];else this.Flagger=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.Reason=e['r'];else this.Reason=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Timestamp=e['t'];else this.Timestamp=null;
}
gn.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Flagger!=null)o['w']=this.Flagger;
	if(this.Reason!=null)o['r']=this.Reason;
	if(this.Timestamp!=null)o['t']=this.Timestamp;
	return o;
}
gn.prototype.Flagger=null;
gn.prototype.Reason=null;
gn.prototype.Timestamp=null;
function go(e){
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MockReceipt=new gE(e['m']);
}
go.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.MockReceipt!=null)o['m']=this.MockReceipt.encode();
	return o;
}
go.prototype.MockReceipt=null;
function gp(e){
	if(e&&(e['m']!==null&&e['m']!==undefined))this.MockBillingInfo=new gF(e['m']);
}
gp.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.MockBillingInfo!=null)o['m']=this.MockBillingInfo.encode();
	return o;
}
gp.prototype.MockBillingInfo=null;
function gG(e){
}
gG.prototype.encode=function(o){
	if(o===undefined)o={};
	return o;
}
function gr(e){
	gG.call(this,e);
	if(e&&(e['ae']!==null&&e['ae']!==undefined))this.AndroidEnabled=e['ae'];
	if(e&&(e['adr']!==null&&e['adr']!==undefined))this.AndroidDrawer=e['adr'];
	if(e&&(e['aed']!==null&&e['aed']!==undefined))this.AndroidEditor=e['aed'];
	if(e&&(e['aga']!==null&&e['aga']!==undefined))this.AndroidGame=e['aga'];
	if(e&&(e['ie']!==null&&e['ie']!==undefined))this.IOSEnabled=e['ie'];
	if(e&&(e['idr']!==null&&e['idr']!==undefined))this.IOSDrawer=e['idr'];else this.IOSDrawer=null;
	if(e&&(e['ied']!==null&&e['ied']!==undefined))this.IOSEditor=e['ied'];else this.IOSEditor=null;
	if(e&&(e['iga']!==null&&e['iga']!==undefined))this.IOSGame=e['iga'];else this.IOSGame=null;
	if(e&&(e['we']!==null&&e['we']!==undefined))this.WebEnabled=e['we'];
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
		for(var k=0; k<d.length;++k)this.ScreenShotsList.push(new gH(d[k]));
	}
	if(e&&(e['asl']!==null&&e['asl']!==undefined)){
		this.AppStoresList=[];
		var d = e['asl'];
		for(var k=0; k<d.length;++k)this.AppStoresList.push(new gI(d[k]));
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
gr.prototype=new gG();
gr.prototype.constructor = gr;
gr.prototype.encode=function(o){
	if(o===undefined)o={};
	gG.prototype.encode.call(this,o);
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
gr.prototype.AndroidEnabled=null;
gr.prototype.AndroidDrawer=null;
gr.prototype.AndroidEditor=null;
gr.prototype.AndroidGame=null;
gr.prototype.IOSEnabled=null;
gr.prototype.IOSDrawer=null;
gr.prototype.IOSEditor=null;
gr.prototype.IOSGame=null;
gr.prototype.WebEnabled=null;
gr.prototype.WebDrawer=null;
gr.prototype.WebEditor=null;
gr.prototype.WebGame=null;
gr.prototype.IOSStoreUrl=null;
gr.prototype.AndroidStoreUrl=null;
gr.prototype.WebUrl=null;
gr.prototype.IOSCallback=null;
gr.prototype.AndroidPackageName=null;
gr.prototype.IconBlobLinkString=null;
gr.prototype.ScreenShotsList=null;
gr.prototype.AppStoresList=null;
gr.prototype.Languages=null;
gr.prototype.Name=null;
gr.prototype.NameTranslations=null;
gr.prototype.RedirectUris=null;
gr.prototype.VideoPostReportUri=null;
gr.prototype.VideoPostDomain=null;
gr.prototype.Description=null;
gr.prototype.DescriptionTranslations=null;
gr.prototype.UserCardDomain=null;
gr.prototype.UserCardFullIOSAppId=null;
gr.prototype.UserCardIOSLinkScheme=null;
gr.prototype.UserCardTemplate=null;
gr.prototype.UserCardWebBackground=null;
gr.prototype.UserCardAssetCardBackground=null;
gr.prototype.UserCardAssetDefaultProfile=null;
gr.prototype.UserCardAssetProfileForeground=null;
gr.prototype.UserCardDefaultMessage=null;
gr.prototype.UserCardShareTitleTemplate=null;
gr.prototype.UserCardShareDescriptionTemplate=null;
gr.prototype.UserCardIOSAppStoreId=null;
gr.prototype.AndroidPackageSigningKeySha256s=null;
gr.prototype.UserCardIntroTitle=null;
gr.prototype.UserCardIntroDescription=null;
gr.prototype.PortalBetaMetadata=null;
function gs(e){
	gG.call(this,e);
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
		for(var k=0; k<d.length;++k)this.Stickers.push(new gJ(d[k]));
	}
	if(e&&(e['op']!==null&&e['op']!==undefined))this.OriginalPublisher=e['op'];else this.OriginalPublisher=null;
}
gs.prototype=new gG();
gs.prototype.constructor = gs;
gs.prototype.encode=function(o){
	if(o===undefined)o={};
	gG.prototype.encode.call(this,o);
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
gs.prototype.Languages=null;
gs.prototype.Tags=null;
gs.prototype.Name=null;
gs.prototype.NameTranslations=null;
gs.prototype.Description=null;
gs.prototype.DescriptionTranslations=null;
gs.prototype.PortraitPreviewPackLink=null;
gs.prototype.LandscapePreviewPackLink=null;
gs.prototype.PortraitEncryptedPreviewHash=null;
gs.prototype.LandscapeEncryptedPreviewHash=null;
gs.prototype.Stickers=null;
gs.prototype.OriginalPublisher=null;
function gK(e){
	if(e&&(e['p']!==null&&e['p']!==undefined))this.PublishedState=e['p'];else this.PublishedState=null;
	if(e&&(e['ep']!==null&&e['ep']!==undefined))this.WasEverPublished=e['ep'];
	if(e&&(e['$']!==null&&e['$']!==undefined))this.Price=new gL(e['$']);
	if(e&&(e['c']!==null&&e['c']!==undefined))this.CreationTimestamp=e['c'];
	if(e&&(e['m']!==null&&e['m']!==undefined))this.LastModifiedTimestamp=e['m'];
}
gK.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.PublishedState!=null)o['p']=this.PublishedState;
	if(this.WasEverPublished!=null)o['ep']=this.WasEverPublished;
	if(this.Price!=null)o['$']=this.Price.encode();
	if(this.CreationTimestamp!=null)o['c']=this.CreationTimestamp;
	if(this.LastModifiedTimestamp!=null)o['m']=this.LastModifiedTimestamp;
	return o;
}
gK.prototype.PublishedState=null;
gK.prototype.WasEverPublished=null;
gK.prototype.Price=null;
gK.prototype.CreationTimestamp=null;
gK.prototype.LastModifiedTimestamp=null;
function gt(e){
	gK.call(this,e);
}
gt.prototype=new gK();
gt.prototype.constructor = gt;
gt.prototype.encode=function(o){
	if(o===undefined)o={};
	gK.prototype.encode.call(this,o);
	return o;
}
function gu(e){
	gK.call(this,e);
}
gu.prototype=new gK();
gu.prototype.constructor = gu;
gu.prototype.encode=function(o){
	if(o===undefined)o={};
	gK.prototype.encode.call(this,o);
	return o;
}
function gv(e){
	b.call(this,e);
	if(e&&(e['n']!==null&&e['n']!==undefined))this.FeedName=e['n'];else this.FeedName=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.ThumbnailLink=e['t'];else this.ThumbnailLink=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.ThumbnailDecryptedHash=new Buffer(e['d'],'base64');
	if(e&&(e['p']!==null&&e['p']!==undefined))this.RequiresPin=e['p'];else this.RequiresPin=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Latitude=e['l'];else this.Latitude=null;
	if(e&&(e['g']!==null&&e['g']!==undefined))this.Longitude=e['g'];else this.Longitude=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BroadcasterAccount=e['b'];else this.BroadcasterAccount=null;
}
gv.prototype=new b();
gv.prototype.constructor = gv;
gv.prototype.encode=function(o){
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
gv.prototype.FeedName=null;
gv.prototype.ThumbnailLink=null;
gv.prototype.ThumbnailDecryptedHash=null;
gv.prototype.RequiresPin=null;
gv.prototype.Latitude=null;
gv.prototype.Longitude=null;
gv.prototype.BroadcasterAccount=null;
function gw(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.Identity=new fu(e['i']);
}
gw.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Identity!=null)o['i']=this.Identity.encode();
	return o;
}
gw.prototype.Identity=null;
function gM(e){
	if(e&&(e['i']!==null&&e['i']!==undefined))this.ImmutableContainer=new gN(e['i']);
	if(e&&(e['s']!==null&&e['s']!==undefined))this.SystemMutableContainer=new fK(e['s']);
	if(e&&(e['u']!==null&&e['u']!==undefined))this.UserMutableContainer=new fJ(e['u']);
}
gM.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ImmutableContainer!=null)o['i']=this.ImmutableContainer.encode();
	if(this.SystemMutableContainer!=null)o['s']=this.SystemMutableContainer.encode();
	if(this.UserMutableContainer!=null)o['u']=this.UserMutableContainer.encode();
	return o;
}
gM.prototype.ImmutableContainer=null;
gM.prototype.SystemMutableContainer=null;
gM.prototype.UserMutableContainer=null;
function gx(e){
	gM.call(this,e);
}
gx.prototype=new gM();
gx.prototype.constructor = gx;
gx.prototype.encode=function(o){
	if(o===undefined)o={};
	gM.prototype.encode.call(this,o);
	return o;
}
function gy(e){
	gM.call(this,e);
}
gy.prototype=new gM();
gy.prototype.constructor = gy;
gy.prototype.encode=function(o){
	if(o===undefined)o={};
	gM.prototype.encode.call(this,o);
	return o;
}
function gz(e){
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new gx(d[k]));
	}
	if(e&&(e['nt']!==null&&e['nt']!==undefined))this.NextToken=new Buffer(e['nt'],'base64');
}
gz.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Items!=null) {
		o['i']=[];
		var d=this.Items;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	if(this.NextToken!=null)o['nt']=this.NextToken.toString('base64');
	return o;
}
gz.prototype.Items=null;
gz.prototype.NextToken=null;
function gA(e){
	if(e&&(e['i']!==null&&e['i']!==undefined)){
		this.Items=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)this.Items.push(new gy(d[k]));
	}
	if(e&&(e['nt']!==null&&e['nt']!==undefined))this.NextToken=new Buffer(e['nt'],'base64');
}
gA.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Items!=null) {
		o['i']=[];
		var d=this.Items;
		for(var k = 0; k < d.length; ++k) o['i'].push(d[k].encode());
	}
	if(this.NextToken!=null)o['nt']=this.NextToken.toString('base64');
	return o;
}
gA.prototype.Items=null;
gA.prototype.NextToken=null;
function gO(e){
	b.call(this,e);
	if(e&&(e['id']!==null&&e['id']!==undefined))this.PostId=new fS(e['id']);
	if(e&&(e['ct']!==null&&e['ct']!==undefined))this.CreationDate=e['ct'];else this.CreationDate=null;
	if(e&&(e['t']!==null&&e['t']!==undefined))this.Title=e['t'];else this.Title=null;
	if(e&&(e['v']!==null&&e['v']!==undefined))this.Views=e['v'];else this.Views=null;
	if(e&&(e['l']!==null&&e['l']!==undefined))this.Likes=e['l'];else this.Likes=null;
	if(e&&(e['c']!==null&&e['c']!==undefined)){
		this.Comments=[];
		var d = e['c'];
		for(var k=0; k<d.length;++k)this.Comments.push(new gP(d[k]));
	}
	if(e&&(e['s']!==null&&e['s']!==undefined))this.Score=e['s'];
	if(e&&(e['g']!==null&&e['g']!==undefined)){
		this.PostTags=[];
		var d = e['g'];
		for(var k=0; k<d.length;++k)this.PostTags.push(new fR(d[k]));
	}
	if(e&&(e['un']!==null&&e['un']!==undefined))this.PosterName=e['un'];else this.PosterName=null;
	if(e&&(e['up']!==null&&e['up']!==undefined))this.PosterProfilePictureLink=e['up'];else this.PosterProfilePictureLink=null;
	if(e&&(e['oi']!==null&&e['oi']!==undefined))this.OmletId=new fu(e['oi']);
	if(e&&(e['yl']!==null&&e['yl']!==undefined))this.YouLiked=e['yl'];
	if(e&&(e['an']!==null&&e['an']!==undefined))this.AppName=e['an'];else this.AppName=null;
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppIconBlobLink=e['ai'];else this.AppIconBlobLink=null;
}
gO.prototype=new b();
gO.prototype.constructor = gO;
gO.prototype.encode=function(o){
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
gO.prototype.PostId=null;
gO.prototype.CreationDate=null;
gO.prototype.Title=null;
gO.prototype.Views=null;
gO.prototype.Likes=null;
gO.prototype.Comments=null;
gO.prototype.Score=null;
gO.prototype.PostTags=null;
gO.prototype.PosterName=null;
gO.prototype.PosterProfilePictureLink=null;
gO.prototype.OmletId=null;
gO.prototype.YouLiked=null;
gO.prototype.AppName=null;
gO.prototype.AppIconBlobLink=null;
function gB(e){
	gO.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlobLinkString=e['b'];else this.BlobLinkString=null;
	if(e&&(e['r']!==null&&e['r']!==undefined))this.VideoBlobRefTag=new Buffer(e['r'],'base64');
	if(e&&(e['B']!==null&&e['B']!==undefined))this.ThumbnailBlobLinkString=e['B'];else this.ThumbnailBlobLinkString=null;
	if(e&&(e['h']!==null&&e['h']!==undefined))this.HlsUrl=e['h'];else this.HlsUrl=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.LinkUrl=e['u'];else this.LinkUrl=null;
	if(e&&(e['m']!==null&&e['m']!==undefined)){
		this.M3u8s=[];
		var d = e['m'];
		for(var k=0; k<d.length;++k)this.M3u8s.push(new gQ(d[k]));
	}
	if(e&&(e['H']!==null&&e['H']!==undefined))this.Height=e['H'];
	if(e&&(e['W']!==null&&e['W']!==undefined))this.Width=e['W'];
	if(e&&(e['D']!==null&&e['D']!==undefined))this.Duration=e['D'];
}
gB.prototype=new gO();
gB.prototype.constructor = gB;
gB.prototype.encode=function(o){
	if(o===undefined)o={};
	gO.prototype.encode.call(this,o);
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
gB.prototype.Description=null;
gB.prototype.BlobLinkString=null;
gB.prototype.VideoBlobRefTag=null;
gB.prototype.ThumbnailBlobLinkString=null;
gB.prototype.HlsUrl=null;
gB.prototype.LinkUrl=null;
gB.prototype.M3u8s=null;
gB.prototype.Height=null;
gB.prototype.Width=null;
gB.prototype.Duration=null;
function gC(e){
	gO.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Message=e['d'];else this.Message=null;
}
gC.prototype=new gO();
gC.prototype.constructor = gC;
gC.prototype.encode=function(o){
	if(o===undefined)o={};
	gO.prototype.encode.call(this,o);
	if(this.Message!=null)o['d']=this.Message;
	return o;
}
gC.prototype.Message=null;
function gD(e){
	gO.call(this,e);
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Description=e['d'];else this.Description=null;
	if(e&&(e['b']!==null&&e['b']!==undefined))this.BlobLinkString=e['b'];else this.BlobLinkString=null;
	if(e&&(e['tn']!==null&&e['tn']!==undefined))this.ThumbnailLinkString=e['tn'];else this.ThumbnailLinkString=null;
	if(e&&(e['u']!==null&&e['u']!==undefined))this.LinkUrl=e['u'];else this.LinkUrl=null;
	if(e&&(e['H']!==null&&e['H']!==undefined))this.Height=e['H'];
	if(e&&(e['W']!==null&&e['W']!==undefined))this.Width=e['W'];
}
gD.prototype=new gO();
gD.prototype.constructor = gD;
gD.prototype.encode=function(o){
	if(o===undefined)o={};
	gO.prototype.encode.call(this,o);
	if(this.Description!=null)o['d']=this.Description;
	if(this.BlobLinkString!=null)o['b']=this.BlobLinkString;
	if(this.ThumbnailLinkString!=null)o['tn']=this.ThumbnailLinkString;
	if(this.LinkUrl!=null)o['u']=this.LinkUrl;
	if(this.Height!=null)o['H']=this.Height;
	if(this.Width!=null)o['W']=this.Width;
	return o;
}
gD.prototype.Description=null;
gD.prototype.BlobLinkString=null;
gD.prototype.ThumbnailLinkString=null;
gD.prototype.LinkUrl=null;
gD.prototype.Height=null;
gD.prototype.Width=null;
function gE(e){
	if(e&&(e['j']!==null&&e['j']!==undefined))this.Junk=new Buffer(e['j'],'base64');
}
gE.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Junk!=null)o['j']=this.Junk.toString('base64');
	return o;
}
gE.prototype.Junk=null;
function gF(e){
	if(e&&(e['j']!==null&&e['j']!==undefined))this.Junk=new Buffer(e['j'],'base64');
}
gF.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Junk!=null)o['j']=this.Junk.toString('base64');
	return o;
}
gF.prototype.Junk=null;
function gH(e){
	if(e&&(e['tb']!==null&&e['tb']!==undefined))this.ThumbnailBlobLinkString=e['tb'];else this.ThumbnailBlobLinkString=null;
	if(e&&(e['fb']!==null&&e['fb']!==undefined))this.FullsizeBlobLinkString=e['fb'];else this.FullsizeBlobLinkString=null;
}
gH.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ThumbnailBlobLinkString!=null)o['tb']=this.ThumbnailBlobLinkString;
	if(this.FullsizeBlobLinkString!=null)o['fb']=this.FullsizeBlobLinkString;
	return o;
}
gH.prototype.ThumbnailBlobLinkString=null;
gH.prototype.FullsizeBlobLinkString=null;
function gI(e){
	if(e&&(e['e']!==null&&e['e']!==undefined))this.PackageName=e['e'];else this.PackageName=null;
	if(e&&(e['d']!==null&&e['d']!==undefined))this.Url=e['d'];else this.Url=null;
}
gI.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.PackageName!=null)o['e']=this.PackageName;
	if(this.Url!=null)o['d']=this.Url;
	return o;
}
gI.prototype.PackageName=null;
gI.prototype.Url=null;
function gJ(e){
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
gJ.prototype.encode=function(o){
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
gJ.prototype.Id=null;
gJ.prototype.Width=null;
gJ.prototype.Height=null;
gJ.prototype.ThumbnailBlobLinkString=null;
gJ.prototype.ThumbnailDecryptedHash=null;
gJ.prototype.FullsizeBlobLinkString=null;
gJ.prototype.FullsizeDecryptedHash=null;
gJ.prototype.IsVideo=null;
gJ.prototype.Name=null;
gJ.prototype.Description=null;
gJ.prototype.Tags=null;
function gL(e){
	if(e&&(e['f']!==null&&e['f']!==undefined))this.Free=e['f'];else this.Free=null;
	if(e&&(e['usd']!==null&&e['usd']!==undefined))this.Usd=e['usd'];else this.Usd=null;
}
gL.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Free!=null)o['f']=this.Free;
	if(this.Usd!=null)o['usd']=this.Usd;
	return o;
}
gL.prototype.Free=null;
gL.prototype.Usd=null;
function gN(e){
	if(e&&(e['ai']!==null&&e['ai']!==undefined))this.AppInfoImmutable=new gR(e['ai']);
	if(e&&(e['si']!==null&&e['si']!==undefined))this.StickerPackInfoImmutable=new gS(e['si']);
}
gN.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.AppInfoImmutable!=null)o['ai']=this.AppInfoImmutable.encode();
	if(this.StickerPackInfoImmutable!=null)o['si']=this.StickerPackInfoImmutable.encode();
	return o;
}
gN.prototype.AppInfoImmutable=null;
gN.prototype.StickerPackInfoImmutable=null;
function gP(e){
	if(e&&(e['ct']!==null&&e['ct']!==undefined))this.Commenter=e['ct'];else this.Commenter=null;
	if(e&&(e['c']!==null&&e['c']!==undefined))this.Comment=new Buffer(e['c'],'base64');
}
gP.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.Commenter!=null)o['ct']=this.Commenter;
	if(this.Comment!=null)o['c']=this.Comment.toString('base64');
	return o;
}
gP.prototype.Commenter=null;
gP.prototype.Comment=null;
function gQ(e){
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
gQ.prototype=new b();
gQ.prototype.constructor = gQ;
gQ.prototype.encode=function(o){
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
gQ.prototype.BitRate=null;
gQ.prototype.Headers=null;
gQ.prototype.Duration=null;
gQ.prototype.File=null;
function gT(e){
	if(e&&(e['id']!==null&&e['id']!==undefined))this.ItemId=new fH(e['id']);
}
gT.prototype.encode=function(o){
	if(o===undefined)o={};
	if(this.ItemId!=null)o['id']=this.ItemId.encode();
	return o;
}
gT.prototype.ItemId=null;
function gR(e){
	gT.call(this,e);
}
gR.prototype=new gT();
gR.prototype.constructor = gR;
gR.prototype.encode=function(o){
	if(o===undefined)o={};
	gT.prototype.encode.call(this,o);
	return o;
}
function gS(e){
	gT.call(this,e);
}
gS.prototype=new gT();
gS.prototype.constructor = gS;
gS.prototype.encode=function(o){
	if(o===undefined)o={};
	gT.prototype.encode.call(this,o);
	return o;
}
eb.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.UpdatePostDetailsRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aA.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.RegisterWithTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dD.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.GetExtraVersions=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
eg.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.LeavePublicChatRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dA.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.FlagUser=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dx.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.ImageSearchRequest=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
df.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.GameChallengeComplete=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dz.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.EventReport=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
db.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new E();
	t.DisconnectCloudSyncRequest=o;
	o=t;
	t=new v();
	t.CloudSync=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bQ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.DefaultAccess=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dg.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.GameChallenge=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
di.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.OptInForGSChallengesRequest=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new ay();
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
	t=new ay();
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
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
bY.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.GetDirtyFeeds=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aY.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.LogUserOut=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
ek.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.ListLiveChatsRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dY.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetFollowingCount=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aI.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.ConfirmAuthCodeRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dJ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.PostScreenShot=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aB.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.ConfirmTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
aD.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.GetLinkedIdentitiesRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
et.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new Q();
	t.ReportUserRequest=o;
	o=t;
	t=new v();
	t.UserModeration=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
eh.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.WriteToPublicChatRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dL.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.AddVideoView=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
da.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new E();
	t.RefreshCloudConfigRequest=o;
	o=t;
	t=new v();
	t.CloudSync=o;
	o=t;
	t=new ay();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dr.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.SubscribeForNearbyItemsRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aX.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.DisableGameChallenge=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
es.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new Q();
	t.BlockUserRequest=o;
	o=t;
	t=new v();
	t.UserModeration=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bZ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.SubscribeAccount=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aH.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.GetAppSigninLinkRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
de.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.UpdateChallengeLocation=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
e.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new h();
	t.HelloChallenge=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
e.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new v();
	t.HelloChallenge=o;
	o=t;
	t=new ay();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dh.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.CheckAccountOptedIn=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dc.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.OptInForAllGamesChallengesRequest=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
g.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new v();
	t.Ping=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
g.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new h();
	t.Ping=o;
	o=t;
	t=new ax();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ei.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.GetPublicChatMembersRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new ay();
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
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
eo.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new P();
	t.ReportSummaryEventsRequest=o;
	o=t;
	t=new v();
	t.EventSummary=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aJ.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.GetSigninLinkRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
aU.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.ListFlaggedUsers=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dE.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new K();
	t.GetSmsFeedRequest=o;
	o=t;
	t=new v();
	t.Oob=o;
	o=t;
	t=new ay();
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
	t=new ay();
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
	t=new ay();
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
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
er.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new Q();
	t.UnblockUserRequest=o;
	o=t;
	t=new v();
	t.UserModeration=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dd.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.FindGamers=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dP.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetFollowingWall=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dp.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.BroadcastItemRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bR.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.GetFeedDetails=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dW.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.CheckFollowing=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dj.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new F();
	t.FindGamersGSRequest=o;
	o=t;
	t=new v();
	t.GameChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dR.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetStandardPostTags=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aR.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetDetailsByAccount=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dy.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.FailureReport=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new ay();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ds.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.UnsubscribeForNearbyItemsRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aQ.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetEmailLoginLink=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aP.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.UnblockIdentity=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
bW.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.GetFeedState=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new ay();
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
	t=new ax();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aN.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.ConfirmSSOTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bP.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.JoinBroadcast=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dt.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.FetchNearbyItemsRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ea.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetPackagePosts=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dH.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.PostVideo=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dS.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetFollowers=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aG.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.LinkOmletIdentityRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
aT.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetIdentityRecordsRequest=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dw.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.UrlToStoryRequest=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dV.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetExternalShareLink=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dm.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new H();
	t.ReportScoreRequest=o;
	o=t;
	t=new v();
	t.HighScore=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ee.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.GetPublicChatRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dB.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.CreatePlaygroundRequest=o;
	o=t;
	t=new v();
	t.Misc=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aM.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.CheckSSOTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
aF.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.UnlinkIdentityRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dX.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetFollowerCount=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aL.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.GetSSOTokenRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dN.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetUserWall=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dl.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new H();
	t.GetHighScoreRequest=o;
	o=t;
	t=new v();
	t.HighScore=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bN.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.GetJoinFeedLink=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dU.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.DeletePostRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dn.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new H();
	t.GetTopScoresRequest=o;
	o=t;
	t=new v();
	t.HighScore=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
f.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new v();
	t.CompleteChallenge=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
f.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new h();
	t.CompleteChallenge=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
ep.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new P();
	t.GatherEventsByAppRequest=o;
	o=t;
	t=new v();
	t.EventSummary=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
el.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.ListInterestingChatsRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new ay();
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
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dq.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new I();
	t.UnbroadcastItemRequest=o;
	o=t;
	t=new v();
	t.NearbyItem=o;
	o=t;
	t=new ay();
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
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dF.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new K();
	t.SendSmsMessageRequest=o;
	o=t;
	t=new v();
	t.Oob=o;
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bO.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.JoinFeed=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aS.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetDetailsByIdentity=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
bM.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.RemovePendingInvitation=o;
	o=t;
	t=new v();
	t.Message=o;
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dG.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new K();
	t.SetSmsParticipationRequest=o;
	o=t;
	t=new v();
	t.Oob=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
eq.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new Q();
	t.ListBlockedUsersRequest=o;
	o=t;
	t=new v();
	t.UserModeration=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ej.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.GetRecentMessagesRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
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
	t=new ax();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bL.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.AddPendingInvitation=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dI.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.PostMessage=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aE.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.CheckLinkedIdentityRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
aW.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.ChangeUserPicture=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
bS.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new w();
	t.ApplyDocumentRequest=o;
	o=t;
	t=new v();
	t.Message=o;
	o=t;
	t=new ay();
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
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
bX.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new x();
	t.SetFeedAcceptance=o;
	o=t;
	t=new v();
	t.Inbox=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dO.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetGameWall=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aK.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.ConfirmSigninCodeRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dM.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.FollowUser=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dK.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.LikePost=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dZ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetUserWallPostCount=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ed.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new M();
	t.GetIdentityTokenRequest=o;
	o=t;
	t=new v();
	t.IdentityToken=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aV.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.ChangeUserName=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
dQ.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetPost=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
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
	t=new ax();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ef.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new N();
	t.JoinPublicChatRequest=o;
	o=t;
	t=new v();
	t.PublicChat=o;
	o=t;
	t=new ay();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dC.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new J();
	t.GetFeedbackAccount=o;
	o=t;
	t=new v();
	t.Misc=o;
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aZ.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new j();
	t.GetDeviceRecords=o;
	o=t;
	t=new h();
	t.Administrative=o;
	o=t;
	t=new ax();
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
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dT.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetAccountsFollowedRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
ec.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new L();
	t.GetPackagesRequest=o;
	o=t;
	t=new v();
	t.WallPost=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
dk.prototype.makeClusterRpc=function(o){
	var o=this,t=null;
	t=new G();
	t.GetSubscriptionUrl=o;
	o=t;
	t=new v();
	t.Subscription=o;
	o=t;
	t=new ay();
	t.Request=o;
	o=t;
	return o;
}
aC.prototype.makeIdpRpc=function(o){
	var o=this,t=null;
	t=new i();
	t.RegisterWithOAuthRequest=o;
	o=t;
	t=new h();
	t.Signup=o;
	o=t;
	t=new ax();
	t.Request=o;
	o=t;
	return o;
}
var gU = {}
gU.InvalidFeedId="InvalidFeedId";
gU.FeedDoesNotHaveProperties="FeedDoesNotHaveProperties";
gU.DeviceMustBeRegistered="DeviceMustBeRegistered";
gU.MustSpecifyValidIdentity="MustSpecifyValidIdentity";
gU.OwnerCannotLosePrivilege="OwnerCannotLosePrivilege";
gU.BadAuthentication="BadAuthentication";
gU.InvalidToken="InvalidToken";
gU.InvalidIdentityType="InvalidIdentityType";
gU.UnexpectedFieldsInObjData="UnexpectedFieldsInObjData";
gU.UnknownError="UnknownError";
gU.MissingFieldsInRequest="MissingFieldsInRequest";
gU.RedirectURIMismatch="RedirectURIMismatch";
gU.IdentityNotLinkedToDevice="IdentityNotLinkedToDevice";
gU.BadFeedState="BadFeedState";
gU.DocumentChangeRejected="DocumentChangeRejected";
gU.BadDocumentKeyFormat="BadDocumentKeyFormat";
gU.ScriptTimeoutException="ScriptTimeoutException";
gU.MessageAlreadyExists="MessageAlreadyExists";
gU.MessageDoesNotExist="MessageDoesNotExist";
gU.MessageVersionMismatch="MessageVersionMismatch";
gU.MessageNotWritable="MessageNotWritable";
gU.MustRespondToChallenge="MustRespondToChallenge";
gU.MustHello="MustHello";
gU.BadPushResponseSequenceNumber="BadPushResponseSequenceNumber";
gU.BadRequestSequenceNumber="BadRequestSequenceNumber";
gU.UnknownRequestType="UnknownRequestType";
gU.UnknownSourceCluster="UnknownSourceCluster";
gU.ChallengeTooSmall="ChallengeTooSmall";
gU.AccountMismatch="AccountMismatch";
gU.BadPushSequenceNumber="BadPushSequenceNumber";
gU.BadResponseSequenceNumber="BadResponseSequenceNumber";
gU.AccountNotMappedToCluster="AccountNotMappedToCluster";
gU.ImplementationFailure="ImplementationFailure";
gU.UnknownResponseType="UnknownResponseType";
gU.UnknownPushType="UnknownPushType";
gU.OperationNotAllowedCrossCluster="OperationNotAllowedCrossCluster";
gU.OperationOnlyAllowedCrossCluster="OperationOnlyAllowedCrossCluster";
gU.OperationNotAllowedByClient="OperationNotAllowedByClient";
gU.WrongClusterSource="WrongClusterSource";
gU.OperationNotAllowedCrossNode="OperationNotAllowedCrossNode";
gU.DeviceAlreadyAssociated="DeviceAlreadyAssociated";
gU.TokenAuthBlocked="TokenAuthBlocked";
gU.DeviceNotFound="DeviceNotFound";
gU.AccountNotFound="AccountNotFound";
gU.TokenCannotBeDelivered="TokenCannotBeDelivered";
gU.InvalidIdpCaller="InvalidIdpCaller";
gU.InvalidDeliveryInterest="InvalidDeliveryInterest";
gU.IdentityMismatch="IdentityMismatch";
gU.UnknownServiceType="UnknownServiceType";
gU.IdentityNotFound="IdentityNotFound";
gU.AlreadySubscribed="AlreadySubscribed";
gU.NotSubscribed="NotSubscribed";
gU.NoStateForFeed="NoStateForFeed";
gU.MemberNotFound="MemberNotFound";
gU.UserAlreadyHasOmletId="UserAlreadyHasOmletId";
gU.OmletIdHasBeenTaken="OmletIdHasBeenTaken";
gU.SizeLimitExceeded="SizeLimitExceeded";
gU.InvalidLocalBatchWrite="InvalidLocalBatchWrite";
gU.InvalidMessageTransform="InvalidMessageTransform";
gU.MessageTooLarge="MessageTooLarge";
gU.InvalidBlobLink="InvalidBlobLink";
gU.BlobSizeTooLarge="BlobSizeTooLarge";
gU.Blob_BlobIsPermanent="Blob_BlobIsPermanent";
gU.Blob_BlobMayNotHaveRefTags="Blob_BlobMayNotHaveRefTags";
gU.Blob_BlobMustHaveRefTags="Blob_BlobMustHaveRefTags";
gU.OmletAppStore_AppInfoAlreadyExists="OmletAppStore_AppInfoAlreadyExists";
gU.OmletItemStore_ItemInfoNotFound="OmletItemStore_ItemInfoNotFound";
gU.OmletItemStore_ItemInfoAlreadyExists="OmletItemStore_ItemInfoAlreadyExists";
gU.OmletItemStore_InvalidGrantException="OmletItemStore_InvalidGrantException";
gU.Profile_ItemAlreadyDeleted="Profile_ItemAlreadyDeleted";
gU.Profile_ItemNotOwned="Profile_ItemNotOwned";
gU.BadRequest="BadRequest";
gU.Unauthorized="Unauthorized";
gU.FailedToGenerateLink="FailedToGenerateLink";
gU.EncryptionRequired="EncryptionRequired";
gU.CorruptRequest="CorruptRequest";
gU.OperationNotAllowedToIdp="OperationNotAllowedToIdp";
gU.OperationNotAllowByLegacy="OperationNotAllowByLegacy";
gU.MissingGameChallenge="MissingGameChallenge";
gU.GameChallengeAlreadyComplete="GameChallengeAlreadyComplete";
gU.OperationNotAllowedToLegacy="OperationNotAllowedToLegacy";
gU.MigrationTimingIssue="MigrationTimingIssue";
gU.IdentityAlreadyExists="IdentityAlreadyExists";
gU.BadSubscriptionContext="BadSubscriptionContext";
gU.InvalidWebhookUrl="InvalidWebhookUrl";
gU.BadOAuthToken="BadOAuthToken";
gU.UndecryptableRequest="UndecryptableRequest";
gU.CannotUnlinkAllIdentities="CannotUnlinkAllIdentities";
gU.CannotUnlinkAnOmletID="CannotUnlinkAnOmletID";
gU.LegacyAccountFound="LegacyAccountFound";
gU.AccountAlreadyExists="AccountAlreadyExists";
gU.LegacyMigrationToWrongCluster="LegacyMigrationToWrongCluster";
gU.OperationNotAllowedToNonDefault="OperationNotAllowedToNonDefault";
gU.OperationNotApplicableToSelf="OperationNotApplicableToSelf";
gU.InvalidPingInterval="InvalidPingInterval";
gU.OperationNotAllowedByIdp="OperationNotAllowedByIdp";
gU.FailedToDeliverToken="FailedToDeliverToken";
gU.UnsupportedEncoding="UnsupportedEncoding";
gU.InvalidUrl="InvalidUrl";
gU.CorruptMessageBody="CorruptMessageBody";
gU.UnknownCluster="UnknownCluster";
gU.CloudTokenWillNeverWork="CloudTokenWillNeverWork";
gU.CloudTokenTemporarilyFailed="CloudTokenTemporarilyFailed";
gU.PushServiceNotSupportedInChina="PushServiceNotSupportedInChina";
gU.CloudProviderNotSupportedInChina="CloudProviderNotSupportedInChina";
gU.GameChallengeService_UserNotOptedIn="GameChallengeService_UserNotOptedIn";
gU.GameChallengeService_MaxOptIns="GameChallengeService_MaxOptIns";
gU.GameChallengeService_ChallengeExpired="GameChallengeService_ChallengeExpired";
gU.GameChallengeService_ChallengeNotYetExpired="GameChallengeService_ChallengeNotYetExpired";
gU.PingTimeout="PingTimeout";
gU.ClientPingTimeout="ClientPingTimeout";
gU.EmailBounced="EmailBounced";
gU.OmletItemStore_MaxApiKeysExceeded="OmletItemStore_MaxApiKeysExceeded";
gU.OmletItemStore_OperationNotAllowedToType="OmletItemStore_OperationNotAllowedToType";
gU.InvalidApiKey="InvalidApiKey";
gU.DeviceMappedToWrongApp="DeviceMappedToWrongApp";
gU.TokenService_InvalidToken="TokenService_InvalidToken";
gU.TokenService_ExpiredToken="TokenService_ExpiredToken";
gU.InvalidContentType="InvalidContentType";
gU.ShareLinkNotExistsOrExpired="ShareLinkNotExistsOrExpired";
gU.NoVideoStreamFound="NoVideoStreamFound";
gU.InvalidVideoCodecFound="InvalidVideoCodecFound";
gU.WallPostNotFound="WallPostNotFound";
gU.WallPost_AlreadyPosted="WallPost_AlreadyPosted";
gU.OmletIdNotFound="OmletIdNotFound";
gU.OmletIdAuthMismatch="OmletIdAuthMismatch";
gU.OmletIDExist="OmletIDExist";
gU.IdentityExist="IdentityExist";
gU.AuthCodeMismatch="AuthCodeMismatch";
gU.FeedNotAuthorizedForApp="FeedNotAuthorizedForApp";
gU.OmletItemStore_MismatchedItemType="OmletItemStore_MismatchedItemType";
gU.OmletItemStore_IncompleteItemInfo="OmletItemStore_IncompleteItemInfo";
gU.CannotChangeAppScope="CannotChangeAppScope";
gU.ScheduledJobService_FailToSchedule_WrongNode="ScheduledJobService_FailToSchedule_WrongNode";
gU.PublicChatService_NotJoined="PublicChatService_NotJoined";
gU.InvalidFeedKind="InvalidFeedKind";
gU.InvalidEventRange="InvalidEventRange";
gU.InvalidZoom="InvalidZoom";
gU.KeyAlreadyExists="KeyAlreadyExists";
gU.ItemNotFound="ItemNotFound";
gU.UserCardDomainConflict="UserCardDomainConflict";
gU.UserCardDomainTooShort="UserCardDomainTooShort";
gU.UserCardDomainTooLong="UserCardDomainTooLong";
gU.UserCardDomainMustBeLowerCase="UserCardDomainMustBeLowerCase";
gU.UserCardDomainMustBeAscii="UserCardDomainMustBeAscii";
gU.InvalidHttpAuthScheme="InvalidHttpAuthScheme";
gU.BadAuthorizationHeader="BadAuthorizationHeader";
gU.AttemptsExceeded="AttemptsExceeded";
gU.OmletAppStore_InvalidReportUri="OmletAppStore_InvalidReportUri";
gU.OmletAppStore_InvalidDomain="OmletAppStore_InvalidDomain";
gU.OmletAppStore_InvalidStoreUrl="OmletAppStore_InvalidStoreUrl";
gU.PermissionRevoked="PermissionRevoked";
gU.BlockedByUser="BlockedByUser";
gU.UserModerationService_AlreadyReported="UserModerationService_AlreadyReported";
gU.UserModerationService_InvalidReport="UserModerationService_InvalidReport";
gU.FilteringService_RequestFiltered="FilteringService_RequestFiltered";
gU.InvalidPassword="InvalidPassword";
gU.PasswordNotSet="PasswordNotSet";
gU.PasswordIncorrect="PasswordIncorrect";
gU.ReservedDomain="ReservedDomain";
gU.InvalidJwt="InvalidJwt";
gU.BadJwt="BadJwt";
var gV = {}
gV.No="No";
gV.Yes="Yes";
gV.Push="Push";
gV.Removed="Removed";
gV.Restricted="Restricted";
gV.RestrictedPush="RestrictedPush";
gV.Blocked="Blocked";
var gW = {}
gW.Default="Default";
gW.AutoCreate="AutoCreate";
gW.UserLogin="UserLogin";
var gX = {}
gX.BAIDU="BAIDU";
gX.BARCLAYS="BARCLAYS";
gX.ASUS="ASUS";
var gY = {}
gY.CONFIRM_SCOPE_LINK="CONFIRM_SCOPE_LINK";
gY.LINK="LINK";
gY.SIGNED_IN="SIGNED_IN";
var gZ = {}
gZ.App="App";
gZ.StickerPack="StickerPack";
var ha = {}
ha.BRONZE="BRONZE";
ha.SILVER="SILVER";
ha.GOLD="GOLD";
ha.DIAMOND="DIAMOND";
var hb = {}
hb.CITY="CITY";
hb.COUNTRY="COUNTRY";
hb.CONTINENT="CONTINENT";
hb.GLOBAL="GLOBAL";
hb.LOCAL="LOCAL";
var hc = {}
hc.Feed=0;
var hd = {}
hd.PROFILE_PICTURE="PROFILE_PICTURE";
hd.PROFILE_NAME="PROFILE_NAME";
hd.MESSAGE="MESSAGE";
hd.PUBLIC_CHAT_MESSAGE="PUBLIC_CHAT_MESSAGE";
var he = {}
he.PORN="PORN";
he.GORE="GORE";
he.ADS="ADS";
he.SPAM="SPAM";
he.OFFENSIVE="OFFENSIVE";
he.ILLEGAL="ILLEGAL";
he.OTHER="OTHER";
var hf = {}
hf.Unknown="unknown";
hf.Email="email";
hf.Facebook="fb";
hf.Phone="phone";
hf.Subscription="sub";
hf.OmletId="omlet";
hf.Huawei="huawei";
hf.Htc="htc";
hf.Account="account";
hf.Baidu="baidu";
hf.ExternalApp="eapp";
var hg = {}
hg.OmletScope="OmletScope";
hg.App="App";
hg.Sms="Sms";
hg.Arcade="Arcade";
var hh = {}
hh.GCM="GCM";
hh.APNS="APNS";
hh.Baidu="Baidu";
hh.Amazon="Amazon";
hh.WPNS="WPNS";
var hi = {}
hi.Dropbox="Dropbox";
hi.Box="Box";
hi.BaiduPCS="BaiduPCS";
hi.OneDrive="OneDrive";
hi.GoogleDrive="GoogleDrive";
hi.OmStore="OmStore";
hi.Dummy="Dummy";
var hj = {}
hj.Game="Game";
hj.String="String";
var hk = {}
hk.Video="Video";
hk.Message="Message";
hk.ScreenShot="ScreenShot";
var hl = {}
hl.NotPublished="NotPublished";
hl.Published="Published";
hl.InReview="InReview";
hl.Deleted="Deleted";
module.exports={
	LDJSONLoggable:b,
	LDRequestContainerBase:a,
	LDDeviceToIdpRequestContainer:h,
	LDResponseContainerBase:l,
	LDDeviceToIdpResponseContainer:r,
	LDDeviceToClusterRequestContainer:v,
	LDDeviceToClusterResponseContainer:R,
	LDPublicKeys:an,
	LDSynchronizedMessageBody:ao,
	LDAcceptanceChange:ap,
	LDBroadcastSettings:aq,
	LDAddMeInfo:ar,
	LDJoinFeedInfo:au,
	LDFeatureSetting:aw,
	LDDeviceToIdpRpcWrapper:ax,
	LDDeviceToClusterRpcWrapper:ay,
	LDRpcContext:c,
	LDHelloChallengeRequest:e,
	LDCompleteChallengeRequest:f,
	LDPingRequest:g,
	LDRequestProtocolBase:az,
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
	LDDeviceToClusterMessageResponseProtocol:S,
	LDDeviceToClusterInboxResponseProtocol:T,
	LDClusterOrDeviceToClusterBlobResponseProtocol:U,
	LDDeviceToClusterContactResponseProtocol:V,
	LDDeviceToClusterProfileResponseProtocol:W,
	LDDeviceToClusterAddressBookResponseProtocol:X,
	LDDeviceToClusterOmletItemStoreResponseProtocol:Y,
	LDDeviceToClusterDeviceResponseProtocol:Z,
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
	LDURI:fr,
	LDAppRestletDetails:at,
	LDFeed:av,
	LDEnum:fs,
	LDAccessScope:ft,
	LDRegisterWithTokenRequest:aA,
	LDConfirmTokenRequest:aB,
	LDRegisterWithOAuthRequest:aC,
	LDGetLinkedIdentitiesRequest:aD,
	LDCheckIdentityLinkedRequest:aE,
	LDUnlinkIdentityRequest:aF,
	LDLinkOmletIdentityRequest:aG,
	LDGetAppSigninLinkRequest:aH,
	LDConfirmAuthCodeRequest:aI,
	LDGetSigninLinkRequest:aJ,
	LDConfirmSigninCodeRequest:aK,
	LDGetSSOTokenRequest:aL,
	LDCheckSSOTokenRequest:aM,
	LDConfirmSSOTokenRequest:aN,
	LDDeviceRegistrationStateChangedPush:aO,
	LDUnblockIdentityRequest:aP,
	LDGetEmailLoginLinkRequest:aQ,
	LDGetAccountDetailsByAccountRequest:aR,
	LDGetAccountDetailsByIdentityRequest:aS,
	LDGetIdentityRecordsRequest:aT,
	LDListFlaggedUsersRequest:aU,
	LDChangeUserNameRequest:aV,
	LDChangeUserProfilePictureRequest:aW,
	LDDisableUserGameChallengeRequest:aX,
	LDLogUserOutRequest:aY,
	LDGetDeviceRecordsRequest:aZ,
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
	LDAddPendingInvitationRequest:bL,
	LDRemovePendingInvitationRequest:bM,
	LDGetJoinFeedLinkRequest:bN,
	LDJoinFeedRequest:bO,
	LDJoinBroadcastRequest:bP,
	LDSetDefaultAccessRequest:bQ,
	LDGetPublicFeedDetailsRequest:bR,
	LDApplyDocumentTransformRequest:bS,
	LDMessageDeliveryPush:bT,
	LDRealtimeMessageDeliveryPush:bU,
	LDMessageTerminatedPush:bV,
	LDGetFeedStateRequest:bW,
	LDSetFeedAcceptanceRequest:bX,
	LDGetDirtyFeedsRequest:bY,
	LDSubscribeForAccountInboxRequest:bZ,
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
	LDRefreshCloudConfigRequest:da,
	LDDisconnectCloudSyncRequest:db,
	LDOptInForAllGamesChallengesRequest:dc,
	LDFindGamersRequest:dd,
	LDUpdateChallengeLocationRequest:de,
	LDGameChallengeCompleteRequest:df,
	LDExtendChallengeRequest:dg,
	LDCheckAccountOptedInRequest:dh,
	LDOptInForGSChallengesRequest:di,
	LDFindGamersGSRequest:dj,
	LDCreateSubscriptionRequest:dk,
	LDGetHighScoreRequest:dl,
	LDReportScoreRequest:dm,
	LDGetTopScoresRequest:dn,
	LDBroadcastItemRequest:dp,
	LDUnbroadcastItemRequest:dq,
	LDSubscribeForNearbyItemsRequest:dr,
	LDUnsubscribeForNearbyItemsRequest:ds,
	LDFetchNearbyItemsRequest:dt,
	LDItemBroadcastStateChangedPush:du,
	LDSubscriptionTerminatedPush:dv,
	LDUrlToStoryRequest:dw,
	LDImageSearchRequest:dx,
	LDFailureReportRequest:dy,
	LDEventReportRequest:dz,
	LDFlagUserRequest:dA,
	LDCreatePlaygroundRequest:dB,
	LDGetFeedbackAccountRequest:dC,
	LDGetExtraVersionsRequest:dD,
	LDGetDirectFeedRequest:dE,
	LDSendDirectMessageRequest:dF,
	LDSetSmsParticipationRequest:dG,
	LDPostBaseRequest:fQ,
	LDPostVideoRequest:dH,
	LDPostMessageRequest:dI,
	LDPostScreenShotRequest:dJ,
	LDLikePostRequest:dK,
	LDAddViewRequest:dL,
	LDFollowUserRequest:dM,
	LDGetUserWallRequest:dN,
	LDGetGameWallRequest:dO,
	LDGetFollowingWallRequest:dP,
	LDGetPostRequest:dQ,
	LDGetStandardPostTagsRequest:dR,
	LDGetFollowersRequest:dS,
	LDGetAccountsFollowedRequest:dT,
	LDDeletePostRequest:dU,
	LDGetExternalShareLinkRequest:dV,
	LDCheckFollowingRequest:dW,
	LDGetFollowerCountRequest:dX,
	LDGetFollowingCountRequest:dY,
	LDGetUserWallPostCountRequest:dZ,
	LDGetPackagePostsRequest:ea,
	LDUpdatePostDetailsRequest:eb,
	LDGetPackagesRequest:ec,
	LDGetIdentityTokenRequest:ed,
	LDGetPublicChatRequest:ee,
	LDJoinPublicChatRequest:ef,
	LDLeavePublicChatRequest:eg,
	LDWriteToPublicChatRequest:eh,
	LDGetPublicChatMembersRequest:ei,
	LDGetRecentMessagesRequest:ej,
	LDListLiveChatsRequest:ek,
	LDListInterestingChatsRequest:el,
	LDPublicChatMessageDeliveryPush:em,
	LDPublicChatMessageTerminatedPush:en,
	LDReportSummaryEventsRequest:eo,
	LDGatherEventsByAppRequest:ep,
	LDListBlockedUsersRequest:eq,
	LDUnblockUserRequest:er,
	LDBlockUserRequest:es,
	LDContentIdBase:fT,
	LDReportUserRequest:et,
	LDGetMessageResponse:eu,
	LDGetMessagesResponse:ev,
	LDGetMessagesWithContinuationResponse:ew,
	LDGetJoinFeedLinkResponse:ex,
	LDGetPublicFeedDetailsResponse:ey,
	LDDirtyFeedsResponse:ez,
	LDFeedStateResponse:eA,
	LDGetUploadTicketResponse:eB,
	LDGetMultipartUploadTicketResponse:eC,
	LDGetDownloadTicketResponse:eD,
	LDGetContactDetailsResponse:eE,
	LDGetProfileDetailsResponse:eF,
	LDGetOmletContactProfileResponse:eG,
	LDGetProfilePublicStateResponse:eH,
	LDGetContactProfileAndPublicStateResponse:eI,
	LDGetContactProfileResponse:eJ,
	LDGetItemInfoResponse:eK,
	LDListItemsResponse:eL,
	LDGenerateGrantForItemResponse:eM,
	LDGenerateApiKeyResponse:eN,
	LDListApiKeysResponse:eO,
	LDGetCloudConfigResponse:eP,
	LDFindGamersResponse:eQ,
	LDCreateSubscriptionResponse:eR,
	LDScoreResponse:eS,
	LDScoresResponse:eT,
	LDBroadcastItemResponse:eU,
	LDFetchNearbyItemsResponse:eV,
	LDUrlToStoryResponse:eW,
	LDImageSearchResponse:eX,
	LDCreatePlaygroundResponse:eY,
	LDGetExtraVersionsResponse:eZ,
	LDGetDirectFeedResponse:fa,
	LDSendDirectMessageResponse:fb,
	LDWallResponse:fc,
	LDWallsResponse:fd,
	LDGetPostResponse:fe,
	LDAddPostResponse:ff,
	LDGetAccountsFollowedResponse:fg,
	LDGetStandardPostTagsResponse:fh,
	LDGetFollowersResponse:fi,
	LDGetExternalShareLinkResponse:fj,
	LDGetPackagesResponse:fk,
	LDGetIdentityTokenResponse:fl,
	LDGetPublicChatResponse:fm,
	LDGetPublicChatMembersResponse:fn,
	LDGetRecentMessagesResponse:fo,
	LDListChatsResponse:fp,
	LDGatherEventsByAppResponse:fq,
	LDString:gm,
	LDIdentity:fu,
	LDAppScopeId:fv,
	LDAccountDetails:fw,
	LDFlaggedDetails:fx,
	LDTypedId:fy,
	LDAcl:fz,
	LDIdentityHash:fA,
	LDMessage:fB,
	LDRealtimeMessage:fC,
	LDPushKey:fD,
	LDBlobMetadata:fE,
	LDBlobUploadTicket:fF,
	LDContactDetails:fG,
	LDItemId:fH,
	LDPurchaseData:fI,
	LDFeature:gq,
	LDItemInfoUserMutableContainer:fJ,
	LDItemInfoSystemMutableContainer:fK,
	LDCloudConfig:fL,
	LDGameChallengeId:fM,
	LDGPSLocation:fN,
	LDNearbyItemContainer:fO,
	LDClientEvent:fP,
	LDPostTag:fR,
	LDPostId:fS,
	LDJoinFeedLink:fU,
	LDDirtyFeed:fV,
	LDBlobDownloadTicket:fW,
	LDProfileDetails:fX,
	LDContactProfile:fY,
	LDProfilePublicState:fZ,
	LDItemInfoContainer:ga,
	LDItemInfoListingContainer:gb,
	LDApiKey:gc,
	LDScoreBoardEntry:gd,
	LDImageSearchResult:ge,
	LDWall:gg,
	LDPostContainer:gh,
	LDUser:gi,
	LDPostTagWithLocalization:gj,
	LDPackageInfo:gk,
	LDPublicChatInfo:gl,
	LDFlaggedRecord:gn,
	LDReceiptContainer:go,
	LDBillingInfoContainer:gp,
	LDItemInfoUserMutable:gG,
	LDAppInfoUserMutable:gr,
	LDStickerPackInfoUserMutable:gs,
	LDItemInfoSystemMutable:gK,
	LDAppInfoSystemMutable:gt,
	LDStickerPackInfoSystemMutable:gu,
	LDNearbyItemFeedMetadata:gv,
	LDProfileIdentitySetting:gw,
	LDItemInfo:gM,
	LDAppInfo:gx,
	LDStickerPackInfo:gy,
	LDAppInfoListingWrapper:gz,
	LDStickerPackInfoListingWrapper:gA,
	LDPost:gO,
	LDVideoPost:gB,
	LDMessagePost:gC,
	LDScreenShotPost:gD,
	LDMockReceipt:gE,
	LDMockBillingInfo:gF,
	LDAppScreenshot:gH,
	LDAppStore:gI,
	LDSticker:gJ,
	LDPrice:gL,
	LDItemInfoImmutableContainer:gN,
	LDComment:gP,
	LDM3U8Info:gQ,
	LDItemInfoImmutable:gT,
	LDAppInfoImmutable:gR,
	LDStickerPackInfoImmutable:gS,
	LDApiCode:gU,
	LDAcceptanceState:gV,
	LDFlow:gW,
	LDPartner:gX,
	LDStatus:gY,
	LDStoreItemType:gZ,
	LDTier:ha,
	LDLocationType:hb,
	LDTaggedItemType:hc,
	LDContentType:hd,
	LDReportReason:he,
	LDIdentityType:hf,
	LDAclType:hg,
	LDPushType:hh,
	LDProvider:hi,
	LDPostTagType:hj,
	LDPostType:hk,
	LDPublishedState:hl
};
Object.freeze(module.exports);
