
function buildList(list){
	var result = [];
 	for( var i = 0; i < list.length; i++){
		result[i] = function(x){
			return function(){
				console.log('item' + list[x] + ' ' + list[x]);
			};
    		}(i);
	}
	return result;
}

 
function testList() {
	var fnlist = buildList([1,2,3]);
	for (var j = 0; j < fnlist.length; j++) {
		fnlist[j]();
	}
}

testList();