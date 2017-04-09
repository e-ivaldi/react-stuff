import React from "react";
import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {welcomeMessage: "Welcome"};
  }

  render(){
    setTimeout(() => {
      //this.setState({welcomeMessage: "Welcome Emanuele"});
      this.state.welcomeMessage = "Welcome Emanuele!";
      //this.setState(this.state);
      this.forceUpdate();
    }, 2000);
    return (
      <div>
        <Header title={this.state.welcomeMessage} />
        <Footer />
      </div>
    );
  }
}
