import React, { Component } from "react";
import GoodBoiMeter from "./GoodBoiMeter";
import DogViewer from "./DogViewer";

import "./App.css";
import "../utilities.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      breed: "pembroke",
      iteration: 0
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onKeyDown = event => {
    if (event.keyCode === 13) {
      // 13 is the enter key
      if (this.state.input === "") {
        // refresh the current dog if you just hit enter
        this.setState({
          iteration: this.state.iteration + 1
        });
      } else {
        // load a new dog if you typed a breed
        this.setState({
          input: "",
          breed: this.state.input,
          iteration: this.state.iteration + 1
        });
      }
    }
  };

  render() {
    const { input, breed, iteration } = this.state;
    return (
      <div className="u-flex u-flexColumn u-flex-alignCenter">
        <label className="App-label" htmlFor="dog-breed">
          enter dog breed:{" "}
        </label>
        <input
          value={input}
          onChange={this.handleChange}
          onKeyDown={this.onKeyDown}
          id="dog-breed"
          autoComplete="off"
        />
        <GoodBoiMeter breed={breed} />
        <DogViewer breed={breed} iteration={iteration} />
      </div>
    );
  }
}

export default App;
