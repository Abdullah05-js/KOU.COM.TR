const nodemailer = require("nodemailer");

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

    const html = `<!DOCTYPE html>

  <div class="email-container">
    <div class="email-header">
      <h1>OTP-KEY</h1>
    </div>
    <div class="email-body">
      <p>KOU</p>
      <p>Thank you for signing up with us. We are thrilled to have you on board.to verify your email address:${OTP}</p>
    </div>
    <div class="email-footer">
      <p>© 2024 KOU.COM.TR, Inc. All rights reserved.</p>
    </div>
  </div>
`
const info = await transporter.sendMail({
    from:"gmail <kurasporthd@gmail.com>",
    to:mail,
    subject:"OTP-KEY",
    html:html,
})

console.log("--------------------------",info.messageId);

}

module.exports = useSendMail;