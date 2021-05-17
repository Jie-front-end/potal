<template>
  <div class="container single-feature">
      <div class="title">
        <div class="title-name">
          <h3><icon-font class="iconnotice mr10" />通知公告</h3>
        </div>
        <div class="more"><a href="">更多 ></a></div>
      </div>
      <div class="content">
         <div v-for="item,index in 6" :key="index" class="flexTwoEnd single-news">
              <div class="text mr20">
                 <span :class="[ index > 2 ? 'num':'numTop', 'mr10' ]">
                  {{index +1}}
                 </span>
                    2021年5月13日，集团公司副总经理李祖文、集团公司安全部部长唐茄槐、事业部副总经理朱其义一行到蒙象路项目举行揭牌仪式并调研指导工作，
              </div>
              <div class="time mr10">
                   05-13
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
}
.single-news {
  height: 36px;
  line-height: 36px;
  color: rgba(0,0,0,0.6);
  border-bottom: 1px dotted rgba(0,0,0,0.6);
  &:hover{
    color: #000;
    cursor: pointer;
  }
}
.time{
    width: 50px;
    font-size: 13px;
}
.text{
  font-size: 14px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap

}
.numTop{
   display: inline-block;
   padding: 0px 5px;
   height: 16px;
   line-height: 16px;
   background: #C29953;
   color: #fff;
   border-radius: 4px;
  font-size: 13px;
}
.num{
   display: inline-block;
   padding: 0px 5px;
   height: 16px;
   line-height: 16px;
   background: rgba(0,0,0,0.2);
   color: #fff;
   border-radius: 4px;
  font-size: 13px;
}

</style>
