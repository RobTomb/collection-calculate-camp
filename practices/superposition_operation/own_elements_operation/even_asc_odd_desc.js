'use strict';

var even_asc_odd_desc = function(collection){
	let even = [];
	let odd = [];
	collection.forEach( (item)=>{
		if( item % 2 === 0 )
			even.push(item);
		else
			odd.push(item);
	})

	even = even.sort( (x , y)=>{
		return x - y;
	});
	odd = odd.sort( (x , y)=>{
		return y - x;
	})
	return even.concat(odd);
};
module.exports = even_asc_odd_desc;
