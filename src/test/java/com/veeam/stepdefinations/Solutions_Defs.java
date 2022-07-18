package com.veeam.stepdefinations;
import io.cucumber.java.DataTableType;
import io.cucumber.java.en.*;
import com.veeam.pages.SolutionsPage;
import com.veeam.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class Solutions_Defs {
    SolutionsPage solutionsPage = new SolutionsPage();

    @Then("User click contact us button")
    public void user_click_CONTACT_US_button() {
        BrowserUtils.waitFor(5);

        solutionsPage.contactButton.click();

    }

    @Then("User fill form")
    public void user_fill_form(Map<String, String> userInfo) throws InterruptedException {

        BrowserUtils.waitFor(5);
        solutionsPage.firstName.sendKeys(userInfo.get("firstName"));
        solutionsPage.lastName.sendKeys(userInfo.get("lastName"));
        solutionsPage.email.sendKeys(userInfo.get("eMail"));
        Thread.sleep(1000);
        solutionsPage.country.click();


        List<WebElement> countryList = solutionsPage.countries;
        List<String> countryListAsString = new ArrayList<>();
        for (WebElement element : countryList) {
            countryListAsString.add(element.getText());
        }

        int selectCountry = countryListAsString.indexOf(userInfo.get("country"));

        Thread.sleep(1000);
        solutionsPage.countries.get(selectCountry).click();


        BrowserUtils.waitFor(3);
        solutionsPage.phone.sendKeys(userInfo.get("phone"));

        Thread.sleep(1000);

        if (solutionsPage.stateDisplay.isEnabled()) {
            solutionsPage.state.click();
            List<WebElement> stateList = solutionsPage.states;
            List<String> stateListAsString = new ArrayList<>();
            for (WebElement element : stateList) {
                stateListAsString.add(element.getText());
            }
            //System.out.println("stateListAsString = " + stateListAsString);
            int selectState = stateListAsString.indexOf(userInfo.get("state"));
            solutionsPage.states.get(selectState).click();
            solutionsPage.pageHeader.click();
            Thread.sleep(1000);
        }


        BrowserUtils.waitFor(3);

        solutionsPage.company.sendKeys(userInfo.get("company"));

        solutionsPage.product.click();
        Thread.sleep(1000);
        List<WebElement> productList = solutionsPage.products;
        List<String> productListAsString = new ArrayList<>();
        for (WebElement element : productList) {
            productListAsString.add(element.getText());
        }
        //System.out.println("productListAsString = " + productListAsString);
        int selectProduct = productListAsString.indexOf(userInfo.get("product"));
        solutionsPage.products.get(selectProduct).click();
        Thread.sleep(1000);
        solutionsPage.pageHeader.click();


        BrowserUtils.waitFor(3);

        solutionsPage.details.sendKeys(userInfo.get("details"));


        if (solutionsPage.marketingConsent.isDisplayed()) {
            solutionsPage.marketingConsent.click();

        }
    }

    @Then("User click SEND REQUEST button")
    public void user_click_SEND_REQUEST_button() {

        //solutionsPage.sendRequest.click();
        //We verify that form has been submitted with Assert.assertTrue or Assert.assertEquals methods (actual Page-title, actualURL or actual Body Element etc.)


    }


    @Then("Verify alerts are displayed")
    public void verifyAlertsAreDisplayed() {
        BrowserUtils.waitFor(1);
        Assert.assertTrue(solutionsPage.firstName.getText().isEmpty());
        Assert.assertTrue(solutionsPage.nameAlert.isDisplayed());

        Assert.assertTrue(solutionsPage.lastName.getText().isEmpty());
        Assert.assertTrue(solutionsPage.lastnameAlert.isDisplayed());

        Assert.assertTrue(solutionsPage.email.getText().isEmpty());
        Assert.assertTrue(solutionsPage.emailAlert.isDisplayed());

        Assert.assertTrue(solutionsPage.phone.getText().isEmpty());
        Assert.assertTrue(solutionsPage.phoneAlert.isDisplayed());

        Assert.assertTrue(solutionsPage.company.getText().isEmpty());
        Assert.assertTrue(solutionsPage.companyAlert.isDisplayed());

        Assert.assertTrue(solutionsPage.productAlert.isDisplayed());

    }
    @DataTableType(replaceWithEmptyString = "[blank]")
    public String putBlank(String cell) {
        return cell;
    }

    @Then("User click SEND REQUEST button for negative test")
    public void userClickSENDREQUESTButtonForNegativeTest() {
        solutionsPage.sendRequest.click();
    }

    @Then("User not fill mandatory fields")
    public void user_not_fill_form(Map<String, String> userInfo) throws InterruptedException {
        BrowserUtils.waitFor(3);
        solutionsPage.firstName.sendKeys(userInfo.get("firstName"));
        solutionsPage.lastName.sendKeys(userInfo.get("lastName"));
        solutionsPage.email.sendKeys(userInfo.get("eMail"));

        solutionsPage.country.click();


        List<WebElement> countryList = solutionsPage.countries;
        List<String> countryListAsString = new ArrayList<>();
        for (WebElement element : countryList) {
            countryListAsString.add(element.getText());
        }

        int selectCountry = countryListAsString.indexOf(userInfo.get("country"));

        Thread.sleep(1000);
        solutionsPage.countries.get(selectCountry).click();


        BrowserUtils.waitFor(3);
        solutionsPage.phone.sendKeys(userInfo.get("phone"));

        Thread.sleep(1000);

        if (solutionsPage.stateDisplay.isEnabled()) {
            solutionsPage.state.click();
            List<WebElement> stateList = solutionsPage.states;
            List<String> stateListAsString = new ArrayList<>();
            for (WebElement element : stateList) {
                stateListAsString.add(element.getText());
            }
            //System.out.println("stateListAsString = " + stateListAsString);
            int selectState = stateListAsString.indexOf(userInfo.get("state"));
            solutionsPage.states.get(selectState).click();
            solutionsPage.pageHeader.click();
            Thread.sleep(1000);
        }


        BrowserUtils.waitFor(3);

        solutionsPage.company.sendKeys(userInfo.get("company"));

        solutionsPage.pageHeader.click();

        BrowserUtils.waitFor(3);

        solutionsPage.details.sendKeys(userInfo.get("details"));


        if (solutionsPage.marketingConsent.isDisplayed()) {
            solutionsPage.marketingConsent.click();

        }
    }

}
