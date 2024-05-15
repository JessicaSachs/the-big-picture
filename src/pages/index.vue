<script setup lang="ts" generic="T extends any, O extends any">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'IndexPage',
})

const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div i-logos-vitest class="inline-block text-4xl" />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitest Workshop
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">Getting comfortable with testing in Vue 3 and Vitest</em>
    </p>

    <div class="py-4" />

    <Input
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
