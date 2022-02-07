<template>
  <el-row>
    <Header :title="title" />
    <el-row>
      <el-col>
        <NuxtLink to="users/add">
          <el-link type="success">
            <h1>
              <i class="el-icon-plus" />
              Создать пользователя
            </h1>
          </el-link>
        </NuxtLink>
        </el-button>
      </el-col>
    </el-row>
    <el-table
      v-loading="usersWithAuto.length === 0"
      :data="usersWithAuto"
      style="width: 100%"
    >
      <el-table-column
        prop="firstName"
        label="Имя"
        width="180"
      />
      <el-table-column
        prop="lastName"
        label="Фамилия"
        width="180"
      />
      <el-table-column
        prop="car.name"
        label="Автомобиль"
      />
      <el-table-column
        fixed="right"
        label="Operations"
        width="300"
      >
        <template slot-scope="scope">
          <el-button circle icon="el-icon-search" size="small" @click="toDetail(scope.row.userId, scope.$index)" />
          <el-button circle type="primary" icon="el-icon-edit" size="small" @click="toEdit(scope.row.userId,scope.$index)" />
          <el-button circle type="danger" icon="el-icon-delete" size="small" @click="deleteItem(scope.row.userId,scope.$index)" />
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  data () {
    return {
      title: 'Пользователи'
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    ...mapGetters({
      usersWithAuto: 'users/usersWithAuto'
    })
  },
  methods: {
    toDetail (id) {
      this.$router.push('users/' + id)
    },
    toEdit (id) {
      this.$router.push(`users/${id}/edit`)
    },
    deleteItem (id, index) {
      this.$store.dispatch('users/delete', { id, index })
    }
  }
}
</script>
