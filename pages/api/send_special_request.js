// TEMP AWS
import { uuid } from "uuidv4";
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-2" });
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

// SEND GRID API
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendSpecialReqeust(req, res) {
  writeToSpecialRequestsTable(req.body, res);

  // Send email to special requests email.

  // const textPayload =
  //   "name: " +
  //   req.body.name +
  //   " email: " +
  //   req.body.email +
  //   "...." +
  //   req.body.specifications +
  //   " MAP PAYLOAD: " +
  //   req.body.map; // Get the map from the request body.

  // const msg = {
  //   to: process.env.EMAIL_SUPPORT,
  //   from: "joseph.hernandez@mapyourmemory.com",
  //   subject: req.body.subject,
  //   text: "yo",
  // };

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log(`Email sent to ${process.env.EMAIL_SUPPORT}.`);
  //   })
  //   .catch((error) => {
  //     console.log(`Error sending email to ${process.env.EMAIL_SUPPORT}.`);
  //     console.error(error);
  //   });

  // // Return 200 status code if successful.
  // return res.status(200).json({ success: true });
}

const writeToSpecialRequestsTable = async (payload, res) => {
  try {
    var params = {
      TableName: "maps.special-requests",
      Item: {
        id: {
          S: uuid(),
        },
        email: {
          S: payload.email,
        },
        name: {
          S: payload.name,
        },
        specifications: {
          S: payload.specifications,
        },
        map: {
          S: JSON.stringify(payload.map),
        },
        subject: {
          S: payload.subject,
        },
      },
    };

    ddb.putItem(params, function (err, data) {
      if (err) {
        console.log("Error", err);
        return res.status(500).json({ success: false });
      } else {
        console.log("Success", data);
      }
    });
  } catch (err) {
    console.log("big error");
    console.log(err);
    return res.status(500).json({ success: false });
  }

  return res.status(200).json({ success: true });
};
