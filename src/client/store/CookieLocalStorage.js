/**
 * A basic implementation of the LocalStorage api built out of cookies.
*/
class CookieStorage {

	constructor() {
		var data = this._getCookie("data");
		if (data) {
			this._data = JSON.parse(data);
		} else {
			this._data = {};
		}
	}

	getItem(key) {
		return this._data[key];
	}

	setItem(key, value) {
		this._data[key] = value;
		this._setCookie("data", JSON.stringify(this._data));
	}

	removeItem() {
		delete this._data[key];
		this._setCookie("data", JSON.stringify(this._data));
	}

	_setCookie(cname, cvalue) {
	    var d = new Date();
	    var exdays = 365.25*20;
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires="+ d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	_getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length,c.length);
	        }
	    }
	    return undefined;
	}
}

module.exports = CookieStorage;