const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`☑️ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
	}
};

//COUNT ONLY FUNCTION

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// The function should report back how many instances of each string were found in the allItems array of strings.
// Test
const countOnly = function (allItems, itemsToCount) {
	const results = {};
	for (const item of allItems) {
		if (itemsToCount[item]) {
			if (results[item]) {
				results[item] += 1;
			} else {
				results[item] = 1;
			}
		}
	}
	return results;
};

module.exports = countOnly;

// Input - 1 ARRAY, 1 OBJECT

// Only truthy value counted in output object.
// If a string MEANT TO BE COUNTED but DOES NOT EXIST IN ARRAY, it also does not have to be included in the final count.

// Output - OBJECT with INPUT OBJECT LISTED

// Return counts for a specific subset of those items
// It won't count everything.
// Given an idea of which items we care about.
// Ignore the rest
// Items in our case will be limited to Strings.
