// TEMP AWS
import { uuid } from "uuidv4";
import {
  INTERNAL_SERVER_STATUS_CODE,
  SUCCESS_STATUS_CODE,
} from "../../constants/ApiConstants";
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-2" });
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

// SEND GRID API
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendSpecialReqeust(req, res) {
  const writeResponse = writeToSpecialRequestsTable(req.body, res);
  console.log(
    "[send_special_request : sendSpecialReqeust] writeResponse: ",
    writeResponse
  );
  // Send email to special requests email.
  const textPayload =
    "name: " +
    JSON.stringify(req.body.name) +
    "\nemail: " +
    JSON.stringify(req.body.email) +
    "\n....\n" +
    JSON.stringify(req.body.specifications) +
    "\n\nMAP PAYLOAD: \n" +
    JSON.stringify(req.body.map) +
    "\n\nPHONE NUMBER: \n" +
    JSON.stringify(req.body.phoneNumber);

  console.log("text payload: ", textPayload);

  const msg = {
    to: process.env.EMAIL_SUPPORT,
    from: "joseph.hernandez@mapyourmemory.com",
    subject: req.body.subject,
    text: textPayload,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log(`Email sent to ${process.env.EMAIL_SUPPORT}.`);
    })
    .catch((error) => {
      console.log(`Error sending email to ${process.env.EMAIL_SUPPORT}.`);
      console.error(error);
      return res.status(INTERNAL_SERVER_STATUS_CODE).json({ success: false });
    });

  // Return 200 status code if successful.
  return res.status(SUCCESS_STATUS_CODE).json({ success: true });
}

const writeToSpecialRequestsTable = async (payload, res) => {
  console.log("writeToSpecialRequestsTable");
  console.log("payload", payload);
  console.log("db", ddb);
  try {
    const curr_date = new Date().toISOString();

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
        phoneNumber: {
          S: payload.phoneNumber,
        },
        createAt: {
          S: curr_date,
        },
      },
    };

    ddb.putItem(params, function (err, data) {
      console.log(
        "[send_special_request : writeToSpecialRequestsTable] params:",
        params
      );
      if (err) {
        console.log(
          "[send_special_request : writeToSpecialRequestsTable] Error putItem",
          err
        );
        return res.status(INTERNAL_SERVER_STATUS_CODE).json({ success: false });
      } else {
        console.log(
          "[send_special_request : writeToSpecialRequestsTable] Successfully putItem",
          data
        );
        return res.status(SUCCESS_STATUS_CODE).json({ success: true });
      }
    });
  } catch (err) {
    console.log(
      "[send_special_request : writeToSpecialRequestsTable] Big Error - catch block"
    );
    console.log(err);
    return res.status(INTERNAL_SERVER_STATUS_CODE).json({ success: false });
  }
};
