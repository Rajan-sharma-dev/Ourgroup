const mongoose=require('mongoose')
const db=process.env.DATABASE
mongoose.connect(db).then(()=>{
    console.log("coonection successfull")
}).catch((err)=>{
    console.log("no connection")
})