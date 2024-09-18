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
    vote: Number,
    overview:String
  },
  methods:{

    getUrlImg(){
        if(this.backdrop != null){

            return 'https://image.tmdb.org/t/p/w342/' + this.backdrop
        }
        else{

            return 'https://www.nerdpool.it/wp-content/uploads/2023/10/netflix-logo.jpg'
        }
    },
    fullStars(){

       return Math.ceil(this.vote / 2) 
        
    },
    emptyStars(){

        return (5 - (Math.ceil(this.vote / 2)) )
 
    }
  }
}
</script>

<template>

  <div class="card-info p-4">

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
        <span>
            <i v-for="x in fullStars()" class="fa-solid fa-star text-warning" :key="x"></i>
            <i v-for="x in emptyStars()" class="fa-regular fa-star" :key="x"></i>
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

.card-info{
    
    width: 100%;
    height: 200px;
    
    
}
.img-card{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:200px;
    
     
    img{
        width: 100%;
        height: 200px;
       
    }
}
</style>