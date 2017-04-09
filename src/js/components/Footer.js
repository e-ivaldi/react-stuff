import React from "react";

export default class Footer extends React.Component{
  getName(){
    return "Valeria yeppa yadda yadda s";
  }
  render(){
    return (
      <footer>its working {this.getName()}!!!!</footer>
    );
  }
}
