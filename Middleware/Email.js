import nodemailer from 'nodemailer';

export const SendMail = async(email,subject,text,html) =>{

    try{
        const transporter = nodemailer.createTransport({
            host:"sandbox.smtp.mailtrap.io",
            port:2525,
            tls:false,
            auth: {
                user: "4072bb793eef26",
                pass: "d658682688ef85"
                
            },
            debug: true
        });

        const mailOptions = {
            from:process.env.USERNAME,
            to: email,
            subject:subject,
            text:text,
            html:html
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ',info.response);
            }
        });
   
    }
    catch(err){
        console.log(err, "Something went wrong");
    }
};

