const API_URL = 'http://localhost:5001';

// get current weather data
export const getCurrentWeatherData = city => {
    return fetch(`${API_URL}/v1/current/${city}`)
        .then(res => res.json())
};

// get current weather data
export const getForecastData = city => {
    return fetch(`${API_URL}/v1/forecast/${city}`)
        .then(res => res.json())
};