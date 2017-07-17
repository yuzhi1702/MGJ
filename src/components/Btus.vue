<template>
<div id="Btus">
	<div v-for='wto in message' class="dcy">
		<router-link to='/Altens'>
			<img :src="wto.image" alt="" />
			<p>{{wto.title}}</p>
			<span>{{wto.discountPrice}}</span>
		</router-link>
	</div>
</div>
</template>

<script>
export default {
  name: 'Btus',
  data(){
      return {
          
      }
  },
  props:{
      message:[]
},
  mounted(){
  	
  }
}
</script>

<style scoped>
	#Btus{
		background: #ccc;
	}
	#Btus .dcy{
		display: inline-block;
		width: 47%;
		height: 3rem;
		margin-left: 0.1rem;
		margin-top: 0.1rem;
		background: #fff;
	}
	#Btus .dcy img{
		width: 100%;
		height: 3rem;
	}
	#Btus .dcy p{
		width: 100%;
		height: 0.6rem;
	}
</style>