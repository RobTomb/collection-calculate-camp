'use strict';
const alphabat = [ 'z','a','b','c','d','e',
  'f','g','h','i','j','k',
  'l','m','n','o','p','q',
  'r','s','t','u','v','w','x','y','z' ]
function getLetter(num){
	let remainder = num % 26;
	let multiples = num / 26;
	let letter = '';
	if(multiples > 1 && remainder !== 0 )
		letter += alphabat[parseInt(multiples)];
	if( multiples > 1 && remainder === 0)
		letter += alphabat[parseInt(multiples)-1];
	letter += alphabat[remainder];
	return letter;
}

function getResult(number_a,number_b){
	let result = [];
	while( number_a <= number_b){
		result.push(getLetter(number_a));
		number_a += 1;
	}
	return result;
}

function get_letter_interval_2(number_a, number_b) {
	let result = [];
	if(number_a <= number_b)
		result = getResult(number_a, number_b);
	else 
		result = getResult(number_b, number_a).reverse();
	return result;
}




module.exports = get_letter_interval_2;

	