<template>
  <div class="hello">
    <header-nav :highlight="index"></header-nav>
    <home-page></home-page>
    <common-footer></common-footer>
  </div>
</template>

<script>
import headerNav from './_header'
import homePage from './content/homePage'
import commonFooter from './_footer'
export default {
  name: 'index',
  components: {
    headerNav,
    homePage,
    commonFooter
  },
  data () {
    return {
      index: 0
    }
  }
}
</script>

<style scoped>
</style>
