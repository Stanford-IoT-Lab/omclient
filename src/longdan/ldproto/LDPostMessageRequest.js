var LDAddPostResponse = require('./LDAddPostResponse');
var LDPostBaseRequest = require('./LDPostBaseRequest');
var LDPostTag = require('./LDPostTag');

function O(e){
	LDPostBaseRequest.call(this,e);
	if(!e)return;
	var $=this;
	$.Title=e['t'];
	$.Message=e['m'];
	if(e['pt']!=null)$.PrimaryTag=new LDPostTag(e['pt']);
	if(e['st']!=null){
		$.SecondaryTags=[];
		var d = e['st'];
		for(var k=0; k<d.length;++k)$.SecondaryTags.push(new LDPostTag(d[k]));
	}
}
O.prototype=new LDPostBaseRequest();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostMessageRequest";
_.__rt=LDAddPostResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDPostBaseRequest.prototype.encode.call($,o);
	if($.Title!=null)o['t']=$.Title;
	if($.Message!=null)o['m']=$.Message;
	if($.PrimaryTag!=null)o['pt']=$.PrimaryTag.encode();
	if($.SecondaryTags!=null) {
		o['st']=[];
		var d=$.SecondaryTags;
		for(var k=0;k<d.length;++k) o['st'].push(d[k].encode());
	}
	return o;
}
_.Title=null;
_.Message=null;
_.PrimaryTag=null;
_.SecondaryTags=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"pm":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
