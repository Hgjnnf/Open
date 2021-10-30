import React from 'react';
import './Profile.css';
import HomeInput from '../common/home/HomeInput';
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
        //Configuration for calling the GET request
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
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
                <a href="/" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
                <div className="Profile-Main">
                    <h2 id="profile-title">PROFILE</h2>
                    <HomeInput question="USERNAME" value={username} icon={<FaEdit />} isStatic={true} link="/changeusername"/>
                    <HomeInput question="EMAIL" value={email} isStatic={true} />
                    <a id="change-password" href="/changepassword">Change Password</a>
                </div>
            </div>
        )
    };

    //Only called once the component is initially rendered (mounted)
    componentDidMount() {
        this.fetchProfileData()
        console.log(localStorage.getItem("authToken"))
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