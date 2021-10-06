import React, { useEffect, useState } from "react";
import "./MailViewPage.css";
import MailPreview from "./MailPreview.js";
import MailViewButton from "./MailViewButton.js";
import MailContentView from "./MailContentView";
import SendButton from "./SendButton.js";
import ProfilePic from "../../util/profile.png";

const toArray = ["Darling", "You", "Bro"];
const fromArray = ["Master Baller", "Eminem", "Justice never dies"];
const mainArray = [
  "This is a really really lon message and I just spelled the word long wrong bla bla bla bla bla bla bla bla bla",
  "This is a short message",
  "Aaaaaand I am Ethan Hong",
];

class MailViewPage extends React.Component {
  constructor() {
    super();
    this.state = {
      popup: false,
      previewPageVisibility: {
        opacity: 1,
      },
      slideIndex: 0,
      slideContent: [toArray[0], fromArray[0], mainArray[0]],
    };
  }

  togglePopup() {
    this.setState({ popup: !this.state.popup });
    if (this.state.popup) {
      this.setState({
        previewPageVisibility: { visibility: "visible", opacity: 1 },
      });
    } else {
      this.setState({
        previewPageVisibility: { visibility: "hidden", opacity: 0 },
      });
    }
  }

  slideScroll(scroll) {
    var newIdx = this.state.slideIndex + scroll;
    if (newIdx < 0) {
      newIdx = toArray.length - 1;
    }
    if (newIdx >= toArray.length) {
      newIdx = 0;
    }

    console.log(this.state.slideIndex, scroll, newIdx);
    this.setState({ slideIndex: newIdx });

    this.setState({
      slideContent: [toArray[newIdx], fromArray[newIdx], mainArray[newIdx]],
    });
  }

  render() {
    return (
      <div>
        <div
          style={this.state.previewPageVisibility}
          className="page-transition"
        >
          <p className="view-header">Header</p>
          <img
            alt="profile"
            href="profile"
            src={ProfilePic}
            className="profile-pic"
          />
          <div className="view-buttons">
            <MailViewButton link="">0 New Letters Available</MailViewButton>
            <MailViewButton link="replies">Letter Replies</MailViewButton>
            <MailViewButton link="tutorial">Rules of Open</MailViewButton>
          </div>

          <div>
            <div onClick={this.togglePopup.bind(this)}>
              <MailPreview
                to={this.state.slideContent[0]}
                from={this.state.slideContent[1]}
                overview={this.state.slideContent[2]}
              ></MailPreview>
            </div>
            <div
              onClick={() => this.slideScroll(-1)}
              className="arrow-left"
            ></div>
            <div
              onClick={() => this.slideScroll(1)}
              className="arrow-right"
            ></div>
          </div>

          <div>
            <SendButton />
          </div>
        </div>

        {this.state.popup ? (
          <div onClick={this.togglePopup.bind(this)}>
            <MailContentView
              to={toArray[this.state.slideIndex]}
              from={fromArray[this.state.slideIndex]}
              content={mainArray[this.state.slideIndex]}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default MailViewPage;
