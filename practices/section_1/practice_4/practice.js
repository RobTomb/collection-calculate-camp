'use strict';	
function collect_same_elements(collection_a, object_b) {
	let collection = [];
	collection_a.forEach( (item)=>{
		if( object_b.value.indexOf(item.key) !== -1)
			collection.push(item.key);
	})
	return collection;
}

module.exports = collect_same_elements;
