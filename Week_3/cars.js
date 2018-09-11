
/* Automobile Class */
function Automobile( year, make, model, type ){
	this.year = year; //integer (ex. 2001, 1995)
	this.make = make; //string (ex. Honda, Ford)
	this.model = model; //string (ex. Accord, Focus)	
	this.type = type; //string (ex. Pickup, SUV)
}

/* Prototype Function for logging/outputting Automobile info */
Automobile.prototype.logMe = function(disp){
	if(disp){
		console.log(this.year + ' ' + this.make + ' ' + this.model + ' ' + this.type);
	}

	else{
		console.log(this.year + ' ' + this.make + ' ' + this.model);
	}
}

/* Creating an array of Automobiles */
var automobiles = [ 
	new Automobile(1995, "Honda", "Accord", "Sedan"),
	new Automobile(1990, "Ford", "F-150", "Pickup"),
	new Automobile(2000, "GMC", "Tahoe", "SUV"),
	new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
	new Automobile(2005, "Lotus", "Elise", "Roadster"),
	new Automobile(2008, "Subaru", "Outback", "Wagon")
];

/* Funciton for sorting arrays of Automobiles */
function sortArr( comparator, array ){
//Initialize variables + set up array to hold sorted values
	var temp = array[0];
	var newArray = [];
	for(count = 0; count < array.length; count++){
		newArray[count] = array[count];
	}
	
//Loop through the array, sorting with bubblesort
	for(out = 0; out < newArray.length - 1; out++){
		for(it = 0; it < newArray.length - out - 1 ; it++){

//If a swap need to be made
			if(comparator(newArray[it+1], newArray[it])){
				temp = newArray[it];
				newArray[it] = newArray[it+1];
				newArray[it+1] = temp;
			}
		}
	}

	return newArray;
}

/* Comparator that compares Automobile years */
function yearComparator( auto1, auto2 ){
//Compare the years, return true if 1 is larger
	if(auto1.year > auto2.year)
		return true;
	else
		return false;
}

/* Comparator that compares Automobile makes*/
function makeComparator( auto1, auto2 ){
//Make lowercase version to compare
	var low1 = auto1.make.toLowerCase();
	var low2 = auto2.make.toLowerCase();

//Compare the lowercase makes, return true if 1 is larger
	if(low1 > low2)
		return true;
	else
		return false;
}

/* Comparator that compares Automobile types*/
function typeComparator( auto1, auto2 ){
//If they are the same type, sort by year
	if(auto1.type == auto2.type)
		return yearComparator(auto1, auto2);

//Otherwise, assign a value to each type, sort that way
	else{
		var val1 = auto1.type.toLowerCase();
		var val2 = auto2.type.toLowerCase();

//Assigning value to auto1
		if(val1 == 'roadster'  )
			val1 = 4

		else if(val1 == 'pickup'  )
			val1 = 3

		else if(val1 == 'suv'  )
			val1 = 2

		else if(val1 == 'wagon'  )
			val1 = 1

		else
			val1 = 0
			
//Assigning value to auto2
		if(val2 == 'roadster'  )
			val2 = 4

		else if(val2 == 'pickup'  )
			val2 = 3

		else if(val2 == 'suv'  )
			val2 = 2

		else if(val2 == 'wagon'  )
			val2 = 1

		else
			val2 = 0
			
//Compare the assigned values, return true if 1 is larger
		if(val1 > val2)
			return true;
		else
			return false;
	}
}

//Go through and sort automobiles with each comparator
sortYear = sortArr(yearComparator, automobiles);
sortMake = sortArr(makeComparator, automobiles);
sortType = sortArr(typeComparator, automobiles);


//Console log/output
console.log('*****');

console.log('The original order was:');
for(i = 0; i < 6; i++){
	automobiles[i].logMe(1);
}

console.log('\n' + 'The cars sorted by year are:');
for(i = 0; i < 6; i++){
	sortYear[i].logMe(0);
}

console.log('\n' + 'The cars sorted by make are:');
for(j = 0; j < 6; j++){
	sortMake[j].logMe(0);
}

console.log('\n' + 'The cars sorted by type are:');
for(k = 0; k < 6; k++){
	sortType[k].logMe(1);
}

console.log('\n' + '*****' + '\n');

