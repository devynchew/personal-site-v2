import * as React from 'react'
import { Link } from 'gatsby'
import * as nav from './css/nav.module.css'
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";


// Navbar component of the webpage, at the top.
const Nav = () => {

    // Detect whether the hamburger menu is clicked on
    const [isNavExpanded, setIsNavExpanded] = React.useState(false)
    // Detect the screen width
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

    // Change the state variable 'screenWidth' to the current window size whenever the window is resized
    React.useEffect(() => {
        // Fix the 'Gatsby window not available during server side rendering build' error
        const isBrowser = typeof window !== "undefined"

        const changeWidth = () => {
            if (isBrowser) {
                setScreenWidth(window.innerWidth);
            }
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <header className={nav.header}>
            <nav className={nav.nav}>
                <div>Logo
                </div>
                <div className={isNavExpanded && screenWidth < 768 ? nav.navRightExpanded : nav.navRight}>
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
                        <a href="Resume-Devyn.pdf" target="_blank" rel="noreferrer" aria-label="Resume" className={nav.resumeButton}>
                            Resume
                        </a>
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