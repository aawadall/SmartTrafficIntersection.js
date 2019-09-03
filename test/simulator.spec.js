const Simulator = require('../simulator/simulator');
const chai = require('chai');
chai.use(require('chai-events'));
chai.use(require('chai-uuid'));

describe('Simulator', function() {
  const simulator = new Simulator();

  describe('Properties', function() {
    describe('Lanes', function() {
      it('Should have a property lanes', function() {
        simulator.should.have.property('lanes');
      });
      it('Should be an array');
    });
    describe('Sources', function() {
      it('Should have a property sources', function() {
        simulator.should.have.property('sources');
      });
      it('Should be an array');
    });
    describe('Sinks', function() {
      it('Should have a property sinks', function() {
        simulator.should.have.property('sinks');
      });
      it('Should be an array');
    });
    describe('Interval', function() {
      it('Should have a property interval', function() {
        simulator.should.have.property('interval');
      });
      it('Should be a number');
    });
  });

  describe('Behaviour', function() {

  });

  describe('Events', function() {

  });
});
