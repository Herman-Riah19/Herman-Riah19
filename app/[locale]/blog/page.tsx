import { getAllBlogs } from "./blog.action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "next-intl/server";

export default async function PageBlog() {
  const blogs = getAllBlogs();
  const locale = await getLocale();

  return (
    <div className="flex flex-col gap-4">
      <section className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <Link key={idx} href={`/${locale}/blog/${blog.fileName}`}>
            <Card>
              <CardHeader>
                <Image
                  src={blog.banner_url}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle data-testid={`blog-card-title-${blog.title}`}>{blog.title}</CardTitle>
                <CardDescription data-testid={`blog-card-description-${blog.title}`}>{blog.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
};
