<template>
    <div id="xi">
     	<ul class="coll">
     		<img src="https://s10.mogucdn.com/p2/161118/upload_8djbjd0daffce09e0h7e5g564bcbi_479x238.jpg">
     		<h3>猜你喜欢</h3>
     		<router-link to="/zi">
     		<li v-for="as in dis" v-on:click="fn(as)"> 
     			<img :src= "as.img"alt="" />
     			<p>{{as.title}}</p>
     			<p ><span class="coll1">￥{{as.price}}</span><span class="coll2">{{as.cfav}}☆</span></p>
     			<p >{{as.clientUrl}}</p>
     		</li>
     		</router-link>
     	</ul>
     	
    </div>
</template>

<script>
    export default {
        name: 'xi',
          data () {
            return {
              dis:{}
//         e: {}
            }
            
        },
    
		mounted(){
			 this.$http.jsonp("http://list.mogujie.com/search?page=0&iids=613756455&cKey=h5-fav&pid=15143"	
				).then(function(res){					
						this.dis=res.body.result.wall.docs;
				});   
		}	,
		methods: {
 		fn: function (e) {
		  localStorage.setItem('aaa',JSON.stringify(e))
		  console.log(JSON.parse(localStorage.getItem('aaa')))
		}
			
    }
}		
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coll{ width: 100%; background: lavender; overflow: hidden;}
.coll img{ width: 100%;height: 60%; }
.coll h3{text-align: center;line-height: .3rem; }
.coll li{ width: 45%;float: left;margin-left: .13rem; height: 2.4rem;margin-top: .2rem;background: white;overflow: hidden;}
.coll li img{ width: 100%;height: 1.7rem;}
.coll li p{width: 100%; overflow: hidden ;white-space: nowrap;text-overflow: ellipsis;margin-top: .1rem;}
.coll1{ float: left;margin-left: .1rem;}
.coll2{float: right;margin-right: .15rem;}
</style>
