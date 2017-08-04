'use strict';
const alphabat = [ 'z','a','b','c','d','e',
  'f','g','h','i','j','k',
  'l','m','n','o','p','q',
  'r','s','t','u','v','w','x','y','z' ];

function getLetter(num){
	let multiples = num / 26;
	let remainder = num % 26;
	let letter = '';

	if( multiples > 1 && remainder !== 0 )
		letter += alphabat[parseInt(multiples)];

	if( multiples > 1 && remainder === 0 )
		letter += alphabat[parseInt(multiples) - 1];

	letter += alphabat[remainder];

	return letter;
}

function median_to_letter(collection) {
	let num = 0;
	let letter = '';
	if( collection.length % 2 !== 0 )
		letter = getLetter((collection.length - 1 ) / 2);
	else
		letter = getLetter( Math.ceil((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2));
	return letter;
}

module.exports = median_to_letter;
