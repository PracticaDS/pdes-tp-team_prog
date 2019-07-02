Cypress.Commands.add('login', user => {
  user.initial_requests.forEach(req => {
    const newUrl = Cypress.env('API_URL')
    req.url = newUrl + req.url
    cy.request(req).then(res => cy.log(res))
  })
  cy.visit('/')
  cy.get('[component_name="login-input"]')
    .get('input')
    .type(user.username)
  cy.get('[component_name="login-button"]')
    .get('button')
    .click()
})
