import React from 'react'
import { Link } from 'react-router-dom'

const SocialLink = () => {
    return (
        <div className="social-links">
            <Link href="#" className="twitter"><i className="fab fa-twitter"></i></Link>
            <Link href="#" className="facebook"><i className="fab fa-facebook"></i></Link>
            <Link href="#" className="instagram"><i className="fab fa-instagram"></i></Link>
        </div>
    )
}

export default SocialLink
