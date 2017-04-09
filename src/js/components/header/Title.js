import React from "react";

export default class Title extends React.Component{
  render(){
    setTimeout(() => {
      this.setState({name: "Valeria"});
    }, 1000);
    return (
      <h1>{this.props.title}</h1>
    );
  }
}
