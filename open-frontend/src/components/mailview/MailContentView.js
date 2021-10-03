import React from "react";
import "./MailContentView.css";

class MailContentView extends React.Component {
  // props: to, from, content

  render() {
    return (
      <div className="content-container">
        <div className="message-content-container">
          <div className="message-content-text">{this.props.to}</div>
          <span className="message-content-text">{this.props.content}</span>
          <div className="message-content-from">{this.props.from}</div>
        </div>
      </div>
    );
  }
}

export default MailContentView;
