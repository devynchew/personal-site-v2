import * as React from 'react'
import * as about from './css/about.module.css'
import { FaCarrot } from "@react-icons/all-files/fa/FaCarrot";

const About = () => {

    return (
        <section className={about.container}>
            <h2>About Me</h2>
            <div className={about.column}>
                <div className={about.leftColumn}>
                    <p>Hello! My name is Devyn and I love creating websites and web applications. I am an aspiring web developer from Singapore, currently studying Applied AI and Analytics at Singapore Polytechnic.</p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <ul className={about.skills}>
                        <li><FaCarrot className={about.icon}/>Javascript (ES6+)</li>
                        <li><FaCarrot className={about.icon}/>Prestashop</li>
                        <li><FaCarrot className={about.icon}/>React</li>
                        <li><FaCarrot className={about.icon}/>Gatsby</li>
                        <li><FaCarrot className={about.icon}/>Python</li>
                        <li><FaCarrot className={about.icon}/>Flask</li>
                    </ul>
                </div>
                <div></div>
            </div>
        </section>
    )
}
export default About