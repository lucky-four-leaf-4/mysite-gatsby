import React from "react"
import h1Style from "./header1.module.css"

class Header1 extends React.Component{
  render(){
    return(
      <h1 className={h1Style.headline}>{this.props.title}</h1>
    );
  }
}

export default Header1
