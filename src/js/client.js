import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
  getName(){
    return "Valeria yeppa yadda yadda";
  }
  render(){
    return (
      <h1>its working {this.getName()}!!!!</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
