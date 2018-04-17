<template>
  <header class="header">
    <span @click='toDetail'>
      <b :class="string.length>4?'citys':''" v-html="string.length>4?string.slice(0,3)+'...':string"></b>
    </span>
    <span><input type="text" placeholder="请输入搜索的内容"></span>
    <span>
      <i class="icon iconfont icon-search_list"></i>
    </span>
  </header>
</template>
<script>
import '@/static/font/iconfont.css'
export default {
    data() {
        return {
            string: returnCitySN['cname'].split('市')[0] + '市'
        }
    },
    created() {
        console.log(this.$route.query.city)
        if (this.$route.query.city) {
            this.string = this.$route.query.city
        }
    },
    methods: {
        toDetail() {
            this.$router.push('/detail')
        }
    }
}
</script>
<style>
.header{
    width: 100%;
    height: 50px;
    background: #AEEEEE; 
    border-bottom: 1px solid #CD96CD;
    display: flex;
    line-height: 50px;
    text-align: center;
}
.header span:nth-child(1){
    flex: 20%;
    border-right: 1px solid #9AFF9A;
}
.header span:nth-child(2){
    flex: 60%;
    border-right: 1px solid #9AFF9A;
}
.header span:nth-child(2) input{
    width: 80%;
    margin-left: 10%;
    line-height: 30px;
    border: 1px solid #ccc;
    border-radius: 7px;
}
.header span:nth-child(3){
    flex: 20%;
}
.header span:nth-child(3) i{
    font-size: 20px;
    color: #EE7AE9;
}
</style>
