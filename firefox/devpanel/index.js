var tabId = browser.devtools.inspectedWindow.tabId;
var $pluginsDebug = document.getElementById('pluginsDebug');

$pluginsDebug.addEventListener('change', function() {
  var action = $pluginsDebug.checked
    ? 'ENABLE_DEBUG_MODE'
    : 'DISABLE_DEBUG_MODE';

  browser.tabs.sendMessage(tabId, { action });
});

var $eventLogging = document.getElementById('eventLogging');

$eventLogging.addEventListener('change', function() {
  var action = $eventLogging.checked
    ? 'ENABLE_EVENT_LOGGING'
    : 'DISABLE_EVENT_LOGGING';

  browser.tabs.sendMessage(tabId, { action });
});

function generateNewAsset() {
  var uniqueId =
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36);

  window.open(`http://localhost:3000/assets/title/${uniqueId}`, '_blank');
}

$createNewAssetLink = document.getElementById('createNewAssetLink');
$createNewAssetLink.addEventListener('click', generateNewAsset, false);
