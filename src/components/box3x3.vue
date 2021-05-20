<template>
  <div class="container pb10 single-feature">
      <div class="title">
        <div class="title-name">
          <h3><icon-font class="iconnotice mr10" />常用功能</h3>
        </div>
        <div class="more"><a href=""><span class="color-blue2">更多 >></span></a></div>
      </div>
      <div class="content">
        <div class="row-start wrap">
           <div v-for="item,index in 6" :key="index" class="mt10 width-8 row-spacea">
              <div class="row-start">
                  <div class="icon center">
                      <icon-font size="18" class="icon001-mailinboxapp" />
                  </div>
                  <div class="mt10 fs14">
                    <span>管理系统 </span>
                  </div>
              </div>
                <el-divider v-if="index % 3 !== 2" class="mt10 ml10" direction="vertical" />
           </div>
        </div>
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
<style scoped lang="scss">
.container{
  width:100%;
}
.title{
  height:36px;border-bottom:3px solid #C29953;
  display: flex;
  justify-content: space-between;
  }
.title .title-name{
  width:120px;
  height:35px;
  background:#C29953;
  color:#fff;
  line-height:35px;
  border-right: 1px solid #C29953;
 }
.title .title-name h3{
  margin-left:10px;
  font-family:'Microsoft Yahei';
  }
.title .more{
  width:60px;
  margin-top:10px;
  margin-right:10px;
  }
.title .more a{
  font-size: 14px;
  }
.content{
   display: flex;
   flex-direction: column;
   padding: 10px 20px;
   .icon{
     width: 40px;
     height: 40px;
   }
}
.flexRow{
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
