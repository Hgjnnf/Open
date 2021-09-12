const express = require('express');
const request = require('supertest')
require('dotenv').config({path: "../config.env"});
const app = express();

require("./testdb")
const errorHandler = require('../middleware/error');

app.use(express.json());
app.use('/api/auth', require('../routes/auth'));
app.use('/profile', require('../routes/profile'));
app.use('/messages', require('../routes/message_routes'));

