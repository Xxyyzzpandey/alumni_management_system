import mongoose from "mongoose"


 async function Connectdb(){
      try{
        const connect=await mongoose.connect(process.env.MONGODBLINK)
            console.log("db connected")
      }catch(error){
            console.log("db not connected ",error)
      }
}

async function EventConnectdb(){
      try{
        const connect=await mongoose.createConnection(process.env.MONGODBLINK_event)
            console.log(" Event db connected")
      }catch(error){
            console.log("Event db not connected ",error)
      }
}

export {Connectdb ,EventConnectdb}