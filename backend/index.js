//Heroku Link 
//https://cs-3083.herokuapp.com/

const express = require("express"); 
const app = express(); 
//Setting up port dynaically with Heroku
const port = process.env.PORT || 4000;  

const indexRoute = require('./routes/index.js'); 

app.use('/', indexRoute); 

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})