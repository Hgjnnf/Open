import React from 'react';
import './Profile.css';
import { InputBar } from '../common/Input Bar/InputBar';
import { Username } from './Username';

export class Profile extends React.Component {
    render() {
        return (
            <div className="Profile">
                <Username username="Hgjnnf"/>
                <InputBar title="EMAIL" content="Email@gmail.com" />
                <InputBar title="PASSWORD" content="xxxxxx" />
            </div>
        )
    }
}