var LDFeed = require('./LDFeed');

function O(e){
	if(!e)return;
	var $=this;
	$.Type=e['T'];
	$.Timestamp=e['t'];
	$.Sender=e['s'];
	if(e['b']!=null)$.Body=new Buffer(e['b'],'base64');
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
var _=O.prototype;
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

module.exports=O;
