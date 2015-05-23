'use strict';

var should = require('should');
var swear = require('./index');

describe('swear word generator', function () {
  it('should return a random swear word', function () {
    swear.should.exist;
  });
});