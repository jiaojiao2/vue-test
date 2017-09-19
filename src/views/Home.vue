<template>
  <div class="hello">
    <mjHeader></mjHeader>
    <mjBanner></mjBanner>
    <div class="contTop">
      <ul class="contTopUl">
        <li>
          <img src="" alt="">
          <span>淘抢购</span>
        </li>
        <li></li>
      </ul>
      <ul class="contTopUl">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <mjFooter></mjFooter>
  </div>
</template>

<script>
import mjFooter from '../components/Footer'
import mjHeader from '../components/Header'
import mjBanner from '../components/Banner'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'mjFooter':mjFooter,
    'mjHeader':mjHeader,
    'mjBanner':mjBanner,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
