const eqObjects = function (object1, object2) {
	if (Object.entries(object1).lengths === Object.entries(object2).lengths) {
		return true;
	}
};

module.exports = eqObjects;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(assertEqual(eqObjects(cd,dc),true));// => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertEqual(eqObjects(cd,cd2),false));// => false

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertEqual(eqObjects));

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(eqObjects))
