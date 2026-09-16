import { loadPost } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { MdxContent } from "./mdx-component";
import { Terminal } from "lucide-react";

export default async function PageDetailBlog({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const post = loadPost(title);

  const { frontmatter, content } = post;

  return (
    <div className="w-full bg-background text-foreground font-mono">
      <div className="px-4 sm:px-8 lg:px-12 py-10 lg:py-14 max-w-4xl">
        <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Blog // Dossier</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-none">
          {frontmatter.title}
        </h1>
        <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 max-w-xl">{frontmatter.description}</p>
        <div className="flex flex-wrap gap-px bg-border border border-border w-fit mt-5">
          <Badge className="rounded-none border-0">Publié le {frontmatter.created_at}</Badge>
        </div>

        {frontmatter.banner_url && (
          <div className="mt-6 border border-border bg-card p-2 shadow-sm">
            <div className="overflow-hidden border border-border">
              <img
                src={frontmatter.banner_url}
                alt={frontmatter.title}
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        )}
        <div className="mt-6 border-t border-border pt-6 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
          <MdxContent content={content} />
        </div>
        <div className="flex items-center justify-between pt-4 mt-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>Post // Detail</div>
          <div>System active</div>
        </div>
      </div>
    </div>
  );
}
