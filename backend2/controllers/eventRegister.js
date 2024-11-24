import {event} from "../models/eventmodel.js"

const Eventregister=async (req,res)=>{
   try {
    console.log("Request body:", req.body); // Log incoming request body
    const {organisedby,description,eventlink,date}=req.body

        if(!(organisedby,description,date) ){
            return res.status(404).send("inputs are required")
        }
     const Event=await event.create({organisedby,description,eventlink,date}) 
    await Event.save();
     res.status(200).send("event registered successfully ")
     }catch(error){
    res.status(400).send("something went wrong")
  }
  }
     
  export {Eventregister}