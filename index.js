/*!
 * last-index-of <https://github.com/jonschlinkert/last-index-of>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function lastIndexOf(arr, ele, start) {
  var i = -1;

  if (arr == null) {
    return i;
  }

  var len = arr.length;
  i = (start == null || len < start)
    ? len - 1
    : start;

  i = (i < 0)
    ? len + i
    : i;

  while (i) {
    if (arr[i] === ele) {
      return i;
    }
    i--;
  }
  return -1;
};
