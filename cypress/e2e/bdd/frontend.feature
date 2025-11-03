Feature: Shopper Journeys (Frontend)

  Background:
    Given I am on the login page

  @happy
  Scenario: Successful login with valid admin credentials
    When I submit the login form with a valid email and password
    Then I should be redirected to a logged-in area

  @negative
  Scenario: Login fails with invalid password
    When I submit the login form with a valid email and an invalid password
    Then I should see an error explaining the invalid credentials

  @home
  Scenario: Product listing renders on Home
    Given I am authenticated
    When I open the Home page
    Then I should see at least one product card
    And each product card should display name and price