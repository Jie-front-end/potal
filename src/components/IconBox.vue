<template>
  <div class="container pb20 single-feature">
      <div class="title">
        <div class="title-name">
          <h3><icon-font class="iconcrew_feature mr10" />应用中心</h3>
        </div>
        <div class="more"><router-link class="color-blue2" to="/appCenter" >更多 >></router-link></div>
      </div>
      <div class="content">
        <div class="row-start wrap">
           <div v-for="item,index in functionList" :key="index" class="mt10 width-6 row-center">
             <div class="col-start">
                <div class="icon center showMouse bg-blue1" @click="openNew(functionList[index].url)">
                    <icon-font size="20" color="white" :class="[functionList[index].icon]" />
                </div>
                <div class="text mt10 fs8">
                    {{functionList[index].name}}
                </div>
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
  },
  data () {
    return {
      functionList: [
        { color: 'blue', icon: 'icontongxunlu', name: 'OA系统', url: 'http://10.0.150.129:3000/' },
        { color: 'rgb(49,176,107)', icon: 'iconHR', name: '人力系统', url: 'http://10.0.150.129:3000/' },
        { color: 'green', icon: 'iconcaiwu', name: '财务系统', url: 'http://10.0.150.129:3000/' },
        { color: 'black', icon: 'iconrenliziyuan', name: 'ERP系统', url: 'http://10.0.150.129:3000/' },
        { color: 'black', icon: 'icondongtai', name: '科信管理系统', url: 'http://10.0.150.129:3000/' },
        { color: 'rgb(244,157,68)', icon: 'iconzhinenghua', name: '知识管理系统', url: 'http://10.0.150.129:3000/' },
        { color: 'rgb(244,157,68)', icon: 'icondaiban', name: '档案管理系统', url: 'http://10.0.150.129:3000/' },
        { color: 'rgb(244,157,68)', icon: 'iconzhongyaojihui', name: '管理驾驶舱', url: 'http://10.0.150.129:3000/' }
      ]
    }
  },
  methods: {
    openNew (url) {
      window.open(url)
    }
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
     width: 45px;
     height: 45px;
     border-radius: 6px;
   }
   .text{
     width: 50px;
     text-align: center
   }
}
.flexRow{
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
