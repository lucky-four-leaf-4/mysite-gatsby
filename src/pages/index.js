import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import indexStyle from "./index.module.css"

const Mainvisual = props => (
  <div className={indexStyle.topvisual}>
    <h1 className={indexStyle.headline}>{props.welcometext}</h1>
    <p id="type"></p>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`]} />
    <Mainvisual
    welcometext="Welcome"
     />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`,display:'none',}}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
