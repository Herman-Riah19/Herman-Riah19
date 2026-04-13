import { getAllBlogs } from "@/app/[locale]/(content)/blog/blog.action";
import { test, expect } from "@playwright/test";

const locales = ["en", "fr"];

for (const locale of locales) {
  test(`Blog page renders correctly in ${locale}`, async ({ page }) => {
    await page.goto(`/${locale}/blog`);
    const blogs = getAllBlogs();
    
    for (let i = 0; i < blogs.length; i++) {
      await expect(page.getByTestId(`blog-card-title-${blogs[i].title}`)).toBeVisible();
      await expect(page.getByTestId(`blog-card-description-${blogs[i].title}`)).toBeVisible();
    }
  });
}
