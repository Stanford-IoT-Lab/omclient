var LDJSONLoggable = require('./LDJSONLoggable');
var LDStreamState = require('./LDStreamState');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['m']!=null)$.State=new LDStreamState(e['m']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDStreamDeliveryMessagePush";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.State!=null)o['m']=$.State.encode();
	return o;
}
_.State=null;

module.exports=O;
