// EX: criamos uma função que será executada quando um evento "scream" for acionado.

var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:
// Criando um manipulador de eventos:
var myEventHandler = function () {
      console.log('I hear a scream!');
}

// Assign the event handler to an event:
// Atribua o manipulador de eventos a um evento:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
// Dispare o evento 'Grito':
eventEmitter.emit('scream');