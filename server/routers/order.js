const express=require('express')

const router= new express.Router()
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
router.use(express.json())

const mongose=require('mongoose')

const app=express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

console.log("coonection is there")
const User=require('../model/user');
const Order=require('../model/Order');
const e = require('cors')


//Middleware is here 
const authenticateToken = (req, res, next) => {
    

    console.log(req.headers)

    const Authorization= req.headers["authorization"]
    console.log(Authorization)
    const Access_Token_Secret=process.env.SECRET_KEY
    console.log(Access_Token_Secret)
    const token = Authorization && Authorization.split(' ')[1]
    console.log(token)
    if (token == null) {
        return res.status(403).send("Not authorized")
    }
    else {
      
        jwt.verify(token, Access_Token_Secret, (err, userDet) => {
            console.log(token,Access_Token_Secret)
            if (err) {
                return res.status(403).send(err.message)
            }
            else {
                User.find({ _id: userDet.userID}).then(result => {
                    req.user = userDet
                    console.log("i am in inside")
                    
                    next()
                }).catch(err => {
                    res.status(404).send("User not found")
                })
                
            }
        })
    }
}


router.post("/addOrder",authenticateToken,async(req,res)=>{
    console.log(req.body)
    
    try{
        const addingnewOrder=new Order({
            order_id:req.body.order_id,
            ser_id:req.body.ser_id,
            details:req.body.details,
            total_quantity:req.body.total_quantity,
            total_price: req.body.total_price,
            status: req.body.status,
            address: req.body.address,
            timestamps: true 
        })
        
        console.log(addingnewOrder,"yha hu")

        const dadasave=await addingnewOrder.save()
        console.log(dadasave)
        res.status(200).json({
            
            data:dadasave
        })

    }catch(err){
        res.send("server error hi he ")
        
    }
})

module.exports=router