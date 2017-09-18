<template>
  <div class="footer">
    <router-link to="/" class="list-item">
      <i class="iconfont icon-all"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/weitao" class="list-item">
      <i class="iconfont icon-account"></i>
      <span>微淘</span>
    </router-link>
    <router-link to="/found" class="list-item">
      <i class="iconfont icon-survey"></i>
      <span>发现</span>
    </router-link>
    <router-link to="/cart" class="list-item">
      <i class="iconfont icon-account"></i>
      <span>购物车</span>
    </router-link>

  </div>
</template>
<script>
var _=require("lodash");
import Vue from 'vue'
export default {
  name: 'footer',
  data () {
    return{

    }
  },
  methods:{



  },
  computed:{

  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../static/style/common.scss";
  @import "../../static/style/footer.scss";
</style>
