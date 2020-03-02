import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>Feel free to contact me through my email</p>
    <a href="mailto:martinmalmstrom@outlook.com">
            martinmalmstrom@outlook.com
          </a>
  </Layout>
)

export default Contact
