const EventEmitter = require('events');
const uuid = require('uuid'); //creates a random universal ID

class Logger extends EventEmitter {
    log(msg) {
        // Call (raise) an event.
        // Use "this" because we're extending the EventEmitter
        //-- Emit an event call 'message' with a unique id, and the message --//
        
        this.emit('message', { id: uuid.v4(), msg });
    }
}

////-- Export this class and put it in 'index.js' --////
// module.exports = Logger;

////-- Instantiate a new logger --////
const logger = new Logger();

//-- every time we call log, should show a new id with the message that is sent --//
logger.on('message', (data) => console.log('Called Listener:', data) ); // data is an objectd

logger.log('Hello World');