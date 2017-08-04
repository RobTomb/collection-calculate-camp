'use strict';

function hybrid_operation_to_uneven(collection) {
	let result = 0;
	collection.forEach( (item)=>{
		if( item % 2 !== 0 )
			result += item * 3 + 5;
	})
	return result;
}

module.exports = hybrid_operation_to_uneven;

