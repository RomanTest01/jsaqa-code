let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for Teams"); 
  }, 15000);
  

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 15000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 15000);
});

describe("HomeWork - 3 new tests for task №2", () => {
  test("Header of Actions", async () => {
    await page.goto("https://github.com/features/actions");
    const title = await page.title();
    expect(title).toContain("Features • GitHub Actions");
  });

  test("Compare plans in the pricing", async () => {
    await page.goto("https://github.com/pricing");
    const actual = await page.$eval("div", (link) => link.textContent);
    expect(actual).toContain("Learn more ");
  });

  test("Enterprise-Grade on Security-page", async () => {
    await page.goto("https://github.com/features/security");
    const actual = await page.title();
    expect(actual).toEqual("Features • Security · GitHub");
  });
});
