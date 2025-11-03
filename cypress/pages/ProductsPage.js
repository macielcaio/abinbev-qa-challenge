class ProductsPage {
  visit() { cy.visit('/home') }

  addToCartButtonByName(name) {
    return cy.contains('article, .card, li, [data-testid*="product"] h2, h3, .product-name', name, { matchCase: false })
      .closest('article, .card, li, [data-testid*="product"], div')
      .within(() => {
        cy.contains('button, [role="button"]', /adicionar|add to cart|comprar/i).click()
      })
  }
}
export default new ProductsPage()