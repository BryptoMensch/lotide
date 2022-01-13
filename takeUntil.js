const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

const takeUntil = function (newArr, callback) {
  newArr.forEach(function (item, index) {
    if (callback(item)) {
      newArr = newArr.slice(0, index);
    }
    return;
  });
  return newArr;
};

const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
