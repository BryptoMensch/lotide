const assert = require("chai").assert;
const tails = require("../tails");
describe("#tails", () => {
	it("returns [3,5] for [1,3,5]", () => {
		assert.deepEqual(tails([1, 3, 5]));
	});
});
