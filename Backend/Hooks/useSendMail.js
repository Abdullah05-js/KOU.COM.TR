import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });




const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465 ,
    secure:true,
    auth:{
        user:process.env.APP_USER,
        pass:process.env.APP_PASS,
    }
})

const useSendMail = async (name,mail,OTP) => {

 

    const html = `
  <div >
    <div >
      <h1>OTP</h1>
    </div>
    <div>
      <p>KOU.COM.TR</p>
      <p>${name}</p>
      <p>bu ders için notunuz güncelendiği:${OTP}</p>
    </div>
    <div >
     
    </div>
  </div>
`
const info = await transporter.sendMail({
    from:"KOU.COM.TR <kurasporthd@gmail.com>",
    to:mail,
    subject:"Önemli",
    html:html,
    
})

console.log("--------------------------",info.messageId);

}

export default useSendMail;