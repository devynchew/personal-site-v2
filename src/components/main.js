import * as React from 'react'
import { Link } from 'gatsby'
import * as main from './css/main.module.css'

const Main = () => {

    return (
        <section className={main.container}>
            <h1 className={main.smallHeading}>Hi, my name is</h1>
            <h2 className={main.bigHeading}>Devyn Chew.</h2>
            <h3 className={main.bigSecondaryHeading}>I build things for the web.</h3>
            <p>I'm an aspiring web developer from Singapore. Currently, I'm focused on learning how to build accessible and human-centered ecommerce websites at Efusion Technology.</p>
            <Link className={main.findOutButton} to="/">
                Find out more!
            </Link>
        </section>
    )
}
export default Main