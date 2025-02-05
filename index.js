const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');


dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true } ,()=> console.log('Connected to DB!'));

//Middleware
app.use(express.json());
//Route middles wares
app.use('/api/user', authRoute);


//if reaches to a route that doesn't exit page not found
app.use((req,res,next)=> {
    res.status(404).send('Page not Found');
});



app.listen(3000, ()=> console.log('Server up and running'));