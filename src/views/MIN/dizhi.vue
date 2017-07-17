<template>
	<div id="dizhi">

	<div class='consignee'>
		<p>收货人</p>
		<input />
	</div>
	<div class='consignee'>
		<p>手机号</p>
		<input />
	</div>
	<div class='consignee'>
		<p>省份</p>
		<select on:change="citie(citieName)" v-model="citieName">
			<option v-for="item in cities" >{{item.name}}</option>
		</select>
	</div>
	<div class='consignee'>
		<p>城市</p>
		<select v-model="townName">
			<option>请选择</option>
			<option v-for="item1 in urban">{{item1.name}}</option>
		</select>
	</div>
	<div class='consignee'>
		<p>地区</p>
		<select v-model="areaName">
			<option>请选择</option>
			<option v-for='item2 in region'>{{item2.name}}</option>
		</select>
	</div>
	<div class='addsite-particular'>
		<div class="particu"> 
			<p>详细地址</p>
			<textarea></textarea>
		</div>
		
		<div class="number">0/100</div>
	</div>
	<div class='consignee'>
		<p>邮编</p>
		<input />
	</div>
  
</div>	
</template>

<script>
	
	export default {
        name: 'dizhi',
        data () {
            return {
              dis:{}
            }
        },	
        
        mounted: function() {
				this.getJsonInfo()
		},
			methods: {
				 getJsonInfo: function() {
					this.$http.get('static/chinaCities.json').then(function(res){
					      console.log(res)
					      var cities = res.data.data
				      this.peps = resdata
					}),
					
					this.citie=function(polis){
				angular.forEach(this.cities,function(data){
					if(polis==data.name){  
						if(data.sub[0].sub){//三层数据  true
							this.urban=data.sub;//市数据
						this.townName=data.sub[1].name;//市默认选中
						angular.forEach(this.urban,function(data1){
								if(data.sub[1].name==data1.name){
									this.region=data1.sub;
									this.areaName=data1.sub[1].name;//区默认选中
								}
							})
						}else{ //二层数据  false
							var arr =[];
							arr.push({name:polis})
							this.urban= arr;  //市数据s
							this.townName=arr[0].name;
							angular.forEach(this.cities,function(data){
								if(arr[0].name==data.name){
									this.region=data.sub;
									this.areaName=data.sub[1].name;
								}
							})
							
						}
					}
				})
			}
					
		}
          
	}

    }
	
</script>

<style>
	
#dizhi{width: 100%;}	
	
	
.selectsite{
	background: #fafafa;
	width: 100%;
	height: 96.1%;
}
.consignee{
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    color: #5e5e5e;
    padding: 0.2rem;
    line-height: .2rem;
    border-bottom: 0.01rem solid #ccc;
    background-color: #fff;
}
.consignee select,.consignee input{
	width: 8rem;
    line-height: .22rem;
    margin-left: .4rem;
    border: none;
    border-left: 1px solid;
    text-indent: .15rem;
    outline:none;
    font-size: 0.16rem;
}
.consignee p{
	width: 1rem;
    text-align: center;
}
.addsite-particular{
    align-items: center;
    font-size: 0.16rem;
    color: #5e5e5e;
    padding: 0.2rem;
    line-height: .3rem;
    border-bottom: 0.01rem solid #ccc;
    background-color: #fff;
}
.particu textarea{
	width: 8rem;
    line-height: .4rem;
    margin-left: .1rem;
    border: none;
    border-left: 1px solid;
    text-indent: .1rem;
    font-size: 0.16rem;
	resize: none;
	font-size: inherit;
    color: inherit;
    outline:none;
}
.particu{
	display: flex;
    align-items: center;
    font-size: 0.16rem;
    color: #5e5e5e;
    padding: 0.2rem;
    line-height: .3rem;
    background-color: #fff;
}

.particu p{
	width: 1.6rem;
    text-align: center;
}
.number{
	width: 100%;
    font-size: 0.24rem;
    padding: 0.1rem;
    color: #b2b2b2;
    text-align: right;
}
    
</style>