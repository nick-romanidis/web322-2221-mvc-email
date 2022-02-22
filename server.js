const express = require("express");
const exphbs  = require('express-handlebars');

const dotenv = require('dotenv');
dotenv.config({ path: "./config/keys.env"});

const app = express();

// Set up Handlebars
app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main'
}));

app.set('view engine', '.hbs');


// Set up body parser
app.use(express.urlencoded({ extended: false }));

// Configure the controllers.
const generalController = require("./controllers/general");
app.use("/", generalController);


// Start listening
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Web Server is up and running, port ${PORT}`);    
});