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
 <main class="mt-5">

  <div>
    <h2 class="fw-bold text-danger text-center">
      Film Trovati
    </h2>
	<div class="my-container-cards d-flex flex-wrap">
		<div v-for=" (film, index) in store.films" :key="index" class="my-card  border-0">
		<div>
			<SingleItem 
				:title="film.title"
				:originalTitle="film.original_title"
				:language="film.original_language"
				:backdrop="film.backdrop_path"
				:vote="film.vote_average"
				:overview="film.overview"/>

		</div>
		</div>	
	</div>
    
      
    

  </div>
  
  <div class="mt-5">

    <h2 class="fw-bold text-warning text-center">
      Serie TV Trovate
    </h2>
    <div class="my-container-cards d-flex flex-wrap">
		<div v-for=" (serie, index) in store.seriesTv" :key="index" class="my-card border-0">
			<div>
				<SingleItem 
				:title="serie.name"
				:originalTitle="serie.original_name"
				:language="serie.original_language"
				:backdrop="serie.backdrop_path"
				:vote="serie.vote_average"
				:overview="serie.overview"/>

			</div>
		</div>	
	</div>
      
    
  </div>

 </main>
</template>

<style lang="scss" scoped>
.my-container-cards{
	width: 100%;
	margin: 0 auto;
	.my-card{

		position: relative;
		width:25%;
		
		
		
	}
}
</style>
