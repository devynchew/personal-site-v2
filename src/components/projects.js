import * as React from 'react'
import * as projects from './css/projects.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { VscGithubAlt } from "@react-icons/all-files/vsc/VscGithubAlt";



const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/projects/"}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            frontmatter {
              title
              summary
              date(formatString: "MMMM, D, YYYY")
              link
              github
              hero_image_alt
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
    
            }
            id
            slug
          }
        }
      }
    }
  `)

  return (
    <section id='projects' className={projects.container}>
      <h2>Noteworthy Projects</h2>
      <ul className={projects.grid}>
        {
          data.allMdx.edges.map((edge) => (
            <li className={projects.outerCard} key={edge.id}>
              <a href={edge.node.frontmatter.link} target="_blank" rel="noreferrer" aria-label={edge.node.frontmatter.title}>
                <div className={projects.card}>
                  <header>
                    <div className={projects.image}>
                      <GatsbyImage
                        imageStyle={{ objectFit: `contain` }}
                        image={edge.node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
                        alt={edge.node.frontmatter.hero_image_alt}
                      />
                    </div>
                    <h3>{edge.node.frontmatter.title}</h3>
                    <div>
                      <p className={projects.description}>{edge.node.frontmatter.summary}</p>
                    </div>
                  </header>
                  <footer className={projects.footer}>
                    <div className={projects.logo}>
                      <div className={projects.github}>
                        <a href={edge.node.frontmatter.github} target="_blank" rel="noreferrer" aria-label='Github'><VscGithubAlt /></a>
                      </div>
                    </div>
                  </footer>
                </div>
              </a>

            </li>
          ))
        }
      </ul>
    </section>
  )
}
export default Projects