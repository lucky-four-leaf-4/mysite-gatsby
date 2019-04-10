import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import indexStyle from "./index.module.css"

const Mainvisual = props => (
  <div className={indexStyle.topvisual}>
    <h1 className={indexStyle.headline}>{props.welcometext}</h1>
    <dl style={{maxWidth:'480px',width:'100%',margin:'auto',}}>
      <dt style={{textAlign:'left',fontSize:'2.5rem',}}>Kojima Youhei</dt>
      <dd style={{textAlign:'right',fontSize:'2.5rem',}}>WEB DESIGNER</dd>
    </dl>
  </div>
)

const IndexPage = () => (
  <div className="indexpage">
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`]} />
    <Mainvisual
    welcometext="Welcome"
     />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`,display:'none',}}>
      <Image />
    </div>
  </Layout>
  </div>
)

export default IndexPage
