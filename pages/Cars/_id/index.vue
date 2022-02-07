<template>
  <el-col>
    <Header :title="title" :back-link="'/cars'" />

    <el-card>
      <h3>{{ car.name }}</h3>
      {{ car.description }}
    </el-card>
  </el-col>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const id = params.id
    const car = await $axios.$get('/cars/' + id)

    return { id, car }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    title () {
      return this.car.name
    }
  }
}
</script>
