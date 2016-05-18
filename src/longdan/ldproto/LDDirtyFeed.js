var LDFeed = require('./LDFeed');

function O(e){
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.Acceptance=e['a'];
	$.LastWriteTime=e['t'];
	$.LastRenderableTime=e['r'];
}
var _=O.prototype;
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

module.exports=O;
