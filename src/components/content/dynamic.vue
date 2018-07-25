<template>
    <div>
        <header-nav :highlight="index"></header-nav>
        <div class="content_dynamic">
            <router-view @getArticle="article"></router-view>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
import headerNav from '../_header'
import commonFooter from '../_footer'
export default {
  name: 'dynamic',
  components: {
    headerNav,
    commonFooter
  },
  data () {
    return {
      index: 1,
      artice: {
        url: ''
      }
    }
  },
  methods: {
    article: function (obj) {
      this.$router.push({path: '/dynamic/content', query: obj})
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../style/dynamic";
</style>
