var LDJSONLoggable = require('./LDJSONLoggable');
var LDCommunityInfoContainer = require('./LDCommunityInfoContainer');
var LDUserCustomCommunityInfoContainer = require('./LDUserCustomCommunityInfoContainer');
var LDCommunityId = require('./LDCommunityId');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.CommunityId=new LDCommunityId(e['p']);
	if(e['uccic']!=null)$.UserCustomCommunityInfoContainer=new LDUserCustomCommunityInfoContainer(e['uccic']);
	if(e['cic']!=null)$.CommunityInfoContainer=new LDCommunityInfoContainer(e['cic']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDCommunityDetailsForUser";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.CommunityId!=null)o['p']=$.CommunityId.encode();
	if($.UserCustomCommunityInfoContainer!=null)o['uccic']=$.UserCustomCommunityInfoContainer.encode();
	if($.CommunityInfoContainer!=null)o['cic']=$.CommunityInfoContainer.encode();
	return o;
}
_.CommunityId=null;
_.UserCustomCommunityInfoContainer=null;
_.CommunityInfoContainer=null;

module.exports=O;
