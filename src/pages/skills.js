import React from "react"

import Layout from "../components/layout"
import Eyecatch from "../components/eyecatch"
import SEO from "../components/seo"

class SkillLists extends React.Component{
  render(){
    const skillsdata = skilldetails.map((skill) =>
    <div key={skill.id}>
      <dt>{skill.title}</dt>
      <dd>{skill.text}</dd>
    </div>
  );

  return(
      <dl className="detail_contents">
      {skillsdata}
      </dl>
    );
  }
}
const skilldetails = [
  {id: 1, title: 'HTML5', text:'I love it',},
  {id: 2, title: 'CSS3', text:'sample',},
  {id: 3, title: 'JavaScript', text:'sample',},
  {id: 4, title: 'jQuery', text:'sample',},
  {id: 5, title: 'React', text:'sample',},
  {id: 6, title: 'Illustrator', text:'sample',},
  {id: 7, title: 'Photoshop', text:'sample',},
  {id: 8, title: 'Premiere Pro', text:'sample',},
];
const SkillsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `my site`, `kojima youhei`,'skill']} />
    <Eyecatch pages="skills"/>
    <h1>skills</h1>
    <SkillLists />
  </Layout>
)

export default SkillsPage
