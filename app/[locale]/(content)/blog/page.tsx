import { ListBlog } from "@/components/container/listBlog";
import { getAllBlogs } from "./blog.action";
import Features from "@/components/landing-page/features";

export default async function PageBlog() {
  const blogs = getAllBlogs();
  return (
    <div className="w-full bg-background text-foreground font-mono">
      <ListBlog blogs={blogs} />
      <Features />
    </div>
  );
}
