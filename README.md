#  Interactive Weather App

A simple interactive weather application that lets a user enter a city name, fetches current weather data from a public API, and displays key details (temperature, description, humidity).  
The project focuses on practicing asynchronous JavaScript patterns with `fetch`, `Promises`, and `async/await`, along with DOM manipulation and modern ES6+ syntax.


https://github.com/user-attachments/assets/4079f10f-d6ee-4055-b0ef-0e1dfa317e54


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
