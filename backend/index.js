const express = require('express');
const app = express();
const { PORT } = require('./constants');
const cookieParser = require('cookie-parser');

// ROUTE IMPORTS
const routes = require('./routes');

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));