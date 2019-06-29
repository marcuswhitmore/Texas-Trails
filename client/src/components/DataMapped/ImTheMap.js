import React, { Component } from "react";
import jsondata from "./trails.json";
import { Link } from "react-router-dom";
import "./style.css";
import StackGrid from "react-stack-grid";
const trails = jsondata.trails;

class Atlas extends Component {
  render() {
    return (
      <div>
        {trails.map((trailDetail, ...index) => {
          return (
            <StackGrid columnWidth={325}>
              <div key="key1">
                <h1 style={{ color: "seashell" }}>{trailDetail.name}</h1>
                <img className="intro" src={trailDetail.img} alt="trail" />
              </div>
              <div
                key="key2"
                className="summary"
                style={{ margin: "5px" }}
                key="key2"
              >
                {trailDetail.summary}
              </div>
              <div key="key3">
                <span style={{ color: "#ff293c", margin: "10px" }}>
                  Trail length: {trailDetail.length} Miles
                </span>
                <Link to="trails">Click To see more</Link>
              </div>
            </StackGrid>
          );
        })}
      </div>
    );
  }
}

export default Atlas;
