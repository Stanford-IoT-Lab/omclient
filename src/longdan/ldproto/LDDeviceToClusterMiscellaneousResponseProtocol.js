var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDGetPokemonMapResponse = require('./LDGetPokemonMapResponse');
var LDGetCarouselCommunitiesResponse = require('./LDGetCarouselCommunitiesResponse');
var LDGetExtraVersionsResponse = require('./LDGetExtraVersionsResponse');
var LDCreatePlaygroundResponse = require('./LDCreatePlaygroundResponse');
var LDImageSearchResponse = require('./LDImageSearchResponse');
var LDUrlToStoryResponse = require('./LDUrlToStoryResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['wl']!=null)$.UrlToStoryResponse=new LDUrlToStoryResponse(e['wl']);
	if(e['is']!=null)$.ImageSearchResponse=new LDImageSearchResponse(e['is']);
	if(e['p']!=null)$.CreatePlaygroundResponse=new LDCreatePlaygroundResponse(e['p']);
	if(e['e']!=null)$.GetExtraVersions=new LDGetExtraVersionsResponse(e['e']);
	if(e['cc']!=null)$.GetCarouselCommunitiesResponse=new LDGetCarouselCommunitiesResponse(e['cc']);
	if(e['pm']!=null)$.PokemonMapResponse=new LDGetPokemonMapResponse(e['pm']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterMiscellaneousResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.UrlToStoryResponse!=null)o['wl']=$.UrlToStoryResponse.encode();
	if($.ImageSearchResponse!=null)o['is']=$.ImageSearchResponse.encode();
	if($.CreatePlaygroundResponse!=null)o['p']=$.CreatePlaygroundResponse.encode();
	if($.GetExtraVersions!=null)o['e']=$.GetExtraVersions.encode();
	if($.GetCarouselCommunitiesResponse!=null)o['cc']=$.GetCarouselCommunitiesResponse.encode();
	if($.PokemonMapResponse!=null)o['pm']=$.PokemonMapResponse.encode();
	return o;
}
_.UrlToStoryResponse=null;
_.ImageSearchResponse=null;
_.CreatePlaygroundResponse=null;
_.GetExtraVersions=null;
_.GetCarouselCommunitiesResponse=null;
_.PokemonMapResponse=null;

module.exports=O;
