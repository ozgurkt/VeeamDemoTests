package com.veeam.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class MainPage extends BasePage {


    @FindBy(id = "cookiescript_accept")
    public WebElement acceptCookies;
    @FindBy(xpath = "//li[@class='main-navigation__item']")
    public List<WebElement> mainNavigationBar;

    @FindBy(css = "a.list-of-links__link")
    public List<WebElement> submenu;










}
