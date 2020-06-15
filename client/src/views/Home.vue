<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="https://avatars1.githubusercontent.com/u/50126858?s=460&u=db276bcd977af938c67e3f01ada094513f2c2ee7&v=4"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>

<style scoped lang="scss">
img {
  width: 260px;
  height: 260px;
  border-radius: 20%;
}
</style>
