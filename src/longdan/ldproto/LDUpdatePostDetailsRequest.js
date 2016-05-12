var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostTag = require('./LDPostTag');
var LDPostId = require('./LDPostId');

function LDUpdatePostDetailsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.PostId=new LDPostId(e['i']);
	$.Title=e['t'];
	$.Description=e['d'];
	$.Message=e['m'];
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new LDPostTag(d[k]));
	}
}
LDUpdatePostDetailsRequest.prototype=new LDJSONLoggable();
LDUpdatePostDetailsRequest.prototype.constructor = LDUpdatePostDetailsRequest;
var _=LDUpdatePostDetailsRequest.prototype;
_.__type="LDUpdatePostDetailsRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['i']=$.PostId.encode();
	if($.Title!=null)o['t']=$.Title;
	if($.Description!=null)o['d']=$.Description;
	if($.Message!=null)o['m']=$.Message;
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
	return o;
}
_.PostId=null;
_.Title=null;
_.Description=null;
_.Message=null;
_.SecondaryTags=null;
LDUpdatePostDetailsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"upd":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUpdatePostDetailsRequest;
