import React from "react";
// import Form from "./components/Form";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SavedTrips from "./components/SavedTrips";
import SVG from "./components/SVG";
import User from "./components/User/User";
import Landing from "./components/Landing/landing";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RenderProfile from "./components/User/User";
import { Redirect } from "react-router";
import Atlas from "./components/DataMapped/ImTheMap";
import Compass from "./components/Trails/TrailMap";

function App() {
  const [value, setValue] = React.useState(
    localStorage.getItem("Authenticated") || ""
  );

  React.useEffect(() => {
    localStorage.getItem("Authenticated");
  }, [value]);

  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={() => (value ? <Redirect to="/user/" /> : <Login />)}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/user" component={User} />

        <Route path="/landing" component={Atlas} />
        <Route path="/trails" component={Compass} />

      </div>
    </Router>
  );
}
export default App;

{
  /* <Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/> */
}
