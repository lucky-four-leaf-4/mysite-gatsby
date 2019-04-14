import React from "react"

import Layout from "../components/layout"
import Eyecatch from "../components/eyecatch"
import SEO from "../components/seo"
import worksStyle from "./works.module.css"

class WorksLists extends React.Component{
  render(){
    const worksdata = worksdetails.map((work) =>
    <div className={"bg_work_" + work.id}>
      <div key={work.id} className={"work_" + work.id}>
        <h2 className={worksStyle.worktitle}>{work.title}</h2>
        <p className={worksStyle.worktext}>{work.text}</p>
      </div>
    </div>
  );

  return(
      <section className={worksStyle.detail_contents}>
      {worksdata}
      </section>
    );
  }
}
const worksdetails = [
  {id: 1, title: 'Web Site', text:'I love it',},
  {id: 2, title: 'Banner', text:'sample',},
  {id: 3, title: 'Flyer', text:'sample',},
  {id: 4, title: 'Pakage & label', text:'sample',},
  {id: 5, title: 'Movie', text:'sample',},
];

const WorksPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`,'works']} />
    <Eyecatch pages="works"/>
    <h1>My works</h1>
    <WorksLists />
  </Layout>
)

export default WorksPage
