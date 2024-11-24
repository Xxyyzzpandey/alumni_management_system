import nodemailer from "nodemailer"

 const transporter=nodemailer.createTransport({
    host:"smpt.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"ankitdev0076@gmail.com",
        pass:"ezqn acwo belg ajjd",
    },
 });

 const sendResetPasswordEmail=(userEmail)=>{
    const mailoption={
        from:'"UIET ALUMNI COMMUNITY" <ankitdev0076@gmail.com>',
        to:userEmail,
        subject:'Reset Password',
        text:`Reset password link <a> http://localhost:5173/api/v1/resetpasswordemail`,
    };
    return transporter.sendMail(mailoption)
 }

 export {sendResetPasswordEmail}