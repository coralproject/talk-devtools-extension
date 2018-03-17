// Start connection in content script
let contentPort = chrome.runtime.connect({
	name: 'background-content',
});

// Appending pageScript to interact with the DOM
var s = document.createElement('script');
s.src = chrome.extension.getURL('pageScript.js');
document.body.appendChild(s);

// Listen for runtime message
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.action === 'ENABLE_DEBUG_MODE') {
		let event = new CustomEvent('ENABLE_DEBUG_MODE');
		window.dispatchEvent(event);
	}

	if (message.action === 'DISABLE_DEBUG_MODE') {
		let event = new CustomEvent('DISABLE_DEBUG_MODE');
		window.dispatchEvent(event);
	}
});

window.addEventListener(
	'message',
	function receiveDuck(event) {
		if (event.data.action === 'GOT_DUCK') {
			// debugger;
			//Remove this listener, but you can keep it depend on your case
			// window.removeEventListener('message', receiveDuck, false);
			contentPort.postMessage({
				type: 'ahreeeee',
				payload: event.data.payload,
			});
		}
	},
	false
);
