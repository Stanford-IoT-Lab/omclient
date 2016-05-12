var LDJSONLoggable = require('./LDJSONLoggable');

function LDPackageInfo(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.PackageName=e['p'];
	$.AppName=e['n'];
	$.IconBlobLink=e['i'];
	$.WallPostCount=e['c'];
}
LDPackageInfo.prototype=new LDJSONLoggable();
LDPackageInfo.prototype.constructor = LDPackageInfo;
var _=LDPackageInfo.prototype;
_.__type="LDPackageInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PackageName!=null)o['p']=$.PackageName;
	if($.AppName!=null)o['n']=$.AppName;
	if($.IconBlobLink!=null)o['i']=$.IconBlobLink;
	if($.WallPostCount!=null)o['c']=$.WallPostCount;
	return o;
}
_.PackageName=null;
_.AppName=null;
_.IconBlobLink=null;
_.WallPostCount=null;

module.exports=LDPackageInfo;
