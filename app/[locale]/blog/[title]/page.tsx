import { loadPost } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import MdxContent from "./mdx-component";

export default async function PageDetailBlog({
  params,
}: {
  params: { title: string };
}) {
  const post = loadPost(params.title);

  const { frontmatter, content } = post;

  return (
    <div className="m-4 flex flex-col gap-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-foreground">
        {frontmatter.title}
      </h1>
      <p className="text-foreground ">{frontmatter.description}</p>
      <div>
        <Badge>Publié le {frontmatter.created_at}</Badge>
      </div>

      {frontmatter.banner_url && (
        <img
          src={frontmatter.banner_url}
          alt={frontmatter.title}
          className="rounded-xl"
        />
      )}
      <MdxContent content={content} />
    </div>
  );
}
