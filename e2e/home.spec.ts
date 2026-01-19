import { ProjectModelEn, ProjectModelFr } from "@/model/ProjectModel";
import { test, expect } from "@playwright/test";

const locales = ["en", "fr"];

for (const locale of locales) {
  test(`hero renders correctly in ${locale}`, async ({ page }) => {
    await page.goto(`/${locale}/`);

    await expect(page.getByTestId("home-service")).toBeVisible();
    await expect(page.getByTestId("home-hello")).toBeVisible();
    await expect(page.getByTestId("home-firstname")).toBeVisible();
    await expect(page.getByTestId("home-lastname")).toBeVisible();
    await expect(page.getByTestId("home-email")).toBeVisible();
  });

  test(`features render correctly in ${locale}`, async ({ page }) => {
    await page.goto(`/${locale}/`);

    await expect(page.getByTestId("features-title")).toBeVisible();
    await expect(page.getByTestId("features-checkout")).toBeVisible();
    await expect(page.getByTestId("features-description")).toBeVisible();

    for (let i = 0; i < 4; i++) {
      await expect(page.getByTestId(`feature-${i}-header`)).toBeVisible();
      await expect(page.getByTestId(`feature-${i}-title`)).toBeVisible();
      await expect(page.getByTestId(`feature-${i}-content`)).toBeVisible();
    }
  });

  test(`projects render correctly in ${locale}`, async ({ page }) => {
    await page.goto(`/${locale}/`);

    await expect(page.getByTestId("projects-title")).toBeVisible();
    await expect(page.getByTestId("projects-checkout")).toBeVisible();
    await expect(page.getByTestId("projects-description")).toBeVisible();

    const projects = locale === "en" ? ProjectModelEn : ProjectModelFr;

    for (let i = 1; i < projects.length; i++) {
      await expect(page.getByTestId(`project-title-${i}`)).toBeVisible();
      await expect(page.getByTestId(`project-dates-${i}`)).toBeVisible();
    }
  });

  test(`MailContact form renders and submits in ${locale}`, async ({
    page,
  }) => {
    await page.goto(`/${locale}/`);

    await expect(page.getByTestId("contact-form")).toBeVisible();
    await expect(page.getByTestId("contact-email")).toBeVisible();
    await expect(page.getByTestId("contact-subject")).toBeVisible();
    await expect(page.getByTestId("contact-message")).toBeVisible();
    await expect(page.getByTestId("contact-submit")).toBeVisible();

    await page.getByTestId("contact-email").fill("test@example.com");
    await page.getByTestId("contact-subject").fill("Test Subject");
    await page.getByTestId("contact-message").fill("Hello World");

    await page.getByTestId("contact-submit").click();

    // Si tu veux vérifier le toast / message de succès ou erreur
    // await expect(page.getByText("Votre Email est envoyé")).toBeVisible();
  });
}
