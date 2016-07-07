var LDListAppsByPopularityResponse = require('./LDListAppsByPopularityResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['b']!=null)$.ContinuationKey=new Buffer(e['b'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDListAppsByPopularityRequest";
_.__rt=LDListAppsByPopularityResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.ContinuationKey!=null)o['b']=$.ContinuationKey.toString('base64');
	return o;
}
_.ContinuationKey=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"la":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
