'use strict';

function double_to_one(collection) {

	let result = [];
	collection.forEach( (item)=>{
		result = result.concat(item)	
	})
	
	return result;
}

module.exports = double_to_one;
