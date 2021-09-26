import axios from "axios";
import React, { useState } from "react";
import "./Home.css";
import HomeButton from "./HomeButton.js";
import HomeCheckbox from "./HomeCheckbox.js";
import HomeInput from "./HomeInput.js";

const Home = ({history}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    if(password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      alert("Passwords do not match");
      return;
    }

    try {
      const {data} = await axios.post("/api/auth/register", {
        username,
        email,
        password
      }, config);

      localStorage.setItem("authToken", data.token);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch(err) {
      alert(err.message);
    }
  }

  const buttonStyle = {
    border: 'none',
    outline:'none',
    "backgroundColor": '#33539f',
  }

  return (
    <div className="home-container">
      <div className="form-container">
        <div className="home-title">WELCOME TO OPEN</div>
        <form onSubmit={handleRegistration}>
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
              name="username"
              labelFor="username"
              question="USERNAME"
              onChange={(e) => setUsername(e.target.value)}
              isStatic={false}
            />
            <HomeInput
              type="text"
              name="email"
              labelFor="email"
              question="EMAIL"
              onChange={(e) => setEmail(e.target.value)}
              isStatic={false}
            />
            <HomeInput
              type="password"
              name="password"
              labelFor="password"
              question="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isStatic={false}
            />
            <HomeInput
              type="password"
              name="confirmpassword"
              labelFor="confirmpassword"
              question="CONFIRM PASSWORD"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isStatic={false}
            />
          </div>
          <HomeCheckbox></HomeCheckbox>
          <a href="forgot-password" className="forgot-password">
            Forgot Password
          </a>
          <div className="submit-button">
            <button type="submit" style={buttonStyle}>
              <HomeButton
                className="submit-button"
                buttonText="SUBMIT"
                colour="#FFFFFF"
              ></HomeButton>
            </button>
          </div>
        </form>
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
