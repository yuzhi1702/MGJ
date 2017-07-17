<template>
	<div class="swiper-container" id="Lunbos">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in message"> <img :src="str.url" alt=""/></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
	<!--<ul>
        <li v-for="str in message">
        </li>
   </ul>-->
</template>

<script>
 import '../assets/swiper-3.4.1.min.css'; 	
 import '../../static/swiper-3.4.1.min.js';
 
export default {
  name: 'Lunbos',
  data(){
      return {
          
      }
  },
props:{
      message:[]
},
  mounted(){
  	 console.log('mounted', this)
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 1000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
  
}
</script>

<style>
	.swiper-container {
        width: 100%;
        height: 2rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 1rem;
            img {
                width: 100%;
                height: 1rem;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>