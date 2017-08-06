'use strict';
var even_group_calculate_average = function(collection){
	collection = even(collection);
	let resultCollection = [[], [], []];
	if( collection[0] === 0 )
		return collection;
	collection.forEach( (item)=>{
		let len = item.toString().length - 1;
		resultCollection[len].push(item);
	})
	let result = [];
	resultCollection.forEach( (item)=>{
		if( item.length !== 0 )
		result.push(item.reduce( (sum , itme)=>{
			return sum + itme;
		}, 0) / item.length);
	})
	return result;
};
function even(collection){
	let result = [];
	for (var i = 1; i < collection.length; i += 2) {
		if( collection[i] % 2 === 0 ){
			result.push(collection[i]);
		}
	}
	if( result.length === 0 )
		result = [0];
	return result;
}
module.exports = even_group_calculate_average;

