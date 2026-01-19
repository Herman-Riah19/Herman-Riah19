import { ProjectModelEn, ProjectModelFr } from "@/model/ProjectModel";
import { test, expect } from "@playwright/test";

const locales = ["en", "fr"];

for (const locale of locales) {
  test(`Project page renders correctly in ${locale}`, async ({ page }) => {
    await page.goto(`/${locale}/projects`);

    await expect(page.getByTestId("projects-checkout")).toBeVisible();
    await expect(page.getByTestId("projects-description")).toBeVisible();
    
    const projects = locale === "en" ? ProjectModelEn : ProjectModelFr;

    for (let i = 1; i < projects.length; i++) {
      await expect(page.getByTestId(`project-title-${i}`)).toBeVisible();
      await expect(page.getByTestId(`project-dates-${i}`)).toBeVisible();
    }
  });
}