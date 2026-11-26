 

Feature: Shopping cart
  As a shopper, I want to add products to my cart
  so that I can see what I'm buying and what it will cost.

  Background:
    Given the shopper is on the Toolshop home page
    And the cart is empty
  @automated  
  Scenario: Shopper adds one product to the cart
    When the shopper opens the Bolt Cutters product page
    And adds it to the cart
    Then the cart shows Bolt Cutters with a quantity of 1
    And the line total matches the product price of $48.41

  Scenario: Shopper chooses a quantity before adding to the cart
    When the shopper opens the Bolt Cutters product page
    And sets the quantity to 3
    And adds it to the cart
    Then the cart shows Bolt Cutters with a quantity of 3
    And the line total is 3 times the product price

  Scenario: Shopper cannot add a quantity of zero
    When the shopper opens the Bolt Cutters product page
    And tries to set the quantity to 0
    Then the quantity goes back to 1
    And no product with a quantity of 0 is added to the cart