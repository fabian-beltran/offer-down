const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');
const { PORT, CLIENT_URL } = require('./constants');


const app = express();

// ROUTE IMPORTS
const routes = require('./routes');

// MIDDLEWARES
require('./middlewares/passport');
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

// ROUTES
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));