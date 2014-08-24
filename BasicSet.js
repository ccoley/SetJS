/**
 * Basic implementation of a Set in JavaScript.
 * Supports elements of type Number or String.
 */

// polyfill for Array.isArray
if(!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

// Usage:
// new BasicSet()
// new BasicSet(1)
// new BasicSet(1, 2, 3, ...)
// new BasicSet([1, 2, 3, ...])
// new BasicSet(1, [2, 3, 4], ...)
function BasicSet() {
    this._data = {};
    this.add.apply(this, arguments);
}

// Usage:
// add(key)
// add(key1, key2, key3, ...)
// add([key1, key2, key3, ...])
// add(key1, [key2, key3, key4], ...)
BasicSet.prototype.add = function() {
    var key;
    for (var i = 0; i < arguments.length; i++) {
        key = arguments[i];
        if (Array.isArray(key)) {
            for (var j = 0; j < key.length; j++) {
                this._data[key[j]] = key[j];
            }
        } else {
            this._data[key] = key;
        }
    }
    return this;
}

// Usage:
// remove(key)
// remove(key1, key2, key3, ...)
// remove([key1, key2, key3, ...])
// remove(key1, [key2, key3, key4], ...)
BasicSet.prototype.remove = function() {
    var item;
    for (var i = 0; i < arguments.length; i++) {
        item = arguments[i];
        if (Array.isArray(item)) {
            for (var j = 0; j < item.length; j++) {
                delete this._data[item[j]];
            }
        } else {
            delete this._data[item];
        }
    }
    return this;
}

BasicSet.prototype.has = function(key) {
//    return Object.prototype.hasOwnProperty.call(this._data, key);
    return this._data[key] !== undefined;
}

BasicSet.prototype.hasSome = function() {
    var key;
    for (var i = 0; i < arguments.length; i++) {
        key = arguments[i];
        if (Array.isArray(key)) {
            for (var j = 0; j < key.length; j++) {
                //if (Object.prototype.hasOwnProperty.call(this._data, key[j])) {
                if (this._data[key[j]] !== undefined) {
                    return true;
                }
            }
        } else {
            //if (Object.prototype.hasOwnProperty.call(this._data, key)) {
            if (this._data[key] !== undefined) {
                return true;
            }
        }
    }
    return false;
}

BasicSet.prototype.hasAll = function() {
    var key;
    for (var i = 0; i < arguments.length; i++) {
        key = arguments[i];
        if (Array.isArray(key)) {
            for (var j = 0; j < key.length; j++) {
                //if (!Object.prototype.hasOwnProperty.call(this._data, key[j])) {
                if (this._data[key[j]] === undefined) {
                    return false;
                }
            }
        } else {
            //if (!Object.prototype.hasOwnProperty.call(this._data, key)) {
            if (this._data[key] === undefined) {
                return false;
            }
        }
    }
    return true;
}

BasicSet.prototype.getAll = function() {
    var results = [];
    for (var key in this._data) {
        results.push(this._data[key]);
    }
    return results;
}

BasicSet.prototype.size = function() {
    var count = 0;
    for (var key in this._data) {
        count++;
    }
    return count;
}

BasicSet.prototype.isEmpty = function() {
    for (var key in this._data) {
        return false;
    }
    return true;
}

BasicSet.prototype.clear = function() {
    this._data = {};
    return this;
}

BasicSet.prototype.toString = function() {
    var results = [];
    for (var key in this._data) {
        results.push(this._data[key]);
    }
    return results.join(',');
}