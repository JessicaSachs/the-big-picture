import Card from '../src/components/Card.vue'

const cardSelector = '[data-testid="card"]'
describe('<Card />', () => {
  it('renders', () => {
    cy.mount(<Card data-testid="card" />)
      .get(cardSelector).should('be.visible')
  })

  describe('slots', () => {
    it('renders the children', () => {
      cy.mount(<Card><div data-testid="child">Content</div></Card>)
        .get('[data-testid="child"]')
        .should('be.visible')
    })
  })
})
