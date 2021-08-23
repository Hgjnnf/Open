import React from 'react';
import './Profile.css';
import { InputBar } from '../common/Input Bar/InputBar';
import { Username } from './Username';
import returnArrow from '../../util/media/returnArrow.png';

export class Profile extends React.Component {
    render() {
        return (
            <div className="Profile">
                <a href="#" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
                <div className="Profile-Main">
                    <Username username="Hgjnnf"/>
                    <InputBar title="EMAIL" content="Email@gmail.com" />
                    <InputBar title="PASSWORD" content="xxxxxx" />
                </div>
            </div>
        )
    }
}