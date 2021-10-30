import { useState } from 'react';
import axios from 'axios';
import HomeInput from './HomeInput';
import HomeButton from './HomeButton';
import returnArrow from '../../../util/media/returnArrow.png';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const forgotPasswordHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        };

        await axios.post('/api/auth/forgotpassword', {email}, config).then(
            res => {
                alert(res.data.data);
            }
        ).catch(
            err => {
                setEmail("");
                alert(err.message);
            }
        )
    }

    return (
        <div className="ForgotPassword">
            <a href="/" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
            <form className="Forgot-Main" onSubmit={forgotPasswordHandler}>
                <h2 id="forgot-title">Forgot Password</h2>
                <HomeInput 
                    question="EMAIL" 
                    type="email" 
                    name="email"
                    labelFor="email"
                    isStatic={false} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit"><HomeButton buttonText="Submit" /></button>
            </form>
        </div>
    );
}

export default ForgotPassword;