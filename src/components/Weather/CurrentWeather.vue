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
import Weather from "./Weather.vue";
import Temperature from "./Temperature.vue";
import Measurements from "./Measurements.vue";
import getWeatherIcon from "../../services/weatherIcons";
import { getCurrentWeatherData } from "./../../api";

export default {
  name: "CurrentWeather",
  props: {
    city: {
      type: String,
      default: ""
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
      this.forecast.weatherIcon = getWeatherIcon(data.weather[0].id);
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
    }
  }
};
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(115, 216, 177);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;

  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

@media screen and (min-width: 450px) {
  main {
    width: 330px;
    height: 400px;
    border-radius: 5px;
  }
}
</style>