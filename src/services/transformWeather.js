import getWeatherIcon from './../services/weatherIcons';


const transformWeather = weather_data => {
    let data = {};
    data.cloudiness = weather_data.clouds.all;
    data.windSpeed = weather_data.wind.speed;
    data.humidity = weather_data.main.humidity;
    data.temperatureValue = Math.round(weather_data.main.temp);
    data.temperatureHigh = Math.round(weather_data.main.temp_max);
    data.temperatureLow = Math.round(weather_data.main.temp_min);
    data.description = weather_data.weather[0].description;
    data.weatherIcon = getWeatherIcon(weather_data.weather[0].id);
    return data;
}

export default transformWeather;