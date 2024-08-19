const { test, expect, chromium } = require("@playwright/test");
const {
  username,
  password, 
  unknownUsername,
  unkwnownPassword,
} = require("./../user");

test("Good test", async ({  }) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://netology.ru/?modal=sign_in");

  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(username);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();

  //await page.waitForLoadState('load');
  await page.waitForTimeout(30000);
  //await page.waitForLoadState('networkidle',{timeout:50000});

 await expect(page.locator('h2')).toHaveText("Моё обучение");

  //await browser.close();
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




