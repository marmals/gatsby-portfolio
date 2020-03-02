import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../sass/layout/index.scss"
import layoutStyles from '../sass/layout/homePageLayout.module.scss';

const HomePageLayout = ({ children }) => {

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={layoutStyles.container}>
        <main>{children}</main>
      </div>
      <Footer author={data.site.siteMetadata.author}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomePageLayout