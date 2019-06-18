describe('Delete Game', () => {
  it('deletes an existing game', () => {
    cy.fixture('user.json').then(fixture_user => {
      const user = fixture_user.existing

      cy.login(user)
      cy.get('[component_name="body-game-row"]').should('have.length', user.games)
      cy.get('[component_name="delete-game-button"]').click()
      cy.get('[component_name="body-game-row"]').should('have.length', user.games - 1)
    })
  })
})
