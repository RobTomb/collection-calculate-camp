'use strict';

function create_updated_collection(collection_a, object_b) {
	collection_a.forEach( (item)=>{
		if(object_b.value.indexOf(item.key) !== -1)
			item.count -= 1;
	})
	return collection_a;
}

module.exports = create_updated_collection;
