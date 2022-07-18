package com.veeam.stepdefinations;


import com.veeam.utilities.BrowserUtils;
import com.veeam.utilities.ExcelUtil;
import com.veeam.pages.MainPage;
import com.veeam.utilities.ConfigurationReader;
import com.veeam.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Mainpage_Defs {
    WebDriver driver = Driver.get();
    Actions actions = new Actions(driver);

    @Given("User goes to main page")
    public void user_goes_to_main_page() {
        driver.get(ConfigurationReader.get("url"));
        BrowserUtils.waitFor(1);
        new MainPage().acceptCookies.click();
    }

    @Then("User should see following options on Main Navigation Bar")
    public void userShouldSeeFollowingOptionsOnNavigationBar(List<String> expectedMainMenuOptions) {


        List<WebElement> actualMainMenu = new MainPage().mainNavigationBar;
        List<String> actualMainMenuOptions = new ArrayList<>();
        for (WebElement element : actualMainMenu) {
            actualMainMenuOptions.add(element.getText());
        }
        Assert.assertEquals(expectedMainMenuOptions, actualMainMenuOptions);

    }

    @And("Verify Mainmenu Options count is {int}")
    public void verifySubmenuItemsAreExpectedWithAmount(int expectedCount) {
        Assert.assertEquals(expectedCount, new MainPage().mainNavigationBar.size());

    }

    @And("Verify submenu items are as Expected : from ExcelSheet")
    public void verifyItemsNamesAreAsExpected() {
        MainPage mainPage = new MainPage();
        ExcelUtil veeamData = new ExcelUtil("src/test/resources/navigationMenu.xlsx", "table1");
        List<Map<String, String>> dataList = veeamData.getDataList();
        String[] menuItems = {"Products", "Solutions", "Resources", "Partners", "Company", "How To Buy"};
        List<String> actualSubmenuItems = new ArrayList<>();

        for (int i = 0; i < 6; i++) {
            WebElement tabElement = Driver.get().findElement(By.linkText(menuItems[i]));
            actions.moveToElement(tabElement).perform();
            List<WebElement> actualSubMenu = mainPage.submenu;
            for (WebElement element : actualSubMenu) {
                actualSubmenuItems.add(element.getText());
            }
        }

        for (int j = 0; j < veeamData.rowCount() - 1; j++) {

            Assert.assertTrue(actualSubmenuItems.contains(dataList.get(j).get("subMenu")));

        }


    }

    @When("User navigates to {string} {string}")
    public void userNavigatesTo(String mainMenu, String subMenu) {
        WebElement tabElement = Driver.get().findElement(By.linkText(mainMenu));
        actions.moveToElement(tabElement).perform();
        WebElement element = Driver.get().findElement(By.linkText(subMenu));
        BrowserUtils.waitFor(3);
        element.click();
    }

    @Then("Verify actual title is {string}")
    public void theTitleContains(String expectedTitle) {
        Assert.assertEquals(expectedTitle, driver.getTitle());
        //System.out.println("driver.getTitle() = " + driver.getTitle());

    }

    @And("Verify actualURL is {string}")
    public void verifyActualURLIs(String expectedURL) {
        Assert.assertEquals(expectedURL, driver.getCurrentUrl());
        //System.out.println("driver.getCurrentUrl() = " + driver.getCurrentUrl());

    }
}

