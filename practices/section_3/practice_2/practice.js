'use strict';
function getMom(count){
	return parseInt(count / 3);
}
function create_updated_collection(collection_a, object_b) {
	collection_a.forEach( (item)=>{
		if(object_b.value.indexOf(item.key) !== -1)
			item.count -= getMom(item.count);
	})
	return collection_a;
}

module.exports = create_updated_collection;
