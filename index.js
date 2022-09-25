'use strict';

function getTypeOf(input, refineObject) {
  if (arguments.length == 0) {
    return "";
  } else {
    if (!refineObject) {
      refineObject = false;
    }
    const dataType = typeof input;
    if (dataType == 'object') {
      if (input == null) {
        return null;
      } else {
        return Array.isArray(input) ? "array" : refineObject ? input.constructor.name : 'object';
      }
    } else {
      return dataType;
    }
  }
}

module.exports = getTypeOf;