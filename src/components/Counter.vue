<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div class="w-30 flex-inline items-center justify-center border rounded px-1 py-2 font-mono">
    <button class="icon-btn" @click="dec()">
      <div i-carbon-subtract class="text-lg" />
      <span class="sr-only">Decrement</span>
    </button>
    <span class="inline-block w-12 text-center">{{ count }}</span>
    <button class="icon-btn" @click="inc()">
      <div i-carbon-add />
      <span class="sr-only">Add</span>
    </button>
  </div>
</template>
