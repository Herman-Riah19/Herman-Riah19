import React from 'react';

type Props = {
    params: Promise<{ title: string }>;
};

export default async function PageDetailBlog({ params }: Props) {
    const { title } = await params;

    const Content = await import(`@/contents/posts/${title}.mdx`);
    const { default: Component } = Content;

    return (
        <div className="m-4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <Component />
        </div>
    );
}