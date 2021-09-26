import React from 'react';
import './InputBar.css';

export class InputBar extends React.Component {
    render() {
        if(this.props.isStatic === true) {
            return (
                <div className="InputBar">
                    <p id="title">{this.props.title}</p>
                    <div className="input-box"><p id="content">{this.props.content}</p><a href={this.props.link} id="icon-link"><div id="icon">{this.props.icon}</div></a></div>
                </div>
            )
        } else if(this.props.isStatic === false) {
            return (
                <div className="InputBar">
                    <p id="title">{this.props.title}</p>
                    <input type={this.props.inputType} className="input-box" value={this.props.value} onChange={this.props.onchange}/>
                </div>
            )
        }
    }
} 