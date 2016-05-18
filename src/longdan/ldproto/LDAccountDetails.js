var LDCloudConfig = require('./LDCloudConfig');
var LDIdentity = require('./LDIdentity');

function O(e){
	if(!e)return;
	var $=this;
	$.Account=e['a'];
	$.Cluster=e['c'];
	if(e['i']!=null){
		$.Identities=[];
		var d = e['i'];
		for(var k=0; k<d.length;++k)$.Identities.push(new LDIdentity(d[k]));
	}
	$.MigratedName=e['n'];
	$.MigratedPictureLink=e['p'];
	if(e['m']!=null)$.MigratedCloudConfig=new LDCloudConfig(e['m']);
	$.CreationTime=e['s'];
}
var _=O.prototype;
_.__type="LDAccountDetails";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Account!=null)o['a']=$.Account;
	if($.Cluster!=null)o['c']=$.Cluster;
	if($.Identities!=null) {
		o['i']=[];
		var d=$.Identities;
		for(var k=0;k<d.length;++k) o['i'].push(d[k].encode());
	}
	if($.MigratedName!=null)o['n']=$.MigratedName;
	if($.MigratedPictureLink!=null)o['p']=$.MigratedPictureLink;
	if($.MigratedCloudConfig!=null)o['m']=$.MigratedCloudConfig.encode();
	if($.CreationTime!=null)o['s']=$.CreationTime;
	return o;
}
_.Account=null;
_.Cluster=null;
_.Identities=null;
_.MigratedName=null;
_.MigratedPictureLink=null;
_.MigratedCloudConfig=null;
_.CreationTime=null;

module.exports=O;
