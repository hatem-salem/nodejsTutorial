const EventEmitter = require("events");
const customEmitter = new EventEmitter();
customEmitter.on('response', (event) => {
  console.log(`data received:${event}`);
});
customEmitter.on('response', (event) => {
  console.log(`other logic for data received:${event}`);
});
customEmitter.emit('response', "Hello");