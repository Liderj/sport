<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

#app {
  height: 100%;
  width: 100%;
  position: absolute;
  -webkit-overflow-scrolling: touch;
}
</style>
