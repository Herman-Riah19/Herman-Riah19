import React from 'react'
import SocialLink from '../section/socialLink'

const Footer = () => {
    return (
        <footer className="footer">
            <div class="container">
                <SocialLink />
                <div class="copyright">
                    &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer
