const EventEmitter = require('events');
const uuidv1 = require('uuid/v1');

class Sink extends EventEmitter {
    constructor(name, inFlux) {
        super();
        this.id = uuidv1(); 
        this.name = name;
        this.inFlux = inFlux;
    }

    
}

module.exports = Sink;