import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function loadPost(title: string) {
  const filePath = path.join(process.cwd(), "contents", "posts", `${title}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data: frontmatter, content } = matter(fileContent);

  return { frontmatter, content };
}
