function enablePluginsDebug() {
  window.TalkEmbed.enablePluginsDebug();
}

function disablePluginsDebug() {
  window.TalkEmbed.disablePluginsDebug();
}

function enableEventLogging() {
  window.TalkEmbed.on('**', logger);
}

function disableEventLogging() {
  window.TalkEmbed.off('**', logger);
}

function logger(value) {
  console.log(
    `%cTalk-Devtools %c${this.event}`,
    'color: coral',
    'color: #5a0e9c'
  );
  console.log(value);
}

var events = [
  {
    name: 'ENABLE_PLUGINS_DEBUG',
    fn: enablePluginsDebug,
  },
  {
    name: 'DISABLE_PLUGINS_DEBUG',
    fn: disablePluginsDebug,
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
