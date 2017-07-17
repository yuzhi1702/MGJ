<template>
    <div id="Fightgroups">
   		<li class="payment"> <span><router-link to="/mine"> < </router-link>  </span><p>我的拼团</p> <img src="https://s2.mogucdn.com/p2/170315/40592144_67ja8jj102089fj6djai0l6khb0h5_44x44.png">   </li>
   
        <ul class="payment1">
        	<li><router-link to="/Fightgroups/one">全部</router-link></li>
        	<li><router-link to="/Fightgroups/tuo">待付款</router-link></li>
        	<li><router-link to="/Fightgroups/three">拼团中</router-link></li>
        	<li><router-link to="/Fightgroups/four">拼团成功</router-link></li>
        	<li><router-link to="/Fightgroups/five">拼团失败</router-link></li>
        </ul>
        <img src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png">
        <p>没有相应的商品</p>
    	<router-view></router-view>
    
    </div>
</template>

<script>
//	import one from './views/MIN/tuo/one'
    export default {
        name: 'Fightgroups',
        data () {
            return {
              
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Fightgroups{ width: 100%;height: 100%;font-size:.16rem; }
#Fightgroups>img{width: 100%;}
#Fightgroups>p{ width: 100%;text-align: center;line-height: .3rem; }
.payment{ width: 100%;height: .5rem; border-bottom: 1px solid lawngreen;}
.payment span{ float: left;line-height: .5rem;margin-left: .2rem;}
.payment p{ float: left;text-align: center;width: 80%;line-height: .5rem;}
.payment img{ float: right;width: .25rem;height: .25rem;margin-right: .2rem;margin-top: .15rem;}
.payment1{ width: 100%;height: .45rem; border-bottom: 1px solid lightblue;}
.payment1 li{ width: 20%;height: 100%;float: left; text-align: center;line-height: .45rem;}
.payment1 li .router-link-active{
	color: red;
	border-bottom: 1px solid red;
}
</style>
