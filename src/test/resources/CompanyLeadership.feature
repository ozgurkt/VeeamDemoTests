@regression
Feature: Management Team Page Function Test

  # As a user I want to navigate to Company Leadership Veeam page
  # So that I can see the information about Leadership Team and CEO Anand Eswaran
    # ACCEPTANCE CRITERIA:
    # User goes to main page
    # User able to navigate "Company" --> "Leadership Team" page
    # Verify page title is expected
    # Verify page URL is expected
    # Verify Leadership Members are 13
    # Verify Chief Executive Officer is Anand Eswaran
    # Verify Anand Eswaran Linkedin link is active
  @US_1002
  Scenario: Is "Anand Eswaran" in the list
    Given User goes to main page
    And User navigates to "Company" "Leadership Team"
    Then Verify actual title is "About Veeam Management Team"
    And Verify actualURL is "https://www.veeam.com/management-team.html?ad=menu-company"
    Then Verify leadership members are 13
    And Verify "Chief Executive Officer" is "Anand Eswaran"
    And Verify "Anand Eswaran" Linkedin link is active


  # As a user I want to navigate to Company Leadership Veeam page
  # So that I can see the information about Leadership Team and COO Matthew Bishop
    # ACCEPTANCE CRITERIA:
    # User goes to main page
    # User able to navigate "Company" --> "Leadership Team" page
    # Verify page title is expected
    # Verify page URL is expected
    # Verify Leadership Members are 13
    # Verify Chief Operating Officer is Matthew Bishop
    # Verify Matthew Bishop Linkedin link is active
  @US_1003
  Scenario: Is "Matthew Bishop" in the list
    Given User goes to main page
    And User navigates to "Company" "Leadership Team"
    Then Verify actual title is "About Veeam Management Team"
    And Verify actualURL is "https://www.veeam.com/management-team.html?ad=menu-company"
    Then Verify leadership members are 13
    And Verify "Chief Operating Officer" is "Matthew Bishop"
    And Verify "Matthew Bishop" Linkedin link is active



