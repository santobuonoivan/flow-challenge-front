<template>
  <div>
    <div id="weather">
      <main>
      <Measurements
        :cloudiness="this.forecast.cloudiness"
        :windSpeed="this.forecast.windSpeed"
        :humidity="this.forecast.humidity"
      ></Measurements>

      <Temperature
        :value="this.forecast.temperatureValue"
        :high="this.forecast.temperatureHigh"
        :low="this.forecast.temperatureLow"
      ></Temperature>

      <Weather
        :location="this.forecast.location"
        :description="this.forecast.description"
        :icon="this.forecast.weatherIcon"
      ></Weather>
      </main>
    </div>    
  </div>
</template>



<script>
import Weather from "./Weather";
import Temperature from "./Temperature";
import Measurements from "./Measurements";
//import WeatherForecast from "../services/WeatherForecast";
import { getCurrentWeatherData } from "./../../api";

export default {
  name: "CurrentWeather",
  props: {
    city: {
      type: String,
      default: ''
    }
  },
  components: {
    Weather,
    Temperature,
    Measurements
  },
  data() {
    return {
      clima: {},
      forecast: {
        cloudiness: 0,
        windSpeed: 0,
        humidity: 0,
        temperatureValue: 0,
        temperatureHigh: 0,
        temperatureLow: 0,
        location: " ",
        description: "Please connect to internet to fetch latest forecast :)",
        weatherIcon: require("../../assets/icons/weather/cloud.svg")
      }
    };
  },
  watch: {
    city: function() {
      this.getWeatherData();
    }
  },
  /*
  mounted() {
    this.getWeatherData()
  },*/
  methods: {
    /*
     * Fetch weather forecast from endpoint(openweathermap.org).
     *
     */
    getWeatherData() {
      getCurrentWeatherData(this.city)
        .then(response => {
          this.populate(response);
        })
        .catch(err => console.log(err));
    },
    /*
     * Set new data.
     *
     * @param {Object} data - Weather forecast json data.
     */
    populate(data) {
      this.forecast.cloudiness = data.clouds.all;
      this.forecast.windSpeed = data.wind.speed;
      this.forecast.humidity = data.main.humidity;
      this.forecast.temperatureValue = Math.round(data.main.temp);
      this.forecast.temperatureHigh = Math.round(data.main.temp_max);
      this.forecast.temperatureLow = Math.round(data.main.temp_min);
      this.forecast.location = this.formatLocation(data.name, data.sys.country);
      this.forecast.description = data.weather[0].description;
      this.forecast.weatherIcon = this.getWeatherIcon(data.weather[0].id);
    },
    /*
     * Get weather icon based on id.
     *
     * @param {Number} id - Weather ID.
     */
    getWeatherIcon(id) {
      if (this.isThunderstorm(id)) {
        return require("../../assets/icons/weather/thunderstorm.svg");
      }

      if (this.isDrizzle(id) || this.isRain(id)) {
        return require("../../assets/icons/weather/rain.svg");
      }

      if (this.isSnow(id)) {
        return require("../../assets/icons/weather/snow.svg");
      }

      return require("../../assets/icons/weather/cloud.svg");
    },

    /*
     * Error data for end-users.
     */
    getErrorData() {
      return {
        clouds: { all: 0 },
        wind: { speed: 0 },
        main: {
          humidity: 0,
          temp: 0,
          temp_max: 0,
          temp_min: 0
        },
        weather: [
          {
            id: 0,
            description: `There's a problem at the weather forecast server ¯\\_(ツ)_/¯`
          }
        ],
        name: null,
        sys: {
          country: null
        }
      };
    },

    /*
     * Format location.
     *
     * @param {String} city - Current city.
     * @param {String} country - Current country.
     */
    formatLocation(city, country) {
      if (city === null && country === null) {
        return "";
      }

      return `${city}, ${country}`;
    },

    /*
     * Check if under Thunderstorm category.
     *
     * @param {Number} id - Weather ID.
     */
    isThunderstorm(id) {
      return id > 199 && id < 233;
    },

    /*
     * Check if under Drizzle category.
     *
     * @param {Number} id - Weather ID.
     */
    isDrizzle(id) {
      return id > 299 && id < 322;
    },

    /*
     * Check if under Rain category.
     *
     * @param {Number} id - Weather ID.
     */
    isRain(id) {
      return id > 499 && id < 532;
    },

    /*
     * Check if under Snow category.
     *
     * @param {Number} id - Weather ID.
     */
    isSnow(id) {
      return id > 599 && id < 623;
    }
  }
};
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(115, 216, 177);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

@media screen and (min-width: 450px) {
  main {
    width: 330px;
    height: 600px;

    border-radius: 5px;
  }
}
</style>