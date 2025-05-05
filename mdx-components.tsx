import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Terminal, TypingAnimation } from './components/magicui/terminal';
import matter from 'gray-matter';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-[4vw] font-extrabold text-center mt-5 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>{children}</h1>
    ),
    h2: ({ children }) => {
      const isFrontMatter = (text: string) => {
        const frontMatterRegex = /^"\n([\s\S]*?)\n"/;
        return frontMatterRegex.test(text.trim());
      };

      if (typeof children === 'string' && isFrontMatter(children)) {
        return null;
      }
      return (
      <h2 className='text-[2vw] font-extrabold mt-0 mb-2 m-4'>{children}</h2>
    )},
    ol: ({ children }) => (
      <ol className='list-decimal m-4'>{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className='list-disc'>{children}</ul>
    ),
    li: ({ children }) => (
      <li className='text-lg font-regular text-justify list-disc'>{children}</li>
    ),
    p: ({ children }) => (
      <p className='text-lg font-regular text-justify m-4'>{children}</p>
    ),
    hr: ({ children }) => (
      <hr className='m-4'>{children}</hr>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        width={100}
        height={100}
        {...(props as ImageProps)}
      />
    ),
    code: ({ children }) => (
      <code className='bg-gray-100 text-red-600 font-mono p-1 rounded'>{children}</code>
    ),
    pre: ({ children }) => (
      <Terminal>
        <span>
            {children}
        </span>
      </Terminal>
    ),
    ...components,
  }
}