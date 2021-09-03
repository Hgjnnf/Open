import React from "react";
import "./HomeInput.css";

const HomeInput = (props) => {
  return (
    <div className="input-container">
      <label for="email">
        <p className="title">EMAIL</p>
      </label>
      <input type="text" className="input-box" name="email" required />
      <label for="password">
        <p className="title">PASSWORD</p>
      </label>
      <input type="text" className="input-box" name="password" required />
    </div>
  );
};

export default HomeInput;
