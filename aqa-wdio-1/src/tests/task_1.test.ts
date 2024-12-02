// - Установить WebdriverIO
// - Добавить во wdio.conf.ts путь к папке с тестами в массив specs
// - Разработайте тест со следующими шагами:
//   1. Открыть страницу "https://the-internet.herokuapp.com/" используя browser.url()
//   2. Кликнуть по кнопке ссылке Form Authentication методом . click()
//   3. Ввести валидные username/password методом setValue()
//   4. Кликнуть Login
//   5. Завалидировать Заголовок и описание страницы, а также текст кнопки Logout


interface ILogged {
  title: string;
  subheader: string;
  button: string;
}

describe("[UI] Heroku App Login", () => {
  const loginLinkSelector = 'a[href="/login"]';
  const passwordInputSelector = "#password";
  const usernameInputSelector = "#username";
  const loginButtonSelector = ".radius";
  const successLoginNotificationSelector = "#flash";
  const loggedPageSelectors: ILogged = {
    title: "h2",
    subheader: ".subheader",
    button: ".button",
  };

  const username = "tomsmith";
  const password = "SuperSecretPassword!";
  const successLoginNotification = "You logged into a secure area!";
  const loggedPageData: ILogged = {
    title: "Secure Area",
    subheader:
      "Welcome to the Secure Area. When you are done click logout below.",
    button: "Logout",
  };

  beforeEach(async function () {
    await browser.url("https://the-internet.herokuapp.com/");
    const loginLink = await $(loginLinkSelector);
    await loginLink.click();
  });

  it("Should login with valid username and password", async function () {
    await $(usernameInputSelector).setValue(username);
    await $(passwordInputSelector).setValue(password);
    await $(loginButtonSelector).click();
    const actualText = await $(successLoginNotificationSelector).getText();
    expect(actualText).toContain(successLoginNotification);
  });

  it("Should have valid logged page layout", async function () {
    await $(usernameInputSelector).setValue(username);
    await $(passwordInputSelector).setValue(password);
    await $(loginButtonSelector).click();
    const actualData: ILogged = {
      title: await $(loggedPageSelectors.title).getText(),
      subheader: await $(loggedPageSelectors.subheader).getText(),
      button: (await $(loggedPageSelectors.button).getText()).trim(),
    };
    expect(actualData).toMatchObject({ ...loggedPageData });
  });
});
