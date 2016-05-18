var LDIdentity = require('./LDIdentity');

function O(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
}
var _=O.prototype;
_.__type="LDProfileIdentitySetting";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Identity!=null)o['i']=$.Identity.encode();
	return o;
}
_.Identity=null;

module.exports=O;
