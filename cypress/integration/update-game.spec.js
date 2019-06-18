// we need better naming
// this test make the interaction for every part of the game
describe('Update Game', () => {
  it('update an existing game', () => {
    cy.fixture('user.json').then(fixture_user => {
      const user = fixture_user.existing
      const machine_1 = {
        name: 'machine-option-Starter',
        price: 800,
        item_name: 'item-0',
        type: 'Starter',
      }
      // const machine_2 = { name: 'machine_option_transporter', price: 800, type: 'Transporter' }

      cy.login(user)
      cy.get('[component_name="body-game-row"]').should('have.length', user.games)
      cy.get('[component_name="play-game-button"]').click()
      cy.url().should('include', '/game')

      cy.get('[component_name="resource-bar-currency"]').should('contain', user.currency)
      // price: 800,
      // price: 800,
      cy.get(`[component_name=${machine_1.name}]`).click()
      cy.get(`[component_name=${machine_1.item_name}]`)
        .find('button')
        .click()

      cy.get('[component_name="details-content-name"]').should('contain', machine_1.type)
      cy.get('[component_name="details-content-cost"]').should('contain', machine_1.price)

      cy.get('[component_name="block-0-0"]')
        .find('img')
        .should('not.exist')

      cy.get('[component_name="block-0-0"]').click()
      cy.get('[component_name="resource-bar-currency"]').should(
        'contain',
        user.currency - machine_1.price,
      )
      cy.get('[component_name="block-0-0"]')
        .find(`[component_name=machine-node-${machine_1.type}]`)
        .find('img')
        .should('exist')

      // @TODO: refactor this implementation of update
      cy.request({
        url: '/users/login',
        method: 'POST',
        body: { username: user.username },
      }).then(logged => {
        const loggedBody = logged.body
        cy.request({
          url: `/users/${loggedBody._id}/games/`,
          method: 'GET',
        }).then(games => {
          const gamesBody = games.body
          cy.request({
            url: `/users/${loggedBody._id}/games/${gamesBody[0]._id}`,
            method: 'PUT',
            body: {
              id: gamesBody[0]._id,
              name: user.game_name,
              currency: user.currency - machine_1.price,
            },
          }).then(() => {
            cy.get('[component_name="nav-bar-profile-button"]').click()
            cy.url().should('include', '/home')
          })
        })
      })
    })
  })
})
