'use strict';
const getTypeOf = require('./index.js');

console.log(getTypeOf(NaN));

(function () {
  console.log("\nCase 1: empty\n");
  const result = {
    expected: "",
    actual: getTypeOf()
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 2: String\n");
  const input = "";
  const result = {
    input,
    expected: "string",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 3: Number\n");
  const input = 541;
  const result = {
    input,
    expected: "number",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 4: Boolean\n");
  const input = true;
  const result = {
    input,
    expected: "boolean",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 5: Undefined\n");
  const input = undefined;
  const result = {
    input,
    expected: "undefined",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 6: Array\n");
  const input = [];
  const result = {
    input,
    expected: "array",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 7: function\n");
  const input = () => { };
  const result = {
    input,
    expected: "function",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 8: Object\n");
  const input = {};
  const result = {
    input,
    expected: "object",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 9: Object: Date\n");
  const input = new Date();
  const result = {
    input,
    expected: "object",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 10: Object: Set\n");
  const input = new Set();
  const result = {
    input,
    expected: "object",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 11: Object: RegExp\n");
  const input = /[a-z]/;
  const result = {
    input,
    expected: "object",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 12: Object: Buffer\n");
  const input = Buffer.from("Hello");
  const result = {
    input,
    expected: "object",
    actual: getTypeOf(input)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 13: Object: Date | refineObject: true\n");
  const input = new Date();
  const result = {
    input,
    expected: "Date",
    actual: getTypeOf(input, true)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 14: Object: Set | refineObject: true\n");
  const input = new Set();

  const result = {
    input,
    expected: "Set",
    actual: getTypeOf(input, true)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 15: Object: RegExp | refineObject: true\n");
  const input = /[a-z]/;
  const result = {
    input,
    expected: "RegExp",
    actual: getTypeOf(input, true)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();

(function () {
  console.log("\nCase 16: Object: Buffer | refineObject: true\n");
  const input = Buffer.from("Hello");
  const result = {
    input,
    expected: "Buffer",
    actual: getTypeOf(input, true)
  }
  //console.log(result);
  console.log(result.expected == result.actual ? "passed" : "failed");
})();