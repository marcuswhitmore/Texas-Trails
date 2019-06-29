import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class SignUpBox extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = event.target;
    const name = event.target.name;
    const user = event.target.username;
    const password = event.target.password;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value,
      [password]: value,
      [user]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    var newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.userName,
      password: this.state.password,
      favColor: this.state.colorName,
      firstCar: this.state.carName
    };
    console.log(newUser);

    fetch("/api/createuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstParam: newUser
      })
    });

    this.setState({
      userName: "",
      lastName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="signUpBox">
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last name"
          />
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="password"
          />
          <input
            value={this.state.colorName}
            name="colorName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Security Question1:Favorite Color"
          />
          <input
            value={this.state.carName}
            name="carName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Security Question2:first car"
          />

          <button onClick={this.handleFormSubmit} className="submitButtons">
            <Link to="/">Create An Account</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpBox;
