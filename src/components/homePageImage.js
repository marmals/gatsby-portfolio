import React from "react"

import homePageImageStyles from "../sass/components/homePageImage.module.scss"
import FooterPanel from "./footerPanel"


const HomePageImage = () => {
  return (
    <div className={homePageImageStyles.component}>
      <h1>I'm Martin</h1>
      <section><FooterPanel/></section>
    </div>
    )
}

export default HomePageImage
