'use strict';

function collect_max_number(collection) {
	return collection.reduce( (max,item)=>{
		if( max < item )
			max = item;
		return max;
	})
}

module.exports = collect_max_number;
