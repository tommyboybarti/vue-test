<template>
  <div id="addHour">
      <h2>Add a new Happy Hour</h2>
      <form v-if="!submitted">
          <label>Name of venue:</label>
          <input type="text" v-model.lazy="happy.name" required />
          <div id="checkboxes">
              <label>Drinks</label>
              <input type="checkbox" value="drinks" v-model="happy.categories" />
              <label>Food</label>
              <input type="checkbox" value="food" v-model="happy.categories" />
          </div>
          <div id="times">
              <label>Time from:</label>
              <select v-model="happy.timeFrom">
                  <option v-for="time in times">{{ time }}</option>
              </select>
              <label>Time til:</label>
              <select v-model="happy.timeTil">
                  <option v-for="time in times">{{ time }}</option>
              </select>
          </div>
          <label>Offering:</label>
          <textarea v-model.lazy="happy.offering"></textarea>
          <!-- post method for HTTP requests down below -->
          <button v-on:click.prevent="post">Add Happyhour!!</button>
      </form>
      
      <div v-if="submitted">
          <h3>Thanks for adding your post</h3>
      </div>

      <div id="preview">
          <h3>Overview of your valuable information</h3>
          <p>Name of venue: {{ happy.name }}</p>
          <p>Categories:</p>   
          <ul>
              <li v-for="category in happy.categories">{{ category }}</li>
          </ul>                 
          <p>Time from: {{ happy.timeFrom }}</p>
          <p>Time til: {{ happy.timeTil }}</p>
          <p>Offering</p>
          <p>{{ happy.offering }}</p>
      </div>
  </div>
 
</template>
 
<script>

export default {
    
    data() {
        return {
            happy: {
                name: "",
                offering: "",
                categories: [],
            },
            times: ['3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', 'midnight'],
            // keep track whether the form has been submitted
            submitted: false,
        }
    },
    methods: {
        post: function(){
            // http request (post) to the firebase database. Sending the whole object happy 
            // once you get the promise, then you fire a fct. 
            this.$http.post('https://happyhour-no1.firebaseio.com/posts.json', this.happy).then(function(data){
                console.log(data);
                // turn submitted to true, so the feedback message will be shown
                this.submitted = true;
            });
        }
    }
} 

</script>

<style>
#addHour *{
    box-sizing: border-box;
}
#addHour {
    margin: 20px auto;
    max-width: 500px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
}
#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3 {
    margin-top: 10px;
}
#checkboxes input, #times select {
    display: inline-block;
    margin-right: 15px;
    margin-left: 5px;
}
#checkboxes label, #times label {
    display: inline-block;
}
</style>
