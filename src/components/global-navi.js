import React from "react"
import { Link } from "gatsby"

import gnviStyle from "./gnavi.module.css"

export default () => (
  <nav className={gnviStyle.globalNavi}>
    <ul className={gnviStyle.globalNavi_listarea}>
      <li className={gnviStyle.globalNavi_list}><Link to="/aboutme" className={gnviStyle.globalNavi_list_button}>about me</Link></li>
      <li className={gnviStyle.globalNavi_list}><Link to="/skills" className={gnviStyle.globalNavi_list_button}>skills</Link></li>
      <li className={gnviStyle.globalNavi_list}><Link to="/works" className={gnviStyle.globalNavi_list_button}>works</Link></li>
    </ul>
  </nav>
)
