import React from "react";
// import Form from "./components/Form";
import LoginBox from "./components/Login";
import SignUp from "./components/SignUp";
// import SavedTrips from "./components/SavedTrips";
// import SVG from "./components/SVG";
import User from "./components/User/User";
import Landing from "./components/Landing/landing";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RenderProfile from "./components/User/User";

function App() {
  const [value, setValue] = React.useState(
    localStorage.getItem("Authenticated") || ""
  );

  React.useEffect(() => {
    localStorage.setItem("Authenticated", "false");
  }, [value]);
  console.log(value);
  if (value === "True") {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginBox} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user" component={SignUp} />
          <Route path="/savedposts" component={SignUp} />
          {/* <Route path="/user" component={User} />
          <Route path="/landing" component={``} /> */}
        </div>
      </Router>
    );
  } else if ("1" === "1") {
    return (
      <Router>
        <div>
          {/* <RenderProfile /> */}
          <Route exact path="/" component={LoginBox} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user" component={RenderProfile} />
          <Route path="/landing" component={Landing} />
        </div>
      </Router>
    );
  }
}

export default App;
