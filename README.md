# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @bryptomensch/lotide`

**Require it:**

`const _ = require('@bryptomensch/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: Tests whether two different arrays are equal to one another
- `assertEqual(actual, expected)`: Compares two values with one another and returns true or false
- `assertObjectsEqual(obj1, obj2)`: Compares two objects with one another
- `countLetters(word)`: Takes in a word, returns an object that allocates number of particular letter into a key: value pair
- `countOnly(allItems, itemsToCount)`: Takes in a collection of items and return counts for a specific subset of those items
- `eqArrays(arr1, arr2)`: Compares two arrays for a perfect match
- `eqObjects(obj1, obj2)`: Compares two objects for a perfect match
- `findKey(obj, fn)`: Takes in an object and a callback, returns the first key for which the callback returns a truthy value.
- `findKeyByValue(obj,objVal): Takes in an object and a value, scans the object, return the first key which contains the given value
- `head(first)`: Takes first element from an array
- `letterPosition(sentence)`: Takes in one argument, return indices (zero-based positions) in the string where each character is found
- `map(array,callback)`: The map function will return a new array based on the results of the callback function
- `middle(midArray)`: Takes in a single argument, returns the middle element of an array.
- `tails(arr)`: Takes every element but the first, slices into new array.
- `takeUntil(array, callback)`: Takes in two arguments, returns slice of the array with elements taken from the beginning. Stops when callback returns a truthy value
- `without(source, itemsToRemove)`: Compares two arrays, takes out elements present in itemsToRemove array.
