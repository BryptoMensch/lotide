const assertObjectsEqual = function (actual, expected) {
	const inspect = require("util").inspect;
	if (actual !== expected) {
		console.log(`Assertion Failed:  ${inspect(ab)} !== ${inspect(ba)}`);
	} else {
		console.log(`Assertion Passed:  ${inspect(ab)} === ${inspect(ba)}`);
	}
};

module.exports = assertObjectsEqual;
