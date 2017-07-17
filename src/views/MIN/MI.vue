<template>
    <div id="MI">
 <form action="" method="post">
	<label for="account">精品集账号</label>
	<input type="text" name="" id="account" ng-model='account' placeholder="输入用户名/邮箱/手机号"/>
	<label for="password">密码</label>
	<input type="password" name="" id="password" ng-model='password' placeholder="输入密码"/>
	<input type="button" value="登录" ng-click='login()'/>
</form>
<div class="clear login-way">
	<a href="" class="fl" ui-sref="loginWithoutPassword">免密登录</a>
	<a href="" class="fr" ui-sref="register">注册账号</a>
</div>
    </div>
</template>

<script>
//	import one from './views/MIN/tuo/one'
    export default {
        name: 'MI',
        data () {
            return {
              
            }
        },
      methods: {
　　　　
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

.payment1 li .router-link-active{
	color: red;
	border-bottom: 1px solid red;
}
</style>
