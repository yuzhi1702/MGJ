<template>
   <div id="Altens">
   	<div class="lax1">
   		<img src="../assets/xiangping4.jpg" alt="" style="width: 100%; height: 5rem;"/>
   		<p>新款高腰水洗黑色热裤做旧显瘦A字潮流百搭毛边灰色牛仔短裤女夏</p>
   		<!--<i>￥39</i>-->
   	</div>
   	<div class="esn">
   		<span>着妆效果</span>
   		<p v-for='ute in arrone.list'>
   			<img :src="ute" alt="" />
   		</p>
   		<span>整体款式</span>
   		<p v-for='ute in arrtwo.list'>
   			<img :src="ute" alt="" />
   		</p>
   		<sapn>细节做工</sapn>
   		<p v-for='ute in arrthere.list'>
   			<img :src="ute" alt="" />
   		</p>
   	</div>
   	<div class="lax">
   		<ul>
   			<li><a href=""><img src="../assets/kf.png" alt="" style="width: 0.3rem; height: 0.3rem;" />客服</a></li>
   			<li><a href=""><img src="../assets/sp.png" alt="" style="width: 0.3rem; height: 0.3rem;"/>收藏</a></li>
   			<li><a href=""><img src="../assets/sc.png" alt="" style="width: 0.3rem; height: 0.3rem;"/>小店</a></li>
   			<li><a href="">加入购物车</a></li>
   			<li><a href="">立即购买</a></li>
   		</ul>
   	</div>
   </div>
</template>

<script>
    export default {
        name: 'Altens',
        data () {
            return {
         	arrone:[]
            }
        },
         mounted(){
        	this.$http.get('static/json/xqn.json').then(function(res){
     		this.arrone=res.body.data.detailInfo.detailImage[0],
     		this.arrtwo=res.body.data.detailInfo.detailImage[1],
     		this.arrthere=res.body.data.detailInfo.detailImage[2],
     		console.log(res)
     		console.log(res.body.data.detailInfo.detailImage[0])
        })
    }
        }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #Altens .lax{
    	width: 100%;
    	height: 0.6rem;
    	position: fixed;
    	top:6.5rem;
    	z-index: 2;
    	background: #ccc;
    }
    #Altens .lax ul{
    	width: 100%;
    	height: 0.6rem;
    }
    #Altens .lax ul li{
    	width: 17%;
    	height: 100%;
    	float: left;
    	font-size: 0.1rem;
    	text-align: center;
    }
   #Altens .lax ul li a{
    	display: inline-block;
    	width: 100%;
    	height: 0.6rem;
    	line-height: 0.2rem;
    	font-size: 0.1rem;
    }
    #Altens .lax ul li a img{
    	display: block;
    	margin-left: 0.23rem;
    	margin-top: 0.05rem;
    }
     #Altens .lax ul li:nth-child(4){
    	padding-top: 0.2rem;
    	font-weight: bold;
    	background: indianred;
    	width: 24%;
    }
     #Altens .lax ul li:nth-child(5){
    	padding-top: 0.2rem;
    	font-weight: bold;
    	background: red;
    	width: 24.5%;
    }
     #Altens .lax1 p{
     	display: inline-block;
     	width: 100%;
     	height: 0.5rem;
     	margin-top: -1rem;
     	font-size: 0.2rem;
     }
     #Altens .esn{
     	width: 100%;
     }
     #Altens .esn p{
     	width: 100%;
     	height: 3rem;
     	margin-top: 0.2rem;
     }
     #Altens .esn p img{
     	width: 100%;
     	height: 3rem;
     }
      #Altens .esn span{
     	font-size: 0.2rem;
     }
</style>
