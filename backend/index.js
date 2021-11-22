//Heroku Link 
//https://cs-3083.herokuapp.com/

const express = require("express"); 
const app = express(); 
//Setting up port dynaically with Heroku
const port = process.env.PORT || 4000;  

const indexRoute = require('./routes/index.js'); 

app.use('/', indexRoute); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})