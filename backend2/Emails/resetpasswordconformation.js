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

 const passwordresetconformation=(userEmail)=>{
    const mailoption={
        from:'"UIET ALUMNI COMMUNITY" <ankitdev0076@gmail.com>',
        to:userEmail,
        subject:' Password reset successfully',
        text:`password reset successfully , thanks team pululu`,
    };
    return transporter.sendMail(mailoption)
 }

 export {passwordresetconformation}