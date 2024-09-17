<script>
import { store } from '../store.js'
import SingleItem from './SingleItem.vue'
export default {
  data() {
    return { 
      store
      
    }
  },
  components:{
    SingleItem
  },
  methods:{

    
  }
}
</script>

<template>
 <main>

  <div>
    <h2 class="fw-bold text-danger text-center">
      Film Trovati
    </h2>
    <ol>
      <li v-for=" (film, index) in store.films" :key="index">
        <SingleItem 
        	:title="film.title"
			:originalTitle="film.original_title"
			:language="film.original_language"
			:backdrop="film.backdrop_path"
			:vote="film.vote_average"/>
      </li>
    </ol>
    

  </div>
  
  <div>

    <h2 class="fw-bold text-warning text-center">
      Serie TV Trovate
    </h2>
    <ol>
      <li v-for=" (serie, index) in store.seriesTv" :key="index">
        <SingleItem 
        	:title="serie.name"
			:originalTitle="serie.original_name"
			:language="serie.original_language"
			:backdrop="serie.backdrop_path"
			:vote="serie.vote_average"/>
      </li>
    </ol>
  </div>

 </main>
</template>

<style lang="scss" scoped>

</style>
