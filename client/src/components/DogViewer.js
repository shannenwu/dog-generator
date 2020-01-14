import React, { Component } from "react";
import loadingImage from "../public/dog_bed.jpg";
import { get } from "../utilities";
import './DogViewer.css';

class DogViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink: '',
      loading: true
    }
  }

  fetchDog = async () => {
    const { breed } = this.props;
    const response = await get(`https://dog.ceo/api/breed/${breed}/images/random`);

    this.setState({
      imageLink: response.message,
      loading: false
    });
  }

  simulateLongLoading = (cb) => {
    setTimeout(cb, 1000);
  }

  componentDidMount() {
    this.simulateLongLoading(this.fetchDog);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.breed !== this.props.breed) {
      this.setState({
        loading: true
      });
      this.simulateLongLoading(this.fetchDog);
    }
  }

  render() {
    const { imageLink, loading } = this.state;
    return (
      <div className="DogViewer-wrapper">
        <img className="DogViewer-img" src={loading ? loadingImage : imageLink} />
      </div>
    );
  }
}

export default DogViewer;
