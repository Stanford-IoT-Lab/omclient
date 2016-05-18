var LDJSONLoggable = require('./LDJSONLoggable');
var LDWall = require('./LDWall');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['w']!=null)$.Wall=new LDWall(e['w']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDWallResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Wall!=null)o['w']=$.Wall.encode();
	return o;
}
_.Wall=null;

module.exports=O;
