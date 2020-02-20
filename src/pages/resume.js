import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from contact</h1>
    <p>Welcome to contact</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
