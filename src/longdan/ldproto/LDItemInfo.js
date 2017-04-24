var LDItemInfoUserMutableContainer = require('./LDItemInfoUserMutableContainer');
var LDItemInfoSystemMutableContainer = require('./LDItemInfoSystemMutableContainer');
var LDItemInfoImmutableContainer = require('./LDItemInfoImmutableContainer');

function O(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.ImmutableContainer=new LDItemInfoImmutableContainer(e['i']);
	if(e['s']!=null)$.SystemMutableContainer=new LDItemInfoSystemMutableContainer(e['s']);
	if(e['u']!=null)$.UserMutableContainer=new LDItemInfoUserMutableContainer(e['u']);
}
var _=O.prototype;
_.__type="LDItemInfo";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ImmutableContainer!=null)o['i']=$.ImmutableContainer.encode();
	if($.SystemMutableContainer!=null)o['s']=$.SystemMutableContainer.encode();
	if($.UserMutableContainer!=null)o['u']=$.UserMutableContainer.encode();
	return o;
}
_.ImmutableContainer=null;
_.SystemMutableContainer=null;
_.UserMutableContainer=null;

module.exports=O;
