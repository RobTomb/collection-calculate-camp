'use strict';

function collect_min_number(collection) {
	return collection.reduce( (min,item)=>{
		if( min > item )
			min = item;
		return min;
	})
}

module.exports = collect_min_number;

