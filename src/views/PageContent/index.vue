<template>
  <div>
    <div class="home">
        <!-- <change-box /> -->
        <div class="row-start">
           <el-carousel class="width-8" height="380px" >
                <el-carousel-item v-for="item in 4" :key="item">
            </el-carousel-item>
          </el-carousel>
          <div class="width-16 ml20" style="max-height:380px">
            <change-box />
          </div>
        </div>
        <div class="row-start mt20">
          <div class="width-8">
            <div class="mb10">
               <icon-box />
            </div>
            <box3x3 />
          </div>
          <div class="width-16 ml20">
            <info-box />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChangeBox from '@/components/ChangeBox'
import InfoBox from '@/components/InfoBox'
import IconBox from '@/components/IconBox'
import Box3x3 from '@/components/box3x3'
import { getSysNotice } from '@/api/api'
export default {
  name: 'Home',
  components: {
    ChangeBox,
    InfoBox,
    IconBox,
    Box3x3
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
