let table = document.createElement("table");
let headRow = document.createElement("tr");
for(var i = 0; i < 4; i++){
	let headCell = document.createElement("th");
  headCell.textContent = "Header " + i;
  headCell.style.border = "thin solid";
  headRow.appendChild(headCell);
}
table.appendChild(headRow);
    
for(i = 1; i < 4; i++){
	let row = document.createElement("tr");
  for(var j = 1; j < 5; j++){
  	let cell = document.createElement("td");
    cell.textContent = i + " , " + j;
    cell.style.border = "thin solid";
    cell.id = "C" + i + j;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);

let lButton = document.createElement("button");
lButton.textContent = "Left";
lButton.id = "lb";
document.body.appendChild(lButton);

let uButton = document.createElement("button");
uButton.textContent = "Up";
uButton.id = "ub";
document.body.appendChild(uButton);

let dButton = document.createElement("button");
dButton.textContent = "Down";
dButton.id = "db";
document.body.appendChild(dButton);

let rButton = document.createElement("button");
rButton.textContent = "Right";
rButton.id = "rb";
document.body.appendChild(rButton);

let mcButton = document.createElement("button");
mcButton.textContent = "Mark Cell";
mcButton.id = "mc";
document.body.appendChild(mcButton);

let selected = document.getElementById("C11");
selected.style.border = "thick solid";
var x = 1;
var y = 1;

function lButtonPress(event){
	selected.style.border = "thin solid";
  if(x > 1){x -= 1;}
  selected = document.getElementById("C" + y + x);
  selected.style.border = "thick solid";
}

function uButtonPress(event){
	selected.style.border = "thin solid";
  if(y > 1){y -= 1;}
  selected = document.getElementById("C" + y + x);
  selected.style.border = "thick solid";
}

function dButtonPress(event){
	selected.style.border = "thin solid";
  if(y < 3){y += 1;}
  selected = document.getElementById("C" + y + x);
  selected.style.border = "thick solid";
}

function rButtonPress(event){
	selected.style.border = "thin solid";
  if(x < 4){x += 1;}
  selected = document.getElementById("C" + y + x);
  selected.style.border = "thick solid";
}

function mcButtonPress(event){
	selected.style.backgroundColor = "Yellow";
}

document.getElementById("lb").addEventListener("click", lButtonPress);
document.getElementById("ub").addEventListener("click", uButtonPress);
document.getElementById("db").addEventListener("click", dButtonPress);
document.getElementById("rb").addEventListener("click", rButtonPress);
document.getElementById("mc").addEventListener("click", mcButtonPress);