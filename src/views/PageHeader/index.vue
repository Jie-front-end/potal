<template>
    <div id="pageNav">
      <nav>
        <div class="flexTwoEnd">
          <div class="nav_logo flexStart">
            <img class="nav_logo_img" src="~@/assets/name.png" alt="" @click="toHome">
            <div class="nav_logo_doc">| 统一集成门户</div>
          </div>
          <div class="nav_logo flexStart mr30">
            <div class="comLi langChange">
                <li style="margin-left:5px;"><a href="javascript:void(0)">中文<span style="color:#999">/English</span></a></li>
              </div>
              <div class="liLine"></div>
              <div class="comLi inTee">
                <li class="disabled"><a href="#">进入TEE AI</a></li>
              </div>
          </div>
        </div>
         <ul class="flexStart ml30" >
              <li v-for="(item,index) in navData" :key="index" @click="currentLi(index)"><router-link :to="item.link" >{{item.name}}</router-link></li>
         </ul>
      </nav>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      navData: [{ link: '/index', name: '首页' }, { link: '/index', name: '流程中心' }, { link: '/index', name: '工程项目' }, { link: '/index', name: '运营管理' }, { link: '/index', name: '董事长信箱' }],
      wid: 0,
      toUrl: '/imagesensor'
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
      // console.log(index)
    },
    toHome () {
      this.$router.push('/')
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
    z-index: 99;
  }
  .flexTwoEnd{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .flexStart{
    display: flex;
    flex-direction: row;
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
  }
  nav>ul>li{width:120px;text-align: center;line-height: 40px;position:relative;color:#000;}
  nav>ul>li:fisrt-child(1){
      background-color: #C29953;
      width: 99px;
  }
  nav>ul>li a{font-family:'Microsoft Yahei';font-size:14px;display: inline-block;color:#000;text-decoration:none;}
  nav>ul>li a:hover{text-decoration:none;}
  nav>ul>li a:link{color:#000;width: 100%}
  nav>ul>li span{transition: all 0.3s ease;display:block; position:absolute; left:50%; width:0px; height:0px; background-color:#000; top:39px; left:50%;}
  nav>ul>li:hover{
    background-color: #C29953;
    color: #fff;
    font-size: 13px;
  }
  .product_detail_out a, .solve_detail a{
    width: 100%;
    height: 25px;
    border-radius: 3px;
  }
  .product_detail_out a:hover, .solve_detail a:hover{
    background-color: #3E88F1 !important;
  }
  nav ul>li:hover a{
    color: #fff;
  }
  .currentStyle{
    color: #004cfb;
    font-weight: 600
  }
  .comLi{
    height: 60px;
    /* float: right; */
    line-height: 60px;
    font-size: 14px;
    padding: 0 10px;
    margin-right: 30px;
  }
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
  .inTee:hover{
    /* background-color: #19274A; */
  }
  .inTee:hover li a{
    color: #fff;
  }
  .liLine{
    /* float: right; */
    margin: 24px 15px 0 17px;
    width: 1px;
    height: 14px;
    background-color: #19274A;
  }
  .product_detail, .solve_detail{
    width: 100%;
    height: 125px;
    background-color: rgba(0, 0, 0, .7);
    display: block;
    position: fixed;
    left: 0;
    display: none;
    z-index: 110;
  }
  .product_detail_out{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .product_detail_out ul a:hover, .solve_check_ul a:hover{
    color: #fff;
  }
  .product:hover .product_detail, .aboutUs:hover{
    display: block;
  }
  .solve:hover .solve_detail{
    display: block;
  }
  .product_detail_out > div, .solve_detail > div{
    float: left;
    color: #fff;
    margin-left: 35px
  }
  .product_detail_out > div li, .solve_detail > div li{
    color: #fff;
    display: block;
    line-height: 25px;
  }
  .product_detail_out ul>li{
    font-size: 14px;
  }
  .product_h3{
    font-size: 17px;
    height: 53px;
    border-bottom: 1px solid #999;
    margin-bottom: 3px;
  }
  .aboatUs_div{
    /* background-color: rgba(25,39,74, 0.7); */
    background-color: rgba(0, 0, 0, .7) !important;
    display: none;
  }
  .aboatUs_div a{
    height: 25px;
    padding: 2px 5px;
    border-radius: 3px;
    line-height: 25px;
  }
  .aboatUs_div a:hover{
    background-color: #3E88F1;
  }
  .aboutUs:hover .aboatUs_div{
    display: block
  }
  .langChange{
    padding: 0 0;
    display: flex;
    align-items: center;
  }
  .langChange:before{
    display: inline-block;
    content: '';
    /* background: url("~@/assets/logo.png") no-repeat center; */
    width: 19px;
    height: 19px;
  }
  .check_ul_li2>a{
    position: relative;
  }
  .disabled>a{
    pointer-events: none;
    color: #999 !important;
    cursor: no-drop;
  }
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
