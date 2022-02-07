<template>
  <el-col>
    <Header :title="title" :back-link="'/users'" />
    <el-card>
      <h2>{{ user.firstName }} {{ user.lastName }}</h2>

      Автомобиль: {{ currentCar.name }}
    </el-card>
  </el-col>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData ({ params, $axios }) {
    const id = params.id
    const user = await $axios.$get('/users/' + id)

    return { id, user }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    ...mapState('cars', { carsList: 'list' }),
    title () {
      return this.user.firstName + ' ' + this.user.lastName
    },
    currentCar () {
      return this.carsList.find(car => car.carId === this.user.carId) || {}
    }
  }
}
</script>
