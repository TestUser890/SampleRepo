Feature: LoginTest

  @QA
  Scenario: Verify Login is successful
    Given user launches the application
    When user enters creadentials
    And clicks on Sign-In button
    Then user should be able to login
