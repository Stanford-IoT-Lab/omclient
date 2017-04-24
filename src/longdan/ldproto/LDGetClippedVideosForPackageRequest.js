var LDGetClippedVideosForPackageResponse = require('./LDGetClippedVideosForPackageResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPackageIdLocale = require('./LDPackageIdLocale');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.Pid=new LDPackageIdLocale(e['p']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetClippedVideosForPackageRequest";
_.__rt=LDGetClippedVideosForPackageResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Pid!=null)o['p']=$.Pid.encode();
	return o;
}
_.Pid=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gcv":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
