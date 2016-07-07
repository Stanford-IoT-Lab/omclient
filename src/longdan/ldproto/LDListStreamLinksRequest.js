var LDListStreamLinksResponse = require('./LDListStreamLinksResponse');

function O(e){
	if(!e)return;
	var $=this;
}
var _=O.prototype;
_.__type="LDListStreamLinksRequest";
_.__rt=LDListStreamLinksResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	return o;
}
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"l":o};o=t;
	t={"#":id,"ps":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
