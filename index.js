const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
 require('./models/user.js');
 require('./services/passport.js');

 mongoose.connect(keys.mongoURI,{ useNewUrlParser: true });

const app = express();
require('./routes/authRoutes')(app);

app.use(
  cookieSession({
    maxAge: 20*20*60*60*1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
