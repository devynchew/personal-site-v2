import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as main from './main.module.css'


// pageTitle is a normal prop, children is a children prop
const Main = ({ children }) => {

    return (
        <div className={main.container}>
            <h1 className={main.smallHeading}>Hi, my name is</h1>
            <h2>Devyn Chew.</h2>
            <h3>I build things for the web.</h3>
            <Link to="/">
                Find out more!
            </Link>
        </div>
    )
}
export default Main