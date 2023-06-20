
import React, { Component } from "react";

/**
 * Homework 1 component. Create a basic class component to display a greeting message to the UI upon button click. 
 * 
 * TODO: Make sure to export this component and use it in App.jsx to make
 * sure that it works.
 */

class Homework1 extends Component {

    // TODO: initialize your component and set the state to 
    // { greeting: "" }

  constructor(props) {
    super(props);
    this.state = {
      greeting: ""
    };
  }

    // TODO: add an handleClick method to update the greeting state upon click
    // the greeting state should update from an empty string (what you initialized
    // it to originally) to the string "Hello World!"  

  handleClick = () => {
    this.setState({ greeting: "Hello World!" });
  }


  render() {
    return (
      <div>
        <h1>{this.state.greeting || "Click the button below"}</h1>
        <button onClick={this.handleClick}>Update Greeting</button>
      </div>
    );
  }
}

export default Homework1;