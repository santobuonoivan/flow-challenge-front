<template>
  
    <div class="forecast">
      <ForecastItem v-for="item in forecastExtended" :key="item.id" :day="item" />
    </div>
  
</template>

<script>
import { getForecastData } from "@/api";
import transformForecast from "@/services/transformForecast";
import ForecastItem from "./ForecastItem.vue";

export default {
  name: "Forecast",
  components: {
    ForecastItem
  },
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
          this.forecastExtended = this.populate(response);
        })
        .catch(err => console.log(err));
    },
    /*
     * Set new data.
     *
     * @param {Object} data - Weather forecast json data.
     */
    populate(data) {
      return transformForecast(data);
    }
  }
};
</script>

<style>
.forecast {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
