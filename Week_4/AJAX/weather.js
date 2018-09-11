var URL = "http://api.openweathermap.org/data/2.5/weather?";
var API = "1267678fd0ab9313eadf346ff5843471";
document.addEventListener('DOMContentLoaded', zipGet);
document.addEventListener('DOMContentLoaded', cityGet);

function zipGet(){
	document.getElementById('zipSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var ZIP = document.getElementById('zipI').value;
		req.open("GET", URL + "zip=" + ZIP + "&appid=" + API, true);
		req.addEventListener('load', function(){
			if(req.status >= 200 && req.status < 400){
				var theWeather = JSON.parse(req.responseText);
				var city = theWeather.name;
				var temp = theWeather.main.temp - 273.15;
				var humi = theWeather.main.humidity;
				document.getElementById('theCity').textContent = city;
				document.getElementById('theTemp').textContent = temp;
				document.getElementById('theHumi').textContent = humi;
			}else{
				console.log("Error in network request: " + req.statusText);
			}
		});
		req.send(null);
		event.preventDefault();
	})
}

function cityGet(){
        document.getElementById('citySubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var CITY= document.getElementById('cityI').value;
		req.open("GET", URL + "q=" + CITY + "&appid=" + API, true);
		req.addEventListener('load', function(){
			if(req.status >= 200 && req.status < 400){
				var theWeather = JSON.parse(req.responseText);
				var city = theWeather.name;
				var temp = theWeather.main.temp - 273.15;
				var humi = theWeather.main.humidity;
				document.getElementById('theCity').textContent = city;
				document.getElementById('theTemp').textContent = temp;
				document.getElementById('theHumi').textContent = humi;
			}else{
				console.log("Error in network request: " + req.statusText);
			}
		});
		req.send(null);
		event.preventDefault();
	})
}
