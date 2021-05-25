<template>
    <div id="pageNav">
      <nav>
        <div class="flexTwoEnd">
          <div class="nav_logo flexStart">
            <img class="nav_logo_img" src="~@/assets/name.png" alt="" @click="toHome">
            <div class="nav_logo_doc">| 统一集成门户</div>
          </div>
          <div class="nav_logo flexStart mr50">
              <div class="comLi">
                 <h3><icon-font class="icon001-mailinboxapp" /></h3>
              </div>
              <div class="liLine" />
              <div class="comLi">
                  <el-dropdown @command="handleDropdown">
                    <span class="right-menu-item-text">
                      {{ hourText }},
                      <el-button type="text" class="right-menu-item-text">
                          <i class="el-icon-user-solid ml5 mr5" />{{ userName }}
                        <i class="el-icon-arrow-down ml5 mr5" />
                      </el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
                      <el-dropdown-item command="setPass">密码设置</el-dropdown-item>
                      <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
              </div>
          </div>
        </div>
         <ul class="flexStart ml70" >
              <li v-for="(item,index) in navData" :key="index" @click="currentLi(index)" :class="[navIndex === index ? 'fs18' : 'fs14']"><router-link :to="item.link" >{{item.name}}</router-link></li>
         </ul>
      </nav>
       <usercenter ref="usercenter"/>
       <edit-password ref="password"/>
    </div>
</template>
<script>
import usercenter from '@/components/usercenter'
import editPassword from '@/components/editPassword'
export default {
  components: {
    usercenter,
    editPassword
  },
  data: function () {
    return {
      navData: [{ link: '/index', name: '首页' }, { link: '/taskCenter', name: '任务中心' }, { link: '/index', name: '工程项目' }, { link: '/index', name: '政策法规' }],
      wid: 0,
      toUrl: '/imagesensor',
      userName: '管理员',
      navIndex: 0
    }
  },
  computed: {
    hourText () {
      const time = new Date()
      const hour = time.getHours()
      return hour < 9 ? '早上好' : (hour <= 11 ? '上午好' : (hour <= 13 ? '中午好' : (hour < 20 ? '下午好' : '晚上好')))
    }
  },
  methods: {
    getNav () {
      var _this = this
      // this.$http.get('/src/data/nav.data').then(function (res) {
      //   // console.log(res)
      //   _this.navData = res.data
      // })
    },
    currentLi (index) {
      this.navIndex = index
      this.$router.push({ path: this.navData[index].link })
    },
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    toHome () {
      this.$router.push('/')
    },
    handleDropdown (command) {
      switch (command) {
        case 'userCenter':
          this.$refs.usercenter.open()
          break
        case 'setPass':
          this.$refs.password.open()
          break
        case 'logout':
          this.$message.warning('此功能尚未提供')
          break
        default:
          break
      }
    },
    joinUs () {
      this.$router.push('/InviteJob')
    },
    toPic () {
      // console.log('111111')
      // // document.getElementById("product_detail1").setAttribute('style', 'display: none')
      // document.styleSheets[0].insertRule('.product_detail {display: none}', 0);
    }
  },
  mounted: function () {
    this.getNav()
    this.wid = document.querySelector(
      '#pageNav'
    ).clientWidth
    // console.log(this.wid)
  },
  created () {

  }
}
</script>
<style scoped>
  /* .headhover_a{
    color: #fff;
  }
  .headhover_a:hover{
    background-color: #3E88F1 !important
  } */
  nav{
    width:100%;
    height:100px;
    min-width: 950px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    border-bottom: 2px solid #C29953;
    background-image: url('../../assets/bg.jpg');
    background-size:100% 100%;
    z-index: 99;
  }
  .nav_logo{
    height: 60px;
  }
  .nav_logo_img{
    height: 45px;
    margin-top: 8px;
    margin-left: 30px;
    margin-right: 10px;
    font-family:'Microsoft Yahei';
    cursor: pointer;
  }
  .nav_logo_doc{
    font-size: 18px;
    color: #C29953;
    line-height: 60px;
    font-weight: 700;
  }
  .right-menu-item-text{
    color:#000;
  }
  nav>ul>li{width:120px;text-align: center;line-height: 40px;position:relative;background-color: #C29953;border-right: 1px solid rgba(0,0,0,.1);}
  nav>ul>li a{font-family:'Microsoft Yahei'; color: #fff; display: inline-block;}
  nav>ul>li a:link{width: 100%}
  nav>ul>li span{transition: all 0.3s ease;display:block; position:absolute; left:50%; width:0px; height:0px;  top:39px; left:50%;}
  nav ul>li:hover a{
    color: #fff;
  }
  .currentStyle{
    color: #004cfb;
    font-weight: 600
  }
  .comLi{
    height: 60px;
    line-height: 80px;
    font-size: 14px;
    padding: 0 10px;
  }
  .liLine{
    margin: 34px 10px 0 10px;
    width: 1px;
    height: 14px;
    background-color: #19274A;
  }
  .el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
    height: 50px;
   }
  /*
  .inTee{
    width: 104px;
    height: 22px;
    border: 1px solid #222;
    border-radius: 30px;
    margin-top: 18px;
    line-height: 22px;
    text-align: center;
    margin-right: 0
  }
  .inTee:hover li a{
    color: #fff;
  } */
  /* .liLine{
    margin: 24px 15px 0 17px;
    width: 1px;
    height: 14px;
    background-color: #19274A;
  } */
  @media screen and (max-width: 980px) {
    nav>ul>li{
      width: 90px;
    }
    .comLi{
      margin-right:0;
      padding: 0 0;
    }
    .inTee{
      width: 80px;
    }
    .product_detail_out > div{
      margin-left: 10px;
    }
    nav>ul>li a{
      font-size: 14px;
    }
    nav>ul>li:nth-child(4){
      width: 99px;
    }
    .product_h3{
      font-size: 17px;
    }
    .product_detail_out > div{
      margin-left: 40px;
    }
  }
</style>
