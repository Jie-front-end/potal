<template>
  <div class="container single-feature">
      <div class="title">
        <div class="title-name">
          <h3><icon-font class="iconnotice mr10" />通知公告</h3>
        </div>
        <div class="more"><a href="">更多 ></a></div>
      </div>
      <div class="content">
        <div class="flexRow">
           <div v-for="item,index in 6" :key="index" class="flexStartCol width30">
              <div :class="['icon' ,'flexCenter', index%3 === 0?  'bluebg' :index%3 === 1 ? 'yellowbg' : 'greenbg' ]">
                   <icon-font size="20" color="white" class="icon001-mailinboxapp" />
              </div>
              <div class="text mt10 fs14">
                   应用管理系统
              </div>
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
  width:800px;margin-top:17px;
}
.title{
  height:36px;border-bottom:3px solid #C29953;
  display: flex;
  justify-content: space-between;
  }
.title .title-name{
  width:120px;
  height:36px;
  background:#C29953;
  color:#fff;
  line-height:36px;
  border-radius: 8px 8px 0px 0px;
  }
.title .title-name h3{
  margin-left:10px;
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
   display: flex;
   flex-direction: column;
   padding: 10px 20px;
   .icon{
     width: 60px;
     height: 60px;
     border-radius: 6px;
   }
   .text{
     width: 60px;
     text-align: center
   }
}
.flexRow{
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.width30{
  width: 30%;
}
.bluebg{
  background: rgb(9,171,252);
}
.yellowbg{
  background: rgb(255,103,1);
}
.greenbg{
  background: rgb(3,219,190);
}
</style>
