import React, { Component } from "react";
import "./GoodBoiMeter.css";
import "../utilities.css";

const GOOD_BOIS = ['pembroke', 'labrador', 'samoyed', 'husky'];
const BAD_BOIS = ['chihuahua', 'cat'];

class GoodBoiMeter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { breed } = this.props;
    let goodness = 0.5;
    if (GOOD_BOIS.includes(breed)) {
      goodness = 1.0;
    } else if (BAD_BOIS.includes(breed)) {
      goodness = 0.09;
    }
    return (
      <div className="GoodBoiMeter-wrapper u-flex u-flexColumn u-flex-alignCenter">
        <div className="GoodBoiMeter-label">goodness of {breed} boi</div>
        <meter className="GoodBoiMeter-meter" low={0.1} high={0.6} optimum={1} value={goodness}></meter>
      </div>
    );
  }
}

export default GoodBoiMeter;
