const assert = require("chai").assert;
const tails = require("../tails");
describe("#tails", () => {
	it("returns [2, 3] for [1,2,3]", () => {
		assert.strictEqual(tails([1, 2, 3]));
	});
	// it("returns ["6","7"] for ["5","6","7"], () => {
	// 	assert.strictEqual(tails(["5","6","7"]));
	// });
});
