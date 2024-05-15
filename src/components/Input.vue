<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <input v-model="modelValue" type="text" v-bind="$attrs" class="w-250px border border-gray-200 rounded bg-transparent px-4 py-2 text-center outline-none dark:border-gray-700 active:outline-none">
</template>
