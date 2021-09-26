const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');

exports.displayUser = async (req, res, next) => {
    //gets token from the auth.js middleware
    let token = req.token;

    try {
        //decodes the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //finds the user by the decoded id + select password to get the password
        const user = await User.findById(decoded.id)

        const {username, email} = user;

        res.status(200).json({
            username: username,
            email: email
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
   //gets token from the auth.js middleware
    let token = req.token;

    try {
        //decodes the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //finds the user by the decoded id + select password to get the password
        const user = await User.findById(decoded.id).select("+password");

        //return boolean for whether or not the new password matches with the old
        const isMatch = await user.matchPasswords(req.body.password);

        if(isMatch) {
            return next(new ErrorResponse("Same password as before! No changes made.", 403)); 
        }

        //changes password
        user.password = req.body.password;

        //saves the user object
        await user.save();

        //sends success message
        res.status(201).json({
            success: true,
            data: "Password Updated Successfully",
        });

    } catch(err) {
        next(err);
    }

}