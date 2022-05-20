import * as React from 'react'
import { Link } from 'gatsby'

import * as nav from './css/nav.module.css'

// pageTitle is a normal prop, children is a children prop
const Nav = () => {

    return (
        <header className={nav.header}>
            <nav className={nav.nav}>
                <div>Logo
                </div>
                <div className={nav.navRight}>
                    <ol className={nav.navLinks}>
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
                    </ol>
                    <div>
                        <Link to="/" className={nav.resumeButton}>
                            Resume
                        </Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}
export default Nav