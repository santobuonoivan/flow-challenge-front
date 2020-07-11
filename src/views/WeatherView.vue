<template>
  <div id="waterView">
    <div id="head">
      <div id="city">
        {{$store.getters.getCity}}
      </div>
      <div id="selector">
        <CitySelector />
      </div>
    </div>
    <div id="currentData">
      <CurrentWeather :city="$store.getters.getCity"/>
    </div>
    <div id="forecastData">
      <Forecast />
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
  border: 2px solid coral;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;  
  justify-content: center;
}
#head {
  display: flex;  
  width: 100%;
  justify-content: center;
  border: 2px solid black;
}
#city {
  display: flex;
  width: 200px;
  border: 2px solid blue;
}
#selector {
  display: flex;
  width: 200px;
  border: 2px solid red;
}
#currentData {
  display: flex;  
  border: 2px solid black;
}
#forecastData {
  display: flex;
  width: 200px;
  border: 2px solid green;
}
</style>