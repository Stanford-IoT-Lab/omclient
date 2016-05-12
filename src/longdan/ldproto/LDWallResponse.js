var LDJSONLoggable = require('./LDJSONLoggable');
var LDWall = require('./LDWall');

function LDWallResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['w']!=null)$.Wall=new LDWall(e['w']);
}
LDWallResponse.prototype=new LDJSONLoggable();
LDWallResponse.prototype.constructor = LDWallResponse;
var _=LDWallResponse.prototype;
_.__type="LDWallResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Wall!=null)o['w']=$.Wall.encode();
	return o;
}
_.Wall=null;

module.exports=LDWallResponse;
