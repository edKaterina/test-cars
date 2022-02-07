<template>
  <el-row :gutter="12" class="header">
    <el-page-header :content="title" title="" @back="goBack" />
  </el-row>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    backLink: {
      type: String,
      default: '/'
    }
  },
  methods: {
    goBack () {
      this.$router.push(this.backLink)
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  margin-bottom: 24px;
}
</style>
