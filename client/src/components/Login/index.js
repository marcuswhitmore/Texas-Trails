import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router";

class Login extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
    lastName: "",
   
    persons: []
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
    var credentials = {
      username: this.state.userName,
      password: this.state.password
    };
    fetch(
      `/api/authenticate?user=${encodeURIComponent(
        credentials.username
      )}&p=${encodeURIComponent(credentials.password)}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data) {
          localStorage.setItem("Authenticated", "true");
          localStorage.setItem("userID", data.id);
          return data;
        }
      });
  };

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
            type="password"
            placeholder="password"
          />

          <button onClick={this.handleFormSubmit} className="submitButtons">
            Login
          </button>
          <button
            className="submitButtons"
            id="signup"
            onClick={this.handleSignUp}
          >
            <Link to="signup"> Sign Up </Link>
          </button>
        </form>
        <div className="forgotPass">
          <a href="asdf">Forgot Password?</a>
        </div>
      </div>
    );
  }
}

export default Login;
// class Register extends React.Component {
//   state = {
//     toDashboard: false,
//   }
//   handleSubmit = (user) => {
//     saveUser(user)
//       .then(() => this.setState(() => ({
//         toDashboard: true
//       })))
//   }
//   render() {
//     if (this.state.toDashboard === true) {
//       return <Redirect to='/dashboard' />
//     }

//     return (
//       <div>
//         <h1>Register</h1>
//         <Form onSubmit={this.handleSubmit} />
//       </div>
//     )
//   }
//  }
