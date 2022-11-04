const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { LoginPage } = require("../pageObject/LoginPage");
const { HomePage } = require("../pageObject/HomePage");

const loginPage = new LoginPage();
const homePage = new HomePage();

Given("a user has navigated to the login dashboard", async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user has navigated to the login dashboard");

  await loginPage.navigateToLoginPage();
});

When(
  "the user enters the credentials with email {string} and Password {string}",
  async function (email, password) {
    await loginPage.login(email, password);
  }
);
Then("the user should  be naviaged to the homepage", async function () {
  const logoutLocator = page.locator(homePage.logoutSelector);
  await expect(logoutLocator).toBeVisible();
});

Then(
  "the user should be given invalid credentials {string}",
  async function (errorMessage) {
    const innerText = await loginPage.getErrorMessageText();
    console.log("The user entered to the Loginpage");
    if (innerText.trim() !== errorMessage) {
      throw new Error("Expected message not found");
    }
  }
);
