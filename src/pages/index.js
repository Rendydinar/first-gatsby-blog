import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="HOME" description="Home page" lang="id" />
    <h1>Welcome to my website</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>This is a sample site for the gatsby crash course.</p>
  </Layout>
)

export default IndexPage
