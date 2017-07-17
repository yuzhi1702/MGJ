<template>
<div id="Catrsth">
	<div class="cty1" v-for='cnc in message'>
		<!--{{cnc.title}}-->
		   <p> <span>{{cnc.title}}</span></br>
		    <span>{{cnc.viceTitle}}</span>
		   </p>
			<img :src="cnc.image" alt="" />
	</div>
	<!--<div class="cty2">
		<p>
			<img src="" alt="" />
		</p>
	</div>-->
</div>
</template>

<script>
export default {
  name: 'Catrsth',
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
	#Catrsth{
		position: relative;
		text-align: center;
	}
	#Catrsth div img{
		width: 70%;
		height: 70%;
	}
	#Catrsth div{
		display: inline-block;
		width: 33%;
		border:1px solid #ccc;
	}
	#Catrsth div:nth-child(1){
		width: 50%;
		height: 2rem;
		text-align: center;
		vertical-align:top;
	}
	
	#Catrsth div:nth-child(2){
		width: 50%;
		height: 1rem;
		float: right;
	}
	#Catrsth div:nth-child(2) img{
		width: 40%;
		height: 1rem;
		vertical-align:middle;
	}
	#Catrsth div:nth-child(2) p{
		display: inline-block;
	}
	#Catrsth div:nth-child(3){
		width: 50%;
		height: 1rem;
		margin-left: 50%;
		margin-top: -1rem;
		float: right;
		position: absolute;
		left:0;
		top:2rem;
	}
	#Catrsth div:nth-child(3) img{
		width: 40%;
		height: 0.9rem;
		vertical-align:middle;
	}
	#Catrsth div:nth-child(3) p{
		display: inline-block;
	}
</style>