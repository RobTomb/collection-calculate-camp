'use strict';

function choose_divisible_integer(collection_a, collection_b) {

	let result = [];
	collection_a.forEach( (item)=>{
		for(let i = 0 ; i < collection_b.length ; i++){
			if( item % collection_b[i] === 0 ){
				result.push(item);
				break;
			}
		}
	})
	return result;
}

module.exports = choose_divisible_integer;
