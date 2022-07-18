@regression
Feature: MainPage Function Test

  # As a user I want to navigate to all main and sub-menu items.
    #ACCEPTANCE CRITERIA:
    # User should be able to see main navigation menu options
    # Main navigation menu items should be as expected
    # Submenu items should be as expected from Excel sheet
    # Submenu items pageTitles should be as expected
    # Submenu items pageURL should be as expected

  @US_1001 @smoke
  Scenario Outline: Main and subMenu Items
    Given User goes to main page
    Then User should see following options on Main Navigation Bar
      | Products   |
      | Solutions  |
      | Resources  |
      | Partners   |
      | Company    |
      | How To Buy |

    Then Verify Mainmenu Options count is 6
    And Verify submenu items are as Expected : from ExcelSheet
    When User navigates to "<mainMenu>" "<subMenu>"
    Then Verify actual title is "<expectedTitle>"
    And Verify actualURL is "<expectedURL>"

    #Used 4 values for example
    Examples:
      | subMenu               | mainMenu  | expectedTitle                                                    | expectedURL                                                       |
      | Backup Modernization  | Solutions | Backup and Recovery solutions                                    | https://www.veeam.com/data-backup-recovery.html?ad=menu-solutions |
      | White Papers          | Resources | Veeam: Free Virtualization White Papers                          | https://www.veeam.com/whitepapers.html?ad=menu-resources          |
      | Value-Added Resellers | Partners  | Veeam Value-Added Reseller Program – Your Success is Our Mission | https://www.veeam.com/propartner.html?ad=menu-partners            |
      | Leadership Team       | Company   | About Veeam Management Team                                      | https://www.veeam.com/management-team.html?ad=menu-company        |








    







