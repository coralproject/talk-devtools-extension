function enableDebugMode() {
	window.TalkEmbed.dispatch('ENABLE_PLUGINS_DEBUG');
}

function disableDebugMode() {
	window.TalkEmbed.dispatch('DISABLE_PLUGINS_DEBUG');
}

function enableEventLogging() {
	window.TalkEmbed.on('**', logger);
}

function disableEventLogging() {
	window.TalkEmbed.off('**', logger);
}

function logger(value) {
	console.log(`%cTalk-Devtools %c${this.event}`, 'color: red', 'color: green');
	console.log(value);
}

var events = [
	{
		name: 'ENABLE_DEBUG_MODE',
		fn: enableDebugMode,
	},
	{
		name: 'DISABLE_DEBUG_MODE',
		fn: disableDebugMode,
	},
	{
		name: 'ENABLE_EVENT_LOGGING',
		fn: enableEventLogging,
	},
	{
		name: 'DISABLE_EVENT_LOGGING',
		fn: disableEventLogging,
	},
];

events.map((evt) => {
	window.addEventListener(evt.name, evt.fn, false);
});
