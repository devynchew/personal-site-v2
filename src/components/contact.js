import * as React from 'react'
import * as contact from './css/contact.module.css'

// Contact Component
const Contact = () => {

    return (
        <section id='contact' className={contact.container}>
            <h2 className={contact.heading}>Get In Touch</h2>
            <p className={contact.paragraph}>I'm looking for job opportunities and am more than happy to hear from you! Just drop me an email and I’ll try my best to get back to you.</p>
            <a className={contact.button} href="mailto:devynchew@gmail.com">
                Say Hello
            </a>
        </section>
    )
}
export default Contact