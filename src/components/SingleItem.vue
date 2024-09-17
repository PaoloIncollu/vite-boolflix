<script>
import { store } from '../store.js'


export default {
  data() {
    return { 
      store,
      stars:{
        starYellow:'https://img.icons8.com/?size=16&id=87XmLcImcKSL&format=png',
        star:'https://img.icons8.com/?size=16&id=BUyCA1Ge5p9C&format=png'
      }

      
      
      
    }
  },
  props:{

    title: String,
    originalTitle: String,
    language: String,
    backdrop: String,
    vote: Number,
    overview:String
  },
  methods:{

    getUrlImg(){

        return 'https://image.tmdb.org/t/p/w342/' + this.backdrop
    },
    roundNumber(){

       return Math.round(this.vote / 2) 
        
    }
  }
}
</script>

<template>

  <div class="p-4">

    <h5>Titolo: {{ title }}</h5>
    <h6>Titolo originale: {{ originalTitle }}</h6>
    <div>

        <template v-for="(flag,i) in store.flags" :key="i">

            <span v-if="flag.id === language">
            <span class="fw-bold">Language:</span>
            <img :src="flag.imgFlag" :alt="language">
            
            </span>
            
        </template>
    </div>
    
    <div>
        <span class="fw-bold">
        Voto:
        <span v-if="this.roundNumber()=== 0">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
        </span>
        <span v-if="this.roundNumber()=== 1">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
        </span>
        <span v-if="this.roundNumber()=== 2">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
        </span>
        <span v-if="this.roundNumber()=== 3">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.star" alt="">
            <img :src="this.stars.star" alt="">
        </span>
        <span v-if="this.roundNumber()=== 4">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.star" alt="">
        </span>
        <span v-if="this.roundNumber()=== 5">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
            <img :src="this.stars.starYellow" alt="">
        </span>
    </span>
    </div>
    <div>

        <span class="fw-bold">Overview:</span>

        <span style="font-size:10px">{{ overview }}</span>
        
    </div>
    
  </div>
    


    <div class="img-card">
        <img :src=getUrlImg() :alt="title">
    </div>
  
    

</template>

<style lang="scss" scoped>
.img-card{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height:100%;
    &:hover{
        cursor: pointer;
        display: none;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>