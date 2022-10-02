import * as React from 'react'
import { Link } from 'gatsby'
import * as nav from './css/nav.module.css'
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { motion } from 'framer-motion'
import { StaticImage } from "gatsby-plugin-image"

// Fix the 'Gatsby window not available during server side rendering build' error
let defaultWidth

if (typeof window !== `undefined`) {
    defaultWidth = window.innerWidth
}

// Navbar component of the webpage, at the top.
const Nav = () => {

    // Detect the screen width
    const [screenWidth, setScreenWidth] = React.useState(defaultWidth)

    // Detect whether the hamburger menu is clicked on
    const [isNavExpanded, setIsNavExpanded] = React.useState(false)

    // Change the state variable 'screenWidth' to the current window size whenever the window is resized
    React.useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const textVariants = {
        hidden: {
            y: -20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <header className={nav.header}>
            <nav className={nav.nav}>
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1, duration: 0.4, type: "tween" }}
                >
                    {/* <StaticImage src="../images/devyn-logo.png" alt="Devyn's logo" className={nav.devynLogo}/> */}
                </motion.div>
                <div className={isNavExpanded && screenWidth < 768 ? nav.navRightExpanded : nav.navRight}>
                    <ol className={nav.navLinks}>
                        <motion.li className={nav.navLinkItem}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2, duration: 0.4, type: "tween" }}
                        >
                            <Link to="/#about" className={nav.navLinkText}>
                                About
                            </Link>
                        </motion.li>
                        <motion.li className={nav.navLinkItem}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.3, duration: 0.4, type: "tween" }}
                        >
                            <Link to="/#projects" className={nav.navLinkText}>
                                Projects
                            </Link>
                        </motion.li>
                        <motion.li className={nav.navLinkItem}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.4, duration: 0.4, type: "tween" }}
                        >
                            <Link to="/#contact" className={nav.navLinkText}>
                                Contact
                            </Link>
                        </motion.li>
                    </ol>
                    <motion.div className={nav.resumeButtonWrapper}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5, duration: 0.4, type: "tween" }}
                    >
                        <a href="Resume-Devyn.pdf" target="_blank" rel="noreferrer" aria-label="Resume" className={nav.resumeButton}>
                            Resume
                        </a>
                    </motion.div>
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