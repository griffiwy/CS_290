document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('conSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var payload  = {conInput:null};
		payload.conInput= document.getElementById('conInput').value;
		document.getElementById('theInput').textContent = payload.conInput;
		req.open('POST', 'http://httpbin.org/post', true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
				document.getElementById('theOutput').textContent = response.data;
			} else {
				console.log("Error in network request: " + req.statusText);
			}
		});
		req.send(JSON.stringify(payload.conInput));
		event.preventDefault();
	});
}