import { test, expect } from "@playwright/test";

const locales = ["en", "fr"];

for (const locale of locales) {
  test(`About section in ${locale}`, async({ page}) => {
    await page.goto(`/${locale}/about`);

    await expect(page.getByTestId("about-title")).toBeVisible();
    await expect(page.getByTestId("about-content")).toBeVisible();
  });

  test(`Profile section in ${locale}`, async({ page}) => {
    await page.goto(`/${locale}/about`);
    
    await expect(page.getByTestId("profile-image")).toBeVisible();
    await expect(page.getByTestId("profile-email")).toBeVisible();
    await expect(page.getByTestId("profile-phone")).toBeVisible();
  });

  test(`Resume section in ${locale}`, async({ page}) => {
    await page.goto(`/${locale}/about`);
    
    await expect(page.getByTestId("resume-title")).toBeVisible();
    await expect(page.getByTestId("resume-content")).toBeVisible();
  });

  test(`Education section in ${locale}`, async({ page}) => {
    await page.goto(`/${locale}/about`);
    
    await expect(page.getByTestId("education-title")).toBeVisible();
    await expect(page.getByTestId("education-content")).toBeVisible();
  });

  test(`List of technologies in ${locale}`, async({ page}) => {
    await page.goto(`/${locale}/about`);
    
    await expect(page.getByTestId("tech-title")).toBeVisible();
    await expect(page.getByTestId("tech-content")).toBeVisible();
  });

  test(`HobieProject section in ${locale}`, async({ page}) => {
    await page.goto(`/${locale}/about`);
    
    await expect(page.getByTestId("hobie-title")).toBeVisible();
    await expect(page.getByTestId("hobie-intro")).toBeVisible();
    await expect(page.getByTestId("hobie-list")).toBeVisible();
  });
}
