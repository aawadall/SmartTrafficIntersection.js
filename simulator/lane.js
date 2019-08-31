var EventEmitter = require('events');
var Segment = require('./segment');


class Lane extends EventEmitter {

    constructor(name, source = null, sink = null, controller = null) {
        super();
        this.name = name;
        this.segments = [];
        this.waitTimes = [];
        this.source = source;
        this.sink = sink;
        this.controller = controller;
    }

    addSegment(segment) {
        this.segments.append(segment);
    };
}



module.exports = Lane;