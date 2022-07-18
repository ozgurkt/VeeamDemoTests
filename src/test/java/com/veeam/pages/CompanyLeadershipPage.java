package com.veeam.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class CompanyLeadershipPage extends BasePage{

    @FindBy(xpath = "//li[@class='b2-leaders-list-short__item']")
    public List<WebElement> companyLeadersList;


}
