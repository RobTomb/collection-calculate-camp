'use strict';

function double_to_one(collection) {
	let result = [];
	collection.forEach( (item)=>{
		if(typeof(item) === 'number'){
			if( result.indexOf(item) === -1)
				result.push(item);
		} 
		else{
			item.forEach( (num)=>{
				if(result.indexOf(num) === -1)
					result.push(num);
			})
		}
	})
	return result;

}

module.exports = double_to_one;
