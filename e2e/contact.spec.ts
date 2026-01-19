import { test, expect } from "@playwright/test";

const locales = ["en", "fr"];

for (const locale of locales) {
  test(`MailContact form renders and submits in ${locale}`, async ({ page }) => {
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
