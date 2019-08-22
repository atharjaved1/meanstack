var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var formrouter = require('./routes/reservation_form_routes');

const port = 5000;

//express
var app = express();

// cors 
app.use(cors());

// body parsser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// path
app.use(express.static(path.join(__dirname, 'public')));


//database connection
// mongoose.connection.openUri('mongodb://localhost:27017/reservation', {useNewUrlParser:true})

// mongoose.connection.on('connected', ()=>{
//     console.log("Connected to DB");
// });


// mongoose.connection.on('error', (err)=>{
//     if(err){
//         console.log(`Error While connected to DB ${err}`);
//     }
// })

//end datanase connection

app.use('/api', formrouter);
app.use('/test', (req, res,next)=>{
    res.send("Hello");
})

//listen at port 3000 listen has two parameter
app.listen(process.env.PORT || port, ()=>{
    console.log(`This project is running on this ${port}`)
})


