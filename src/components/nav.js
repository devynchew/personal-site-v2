import * as React from 'react'
import { Link } from 'gatsby'
import * as nav from './css/nav.module.css'
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";


// pageTitle is a normal prop, children is a children prop
const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = React.useState(false)

    return (
        <header className={nav.header}>
            <nav className={nav.nav}>
                <div>Logo
                </div>
                <div className={isNavExpanded ? nav.navRightExpanded : nav.navRight}>
                    <ol className={nav.navLinks}>
                        <li className={nav.navLinkItem}>
                            <Link to="/#about" className={nav.navLinkText}>
                                About
                            </Link>
                        </li>
                        <li className={nav.navLinkItem}>
                            <Link to="/#projects" className={nav.navLinkText}>
                                Projects
                            </Link>
                        </li>
                        <li className={nav.navLinkItem}>
                            <Link to="/#contact" className={nav.navLinkText}>
                                Contact
                            </Link>
                        </li>
                    </ol>
                    <div className={nav.resumeButtonWrapper}>
                        <Link to="/" className={nav.resumeButton}>
                            Resume
                        </Link>
                    </div>
                </div>
                {/* isNavExpanded will toggle between true and false whenever the icon is clicked. */}
                <button className={nav.hamburger} onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                    <GiHamburgerMenu />
                </button>

            </nav>
        </header>
    )
}
export default Nav