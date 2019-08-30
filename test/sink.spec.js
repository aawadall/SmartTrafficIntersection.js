const Sink = require('../simulator/sink');
const chai = require('chai');
chai.use(require('chai-events'));
chai.use(require('chai-uuid'));
const should = chai.should();

describe('Sink', function () {
    var sink = null;
    const name = 'Mock Sink';
    const inFlux = 5;

    this.beforeEach('Sink Loader', function () {
        sink = new Sink(name, inFlux);
    });
    describe('Properties', function () {
        it('Should have an id', function () {
            sink.should.have.property('id');
        });
        it('Should have a name', function(){
            sink.should.have.property('name');
        });
        it('Should have an inFlux', function () {
            sink.should.have.property('inFlux');
        });
        it('Should have the id formatted as uuid/v1', function(){
            sink.id.should.be.a.uuid('v1');
        });
        it(`Should have its name equal to ${name}`, function(){
            sink.name.should.equal(name);
        });
        it(`Should have its inFlux equal to ${inFlux}`, function(){
            sink.inFlux.should.equal(inFlux);
        });
    });
    
})
