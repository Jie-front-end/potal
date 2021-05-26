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
        <div class="width-20 mg20">
              <div v-for="(item, index) in appList" :key="index" >
                   <i class="el-icon-link fs18 mr10" />
                   <a href="" class="showBlue">{{appList[index]}}</a>
                 <el-divider />
              </div>
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
        '应用中心'
      ],
      appList: [
        'OA系统', '人力系统', '财务系统', 'ERP系统', '科技信息管理系统', '知识管理系统', '档案管理系统', '管理驾驶舱'
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
