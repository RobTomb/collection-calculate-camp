'use strict';

function get_integer_interval_2(number_a, number_b) {
	let result = [];
	if(number_a < number_b)
		result = getInterval(number_a,number_b)
	else
		result = getInterval(number_b,number_a).reverse();
	return result;
}

module.exports = get_integer_interval_2;

function getInterval(number_a,number_b){
	let result = [];
	while(number_a <= number_b){
		if(number_a % 2 === 0)
			result.push(number_a)
		number_a += 1;
	}
	return result;
}

