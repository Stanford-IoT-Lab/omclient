var LDApiKey = require('./LDApiKey');

function O(e){
	if(!e)return;
	var $=this;
	if(e['ak']!=null)$.ApiKey=new LDApiKey(e['ak']);
}
var _=O.prototype;
_.__type="LDGenerateApiKeyResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ApiKey!=null)o['ak']=$.ApiKey.encode();
	return o;
}
_.ApiKey=null;

module.exports=O;
