<template>
  <el-col>
    <Header :title="title" :back-link="backLink" />
    <FormEdit :init-data-form="form" :input-params="inputParams" @submit="onSubmit" />
  </el-col>
</template>
<script>
import { userEdit } from '../../mixins/index.js'
export default {
  mixins: [userEdit]
}
</script>
