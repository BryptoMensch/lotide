// Implement the function findKey which takes in an object and a callback.
// scan the object and return the first key for which the callback returns a truthy value.
// no key is found, then it should return undefined.

const findKey = (obj, fn) =>
	Object.keys(obj).find((key) => fn(obj[key], key, obj));

findKey(
	{
		"Blue Hill": { stars: 1 },
		Akaleri: { stars: 3 },
		noma: { stars: 2 },
		elBulli: { stars: 3 },
		Ora: { stars: 2 },
		Akelarre: { stars: 3 },
	},
	(x) => x.stars === 2
);

module.exports = findKey;
