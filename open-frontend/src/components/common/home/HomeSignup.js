import React, { useState } from "react";
import "./Home.css";
import HomeButton from "./HomeButton.js";
import HomeCheckbox from "./HomeCheckbox.js";
import HomeInput from "./HomeInput.js";

const Home = (props) => {
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
        <div className="input-container">
          <HomeInput
            type="text"
            name="email"
            labelFor="email"
            question="EMAIL"
            onClick={null}
          />
          <HomeInput
            type="text"
            name="password"
            labelFor="password"
            question="PASSWORD"
            onClick={null}
          />
        </div>
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
