'use strict';
var rank_asc = function(collection){

  return collection.sort( (it,me)=>{
  	return me - it;
  });
};

module.exports = rank_asc;
