var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null){
		$.Ids=[];
		var d = e['id'];
		for(var k=0;k<d.length;++k)$.Ids.push(d[k]);
	}
	if(e['ac']!=null){
		$.Accounts=[];
		var d = e['ac'];
		for(var k=0;k<d.length;++k)$.Accounts.push(d[k]);
	}
	if(e['dn']!=null){
		$.DisplayNames=[];
		var d = e['dn'];
		for(var k=0;k<d.length;++k)$.DisplayNames.push(d[k]);
	}
	if(e['pr']!=null){
		$.ProfilePictureLinks=[];
		var d = e['pr'];
		for(var k=0;k<d.length;++k)$.ProfilePictureLinks.push(d[k]);
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetPublicChatMembersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Ids!=null) {
		o['id']=[];
		var d=$.Ids;
		for(var k=0;k<d.length;++k) o['id'].push(d[k]);
	}
	if($.Accounts!=null) {
		o['ac']=[];
		var d=$.Accounts;
		for(var k=0;k<d.length;++k) o['ac'].push(d[k]);
	}
	if($.DisplayNames!=null) {
		o['dn']=[];
		var d=$.DisplayNames;
		for(var k=0;k<d.length;++k) o['dn'].push(d[k]);
	}
	if($.ProfilePictureLinks!=null) {
		o['pr']=[];
		var d=$.ProfilePictureLinks;
		for(var k=0;k<d.length;++k) o['pr'].push(d[k]);
	}
	return o;
}
_.Ids=null;
_.Accounts=null;
_.DisplayNames=null;
_.ProfilePictureLinks=null;

module.exports=O;
