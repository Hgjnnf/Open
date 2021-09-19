import React, { useState } from "react";
import Sticker from "../../util/sticker.png";
import MailContentView from "./MailContentView";
import "./MailPreview.css";

class MailPreview extends React.Component {
  constructor() {
    super();
    this.state = {
      popup: false,
      previewPageVisibility: {
        opacity: 1,
      },
    };
  }

  togglePopup() {
    this.setState({ popup: !this.state.popup });
    if (this.state.popup) {
      this.setState({ previewPageVisibility: { opacity: 1 } });
    } else {
      this.setState({ previewPageVisibility: { opacity: 0 } });
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.togglePopup.bind(this)}> yes</div>
        <div
          className="preview-container"
          style={this.state.previewPageVisibility}
        >
          <img className="sticker" alt="sticker" src={Sticker} />
          <p className="to">To: {this.props.to}</p>
          <p className="overview">{this.props.content}</p>
          <p className="from">{this.props.from}</p>
        </div>
        {this.state.popup ? (
          <MailContentView
            to={this.props.to}
            from={this.props.from}
            content={this.props.content}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default MailPreview;