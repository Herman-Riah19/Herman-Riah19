import { loadPost } from "@/lib/mdx";
import { MDXClientProvider } from "@/components/mdx-client";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { Badge } from "@/components/ui/badge";

export default async function PageDetailBlog({
  params,
}: {
  params: { title: string };
}) {
  const { frontmatter, content } = loadPost(params.title);

  const components = useMDXComponents({});

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

      <MDXClientProvider>
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={content} components={components} />
        </div>
      </MDXClientProvider>
    </div>
  );
}
