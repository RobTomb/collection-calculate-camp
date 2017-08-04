'use strict';
var calculate_median = function(collection){
	let median = 0;
	if( collection.length % 2 === 0 )
		median = collection[collection.length / 2 ];
	else 
		median = collection[( collection.length - 1 ) / 2 ]
	return median;
};
module.exports = calculate_median;
