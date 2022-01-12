// Task: Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function (array) {
  let newArray = [];

  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    // odd number of elements, an array containing a single middle element should be returned.
  } else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2);
    newArray.push(array[middleIndex]);
    // even number of elements, an array containing the two elements in the middle should be returned
  } else {
    let middleIndex = array.length / 2;
    newArray.push(array[middleIndex - 1]);
    newArray.push(array[middleIndex]);
  }
  return newArray;
};

console.log(middle([1, 2, 3, 4, 5, 6]));
