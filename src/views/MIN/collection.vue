<template>
    <div id="collection">
     	<li> <span><router-link to="/mine"> < </router-link>  </span> <p>我的收藏</p></li>
     	<div>
     		<li><router-link to="/collection/xi">宝贝</router-link></li>
     		<li><router-link to="/collection/shang">店铺</router-link></li>
     	</div>
     <router-view></router-view>
     
     	
    </div>
</template>

<script>
	import xi from './Collection/xi'
    export default {
        name: 'collection',
        data () {
            return {
              
            }
            
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#collection{ width: 100%;height: 100%;font-size:.16rem; }
#collection>li{width: 100%;height: .5rem;border-bottom: 1px solid lightgoldenrodyellow;}
#collection>li>span{ float: left;line-height: .5rem;margin-left: .2rem; }
#collection>li>p{ line-height: .5rem;float: left; width: 90%;text-align: center; }
#collection div { width: 100%; height: .5rem;border-bottom: 1px solid lemonchiffon; }
#collection div li{ width: 50%;line-height: .5rem;text-align: center;float: left;}
#collection li .router-link-active{
	color: red;
	border-bottom: 1px solid red;
}
</style>
