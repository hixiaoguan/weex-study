<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2826937859,1390624465&fm=173&app=49&f=JPEG?w=636&h=358&s=AF33C4045347115DCA5B5E8A03007088'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: top;
    align-items: left;
  }
</style>
