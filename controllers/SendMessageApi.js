import twilio from "twilio";

export default function sendmessage(req, res) {
  
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = twilio(accountSid, authToken);

  const { phone, message } = req.body;

  client.messages
    .create({
      body: message,
      from: process.env.PHONE_FROM,
      to: phone,
    })
    .then((message) => {
      res.status(200).json({
        success: true,
        result: message,
      });
    })
    .catch((error) => {
      res.json({
        success: false,
        error : error
      });
    });
}
