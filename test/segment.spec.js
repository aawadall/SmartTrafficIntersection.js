const Segment = require('../simulator/segment');
const chai = require('chai');
chai.use(require('chai-events'));
chai.use(require('chai-as-promised'));

describe('Segment', function() {
  const name = 'Mock Segment';
  let segment = null;
  const capacity = 5;
  const inFlux = 2;
  const outFlux = 3;

  this.beforeEach('Segment Loader', function() {
    segment = new Segment(name, capacity, inFlux, outFlux);
  });

  describe('Segment Attributes', function() {
    describe('Name', function() {
      it('Should have a name', function() {
        segment.should.have.property('name');
      });
      it(`Should have the name equal to ${name}`, function() {
        segment.name.should.equal(name);
      });
    });

    describe('Capacity', function() {
      it('Should have a capacity', function() {
        segment.should.have.property('capacity');
      });

      it(`Should have the capacity equal to ${capacity}`, function() {
        segment.capacity.should.equal(capacity);
      });
    });

    describe('InFlux', function() {
      it('Should have in-flux', function() {
        segment.should.have.property('inFlux');
      });

      it(`Should have in-flux equal to ${inFlux}`, function() {
        segment.inFlux.should.equal(inFlux);
      });
    });

    describe('OutFlux', function() {
      it('Should have out-flux', function() {
        segment.should.have.property('outFlux');
      });

      it(`Should have out-flux equal to ${outFlux}`, function() {
        segment.outFlux.should.equal(outFlux);
      });
    });
  });

  describe('Flux', function() {
    describe('Methods', function() {
      it('Should accept more vehicles from adjacent segments', function() {
        segment.should.have.property('fill');
      });
      it('Should drain vehicles into adjacent segments', function() {
        segment.should.have.property('drain');
      });
    });

    describe('Limits', function() {
      it('Should have capacity increasing by car size', function() {
        const size = 1;
        segment.fill(size);
        segment.occupancy.should.equal(size);
      });

      it('Should have capacity decreses by car size', function() {
        const inSize = 2;
        const outSize = 1;
        segment.fill(inSize);
        segment.drain(outSize);
        segment.occupancy.should.equal(inSize - outSize);
      });

      it('Should not accept more cars if full capacity', function() {
        for (let index = 0; index < 1 + segment.capacity / inFlux; index++) {
          segment.fill(inFlux);
        }
        segment.occupancy.should.not.be.above(segment.capacity);
      });

      it('Should not drain cars, if empty capacity', function() {
        segment.fill(inFlux);
        for (let index = 0; index < 1 + segment.capacity / outFlux; index++) {
          segment.drain(outFlux);
        }
        segment.occupancy.should.not.be.below(0);
      });
    });
  });
});
