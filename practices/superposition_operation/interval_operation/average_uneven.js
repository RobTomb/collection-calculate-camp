'use strict';

function average_uneven(collection) {
	let sum = 0 ;
	let count = 0;
	collection.forEach( (item)=>{
		if( item % 2 !== 0 ){
			count += 1;
			sum += item;
		}
	})
	return (sum / count );

}

module.exports = average_uneven;
