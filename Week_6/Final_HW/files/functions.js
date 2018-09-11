document.addEventListener('DOMContentLoaded', addRow);

function addRow(){
        document.getElementById('addSubmit').addEventListener('click', function(event){
                var req = new XMLHttpRequest();
                var payload  = {name:null, reps:null, weight:null, date:null, lbs:null};
                payload.name= document.getElementById('name').value;
                payload.reps= document.getElementById('reps').value;
		payload.weight= document.getElementById('weight').value;
		payload.date= document.getElementById('date').value;
		payload.lbs= document.getElementById('lbs').value;
		document.getElementById('theInput').textContent = payload.name_input;	
                req.open('POST', '/add', true);
                req.setRequestHeader('Content-Type', 'application/json');
                req.addEventListener('load',function(){
                        if(req.status >= 200 && req.status < 400){
                                var response = JSON.parse(req.responseText);
				document.getElementById('theOutput').textContent = response.data;
                        } else {
                                console.log("Error in network request: " + req.statusText);
                        }
                });
                req.send(JSON.stringify(payload));
                event.preventDefault();
        });
}
