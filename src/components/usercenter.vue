<template>
  <el-dialog title="个人中心" :close-on-click-modal="false" :visible.sync="visible" width="1000px">
      <div class="row-start">
        <div class="width-10 box-shadow">
           <div class="pd20">
             <div class="center  border-b">
                 <el-avatar size="large"  icon="el-icon-user-solid"></el-avatar>
                 <p>用户名</p>
             </div>
             <div class="border-b pt10 pd10">
               <p><i class="el-icon-user"/> B2级开发工程师</p>
               <p><i class="el-icon-s-grid"/> 广西交科集团-智能交通事业部-软件研究院-职员</p>
               <p><i class="el-icon-location-outline"/> 广西 - 南宁-北投大厦</p>
             </div>
             <h3 class="mt20">账号</h3>
             <div class="pl30">
                 <p>状态：正常</p>
                 <p>最后一次登录日期：2021-05-15 15:00:00</p>
             </div>
           </div>
        </div>
        <div class="width-14 ml20 pd20 box-shadow">
          <div class="row-start pb20 border-b">
              <div class="width-8 row-center"><i class="el-icon-edit-outline fs36"/> <div class="col-center"><span>待办事宜</span><span>(50)</span></div></div>
              <div class="width-8 row-center"><i class="el-icon-files fs36"/> <div class="col-center"><span>待阅</span><span>(50)</span></div></div>
              <div class="width-8 row-center"><i class="el-icon-document-checked fs36"/> <div class="col-center"><span>已完成</span><span>(50)</span></div></div>
          </div>
          <h3 class="mt20 mb20">基本信息</h3>
          <div class="row-start wrap pl20 border-b">
                <div class="width-12 mb10">岗位：软件研究院职员</div>
                <div class="width-12 mb10">职务：软件研究院职员</div>
                <div class="width-12 mb10">职级：软件研究院职员</div>
                <div class="width-12 mb10">职责描述：软件研究院职员</div>
                <div class="width-12 mb10">专长：软件研究院职员</div>
          </div>
          <h3 class="mt20 mb20">通讯信息</h3>
          <div class="row-start wrap pl20 border-b">
                <div class="width-12 mb10">移动电话：xxxxx</div>
                <div class="width-12 mb10">办公室电话：xxxxx</div>
                <div class="width-12 mb10">电子邮箱：xxxxx</div>
                <div class="width-12 mb10">QQ：xxxxx</div>
                <div class="width-12 mb10">其他联系方式：xxxxx</div>
          </div>
        </div>
      </div>
  </el-dialog>
</template>

<script>
import { postAction } from '@/api/manage'
export default {
  data () {
    return {
      visible: false
    }
  },
  computed: {

  },
  methods: {
    open () {
      this.visible = true
      this.$nextTick(() => {
        this.$refs.form.resetFields()
      })
    },
    submit (val) {
      if (this.optionData && this.optionData.length) {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.loading = true
            postAction(this.url, this.form).then(res => {
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
      } else {
        this.$message({ showClose: true, message: '没有要操作的数据', type: 'warning' })
      }
    }
  }
}
</script>
