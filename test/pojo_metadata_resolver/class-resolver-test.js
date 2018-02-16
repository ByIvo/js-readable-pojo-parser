var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var classResolver = require('./../../src/pojo_metadata_resolver/class-resolver.js');

describe('test', function () {
  it('another test', function () {
    var metadata = {};
    var canResolve = classResolver('public class ClassName {', metadata);

    expect(metadata.class).to.equal('ClassName');
    expect(canResolve).to.equal(true);
  });
});
