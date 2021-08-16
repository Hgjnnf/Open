const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.displayUser = async (req, res, next) => {
    const user = req.user;

    try {
        const {username, email} = user;

        res.status(200).json({
            username: username,
            email: email,
        })

    } catch(err) {
        next(err);
    }
}

exports.changeUsername = async (req, res, next) => {
    const {username, email} = req.user;

    try {
        const user = await User.findOne({email});

        if(req.body.username === username){
            return next(new ErrorResponse("Same username as before. No changes made.", 403));
        }

        user.username = req.body.username;

        await user.save();

        res.status(201).json({
            success: true,
            data: "Username Updated Successfully",
        });
    } catch(err) {
        next(err);
    }
}

exports.changePassword = async (req, res, next) => {
    /*
    Logic: 
    Checks for login token
    Finds user
    Compare old password with new password
    Return error if different
    Else, update password
    Save password
    Send success message
    */
}