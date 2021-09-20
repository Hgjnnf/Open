import React, { useState, useEffect } from "react";
import "./Home.css";
import HomeButton from "./HomeButton.js";
import HomeCheckbox from "./HomeCheckbox.js";
import HomeInput from "./HomeInput.js";
import axios from 'axios';

const Home = ({history}) => {
  // const active = "rgb(51, 83, 159)";
  // const inactive = "rgb((20, 28, 90)";

  // let login = true;

  /*
  const ChangeonChangeLogin = () => {
    const node = ReactDOM.findDOMNode(this);
    const log = node.querySelector(".log");
    const sign = node.querySelector(".sign");

    console.log("ChangeonChangeed login");
    if (!login) {
      login = false;
      log.style.borderColor = active;
      log.style.color = active;
      sign.style.borderColor = inactive;
      sign.style.color = inactive;
    }
  };

  const ChangeonChangeSignup = () => {
    const node = ReactDOM.findDOMNode(this);
    const log = node.querySelector(".log");
    const sign = node.querySelector(".sign");

    console.log("ChangeonChangeed signup");
    if (login) {
      login = true;
      log.style.borderColor = inactive;
      log.style.color = inactive;
      sign.style.borderColor = active;
      sign.style.color = active;
    }
  };
  */
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history])

  const handleEmail = (event) => {
    const value = event.target.value;

    setEmail(value);
    console.log(email);
  }

  const handlePassword = (event) => {
    const value = event.target.value;

    setPassword(value);
    console.log(password);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    await axios.post('/api/auth/login', {email, password}, config).then(res => {
      localStorage.setItem("authToken", res.data.token);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }).catch(err => {
      alert(err.message);
    });
   
  }

  return (
    <div className="home-container">
      <div className="form-container">
        <div className="home-title">WELCOME TO OPEN</div>
        <div className="buttons-container">
          <HomeButton
            className="log"
            buttonText="LOG IN"
            link="/login"
            colour="#FFFFFF"
          ></HomeButton>
          <HomeButton
            className="sign"
            buttonText="SIGN UP"
            link="/signup"
            colour="#7FABD7"
          ></HomeButton>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <HomeInput
              type="text"
              name="email"
              labelFor="email"
              question="EMAIL"
              onChange={handleEmail}
            />
            <HomeInput
              type="text"
              name="password"
              labelFor="password"
              question="PASSWORD"
              onChange={handlePassword}
            />
          </div>
          <div className="submit-button">
            <button type="submit">
              <HomeButton
                className="submit-button"
                buttonText="SUBMIT"
                colour="#FFFFFF"
              ></HomeButton>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
