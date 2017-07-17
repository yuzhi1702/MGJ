<template>
    <div id="zi" >
    	<li > 
     			<img :src= "arr.img" alt="" />
     			<p>{{arr.title}}</p>
     			<p class="coll1">￥{{arr.price}}</p>
     			
        </li>
    	<li v-for="asss in aaa">
 	        <img :src= "asss.img" alt="" />
 			<p>{{asss.title}}</p>
 			<p>{{asss.defaultPrice}}</p>			
     	</li>		
    	<li v-for="as in ar">
 	        <img :src= "as" alt="" />			
     	</li>	
     	<li v-for="ass in aa">
 	        <img :src= "ass" alt="" /> 			
     	</li>	
     	
     	<ul class="clear2">
     		<li>客服</li>
     		<li>收藏</li>
     		<li>小店</li>
     		<li>加入购物车</li>
     		<li>立即购买</li>
     	</ul>
    </div>
</template>

<script>
    export default {
        name: 'zi',
          data () {
            return {
              arr:{},
              ar:{},
              aa:{},
              aaa:{},
              sss:{},
              asa:{}
            }
            
        },
    
		mounted(){
			this.arr =	JSON.parse(localStorage.getItem('aaa')) 
			console.log(this.arr)
			this.$http.jsonp('http://m.mogujie.com/jsonp/detail.api/v1?iid='+this.arr.iid+'&template=1-2-detail_normal-1.0.0'	
				).then(function(res){					
						this.ar=res.data.data.detailInfo.detailImage[0].list;
						this.aa=res.data.data.topImages;
						this.aaa=res.data.data.collcationSet.collcationSetList[0].collocationSetItemGroupDTOs;
						this.asa=res.data.data.normalShareInfo;
//						console.log(res.data.data)
//						console.log(res.data.data.normalShareInfo)
				});   
		}
	
			
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#zi{font-size:.16rem; }
#zi img{width: 100%; }
.coll1{ font-size: .3rem; width: 100%;text-align: center;color: red;}
.clear2{width: 100%;height: .5rem;background: white; position: fixed;bottom: .6rem;}
.clear2 li{ float: left;width: 20%;text-align: center;line-height: .5rem;}
</style>
