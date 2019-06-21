import React, { Component } from "react";
import "./style.css";

class LoginBox extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
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
      [password]:value

    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.userName} ${this.state.lastName}`);
    this.setState({
      userName: "",
      lastName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="loginBox">
        <p>
          
        </p>
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
            type="text"
            placeholder="password"
          />
          
          <button onClick={this.handleFormSubmit} className="submitButtons">Login</button>
          <button onClick={this.handleFormSubmit} className="submitButtons" id="signup">Sign Up</button>
          
        </form>
        <div className="forgotPass"><a href="asdf">Forgot Password?</a></div>
      </div>
    );
  }
}

export default LoginBox;
