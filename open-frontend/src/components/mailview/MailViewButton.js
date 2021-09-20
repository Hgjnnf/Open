import React from "react";
import "./MailViewButton.css";

const MailViewButton = (props) => {
    const { children, link, onClick } = props;

    if (link=="") {
        return (
            <a className="view-block">{children}</a>
        );
    } else {
        return (
            <a className="view-button" href={link} onClick={onClick}>{children}</a>
        );
    }
};

export default MailViewButton;