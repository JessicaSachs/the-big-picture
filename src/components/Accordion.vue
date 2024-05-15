<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    toggleAccordion() {
      this.expanded = !this.expanded
    },
  },
}
</script>

<template>
  <div class="accordion mb-2 border">
    <div class="cursor-pointer p-2" @click="toggleAccordion">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <div v-if="expanded" class="p-2">
      <slot />
    </div>
  </div>
</template>
