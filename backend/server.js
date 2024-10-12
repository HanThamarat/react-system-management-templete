const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const passport = require('passport');
const morgen = require('morgan');

require('dotenv').config();
require('./middlewares/authMiddleware');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgen('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// apply heder for cross-origin requests test
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, X-API-KEY');
    next();
});

app.use('/api/authenticate', require('./routers/authenticate'));

// import router files from the routers directory and apply them to the api endpoi
readdirSync('./routers').map((r) => app.use('/api', passport.authenticate('jwt', {session: false}), require(`./routers/` + r)));


app.get('/', async (req, res) => {
    try {
        res.status(200).json({
            message: "Server is running successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server running into an error",
            error: error,
        })
    }
});

app.listen(port, () => {
    try {
        console.log(`🚀 Server is running on port ${port}`);
    } catch (error) {
        return console.error(error);
    }
})