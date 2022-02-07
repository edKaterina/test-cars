<template>
  <el-menu
    :router="true"
  >
    <el-menu-item v-for="(item, index) in menuItems" :key="index" :index="item.link">
      <i :class="[item.icon]" />
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data () {
    return {
      menuItems: [
        { name: 'Пользователи', link: '/users', icon: 'el-icon-user-solid' },
        { name: 'Автомобили', link: '/cars', icon: 'el-icon-s-tools' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu{
  height: 100%;
}
</style>
