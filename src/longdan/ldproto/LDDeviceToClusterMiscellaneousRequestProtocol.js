var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDGetExtraVersionsRequest = require('./LDGetExtraVersionsRequest');
var LDGetFeedbackAccountRequest = require('./LDGetFeedbackAccountRequest');
var LDCreatePlaygroundRequest = require('./LDCreatePlaygroundRequest');
var LDFlagUserRequest = require('./LDFlagUserRequest');
var LDEventReportRequest = require('./LDEventReportRequest');
var LDFailureReportRequest = require('./LDFailureReportRequest');
var LDImageSearchRequest = require('./LDImageSearchRequest');
var LDUrlToStoryRequest = require('./LDUrlToStoryRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['wl']!=null)$.UrlToStoryRequest=new LDUrlToStoryRequest(e['wl']);
	if(e['is']!=null)$.ImageSearchRequest=new LDImageSearchRequest(e['is']);
	if(e['f']!=null)$.FailureReport=new LDFailureReportRequest(e['f']);
	if(e['R']!=null)$.EventReport=new LDEventReportRequest(e['R']);
	if(e['F']!=null)$.FlagUser=new LDFlagUserRequest(e['F']);
	if(e['p']!=null)$.CreatePlaygroundRequest=new LDCreatePlaygroundRequest(e['p']);
	if(e['gf']!=null)$.GetFeedbackAccount=new LDGetFeedbackAccountRequest(e['gf']);
	if(e['e']!=null)$.GetExtraVersions=new LDGetExtraVersionsRequest(e['e']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterMiscellaneousRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.UrlToStoryRequest!=null)o['wl']=$.UrlToStoryRequest.encode();
	if($.ImageSearchRequest!=null)o['is']=$.ImageSearchRequest.encode();
	if($.FailureReport!=null)o['f']=$.FailureReport.encode();
	if($.EventReport!=null)o['R']=$.EventReport.encode();
	if($.FlagUser!=null)o['F']=$.FlagUser.encode();
	if($.CreatePlaygroundRequest!=null)o['p']=$.CreatePlaygroundRequest.encode();
	if($.GetFeedbackAccount!=null)o['gf']=$.GetFeedbackAccount.encode();
	if($.GetExtraVersions!=null)o['e']=$.GetExtraVersions.encode();
	return o;
}
_.UrlToStoryRequest=null;
_.ImageSearchRequest=null;
_.FailureReport=null;
_.EventReport=null;
_.FlagUser=null;
_.CreatePlaygroundRequest=null;
_.GetFeedbackAccount=null;
_.GetExtraVersions=null;

module.exports=O;
