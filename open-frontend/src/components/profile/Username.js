import React from 'react';
import './Username.css';
import { FaEdit } from 'react-icons/fa';

export class Username extends React.Component {
    render() {
        return (
            <div className="Username">
                <p id="username">Username: {this.props.username}</p>
                <a href="#" id="edit-username"><FaEdit /></a>
            </div>
        )
    }
}