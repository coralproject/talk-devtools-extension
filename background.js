let panelPort = chrome.runtime.connect({
	name: 'background-panel',
});

chrome.runtime.onConnect.addListener(function(portFrom) {
	if (portFrom.name === 'background-content') {
		portFrom.onMessage.addListener(function(event) {
			panelPort.postMessage('heyyyy');
		});
	}
});
