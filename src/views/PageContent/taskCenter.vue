<template>
    <div class="row-start">
        <div class="width-4 bg-gray h100" >
          <div v-for="(item,index) in tabList" :key="index" @click="mouseEnter(index)" :class="[itemHoverIndex ===  index ?  'title-name1': 'title-name2','tc','pd20','border-b','showMouse' ]">
              {{item}}
          </div>
        </div>
        <div class="width-20">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane class="pd20" v-for="(item, index) in paneList" :key="index" :label="paneList[index].label" :name="paneList[index].name">
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
            <!-- 待阅信息 -->
              <el-table
                :data="tableData"
                v-if="itemHoverIndex === 1"
                :header-cell-style = "{background: '#f8f8f8'}"
                border
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
            <!-- 我发起的流程 -->
              <el-table
                :data="tableData"
                v-if="itemHoverIndex === 2"
                :header-cell-style = "{background: '#f8f8f8'}"
                border
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="流程标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="所属路经"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="操作时间">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="当前节点">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="未操作者">
                </el-table-column>
              </el-table>
            <!-- 已办流程 -->
              <el-table
                :data="tableData"
                v-if="itemHoverIndex === 3"
                :header-cell-style = "{background: '#f8f8f8'}"
                border
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="流程标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="所属路经"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="操作时间">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="当前节点">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="未操作者">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
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
        '待办事项', '待阅信息', '我发起的流程', '已办流程'
      ],
      paneList: [
        { label: '全部', name: 'first' },
        { label: '泛微OA', name: 'second' },
        { label: '宏景人力资源管理系统', name: 'third' },
        { label: '金蝶财务系统', name: 'fourth' },
        { label: 'ERP系统', name: 'fifth' },
        { label: '档案管理系统', name: 'sixth' },
        { label: '知识管理系统', name: 'seventh' }
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
  background-image: linear-gradient(to bottom, #fff566 , #ad8b00);
  color: #fff;
}
.title-name2{
}
</style>
