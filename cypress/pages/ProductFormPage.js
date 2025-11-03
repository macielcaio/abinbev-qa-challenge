class ProductFormPage {
  assertLoaded() {
    cy.contains('h1,h2', /Cadastro de Produtos/i).should('be.visible')
    this.inputNome().should('be.visible')
    this.inputPreco().should('be.visible')
    this.inputDescricao().should('be.visible')
    this.inputQuantidade().should('be.visible')
    this.inputImagem().should('be.visible')
  }

  inputNome()       { return cy.get('[data-testid="nome"]') }
  inputPreco()      { return cy.get('[data-testid="preco"]') }
  inputDescricao()  { return cy.get('[data-testid="descricao"]') }
  inputQuantidade() { return cy.get('[data-testid="quantity"]') }
  inputImagem()     { return cy.get('[data-testid="imagem"]') }
  btnCadastrar()    { return cy.contains('button,[type="submit"]', /^Cadastrar$/i) }

  fill({ nome, preco, descricao, quantidade, imagemPath }) {
    if (nome)       this.inputNome().clear().type(nome)
    if (preco)      this.inputPreco().clear().type(String(preco))
    if (descricao)  this.inputDescricao().clear().type(descricao)
    if (quantidade) this.inputQuantidade().clear().type(String(quantidade))
    if (imagemPath) this.inputImagem().selectFile(imagemPath)
  }

  submitExpectCreated() {
    cy.intercept('POST', '**/produtos').as('createProduct')
    this.btnCadastrar().click()
    cy.wait('@createProduct').its('response.statusCode').should('eq', 201)
    cy.url().should('match', /\/admin\/listarprodutos$/)
  }

  submitExpectValidationError() {
    cy.intercept('POST', '**/produtos').as('createProduct')
    this.btnCadastrar().click()
    cy.wait('@createProduct').its('response.statusCode').should('be.oneOf', [400, 422])
    cy.url().should('match', /\/admin\/cadastrarprodutos$/)
  }
}
export default new ProductFormPage()