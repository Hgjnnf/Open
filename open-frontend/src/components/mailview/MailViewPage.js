import React, { useEffect, useState } from "react";
import "./MailViewPage.css";
import MailPreview from "./MailPreview.js";
import MailViewButton from "./MailViewButton.js";
import SendButton from "./SendButton.js"
import ProfilePic from "../../util/profile.png"

let slideIndex = 0;

const MailViewPage = (props, {history}) => {
  const {} = props;

  const toArray = ["Darling", "You", "Bro"];
  const fromArray = ["Master Baller", "I like men", "Justice never dies"];
  const mainArray = [
    "This is a really really lon message and I just spelled the word long wrong bla bla bla bla bla bla bla bla bla",
    "This is a short message",
    "Aaaaaand I am Ethan Hong",
  ];

  const [slideContent, setSlideContent] = useState([
    toArray[0],
    fromArray[0],
    mainArray[0],
  ]);

  function slideScroll(scroll) {
    slideIndex = slideIndex + scroll;
    if (slideIndex < 0) {
      slideIndex = toArray.length - 1;
    }
    if (slideIndex >= toArray.length) {
      slideIndex = 0;
    }
    setSlideContent([
      toArray[slideIndex],
      fromArray[slideIndex],
      mainArray[slideIndex],
    ]);
  }

  const handleLogOut = () => {
    localStorage.removeItem("authToken");

    history.push("/login");
  }

  return (
    <div>
      <p className="view-header">Header</p>
      <a href="/profile"><img alt="profile" src={ProfilePic} className="profile-pic"/></a>
      <div className="view-buttons">
        <MailViewButton link="">0 New Letters Available</MailViewButton>
        <MailViewButton link="replies">Letter Replies</MailViewButton>
        <MailViewButton link="tutorial">Rules of Open</MailViewButton>
        <MailViewButton link="login" onClick={handleLogOut}>Log Out</MailViewButton>
      </div>

      <div>
        <div>
          <MailPreview
            to={slideContent[0]}
            from={slideContent[1]}
            content={slideContent[2]}
          ></MailPreview>
        </div>
        <div onClick={() => slideScroll(-1)} className="arrow-left"></div>
        <div onClick={() => slideScroll(1)} className="arrow-right"></div>
      </div>

      <div>
          <SendButton />
      </div>
    </div>
  );
};

/*
<div className="slider">
                <MailPreview from="Stranger" to="You" overview="A short preview of the message will be here as long as possible bla bla bla bla bla bla bla bla bla" />
            </div>
            */

export default MailViewPage;
