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
