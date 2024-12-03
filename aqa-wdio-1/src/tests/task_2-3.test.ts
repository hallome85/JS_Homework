// Разработайте смоук тест-сьют с тестами на LOGIN на странице https://anatoly-karpovich.github.io/demo-login-form/

// Требования:
//   Страница регистрации:
//     Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
//     Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен
//   Страница логина:
//     Username: обязательное
//     Password: обязательное


describe("[UI] Karpovich Demo Login And Registration Form", () => {
  const usernameInputSelectorOnRegistration = "#userNameOnRegister";
  const passwordInputSelectorOnRegistration = "#passwordOnRegister";
  const passwordInputSelectorOnLogin = "#password";
  const usernameInputSelectorOnLogin = "#userName";
  const registerButtonSelectorOnLogin = "#registerOnLogin";
  const registerButtonSelectorOnRegistration = "#register";
  const backButtonSelector = "#backOnRegister";
  const submitButtonSelector = "#submit";
  const errorMessageOnRegistrationSelector = "#errorMessageOnRegister";
  const errorMessageOnLoginSelector = "#errorMessage";
  const successLoginMessageSelector = "#successMessage";
  const backToLoginButtonSelector = "#backButton";

  const validUsername = "Oksana";
  const validPassword = "MyPassword";
  const invalidUsername = "NeOksana";
  const invalidPassword = "NotMyPassword";
  const outOfRequirementsUsername = "Ok";
  const outOfRequirementsPassword = "pass";
  const emptyUsername = "";
  const emptyPassword = "";
  const errorMessageOnLogin = "Invalid credentials";
  const errorMessageOnRegistration = "Please, provide valid data";
  const successMessageOnRegistration =
    "Successfully registered! Please, click Back to return on login page";
  const successLoginMessage = `Hello, ${validUsername}!`;
  const errorMessageOfEmpty = "Credentials are required";

  beforeEach(async function () {
    await browser.url("https://anatoly-karpovich.github.io/demo-login-form/");
  });

   afterEach(async function () {
    await browser.execute(() => {
      localStorage.clear();
    });
  });
  

  it("Shouldn't register with out of requirements username and password", async function () {
    await $(registerButtonSelectorOnLogin).click();
    await $(usernameInputSelectorOnRegistration).setValue(
      outOfRequirementsUsername
    );
    await $(passwordInputSelectorOnRegistration).setValue(
      outOfRequirementsPassword
    );
    await $(registerButtonSelectorOnRegistration).click();
    const actualText = await $(errorMessageOnRegistrationSelector).getText();
    expect(actualText).toContain(errorMessageOnRegistration);
  });

  it("Should register with valid username and password", async function () {
    await $(registerButtonSelectorOnLogin).click();
    await $(usernameInputSelectorOnRegistration).setValue(validUsername);
    await $(passwordInputSelectorOnRegistration).setValue(validPassword);
    await $(registerButtonSelectorOnRegistration).click();
    const actualText = await $(errorMessageOnRegistrationSelector).getText();
    expect(actualText).toContain(successMessageOnRegistration);
    await $(backButtonSelector).click();
  });

  it("Should login with valid username and password", async function () {
    await $(registerButtonSelectorOnLogin).click();
    await $(usernameInputSelectorOnRegistration).setValue(validUsername);
    await $(passwordInputSelectorOnRegistration).setValue(validPassword);
    await $(registerButtonSelectorOnRegistration).click();
    await $(backButtonSelector).click();
    await $(usernameInputSelectorOnLogin).setValue(validUsername);
    await $(passwordInputSelectorOnLogin).setValue(validPassword);
    await $(submitButtonSelector).click();
    const actualText = await $(successLoginMessageSelector).getText();
    expect(actualText).toContain(successLoginMessage);
    await $(backToLoginButtonSelector).click();
  });

  it("Shouldn't login with invalid username and password", async function () {
    await $(usernameInputSelectorOnLogin).setValue(invalidUsername);
    await $(passwordInputSelectorOnLogin).setValue(invalidPassword);
    await $(submitButtonSelector).click();
    const actualText = await $(errorMessageOnLoginSelector).getText();
    expect(actualText).toContain(errorMessageOnLogin);
  });

  it("Shouldn't login with empty username and password", async function () {
    await $(usernameInputSelectorOnLogin).setValue(emptyUsername);
    await $(passwordInputSelectorOnLogin).setValue(emptyPassword);
    await $(submitButtonSelector).click();
    const actualText = await $(errorMessageOnLoginSelector).getText();
    expect(actualText).toContain(errorMessageOfEmpty);
  });
});
