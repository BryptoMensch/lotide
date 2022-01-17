const eqObjects = function (object1, object2) {
	if (Object.entries(object1).lengths === Object.entries(object2).lengths) {
		return true;
	}
};

const assertObjectsEqual = function (actual, expected) {
	const inspect = require("util").inspect;
	if (actual !== expected) {
		console.log(`Assertion Failed:  ${inspect(ab)} !== ${inspect(ba)}`);
	} else {
		console.log(`Assertion Passed:  ${inspect(ab)} === ${inspect(ba)}`);
	}
};

const ab = { a: "8", b: "2" };
const ba = { b: "6", a: "1" };
