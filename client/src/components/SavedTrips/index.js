import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
var authenticated = localStorage.getItem("Authenticated");
var userID= localStorage.getItem("userID");

class userTrips extends Component {
  // Setting the component's initial state
  
  getTrips = event => {

    fetch(
      `/api/userposts/?userID=${encodeURIComponent(
        userID
      )}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseData => {
        if (responseData) {
          console.log(responseData);
          
          return responseData;
        }
      })
      .catch(error => console.warn(error));
  };

  newposts = event =>{


    
  }
  

  render() {
    return (
      <div className="savedTrips">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default userTrips;
