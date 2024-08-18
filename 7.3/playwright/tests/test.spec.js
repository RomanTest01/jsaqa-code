const { test, expect } = require("@playwright/test");
const {
  username,
  password, 
  unknownUsername,
  unkwnownPassword,
} = require("./../user");

test("Good test", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(username);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  
  await page.waitForTimeout(15000);

  const h2Text = await page.innerText("h2");
  await expect(h2Text).toBe("Моё обучение");
});


test("Authorisation failed", async ({ page }) => {

await page.goto("https://netology.ru/?modal=sign_in");
await page.getByPlaceholder("Email").click();
await page.getByPlaceholder("Email").fill(unknownUsername);
await page.getByPlaceholder("Пароль").click();
await page.getByPlaceholder("Пароль").fill(unkwnownPassword);
await page.getByTestId("login-submit-btn").click();



  const error = await page.locator('[data-testid="login-error-hint"]');
  await expect(error).toHaveText("Вы ввели неправильно логин или пароль.");
});




