import React from 'react';
import './InputBar.css';
import { Link } from "react-router-dom";

export class InputBar extends React.Component {
    render() {
        return (
            <div className="InputBar">
                <p id="title">{this.props.title}</p>
                <div className="input-box"><p id="content">{this.props.content}</p><a href="#" id="icon-link"><div id="icon">{this.props.icon}</div></a></div>
            </div>
        )
    }
} 