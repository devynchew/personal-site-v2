// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Main from '../components/main'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Side from '../components/side'
// import { Link, useStaticQuery, graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {

  return (
    <>
      <Nav></Nav>
      <Layout></Layout>
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Side></Side>
    </>
  )
}
// Step 3: Export your component
export default IndexPage