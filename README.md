# SetJS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [![Build Status][build_badge]][build_page]

A basic implementation of the `Set` data structure in Javascript. In case you don't know what a `Set` is, I'll quote [Wikipedia][1]...

> A set is an abstract data structure that can store certain values, without any particular order, and no repeated values.

The `BasicSet` in SetJS supports values of type `Number` or `String`.

### Syntax

```javascript
new BasicSet([initialData]);
```
The `initialData` argument(s) can be a value, several values, an array of values, or a mix of values and arrays of values. If no arguments are provided an empty `BasicSet` will be returned. For example, the following would return a `BasicSet` containing the values `{1,'2',2.5,'c','d',5.0}`.

```javascript
var set = new BasicSet(1,'2',[2.5,'c'],'d',5.0); // {1,'2',2.5,'c','d',5.0}
```

### Methods

**add(args)**  
Appends all elements in `args` to the `BasicSet` object. `args` can be a value, several values, an array of values, or a mix of values and arrays of values. Returns the `BasicSet` object.

**remove(args)**  
Removes all elements in `args` from the `BasicSet` object. `args` can be a value, several values, an array of values, or a mix of values and arrays of values. Returns the `BasicSet` object.

**has(value)**  
Returns a boolean asserting whether an element is present with the given value in the `BasicSet` object or not.

**hasSome(args)**  
Returns a boolean asserting whether any of the elements in `args` are present in the `BasicSet` object. `args` can be a value, several values, an array of values, or a mix of values and arrays of values.

**hasAll(args)**  
Returns a boolean asserting whether all of the elements in `args` are present in the `BasicSet` object. `args` can be a value, several values, an array of values, or a mix of values and arrays of values.

**getAll()**  
Returns an `Array` containing every element in the `BasicSet` object.

**getIntersection(valuesArray)**  
Returns an `Array` containing every element from `valuesArray` that is present in the `BasicSet` object. `valuesArray` must be an array of values.

**size()**  
Returns the number of elements in the `BasicSet` object.

**isEmpty()**  
Returns a boolean asserting whether the `BasicSet` object contains no elements.

**clear()**  
Removes all elements from the `BasicSet` object. Returns the `BasicSet` object.

**toString()**  
Returns a String representation of the elements in the `BasicSet` object.



[build_badge]: https://git.codingallnight.com/chris/set-js/badges/master/build.svg "Build Status"
[build_page]: https://git.codingallnight.com/chris/set-js/builds?scope=all "SetJS Builds"
[1]: http://en.wikipedia.org/wiki/Set_(computer_science) "Set (abstract data type)"
