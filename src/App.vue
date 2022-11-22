<script setup lang="ts">
import { PreloadView } from './preloadComponent'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <PreloadView :component="Component"></PreloadView>
  </RouterView>
</template>
