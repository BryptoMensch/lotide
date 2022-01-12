// Function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// // eqArrays Function
// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// // assertArraysEqual Function
// const assertArraysEqual = function (array1, array2) {
//   const result = eqArrays(array1, array2);
//   if (!result) {
//     console.log(`❌ ❌ ❌: Uh Oh! These arrays are NOT equal`);
//   } else {
//     console.log(`✅ ✅ ✅ : Congratulations! These arrays ARE equal`);
//   }
// };

const letterPositions = function (sentence) {
  const results = {};
  const letters = sentence.split("");

  for (let item = 0; item < letters.length; item++) {
    const letter = letters[item];

    if (!results[letter]) {
      results[letter] = [item];
    } else {
      results[letter].push(item);
    }
  }
  return results;
};

console.log(letterPositions("hello"));
