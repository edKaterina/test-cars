<template>
  <el-col>
    <Header :title="title" :back-link="backLink" />
    <FormEdit :init-data-form="currentUser" :input-params="inputParams" :submit-label="'Сохранить'" @submit="onSubmit" />
  </el-col>
</template>
<script>
import { userEdit } from '../../../mixins/index.js'
export default {
  mixins: [userEdit]
}
</script>
