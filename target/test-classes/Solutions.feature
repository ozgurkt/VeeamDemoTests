@regression
Feature: Solutions Enterprise Page Function Test

  #As a user I want to navigate to Solutions Enterprise page
  #So that I can fill out the contact us form and send request to Veeam
    #ACCEPTANCE CRITERIA:
    #User goes to main page
    #User able to navigate "Solutions" --> "Enterprise" page
    #User able to click "CONTACT US" button
    #User able to choose a country and state from dropdown menu
    #User able to choose a product from dropdown menu
    #User able to fill the form successfully
    #User able to click "SEND REQUEST"

  @US_1004 @smoke
  Scenario Outline: Successfully filled contact form
    Given User goes to main page
    When User navigates to "Solutions" "Enterprise"
    Then Verify actual title is "Veeam Platform – protect and manage all workloads"
    And Verify actualURL is "https://www.veeam.com/data-protection-platform.html?ad=menu-solutions"
    Then User click contact us button
    Then Verify actual title is "Sales Inquiry - Veeam Software"
    Then Verify actualURL is "https://www.veeam.com/salesinc.html?ad=platform"
    Then User fill form
      | firstName | Joe                   |
      | lastName  | Smith                 |
      | eMail     | joe.smith@example.com |
      | phone     | 0123456789            |
      | country   | <countries>           |
      | state     | <states>              |
      | company   | Example Company       |
      | product   | <products>            |
      | details   | I want to try a demo  |
    Then User click SEND REQUEST button

    Examples:
      | countries     | states   | products                 |
      | Canada        | Manitoba | Veeam Backup Essentials  |
      | Canada        | Ontario  | Veeam ONE                |
      | France        | Bretagne | Veeam Availability Suite |
      | United States | Arizona  | Veeam Cloud Connect      |
      | Singapore     |          | Veeam Agents             |

   # As a user I fill out the contact us form with missing inputs
   # So that system displays alerts for each missing input
    #ACCEPTANCE CRITERIA:
    #User goes to main page
    #User able to navigate "Solutions" --> "Enterprise" page
    #User able to click "CONTACT US" button
    #User able to choose a country and state from dropdown menu
    #User able to choose a product from dropdown menu
    #User does not fill the mandatory fields
    #System should display alert for each missing field

  @US_1005 @Negative
  Scenario Outline: Unsuccessfully filled contact form
    Given User goes to main page
    When User navigates to "Solutions" "Enterprise"
    Then Verify actual title is "Veeam Platform – protect and manage all workloads"
    And Verify actualURL is "https://www.veeam.com/data-protection-platform.html?ad=menu-solutions"
    Then User click contact us button
    Then Verify actual title is "Sales Inquiry - Veeam Software"
    Then Verify actualURL is "https://www.veeam.com/salesinc.html?ad=platform"
    Then User not fill mandatory fields
      | firstName | [blank]       |
      | lastName  | [blank]       |
      | eMail     | [blank]       |
      | phone     | [blank]       |
      | country   | <countries>   |
      | state     | <states>      |
      | company   | [blank]       |
      | details   | Negative test |
    Then User click SEND REQUEST button for negative test
    Then Verify alerts are displayed

    Examples:
      | countries | states   |
      | Canada    | Manitoba |





