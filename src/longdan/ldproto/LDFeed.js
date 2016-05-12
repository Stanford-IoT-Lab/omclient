function LDFeed(e){
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Kind=e['t'];
	if(e['k']!=null)$.Key=new Buffer(e['k'],'base64');
}
var _=LDFeed.prototype;
_.__type="LDFeed";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Account!=null)o['a']=$.Account;
	if($.Kind!=null)o['t']=$.Kind;
	if($.Key!=null)o['k']=$.Key.toString('base64');
	return o;
}
_.Account=null;
_.Kind=null;
_.Key=null;

module.exports=LDFeed;
