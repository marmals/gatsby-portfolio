import { Link } from "gatsby"
import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faTwitter,
//     faLinkedin,
//     faGithub,
// } from '@fortawesome/free-brands-svg-icons';
import 'font-awesome/css/font-awesome.min.css'

import footerPanelStyles from '../sass/components/footerPanel.module.scss'

const FooterPanel = () => {
    return (
        <section className={footerPanelStyles.panel}>
            <ul>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/martin-emil-niklas-malmström"><i className="fa fa-linkedin-square"></i></a></li>
                <li><a target="_blank" href="https://github.com/marmals/"><i className="fa fa-github"></i></a></li>
                <li><a href="mailto:martinmalmstrom@outlook.com"><i className="fa fa-envelope"></i></a></li>
            </ul>
        </section>
    );
  };
  
  export default FooterPanel;