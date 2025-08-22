const API_KEY = "d3c42a5951ea97c10dadbbeb361c4aeb";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const els = {
  form: document.getElementById("weather-form"),
  cityInput: document.getElementById("city-input"),
  weatherResult: document.getElementById("weather-result"),
  errorMessage: document.getElementById("error-message"),
  cityName: document.querySelector(".city-name"),
  temperature: document.querySelector(".temperature"),
  condition: document.querySelector(".condition"),
  humidity: document.getElementById("hum"),
  wind: document.getElementById("wind"),
  visibility: document.getElementById("visi")
};

els.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = els.cityInput.value.trim();
  if (city) fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    displayWeather(data);
    hide(els.errorMessage);
  } catch {
    displayError();
  }
}

function displayWeather(data) {
  const { name, main, weather, wind, visibility } = data;
  const weatherItem = weather[0];

  show(els.weatherResult);

  els.cityName.textContent = `Weather in ${name}`;
  els.temperature.children[0].textContent = Math.round(main.temp);
  els.condition.children[1].textContent = weatherItem.description;
  els.humidity.textContent = `Humidity: ${main.humidity}%`;
  els.wind.textContent = `Wind Speed: ${wind.speed} m/s`;
  els.visibility.textContent = `Visibility: ${visibility} meters`;

  const iconUrl = `https://openweathermap.org/img/wn/${weatherItem.icon}.png`;
  els.condition.children[0].setAttribute("src", iconUrl);
}

function displayError() {
  show(els.errorMessage);
  hide(els.weatherResult);
}

function show(el) {
  el.style.display = "block";
}
function hide(el) {
  el.style.display = "none";
}
