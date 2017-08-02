function collect_same_elements(collection_a, object_b) {
	return collection_a.filter( (item)=>{
		return object_b.value.indexOf(item) !== -1;
	})
}

module.exports = collect_same_elements;
