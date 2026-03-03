const apiKey = "d5828de8c659466ee9b60e7a494e8080";

function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
  document.getElementById("date").innerText =
    now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

async function getWeather() {
  const city = document.getElementById("searchInput").value;

  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod !== 200) {
    alert("City not found");
    return;
  }
   // Change weather text (Clear, Rain, Clouds etc.)
 
  document.getElementById("cityName").innerText =
    `${data.name}, ${data.sys.country}`;

  document.getElementById("tempDetail").innerText =
    `${Math.round(data.main.temp)}°C (${data.weather[0].main})`;

  document.getElementById("humidity").innerText =
    `${data.main.humidity}%`;

  document.getElementById("visibility").innerText =
    `${data.visibility} m`;

  document.getElementById("wind").innerText =
    `${data.wind.speed} km/h`;

  document.getElementById("bigTemp").innerText =
    `${Math.round(data.main.temp)}°c`;

  document.getElementById("cityTop").innerText = data.name;
  document.getElementById("countryTop").innerText = data.sys.country;

  document.getElementById("leftPanel").style.background =
  `url(https://source.unsplash.com/1600x900/?${data.name},city) center/cover no-repeat`;
}

