import React from 'react';
import './Profile.css';
import { InputBar } from '../common/Input Bar/InputBar';
import { FaEdit } from 'react-icons/fa';
import returnArrow from '../../util/media/returnArrow.png';

export class Profile extends React.Component {
    render() {
        return (
            <div className="Profile">
                <a href="#" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
                <div className="Profile-Main">
                    <h2 id="profile-title">PROFILE</h2>
                    <InputBar title="USERNAME" content="Hgjnnf" icon={<FaEdit />} />
                    <InputBar title="EMAIL" content="Email@gmail.com" />
                    <p id="change-password">Change Password</p>
                </div>
            </div>
        )
    }
}