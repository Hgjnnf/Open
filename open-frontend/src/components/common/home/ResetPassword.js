import { useState } from 'react';
import axios from 'axios';
import HomeInput from './HomeInput';
import HomeButton from './HomeButton';
import returnArrow from '../../../util/media/returnArrow.png';

const ResetPassword = ({ history, match }) => {
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const resetPasswordHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        };

        if (password !== confirmpassword) {
            setPassword("");
            setConfirmPassword("");
            alert("Passwords do not match!");
        }

        await axios.put(`/api/auth/resetpassword/${match.params.resetToken}`, {password}, config).then(
            res => {
                alert(res.data.data);
            }
        ).catch(
            err => {
                setPassword("");
                setConfirmPassword("");
                alert(err.message);
            }
        )

    }

    return (
        <div className="ResetPassword">
            <a href="/" id="return-link"><img src={returnArrow} alt="Return Arrow" id="return-arrow"/></a>
            <form className="Reset-Main" onSubmit={resetPasswordHandler}>
                <h2 id="reset-title">Reset Password</h2>
                <HomeInput question="PASSWORD" type="password" name="password" labelFor="password" isStatic={false} onChange={(e) => setPassword(e.target.value)} />
                <HomeInput question="CONFIRM PASSWORD" type="password" name="confirmpassword" labelFor="confirmpassword"isStatic={false} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit"><HomeButton buttonText="Reset Password" /></button>
            </form>
        </div>
    );
}

export default ResetPassword;
