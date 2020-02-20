import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people!</h1>
    <h2>Hi people!</h2>
    <h3>Hi people!</h3>
    <h4>Hi people!</h4>
    <h5>Hi people!</h5>
    <h6>Hi people!</h6>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/contact/">Go to contact</Link>
  </Layout>
)

export default IndexPage
