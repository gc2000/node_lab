const express = require("express");
const parser = require('body-parser');
const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');

const app = express();
app.use(parser.urlencoded({extended:true}));
app.use(adminRoute);
app.use(shopRoute);

app.use((req,res,next) => {
  res.status(404).send("Page not found");
})

app.listen(3000);