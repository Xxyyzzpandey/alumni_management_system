import { alumni } from "../models/alumni.models.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendRegistrationEmail } from "../Emails/Registrationemail.js";
import {passwordresetconformation} from "../Emails/resetpasswordconformation.js"
import cookie from "cookie-parser";

const registerAlumni=async (req,res)=>{
   try {
    console.log("Request body:", req.body); // Log incoming request body
    const {username,
        email,
        password,
        githuburl,
        Linkedinurl,
        passoutYear,
        rollNumber,
        currentcompany,
        jobrole,
        Gender,
        city,
        state,
        message}=req.body

        if(!email || !password || !Linkedinurl || !passoutYear || !rollNumber || !currentcompany || !message ){
            return res.status(404).send("inputs are required")
        }
    const existinguser=await alumni.findOne({email})
    const existLinkedinurl=await alumni.findOne({Linkedinurl})
    const existrollNumber=await alumni.findOne({rollNumber})

    if(existinguser){
        return res.status(205).send("User already exist with this email")
    }
    if(existLinkedinurl){
        return res.status(205).send("User already exist with this existLinkedinurl")
    }
    if(existrollNumber){
        return res.status(205).send("User already exist with this existrollNumber")
    }

    const encryptpassword=await bcrypt.hash(password,10);
    const Alumni=await alumni.create({
        username,
        email,
        password:encryptpassword,
        githuburl,
        Linkedinurl,
        passoutYear,
        rollNumber,
        currentcompany,
        jobrole,
        Gender,
        city,
        state,
        message,
        token:"tempory",
    }) 
    let tokenformed;
    try {
      tokenformed = jwt.sign(
        { id: Alumni._id, email, rollNumber },
        process.env.JWTSECRET,
        { expiresIn: "2d" }
      );
    } catch (error) {
      console.error("Error generating token:", error.message);
      return res.status(500).send("Failed to generate token");
    }

    // Save token to the database
    Alumni.token = tokenformed;
    await Alumni.save();

    // Remove password before responding
    Alumni.password = undefined;
    sendRegistrationEmail(email);
     res.status(200).send("Alumni registered successfully ")
     }catch(error){
    res.status(400).send("something went wrong")
  }
  }

const handleLogin=async (req,res)=>{
    try{
        const {email,password}=req.body;
        console.log(email)
        if(!(email && password)){
           return res.status(401).send("field is missing");
        }
        const user=await alumni.findOne({email});
        if(!user){
           return res.status(400).send("user does not exist")
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).send("invalid password");
        }
        const token = jwt.sign(
            { id: user._id, email: user.email, rollNumber: user.rollNumber },
            process.env.JWTSECRET,
            { expiresIn: "2d" }
          );
          user.token = token;
          await user.save();
          user.password = undefined;
          res.cookie('authToken', token, {
            httpOnly: true,
            secure: false, // Set to `true` in production when using HTTPS
            maxAge:60*60*1000, // 2 days
            sameSite: 'Strict',
          });
          return res.status(200).send(user)
    }catch(error){
        res.status(400).send("something went wrong");
    }
}

const updatepassword=async (req,res)=>{
    try{
        const {email,newpassword}=req.body;
    if(!(email || newpassword)){
        return res.status(401).send("field is missing");
    }
    const user=await alumni.findOne({email});
    if(!user){
        return res.status(400).send("user does not exist")
    }
    const encryptpassword=await bcrypt.hash(newpassword,10);
    user.password=encryptpassword;
    await user.save();
    user.password=undefined;
    passwordresetconformation(email);
    return res.status(200).send("changed password successfully")
    }catch(error){
        res.status(400).send("something went wrong");
    }
}

const Logout=async (req,res)=>{
    const token = req.cookies.authToken;
        res.clearCookie('authToken', {
             httpOnly: true, 
             secure: false, 
             sameSite: 'Strict' ,
             maxAge: 0,
            });
        return res.status(200).json({ message: 'Logged out successfully' });
    };


const updataprofile=async (req,res)=>{
    try{
        const {email,githuburl,Linkedinurl,currentcompany,jobrole}=req.body;
    if(!(email ||githuburl ||Linkedinurl || currentcompany||jobrole)){
        return res.status(401).send("field is missing");
    }
    const user=await alumni.findOne({email});
    if(!user){
        return res.status(400).send("user does not exist")
    }
    user.githuburl=githuburl;
    user.Linkedinurl=Linkedinurl;
    user.currentcompany=currentcompany;
    user.jobrole=jobrole
    await user.save();
    passwordresetconformation(email);
    return res.status(200).send("updated profile successfully")
    }catch(error){
        res.status(400).send("something went wrong");
    }
}

const handlesignup=async (req,res)=>{
    
}


export {handleLogin,registerAlumni,updatepassword,Logout,updataprofile}