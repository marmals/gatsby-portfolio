import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

import "../sass/layout/index.scss"
import layoutStyles from '../sass/layout/homePageLayout.module.scss';

const HomePageLayout = ({ children }) => {

  return (
    <>
      <Header/>
      <div className={layoutStyles.container}>
        <main>{children}</main>
      </div>
    </>
  )
}

HomePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomePageLayout