'use strict';
function rank_by_two_large_one_small(collection){
	collection = collection.sort( (x , y)=>{
		return x - y;
	})
	for (var i = 0; i < collection.length - 3; i += 3) {
		let key = collection[i];
		collection[i] = collection[i + 1];
		collection[i + 1] = collection[i + 2];
		collection[i + 2] = key;
	}
	return collection;
}
module.exports = rank_by_two_large_one_small;
