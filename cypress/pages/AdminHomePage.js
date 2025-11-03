class AdminHomePage {
  visit() {
    cy.visit('/admin/home')
    cy.url().should('match', /\/admin\/home$/)
  }

  cardCadastrarProdutos() {
    return cy.contains('h5.card-title', /Cadastrar Produtos/i).should('be.visible')
  }

  clickCadastrarProdutos() {
    this.cardCadastrarProdutos()
    cy.get('[data-testid="cadastrarProdutos"]').should('be.visible').click()
  }
}
export default new AdminHomePage()