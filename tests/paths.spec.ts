import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  //   await page.goto('https://my.start.url/');
});

const navbar = [
  {
    pageName: "Home",
    pageText: "text=Home",
    url: "",
    locator: "h1",
    contains: "We change communities through education",
  },
  {
    pageName: "About",
    pageText: "text=About",
    url: "about",
    locator: "h1",
    contains: "About Us",
  },
  {
    pageName: "Contact",
    pageText: "text=Contact",
    url: "contact",
    locator: "h1",
    contains: "Let's get in touch.",
  },
  {
    pageName: "Donate",
    pageText: "text=Donate",
    url: "donate",
    locator: "h1",
    contains: "A one time donation, a lifetime of learning.",
  },
];

test.describe("Navbar", () => {
  navbar.map((p) => {
    test("should navigate to the " + p.pageName + " page", async ({ page }) => {
      await page.goto("/");
      await page.click(p.pageText);
      await expect(page).toHaveURL(p.url);
      await expect(page.locator(p.locator).first()).toContainText(p.contains);
    });
  });
});
