import { Link } from "gatsby"
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';


const FooterPanel = () => {
    return (
        <section>
            <a href="#"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/martin-emil-niklas-malmström"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a target="_blank" href="https://github.com/marmals/"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
        </section>
    );
  };
  
  export default FooterPanel;