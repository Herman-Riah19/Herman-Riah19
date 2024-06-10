import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};
 
export default withNextIntl(withMDX(nextConfig));