//modules
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const licenseMiddleware = require('./middlewares/licenseMiddleware');

dotenv.config({path: './.env'});

const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   extended: true
}));
app.use(cookieParser('secret key'));
app.listen(process.env.PORT ,() => {
   console.log(`Listening port ${process.env.PORT}`);
});
app.use('/api', licenseMiddleware, require('./routes/api'));
