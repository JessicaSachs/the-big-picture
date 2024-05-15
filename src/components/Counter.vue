<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const props = withDefaults(defineProps<{
  initial?: number
  min?: number
  max?: number
}>(), {
  initial: 0,
  min: 0,
  max: 100,
})

const { count, inc, dec } = useCounter(props.initial)

function onIncrement () {
  if (count.value < props.max)
    inc()

}

function onDecrement () {
  if (count.value > props.min)
    dec()

}
</script>

<template>
  <div class="w-30 flex-inline items-center justify-center border rounded px-1 py-2 font-mono">
    <button class="icon-btn" @click="onDecrement" data-testid="decrement">
      <div i-carbon-subtract class="text-lg" />
      <span class="sr-only">Decrement</span>
    </button>
    <span class="inline-block w-12 text-center">{{ count }}</span>
    <button class="icon-btn" @click="onIncrement" data-testid="increment">
      <div i-carbon-add />
      <span class="sr-only">Add</span>
    </button>
  </div>
</template>
