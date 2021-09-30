import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({type, title, date, intro, path, image}) => {
    return (
        <div className="blog-card card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-primary">{type}</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#">{title}</a>
              </h3>
              <div class="mb-1 text-muted">{date}</div>
              <p class="card-text mb-auto">{intro}</p>
              <Link to={path}>Continue reading</Link>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" src={image} alt="Card image cap" />
        </div>
    )
}

export default BlogCard
