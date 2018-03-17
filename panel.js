var tabId = chrome.devtools.inspectedWindow.tabId;

var $pluginsDebug = document.getElementById('pluginsDebug');

$pluginsDebug.addEventListener('change', function() {
	if ($pluginsDebug.checked) {
		chrome.tabs.sendMessage(tabId, { action: 'ENABLE_DEBUG_MODE' });
	} else {
		chrome.tabs.sendMessage(tabId, { action: 'DISABLE_DEBUG_MODE' });
	}
});

var $eventLogging = document.getElementById('eventLogging');

$eventLogging.addEventListener('change', function() {
	if ($eventLogging.checked) {
		chrome.tabs.sendMessage(tabId, { action: 'ENABLE_EVENT_LOGGING' });
	} else {
		chrome.tabs.sendMessage(tabId, { action: 'DISABLE_EVENT_LOGGING' });
	}
});

chrome.runtime.onConnect.addListener(function(portFrom) {
	console.log('portFrom.name', portFrom.name);

	portFrom.onMessage.addListener(function(e) {
		if ((e.type = 'TALK_EVENT')) {
			console.log(e.event, e.value);
		}
	});
});

chrome.runtime.onMessage.addListener((e) => {
	console.log('message', e);
});

console.log('PANEL --- JS');
