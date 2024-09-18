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
 <main class="bg-dark">

  <div class="pt-5">
    <h2 class="fw-bold text-danger text-center mb-5">
      Film Trovati
    </h2>
	<div class="my-container-cards d-flex flex-wrap">
		<div v-for=" (film, index) in store.films" :key="index" class="my-container-card  border-0">
		<div class="my-card  bg-white">
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

    <h2 class="fw-bold text-warning text-center mb-5">
      Serie TV Trovate
    </h2>
    <div class="my-container-cards d-flex flex-wrap">
		<div v-for=" (serie, index) in store.seriesTv" :key="index" class="my-container-card border-0 ">
			<div class="my-card bg-white">
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
	width: 80%;
	margin: 0 auto;
	.my-container-card{
		
		width:calc(100% / 4);
		height: 200px;
		margin-bottom: 40px;
	
		.my-card{
			position: relative;
			width: 80%;
			height: 200px;
			

		}
	}
		
		
		
}

</style>
