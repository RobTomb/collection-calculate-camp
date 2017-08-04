'use strict';

function hybrid_operation_to_uneven(collection) {
	let result =[];
	collection.forEach( (item)=>{
		if( item % 2 !== 0 )
			result.push( item * 3 + 2 )
	})
	return result;
}

module.exports = hybrid_operation_to_uneven;

