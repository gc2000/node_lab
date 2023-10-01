const express = require('express');
const router = express.Router();

router.get('/view-drone', (req,res,next)=>{
    console.log("in the view drones middleware");
    res.send("<h1>This is view drones page<h1>");
  })

router.get('/',(req,res,next) => {
    res.send("<h1>This is HOME</h1>")
})

module.exports = router;