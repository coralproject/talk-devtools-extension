window.addEventListener(
	'ENABLE_DEBUG_MODE',
	function ENABLE_DEBUG_MODE(event) {
		window.TalkEmbed.dispatch('ENABLE_PLUGINS_DEBUG');
	},
	false
);

window.addEventListener(
	'DISABLE_DEBUG_MODE',
	function ENABLE_DEBUG_MODE(event) {
		window.TalkEmbed.dispatch('DISABLE_PLUGINS_DEBUG');
	},
	false
);

window.TalkEmbed.on('**', function(value) {
	// We wait until the embed is ready
	if (this.event === 'query.CoralEmbedStream_Embed.ready') {
		window.postMessage({ event: this.event, value: value }, '*');
	}
});
