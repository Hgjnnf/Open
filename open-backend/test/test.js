const express = require('express');
const request = require('supertest')
require('dotenv').config({path: "../config.env"});
const app = express();

require("./testdb")
const errorHandler = require('../middleware/error');
const conf = require('./config');
const utils = require('./utils');

app.use(express.json());
app.use(errorHandler);
app.use('/api/auth', require('../routes/auth'));
app.use('/profile', require('../routes/profile'));
app.use('/messages', require('../routes/message_routes'));

// Tests to run