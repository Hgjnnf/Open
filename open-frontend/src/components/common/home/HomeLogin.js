import React, { useState } from "react";
import "./Home.css";
import HomeButton from "./HomeButton.js";
import HomeCheckbox from "./HomeCheckbox.js";
import HomeInput from "./HomeInput.js";

const Home = (props) => {
  // const active = "rgb(51, 83, 159)";
  // const inactive = "rgb((20, 28, 90)";

  // let login = true;

  /*
  const ClickLogin = () => {
    const node = ReactDOM.findDOMNode(this);
    const log = node.querySelector(".log");
    const sign = node.querySelector(".sign");

    console.log("clicked login");
    if (!login) {
      login = false;
      log.style.borderColor = active;
      log.style.color = active;
      sign.style.borderColor = inactive;
      sign.style.color = inactive;
    }
  };

  const ClickSignup = () => {
    const node = ReactDOM.findDOMNode(this);
    const log = node.querySelector(".log");
    const sign = node.querySelector(".sign");

    console.log("clicked signup");
    if (login) {
      login = true;
      log.style.borderColor = inactive;
      log.style.color = inactive;
      sign.style.borderColor = active;
      sign.style.color = active;
    }
  };
  */

  return (
    <div className="home-container">
      <div className="form-container">
        <div className="home-title">WELCOME TO OPEN</div>
        <div className="buttons-container">
          <HomeButton
            className="log"
            buttonText="LOG IN"
            link="login"
            colour="#7FABD7"
          ></HomeButton>
          <HomeButton
            className="sign"
            buttonText="SIGN UP"
            link="signup"
            colour="#FFFFFF"
          ></HomeButton>
        </div>
        <HomeInput></HomeInput>
        <HomeCheckbox></HomeCheckbox>
        <a href="forgot-password" className="forgot-password">
          Forgot Password
        </a>
        <div className="submit-button">
          <HomeButton
            className="submit-button"
            buttonText="SUBMIT"
            link="mailview"
            colour="#FFFFFF"
          ></HomeButton>
        </div>
        <a className="privacy-policy" href="privacy-policy">
          Privacy Policy
        </a>
        <a className="terms-conditions" href="terms-conditions">
          Terms &amp; Conditions
        </a>
      </div>
    </div>
  );
};

export default Home;
