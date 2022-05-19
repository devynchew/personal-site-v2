import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    siteTitle
} from './layout.module.css'

import * as nav from './nav.module.css'

// pageTitle is a normal prop, children is a children prop
const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)

    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>

            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout