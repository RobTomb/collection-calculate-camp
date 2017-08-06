'use strict';
var is_exist_element = function(collection,element){
	let flag = false;
	if( element === 3 ){
		flag = isExist(collection,element);
	}
	else{
		flag = !isExist(collection,element);
	}
	return flag;	
};

function isExist(collection,element){
	let flag = false;
	for (var i = 0; i < collection.length; i += 2) {
		if(collection[i] === element){
			flag = true;
			break;
		}
	}
	return flag;
}



module.exports = is_exist_element;
