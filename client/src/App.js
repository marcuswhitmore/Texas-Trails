import React from "react";
import Form from "./components/Form";
import LoginBox from "./components/Login";
import SignUp from "./components/SignUp";
import SavedTrips from "./components/SavedTrips";
import SVG from "./components/SVG";
import User from "./components/User/User";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {


  const [value, setValue] = React.useState(
    localStorage.getItem("Authenticated") || ""
);

  React.useEffect(() => {
    localStorage.setItem("Authenticated", "false");
  }, [value]);

  if (value === "false") {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginBox} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user" component={SignUp} />
          <Route path="/savedposts" component={SignUp} />
      <Route path="/user" component={User} />
        <Route path="/landing" component={``} />
        </div>
      </Router>
    );
  }else if(value === "true"){
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginBox} />
          <Route path="/signup" component={SignUp} />
          
        </div>
      </Router>
    );
  }

}

export default App;
