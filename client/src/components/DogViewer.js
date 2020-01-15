import React, { Component } from "react";
import loadingImage from "../public/dog_bed.jpg";
import badImage from "../public/alex.jpg";
import { get } from "../utilities";
import "./DogViewer.css";

class DogViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink: "",
      loading: true
    };
  }

  fetchDog = async () => {
    const { breed } = this.props;

    let link;
    try {
      const response = await get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      link = response.message;
    } catch {
      link = badImage;
    }

    this.setState({
      imageLink: link,
      loading: false
    });
  };

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { imageLink, loading } = this.state;
    return (
      <div className="DogViewer-wrapper">
        <img
          className="DogViewer-img"
          src={loading ? loadingImage : imageLink}
        />
      </div>
    );
  }
}

export default DogViewer;
