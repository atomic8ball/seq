var seq = require('./sequence');

var assert = function(actual, expected) {
	if (expected.join() !== actual.join()) throw 'expected ' + expected + ' but got ' + actual;
}; // assert

// default step is 1
assert(seq(0, 4), [0, 1, 2, 3]);

// 4 iterations, step is 2
assert(seq(0, 4, 2), [0, 2, 4, 6]);

// 7 iterations, custom step function
assert(seq('a', 7, function(list, index) {
	return String.fromCharCode(list[index - 1].charCodeAt(0) + 1);
}), 'abcdefg'.split(''));

// 4 iterations, step is 1, filtered to evens only
assert(seq(0, 4, 1, function(x) {
	return x % 2 == 0;
}), [0, 2]);

console.log('all tests passsed');
