var LDPublicKeys = require('./ldproto/LDPublicKeys');

var TEST_KEYS = new LDPublicKeys({
	"ClusterEndpoints": {
		"ONE": ["https://us.omlet.me"],
		"TWO": ["https://sg.omlet.me"],
		"THREE": ["https://cn.omlet.me"],
		"FOUR": ["https://de.omlet.me"]
	},
	"ClusterKeys": {
		"ONE": "xkkzyNJmZ1DmNPxGwrykZ2O91f10KNXQvspa15nKKGs=",
		"TWO": "XaG4I7b7wDOZ+lGHSPwbJ2HLkIFf0UGYAWz9c9LkiQk=",
		"THREE": "hj/8xrbYZvZkeOjoN9ndTj+2HAICPXDfK3D/Tfl2nDY=",
		"FOUR": "xMRCvh1eki9JEceBcV7Bx49uaQYpX8FdD0eZ+LCGqCc="
	},
	"DefaultCluster": "ONE",
	"IdpEndpoints": ["https://idp.omlet.me"],
	"IdpKey": "MIOC9PS8KIwXOXSHtplBZLSpIqcifns0jzExtkHXw1g=",
	"ReadOnlyEndpoints":["http://auto.omlet.me"],
	"ReadOnlyKey":"QKxHfdLVgbn+VYpnUiCFLMq/hhUpkpx7occEY3Z0Wnk="
});

var LOCAL_TEST_KEYS = new LDPublicKeys({
	"ClusterEndpoints": {
		"ONE": ["http://127.0.0.1:3829"]
	},
	"ClusterKeys": {
		"ONE": "80Qd+N2ml/Iahcd5kFfzLdT+3Kel7wS/2AwCybtGblA="
	},
	"DefaultCluster": "ONE",
	"IdpEndpoints": ["http://127.0.0.1:4001"],
	"IdpKey": "A2kW+bIHpCz0Xv2t7SVGPDjqXQbHPsBkFNtIhR3ruzk="
});

var DEV_KEYS = new LDPublicKeys({
	"ClusterEndpoints": {
		"ONE": ["https://dev.omapi.net:3829"]
	},
	"ClusterKeys": {
		"ONE": "80Qd+N2ml/Iahcd5kFfzLdT+3Kel7wS/2AwCybtGblA="
	},
	"DefaultCluster": "ONE",
	"IdpEndpoints": ["https://dev.omapi.net:4001"],
	"IdpKey": "A2kW+bIHpCz0Xv2t7SVGPDjqXQbHPsBkFNtIhR3ruzk="
});

module.exports = {
	prod: TEST_KEYS,
	test: TEST_KEYS,
	dev: DEV_KEYS,
	local: LOCAL_TEST_KEYS,
}
