import { ListBlog } from "@/components/container/listBlog";
import { getAllBlogs } from "./blog.action";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Features from "@/components/landing-page/features";

export default async function PageBlog() {
  const blogs = getAllBlogs();
  return (
    <div className="flex flex-col gap-4">
      <ListBlog blogs={blogs} />
      <NeonGradientCard className="m-0 p-0">
        <Features />
      </NeonGradientCard>
    </div>
  );
}
