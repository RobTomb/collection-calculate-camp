'use strict';

function getNum(letter){
	let num = 1;
	if(letter.length !== 1)
		num = parseInt(letter.match(/[0-9]+/));
	return num;
}    

function getMom(count){
	return parseInt(count / 3);
} 

function getSite(result, letter){
	return result.findIndex( (item)=>{
		return item.key === letter[0];
	})
}

function getSameElementsCount(collection){
	let result = [];
	collection.forEach( (item)=>{
		let site = getSite(result, item);
		if(site === -1)
			result.push({key:item[0], count:getNum(item)});
		else
			result[site].count += getNum(item);
	})
	return result;
}


function create_updated_collection(collection_a, object_b) {
	let collection = getSameElementsCount(collection_a);
	collection.forEach( (item)=>{
		if( object_b.value.indexOf(item.key) !== -1)
			item.count -= getMom(item.count);
	})
	return collection;
}

module.exports = create_updated_collection;
