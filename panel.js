var tabId = chrome.devtools.inspectedWindow.tabId;
var $debug = document.getElementById('debug');

$debug.addEventListener('change', function() {
	if ($debug.checked) {
		chrome.tabs.sendMessage(tabId, { action: 'ENABLE_DEBUG_MODE' });
	} else {
		chrome.tabs.sendMessage(tabId, { action: 'DISABLE_DEBUG_MODE' });
	}
});
