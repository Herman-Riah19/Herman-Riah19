import React from 'react'

const PostBlog = ({title, date, autor, introduction, developpement, conclusion}) => {
    return (
        <div className="blog-post">
            <h2 className="blog-post-title">{title}</h2>
            <p className="blog-post-meta">{date} by <a href="#">{autor}</a> </p>
            <hr/>
            <blockquote>
                <p>{introduction}</p>
            </blockquote>
            <p>{developpement}</p>
            <hr/>
            <p>{conclusion}</p>
        </div>
    )
}

export default PostBlog
