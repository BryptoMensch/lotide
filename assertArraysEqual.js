// assertEqual function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`☑️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays Function
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual Function
const assertArraysEqual = function (array1, array2) {
  const result = eqArrays(array1, array2);
  if (!result) {
    console.log(`❌ ❌ ❌: Uh Oh! These arrays are NOT equal`);
  } else {
    console.log(`✅ ✅ ✅ : Congratulations! These arrays ARE equal`);
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 6], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
