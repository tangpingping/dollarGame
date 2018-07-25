<template>
    <div class="dynamic">
        <div class="title">
            <ul class="title_head"><li>{{title}}</li></ul>
            <span class="title_body">您的位置：一块抓娃娃 > <router-link to="/dynamic/data">动态中心</router-link> > <span class="text_color">正文</span></span>
            <span class="title_body date">{{date}}</span>
        </div>
        <span v-if="loading">文章加载中。。。。。。。。请稍后</span>
        <div v-html="html"></div>
    </div>
</template>

<script>
export default {
  name: 'articleContent',
  data () {
    return {
      id: this.$route.query.id,
      html: '',
      title: this.$route.query.title,
      date: this.$route.query.date,
      loading: true
    }
  },
  mounted: function () {
    this.$util.ajax('get', '/admin/ar/index', {id: this.id}, (res) => {
      this.html = res.data.data
      this.loading = false
    }, this)
  }
}
</script>

<style scoped lang="scss">
    @import "../../style/dynamic";
</style>
