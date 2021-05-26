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
                v-if="itemHoverIndex === 0"
                :data="tableData"
                border
                :header-cell-style = "{background: '#f8f8f8'}"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="待办标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="待办来源"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="创建人">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="创建时间">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="未操作者">
                </el-table-column>
              </el-table>
              <el-table
                v-else
                :data="tableData"
                border
                :header-cell-style = "{background: '#f8f8f8'}"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="待阅标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="待阅来源"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="创建人">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="创建时间">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="未操作者">
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
      tabList: [
        '待办事项', '待阅事项'
      ]
    }
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
