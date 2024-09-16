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
  <header>
    
  <form class="mb-3 d-flex w-100 justify-content-center align-items-center">
    
    <label for="searchFilm" class="form-label fs-2 fw-bold">Cerca film</label>
    <input v-model="store.titleSearch"  type="text" class="form-control w-50 mx-5" id="searchFilm" >
    <button  @click.prevent="$emit('search')" class="btn btn-primary ">Search</button>

  </form>
    
  </header>
</template>

<style lang="scss" scoped>

header {
  background-color: red;
  text-align: center;
  padding: 20px 0;
}


</style>
