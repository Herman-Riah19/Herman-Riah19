import { loadPost } from "@/lib/mdx";
import { MDXClientProvider } from "@/components/mdx-client";


export default async function PageDetailBlog({ params }: { params: { title: string } }) {
  const { frontmatter, content } = loadPost(params.title);
  const Content = (await import(`@/contents/posts/${params.title}.mdx`)).default;

  return (
    <div className="m-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
      <p className="text-gray-500">{frontmatter.description}</p>
      <p className="text-sm text-gray-400">Publié le {frontmatter.created_at}</p>
      {frontmatter.banner_url && (
        <img src={frontmatter.banner_url} alt={frontmatter.title} className="rounded-xl" />
      )}

      <MDXClientProvider>
        <Content />
      </MDXClientProvider>
    </div>
  );
}
