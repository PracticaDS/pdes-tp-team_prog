// @TODO: I would like to use 'as' operator:
//    cy.fixture('user.json').as('fixture_user')
//    const user = this.fixture_user.new
//  - but there is a bug (as always) using arrow functions:
//    - https://github.com/cypress-io/cypress/issues/1641
// @TODO: I would like to use promise-like structure
//    it('login to the application', async () => {
//      const fixture_user = await cy.fixture('user.json')
//  - but cypress throws a warning message when you use 'real promises' in code
//    - https://github.com/cypress-io/cypress/issues/1641
describe('Login', () => {
  it('login to the application', () => {
    cy.fixture('user.json').then(fixture_user => {
      const user = fixture_user.new

      cy.login(user)
      cy.url().should('include', '/home')
      cy.get('[component_name=home]').should('have.class', 'home-container')
      cy.get('[component_name="home-title"]').should('contain', user.username)
    })
  })
})
