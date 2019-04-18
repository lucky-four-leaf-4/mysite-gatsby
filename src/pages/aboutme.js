import React from "react"
import Layout from "../components/layout"
import Eyecatch from "../components/eyecatch"
import Header1 from "../components/header1"
import SEO from "../components/seo"
import aboutmeStyle from "./aboutme.module.css"

class Aboutmelist extends React.Component{
  render(){
    const aboutmedata = aboutmedetails.map((aboutme) =>
    <section key={aboutme.id} className={aboutmeStyle.section}>
      <h2 className={aboutmeStyle.title}>{aboutme.title}</h2>
      <p className={aboutmeStyle.text}>{aboutme.text}</p>
    </section>
  );

  return(
      <article className={aboutmeStyle.detail_contents}>
      {aboutmedata}
      </article>
    );
  }
}
const aboutmedetails = [
  {id: 1, title: 'どのような制作？', text:'主にEC関連のWeb制作に携わってきました。業種はゲーム、家電、美容品などです。',},
  {id: 2, title: '携わった範囲は？', text:'担当範囲としてはデザインからフロントエンドまで携わっておりました。担当者とやり取りをしながらページの構成からデザイン案まで作成し、レスポンシブ対応のページ制作を行ってきました。',},
  {id: 3, title: '今後は？', text:'現在はReactを勉強しているので、今後はECに限らずもっと先端のWeb制作で切磋琢磨したいと考えております。',},
  {id: 4, title: 'その他', text:'趣味はロードバイクです。週末は河川敷をのんびり走って気分をリフレッシュさせています。',},
];

const AboutmePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`,'biography']} />
    <Eyecatch pages="aboutme"/>
    <Header1 title="About Me"/>
    <Aboutmelist />
  </Layout>
)

export default AboutmePage
