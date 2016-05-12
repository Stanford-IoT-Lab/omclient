var LDJSONLoggable = require('./LDJSONLoggable');
var LDItemId = require('./LDItemId');
var LDFeed = require('./LDFeed');

function LDCreatePlaygroundResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	if(e['ii']!=null){
		$.AddedItems=[];
		var d = e['ii'];
		for(var k=0; k<d.length;++k)$.AddedItems.push(new LDItemId(d[k]));
	}
	$.Message=e['m'];
}
LDCreatePlaygroundResponse.prototype=new LDJSONLoggable();
LDCreatePlaygroundResponse.prototype.constructor = LDCreatePlaygroundResponse;
var _=LDCreatePlaygroundResponse.prototype;
_.__type="LDCreatePlaygroundResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.AddedItems!=null) {
		o['ii']=[];
		var d=$.AddedItems;
		for(var k=0;k<d.length;++k) o['ii'].push(d[k].encode());
	}
	if($.Message!=null)o['m']=$.Message;
	return o;
}
_.Feed=null;
_.AddedItems=null;
_.Message=null;

module.exports=LDCreatePlaygroundResponse;
