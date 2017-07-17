<template>
    <div id="home">
     <div id="nice">
        <p>{{name}}</p>
       <!-- <p v-for='item in listImg'><img :src="item.url" alt="" /></p>-->
        <Lunbos :message="listImg"></Lunbos>
        <Contents :message="arr1"></Contents>
        <Contenleng :message="arr2"></Contenleng>
        <Catrsth :message="arr3"></Catrsth>
        <Vtwo :message="arr4"></Vtwo>
        <Btus :message="arr5"></Btus>
     </div>
    </div>
</template>

<script>
	import Lunbos from '../components/Lunbos'
    import Contents from '../components/Contents'
    import Contenleng from '../components/Contenleng'
    import Catrsth from '../components/Catrsth'
    import Vtwo from '../components/Vtwo'
    import Btus from '../components/Btus'
    import a from '../assets/mgj1.jpg'
    import b from '../assets/mgj3.jpg'
    import d from '../assets/mgj2.jpg'
    import c from '../assets/mgj4.jpg'
    import e from '../assets/mgj5.jpg'
    
    export default {
        name: 'home',
        data () {
            return {
                name: '我是home',
//              age:'sdiuds'
                listImg: [{
                    url: a
                }, {
                    url: b
                }, {
                    url: c
                }, {
                    url: d
                }, {
                    url: e
                }],
                arr1:[],
                arr2:{},
                arr3:{},
                arr4:{},
                arr5:{}
            }
        },
         components:{
         Lunbos,Contents,Contenleng,Catrsth,Vtwo,Btus
       },
        mounted(){
        	this.$http.get('static/json/home.json').then(function(res){
        		this.arr1=res.body.data[51827].list,
        		this.arr2=res.body.data[41119].list,
        		this.arr3=res.body.data[51833].list,
        		this.arr4=res.body.data[51836].list
        	}),
        	
        	this.$http.get('static/json/contens.json').then(function(res1){
      	    this.arr5=res1.body.data.list,
			console.log(res1.body.data.list)
			console.log(res1)
        	})
        }
   }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
	font-size: 0.1rem;
}
#nice{
	width: 100%;
	height: 2rem;
	background: blue;
}
</style>
