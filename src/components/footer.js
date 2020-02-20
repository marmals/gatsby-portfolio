import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import FooterPanel from "./footerPanel"

import footerStyles from '../sass/components/footer.module.scss'

const Footer = ({ author }) => {
  return (
    <footer className={footerStyles.footer}>
        <p>Say hi</p>
        <FooterPanel/>
        <p>martinmalmstrom@outlook.com</p>
    </footer>
  );
};

export default Footer;