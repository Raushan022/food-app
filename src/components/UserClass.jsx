import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        html_url: "location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Raushan022");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, html_url } = this.state.userInfo;
    return (
      <div className="p-[10px] border border-red-800">
        <h4>Login: {login}</h4>
        <h3>html url: {html_url}</h3>
        <h4>Contact: @raushan002</h4>
      </div>
    );
  }
}

export default UserClass;

/*
--- MOUNTING---
   constructor
   render(dummy)
      <HTML Dummy>
   component Did Mount
      <API call>
      <this.setState -> state variable updates

----UPDATE---

   render(API data)
   <HTML (new api data)>
   Component Did Update
*/
