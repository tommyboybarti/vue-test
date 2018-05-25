<template>
    <div id="singleBlog">
        <h1>{{ happies.name }}</h1>
        <article>{{ happies.offering }}</article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // access to data properties and grab route parameter from URL
            id: this.$route.params.id,
            // store venue info from DB in this property
            happies: {}
        }
    },
    // again set a lifecycle hook from the data that has been created
    created() {
        this.$http.get('https://happyhour-no1.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
            console.log(data);
        }).then(function(data){
            this.happies = data;
            console.log(data);
        });
    }
}
</script>

<style>
#singleBlog {
    max-width: 800px;
    margin: 0 auto;
}
</style>
