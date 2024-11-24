
import mongoose from "mongoose";

const eventmodel= new mongoose.Schema({
    organisedby:{
        type: String,
        required: true
    },
      description:{
        type:String,
      },
      eventlink:{
        type:String,
      },
      date:{
        type:String,
        required:true,
      },
})

const event= mongoose.model("event",eventmodel);

export {event}

