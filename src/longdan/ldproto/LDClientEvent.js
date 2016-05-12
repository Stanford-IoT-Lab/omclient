function LDClientEvent(e){
	if(!e)return;
	var $=this;
	$.Key=e['k'];
	$.UtcTimestamp=e['t'];
	if(e['d']!=null){
		$.AuxiliaryData = {};
		var d = e['d'];
		for(var k in d) $.AuxiliaryData[k]=d[k];
	}
}
var _=LDClientEvent.prototype;
_.__type="LDClientEvent";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Key!=null)o['k']=$.Key;
	if($.UtcTimestamp!=null)o['t']=$.UtcTimestamp;
	if($.AuxiliaryData!=null){
		o['d']={};
		var d=$.AuxiliaryData;
		for(var k in d)o['d'][k]=d[k];
	}
	return o;
}
_.Key=null;
_.UtcTimestamp=null;
_.AuxiliaryData=null;

module.exports=LDClientEvent;
