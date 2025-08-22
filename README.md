#  Interactive Weather App

A simple interactive weather application that lets a user enter a city name, fetches current weather data from a public API, and displays key details (temperature, description, humidity).  
The project focuses on practicing asynchronous JavaScript patterns with `fetch`, `Promises`, and `async/await`, along with DOM manipulation and modern ES6+ syntax.

## Technologies Covered
- Asynchronous Programming (`fetch`, `async/await`)
- Promises
- JSON parsing
- DOM manipulation
- ES6 features (`let`, `const`, arrow functions, template literals)

## Features
- Input field for a city name
- Fetches live weather data from a public API (e.g., OpenWeatherMap)
- Displays:
  - Temperature
  - Weather description (e.g., Clear, Clouds, Rain)
  - Humidity
- Basic error handling (e.g., invalid city or network issues)

## Getting Started

### 1. Obtain an API Key
Sign up at [OpenWeatherMap](https://openweathermap.org/api) (or another weather provider) and get a free API key.

### 2. Project Structure (example)
```
/ (project root)
  index.html
  script.js
  styles.css
  README.md
```

### 3. Example `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Interactive Weather App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Weather App</h1>
  <form id="weather-form">
    <input id="city-input" type="text" placeholder="Enter city" required />
    <button type="submit">Get Weather</button>
  </form>
  <div id="result"></div>
  <script src="script.js"></script>
</body>
</html>
```

### 4. Example `script.js`
```javascript
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const resultDiv = document.getElementById('result');

const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  resultDiv.textContent = 'Loading...';

  try {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('City not found.');
    }

    const data = await response.json();

    const { main, weather, name } = data;
    const temperature = main.temp.toFixed(1);
    const description = weather[0].description;
    const humidity = main.humidity;

    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${temperature} °C</p>
      <p><strong>Condition:</strong> ${description}</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
    `;
  } catch (err) {
    resultDiv.textContent = `Error: ${err.message}`;
  }
});
```

### 5. Example `styles.css`
```css
body {
  font-family: system-ui, Arial, sans-serif;
  max-width: 500px;
  margin: 2rem auto;
  padding: 0 1rem;
  line-height: 1.5;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
}

#result {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 6px;
  min-height: 50px;
}
```

## How It Works
1. User submits a city name via the form.
2. The app builds a request URL including the city and API key.
3. Uses `fetch` with `await` to retrieve JSON weather data.
4. Parses the response and updates the DOM dynamically.

## Error Handling
- Invalid city names
- Network failures
- Missing or incorrect API key

## Possible Enhancements
- Show wind speed, feels-like temperature, sunrise/sunset
- Add geolocation (current location weather)
- Display weather icons
- Support multiple units (Celsius/Fahrenheit toggle)
- Cache recent searches
- Add loading spinner and better UI

## Requirements Recap
1. Use a weather API (OpenWeatherMap, WeatherStack, etc.).
2. User can enter a city name.
3. Display temperature, weather description, and humidity.
4. Use `async/await` for asynchronous operations.
