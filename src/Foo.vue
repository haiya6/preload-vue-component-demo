<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'bar'
})
</script>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  done: {
    type: Function
  }
})

const message = ref('')

window.setTimeout(() => {
  message.value = 'loaded'
  if (props.done) props.done()
}, 2000)
</script>

<template>
  <div class="Foo">{{ message }}</div>
</template>

<style lang="scss" scoped>

</style>
