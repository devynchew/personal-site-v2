import * as React from 'react'
import * as projects from './css/projects.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const Projects = () => {

    const data = useStaticQuery(graphql`
    query {
        allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
          edges {
            node {
              frontmatter {
                title
                summary
              }
              id
            }
          }
        }
      }
  `)


    return (
        <section className={projects.container}>
            <h2>Noteworthy Projects</h2>
            <ul className={projects.grid}>
                {
                    data.allMdx.edges.map((edge) => (
                        <li key={edge.id}>
                            <div className={projects.cards}>
                                <header>
                                    <h3>{edge.node.frontmatter.title}</h3>
                                    <div>
                                        <p>{edge.node.frontmatter.summary}</p>
                                    </div>
                                </header>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
export default Projects