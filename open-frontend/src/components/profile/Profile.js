import React from 'react';
import './Profile.css';
import { InputBar } from '../common/Input Bar/InputBar';
import { FaEdit } from 'react-icons/fa';
import returnArrow from '../../util/media/returnArrow.png';
import axios from 'axios';

export class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            isLoaded: false
        }
    };

    fetchProfileData() {
        let authToken = this.props.token;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            }
        }

        axios.get('/profile', config).then(res => {
            setTimeout(() => {
                    this.setState({
                        username: res.data.username,
                        email: res.data.email,
                        isLoaded: true
                    });
                }, 1000)
            }
        ).catch(err => {
            setTimeout(() => {
                    this.setState({
                        username: err.message,
                        email: err.message,
                        isLoaded: false
                    });
                }, 1000)
            }
        );
    };

    render() {
        let username = this.state.username;
        let email = this.state.email;
        let isLoaded = this.state.isLoaded;

        return (
            <div className="Profile">
                <a href="#" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
                <div className="Profile-Main">
                    <h2 id="profile-title">PROFILE</h2>
                    <InputBar title="USERNAME" content={!isLoaded ? 'Loading...' : username} icon={<FaEdit />} />
                    <InputBar title="EMAIL" content={!isLoaded ? 'Loading...' : email} />
                    <p id="change-password">Change Password</p>
                </div>
            </div>
        )
    };

    componentDidMount() {
        this.fetchProfileData()
    };

    componentDidUpdate(prevState) {
        let didUsernameChange = this.state.username !== prevState.username;
        let didEmailChange = this.state.email !== prevState.email;

        if(didUsernameChange || didEmailChange){
            this.fetchProfileData()
        }
    };
}