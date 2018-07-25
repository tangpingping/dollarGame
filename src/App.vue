<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  mounted: function () {
    (function (doc, win) {
      let docEl = doc.documentElement
      let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
      let recalc = function () {
        let clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = 16 * (clientWidth / 750) + 'px'
        // console.log(16 * (clientWidth / 750) + 'px')
      }
      if (!doc.addEventListener) return
      win.addEventListener(resizeEvt, recalc, false)
      doc.addEventListener('DOMContentLoaded', recalc, false)
    })(document, window)
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        /*图标字体抗锯齿属性*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*transition: all 0.5s;*/
    }
    *{
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* to preserve line-height and selector appearance */
    sup {
        vertical-align:text-top;
    }
    sub {
        vertical-align:text-bottom;
    }
    input,
    button,
    textarea,
    select {
        font-family:inherit;
        font-size:inherit;
        font-weight:inherit;
        width:auto;
        overflow:visible;
    }
    /*because legend doesn't inherit in IE */
    legend {
        color:#000;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:normal;
    }
    /* end reset css */
    html,
    body {
        height:100%;
    }
    a,a:active{
        color:#333;
        text-decoration:none;
        outline:none;
    }
    /*float clear*/
    .clear:after {
        content: "\200c";
        display :block;
        height: 0;
        font-size: 0;
        clear: both;
    }
    .none{
        display:none;
        overflow:hidden;
    }

    body {
        color:#333;
        font-family:"Microsoft YaHei", Arial, Verdana, serif;
        font-size:14px;
        /*line-height:1.4;*/
        -webkit-user-select:none; /* 禁止选择 */
        -webkit-touch-callout:none; /* 禁用弹出 */
        /*overflow: hidden;*/
        /*line-height: 0;*/
    }
</style>
