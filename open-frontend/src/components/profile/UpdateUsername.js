import React from 'react';
import './UpdateUsername.css';
import { InputBar } from '../common/Input Bar/InputBar';
import returnArrow from '../../util/media/returnArrow.png';
import axios from 'axios';

export class UpdateUsername extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    render() {
        let username = this.state.username

        return (
            <div className="UpdateUsername">
                <a href="#" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
                <div className="Username-Main">
                    <h2 id="username-title">Update Username</h2>
                    <InputBar title="USERNAME" content={username}/>
                </div>
            </div>
        )
    }
}