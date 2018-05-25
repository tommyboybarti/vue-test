export default {
    computed: {
        // takes in all the data we retrieve from the DB (happies object) and filters it
        filteredNames: function(){
            // return an array, cycle thru it and fire a fct each time on an item (happy)
            return this.happies.filter((happy) => {
                // determine whether search term is in name (boolean = true)
                return happy.name.match(this.search);
            });
        }
    }
}