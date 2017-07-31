'use strict';

function grouping_count(collection) {
	let result = {};
	collection.forEach( (item)=>{
		if( item.toString() in result )
			result[item.toString()] += 1;
		else
			result[item.toString()] = 1;
	})
	return result;
}

module.exports = grouping_count;
