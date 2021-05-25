<template>
  <div class="container single-feature">
      <div class="title">
        <div class="changeTitle">
            <div v-for="(item,index) in 3" :key="index" @mouseenter="mouseEnter(index)" :class="[itemHoverIndex ===  index ?  'title-name1': 'title-name2']">
              <h3 class="ml10"><icon-font class="iconnotice mr10" />{{titleList[index]}}</h3>
            </div>
        </div>
        <div class="more"><a href="">更多 >></a></div>
      </div>
      <div class="content">
        <div class="border-b pt10 pb10">
            <div class="newsTitle mb10 fs20 tc color-blue3 fw500">今日头条新闻</div>
            <div class="tc color-black1">2021年5月13日，集团公司副总经理李祖文<a href="" class="fs12 tc color-blue2">[详细]</a></div>
        </div>
         <div v-for="item,index in 5" :key="index" class="flexTwoEnd single-news">
              <div class="text mr20 width-22">
                 <span :class="[ index > 2 ? 'num':'numTop', 'mr10' ]">
                  {{index +1}}
                 </span>
                    2021年5月13日，集团公司副总经理李祖文、集团公司安全部部长唐茄槐、事业部副总经理朱其义一行到蒙象路项目举行揭牌仪式并调研指导工作，
              </div>
              <div class="time width-2">
                   05-13
              </div>
         </div>
         <div class="row-end">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="5"
                layout="total, prev, pager, next"
                :total="200">
            </el-pagination>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    titleList: {
      type: Array,
      default: () => ['公司新闻', '企业文化', '消息公告']
    }
  },
  data () {
    return {
      itemHoverIndex: 0
    }
  },
  methods: {
    mouseEnter (index) {
      this.itemHoverIndex = index
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  width:100%;
  margin-top:2px;
}
.title{
  height:35px;border-bottom:2px solid #C29953;
  background: rgb(235,235,235);
  display: flex;
  justify-content: space-between;
}
.changeTitle {
  display: flex;
}
.title .title-name1{
  width:120px;
  height:35px;
  background:#C29953;
  color:#fff;
  line-height:35px;
  border-right: 1px solid #C29953;
  // border: 1px solid #C29953;
 }
.title .title-name2{
  width:120px;
  height:35px;
  color:#C29953;
  line-height:35px;
  border-right: 1px solid #fff;
 }
.title .more{
  width:60px;
  margin-top:10px;
  margin-right:10px;
  }
.title .more a{
  font-size: 14px;
  color:#1890ff;
  }
.content{
   display: flex;
   flex-direction: column;
   padding: 10px 20px;
}
.single-news {
  height: 42px;
  line-height: 42px;
  color: rgba(0,0,0,0.6);
  border-bottom: 1px dotted rgba(0,0,0,0.6);
  &:hover{
    color: #000;
    cursor: pointer;
  }
}
.time{
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
