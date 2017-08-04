'use strict';
var calculate_average = function(collection){
	let sum = 0;
	let count = 0;
	collection.forEach( (item)=>{
		if( item % 2 === 0 ){
			count += 1;
			sum += item;
		}
	})
	return sum / count;
};
module.exports = calculate_average;
