<template>
  <div id="app">
    <img src="./assets/spunten.jpeg">
    <app-hello/>
    <app-content></app-content>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Component1 from './components/Component1.vue';

export default {
  components: {
    'app-hello': HelloWorld,
    'app-content': Component1
  }
}

</script>

<style>

</style>
