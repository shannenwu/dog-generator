import React, { Component } from "react";
import GoodBoiMeter from "./GoodBoiMeter";
import DogViewer from "./DogViewer";

import "./App.css";
import "../utilities.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: "pembroke"
    };
  }

  onKeyDown = event => {
    if (event.keyCode === 13) {
      // 13 is the enter key
      this.setState({
        breed: event.target.value
      });
      event.target.value = "";
    }
  };

  render() {
    const { breed } = this.state;
    return (
      <div className="u-flex u-flexColumn u-flex-alignCenter">
        <label className="App-label" htmlFor="dog-breed">
          enter dog breed:
        </label>
        <input onKeyDown={this.onKeyDown} id="dog-breed" autoComplete="off" />
        <GoodBoiMeter breed={breed} />
        <DogViewer breed={breed} />
      </div>
    );
  }
}

export default App;
