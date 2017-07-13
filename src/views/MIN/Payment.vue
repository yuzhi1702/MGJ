<template>
    <div id="Payment">
   		<li class="payment"> <span><router-link to="mine"> < </router-link>  </span><p>我的订单</p> <img src="https://s2.mogucdn.com/p2/170315/40592144_67ja8jj102089fj6djai0l6khb0h5_44x44.png">   </li>
   
        <ul class="payment1">
        	<li><router-link to="/Payment/one">全部</router-link></li>
        	<li><router-link to="/Payment/tuo">待付款</router-link></li>
        	<li><router-link to="/Payment/three">待收货</router-link></li>
        	<li><router-link to="/Payment/four">带评价</router-link></li>
        	<li><router-link to="/Payment/five">售后</router-link></li>
        </ul>
        <img src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png">
        <p>没有相应的商品</p>
    	<router-view></router-view>
		<one></one>
		<tuo></tuo>
		<three></three>
		<four></four>
		<five></five>
    
    </div>
</template>

<script>
//	import one from './views/MIN/tuo/one'
    export default {
        name: 'Payment',
        data () {
            return {
              
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Payment{ width: 100%;height: 100%;font-size:.16rem; }
#Payment>img{width: 100%;}
#Payment>p{ width: 100%;text-align: center;line-height: .3rem; }
.payment{ width: 100%;height: .5rem; border-bottom: 1px solid lawngreen;}
.payment span{ float: left;line-height: .5rem;margin-left: .2rem;}
.payment p{ float: left;text-align: center;width: 80%;line-height: .5rem;}
.payment img{ float: right;width: .25rem;height: .25rem;margin-right: .2rem;margin-top: .15rem;}
.payment1{ width: 100%;height: .45rem; border-bottom: 1px solid lightblue;}
.payment1 li{ width: 20%;height: 100%;float: left; text-align: center;line-height: .45rem;}
</style>
