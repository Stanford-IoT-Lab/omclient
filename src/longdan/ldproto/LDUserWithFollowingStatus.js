var LDUser = require('./LDUser');

function O(e){
	LDUser.call(this,e);
	if(!e)return;
	var $=this;
	$.Following=e['fs'];
}
O.prototype=new LDUser();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDUserWithFollowingStatus";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDUser.prototype.encode.call($,o);
	if($.Following!=null)o['fs']=$.Following;
	return o;
}
_.Following=null;

module.exports=O;
