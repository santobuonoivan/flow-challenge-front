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
  
}
</style>
