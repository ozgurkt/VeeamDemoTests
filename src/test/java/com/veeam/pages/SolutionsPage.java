package com.veeam.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class SolutionsPage extends BasePage {

    @FindBy(xpath = "//a[@class='h-button h-button--secondary-action-primary']")
    public WebElement contactButton;

    @FindBy(name = "first-name")
    public WebElement firstName;

    @FindBy(name = "last-name")
    public WebElement lastName;

    @FindBy(name = "email")
    public WebElement email;


    @FindBy(name = "phone")
    public WebElement phone;

    @FindBy(xpath = "(//span[@class='ss-arrow'])[1]")
    public WebElement country;

    @FindBy(xpath = "(//div[@class='ss-list'])[1]/div")
    public List<WebElement> countries;

    @FindBy(xpath ="(//span[@class='ss-arrow'])[2]" )
    public WebElement state;

    @FindBy(xpath = "(//div[@class='ss-list'])[2]/div")
    public List<WebElement> states;

    @FindBy(id = "state0904ef9c-3cd4-331e-87c6-4664fd77cc63")
    public WebElement stateDisplay;

    @FindBy(name = "company")
    public WebElement company;

    @FindBy(xpath = "(//span[@class='ss-arrow'])[3]")
    public WebElement product;

    @FindBy(xpath = "(//div[@class='ss-list'])[3]/div")
    public List<WebElement> products;

    @FindBy(name = "details")
    public WebElement details;

    @FindBy(xpath = "//input[@name='marketing_consent']")
    public WebElement marketingConsent;

    @FindBy(css = "div[data-component='VeeamTextComponent'] h1")
    public WebElement pageHeader;

    @FindBy(xpath = "(//button[@tyPe='submit'])[2]")
    public WebElement sendRequest;


    @FindBy(id = "parsley-id-5")
    public WebElement nameAlert;

    @FindBy(id = "parsley-id-7")
    public WebElement lastnameAlert;

    @FindBy(id = "parsley-id-9")
    public WebElement emailAlert;

    @FindBy(id = "parsley-id-11")
    public WebElement phoneAlert;

    @FindBy(id = "parsley-id-21")
    public WebElement companyAlert;

    @FindBy(id = "parsley-id-23")
    public WebElement productAlert;







}
