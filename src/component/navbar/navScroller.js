import React from 'react'

const theme = ["World", "U.S.", "Technology", "Design", "Culture", "Business", "Politics", "Opinion", "Science", "Health", "Style"];

const NavScroller = () => {
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                {theme.map(text => <a className="p-2 text-muted" href="#">{text}</a>)}
            </nav>
      </div>
    )
}

export default NavScroller
