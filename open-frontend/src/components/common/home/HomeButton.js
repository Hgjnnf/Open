import React from "react";
import "./HomeButton.css";

const HomeButton = (props) => {
  const { buttonText, link, colour } = props;

  const customStyle = {
    color: { colour },
    borderColor: { colour },
  };

  return (
    <a className="button-box" href={link} style={{color: colour}}>
      {buttonText}
    </a>
  );
};

export default HomeButton;
