import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Card from '~/components/Card.vue'
import Counter from '~/components/Counter.vue'

const cardSelector = '[data-testid="card"]'
describe('<Card />', () => {
  it('renders', () => {
    const wrapper = mount(<Card data-testid="card" />)
    expect(wrapper.find(cardSelector).exists()).toBe(true)
  })

  describe('slots', () => {
    it('renders the children', () => {
      const wrapper = mount(<Card><Counter data-testid="child">Content</Counter></Card>)
      expect(wrapper.find('[data-testid="child"]').exists()).toBe(true)
    })
  })
})
