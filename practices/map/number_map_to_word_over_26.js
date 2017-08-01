'use strict';
// MAX number 26 * 27
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

var number_map_to_word_over_26 = function(collection){
  return collection.map( (item)=>{
  	return getLetter(item);
  });
};

module.exports = number_map_to_word_over_26;

