import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'

export interface UseCycleReturn<T> {
  state: ComputedRef<T>
  index: Ref<number>
  next: () => T
  prev: () => T
  goTo: (index: number) => T
}

/**
 * useCycle is a composable that takes an array of items
 * and allows you to navigate and cycle through them.
 * If the end of the array is reached, the next call should return the first item in the array.
 *
 * 🧪: Create tests for this composable in `tests/useCycle.test.ts`
 */
export function useCycle<T>(items: T[]): UseCycleReturn<T> {
  const index = ref(0)
  const state = computed(() => items[index.value])

  return {
    state,
    index,
    next: () => {
      index.value = (index.value + 1) % items.length
      return items[index.value]
    },
    prev: () => {
      index.value = index.value === 0 ? items.length - 1 : index.value - 1
      return items[index.value]
    },
    goTo: (i: number) => {
      index.value = i % items.length
      return items[index.value]
    },
  }
}
