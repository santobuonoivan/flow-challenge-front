<template>
  <div>
    <b-container v-if="forecastExtended">
      <b-row name>
        <b-col v-for="day in forecastExtended.list" :key="day.id">
          <img v-bind:src="day.day.condition.icon" />
          <p>Avg Temp: {{day.day.avgtemp_c}}°c</p>
          <p>{{day.day.condition.text}}</p>
          <p>{{day.date}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { getForecastData } from "@/api";

export default {
  name: "Forecast",
  props: {
    city: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      forecastExtended: null
    };
  },
  mounted() {},
  watch: {
    city: function() {
      this.getForecastData();
    }
  },
  methods: {
    /*
     * Fetch weather forecast from endpoint(openweathermap.org).
     *
     */
    getForecastData() {
      getForecastData(this.city)
        .then(response => {
          this.forecastExtended = response;
        })
        .catch(err => console.log(err));
    },    
  }
};
</script>

<style>
.currentWeatherIcon {
  width: 10%;
  height: 10%;
}
</style>
