var LDJSONLoggable = require('./LDJSONLoggable');
var LDWall = require('./LDWall');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['w']!=null){
		$.Walls=[];
		var d = e['w'];
		for(var k=0; k<d.length;++k)$.Walls.push(new LDWall(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDWallsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Walls!=null) {
		o['w']=[];
		var d=$.Walls;
		for(var k=0;k<d.length;++k) o['w'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Walls=null;
_.ContinuationKey=null;

module.exports=O;
