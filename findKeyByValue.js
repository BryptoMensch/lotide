const findKeyByValue = function (obj, objVal) {
	for (let key in obj) {
		if (objVal === obj[key]) {
			return true;
		}
	}
	return undefined;
};

module.exports = findKeyByValue;
