function collect_same_elements(collection_a, collection_b) {
	return collection_a.filter( (item)=>{
		return collection_b.indexOf(item) !== -1;
	})
}

module.exports = collect_same_elements;
