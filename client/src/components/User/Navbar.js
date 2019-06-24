import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import "./NavStyle.css";

var style = {
  color: "Seashell",
  fontSize: 55
};
class Navbar extends Component {
  render() {
    return (
      <nav style={{ background: "	#228B22", opacity: "0.9" }} className="navbar">
        <div className="container">
          <Link style={style} className="navbar-brand" to="/landing">
            Texas Trails
          </Link>
          <ResponsiveMenu
            menuOpenButton={<div />}
            menuCloseButton={<div />}
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
              <ul>
                <li>
                  <Link to="/landing">Explore Trails</Link>
                </li>
                <li>
                  <Link to="/">Sign Out</Link>
                </li>
              </ul>
            }
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
