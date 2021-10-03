import React, { useEffect, useRef, useState } from "react";
import "./MailWritePage.css";
import "../mailview/MailViewPage.css";
import ReturnPic from "../../util/return.png";
import PaperPlane from "../../util/paperplane.png";
import PlusSign from "../../util/plus.png";

const MailWritePage = (props) => {
  const {} = props;

  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(""); // you can manage data with it

  useEffect(() => {
    textareaRef.current.style.height = "400px"; // min height of textbox
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);

  return (
    <div>
      <div className="container">
        <p className="view-header">New Letter</p>
        <a href="mailview">
          <img alt="return" src={ReturnPic} className="return-pic" />
        </a>
        <textarea
          ref={textareaRef}
          value={currentValue}
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}
          placeholder="Dear Stranger... &#xf040;"
          className="write-textbox"
        />
        <div>
          <img alt="plus-sign" src={PlusSign} className="plus-sign" />
          <a href="mailview">
            <img alt="send" src={PaperPlane} className="send-pic" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MailWritePage;
