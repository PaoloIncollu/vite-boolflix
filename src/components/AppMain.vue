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
  <ul class="d-flex" v-for=" (film, index) in store.films" :key="index">
    <li class="list-group-item w-25 pt-2 ">{{ film.title }}</li>
    <li class="list-group-item w-25 pt-2 ">{{ film.original_title }}</li>
    <li class="list-group-item w-25 pt-2 ">{{ film.original_language }}</li>
    <li class="list-group-item w-25 pt-2 ">{{ film.vote_average }}</li>
  </ul>

 </main>
</template>

<style lang="scss" scoped>

</style>
