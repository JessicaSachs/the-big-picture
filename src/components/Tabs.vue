<script setup lang="ts">
import { onMounted } from 'vue'
import { useCycle } from '~/composables'

export interface Tab {
  label: string
}

const props = defineProps<{
  tabs: Tab[]
}>()

const emit = defineEmits<{
  change: [tab: Tab]
}>()

const { state, next, prev, goTo } = useCycle(props.tabs)

// Add event listener for keypress
onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

function handleKeyPress(event: KeyboardEvent) {
  if (event.key === 'ArrowRight')
    emit('change', next())
  else if (event.key === 'ArrowLeft')
    emit('change', prev())
}

function onClick (tab: Tab, index: number) {
  goTo(index)
  emit('change', tab)
}
</script>

<template>
  <div class="mx-auto w-80 flex flex-row items-center justify-center gap-2 border">
    <div
      v-for="(tab, index) in tabs"
      :key="tab.label"
      @click="onClick(tab, index)"
      class="px-2 py-1"
      :class="{ underline: tab.label === state.label }"
    >
      {{ tab.label }}
    </div>
  </div>
</template>
