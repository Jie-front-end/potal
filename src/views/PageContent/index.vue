<template>
  <div>
    <div class="home">
        <div>
            <el-carousel height="300px" >
                <el-carousel-item v-for="item in 4" :key="item">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- <change-box /> -->
        <div class="flexTwoEnd">
          <info-box />
          <change-box />
        </div>
        <div class="flexTwoEnd">
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
import { queryOrderList } from '@/api/api'
export default {
  name: 'Home',
  components: {
    ChangeBox,
    InfoBox,
    IconBox
  },
  created () {
    queryOrderList().then()
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
.el-carousel__item:nth-child(2n){
    background-image: url('../../assets/jiaokeback.jpg');
    background-size: 100% 100%;

    }
.el-carousel__item:nth-child(2n+1){
     background-image: url('../../assets/jiaoke2.jpg');
     background-size: 100% 100%;
    }
</style>
