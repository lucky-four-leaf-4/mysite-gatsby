import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Eyecatch from "../components/eyecatch"
import Header1 from "../components/header1"
import SEO from "../components/seo"

const AboutmePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`,'biography']} />
    <Eyecatch pages="aboutme"/>
    <Header1 title="About Me"/>
    <p>ECサイトのランディングページやバナーなどのデザインやコーディングを行ってきました。デザイン案から作成し、主にhtml5/css3/jsを用いてレスポンシブ対応のページ制作を行ってきました。デザインはPhotoshopやIllustratorを使用してサイトデザインやバナー制作、商品画像の編集を行ってきました。今後はECに限らずもっと先端のWeb制作で切磋琢磨したいと考えております。趣味はロードバイクです。週末は河川敷をのんびり走って気分をリフレッシュさせています。</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`,display:'none',}}>
      <Image />
    </div>
  </Layout>
)

export default AboutmePage
