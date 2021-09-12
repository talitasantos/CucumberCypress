#Author: talitasantos2310@gmail.com

Feature: Authentication
  As a user
  I want to create a user account or sign in system with already registred user
  So that I can shop

  Background: Access sign in
    Given I clicked sign in

  @focus
  Scenario: Create a user account successfully
    Given I entered a valid email address
    And I click create an account
    And fill personal informations
    And fill address informations
    When I click register
    Then system returns my account page
