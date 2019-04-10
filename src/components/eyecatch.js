import React from "react"
import eyecatchworks from "../images/eyecatch_works.jpg"
import eyecatchskills from "../images/eyecatch_skill.jpg"
import eyecatchaboutme from "../images/eyecatch_aboutme.jpg"

class Eyecatch extends React.Component{
  render(){
    let imgsrc;
    const pagename = this.props.pages;
    switch (pagename) {
      case 'works':
      imgsrc = eyecatchworks;
      break;
      case 'skills':
      imgsrc = eyecatchskills;
      break;
      case 'aboutme':
      imgsrc = eyecatchaboutme;
      break;
      default:
      break;
    }
    return(
      <picture style={{display:'block',}}>
      <img src={imgsrc} alt={this.props.pages} style={{maxWidth:'100vw',width:'100%',margin:'auto',}}/>
      </picture>
    );
  }
}

export default Eyecatch
