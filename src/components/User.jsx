import React from "react";

const User = (props) => {
  return (
    <div className="p-[10px] border border-black">
      <h2>Name: {props.name}</h2>
      <h3>Location: Bihar</h3>
      <h4>Contact: @raushan002</h4>
    </div>
  );
};

export default User;
