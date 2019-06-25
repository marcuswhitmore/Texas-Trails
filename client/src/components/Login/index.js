import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class LoginBox extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
    lastName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = event.target;
    const name = event.target.name;
    const password = event.target.password;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value,
      [password]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    var credentials = {
      username: this.state.userName,
      password: this.state.password
    };
    fetch(`/api/authenticate?user=${encodeURIComponent(credentials.username)}&p=${encodeURIComponent(credentials.password)}`, {
      method: "GET",mode: "no-cors",headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        var userInfo ={
          firstName:responseData.firstName,
          lastName:responseData.lastName

        };
        localStorage.setItem("Authenticated",userInfo);
        return responseData;
      })
      .catch(error => console.warn(error));
  }


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="loginBox">
        <p />
        <form className="form">
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
            type="text/password"
            placeholder="password"
          />

          <button onClick={this.handleFormSubmit} className="submitButtons">
            <Link to="/user">Login</Link>
          </button>
          <button
            onClick={this.handleFormSubmit}
            className="submitButtons"
            id="signup"
          >
            <Link to="/signup">Sign In</Link>
          </button>
        </form>
        <div className="forgotPass">
          <a href="asdf">Forgot Password?</a>
        </div>
      </div>
    );
  }
}

export default LoginBox;
