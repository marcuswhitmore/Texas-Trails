import React, { Component } from "react";
import jsondata from "./trails.json";
import { Link } from "react-router-dom";
import "./style.css";
import SimpleMap from "./ActualMap";
import GoogleMapReact from "google-map-react";
import StackGrid from "react-stack-grid";

const trails = jsondata.trails;
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Compass extends Component {
  render() {
    return (
      <div>
        {trails.map((trailDetail, ...index) => {
          return class SimpleMap extends Component {
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
                <div style={{ height: "350px", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAKJ1-RMWBGCE6K1CC38aEEhP6PmceFwdk"
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                  >
                    <AnyReactComponent
                      lat={trailDetail.lat}
                      lng={trailDetail.lng}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
              );
            }
          };
        })}
        <SimpleMap />
      </div>
    );
  }
}

export default Compass;
