<template>
  <div id="index">
    <pageHeader></pageHeader>
    <pageContent></pageContent>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import PageFooter from './PageFooter'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    pageHeader: PageHeader,
    pageContent: PageContent,
    pageFooter: PageFooter
  }
  // mounted: function () {
  //   if (this.$route.path !== '/index') {
  //     this.$store.dispatch('pageContentHide')
  //   } else {
  //     this.$store.dispatch('pageContentShow')
  //   }
  // },
  // watch: {
  //   $route: function (to, from) {
  //     this.$store.dispatch('pageNumberReset') // 当路由改变时，将文章列表当前第几页的信息重置为第1页
  //     if (to.path !== '/index') {
  //       this.$store.dispatch('pageContentHide')
  //     } else {
  //       this.$store.dispatch('pageContentShow')
  //     }
  //   }
  // }
}
</script>

<style>

</style>
