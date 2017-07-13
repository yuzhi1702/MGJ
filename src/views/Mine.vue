<template>
    <div id="mine">
      <div class="head">
      	<img src="http://s3.mogucdn.com/mlcdn/5abf39/170628_3a6dhd63955glla03a0eh0cifka40_224x224.jpg_170x170.jpg ">
      	<ul>
      		<p>啊无痕</p>
      		<p>我的收货地址        >   </p>
      	</ul>
      </div>
      
      <ul class="head1">
      	<img src="https://s10.mogucdn.com/p1/160727/upload_ie4wenzume4tsmjqmezdambqgqyde_56x56.png">
      	<p> 我的订单  <span> > </span> </p>
      </ul>
      <ul class="head2">
      	<li>
      		 <router-link to="Payment">        
      		<p><img src="https://s10.mogucdn.com/p1/160829/idid_ifqwcmddgrswkzdbmezdambqgyyde_38x33.png"></p>
      		<p>待付款</p>
      		</router-link>
      	</li>
      	<li>
      		<router-link to="Payment">    
      		<p><img src="https://s10.mogucdn.com/p1/160829/idid_ie4dcoddmnswkzdbmezdambqgiyde_38x36.png"></p>
      		<p>待收货</p>
      		</router-link>
      	</li>
      	<li>
      		<router-link to="Payment">    
      		<p><img src="https://s10.mogucdn.com/p1/160830/idid_ie4gimztheygcmdcmezdambqgiyde_38x36.png"></p>
      		<p>待评价</p>
      		</router-link>
      	</li>
      	<li>
      		<router-link to="Payment">    
      		<p><img src="https://s10.mogucdn.com/p1/160829/idid_ie3wezbvhbtgkzdbmezdambqgayde_38x35.png"></p>
      		<p>售后</p>
      		</router-link>    
      	</li>
      	
      </ul>
      
      <ul class="head3">
      	<li>
      		<p><img src="//s6.mogucdn.com/p2/161130/159_0ihj4c5a23kabh84ka8dfhl552dla_56x56.png"></p>
      		<div><p> 我的购物车 <span> > </span></p></div>
      	</li>
      	<li>
      		
      		<p><img src="//s2.mogucdn.com/mlcdn/c45406/170419_7c5a4j17k0061bg4kiagf9lc69fe8_56x56.png"></p>
      		<div><router-link to="Fightgroups">   <p> 我的拼团 <span> > </span></p></router-link></div>
      		
      	</li>
      	<li>
      		<p><img src="//s10.mogucdn.com/p2/160822/159_00ijba9e46e13970ec7kakll8a06a_56x56.png"></p>
      		<div><p> 我的优惠券 <span> > </span></p></div>
      	</li>
      	<li>
      		<p><img src="//s16.mogucdn.com/p1/160727/upload_ifqtsndeg43gkmrqmezdambqgyyde_56x56.png"></p>
      		<div><p> 我收藏的商品 <span> > </span></p></div>
      	</li>
      	<li>
      		<p><img src="//s17.mogucdn.com/p1/160727/upload_ie4wmy3gmq3wkmrqmezdambqgqyde_56x56.png"></p>
      		<div><p> 我收藏的店铺 <span> > </span></p></div>
      	</li>
      	<li class="head4">
      		<img src="https://s10.mogucdn.com/p2/170217/79944927_03dfe3a4b2fg9kd5849093d56ib14_750x130.png">
      	</li>     
      	<li>
      		<p><img src="//s16.mogucdn.com/p1/160727/upload_ie4tgm3ege4wkmrqmezdambqgqyde_56x56.png"></p>
      		<div><p> 信息通知 <span> > </span></p></div>
      	</li>
      	<li>
      		<p><img src="//s16.mogucdn.com/p1/160307/idid_ifrtqmdfgztggnzsg4zdambqhayde_84x84.png"></p>
      		<div><p> 客服 <span> > </span></p></div>
      	</li>
      	<li>
      		<p><img src="//s17.mogucdn.com/p1/160727/upload_ifrdonbugezgkmrqmezdambqmeyde_56x56.png"></p>
      		<div><p> 意见反馈 <span> > </span></p></div>
      	</li>
      </ul>
      	
      <p> <button> 退出登录 </button>  </p>
      	
      	
      
      
      
    </div>
</template>

<script>

    export default {
        name: 'mine',
        data () {
            return {
                name: '我是mine'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#mine{ font-size:0.16rem;overflow: auto;}
#mine>p{ width: 100%;height: 1.1rem; text-align: center;background:lavender;}
#mine>p>button{ width: 80%;height:.5rem;background: red;border: 0;  margin-top: .2rem; margin-bottom: .5rem;border-radius:.1rem;font-size: .2rem;}
.head{ width: 100%;height:.9rem;border-bottom:10px solid lightgray ;}
.head img{float: left; width: .45rem;height: .45rem;margin-left: .4rem;margin-top: .3rem;border-radius: 50%;}
.head ul{margin-top: .3rem;float: left;margin-left: 0.2rem; }
.head1{ width: 100%;height: .5rem;border-bottom: 2px solid lavender; }
.head1 img{ width: .28rem;height: .28rem; border-radius: 50%;float: left;margin-top: .1rem;margin-left:.2rem ;}
.head1 p{ float: left; line-height: .5rem;margin-left: .1rem;width: 80%;}
.head1 p span{ float: right;   }
.head2{ width: 100%;height: .63rem;border-bottom: 10px solid lavender;}
.head2 li{float: left; width: 25%;height: 100%;text-align: center; }
.head2 img{ width: .19rem;height: .19rem;}
.head2 p{font-size: .16rem;line-height: .2rem;margin-top: .06rem; }
.head3{width: 100%;overflow: hidden;}
.head3 li{ width: 100%;height: .5rem;}
.head3 li>p{width: .6rem;height: .5rem;float: left;text-align:center;}
.head3 li p img{ width: .28rem;height: .28rem;margin-top: .15rem;}
.head3 li div{ width: 80%;height: 100%;border-bottom: 1px solid lavender;float: left;}
.head3 li div p{line-height: .5rem; width: 100%; }
.head3 li div p span{ float: right; }
.head3 .head4{ width: 100%;height: .65rem;border-bottom: 10px solid lavender;}
.head4>img{width: 100%;height: 100%;}
</style>
