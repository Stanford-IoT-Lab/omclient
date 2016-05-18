var LDPostContainer = require('./LDPostContainer');

function O(e){
	if(!e)return;
	var $=this;
	if(e['p']!=null){
		$.Posts=[];
		var d = e['p'];
		for(var k=0; k<d.length;++k)$.Posts.push(new LDPostContainer(d[k]));
	}
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
}
var _=O.prototype;
_.__type="LDWall";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Posts!=null) {
		o['p']=[];
		var d=$.Posts;
		for(var k=0;k<d.length;++k) o['p'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	return o;
}
_.Posts=null;
_.ContinuationKey=null;

module.exports=O;
