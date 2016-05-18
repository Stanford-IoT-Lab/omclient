var LDPrice = require('./LDPrice');

function O(e){
	if(!e)return;
	var $=this;
	$.PublishedState=e['p'];
	$.WasEverPublished=e['ep'];
	if(e['$']!=null)$.Price=new LDPrice(e['$']);
	$.CreationTimestamp=e['c'];
	$.LastModifiedTimestamp=e['m'];
}
var _=O.prototype;
_.__type="LDItemInfoSystemMutable";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.PublishedState!=null)o['p']=$.PublishedState;
	if($.WasEverPublished!=null)o['ep']=$.WasEverPublished;
	if($.Price!=null)o['$']=$.Price.encode();
	if($.CreationTimestamp!=null)o['c']=$.CreationTimestamp;
	if($.LastModifiedTimestamp!=null)o['m']=$.LastModifiedTimestamp;
	return o;
}
_.PublishedState=null;
_.WasEverPublished=null;
_.Price=null;
_.CreationTimestamp=null;
_.LastModifiedTimestamp=null;

module.exports=O;
