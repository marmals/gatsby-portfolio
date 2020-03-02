import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import FooterPanel from "./footerPanel"

import footerStyles from '../sass/components/footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <section><FooterPanel/></section>
    </footer>
  );
};

export default Footer;