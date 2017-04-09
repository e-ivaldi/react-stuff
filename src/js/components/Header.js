import React from "react";
import Title from "./header/Title"

export default class Header extends React.Component{
  getName(){
    return "Valeria yeppa yadda yadda s";
  }
  render(){
    return (
      <Title title={this.props.title} />
    );
  }
}
