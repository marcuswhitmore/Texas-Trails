import React, { Component } from "react";
import "./style.css";
import logo from "./logo.svg";

class SVG extends Component {render() {
  return (
    <div className="SVG">
      <header className="SVG-header">
        <img src={logo} className="SVG-logo" alt="logo" />
        <p>
          Edit <code>./components/SVG/index.js</code> and save to reload.
        </p>
        <a
          className="SVG-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default SVG;