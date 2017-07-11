<template>
  <div id="app">
    <router-view></router-view>
    <div id="tab">
      <ul>
        <li>
          <router-link to="home">首页</router-link>
        </li>
        <li>
          <router-link to="category">分类</router-link>
        </li>
        <li>
          <router-link to="shopcar">购物车</router-link>
        </li>
        <li>
          <router-link to="mine">我的</router-link>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#tab{
  width: 100%;
  height: 10%;
  position:fixed;
  bottom:0;
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
}

</style>
