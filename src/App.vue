<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import showHour from './components/showHour.vue';
import addHour from './components/addHour.vue';
import listVenues from './components/listVenues.vue';
import header from './components/header.vue';

export default {
  components: {
    'addHour': addHour,
    'showHour': showHour,
    'listVenues': listVenues,
    'app-header': header
  }

}

</script>

<style>
body {
  margin: 0;
  font-family: 'Architects Daughter';
  }

</style>  
