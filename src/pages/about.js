import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Hi, My name is Martin Malmström.</p>
    <p>
      I'm a fullstack developer from sweden and got a bachelor's degree in software engineering and mobile platforms at Jönköping university.
      For my internship i created a web application to generate dynamic QR-codes for a company and i discovered that my true intrest lie in web development.
    </p>
    <p>
      Other things i'm highly intrested in are creating mobile applications, DevOps and Linux.
      I will for ever be a student learning new technologies in the industry.
    </p>
    <p>
      Don't hesitate to <a href="mailto:martinmalmstrom@outlook.com">contact</a> me if there is anything you're wondering about!
    </p>
  </Layout>
)

export default AboutPage
