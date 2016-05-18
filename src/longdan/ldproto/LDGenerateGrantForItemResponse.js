function O(e){
	if(!e)return;
	var $=this;
	$.ShareLink=e['s'];
	if(e['r']!=null)$.RawKey=new Buffer(e['r'],'base64');
}
var _=O.prototype;
_.__type="LDGenerateGrantForItemResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ShareLink!=null)o['s']=$.ShareLink;
	if($.RawKey!=null)o['r']=$.RawKey.toString('base64');
	return o;
}
_.ShareLink=null;
_.RawKey=null;

module.exports=O;
