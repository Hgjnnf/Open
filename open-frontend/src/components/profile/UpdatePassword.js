import React from 'react';
import './UpdatePassword.css';
import HomeInput from '../common/home/HomeInput';
import returnArrow from '../../util/media/returnArrow.png';
import axios from 'axios';
import HomeButton from '../common/home/HomeButton';

class UpdatePassword extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const password = this.state.password;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        }

        axios.put('/profile/changepassword', { password }, config).then(
            res => {
                alert(`${res.data.data}. password: ${password}`);
            }
        ).catch(err => {
            if(err.message === 'Request failed with status code 403') {
                alert("Same password as before. No changes made.")
            } else {
                alert(err.message)
            }
        })
    }

    render() {
        let password = this.state.password

        return (
            <div className="Updatepassword">
                <a href="/profile" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
                <form className="password-Main" onSubmit={this.handleSubmit}>
                    <h2 id="password-title">Update password</h2>
                    <HomeInput question="Password" inputType="text" value={password} isStatic={false} onchange={this.handleChange} />
                    <button type="submit"><HomeButton buttonText="Update Password" /></button>
                </form>
            </div>
        )
    }
}

export default UpdatePassword;