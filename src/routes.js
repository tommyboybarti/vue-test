import showHour from './components/showHour.vue';
import addHour from './components/addHour.vue';
import listVenues from './components/listVenues.vue';
import singleVenue from './components/singleVenue.vue';

// export an array of routes with many different elements
export default [
    // 1. thing: name path and what you want to show (component)
    { path: '/', component: listVenues },
    { path: '/add', component: addHour },
    { path: '/show', component: showHour },
    { path: '/venue/:id', component: singleVenue }
]