<template>
  <el-col>
    <Header :title="title" :back-link="backLink" />
    <FormEdit :init-data-form="currentCar" :input-params="inputParams" @submit="onSubmit" />
  </el-col>
</template>
<script>
import { carEdit } from '../../mixins/index.js'
export default {
  mixins: [carEdit]
}
</script>
