'use strict';

function get_letter_interval(number_a, number_b) {
	let result = [];
	if(number_a < number_b)
		result = getLetterInterval(number_a,number_b);
	else
		result = getLetterInterval(number_b,number_a).reverse();
	return result;
}

module.exports = get_letter_interval;

function getLetterInterval(number_a,number_b){
	let result = [];
	while(number_a <= number_b){
		result.push(String.fromCharCode(number_a+96));
		number_a += 1;
	}
	return result;
} 