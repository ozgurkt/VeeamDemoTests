package com.veeam.stepdefinations;

import io.cucumber.java.en.*;
import com.veeam.pages.CompanyLeadershipPage;
import com.veeam.utilities.BrowserUtils;
import com.veeam.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import java.util.List;
import java.util.Set;

public class CompanyLeadership_Defs {

    CompanyLeadershipPage companyLeadershipPage = new CompanyLeadershipPage();

    @Then("Verify leadership members are {int}")
    public void verify_leadership_members_are(int expectedSize) {
       List<WebElement> companyLeaders = companyLeadershipPage.companyLeadersList;
       int actualSize = companyLeaders.size();
        Assert.assertEquals(actualSize,expectedSize);

    }

    @Then("Verify {string} is {string}")
    public void verify_is(String expectedJobTitle, String expectedName) {

        BrowserUtils.waitFor(2);
        WebElement actualJobTitle = Driver.get().findElement(By.xpath("(//a[@data-name='"+expectedName+"']/div/p)[2]"));

        WebElement actualName = Driver.get().findElement(By.xpath("(//a[@data-name='"+expectedName+"']/div/p)[1]"));


        Assert.assertEquals(actualJobTitle.getText(),expectedJobTitle);

        Assert.assertEquals(actualName.getText(),expectedName);

    }

    @Then("Verify {string} Linkedin link is active")
    public void verify_Linkedin_link_is_active(String fullName) {
        WebElement linkedinIcon = Driver.get().findElement(By.xpath("//a[@data-name='"+fullName+"']/following-sibling::*"));
        linkedinIcon.click();

        String currentWindowHandle = Driver.get().getWindowHandle();

        Set<String> windowHandles = Driver.get().getWindowHandles();

        for (String handle : windowHandles) {

            if(!handle.equals(currentWindowHandle)){
                Driver.get().switchTo().window(handle);
            }
        }
        String actualURL = Driver.get().getCurrentUrl();

        Assert.assertTrue(actualURL.contains("https://www.linkedin.com/"));


    }

}
