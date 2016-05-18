var LDFeed = require('./LDFeed');
var LDTypedId = require('./LDTypedId');

function O(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Id=new LDTypedId(e['i']);
	$.Timestamp=e['t'];
	$.Owner=e['s'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	if(e['m']!=null)$.Metadata=new Buffer(e['m'],'base64');
	$.Version=e['v'];
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Deleted=e['d'];
	if(e['di']!=null)$.DeviceId=new Buffer(e['di'],'base64');
}
var _=O.prototype;
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

module.exports=O;
