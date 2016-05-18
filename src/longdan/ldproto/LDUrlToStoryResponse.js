var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.ResponseType=e['t'];
	if(e['d']!=null)$.ResponseData=new Buffer(e['d'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDUrlToStoryResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ResponseType!=null)o['t']=$.ResponseType;
	if($.ResponseData!=null)o['d']=$.ResponseData.toString('base64');
	return o;
}
_.ResponseType=null;
_.ResponseData=null;

module.exports=O;
