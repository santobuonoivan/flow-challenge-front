<template>
  <div class="forecastContainer">
    <main>
      <Measurements
        :cloudiness="day.data.cloudiness"
        :windSpeed="day.data.windSpeed"
        :humidity="day.data.humidity"
      ></Measurements>

      <Temperature
        :value="day.data.temperatureValue"
        :high="day.data.temperatureHigh"
        :low="day.data.temperatureLow"
      ></Temperature>

      <Weather :description="day.data.description" :icon="day.data.weatherIcon"></Weather>
    </main>
  </div>
</template>



<script>
import Weather from "./../Weather/Weather.vue";
import Temperature from "./../Weather/Temperature.vue";
import Measurements from "./../Weather/Measurements.vue";
//import getWeatherIcon from "../../services/weatherIcons";

export default {
  name: "ForecastItem",
  components: {
    Weather,
    Temperature,
    Measurements
  },
  props: {
    day: {
      type: Object
    }
  }
};
</script>

<style scoped>
.forecastContainer {
  display: flex;  
  flex-wrap: wrap;
  justify-content: space-evenly;
  
}

main {
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
    height: 400px;
    border-radius: 5px;
  }
}
</style>