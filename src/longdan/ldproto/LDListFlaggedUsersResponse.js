var LDJSONLoggable = require('./LDJSONLoggable');
var LDFlaggedDetails = require('./LDFlaggedDetails');

function LDListFlaggedUsersResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['d']!=null){
		$.Details=[];
		var d = e['d'];
		for(var k=0; k<d.length;++k)$.Details.push(new LDFlaggedDetails(d[k]));
	}
	if(e['k']!=null)$.ContinuationKey=new Buffer(e['k'],'base64');
}
LDListFlaggedUsersResponse.prototype=new LDJSONLoggable();
LDListFlaggedUsersResponse.prototype.constructor = LDListFlaggedUsersResponse;
var _=LDListFlaggedUsersResponse.prototype;
_.__type="LDListFlaggedUsersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Details!=null) {
		o['d']=[];
		var d=$.Details;
		for(var k=0;k<d.length;++k) o['d'].push(d[k].encode());
	}
	if($.ContinuationKey!=null)o['k']=$.ContinuationKey.toString('base64');
	return o;
}
_.Details=null;
_.ContinuationKey=null;

module.exports=LDListFlaggedUsersResponse;
