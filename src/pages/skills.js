import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SkillsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`]} />
    <h1>skills</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`,display:'none',}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default SkillsPage
