<template>
  <div class="container single-feature">
      <div class="title">
        <div class="changeTitle">
            <div class=title-name1>
              <h3 class="ml10"><icon-font class="icondaiban mr10" />待办事宜</h3>
            </div>
        </div>
        <div class="more"><router-link to="/waitHandle" >更多 >></router-link></div>
      </div>
      <div class="content">
         <div class="row-start mt10 mb10">
            <div v-for="(item,index) in handleList" :key="index" @mouseenter="mouseEnter(index)" :class="[itemHoverIndex ===  index ?  'color-blue2': 'color-black','showMouse']">
              <span class="ml10 fs14 fw600">{{handleList[index].key}}({{handleList[index].num}})</span> <el-divider v-if="index !== handleList.length - 1" direction="vertical" />
            </div>
         </div>
         <div v-for="item,index in 7" :key="index" class="row-spaceb single-news">
              <div class="text width-22 mr20">
                 <span :class="[ index > 2 ? 'num':'numTop', 'mr10' ]">
                  {{index +1}}
                 </span>
                    2021年5月13日，集团公司副总经理李祖文、集团公司安全部部长唐茄槐、事业部副总经理朱其义一行到蒙象路项目举行揭牌仪式并调研指导工作，
              </div>
              <div class="time width-2">
                   05-13
              </div>
         </div>
         <div class="row-end mt10">
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
    height: {

    },
    handleList: {
      type: Array,
      default: () => [{ key: '待办', num: 100 }, { key: '待阅', num: 100 }]
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
