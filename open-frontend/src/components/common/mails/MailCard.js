import React from 'react';
import Seal from '../../../util/seal.png';
import './MailCard.css';

const MailCard = (props) => {
    const { mailHeader, mailBody } = props;
  
    return (
      <div>
        <div className="wrapper">
          <button className="seal-button" id="button">
            <img
              className="seal"
              alt="seal"
              src={Seal}
            />
          </button>
          <div className="lid one"></div>
          <div className="lid two"></div>
          <div className="envelope"></div>
  
          <div className="letter">
            <p>{mailHeader}</p>
            <p>{mailBody}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MailCard;  