var LDJSONLoggable = require('./LDJSONLoggable');
var LDTypedId = require('./LDTypedId');
var LDFeed = require('./LDFeed');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ContentType=e['ct'];
	if(e['cf']!=null)$.Feed=new LDFeed(e['cf']);
	if(e['ci']!=null)$.TypedId=new LDTypedId(e['ci']);
	$.Account=e['ca'];
	$.ProfileVersion=e['cpv'];
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDContentIdBase";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
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

module.exports=O;
