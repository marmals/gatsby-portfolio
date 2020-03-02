import React from "react"
import { Link } from "gatsby"

import Layout from "../components/homePageLayout"
import HomePageImage from "../components/homePageImage"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
      <SEO title="Home" />
      <HomePageImage/>
  </Layout>
)

export default IndexPage
