<template>
  <el-row>
    <Header :title="title" />
    <el-row :gutter="12">
      <el-col>
        <NuxtLink to="cars/add">
          <el-link type="success">
            <h1>
              <i class="el-icon-plus" />
              Создать автомобиль
            </h1>
          </el-link>
        </NuxtLink>
        </el-button>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col v-for="(car, index) in cars" :key="+car.carId" :span="8">
        <el-card shadow="hover" class="card" :body-style="{cursor: 'pointer'}">
          <div slot="header" class="card-header">
            <span @click="toDetail(car.carId)">{{ car.name }}</span>
            <div>
              <el-button type="primary" size="mini" icon="el-icon-edit" circle @click.prevent.native="toEdit(car.carId)" />
              <el-button type="danger" size="mini" icon="el-icon-delete" circle @click.prevent.native="deleteItem(car.carId, index)" />
            </div>
          </div>
          <el-descriptions @click.native="toDetail(car.carId)">
            <el-descriptions-item label="Описание">
              {{ car.description }}
            </el-descriptions-item>
          </el-descriptions>
          </div>
          </div>
        </el-card>
        </el-card>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      title: 'Автомобили'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    ...mapState('cars', { cars: 'list' })
  },
  methods: {
    toDetail (id) {
      this.$router.push('cars/' + id)
    },
    toEdit (id) {
      this.$router.push(`cars/${id}/edit`)
    },
    deleteItem (id, index) {
      this.$store.dispatch('cars/delete', { id, index })
    }
  }
}
</script>
<style lang="scss" scoped>
  .card {
    margin-bottom: 12px;
    cursor: pointer;
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
