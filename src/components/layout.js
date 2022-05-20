import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as layout from './css/layout.module.css'


// pageTitle is a normal prop, children is a children prop
const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)

    return (
        <div className={layout.container}>
            <title>{data.site.siteMetadata.title}</title>
            {children}
        </div>
    )
}
export default Layout