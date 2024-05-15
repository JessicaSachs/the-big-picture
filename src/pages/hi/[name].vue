<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const params = useRoute().params
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian class="inline-block text-4xl" />
    <p>
      Hi, {{ params.name }}!
    </p>
    <p class="text-sm opacity-50">
      <em>Dynamic route!</em>
    </p>

    <p class="mx-auto max-w-400px pt-4">
      Today we're going to work through a series of composables and components and talk through different approaches to
      testing them.
    </p>

    <div>
      <button class="m-3 mt-8 text-sm btn" @click="router.back()">
        Back
      </button>
      <button class="m-3 mt-8 text-sm btn" @click="router.push('/play')">
        Let's Play!
      </button>
    </div>
  </div>
</template>
