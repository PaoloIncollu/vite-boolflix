<script>
/* 
  Per importare ed utilizzare un componente dentro un altro devo SEMPRE seguire questi 3 passi:
  1) Importazione del componente
  2) Dichiarazione del componente
  3) Utilizzo del componente
*/
// 1) Importazione del componente
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';
export default {
  data() {
    return { 
      store
    }
  },
  // 2) Dichiarazione del componente
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
 
 created() {
  this.searchMovie()
    },

  methods: {
    
    searchMovie(){

      axios
  .get('https://api.themoviedb.org/3/search/movie?api_key=28269fe089100b98912f0738ca2cb102&language=it_IT',{

    params:{

      query:this.store.titleSearch
    }
  }
  )
  .then((films) =>{
    
    console.log('OGGETTO CREATO DA AXIOS:', films.data.results);
      this.store.films = films.data.results;
      
  });

  axios
  .get('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT',{

    params:{

      query:this.store.titleSearch
    }
  }
  )
  .then((series) =>{
    
    console.log('OGGETTO CREATO DA AXIOS:', series.data.results);
      this.store.seriesTv = series.data.results;
      
  });
    }


  }


}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <AppHeader @search="searchMovie"/>
    
    <AppMain/>

    <AppFooter/>
  </div>
</template>

<style lang="scss">
@use '../src/assets/scss/main.scss' as *;

// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
