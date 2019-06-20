describe('Create Game', () => {
  it('creates a new game', () => {
    cy.fixture('user.json').then(fixture_user => {
      const user = fixture_user.new

      cy.login(user)
      cy.get('[component_name="create-game-open-button"]').click()
      cy.get('[component_name="create-game-input"]')
        .find('input')
        .type(user.game_name)
      cy.get('[component_name="create-game-create-button"]').click()
      cy.url().should('include', '/game')
    })
  })
})
