'use strict';

function spilt_to_zero(number, interval) {
	let spilt_to_zero = [];
	spilt_to_zero.push(number);
	while( number >= 0){
		number -= interval;
		spilt_to_zero.push(number);
	}
	return spilt_to_zero;
}

module.exports = spilt_to_zero;
