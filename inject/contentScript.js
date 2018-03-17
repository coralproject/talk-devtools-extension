// Start connection in content script
let contentPort = chrome.runtime.connect({
  name: 'background-content',
});

// Appending pageScript to interact with the DOM
var s = document.createElement('script');
s.src = chrome.extension.getURL('inject/pageScript.js');
document.body.appendChild(s);

// Listen for runtime messages
const actions = [
  'ENABLE_DEBUG_MODE',
  'DISABLE_DEBUG_MODE',
  'ENABLE_EVENT_LOGGING',
  'DISABLE_EVENT_LOGGING',
];

// Listening to events
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (actions.includes(message.action)) {
    // Let's fire an allowed action to pageScript
    let event = new CustomEvent(message.action);
    window.dispatchEvent(event);
  }
});
