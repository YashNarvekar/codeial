const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose')


app.use(express.urlencoded());

app.use(cookieParser());

// to link css ,java files
app.use(express.static('./assets'))

// to use layout library
app.use(expressLayout);

// extract style and script from sub pages through layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);





// use express router
app.use('/', require('./routes'));





// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        // console.log('error',err);
        console.log(`Error in running server : ${err}`);
    }
    console.log(`Server is running on port :${port}`);


});
