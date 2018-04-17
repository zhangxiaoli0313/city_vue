<template>
  <div class="city">
    <div class="top">
      <span @click="toDetail">
        <i class="icon iconfont icon-zuojiantou1"></i>
      </span>
      <h4>上牌地址</h4>
      <span></span>
    </div>
    <div class="bigBox">
      <div class="left">
        <ul v-for='(item, index) in listUI' :key='index'>
          <li v-html="item[0].province"></li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import '@/static/font/iconfont.css'
import '@/css/city.css'
import axios from 'axios'
export default {
  name: 'city',
  data() {
    return {
      listUI: null
    }
  },
  methods: {
    toDetail() {
      this.$router.push('/detail')
    }
  },
  beforeRouteEnter(el, from, next) {
    axios('/api/provinceCity')
      .then((data) => {
        next((vm) => {
          vm.listUI = data.data.city
        })
      })
  }
}
</script>