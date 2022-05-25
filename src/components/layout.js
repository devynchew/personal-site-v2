import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as layout from './css/layout.module.css'


// Component to render my page title
const Layout = () => {
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
        </div>
    )
}
export default Layout