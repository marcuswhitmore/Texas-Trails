import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Avatar from "react-avatar";
import newUser from "../SignUp/index";

class User extends Component {
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
  

  render() {
    
    
    return (
      <StackGrid columnWidth={325}>
        <div key="key1">
          <Avatar
            name="John Broaddus"
            size="300"
            textSizeRatio="1.75"
            style={{ marginTop: "20px" }}
          />
        </div>
        <div key="key2" style={{ marginTop: "20px", background: "seashell" }}>
          <span>📍{newUser.firstName}</span>
        </div>
        <div key="key3" style={{ marginTop: "20px", background: "seashell" }}>
          Badges Earned:{" "}
        </div>
        <div key="key4" style={{ marginTop: "20px", background: "seashell" }}>
          Trails Completed:{" "}
        </div>
        <div key="key5" style={{ marginTop: "20px", background: "seashell" }}>
          Joined:
        </div>
        <div key="key6" style={{ marginTop: "20px", background: "seashell" }}>
          Following:
        </div>
        <div key="key7" style={{ marginTop: "20px", background: "seashell" }}>
          Followers:
        </div>
      </StackGrid>
    );
  }
}

export default User;
