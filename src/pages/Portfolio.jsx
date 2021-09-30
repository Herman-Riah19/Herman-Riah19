import React from 'react'
import MainBlog from '../component/blog/mainBlog'
import SidebarBlog from '../component/blog/sidebarBlog'
import BlogCard from '../component/card/blogCard'
import Jumbotron from '../component/cover/jumbotron'
import NavScroller from '../component/navbar/navScroller'
import blog from '../model/blog.model'
import Presentation from '../component/section/presentation'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <NavScroller />
            <Jumbotron />
            <main role="main" className="container">
                <div className="row">
                    <div className="col-md-8">
                        <MainBlog />
                    </div>
                    <SidebarBlog />
                </div>
            </main>
            <Presentation entete="Blog courant" />
            <div className="row container">
                {blog.map(item => (
                    <div className="col-md-6">
                        <BlogCard 
                            type={item.type}
                            title={item.title}
                            date={item.date}
                            intro={item.intro}
                            path={item.path}
                            image={item.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
