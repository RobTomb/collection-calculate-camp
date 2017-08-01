'use strict';

function compare_collections(collection_a, collection_b) {
	let flag = true;
	for (var i = collection_a.length - 1; i >= 0; i--) {
		if( collection_a[i] !== collection_b[i] ){
			flag = false;
			break;
		}
	}
	return flag;
}

module.exports = compare_collections;


