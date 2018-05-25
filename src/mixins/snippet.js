export default {
    filters: {
        snippet(value){
            return value.slice(0,100) + '...';
        }
    }
}