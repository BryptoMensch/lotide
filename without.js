const without = (source, itemsToRemove) => {
	let newArr = [];
	for (let index of newArr.entries()) {
		for (let value of itemsToRemove) {
			if (source[i] === value) {
				let removedItem = newArr.indexOf(value);
				newArr.splice(removedItem, 1);
			}
		}
	}

	return itemsToRemove;
};

module.exports = without;
