'use strict';

function compute_chain_median(collection) {
	let median = 0;
	let collectionNum = collection.split('->').map( (itme)=>{
		return parseInt(itme);
	})
	collectionNum = collectionNum.sort( (it , me)=>{ return it - me});
	if( collectionNum.length % 2 === 0){
		median = ( collectionNum[collectionNum.length/2-1] + collectionNum[collectionNum.length/2] ) / 2
	}
	else
		median = collectionNum[parseInt(collectionNum.length / 2 - 1)]
	return median;
}

module.exports = compute_chain_median;
