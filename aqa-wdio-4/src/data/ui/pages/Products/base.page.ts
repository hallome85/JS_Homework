export abstract class BasePage {
  async findElement(selector: string) {
    return $(selector);
  }

  async click(selector: string) {
    const element = await this.findElement(selector);
    await element.waitForEnabled();
    await element.click();
  }

  async setValue(selector: string, value: string | number) {
    const input = await this.findElement(selector);
    await input.setValue(value);
  }
}
