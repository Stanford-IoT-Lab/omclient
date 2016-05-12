function LDPublicKeys(e){
	if(!e)return;
	var $=this;
	if(e['ClusterEndpoints']!=null){
		$.ClusterEndpoints = {};
		var d = e['ClusterEndpoints'];
		for(var k in d) {
			var d2 = d[k];
			$.ClusterEndpoints[k]=[];
			for(var k2=0;k2<d2.length;++k2) $.ClusterEndpoints[k].push(d2[k2]);
		}
	}
	if(e['ClusterKeys']!=null){
		$.ClusterKeys = {};
		var d = e['ClusterKeys'];
		for(var k in d) $.ClusterKeys[k] = new Buffer(d[k], 'base64');
	}
	$.DefaultCluster=e['DefaultCluster'];
	if(e['IdpEndpoints']!=null){
		$.IdpEndpoints=[];
		var d = e['IdpEndpoints'];
		for(var k=0;k<d.length;++k)$.IdpEndpoints.push(d[k]);
	}
	if(e['IdpKey']!=null)$.IdpKey=new Buffer(e['IdpKey'],'base64');
	if(e['ReadOnlyEndpoints']!=null){
		$.ReadOnlyEndpoints=[];
		var d = e['ReadOnlyEndpoints'];
		for(var k=0;k<d.length;++k)$.ReadOnlyEndpoints.push(d[k]);
	}
	if(e['ReadOnlyKey']!=null)$.ReadOnlyKey=new Buffer(e['ReadOnlyKey'],'base64');
}
var _=LDPublicKeys.prototype;
_.__type="LDPublicKeys";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ClusterEndpoints!=null) {
		o['ClusterEndpoints']={};
		var d=$.ClusterEndpoints;
		for(var k in d) {
			var d2=d[k];
			o['ClusterEndpoints'][k]=[];
			for(var k2 = 0; k2 < d2.length; ++k2) o['ClusterEndpoints'][k].push(d2[k2]);
		}
	}
	if($.ClusterKeys!=null){
		o['ClusterKeys']={};
		var d=$.ClusterKeys;
		for(var k in d)o['ClusterKeys'][k]=d[k].toString('base64');
	}
	if($.DefaultCluster!=null)o['DefaultCluster']=$.DefaultCluster;
	if($.IdpEndpoints!=null) {
		o['IdpEndpoints']=[];
		var d=$.IdpEndpoints;
		for(var k=0;k<d.length;++k) o['IdpEndpoints'].push(d[k]);
	}
	if($.IdpKey!=null)o['IdpKey']=$.IdpKey.toString('base64');
	if($.ReadOnlyEndpoints!=null) {
		o['ReadOnlyEndpoints']=[];
		var d=$.ReadOnlyEndpoints;
		for(var k=0;k<d.length;++k) o['ReadOnlyEndpoints'].push(d[k]);
	}
	if($.ReadOnlyKey!=null)o['ReadOnlyKey']=$.ReadOnlyKey.toString('base64');
	return o;
}
_.ClusterEndpoints=null;
_.ClusterKeys=null;
_.DefaultCluster=null;
_.IdpEndpoints=null;
_.IdpKey=null;
_.ReadOnlyEndpoints=null;
_.ReadOnlyKey=null;

module.exports=LDPublicKeys;
