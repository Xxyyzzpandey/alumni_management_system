import nodemailer from "nodemailer"

 const transporter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"ankitdev0076@gmail.com",
        pass:"ezqn acwo belg ajjd",
    },
 });

 const sendQuerryEmail=(username,userEmail,message)=>{
    const mailoption={
        from:'"UIET ALUMNI COMMUNITY" <ankitdev0076@gmail.com>',
        to:"ngrok0076@gmail.com",
        subject:'Contact us query from user',
        html:`From:${userEmail} <br> username: ${username} <br> message:${message}`,
    };
    return transporter.sendMail(mailoption)
 }

 const sendQuerryMessage=async(req,res)=>{
      try{
        const {username,userEmail,message}=req.body;
        await sendQuerryEmail(username,userEmail,message)
        return res.status(200).send("query send successfully")
      }catch(error){
         res.status(400).send("something went wrong");
      }
 }

 export {sendQuerryMessage};

 