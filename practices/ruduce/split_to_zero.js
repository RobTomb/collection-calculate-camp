'use strict';

function spilt_to_zero(number, interval) {
	let spilt_to_zero = [];
	spilt_to_zero.push(parseFloat(number.toFixed(1)));
	while( number > 0 && number !== 0){
		number -= interval;
		number = parseFloat(number.toFixed(1))
		spilt_to_zero.push(parseFloat(number.toFixed(1)));
	}
	return spilt_to_zero;
}

module.exports = spilt_to_zero;
