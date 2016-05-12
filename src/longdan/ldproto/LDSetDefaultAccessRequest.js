var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDSetDefaultAccessRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
	$.PubliclyReadable=e['r'];
	$.MemberReadable=e['mr'];
	$.PubliclyWritable=e['pw'];
	$.MemberWritable=e['mw'];
	$.MemberFeedSettingsModifiable=e['mfs'];
	$.MemberMembersAddable=e['mma'];
	$.MemberMembersRemovable=e['mmr'];
}
LDSetDefaultAccessRequest.prototype=new LDJSONLoggable();
LDSetDefaultAccessRequest.prototype.constructor = LDSetDefaultAccessRequest;
var _=LDSetDefaultAccessRequest.prototype;
_.__type="LDSetDefaultAccessRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	if($.PubliclyReadable!=null)o['r']=$.PubliclyReadable;
	if($.MemberReadable!=null)o['mr']=$.MemberReadable;
	if($.PubliclyWritable!=null)o['pw']=$.PubliclyWritable;
	if($.MemberWritable!=null)o['mw']=$.MemberWritable;
	if($.MemberFeedSettingsModifiable!=null)o['mfs']=$.MemberFeedSettingsModifiable;
	if($.MemberMembersAddable!=null)o['mma']=$.MemberMembersAddable;
	if($.MemberMembersRemovable!=null)o['mmr']=$.MemberMembersRemovable;
	return o;
}
_.Feed=null;
_.PubliclyReadable=null;
_.MemberReadable=null;
_.PubliclyWritable=null;
_.MemberWritable=null;
_.MemberFeedSettingsModifiable=null;
_.MemberMembersAddable=null;
_.MemberMembersRemovable=null;
LDSetDefaultAccessRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"x":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDSetDefaultAccessRequest;
