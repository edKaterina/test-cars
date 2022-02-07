<template>
  <el-form ref="form" :model="form" label-width="90px" label-position="left">
    <el-form-item v-for="input in inputParams" :key="input.name" :label="input.label">
      <component :is="input.component" v-model="form[input.name]">
        <template v-if="input.selectName">
          <el-option v-for="option in input.values" :key="option[option.idField]" :label="option.name" :value="option[input.idField]" />
        </template>
      </component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="$emit('submit', form)">
        {{ submitLabel }}
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    initDataForm: {
      type: Object,
      required: true
    },
    inputParams: {
      type: Array,
      default: () => []
    },
    submitLabel: {
      type: String,
      default: 'Добавить'
    }
  },
  data () {
    return {
      form: {}
    }
  },
  mounted () {
    this.form = this.initDataForm
  }

}
</script>
