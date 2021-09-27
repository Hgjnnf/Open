import React, { useState } from "react";
import Sticker from "../../util/sticker.png";
import MailContentView from "./MailContentView";
import "./MailPreview.css";

class MailPreview extends React.Component {
  render() {
    return (
      <div>
        <div className="preview-container">
          <img className="sticker" alt="sticker" src={Sticker} />
          <p className="to">To: {this.props.to}</p>
          <p className="overview">{this.props.content}</p>
          <p className="from">{this.props.from}</p>
        </div>
      </div>
    );
  }
}

export default MailPreview;