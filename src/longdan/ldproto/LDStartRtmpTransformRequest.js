var LDSimpleResponse = require('./LDSimpleResponse');

function O(e){
	if(!e)return;
	var $=this;
	$.UpstreamRtmpDestination=e['s'];
}
var _=O.prototype;
_.__type="LDStartRtmpTransformRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.UpstreamRtmpDestination!=null)o['s']=$.UpstreamRtmpDestination;
	return o;
}
_.UpstreamRtmpDestination=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"r":o};o=t;
	t={"#":id,"ps":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
