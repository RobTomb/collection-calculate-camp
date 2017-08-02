'use strict';

function getSite(collection_c, item){
	return collection_c.findIndex( (obj)=>{
		return obj.key === item;
	})
}

function getMom(count){
	return parseInt(count / 3);
}

function getSameElementsCount(collection){
	let result = [];
	collection.forEach( (item)=>{
		let site = getSite(result, item);
		if(site === -1)
			result.push({key:item, count:1});
		else
			result[site].count += 1;
	})
	return result;
}

function create_updated_collection(collection_a, object_b) {
	let collection_c = getSameElementsCount(collection_a);
	collection_c.forEach( (item)=>{
		if(object_b.value.indexOf(item.key) !== -1)
			item.count -= getMom(item.count);
	})
	return collection_c;
}

module.exports = create_updated_collection;
