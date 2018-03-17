var tabId = chrome.devtools.inspectedWindow.tabId;
var $pluginsDebug = document.getElementById('pluginsDebug');

chrome.tabs.sendMessage(tabId, { action: 'ENABLE_EVENT_LOGGING' });

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

console.log('PANEL --- JS');
