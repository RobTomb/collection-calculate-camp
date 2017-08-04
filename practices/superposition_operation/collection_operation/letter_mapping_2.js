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

function average_to_letter(collection) {
	let total = collection.reduce( (sum , itme)=>{
		return sum + itme;
	},0)

	return getLetter(Math.ceil(total/collection.length))

}

module.exports = average_to_letter;

