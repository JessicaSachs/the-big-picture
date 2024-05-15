<script setup lang="ts">
import { toggleDark } from '~/composables/dark'
</script>

<template>
  <nav class="mt-6 inline-flex gap-2 text-xl">
    <button class="icon-btn" @click="toggleDark()">
      <div class="i-carbon-sun dark:i-carbon-moon" />
    </button>

    <a
      class="i-carbon-logo-github i-carbon-logo-github icon-btn" rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite" target="_blank" title="GitHub"
    />
  </nav>
</template>
