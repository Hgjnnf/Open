import React from 'react';
import './UpdateUsername.css';
import HomeInput from '../common/home/HomeInput';
import returnArrow from '../../util/media/returnArrow.png';
import axios from 'axios';
import HomeButton from '../common/home/HomeButton';

class UpdateUsername extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const username = this.state.username;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        }

        axios.put('/profile/changeusername', { username }, config).then(
            res => {
                alert(`${res.data.data}. Username: ${username}`);
            }
        ).catch(err => {
            if(err.message === 'Request failed with status code 403') {
                alert("Same username as before. No changes made.")
            } else {
                alert(err.message)
            }
        })
    }

    render() {
        let username = this.state.username

        return (
            <div className="UpdateUsername">
                <a href="/profile" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
                <form className="Username-Main" onSubmit={this.handleSubmit}>
                    <h2 id="username-title">Update Username</h2>
                    <HomeInput question="USERNAME" type="text" value={username} isStatic={false} onchange={this.handleChange} />
                    <button type="submit"><HomeButton buttonText="Update Username" /></button>
                </form>
            </div>
        )
    }
}

export default UpdateUsername;