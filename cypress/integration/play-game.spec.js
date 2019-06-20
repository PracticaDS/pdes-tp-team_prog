describe('Play Game', () => {
  it('play an existing game', () => {
    cy.fixture('user.json').then(fixture_user => {
      const user = fixture_user.existing

      cy.login(user)
      cy.get('[component_name="body-game-row"]').should('have.length', user.games)
      cy.get('[component_name="play-game-button"]').click()
      cy.url().should('include', '/game')
    })
  })
})
