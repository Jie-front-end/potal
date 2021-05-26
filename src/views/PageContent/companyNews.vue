<template>
  <div>
      <div class="mt10 ml70 mb10">
         <i class="el-icon-location-outline" />
         <span> 当前位置：<router-link class="color-blue2" to="/index" >首页 </router-link> > </span>
         <span class="color-blue2"> {{$route.name}} </span>
      </div>
      <div class="row-start">
          <div class="width-4 bg-gray h100" >
            <div v-for="(item,index) in tabList" :key="index" @click="mouseEnter(index)" :class="[itemHoverIndex ===  index ?  'title-name1': 'title-name2','tc','pd20','border-b','showMouse' ]">
                {{item}} <i v-if="itemHoverIndex ===  index" class="el-icon-caret-right" />
            </div>
          </div>
          <div class="width-20 ml20">
                <!-- 待办事项 -->
          <el-table
            border
            :header-cell-style = "{background: '#f8f8f8'}"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              type="index"
              label="序号"
              width="100">
            </el-table-column>
            <el-table-column
              label="新闻标题"
              prop="date">
            </el-table-column>
            <el-table-column
              label="发布时间"
              prop="name">
            </el-table-column>
            <el-table-column
              label="发布人"
              prop="name">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
            </el-table-column>
          </el-table>
          </div>
      </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      itemHoverIndex: 0,
      activeName: 'first',
      tableData: [],
      tabList: [
        '公司新闻', '企业文化', '消息公告'
      ]
    }
  },
  created () {
    console.log('router', this.$route)
  },
  methods: {
    mouseEnter (index) {
      this.itemHoverIndex = index
    }
  }
}
</script>

<style scoped>
.title-name1{
  /* background-image: linear-gradient(to bottom, #f0f0f0 , #bfbfbf); */
  background-image: linear-gradient(to bottom, #ffa940 , rgb(194,153,83));
  color: #fff;
}
.title-name2{
}
</style>
