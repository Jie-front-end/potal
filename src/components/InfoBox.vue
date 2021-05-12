<template>
  <div class="container single-feature">
      <div class="title">
        <div class="title_name">
          <h3><icon-font class="iconnotice mr10" />通知公告</h3>
        </div>
        <div class="more"><a href="">更多 ></a></div>
      </div>
      <div class="content">

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
  width:800px;height:320px;margin-top:17px;
}
.title{
  height:36px;border-bottom:3px solid #C29953;
  display: flex;
  justify-content: space-between;
  }
.title .title_name{
  width:120px;
  height:36px;
  background:#C29953;
  color:#fff;
  line-height:36px;
  border-radius: 8px 8px 0px 0px;
  }
.title .title_name h3{
  margin-left:10px;
  font-size: 17px;
  font-family:'Microsoft Yahei';
  }
.title .more{
  width:45px;
  height:15px;
  margin-top:16px;
  margin-right:10px;
  }
.title .more a{
  font-size: 14px;
  color:#999;
  }
.content{

}
</style>
