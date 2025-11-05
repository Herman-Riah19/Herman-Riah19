import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Terminal } from './components/magicui/terminal';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='mt-4 text-[4vw] font-extrabold text-center bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>{children}</h1>
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
      <h2 className='mt-4 text-[2vw] font-extrabold'>{children}</h2>
    )},
    h3: ({ children }) => {
      const isFrontMatter = (text: string) => {
        const frontMatterRegex = /^"\n([\s\S]*?)\n"/;
        return frontMatterRegex.test(text.trim());
      };

      if (typeof children === 'string' && isFrontMatter(children)) {
        return null;
      }
      return (
      <h3 className='mt-4 text-[1vw] font-extrabold'>{children}</h3>
    )},
    ol: ({ children }) => (
      <ol className='mt-4 list-decimal m-4'>{children}</ol>
    ),
    ul: ({ children }) => (
      <ul className='mt-4 list-disc m-4'>{children}</ul>
    ),
    li: ({ children }) => (
      <li className='text-lg font-regular text-justify list-disc'>{children}</li>
    ),
    p: ({ children }) => (
      <p className='mt-4 text-lg font-regular text-justify'>{children}</p>
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
    code: (props: any) => {
      const { className, children } = props
      const match = /language-(\w+)/.exec(className || '')
      const language = match ? match[1] : 'tsx' // par défaut TypeScript

      return (
        <code className="mt-4 text-foreground font-mono px-2 py-1 rounded text-sm">
          {children}
        </code>
      )
    },
    pre: ({ children, ...props }: any) => {
      const child = children?.props || {}
      const className = child.className || ''
      const match = /language-(\w+)/.exec(className)
      const language = match ? match[1] : 'tsx'

      return (
        <div className="mt-4 overflow-hidden rounded-xl border border-border shadow-sm">
          <Terminal>
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              PreTag="div"
              customStyle={{
                margin: 0,
                background: 'transparent',
                fontSize: '0.9rem',
                textDecoration: "none"
              }}
              codeTagProps={{
                style: {
                  background: 'transparent',
                },
              }}
            >
              {child.children}
            </SyntaxHighlighter>
          </Terminal>
        </div>
      )
    },
    ...components,
  }
}