<script>
import { store } from '../store.js'
export default {
  data() {
    return { 
      store
      
    }
  },
  props:{

    title: String,
    originalTitle: String,
    language: String,
    backdrop: String,
    vote: Number
  },
  methods:{

    getUrlImg(){

        return 'https://image.tmdb.org/t/p/w342/' + this.backdrop
    }
  }
}
</script>

<template>

<ul>
    <li class="list-group-item pt-2 ">Titolo: {{ title }}</li>
    <li class="list-group-item pt-2 ">Titolo originale: {{ originalTitle }}</li>
    <li class="list-group-item pt-2 ">
      <template v-for="(flag,i) in store.flags" :key="i">

        <div v-if="flag.id === language">
          <span>Language:</span>
          <img :src="flag.imgFlag" :alt="language">
          
        </div>
        
      </template>  
        
    </li>
    <li class="list-group-item pt-2 ">Voto: {{ vote }}</li>
    <li class="list-group-item pt-2">
        <img :src=getUrlImg() :alt="title">
    </li>
  </ul>
    

</template>

<style lang="scss" scoped>

</style>