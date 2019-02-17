import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const WorksPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`]} />
    <h1>My works</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`,display:'none',}}>
      <Image />
    </div>
  </Layout>
)

export default WorksPage
