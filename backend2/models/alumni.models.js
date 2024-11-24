
import mongoose from "mongoose";

const alumnimodel= new mongoose.Schema({
    username:{
        type: String,
      required: true
    },
    email:{
        type: String,
      required: true,
      unique: true,     // Ensures email is unique in the database
      lowercase: true,  // Automatically converts the email to lowercase
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password:{
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
    },
    githuburl:{
        type:String,
    },
    Linkedinurl:{
        type:String,
        required:true,
        unique:true,
    },
    passoutYear: {
        type: Number,
        required: true,
      },
      rollNumber: {
        type: String,
        required: true,
        unique: true,  // Ensure roll number is unique
      },
      currentcompany:{
        type:String,
        required:true,
      },
      jobrole:{
        type:String,
      },
      Gender:{
        type:String,
        required:true,
      },
      city:{
        type:String,
      },
      state:{
        type:String,
      },
      message:{
        type:String,
      },
      token: {
        type: String,
        required: true,
      },
})

const alumni= mongoose.model("alumni",alumnimodel);

export {alumni}

