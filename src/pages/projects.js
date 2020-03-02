import React from "react"

import Layout from "../components/homePageLayout"
import SEO from "../components/seo"

import Projects from "../components/projects"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Projects />
  </Layout>
)

export default ProjectsPage
