import React from "react";
import User from "./index";
import Navbar from "./Navbar";
import RenderImage from "./RenderPerson";

function RenderProfile() {
  return (
    <div>
      <Navbar />
      <User />
      <RenderImage />
    </div>
  );
}

export default RenderProfile;
