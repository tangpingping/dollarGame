<template>
    <div class="nav">
        <div class="nav-p">
            <span><img src="../assets/index/pc/logo.png" alt="logo"></span>
            <div class="nav-p-right">
                <ul>
                    <li><router-link to="/">一块抓娃娃</router-link></li>
                    <li><router-link to="/dynamic/data">动态中心</router-link></li>
                    <li><a href="//www.lagou.com/gongsi/147569.html" target="_blank">加入我们</a></li>
                    <li><a href="//forkeji.com/" target="_blank">关于我们</a></li>
                </ul>
            </div>
        </div>
        <div class="nav-m">
            <span class="nav-m-left"><img src="../assets/index/m/logo_m.png" alt="logo"></span>
            <span class="nav-m-right"><img src="../assets/index/m/menu.png" alt="menu" @click="menuOpen" v-if="menuStatus"></span>
            <span class="close"><img src="../assets/index/m/close.png" alt="close" @click="menuClose" v-if="!menuStatus"></span>
            <div class="menu-extend" v-if="!menuStatus">
                <ul>
                    <li><router-link to="/"><img src="../assets/index/m/claw_together.png" alt=""></router-link></li>
                    <li><router-link to="/dynamic/data"><img src="../assets/index/m/action.png" alt=""></router-link></li>
                    <li><a href="//www.lagou.com/gongsi/147569.html"><img src="../assets/index/m/join_us.png" alt=""></a></li>
                    <li><a href="//forkeji.com/"><img src="../assets/index/m/about_us.png" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'headerNav',
  props: ['highlight'],
  data () {
    return {
      index: this.highlight,
      // 关闭显示与否
      menuStatus: true
    }
  },
  mounted: function () {
    document.getElementsByClassName('nav-p-right')[0].children[0].children[this.index].children[0].style.color = '#429aeb'
  },
  methods: {
    menuOpen: function () {
      // 菜单打开
      this.menuStatus = false
    },
    menuClose: function () {
      // 菜单关闭
      this.menuStatus = true
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../style/header-nav";
</style>
