import * as React from 'react'
import * as about from './css/about.module.css'
import { FaCarrot } from "@react-icons/all-files/fa/FaCarrot";
import { StaticImage } from "gatsby-plugin-image"

// About Me component
const About = () => {

    return (
        <section id='about' className={about.container}>
            <h2 className={about.heading}>About Me</h2>
            <div className={about.column}>
                <div className={about.leftColumn}>
                    <p>Hello! My name is Devyn and I love creating websites and web applications. I am an aspiring web developer from Singapore, currently studying Applied AI and Analytics at Singapore Polytechnic.</p>
                    <p>My interest for coding started way back in 2017 when I saw a colleague using Microsoft Excel VBA to automate a spreadsheet report generator - that truly opened my eyes to the power of programming.</p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <ul className={about.skills}>
                        <li><FaCarrot className={about.icon} />Javascript (ES6+)</li>
                        <li><FaCarrot className={about.icon} />Prestashop</li>
                        <li><FaCarrot className={about.icon} />React</li>
                        <li><FaCarrot className={about.icon} />Gatsby</li>
                        <li><FaCarrot className={about.icon} />Python</li>
                        <li><FaCarrot className={about.icon} />Flask</li>
                    </ul>
                </div>
                <div className={about.rightColumn}>
                    <div className={about.photoWrapper}>
                        <StaticImage src="../images/devyn-new.PNG" alt="Devyn's photo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About