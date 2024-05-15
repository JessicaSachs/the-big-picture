<script setup lang="ts">
defineProps<{
  description: string
  price: string
  rating: string
  imgSrc: string
  alt: string
}>()
</script>

<template>
  <Card>
    <img :src="imgSrc" :alt="alt" class="mb-4 h-150px w-150px object-contain">
    <div class="card-body">
      <h2 class="text-xl font-bold">
        {{ description }}
      </h2>
      <p class="italic opacity-75">
        {{ price }}
      </p>
      <p class="text-yellow-500">
        {{ rating }}
      </p>
    </div>
  </Card>
</template>
