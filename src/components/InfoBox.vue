<template>
  <div class="container">
      <div class="title">
        <div class="title_name">
          <h3>通知公告</h3>
        </div>
        <div class="more"><a href="">更多</a></div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width:1200px;height:320px;border:1px solid #999;margin-top:17px;
}
.title{height:36px;border-bottom:3px solid #B40E02;}
.title .title_name{float:left;width:120px;height:36px;background:url(/static/img/title_bg.png);color:#fff;line-height:36px;}
.title .title_name h3{display:block; margin-left:40px;font-size: 17px;font-family:'Microsoft Yahei';}
.title .more{float:right;width:45px;height:15px;margin-top:16px;margin-right:20px;}
.title .more a{font-size: 12px;color:#999;}

</style>
