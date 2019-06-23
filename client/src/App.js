import React from "react";
import Form from "./components/Form";
import LoginBox from "./components/Login";
import SignUp from "./components/SignUp";
import SVG from "./components/SVG";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>

        <Route exact path="/" component={LoginBox} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SVG" componet={SVG}/>
      </div>
    </Router>
  );
}



export default App;

