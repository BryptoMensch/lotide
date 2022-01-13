const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

function findKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

// console.log(Object.keys(bestTVShowsByGenre));

// scan the object and return the first key which contains the given value
// no key with that given value is found, then it should return undefined.

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
