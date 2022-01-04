const express = require('express');
const env = require('./config/environment')
const cookieParser = require('cookie-parser')
const cors = require('cors');
// const corsoption  = {
//     origin: true,
//     allowedHeaders: ['Content-Type',
//     'Authorization',
//     'Access-Control-Allow-Origin'],
//     credentials: true,
//     preflightContinue: true
// }
const app = express();
const port = 9000;
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose')

// used  for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy')
const passportGoogle = require('./config/passport-google.oauth2-strategy');

const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');

// setting up chat server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
app.use(cors());
chatServer.listen(5000);
console.log('chat server is listening on port 5000')
const path = require('path');


app.use(sassMiddleware({
    src: path.join(__dirname, env.asset_path, 'scss'),
    dest: path.join(__dirname, env.asset_path, 'css'),
    bedug: true,
    outputStyle: 'extended',
    prefix: '/css'
}))
app.use(express.urlencoded());

app.use(cookieParser());

// to link css ,java files
app.use(express.static(env.asset_path))

// to get user img on profile page
app.use('/uploads', express.static(__dirname+ '/uploads') )

// to use layout library
app.use(expressLayout);

// extract style and script from sub pages through layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);






// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// 



app.use(session({
    name: 'codeial',
    // Todo later 
    secret: env.session_cookie_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: db._connectionString
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));




app.listen(port, function(err){
    if(err){
        // console.log('error',err);
        console.log(`Error in running server : ${err}`);
    }
    console.log(`Server is running on port :${port}`);
});
