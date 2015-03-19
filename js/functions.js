(function(){
	var API_WEATHER_KEY = "80114c7878f599621184a687fc500a12";
	var API_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=" + API_WEATHER_KEY + "&";
	var IMG_WATHER_URL = "http://openweathermap.org/img/w/";

	var cityWeather = {};
	cityWeather.zone;
	cityWeather.icon;
	cityWeather.temp;
	cityWeather.temp_max;
	cityWeather.temp_min;
	cityWeather.main;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(getCoords, errorFound);

		function errorFound(err){
			alert('Ocurrio un error: ' + err.code);
			//0: error desconocido
			//1: permiso denegado
			//2: posicion no disponible
			//3: timeout
		}

		function getCoords(position){
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			console.log('Tu posicion es: ' + lat + ", " + lon);

			$.getJSON(API_WEATHER_URL+ "lat=" + lat + "&lon=" + lon, getCurrentWeather);

			function getCurrentWeather(data){
				cityWeather.zone = data.name;
				cityWeather.icon = IMG_WATHER_URL + data.weather[0].icon + ".png";
				cityWeather.temp = data.main.temp - 272.15;
				cityWeather.temp_max = data.main.temp_max - 272.15;
				cityWeather.temp_min = data.main.temp_min - 272.15;
				cityWeather.main = data.weather[0].main;
			}

		}
	}else{
		alert('Tu navegador no soporta geolocalizacion, actualizate!');
	}

})();

