<template>
    <div class="dynamic">
        <div class="title">
            <ul class="title_head" id="title_head">
                <li><a href="javascript:void(0)" @click="getAllData($event, -1)" class="text_color text">全部</a></li>
                <li><a href="javascript:void(0)" @click="getAllData($event, 0)" class="text">动态</a></li>
                <li><a href="javascript:void(0)" @click="getAllData($event, 1)" class="text">活动</a></li>
            </ul>
            <span class="title_body">您的位置：一块抓娃娃 > <span class="text_color">动态中心</span></span>
        </div>
        <article-list v-for="item in data1" :dynamic="item" :key="item.id" @view="viewDetails"></article-list>
        <div class="page">
            <span class="pre" @click="pre">上一页</span>
            <span class="page_size">{{page}}/{{Math.ceil(total/size)}}</span>
            <span class="next" @click="next">下一页</span>
        </div>
    </div>
</template>

<script>
import articleList from '@/components/card'
export default {
  name: 'dynamicData',
  components: {
    articleList
  },
  data () {
    return {
      data1: [],
      page: 1,
      size: 8,
      type: -1,
      total: 10
    }
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    getAllData: function (e, type) {
      for (let i = 0; i < document.getElementsByClassName('text').length; i++) {
        document.getElementsByClassName('text')[i].setAttribute('class', 'text')
      }
      e.target.className = 'text text_color'
      this.type = type
      this.page = 1
      this.getData()
    },
    // 获取数据
    getData: function () {
      this.$util.ajax('get', '/admin/ar/list', {page: this.page, size: this.size, type: this.type}, (res) => {
        this.data1 = res.data.data.result
        this.total = res.data.data.total
      })
    },
    next: function () {
      // 下一页
      if ((this.page + 1) <= Math.ceil(this.total / this.size)) {
        this.page = this.page + 1
        this.getData()
      }
    },
    pre: function () {
      if ((this.page - 1) > 0) {
        this.page = this.page - 1
        this.getData()
      }
    },
    viewDetails: function (obj) {
      // 点击card 查看文章详情
      this.$emit('getArticle', obj)
    }
  }
}
</script>

<style scoped lang="scss">
    @import "../../style/dynamic";
</style>
