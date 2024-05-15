import { describe, expect, it } from 'vitest'
import { useCycle } from '~/composables/cycle'

const items = ['First Item', 'Second Item', 'Third Item', 'Fourth Item']

describe('useCycle', () => {
  it('allows you to cycle through a list of items', () => {
    const { state, next, goTo } = useCycle(items)

    // Initial state should be the first item in the list
    expect(state.value).toEqual(items[0])

    // Next should return the next item in the list
    next()

    expect(state.value).toEqual(items[1])

    // Manually go to the last item in the list
    goTo(items.length - 1)

    expect(state.value).toEqual(items[items.length - 1])
  })

  describe('state', () => {
    it('defaults to the first item in the list', () => {
      const { state } = useCycle(items)
      expect(state.value).toEqual(items[0])
    })
    it('represents the current item in the list', () => {
      const { state, next } = useCycle(items)
      expect(state.value).toEqual(items[0])
      next()
      expect(state.value).toEqual(items[1])
    })
  })

  describe('index', () => {
    it('defaults to 0', () => {})

    it('updates when the state changes', () => {})
  })

  describe('goTo', () => {
    it('moves the cycle to the given index', () => {
      const { state, goTo } = useCycle(items)
      goTo(1)
      expect(state.value).toEqual(items[1])
      goTo(items.length - 1)
      expect(state.value).toEqual(items[items.length - 1])
    })

    it.todo('handles out of bounds indexes', () => { })
  })

  describe('prev', () => {
    it('returns the previous item in the list', () => {
      const { state, prev } = useCycle(items)
      expect(state.value).toEqual(items[0])
      prev()
      expect(state.value).toEqual(items[items.length - 1])
    })
  })

  describe('next', () => {
    it('returns the next item in the list', () => {
      const { state, next } = useCycle(items)
      expect(state.value).toEqual(items[0])
      next()
      expect(state.value).toEqual(items[1])
    })
  })
})
