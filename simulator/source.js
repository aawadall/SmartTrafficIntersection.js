const EventEmitter = require('events');
const uuidv1 = require('uuid/v1');

/**
 * Traffic source, used to generate traffic into a lane segment
 */
class Source extends EventEmitter {
  /**
   * Constructor
   * @param {string} name is the Source name
   * @param {number} outFlux volume of cars flowing
   */
  constructor(name, outFlux) {
    super();
    this.id = uuidv1();
    this.name = name;
    this.outFlux = outFlux;
  }

  /**
   * Simulates traffic
   */
  tick() {
    this.emit('flow', (flux) => {
      flux = Math.floor(Math.random() * outFlux);
    });
  }
}

module.exports = Source;
