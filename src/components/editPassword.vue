<template>
  <el-dialog title="修改密码" :close-on-click-modal="false" :visible.sync="visible" width="500px">
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" class="mr10" label-width="90px">
      <el-form-item label="旧密码" prop="pass">
        <el-input type="password" v-model="ruleForm.passOld" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="tc mt20">
      <el-button :loading="loading" :disabled="loading" type="primary" @click="submit">提交</el-button>
      <el-button :loading="loading" :disabled="loading" type="danger" @click="visible = false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { postAction } from '@/api/manage'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      visible: false,
      ruleForm: {
        passOld: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        passOld: [
          { validator: validatePass, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {

  },
  methods: {
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.$refs.ruleForm.resetFields()
      })
    },
    submit (val) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.loading = true
          postAction(this.url, this.ruleForm).then(res => {
            if (res.data.code === 0) {
              this.$message({ showClose: true, message: res.data.message, type: 'success' })
            } else {
              this.$message({ showClose: true, message: res.data.message, type: 'warning' })
            }
            this.loading = false
            this.visible = false
          }).catch(() => {
            this.loading = false
            this.visible = false
          })
        }
      })
    }
  }
}
</script>
