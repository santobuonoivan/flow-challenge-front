<template>
  <div>
      <div>
          <CitySelector :city="$store.getters.getCity"/>
      </div>
    <div>
      <CurrentWeather />
    </div>
    <div>
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