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
@import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
#app {  
    display: flex;
    padding-left: 0px;
    width: 100%;    
    justify-content: center;
}

</style>
