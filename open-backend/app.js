const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));