const assertEqual = require("./assertEqual");

const tails = function (arr) {
	if (arr.length < 2) {
		return arr;
	} else {
		return arr.slice(1);
	}
};

module.exports = tails;
