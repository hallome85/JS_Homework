// Task 1.

// Разработать тест со следующими шагами:

//   - открыть https://the-internet.herokuapp.com/
//   - перейти на страницу Dynamic Controls
//   - Дождаться появления кнопки Remove
//   - Завалидировать текста в заголовке страницы
//   - Чекнуть чекбокс
//   - Кликнуть по кнопке Remove
//   - Дождаться исчезновения чекбокса
//   - Проверить наличие кнопки Add
//   - Завалидировать текст It's gone!
//   - Кликнуть на кнопку Add
//   - Дождаться появления чекбокса
//   - Завалидировать текст It's back!

describe("Dynamic Controls", async () => {
  const dynamicControlsSelector = 'a[href="/dynamic_controls"]'; ////a[@href="/dynamic_controls"]
  const subheaderTextSelector = 'h4+p'; ////p[contains(text(), "example demonstrates")]
  const checkboxSelector = 'input[type="checkbox"]'; /////input[@type="checkbox"]
  const removeButtonSelector = 'button[onclick="swapCheckbox()"]'; ////button[text()="Remove"]
  const addButtonSelector = '//button[text()="Add"]';
  const statusMesageSelector = "p#message"; ////*[@id="message"]

  before(async function () {
    await browser.maximizeWindow();
  });

  beforeEach(async function () {
    await browser.url("https://the-internet.herokuapp.com/");
    await $(dynamicControlsSelector).click();
  });

  it("Should contain subheader", async function () {
    const actualText = await $(subheaderTextSelector).getText();
    expect(actualText).toBe(
      "This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously."
    );
  });

  it("Should remove checkbox", async function () {
    await $(removeButtonSelector).waitForDisplayed({
      timeout: 5000,
      interval: 500,
      timeoutMsg: `Element is not displayed after 5 seconds`,
      reverse: false,
    });
    await $(checkboxSelector).click();
    await $(removeButtonSelector).click();
    await $(checkboxSelector).waitForDisplayed({
      timeout: 5000,
      interval: 500,
      timeoutMsg: `Element is displayed after 5 seconds`,
      reverse: true,
    });
    const actualText = await $(statusMesageSelector).getText();
    expect(actualText).toBe("It's gone!");
  });

  it("Should get back checkbox", async function () {
    await $(removeButtonSelector).click();
    await $(checkboxSelector).click();
    await $(addButtonSelector).isDisplayed();
    await $(addButtonSelector).click();
    await $(checkboxSelector).waitForDisplayed({
      timeout: 5000,
      interval: 500,
      timeoutMsg: `Element is not displayed after 5 seconds`,
      reverse: false,
    });
    const actualText = await $(statusMesageSelector).getText();
    expect(actualText).toBe("It's back!");
  });
});
