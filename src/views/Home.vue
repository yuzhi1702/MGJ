<template>
    <div id="home">
     <div id="nice">
        <p>{{name}}</p>
       <!-- <p v-for='item in listImg'><img :src="item.url" alt="" /></p>-->
        <Lunbos :message="listImg"></Lunbos>
        <Contents></Contents>
     </div>
    </div>
</template>

<script>
	import Lunbos from '../components/Lunbos'
    import Contents from '../components/Contents'
    import a from '../assets/mgj1.jpg'
    import b from '../assets/mgj2.jpg'
    import c from '../assets/mgj3.jpg'
    import d from '../assets/mgj4.jpg'
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
                }]
            }
        },
         components:{
         Lunbos,Contents
       },
        mounted(){
        	this.$http.get('static/json/home.json').then(function(res){
        		this.arr1=res.body.data[4604].list,
        		console.log(res.body.data[4604].list)
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
