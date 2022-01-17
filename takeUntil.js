const takeUntil = (array, callback) => {
	array.forEach((item, index) => {
		if (callback(item)) {
			array = array.slice(0, index);
		}
		return {};
	});
	return array;
};

module.exports = takeUntil;
