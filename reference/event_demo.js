const EventEmitter = require('events');

////-- Create an emiter class --/////
class MyEmitter extends EventEmitter { }

////-- Init Object --////
const myEmitter = new MyEmitter();

////-- Event Listener --////
myEmitter.on('event', ()=> console.lot('Event Fired!'));

////-- Init event --////
myEmitter.emit('event');