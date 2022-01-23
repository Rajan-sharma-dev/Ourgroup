const express=require('express')
const app=express()
const bodypaser=require('body-parser')
app.use(bodypaser())

const dotenv=require('dotenv')
const userRoutes=require("./routers/User");
dotenv.config({path:'./config.env'})
var cors = require('cors');
app.use(cors());
app.use(userRoutes);


require("./database/connectionwithdb")
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain)





app.listen(process.env.PORT,()=>{
    console.log(`Server running at port no ${process.env.PORT}`)
})