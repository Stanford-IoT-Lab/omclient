var LDUser = require('./LDUser');
var LDPostId = require('./LDPostId');

function O(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Id=new Buffer(e['i'],'base64');
	$.Timestamp=e['t'];
	$.Type=e['T'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	if(e['p']!=null)$.PostId=new LDPostId(e['p']);
	if(e['u']!=null)$.User=new LDUser(e['u']);
}
var _=O.prototype;
_.__type="LDComment";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Id!=null)o['i']=$.Id.toString('base64');
	if($.Timestamp!=null)o['t']=$.Timestamp;
	if($.Type!=null)o['T']=$.Type;
	if($.Body!=null)o['b']=$.Body.toString('base64');
	if($.PostId!=null)o['p']=$.PostId.encode();
	if($.User!=null)o['u']=$.User.encode();
	return o;
}
_.Id=null;
_.Timestamp=null;
_.Type=null;
_.Body=null;
_.PostId=null;
_.User=null;

module.exports=O;
