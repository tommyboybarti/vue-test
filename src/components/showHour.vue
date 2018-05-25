<template>
    <div id="showHour">
      <h1>All HappyHours</h1> 
      <input type="text" v-model="search" placeholder="Search HappyHours"/>
      <div v-for="happy in filteredNames" class="singleHH">
        <!-- create links from title to singleVenue -->
        <router-link v-bind:to="'/venue/' + happy.id"><h2>{{ happy.name | toUppercase }}</h2></router-link>
        <!-- set a filter -->
        <p>{{ happy.category }}</p>
        <article>{{ happy.offering | snippet }}</article>
      </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
import toUppercase from '../mixins/toUppercase';
import snippet from '../mixins/snippet';

export default {

  data() {
    return {
      // store the get posts in a property
      happies: [],
      search: ''
    }
  },

  methods: {

  },

  // lifecycle hook fct that fires when component is created to get some data
  created() {
    this.$http.get("https://happyhour-no1.firebaseio.com/posts.json").then(function(data){
      // return a promise in order to have .then a callback fct ready to fire
      return data.json();
      // get the json data, all the posts (also objects) in one global object
    }).then(function(data){
      // creating new ids based on unique identifiers provided by firebase
      var happyArray = [];
      // cycle thru the global object (data) to get sinlge keys for each post
      for (let key in data){
        // console.log(data[key]);
        data[key].id = key;
        happyArray.push(data[key]);
      }
      // console.log(data);
      this.happies = happyArray;
    })
  },

  // register mixins
  mixins: [searchMixin, toUppercase, snippet]

}

</script>


<style scoped>
#showHour {
  max-width: 800px;
  margin: 0 auto;
}
.singleHH {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
