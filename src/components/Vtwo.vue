<template>
<div id="Vtwo">
	<div class="bty">
		<p>热门市场</p>
		<a v-for='hjy in message'>
			<img :src="hjy.image" alt="" />
			<span>{{hjy.title}}</span>
		</a>
		
	</div>
</div>
</template>

<script>
export default {
  name: 'Vtwo',
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
	#Vtwo .bty{
		text-align: center;
	}
	#Vtwo .bty p{
		height: 0.2rem;
		line-height: 0.6rem;
		margin-bottom: 0.3rem;
	}
	#Vtwo .bty a{
		display: inline-block;
		width:25%;
		height: 1rem;
	}
	#Vtwo .bty a img{
		width:70%;
		height: 70%;
	}
	#Vtwo .bty a span{
		display: block;
		font-size: 10px;
	}
</style>