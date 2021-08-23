import React from 'react';
import './Profile.css';
import { InputBar } from '../common/Input Bar/InputBar';

export class Profile extends React.Component {
    render() {
        return (
            <div className="Profile">
                <InputBar title="EMAIL" content="Email@gmail.com" />
                <InputBar title="PASSWORD" content="xxxxxx" />
            </div>
        )
    }
}