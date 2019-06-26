import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
var authenticated = localStorage.getItem("Authenticated");

class userTrips extends Component {
  // Setting the component's initial state
  
  getTrips = event => {

    fetch("/api/posts/?user=1", function(data) {
      console.log("Posts", data);
      
    });
  };
  

  render() {
    return (
      <div className="savedTrips">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default userTrips;
