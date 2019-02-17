import React from "react"
import footerStyle from "./footer.module.css"

export default () => (
  <footer>
    <div className={footerStyle.footer_inner}>© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a></div>
  </footer>
)
