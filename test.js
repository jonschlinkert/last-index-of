/*!
 * last-index-of <https://github.com/jonschlinkert/last-index-of>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var lastIndexOf = require('./');

describe('lastIndexOf', function () {
  it('should get the last index of the given element:', function () {
    lastIndexOf(['a', 'b', 'c', 'a', 'b', 'c'], 'a').should.equal(3);
    lastIndexOf(['a', 'b', 'c', 'a', 'b', 'c'], 'b').should.equal(4);
    lastIndexOf(['a', 'b', 'c', 'a', 'b', 'c'], 'c').should.equal(5);
  });

  it('should return -1 if the element does not exist:', function () {
    lastIndexOf(['a', 'b', 'c'], 'd').should.equal(-1);
  });

  it('should get the last index, starting from the given index:', function () {
    lastIndexOf(['a', 'b', 'a', 'b', 'a', 'b'], 'b', -1).should.equal(5);
    lastIndexOf(['a', 'b', 'a', 'b', 'a', 'b'], 'b', -3).should.equal(3);
    lastIndexOf(['a', 'b', 'a', 'b', 'a', 'b'], 'b', -2).should.equal(3);
    lastIndexOf(['a', 'b', 'a', 'b', 'a', 'b'], 'b', 0).should.equal(-1);
    lastIndexOf(['a', 'b', 'a', 'b', 'a', 'b'], 'b', 2).should.equal(1);
    lastIndexOf(['a', 'b', 'a', 'b', 'a', 'b'], 'b', 3).should.equal(3);
    lastIndexOf(['a', 'b', 'a', 'b', 'a', 'b'], 'b', 7).should.equal(5);
  });
});
