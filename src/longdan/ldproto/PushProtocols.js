var LDDeviceRegistrationStateChangedPush = require('./LDDeviceRegistrationStateChangedPush');
var LDMessageDeliveryPush = require('./LDMessageDeliveryPush');
var LDRealtimeMessageDeliveryPush = require('./LDRealtimeMessageDeliveryPush');
var LDMessageTerminatedPush = require('./LDMessageTerminatedPush');
var LDInboxDeliveryMessagePush = require('./LDInboxDeliveryMessagePush');
var LDInboxDeliveryTerminatedPush = require('./LDInboxDeliveryTerminatedPush');
var LDItemBroadcastStateChangedPush = require('./LDItemBroadcastStateChangedPush');
var LDSubscriptionTerminatedPush = require('./LDSubscriptionTerminatedPush');
var LDPublicChatMessageDeliveryPush = require('./LDPublicChatMessageDeliveryPush');
var LDPublicChatMessageTerminatedPush = require('./LDPublicChatMessageTerminatedPush');
var LDStreamDeliveryMessagePush = require('./LDStreamDeliveryMessagePush');
var LDStreamDeliveryTerminatedPush = require('./LDStreamDeliveryTerminatedPush');

module.exports={
	'a.dp':LDDeviceRegistrationStateChangedPush,
	'm.p':LDMessageDeliveryPush,
	'm.P':LDRealtimeMessageDeliveryPush,
	'm.t':LDMessageTerminatedPush,
	'i.m':LDInboxDeliveryMessagePush,
	'i.t':LDInboxDeliveryTerminatedPush,
	'n.bp':LDItemBroadcastStateChangedPush,
	'n.st':LDSubscriptionTerminatedPush,
	'pc.p':LDPublicChatMessageDeliveryPush,
	'pc.t':LDPublicChatMessageTerminatedPush,
	'ps.p':LDStreamDeliveryMessagePush,
	'ps.d':LDStreamDeliveryTerminatedPush
};