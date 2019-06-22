import React from 'react';
import logo from './logo.svg';
import './style.css';
class SVG extends React.Component {
  render() {
    return (
      <div className="SVG">
        <header className="SVG-header">
          <img src={logo} className="SVG-logo" alt="logo" />
          <p>
            Edit <code>src/SVG.js</code> and save to reload.
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