class CartPage {
  visit() {
    cy.contains('a,button,[role="link"]', /carrinho|cart/i).click({ force: true })
    cy.url().should('match', /carrinho|cart/i)
  }

  items() { 
    return cy.get('[data-testid*="cart-item"], .cart-item, tbody tr, li').filter(':visible')
  }

  checkoutBtn() { 
    return cy.contains('button,[role="button"]', /finalizar|checkout|concluir/i) 
  }
}
export default new CartPage()