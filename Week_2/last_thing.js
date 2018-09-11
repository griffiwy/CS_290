function deepEqual(thing1, thing2){
//Initialize Variables
	var isEqual, count1, count2, key;
	count1 = 0;
	count2 = 0;
	isEqual = true;

//Check if both things are objects
	if(typeof(thing1) == "object" && thing1 != null){
		if(typeof(thing2) == "object" && thing2 !=null){

//Check if each object has the same number of properties
			for(key in thing1){
				count1++;
			}
			for(key in thing2){
				count2++;
			}

//If they do, check that all the properties are the same
			if(count1 == count2){
				for(key in thing1,thing2){
					if(thing1[key] != thing2[key]){

//If they aren't the same, set isEqual false
						isEqual = false;
					}
				}

//If they dont have the same number, set isEqual to false
			}else{isEqual = false}
			return isEqual;

//If they are not both objects, compare using ==
		}else{return (thing1 == thing2);}
	}else{return (thing1 == thing2);}
}

