import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Counter from '~/components/Counter.vue'

const incrementSelector = 'button[data-testid="increment"]'
const decrementSelector = 'button[data-testid="decrement"]'

describe('<Counter />', () => {
  it('renders', () => {
    const wrapper = mount(<Counter data-testid="counter" />)
    expect(wrapper.find('[data-testid="counter"]').exists()).toBe(true)
  })

  it('should render the current count', () => {
    const wrapper = mount(<Counter data-testid="counter" />)
    expect(wrapper.text()).toContain('0')
  })

  describe('initial', () => {
    it('renders the initial prop', () => {
      const wrapper = mount(<Counter data-testid="counter" initial={2} />)
      expect(wrapper.text()).toContain('2')
    })

    it('defaults to 0', () => {
      const wrapper = mount(<Counter data-testid="counter" />)
      expect(wrapper.text()).toContain('0')
    })
  })

  describe('increment', () => {
    it('has an increment button', async () => {
      const wrapper = mount(<Counter data-testid="counter" />)
      expect(wrapper.find(incrementSelector).text()).toContain('Add')
    })
    it('clicking plus increments the current value', async () => {
      const wrapper = mount(<Counter data-testid="counter" />)
      await wrapper.find(incrementSelector).trigger('click')
      expect(wrapper.text()).toContain('1')
      await wrapper.find(incrementSelector).trigger('click')
      expect(wrapper.text()).toContain('2')
      await wrapper.find(incrementSelector).trigger('click')
      expect(wrapper.text()).toContain('3')
    })
  })

  describe('decrement', () => {
    it('has an decrement button', async () => {
      const wrapper = mount(<Counter data-testid="counter" />)
      expect(wrapper.find(decrementSelector).text()).toContain('Decrement')
    })
    it('clicking minus decrements the current value', async () => {
      const wrapper = mount(<Counter data-testid="counter" initial={3} />)
      expect(wrapper.text()).toContain('3')
      await wrapper.find(decrementSelector).trigger('click')
      expect(wrapper.text()).toContain('2')
      await wrapper.find(decrementSelector).trigger('click')
      expect(wrapper.text()).toContain('1')
      await wrapper.find(decrementSelector).trigger('click')
      expect(wrapper.text()).toContain('0')
    })
  })

  // Implement a "min" and "max" property that default to 0 and 5, respectively.
  describe.skip('extra credit', () => {
    it('cannot go above the maximum', async () => {
      const wrapper = mount(<Counter data-testid="counter" max={2} />)
      await wrapper.find(incrementSelector).trigger('click')
      await wrapper.find(incrementSelector).trigger('click')
      await wrapper.find(incrementSelector).trigger('click')
      expect(wrapper.text()).toContain('2')
    })

    it('cannot go below the minimum', async () => {
      const wrapper = mount(<Counter data-testid="counter" min={-2} />)
      expect(wrapper.text()).toContain('0')
      await wrapper.find(decrementSelector).trigger('click')
      await wrapper.find(decrementSelector).trigger('click')
      expect(wrapper.text()).toContain('-2')
      await wrapper.find(decrementSelector).trigger('click')
      expect(wrapper.text()).not.toContain('-3')
    })

    describe('min', () => {
      it('defaults to a minimum of 0', async () => {
        const wrapper = mount(<Counter data-testid="counter" initial={1} />)
        await wrapper.find(decrementSelector).trigger('click')
        await wrapper.find(decrementSelector).trigger('click')
        expect(wrapper.text()).toContain('0')
      })
    })

    describe('max', () => {
      it('defaults to a maximum of 100', async () => {
        const wrapper = mount(<Counter data-testid="counter" initial={99} />)
        await wrapper.find(incrementSelector).trigger('click')
        await wrapper.find(incrementSelector).trigger('click')
        expect(wrapper.text()).toContain('100')
      })
    })
  })
})
