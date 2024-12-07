const nodemailer = require("nodemailer");
require('dotenv').config({path:"../.env"});



const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465 ,
    secure:true,
    auth:{
        user:process.env.APP_USER,
        pass:process.env.APP_PASS,
    }
})

const useSendMail = async (mail,OTP) => {

 

    const html = `
  <div >
    <div >
      <h1>VİZE SINAVI</h1>
    </div>
    <div>
      <p>KOU</p>
      <p>${OTP[0]}</p>
      <p>bu ders için notunuz güncelendiği:${OTP[3]}</p>
    </div>
    <div >
     
    </div>
  </div>
`
const info = await transporter.sendMail({
    from:"ÖBS <kurasporthd@gmail.com>",
    to:mail,
    subject:"Önemli",
    html:html,
    
})

console.log("--------------------------",info.messageId);

}

module.exports = useSendMail;