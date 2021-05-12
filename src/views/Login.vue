<template>
 <div class="top-container">
   <div class="header">
      <img src="~@/assets/name.png" class="logo" alt="logo">
      <!-- <span class="title">广西交科集团有限公司
      </span> -->
      <!-- <span class="desc"> | </span>
        <span class="desc"> 统一集成门户 </span> -->
  </div>
  <div class="login-container">
    <el-form ref="form" :model="form" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">统一集成门户</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
         <i class="el-icon-user-solid"></i>
        </span>
        <el-input
          ref="username"
          v-model="form.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-lock"></i>
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="form.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <i v-if="passwordType === 'password'" class="el-icon-view"></i>
            <icon-font v-else class="iconclose-eye" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
 </div>
</template>
<script>
import { setToken } from '@/utils/auth'
import { login } from '@/api/api'
export default {
  data () {
    return {
      loading: false,
      form: {
        username: 'admin',
        password: 'admin'
        // password: 'zhlwtest123'
      },
      capsTooltip: false,
      passwordType: 'password',
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      }
    }
  },
  computed: {
    redirect () {
      return this.$route.query.redirect
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin () {
      this.$router.push({ path: this.redirect || '/' })
      this.loading = true
      login(this.form).then(res => {
        console.log('res', res)
        this.loading = false
        if (res.data.code === 0) {
          this.$router.push({ path: this.redirect || '/' })
        } else {
          this.$notify.error({
            title: '消息提示',
            message: res.message || '获取token失败',
            position: 'bottom-left'
          })
        }
      }).catch(() => {
        this.loading = false
        this.$notify.error({
          title: '消息提示',
          message: '获取token失败',
          position: 'bottom-left'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .top-container {
    width: 100%;
    height: calc(100vh - 0px);
    position: relative;
    background-image: url('../assets/jiaoke2.jpg');
    background-size: 100% 100%;
      .header {
          padding: 20px 0px 0px 20px;
          height: 40px;
          line-height: 40px;
          .title {
            font-size: 28px;
            color: rgba(0, 0, 0, .8);
            // font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-weight: 600;
            position: relative;
            top: 2px;
          }
          .logo {
            height: 50px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }
          .desc {
            font-size: 18px;
            color: rgba(0, 0, 0, 0.45);
            margin-left: 10px;
          }
        }
  }
  .login-container {
    background: rgba(40, 52, 67, .1);
    position: absolute;
    top: 15%;
    left: 40%;
    margin: 0px auto;
    width: 340px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 3px 3px 6px #fff;
    //  &:hover {
    //     box-shadow: 3px 3px 6px #fff;
    //  }
  }
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
$dark_gray:#889aa4;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
   .title-container {
      position: relative;
      .title {
        font-size: 22px;
        color: $bg;
        margin: 0px auto 30px auto;
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    .show-pwd {
      position: absolute;
      right: 14px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .svg-container {
      padding: 6px 2px 6px 12px;
      color: $light_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
   .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
     }
    }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

}
</style>
