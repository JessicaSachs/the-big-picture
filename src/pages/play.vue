<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker/locale/en_US'
import Counter from '~/components/Counter.vue'
import Input from '~/components/Input.vue'
import type { Tab } from '~/components/Tabs.vue'

const name = ref('')

function go() {
  console.log('Name was submitted:', name.value)
  alert(`Hello, ${name.value}!`)
}

function onTabChanged(tab: Tab) {
  console.log('Tab changed:', tab)
}
</script>

<template>
  <!-- This file is a place to play around and exercise the components we'll be testing -->
  <div i-carbon-pedestrian-family class="inline-block text-4xl" />
  <p>
    Component Playground
  </p>
  <p>
    <em class="text-sm opacity-75">Play around with the components and composables we'll be testing</em>
  </p>

  <div class="py-4" />
  <hr class="mx-auto max-w-400px pb-8">

  <!-- Add a counter component to the page -->
  <Counter :initial="0" />

  <br>

  <div class="mx-auto w-600px flex flex-row items-center justify-center gap-8 py-8">
    <Card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo at ex vero vel quo aliquam, assumenda
      odit exercitationem voluptatum deserunt error tempore sint, perspiciatis dolorum atque veniam voluptas fuga.
    </Card>
    <ProductCard description="A ProductCard component" price="$10" rating="⭐️⭐️⭐️⭐️⭐️"
      img-src="https://via.placeholder.com/150" alt="A placeholder image" />
  </div>

  <div class="pb-8">
    <Tabs :tabs="[{ label: 'Show All' }, { label: 'Auction' }, { label: 'Buy Now' }]" @change="onTabChanged" />
  </div>

  <div class="mx-auto max-w-800px resize overflow-auto pb-8">
    <Accordion title="Accordion Header via the Title prop">
      Content within the accordion
      
      {{ faker.lorem.paragraphs(5) }}
    </Accordion>

    <Accordion class="group">
      <template #header>
        <div class="w-full text-center group-hover:text-blue-500">
          <div i-mdi-heart class="mx-auto text-2xl" />
          <div>Accordion Header is styled!</div>
        </div>
      </template>
      Body content
    </Accordion>
  </div>

  <!-- The Input -->
  <Input v-model="name" placeholder="What's your name?" autocomplete="false" @keydown.enter="go" />
  <div class="py-4" />
</template>
