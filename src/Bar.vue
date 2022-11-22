<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'bar'
})
</script>

<script setup lang="ts">
import { preloading } from './preloadComponent'
import router from './router';

const onNext = async () => {
  await preloading((await import('./Foo.vue')).default)
  router.push('./foo')
}
</script>

<template>
  <div class="Bar">
    <button @click="onNext">点击跳转</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
