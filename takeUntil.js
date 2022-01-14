const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

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

const takeUntil = (array, callback) => {
  array.forEach((item, index) => {
    if (callback(item)) {
      array = array.slice(0, index);
    }
    return {};
  });
  return array;
};

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
