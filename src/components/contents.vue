<template>
<div id="Contents">
	<ul class="sky">
        <li v-for="item in message">
        	<router-link to='/detail'>
        	<p>{{item.description}}<br><span>{{item.title}}</span></p>
            <img :src="item.image" alt="" />
        	</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Contents',
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
	.sky{
		margin-top: 0.2rem;
	}
	.sky li{
		width: 33%;
		height: 1rem;
		float: left;
		text-align: center;
	}
	.sky li img{
		width: 70%;
		height: 0.7rem;
	}
	.sky li p{
		color:red;
		font-weight: bold;
	}
	.sky li p span{
		color:blue;
		font-weight:none;
	}
	.sky li:nth-child(2){
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
	}
</style>