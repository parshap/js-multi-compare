"use strict";

module.exports = createMultiCompare;

function createMultiCompare(fns) {
  return function(a, b) {
    for (var i = 0; i < fns.length; i++) {
      var ret = fns[i].call(this, a, b);
      if (ret !== 0) {
        return ret;
      }
    }
    return 0;
  };
}
