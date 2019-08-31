const EventEmitter = require('events');

/**
 * Global simulator
 */
class Simulator extends EventEmitter {
  /**
   * Simulator constructor
   */
  constructor() {
    super();
    this.lanes = [];
    this.sources = [];
    this.sinks = [];
  }

  /**
   * adds a lane to the simulator
   * @param {Lane} lane made of source, sink, segments and a controller
   */
  addLane(lane) {
    lanes.add(lane);
  }

  /**
   * Simulates traffic
   */
  tick() {
    // Not implemented
  }
}

module.exports = Simulator;
