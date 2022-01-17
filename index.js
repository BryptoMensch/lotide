const head = require("./head");
const tails = require("./tails");
const middle = require("./middle");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require(".assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require(".countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const countOnly = require(".countOnly");
const findKey = require(".findKey");
const findKeyByValue = require(".findKeyByValue");
const letterPositions = require("./letterPositions");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
	head: head,
	tails: tails,
	middle: middle,
	assertArraysEqual: assertArraysEqual,
	assertEqual: assertEqual,
	assertObjectsEqual: assertObjectsEqual,
	countLetters: countLetters,
	countOnly: countOnly,
	eqArrays: eqArrays,
	eqObjects: eqObjects,
	findKey: findKey,
	findKeyByValue: findKeyByValue,
	letterPositions: letterPositions,
	map: map,
	takeUntil: takeUntil,
	without: without,
};
