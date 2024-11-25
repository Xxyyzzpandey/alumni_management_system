
import {sendResetPasswordEmail} from "../Emails/Resetpassword.js"

const sendpasswordResetemail=async (req,res)=>{
    try{
        const {email}=req.body;
        if(!(email)){
           return res.status(401).send("field is missing");
        }
        const user=await alumni.findOne({email});
        if(!user){
           return res.status(400).send("user does not exist")
        }
          await sendResetPasswordEmail(email);
          return res.status(200).send("email  send  successfully")
    }catch(error){
        res.status(400).send("something went wrong");
    }
}

export {sendpasswordResetemail}