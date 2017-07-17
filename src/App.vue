<template>
  <div id="app">
  		<router-view></router-view>
    
    <div id="tab">
      <ul>
        <li>
          <router-link to="/home">          	
          	<div><img src="https://s2.mogucdn.com/p2/170315/40592144_5a62k5aecifecf3iaddc0eb2l384b_44x44.png"></div>
          	<div>首页</div>
          </router-link>
        </li>
        <li>
          <router-link to="/category">
          	<div><img src="https://s2.mogucdn.com/p2/170315/40592144_0b8i11l822b0adfjaaifl11ig86f1_44x44.png"></div>
          	<div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link to="/shopcar">
          	<div><img src="https://s2.mogucdn.com/p2/170315/40592144_67ja8jj102089fj6djai0l6khb0h5_44x44.png"></div>
          	<div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
          	<div><img src="https://s2.mogucdn.com/p2/170315/40592144_4aba4gee9khhe66df2723085cg75h_44x44.png"></div>
          	<div>我的</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  document.documentElement.style.fontSize = innerWidth / 4 + "px";
  window.onresize = function () {
    document.documentElement.style.fontSize = innerWidth / 4 + "px";
  }

export default {
  name: 'app',
  components: {

  }
}
</script>

<style src="./assets/reset.css"></style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 90%;
  overflow: auto;
}
#tab{
  width: 100%;
  height: 10%;
  position:fixed;
  bottom:0;
  background: white;
}
#tab>ul{
  height: 100%;
  width: 100%;
}
#tab li{
  float:left;
  width: 25%;
  height: 100%;
  font-size: .14rem;
 
  text-align: center;
}
#tab li .router-link-active{
	color: red;
}
#tab li div img{width: .2rem;height: .2rem;margin-top: .15rem;}
</style>
