const express = require('express'); 
const { pathToFileURL } = require('url');
const router = express.Router(); 

router.get("/", (req, res) => {
    res.send("API is working!"); 
})

module.exports = router; 