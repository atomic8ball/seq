module.exports = function(start, iterations, step, filter) {
	var out = [start];
	
	if (step === undefined) step = 1;
	
	for (var i = 1; i < iterations; ++i) {
		out.push(typeof step === 'function' ? step(out, i) : out[out.length - 1] + step);
	} // for
	
	if (typeof filter === 'function') {
		var filtered = [];
		
		out.forEach(function(item) {
			if (filter(item)) filtered.push(item);
		}); // forEach
		
		out = filtered;
	} // if
	
	return out;
}; // exports
