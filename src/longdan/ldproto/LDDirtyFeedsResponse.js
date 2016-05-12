var LDJSONLoggable = require('./LDJSONLoggable');
var LDDirtyFeed = require('./LDDirtyFeed');

function LDDirtyFeedsResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null){
		$.Dirty=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)$.Dirty.push(new LDDirtyFeed(d[k]));
	}
	$.Partial=e['p'];
	$.Window=e['w'];
}
LDDirtyFeedsResponse.prototype=new LDJSONLoggable();
LDDirtyFeedsResponse.prototype.constructor = LDDirtyFeedsResponse;
var _=LDDirtyFeedsResponse.prototype;
_.__type="LDDirtyFeedsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Dirty!=null) {
		o['d']=[];
		var d=$.Dirty;
		for(var k=0;k<d.length;++k) o['d'].push(d[k].encode());
	}
	if($.Partial!=null)o['p']=$.Partial;
	if($.Window!=null)o['w']=$.Window;
	return o;
}
_.Dirty=null;
_.Partial=null;
_.Window=null;

module.exports=LDDirtyFeedsResponse;
