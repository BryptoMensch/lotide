const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`☑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function head which returns the first item in the array.

const head = function (head) {
  let first = head[0];
  return first;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
