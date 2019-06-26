import React, { Component } from "react";
import "./style.css";
import logo from "./logo.svg";

class SVG extends Component {render() {
  return (
    <div className="SVG">
      <header className="SVG-header">
        <img src={logo} className="SVG-logo" alt="logo" />
        
      </header>
    </div>
  );
}
}

export default SVG;