<template>
<div id="Contenleng">
	<ul class="sky1">
        <li v-for='ty in message'>
        	<p v-for="tr in ty.list">
        		<img :src="tr.img" alt="" />
        		<span>{{tr.title}}</span>
        		<span>{{tr.salePrice}}</span>
        </p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Contenleng',
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
	#Contenleng{
		margin-top: 1.5rem;
		height: 2.25rem;
		overflow: scroll;
		::-webkit-scrollbar-track {
		  background-color: #fff;
	}
	}
	.sky1{
		width:300%;
		height: 2.1rem;
	}
	.sky1 li{
		width: 100%;
		height: 2.1rem;
		
	}
	.sky1 li p{
		display: inline-block;
		width: 9.8%;
		height: 2.1rem;
		margin-left: 0.02rem;
	}
	.sky1 li p img{
		width: 100%;
		height: 50%;
		float: left;
	}
	.sky1 li p span{
		display: inline-block;
		margin-top: 0.1rem;
	}
</style>