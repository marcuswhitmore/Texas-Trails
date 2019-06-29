import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
var authenticated = localStorage.getItem("Authenticated");

class userTrips extends Component {
  // Setting the component's initial state

  getTrips = event => {
    fetch(
      `/api/userposts/?id=${encodeURIComponent(
        localStorage.getItem("userID")
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
      .then(response => {
        console.log(response);

        return response;
      })
      .catch(error => console.warn(error));
  };

  //gets single user with id in local storage
  getuser = event => {
    fetch(
      `/api/getuser/?id=${encodeURIComponent(localStorage.getItem("userID"))}`,
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
  newPost = event => {
    var x = localStorage.getItem("userID");
    console.log(x);
    var newPost = {
      trailname: "the best trail",
      name: "someotherdtj",
      userId: x
    };

    fetch("/api/newposts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstParam: newPost
      })
    });
  };

  render() {
    return (
      <div className="savedTrips">
        <h1>Hello</h1>
        <button onClick={this.getuser}> asdf</button>
        <button onClick={this.newPost}> newPost</button>
        <button onClick={this.getTrips}> getthemtrips</button>
      </div>
    );
  }
}

export default userTrips;
