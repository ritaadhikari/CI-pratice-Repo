const { Given, When, Then } = require("@cucumber/cucumber");

Given("a user  has navigated to the login dashboard", async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user  has navigated to the login dashboard");

  await page.goto("https://www.google.com");
  await page.pause();
});

When(
  "the user enters the valid credentials with email {string} and Password {string}",
  function (email, password) {
    console.log("Enter the Valid Credentials");
    const requiredEmail = "abc@gmail.com";
    if (email != requiredEmail) {
      throw new Error("Email id invalid");
    }
    const requiredPassword = "something";
    if (password != requiredPassword) {
      throw new Error("Password is incorrect");
    }
    console.log(email);
    console.log(password);
  }
);

Then("the user will be naviaged to the homepage", function () {
  console.log("Navigated to the HomePage");
});

When(
  "the user enters the invalid credentials with email {string} and Password {string}",
  function (invalidemail, invalidpassword) {
    console.log("Enter the Invalid Credentials");
    console.log(invalidemail);
    console.log(invalidpassword);
    // const i
  }
);

Then(
  "the user will be thrown invalid credentials {string}",
  function (errormessage) {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    console.log(errormessage);
  }
);

When("the user enters with a {string}", function (invalidEmail) {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  console.log(invalidEmail);
});

Then("the user will thrown a {string}", function (errorMessage) {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  console.log(errorMessage);
});

When("the user logins with following credentials", function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  const myTable = dataTable.hashes();
  console.log(myTable);
  for (let i = 0; i < myTable.length; i++) {
    let Email = myTable[i].email;
    let password = myTable[i].password;
    console.log(
      "Email is" + " " + Email + " " + "And password is" + " " + password
    );
  }
});
