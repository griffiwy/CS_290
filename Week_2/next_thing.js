console.log(double(32)); //Works

function double(x){return 2*x;} //Function

console.log(double(12)); //Works

console.log(triple(12)); //Doesn't Work

var triple = function(x){return 3*x;} // Variable Function 

console.log(triple(7)); //Works