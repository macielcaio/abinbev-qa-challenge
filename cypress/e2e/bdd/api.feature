Feature: Store APIs

  @users
  Scenario: Create, read and delete a user
    Given I have a unique user payload
    When I send a POST /usuarios
    Then I can GET the user by id
    And I can DELETE the user

  @products
  Scenario: Create, update and delete a product
    Given I am authenticated with a valid token
    When I POST /produtos with a valid payload
    Then I can PUT /produtos/{id} to update it
    And I can DELETE /produtos/{id} to clean up

  @carts
  Scenario: Create a cart and cancel the purchase
    Given I created two products
    When I POST /carrinhos with those products
    Then I can DELETE /carrinhos/cancelar-compra
    And products should be restocked
