<template>
    <div id="detail">
      <p v-for="uy in arr1[0].items">
      	<img :src="uy.image" alt="" />
      </p>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        data () {
            return {
            	arr1:{}
            }
        },
         mounted(){
        	this.$http.get('static/json/yi.json').then(function(res){
     		this.arr1=res.body.result.highGrade.list,
            console.log(res.body.result.highGrade.list)
           console.log(this.arr1[1].items)
        	})
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #detail{
  	width: 100%;
  	height: 8rem;
  }
  p{
    font-size:0.1rem;
  }
</style>
