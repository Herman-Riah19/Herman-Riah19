import type { MetadataRoute } from "next";
import { getAllBlogs } from "./[locale]/(content)/blog/blog.action";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://herman-riah19.vercel.app";
  const listBlog = await getAllBlogs();
  const blogIds = listBlog.map((blog) => blog.filName);
  const blogUrls = blogIds.flatMap((id) => [
    {
      url: `${baseUrl}/en/blog/${id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/blog/${id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ]);

  return [
    // 🌍 Home pages
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    // 📄 About
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // 📝 Blog listing
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // 📦 Projects
    {
      url: `${baseUrl}/en/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // 🧠 Blog dynamiques
    ...blogUrls,
  ];
}
