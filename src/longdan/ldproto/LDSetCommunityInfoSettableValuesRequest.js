var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDSettableValues = require('./LDSettableValues');
var LDCommunityInfoContainer = require('./LDCommunityInfoContainer');
var LDCommunityIdKey = require('./LDCommunityIdKey');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	if(e['k']!=null)$.AppDetailsKey=new LDCommunityIdKey(e['k']);
	if(e['cic']!=null)$.CommunityInfoContainer=new LDCommunityInfoContainer(e['cic']);
	if(e['sv']!=null)$.SettableValues=new LDSettableValues(e['sv']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDSetCommunityInfoSettableValuesRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.AppDetailsKey!=null)o['k']=$.AppDetailsKey.encode();
	if($.CommunityInfoContainer!=null)o['cic']=$.CommunityInfoContainer.encode();
	if($.SettableValues!=null)o['sv']=$.SettableValues.encode();
	return o;
}
_.AdminAccount=null;
_.AppDetailsKey=null;
_.CommunityInfoContainer=null;
_.SettableValues=null;
O.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"scisv":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
