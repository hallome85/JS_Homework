//npm run test -- --spec="./src/tests/task_2.test.ts"

//     Task 2.
//  Создать функцию waitForElementWithText(selector, text, timeout) для ожидания определенного текста (text)
//  у элемента с определенным селектором (selector) на протяжении определенного времени (timeout):
//   - Использовать browser.waitUntil с комбинацией проверок (элемент виден и тест верный)
//   - Добавить понятный timeoutMsg, с пояснением какие проверки не пройдены и селектором элемента

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
    await waitForElementWithText(statusMesageSelector, "It's back!", 5000);
  });

  async function waitForElementWithText(
    selector: string,
    text: string,
    timeout: number
  ) {
    await browser.waitUntil(
      async () => {
        const element = $(selector);
        const isDisplayed = await element.isDisplayed();
        const elementText = await element.getText();
        return isDisplayed && elementText.includes(text);
      },
      {
        timeout,
        interval: 500,
        timeoutMsg: `Element with selector "${selector}" is not displayed after ${timeout} sec or does not contain the expected text "${text}".`,
      }
    );
  }
});
