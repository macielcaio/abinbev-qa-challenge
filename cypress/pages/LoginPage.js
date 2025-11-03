class LoginPage {
  visit() { cy.visit('/login') }
  email() { return cy.get('[data-testid="email"]') }
  password() { return cy.get('[data-testid="senha"]') }
  submit() { return cy.get('[data-testid="entrar"]') }

  login(email, password) {
    cy.intercept('POST', '**/login').as('loginReq')

    this.visit()
    this.email().clear().type(email || 'fulano@qa.com')
    this.password().clear().type(password || 'teste')
    this.submit().click()

    cy.wait('@loginReq').its('response.statusCode').should('be.oneOf', [200, 201])
    cy.url().should('match', /home|produtos|dashboard/i)
  }
}
export default new LoginPage()