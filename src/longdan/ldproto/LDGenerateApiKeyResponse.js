var LDApiKey = require('./LDApiKey');

function LDGenerateApiKeyResponse(e){
	if(!e)return;
	var $=this;
	if(e['ak']!=null)$.ApiKey=new LDApiKey(e['ak']);
}
var _=LDGenerateApiKeyResponse.prototype;
_.__type="LDGenerateApiKeyResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ApiKey!=null)o['ak']=$.ApiKey.encode();
	return o;
}
_.ApiKey=null;

module.exports=LDGenerateApiKeyResponse;
