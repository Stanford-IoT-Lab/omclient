var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityInfoContainer = require('./LDCommunityInfoContainer');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['cic']!=null){
		$.CommunityInfoContainers=[];
		var d = e['cic'];
		for(var k=0; k<d.length;++k)$.CommunityInfoContainers.push(new LDCommunityInfoContainer(d[k]));
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetCommunityInfosResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityInfoContainers!=null) {
		o['cic']=[];
		var d=$.CommunityInfoContainers;
		for(var k=0;k<d.length;++k) o['cic'].push(d[k].encode());
	}
	return o;
}
_.CommunityInfoContainers=null;

module.exports=O;
