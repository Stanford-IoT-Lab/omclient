var LDJSONLoggable = require('./LDJSONLoggable');
var LDScreenShotPost = require('./LDScreenShotPost');
var LDMessagePost = require('./LDMessagePost');
var LDVideoPost = require('./LDVideoPost');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['v']!=null)$.VideoPost=new LDVideoPost(e['v']);
	if(e['m']!=null)$.MessagePost=new LDMessagePost(e['m']);
	if(e['s']!=null)$.ScreenShotPost=new LDScreenShotPost(e['s']);
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDPostContainer";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.VideoPost!=null)o['v']=$.VideoPost.encode();
	if($.MessagePost!=null)o['m']=$.MessagePost.encode();
	if($.ScreenShotPost!=null)o['s']=$.ScreenShotPost.encode();
	return o;
}
_.VideoPost=null;
_.MessagePost=null;
_.ScreenShotPost=null;

module.exports=O;
