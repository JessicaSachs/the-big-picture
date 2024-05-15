import {render, fireEvent, screen} from '@testing-library/vue'
import { beforeEach, describe, expect, it, vi } from "vitest"
import Tabs from "~/components/Tabs.vue"

const items = [{ label: 'First Item' }, { label: 'Second Item' }, { label: 'Third Item' }, { label: 'Fourth Item' }]

describe('<Tabs />', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('renders', () => {
    const wrapper = render(<Tabs tabs={items} />)
    expect(wrapper.html()).toBeTruthy()
  })

  // Unless the tab provides an accessible way to represent that
  // it's active, it's not possible to test this without coupling
  // to implementation details (like... the `underline` class)
  // We need to modify the component to be more testable.
  it.todo('has an active tab', () => {
  })

  it('renders the tabs', () => {
    const wrapper = render(<Tabs tabs={items} />)

    items.forEach(item => {
      wrapper.findByText(item.label)
    })
  })

  describe('events', () => {
    it('emits an event when a tab is clicked', async () => {
      const onChangeSpy = vi.fn()
      const wrapper = render(<Tabs tabs={items} onChange={onChangeSpy} />);
      const firstTab = wrapper.getByText(items[0].label)

      await fireEvent.click(firstTab)
      expect(onChangeSpy).toHaveBeenCalledWith(items[0])
    })

    it.skip('emits an event when the right arrow key is pressed', async () => {
      const onChangeSpy = vi.fn()
      const wrapper = render(<Tabs tabs={items} onChange={onChangeSpy} />);

      await fireEvent(wrapper.baseElement, new KeyboardEvent('keydown', { key: 'ArrowRight' }))

      expect(onChangeSpy).toHaveBeenCalled()
    })
  })
})
