import React from "react"

import Layout from "../components/layout"
import Eyecatch from "../components/eyecatch"
import Header1 from "../components/header1"
import SEO from "../components/seo"
import skillsStyle from "./skills.module.css"

class SkillLists extends React.Component{
  render(){
    const skillsdata = skilldetails.map((skill) =>
    <div key={skill.id} className={"grid_" + skill.id}>
      <dt className={skillsStyle.title}>{skill.title}</dt>
      <dd>{skill.text}</dd>
    </div>
  );

  return(
      <dl className={skillsStyle.detail_contents}>
      {skillsdata}
      </dl>
    );
  }
}
const skilldetails = [
  {id: 1, title: 'HTML5', text:'semantic,<video>,SVG',},
  {id: 2, title: 'CSS3', text:'responsive,animation,CSS Modules',},
  {id: 3, title: 'JavaScript', text:'const,=()=>,class',},
  {id: 4, title: 'jQuery', text:'$(),plugin',},
  {id: 5, title: 'React', text:'class hoge extends React.Component',},
  {id: 6, title: 'Illustrator', text:'illust,pattern,SVG',},
  {id: 7, title: 'Photoshop', text:'edit photo and text,gif',},
  {id: 8, title: 'Premiere Pro', text:'Youtube,twitter',},
];
const SkillsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`,'skill']} />
    <Eyecatch pages="skills"/>
    <Header1 title="Skills"/>
    <SkillLists />
  </Layout>
)

export default SkillsPage
