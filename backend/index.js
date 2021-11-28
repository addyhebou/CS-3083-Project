//Heroku Link 
//https://cs-3083.herokuapp.com/

const express = require("express"); 
const app = express(); 

//Setting up port dynaically with Heroku
const port = process.env.PORT || 3000;  

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"}); 
}); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


