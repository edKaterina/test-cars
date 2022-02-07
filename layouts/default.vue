<template>
  <el-container class="container">
    <el-aside width="200px">
      <MenuList />
    </el-aside>
    <el-container>
      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  async fetch () {
    await this.$store.dispatch('cars/fetch')
    await this.$store.dispatch('users/fetch')
    console.log('fetching')
  }
}
</script>
<style lang="scss">
  .el-container {
    font-family: Helvetica;
  }

  .container {
    max-width: 1240px;
    box-shadow: -1px -12px 13px 0px #ededed;
    padding: 10px;

    min-height: 100vh;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
  }
  h3 {
    margin-top:0
  }
</style>
