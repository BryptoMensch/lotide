const middle = function (midArray) {
	let newArray = [];
	if (midArray.length <= 2 && midArray.length > 0) {
	} else if (midArray.length % 2 !== 0) {
		let middleIndex = Math.floor(midArray.length / 2);
		newArray.push(midArray[middleIndex]);
	} else {
		let middleIndex = midArray.length / 2;
		newArray.push(midArray[middleIndex - 1]);
		newArray.push(midArray[middleIndex]);
	}
	return newArray;
};

module.exports = middle;
