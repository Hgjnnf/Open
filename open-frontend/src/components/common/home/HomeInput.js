import React from "react";
import "./HomeInput.css";

const HomeInput = (props) => {
  const { type, name, onChange, labelFor, question, value, isStatic, icon, link } = props;
  if(isStatic === true) {
    return (
      <div>
        <p className="title">{question}</p>
        <div className="input-box"><p>{value}</p><a href={link}><div>{icon}</div></a></div>
      </div>
    )
  } else if(isStatic === false) {
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
        <label htmlFor={labelFor}>
          <p className="title">{question}</p>
        </label>
        <input
          type={type}
          className="input-box"
          name={name}
          onChange={onChange}
          value={value}
          required
        />
      </div>
    );
  }
};

export default HomeInput;
