const without = (source, itemsToRemove) => {
	let newArr = [];
	for (let index of newArr.entries()) {
		for (let value of itemsToRemove) {
			if (source[i] === value) {
				let removedItem = newArr.indexOf(value);
				newArr.splice(removedItem, 1);
			}
		}
	}

	return itemsToRemove;
	console.log(itemsToRemove);
};

// It should return a new array with only those elements from source that are not present in the itemsToRemove array.

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
