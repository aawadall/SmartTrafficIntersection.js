const EventEmitter = require('events');

/**
 * Global simulator
 */
class Simulator extends EventEmitter {
  /**
   * Simulator constructor
   * @param {number} interval between ticks
   */
  constructor(interval) {
    super();
    this.lanes = [];
    this.sources = [];
    this.sinks = [];
    this.interval = interval;
  }

  /**
   * adds a lane to the simulator
   * @param {Lane} lane made of source, sink, segments and a controller
   */
  addLane(lane) {
    lanes.add(lane);
  }

  /**
   * Changes simulator intervals
   * @param {number} interval between ticks
   */
  changeInterval(interval) {
    this.interval = interval;
  }
  /**
   * Simulates traffic
   */
  tick() {
    this.emit('tick');
  }
}

module.exports = Simulator;
