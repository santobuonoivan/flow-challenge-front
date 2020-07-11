<template>
  <div id="waterView">
    <div id="head">
      <div id="selector">
        <CitySelector />
      </div>
    </div>
    <div id="currentData">
      <CurrentWeather :city="$store.getters.getCity" />
    </div>
    <div id="forecastData">
      <Forecast :city="$store.getters.getCity" />
    </div>
  </div>
</template>

<script>
import CurrentWeather from "./../components/Weather/CurrentWeather.vue";
import Forecast from "./../components/Forecast/Forecast.vue";
import CitySelector from "./../components/CitySelector.vue";

export default {
  name: "WeatherView",
  components: {
    CurrentWeather,
    Forecast,
    CitySelector
  }
};
</script>

<style>
#waterView {
  display: flex;  
  padding-left: 10px;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
}
#head {
  display: flex;
  width: 100%;
  justify-content: left;
  /*border: 2px solid black;*/
}
#selector {
  margin-top: 5px;  
  display: flex;
  width: 200px;
  /*border: 2px solid red;*/
}
#currentData {
  display: flex;
  flex-wrap: wrap;
  /*border: 1px solid red;*/
  justify-content: left;
}
#forecastData {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;  
  /*border: 2px solid green;*/
}
</style>