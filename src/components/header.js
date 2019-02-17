import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Gnavi from "./global-navi"

import headerStyle from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyle.header}>
    <div className={headerStyle.header_inner}>
      <h1 className={headerStyle.header_sitetitle}>
        <Link to="/" className={headerStyle.header_sitetitle__btn}>
          {siteTitle}
        </Link>
      </h1>
      <Gnavi />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
