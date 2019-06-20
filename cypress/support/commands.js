Cypress.Commands.add('login', user => {
  user.initial_requests.forEach(req => {
    cy.request(req)
  })
  cy.visit('/')
  cy.get('[component_name="login-input"]')
    .get('input')
    .type(user.username)
  cy.get('[component_name="login-button"]')
    .get('button')
    .click()
})
