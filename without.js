// eqArrays function
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

// assertArraysEquals function
const assertArraysEqual = function (array1, array2) {
  const result = eqArrays(array1, array2);
  if (!result) {
    console.log(`❌ ❌ ❌: Uh Oh! These arrays are NOT equal`);
  } else {
    console.log(`✅ ✅ ✅ : Congratulations! These arrays ARE equal`);
  }
};

// Challenge: Implement without which will return a subset of a given array, removing unwanted elements.

const without = function (source, itemsToRemove) {
  let newArray = [...source];
  for (let i = 0; i <= newArray.length; i++) {
    for (let values of itemsToRemove) {
      if (source[i] === values) {
        let removedItem = newArray.indexOf(values);
        newArray.splice(removedItem, 1);
      }
    }
  }
  return newArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
