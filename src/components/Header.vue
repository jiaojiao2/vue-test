<template>
  <div class="header">
    <div class="head-top">
      <i class="iconfont icon-survey"></i>
      <input type="text" class="" />
      <span>消息</span>
    </div>
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
<style lang="scss" scoped>
  @import "../../static/style/common.scss";
  @import "../../static/style/header.scss";
  i{
    display:block;
    width:40px;
    height:40px;
    color:#666
  }
</style>
