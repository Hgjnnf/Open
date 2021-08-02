require('dotenv').config({path: "./config.env"});
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Connect database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

app.use('/message', require('./routes/message_routes.js'));

//Error Handler
app.use(errorHandler);

const port = process.env.PORT || 8000;

const server = app.listen(port, () => console.log(`Server running on port ${port}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});