import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is my Food ordering app</h2>
        {/* <User name={"Raushan kumar - function"} /> */}
        <UserClass name={"Raushan kumar - class"} location="Bihar class" />
      </div>
    );
  }
}

export default About;
