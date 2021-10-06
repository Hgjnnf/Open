import React from "react";
import Sticker from '../../util/sticker.png';
import "./MailPreview.css";

const MailPreview = (props) => {
    const { from, to, overview } = props;

    return (
        <div className="preview-container">
            <img
              className="sticker"
              alt="sticker"
              src={Sticker}
            />
            <p className="to">To: {to}</p>
            <p className="overview">{overview}</p>
            <p className="from">{from}</p>
        </div>
    );
};

export default MailPreview;