import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import jsondata from "./trails.json";
import StackGrid from "react-stack-grid";

const trails = jsondata.trails;

const AnyReactComponent = ({ text }) => (
  <div>
    {trails.map((trailDetail, ...index) => {
      return (
        <div>
          <h1>{trailDetail.lat}</h1>
          <h2>{trailDetail.lng}</h2>
        </div>
      );
    })}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.275157,
      lng: -97.825196
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAKJ1-RMWBGCE6K1CC38aEEhP6PmceFwdk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
