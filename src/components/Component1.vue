<template>
  <div>
    <p>Name of the bar: {{ bar.name }}</p>
    <button v-on:click="bar.show = !bar.show">Show Comment</button>
    <p v-show="bar.show">{{ bar.text }}</p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                bar: {
                    name: 'Spunte',
                    text: 'MORE BEEEEEEEEEEEEER',
                    show: false
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
