const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
describe("#eqArrays", () => {
	it("returns 1 for [1, 2, 3]", () => {
		assert.strictEqual(eqArrays([1, 2, 3]), 1);
	});
	it("returns '5' for ['5']", () => {
		assert.strictEqual(eqArrays(["5"]), "5");
	});
});
