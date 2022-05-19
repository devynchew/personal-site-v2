// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/nav'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <>
      <Navbar>
      </Navbar>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </>

  )
}
// Step 3: Export your component
export default AboutPage