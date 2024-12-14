// Написать Page Object класс для страницы Sign In:
//   - email input
//   - password input
//   - login button
//   - fillCredentials method
//   - click on login button method

import { BasePage } from "./base.page";

class LoginPage extends BasePage {
  readonly email = '[for="emailinput"]';
  readonly password = "#passwordinput";
  readonly loginbutton = "button.btn.btn-primary";

  async fillCredentials(credentials?: {
    email?: string;
    password?: string;
  }): Promise<void> {
    credentials?.email && (await this.setValue(this.email, credentials.email));
    credentials?.password &&
      (await this.setValue(this.password, credentials.password));
  }

  async clickOnLoginButton(loginbutton: string): Promise<void> {
    await this.click(loginbutton);
  }
}
