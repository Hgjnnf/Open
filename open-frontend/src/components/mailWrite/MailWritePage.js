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
        <p className="view-header">Worries Consultation</p>
        <a href="mailview">
          <img alt="return" src={ReturnPic} className="return-pic" />
        </a>
        <textarea
          ref={textareaRef}
          value={currentValue}
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}
          placeholder="Dear Stranger... &#xf040; &#10;Please be specific and clear about the causes of your worries to get better responses. Key names, locations, and information can be replaced with pseudonyms"
          className="write-textbox"
        />
        <div className="bottom-space"></div>
        <div>
          {/** <img alt="plus-sign" src={PlusSign} className="plus-sign" /> */}
          <a href="mailview">
            {/** <img alt="send" src={PaperPlane} className="send-pic" /> */}
            <AirPlane className="send-pic" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AirPlane = (props) => {
  return (
    <div class="plane">
      <div class="wingRight"></div>
      <div class="wingLeft"></div>
      <div class="bottom"></div>
      <div class="top"></div>
      <div class="middle"></div>
    </div>
  );
};

export default MailWritePage;
