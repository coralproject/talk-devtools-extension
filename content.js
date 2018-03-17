// Start connection in content script
let contentPort = chrome.runtime.connect({
	name: 'background-content',
});
// Appending pageScript to interact with the DOM
var s = document.createElement('script');
s.src = chrome.extension.getURL('pageScript.js');
document.body.appendChild(s);

// Listen for runtime message
const actions = [
	'ENABLE_DEBUG_MODE',
	'DISABLE_DEBUG_MODE',
	'ENABLE_EVENT_LOGGING',
	'DISABLE_EVENT_LOGGING',
];

// Escucha las acciones que tira panel
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log(message);
	if (actions.includes(message.action)) {
		// Let's fire an allowed action
		let event = new CustomEvent(message.action);
		// Lo lee page script
		window.dispatchEvent(event);
	}
});

window.addEventListener(
	'message',
	function(event) {
		if (event.data.action === 'TALK_EVENT') {
			contentPort.postMessage({
				type: 'TALK_EVENT',
				event: event.data.event,
				value: event.data.value,
			});
		}
	},
	false
);
