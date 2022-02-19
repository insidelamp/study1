const weather = document.querySelector(".weather_icon span");
const city = document.querySelector("#weather>span");
const API_KEY = "e494c642c20d6ea946edc3767edbd381";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);