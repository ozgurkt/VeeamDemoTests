$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/CompanyLeadership.feature");
formatter.feature({
  "name": "Management Team Page Function Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Is \"Anand Eswaran\" in the list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1002"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Company\" \"Leadership Team\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"About Veeam Management Team\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/management-team.html?ad\u003dmenu-company\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify leadership members are 13",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.CompanyLeadership_Defs.verify_leadership_members_are(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify \"Chief Executive Officer\" is \"Anand Eswaran\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.CompanyLeadership_Defs.verify_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify \"Anand Eswaran\" Linkedin link is active",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.CompanyLeadership_Defs.verify_Linkedin_link_is_active(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Is \"Matthew Bishop\" in the list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1003"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Company\" \"Leadership Team\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"About Veeam Management Team\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/management-team.html?ad\u003dmenu-company\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify leadership members are 13",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.CompanyLeadership_Defs.verify_leadership_members_are(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify \"Chief Operating Officer\" is \"Matthew Bishop\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.CompanyLeadership_Defs.verify_is(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify \"Matthew Bishop\" Linkedin link is active",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.CompanyLeadership_Defs.verify_Linkedin_link_is_active(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Mainpage.feature");
formatter.feature({
  "name": "MainPage Function Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Main and subMenu Items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_1001"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should see following options on Main Navigation Bar",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Products"
      ]
    },
    {
      "cells": [
        "Solutions"
      ]
    },
    {
      "cells": [
        "Resources"
      ]
    },
    {
      "cells": [
        "Partners"
      ]
    },
    {
      "cells": [
        "Company"
      ]
    },
    {
      "cells": [
        "How To Buy"
      ]
    }
  ]
});
formatter.step({
  "name": "Verify Mainmenu Options count is 6",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify submenu items are as Expected : from ExcelSheet",
  "keyword": "And "
});
formatter.step({
  "name": "User navigates to \"\u003cmainMenu\u003e\" \"\u003csubMenu\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify actual title is \"\u003cexpectedTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify actualURL is \"\u003cexpectedURL\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "subMenu",
        "mainMenu",
        "expectedTitle",
        "expectedURL"
      ]
    },
    {
      "cells": [
        "Backup Modernization",
        "Solutions",
        "Backup and Recovery solutions",
        "https://www.veeam.com/data-backup-recovery.html?ad\u003dmenu-solutions"
      ]
    },
    {
      "cells": [
        "White Papers",
        "Resources",
        "Veeam: Free Virtualization White Papers",
        "https://www.veeam.com/whitepapers.html?ad\u003dmenu-resources"
      ]
    },
    {
      "cells": [
        "Value-Added Resellers",
        "Partners",
        "Veeam Value-Added Reseller Program – Your Success is Our Mission",
        "https://www.veeam.com/propartner.html?ad\u003dmenu-partners"
      ]
    },
    {
      "cells": [
        "Leadership Team",
        "Company",
        "About Veeam Management Team",
        "https://www.veeam.com/management-team.html?ad\u003dmenu-company"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Main and subMenu Items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1001"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see following options on Main Navigation Bar",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userShouldSeeFollowingOptionsOnNavigationBar(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Mainmenu Options count is 6",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifySubmenuItemsAreExpectedWithAmount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify submenu items are as Expected : from ExcelSheet",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyItemsNamesAreAsExpected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Backup Modernization\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Backup and Recovery solutions\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-backup-recovery.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Main and subMenu Items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1001"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see following options on Main Navigation Bar",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userShouldSeeFollowingOptionsOnNavigationBar(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Mainmenu Options count is 6",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifySubmenuItemsAreExpectedWithAmount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify submenu items are as Expected : from ExcelSheet",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyItemsNamesAreAsExpected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Resources\" \"White Papers\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Veeam: Free Virtualization White Papers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/whitepapers.html?ad\u003dmenu-resources\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Main and subMenu Items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1001"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see following options on Main Navigation Bar",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userShouldSeeFollowingOptionsOnNavigationBar(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Mainmenu Options count is 6",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifySubmenuItemsAreExpectedWithAmount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify submenu items are as Expected : from ExcelSheet",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyItemsNamesAreAsExpected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Partners\" \"Value-Added Resellers\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Veeam Value-Added Reseller Program – Your Success is Our Mission\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/propartner.html?ad\u003dmenu-partners\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Main and subMenu Items",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1001"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see following options on Main Navigation Bar",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userShouldSeeFollowingOptionsOnNavigationBar(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Mainmenu Options count is 6",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifySubmenuItemsAreExpectedWithAmount(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify submenu items are as Expected : from ExcelSheet",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyItemsNamesAreAsExpected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Company\" \"Leadership Team\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"About Veeam Management Team\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/management-team.html?ad\u003dmenu-company\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Solutions.feature");
formatter.feature({
  "name": "Solutions Enterprise Page Function Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successfully filled contact form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_1004"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Enterprise\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify actual title is \"Veeam Platform – protect and manage all workloads\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-protection-platform.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click contact us button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify actual title is \"Sales Inquiry - Veeam Software\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/salesinc.html?ad\u003dplatform\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User fill form",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "firstName",
        "Joe"
      ]
    },
    {
      "cells": [
        "lastName",
        "Smith"
      ]
    },
    {
      "cells": [
        "eMail",
        "joe.smith@example.com"
      ]
    },
    {
      "cells": [
        "phone",
        "0123456789"
      ]
    },
    {
      "cells": [
        "country",
        "\u003ccountries\u003e"
      ]
    },
    {
      "cells": [
        "state",
        "\u003cstates\u003e"
      ]
    },
    {
      "cells": [
        "company",
        "Example Company"
      ]
    },
    {
      "cells": [
        "product",
        "\u003cproducts\u003e"
      ]
    },
    {
      "cells": [
        "details",
        "I want to try a demo"
      ]
    }
  ]
});
formatter.step({
  "name": "User click SEND REQUEST button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countries",
        "states",
        "products"
      ]
    },
    {
      "cells": [
        "Canada",
        "Manitoba",
        "Veeam Backup Essentials"
      ]
    },
    {
      "cells": [
        "Canada",
        "Ontario",
        "Veeam ONE"
      ]
    },
    {
      "cells": [
        "France",
        "Bretagne",
        "Veeam Availability Suite"
      ]
    },
    {
      "cells": [
        "United States",
        "Arizona",
        "Veeam Cloud Connect"
      ]
    },
    {
      "cells": [
        "Singapore",
        "",
        "Veeam Agents"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successfully filled contact form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1004"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Enterprise\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Veeam Platform – protect and manage all workloads\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-protection-platform.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click contact us button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_CONTACT_US_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Sales Inquiry - Veeam Software\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/salesinc.html?ad\u003dplatform\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill form",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_fill_form(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click SEND REQUEST button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_SEND_REQUEST_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully filled contact form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1004"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Enterprise\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Veeam Platform – protect and manage all workloads\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-protection-platform.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click contact us button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_CONTACT_US_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Sales Inquiry - Veeam Software\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/salesinc.html?ad\u003dplatform\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill form",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_fill_form(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click SEND REQUEST button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_SEND_REQUEST_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully filled contact form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1004"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Enterprise\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Veeam Platform – protect and manage all workloads\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-protection-platform.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click contact us button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_CONTACT_US_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Sales Inquiry - Veeam Software\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/salesinc.html?ad\u003dplatform\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill form",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_fill_form(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click SEND REQUEST button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_SEND_REQUEST_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully filled contact form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1004"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Enterprise\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Veeam Platform – protect and manage all workloads\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-protection-platform.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click contact us button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_CONTACT_US_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Sales Inquiry - Veeam Software\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/salesinc.html?ad\u003dplatform\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill form",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_fill_form(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click SEND REQUEST button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_SEND_REQUEST_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully filled contact form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1004"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Enterprise\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Veeam Platform – protect and manage all workloads\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-protection-platform.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click contact us button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_CONTACT_US_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Sales Inquiry - Veeam Software\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/salesinc.html?ad\u003dplatform\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill form",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_fill_form(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click SEND REQUEST button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_SEND_REQUEST_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Unsuccessfully filled contact form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_1005"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Enterprise\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify actual title is \"Veeam Platform – protect and manage all workloads\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-protection-platform.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click contact us button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify actual title is \"Sales Inquiry - Veeam Software\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/salesinc.html?ad\u003dplatform\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User not fill mandatory fields",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "firstName",
        "[blank]"
      ]
    },
    {
      "cells": [
        "lastName",
        "[blank]"
      ]
    },
    {
      "cells": [
        "eMail",
        "[blank]"
      ]
    },
    {
      "cells": [
        "phone",
        "[blank]"
      ]
    },
    {
      "cells": [
        "country",
        "\u003ccountries\u003e"
      ]
    },
    {
      "cells": [
        "state",
        "\u003cstates\u003e"
      ]
    },
    {
      "cells": [
        "company",
        "[blank]"
      ]
    },
    {
      "cells": [
        "details",
        "Negative test"
      ]
    }
  ]
});
formatter.step({
  "name": "User click SEND REQUEST button for negative test",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify alerts are displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countries",
        "states"
      ]
    },
    {
      "cells": [
        "Canada",
        "Manitoba"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Unsuccessfully filled contact form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@US_1005"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User goes to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.user_goes_to_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"Solutions\" \"Enterprise\"",
  "keyword": "When "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.userNavigatesTo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Veeam Platform – protect and manage all workloads\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/data-protection-platform.html?ad\u003dmenu-solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click contact us button",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_click_CONTACT_US_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actual title is \"Sales Inquiry - Veeam Software\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.theTitleContains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify actualURL is \"https://www.veeam.com/salesinc.html?ad\u003dplatform\"",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Mainpage_Defs.verifyActualURLIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User not fill mandatory fields",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.user_not_fill_form(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click SEND REQUEST button for negative test",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.userClickSENDREQUESTButtonForNegativeTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify alerts are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "net.veeam.stepdefinations.Solutions_Defs.verifyAlertsAreDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});