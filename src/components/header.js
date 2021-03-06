import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "../sass/components/header.module.scss"


const Header = () => (
    <header className={headerStyles.header}>
      <div className={headerStyles.title}>
        <h3>
          <Link to="/">mm</Link>
        </h3>
      </div>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/resume">resume</Link>
        </li>
      </ul>
    </header>
  )

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
  }


export default Header;