import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import * as nav from './nav.module.css'

// pageTitle is a normal prop, children is a children prop
const Navbar = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)

    return (
        <div>
            <nav className={nav.navRight}>
                <ul className={nav.navLinks}>
                    <li className={nav.navLinkItem}>
                        <Link to="/" className={nav.navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={nav.navLinkItem}>
                        <Link to="/about" className={nav.navLinkText}>
                            Projects
                        </Link>
                    </li>
                    <li className={nav.navLinkItem}>
                        <Link to="/blog" className={nav.navLinkText}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar