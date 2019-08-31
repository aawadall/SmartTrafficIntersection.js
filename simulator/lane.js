const EventEmitter = require('events');

/**
 * A lane is made of a source, a sink, a collection of segments,
 * and a traffic controller
 * Lanes can be connected to branch traffic through a traffic interchange
 */
class Lane extends EventEmitter {
  /**
   * Lane
   * @param {string} name name of the lane
   * @param {Source} source of traffic, can be a pure Source, or an interchange
   * @param {Sink} sink where traffic goes, can be pure Sink or an interchange
   * @param {Controller} controller Controls traffic flow
   */
  constructor(name, source = null, sink = null, controller = null) {
    super();
    this.name = name;
    this.segments = [];
    this.waitTimes = [];
    this.source = source;
    this.sink = sink;
    this.controller = controller;
  }

  /**
   * adds a segment to the lane
   * @param {Segment} segment to be added
   */
  addSegment(segment) {
    this.segments.append(segment);
  };
}

module.exports = Lane;
