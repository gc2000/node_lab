const express = require('express');
const router = express.Router();
const app = express();


router.use('/product', (req,res,next)=>{
    console.log("in the product page middleware 1");
    res.send("<h1>Product page!<h1>");
})
router.use('/add-drone', (req,res,next)=>{
    console.log("in the add drone page middleware");
    res.send("<form action='/drones' method='POST'><input type='text' name='product'><button type='submit'>Submit</button></form>");
})
router.post('/drones', (req,res,next)=>{
    console.log("aaa");
    console.log(req.body);
    res.redirect('/');

})

module.exports = router;