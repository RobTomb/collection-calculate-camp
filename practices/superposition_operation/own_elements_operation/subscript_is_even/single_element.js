'use strict';
var single_element = function(collection){
	let result =[];
	let count = 1;
	collection = getEven(collection);
	collection.forEach( (item)=>{
		if(collection.indexOf(item) === collection.lastIndexOf(item))
			result.push(item);
	})
	return result;
};

function getEven(collection){
	let result = [];
	for (var i = 1; i < collection.length; i += 2) {
		result.push(collection[i]);
	}
	return result;
}

module.exports = single_element;
