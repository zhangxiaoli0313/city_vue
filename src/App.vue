<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
    <Foot />
  </div>
</template>

<script>
import Foot from './components/foot/foot'
export default {
  components: {
    Foot: Foot
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app,.hello{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
section{
  flex: 1;
}
footer{
    height: 50px;
    width: 100%;
    background: #AEEEEE;
    border-top: 1px solid #CD96CD;
}
footer ul{
    display: flex;
}
footer ul li{
    flex: 1;
    text-align: center;
    line-height: 50px;
}
footer ul li a{
  text-decoration: none;
  color: red;
}
</style>
