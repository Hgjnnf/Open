import React from 'react';
import './Profile.css';
import { InputBar } from '../common/Input Bar/InputBar';
import { FaEdit } from 'react-icons/fa';
import returnArrow from '../../util/media/returnArrow.png';
import axios from 'axios';

export class Profile extends React.Component {
    constructor(props) {
        super(props);

        //Username & Email States
        this.state = {
            username: 'Loading...',
            email: 'Loading...'
        }
    };

    fetchProfileData() {
        //Tentative; for testing (will be replaced by the login
        let authToken = this.props.token;

        //Configuration for calling the GET request
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`
            }
        }

        //GET request to the /profile url
        axios.get('/profile', config).then(res => {
            //Set 1 second delay before changing state
            setTimeout(() => {
                    this.setState({
                        username: res.data.username,
                        email: res.data.email
                    });
                }, 1000)
            }
        ).catch(err => {
            setTimeout(() => {
                    this.setState({
                        username: err.message,
                        email: err.message
                    });
                }, 1000)
            }
        );
    };

    render() {
        let username = this.state.username;
        let email = this.state.email;

        return (
            <div className="Profile">
                <a href="#" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
                <div className="Profile-Main">
                    <h2 id="profile-title">PROFILE</h2>
                    <InputBar title="USERNAME" content={username} icon={<FaEdit />} />
                    <InputBar title="EMAIL" content={email} />
                    <p id="change-password">Change Password</p>
                </div>
            </div>
        )
    };

    //Only called once the component is initially rendered (mounted)
    componentDidMount() {
        this.fetchProfileData()
    };

    //Checks for changes in username and email then updates them
    componentDidUpdate(prevState) {
        let didUsernameChange = this.state.username !== prevState.username;
        let didEmailChange = this.state.email !== prevState.email;

        if(didUsernameChange || didEmailChange){
            this.fetchProfileData()
        }
    };
}
