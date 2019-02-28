if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer')
const path = require('path');
const cors = require('cors');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// Routes


//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Start the server

app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`);
});
