const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Replace with your SendGrid API key

export default async function sendGiveawayEmail(req, res) {
  const emailTo = req.body.email;

  // ONLY place we have template id. If we add somewhere then change this to env variable.
  const templateId = "d-4c859cffb6914594879d3acb2d344ecd";

  const emailData = {
    to: emailTo,
    from: process.env.EMAIL_MARKETING_SENDER, // Replace with the sender's email address
    templateId: templateId,
    dynamicTemplateData: {
      // Replace with the dynamic data for your template
      name: "John Doe",
      // ... other dynamic data
    },
  };

  sgMail
    .send(emailData)
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });

  // Return 200 status code if successful.
  return res.status(200).json({ success: true });
}
