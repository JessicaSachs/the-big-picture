import Counter from '../src/components/Counter.vue'

const counterSelector = '[data-testid="counter"]'
const incrementSelector = 'button[data-testid="increment"]'
const decrementSelector = 'button[data-testid="decrement"]'

describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(<Counter />)
  })

  it('should render the current count', () => {})

  describe('initial', () => {
    it('renders the initial prop', () => {})
    it('defaults to 0', () => {
    })
  })

  describe('increment', () => {
    it('has an increment button', () => {})
    it('clicking plus increments the current value', () => {
      cy.mount(<Counter data-testid="counter" />)
        .get(incrementSelector).click()
        .get(counterSelector).should('contain.text', 1)
        .get(incrementSelector).click()
        .get(counterSelector).should('contain.text', 2)
        .get(incrementSelector).click()
        .get(counterSelector).should('contain.text', 3)
    })
  })

  describe('decrement', () => {
    it('has a decrement button', () => {})
    it('clicking minus decrements the current value', () => { })
  })

  // Implement a "min" and "max" property that default to 0 and 5, respectively.
  describe('extra credit', () => {
    it.skip('cannot go above the maximum', () => { })
    it.skip('cannot go below the minimum', () => { })
    describe.skip('min', () => {
      it('accepts a minimum', () => {})
      it('defaults to a minimum of 0', () => {})
    })

    describe.skip('max', () => {
      it('defaults to a maximum of 5', () => {})
      it('accepts a maximum', () => {})
    })
  })
})
