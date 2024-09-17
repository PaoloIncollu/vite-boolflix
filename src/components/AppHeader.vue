<script>
import { store } from '../store.js';
export default {
  data() {
    return { 
      store
    }
  },
  methods:{

    
  }
}
</script>

<template>
  <header class="bg-warning">
    <div class="my-nav-bar d-flex justify-content-between align-items-center">

      <div>
        <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
      </div>

      <div class="d-flex w-50 h-25">
        <input v-model="store.titleSearch"  type="text" class="form-control mx-5" id="search" placeholder="Ricerca film e serie tv">
        <button  @click.prevent="$emit('search')" class="btn btn-primary ">Search</button>

      </div>
    
    </div>
  
  </header>
</template>

<style lang="scss" scoped>

header {
  
  text-align: center;
  padding: 40px 0;
  width: 100%;

  .my-nav-bar{

    width: 80%;
    margin: 0 auto;
  }
  
}


</style>
