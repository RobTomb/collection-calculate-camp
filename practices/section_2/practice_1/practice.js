'use strict';
function getSite(result,item){
	return result.findIndex( (obj)=>{
		return obj.key === item;
	})
}
function count_same_elements(collection) {
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

module.exports = count_same_elements;
