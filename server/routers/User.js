const jwt =require("jsonwebtoken");
const express =require('express')
const bcrypt=require('bcryptjs')
const bodyParser = require('body-parser');
const app=express()
app.use(bodyParser());
const router=express.Router()
const User=require('../model/user')
router.post('/registers',async(req,res)=>{
   
    const { name,email,phone,password,cpassword,pincode,state,district,address } =req.body
        if(!name || !email || !phone || !password || !cpassword || !pincode || !state || !district || !address){
             res.json({status:"failed",message:"invalid"})
        }
    try{
        
        const userExist =await User.findOne({email:email})
      
        if(userExist){
             res.json({message:"User Exist"})
        }

        
        const hash= await bcrypt.hash(password,10)
        const chash=await bcrypt.hash(cpassword,10)
      
   
        const user =  new User({name,email,phone,password:hash,cpassword:chash,state,district,address,pincode})
     
        
        const userRegister=  user.save()
       

        if(userRegister){
            res.json({status:'success',message:"sign up success",user:userRegister})

        }
        else{
            res.json({status:"failed",message:"invalid credentials"})
        }

    }
    catch(err){
        res.json({status:"failed",message:"err.message"})
      
    }
})
router.post("/login",async(req,res)=>{
    try{
        let token
        const { email,password } = req.body
        console.log(email,password)
        if(!email || !password){
            res.json({message:"empty"})
        }
        const userLogin=await User.findOne({email:email})
        console.log(userLogin)
        let isCheck
        if(userLogin){
            isCheck= await bcrypt.compare(password,userLogin.password)
           

        if(!isCheck){
            res.json({message:"Invalid password"})
        }else{
            token=await userLogin.generateAuthToken()
            console.log(token)
            res.cookie("jwttoken",token,{
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true
            })
            res.json("Login Successful")
        }


        }else{
            res.json({message:"Invalid Email"})
        }
        
        
                
    }catch(err){
        console.log(err)
    }
})




module.exports = router;