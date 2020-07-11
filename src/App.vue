<template>
  <div id="app">    
    <WeatherView />
  </div>
</template>

<script>
import WeatherView from './views/WeatherView.vue'

export default {
  name: 'App',
  components: {
    WeatherView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
