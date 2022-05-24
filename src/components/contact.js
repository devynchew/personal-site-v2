import * as React from 'react'
import * as contact from './css/contact.module.css'
import { Link } from 'gatsby'

const Contact = () => {

    return (
        <section id='contact' className={contact.container}>
            <h2 className={contact.heading}>Get In Touch</h2>
            <p className={contact.paragraph}>I'm looking for job opportunities and am more than happy to hear from you! Just drop me an email and I’ll try my best to get back to you.</p>
            <Link className={contact.button} to="mailto:devynchew@gmail.com">
                Say Hello
            </Link>
        </section>
    )
}
export default Contact