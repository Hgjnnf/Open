import React from "react";
import "./HomeInput.css";

const HomeInput = (props) => {
  const { type, name, onClick, labelFor, question } = props;

  return (
    /*
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
    */
    <div>
      <label for={labelFor}>
        <p className="title">{question}</p>
      </label>
      <input
        type={type}
        className="input-box"
        name={name}
        onClick={onClick}
        required
      />
    </div>
  );
};

export default HomeInput;
