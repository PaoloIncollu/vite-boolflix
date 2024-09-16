<script>
import { store } from '../store.js'

export default {
  data() {
    return { 
      store
      
    }
  }
}
</script>

<template>
 <main>

  
  <div>
    <h2 class="fw-bold text-danger text-center">
      Film Trovati
    </h2>
    <ul class="row justify-content-center" v-for=" (film, index) in store.films" :key="index">
    <li class="list-group-item col-3 pt-2 ">{{ film.title }}</li>
    <li class="list-group-item col-3 pt-2 ">{{ film.original_title }}</li>
    <li class="list-group-item col-3 pt-2 ">
      <div v-for="(flag,i) in store.flags" :key="i">
        
        <img  v-if="flag.id === film.original_language" :src="flag.imgFlag" :alt="film.original_language">
        
      </div>  
        
    </li>
    <li class="list-group-item col-3 pt-2 ">{{ film.vote_average }}</li>
  </ul>

  </div>
  
  <div>

    <h2 class="fw-bold text-warning text-center">
      Serie TV Trovate
    </h2>
  <ul class="row" v-for=" (serie, index) in store.seriesTv" :key="index">
    <li class="list-group-item col-3 pt-2 ">{{ serie.name }}</li>
    <li class="list-group-item col-3 pt-2 ">{{ serie.original_name }}</li>
    <li class="list-group-item col-3 pt-2 ">
      <div v-for="(flag,i) in store.flags" :key="i">
        
        <img  v-if="flag.id === serie.original_language" :src="flag.imgFlag" :alt="serie.original_language">
        
      </div>  
        
    </li>
    <li class="list-group-item col-3 pt-2 ">{{ serie.vote_average }}</li>
  </ul>
  </div>

 </main>
</template>

<style lang="scss" scoped>

</style>
