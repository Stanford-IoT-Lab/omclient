var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeaturedVideoClip = require('./LDFeaturedVideoClip');
var LDPackageIdLocale = require('./LDPackageIdLocale');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.Pid=new LDPackageIdLocale(e['p']);
	if(e['c']!=null)$.Clip=new LDFeaturedVideoClip(e['c']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSetFeaturedVideoRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Pid!=null)o['p']=$.Pid.encode();
	if($.Clip!=null)o['c']=$.Clip.encode();
	return o;
}
_.Pid=null;
_.Clip=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"sfv":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
