<template>
  <div>
    <div class="home">
        <!-- <change-box /> -->
        <div class="row-start">
           <el-carousel class="width-3" height="350px" >
                <el-carousel-item v-for="item in 4" :key="item">
            </el-carousel-item>
          </el-carousel>
          <div class="width-7 ml10">
            <change-box />
          </div>
        </div>
        <div class="flexTwoEnd">
          <info-box />
          <icon-box />
          <icon-box />
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChangeBox from '@/components/ChangeBox'
import InfoBox from '@/components/InfoBox'
import IconBox from '@/components/IconBox'
import { getSysNotice } from '@/api/api'
export default {
  name: 'Home',
  components: {
    ChangeBox,
    InfoBox,
    IconBox
  },
  created () {
    const params = {
      noticeType: 1,
      pageNum: 1,
      pageSize: 10
    }
    getSysNotice(params).then()
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.home{
  margin: 2px 70px
}
/* .row-start{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
} */
.el-carousel__item:nth-child(2n){
    background-image: url('../../assets/jiaokeback.jpg');
    background-size: 100% 100%;
    }
.el-carousel__item:nth-child(2n+1){
     background-image: url('../../assets/jiaoke2.jpg');
     background-size: 100% 100%;
    }
</style>
