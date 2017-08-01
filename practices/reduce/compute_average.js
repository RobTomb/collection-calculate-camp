'use strict';

function compute_average(collection) {
	let sum = collection.reduce( (sum , item)=>{
		return sum += item;
	})
	return sum/collection.length;
}

module.exports = compute_average;

