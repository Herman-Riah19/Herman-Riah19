import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the directory containing the blog posts
const postsDirectory = path.join(process.cwd(), '/contents/posts');

// Function to get all blog metadata
export function getAllBlogs() {
    const files = fs.readdirSync(postsDirectory);
    const blogs = files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
            const filePath = path.join(postsDirectory, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                fileName: file.replace('.mdx', ''),
                title: data.title || '',
                description: data.description || '',
                created_at: data.created_at || '',
                banner_url: data.banner_url || '',
            };
        });

    return blogs;
}

// Function to get the content of a specific blog
export function getBlogContent(fileName: string) {
    const filePath = path.join(postsDirectory, `${fileName}.mdx`);
    if (!fs.existsSync(filePath)) {
        throw new Error(`File ${fileName} does not exist`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContent);

    return content;
}