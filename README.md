seq
===

simple and primitive array / list generation - a poor man's list comprehension

Basic Usage
-----------
```js
var seq = require('sequence');

// 4 iterations, default step is 1
seq(0, 4);
```
[0, 1, 2, 3]

```js
// 4 iterations, step is 2
seq(0, 4, 2);
```
[0, 2, 4, 6]

```js
// 7 iterations, custom step function
seq('a', 7, function(list, index) {
	return String.fromCharCode(list[index - 1].charCodeAt(0) + 1);
}); // seq / step
```
['a', 'b', 'c', 'd', 'e', 'f', 'g']

```js
// 4 iterations, step is 1, filtered to evens only with filter function
// (return true if it gets to stay)
seq(0, 4, 1, function(x) {
	return x % 2 == 0;
}); // seq / filter
```
[0, 2]
