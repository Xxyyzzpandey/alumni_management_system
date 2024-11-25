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

 const sendRegistrationEmail=(userEmail)=>{
    const mailoption={
        from:'"UIET ALUMNI COMMUNITY" <ankitdev0076@gmail.com>',
        to:userEmail,
        subject:'Registration successfully',
        text:'Thanks for Registrating as alumni of UIET ',
    };
    return transporter.sendMail(mailoption)
 }

 export {sendRegistrationEmail}