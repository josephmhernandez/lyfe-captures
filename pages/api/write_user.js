// import ddbDocClient from "../../config/ddbDocClient";

var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

export default async function writeUser(req, res) {
  try {
    const user_id = req.body.user_id;
    // Get current date UTC.
    const curr_date = new Date().toISOString();
    // Get s3 client from aws-sdk
    var params = {
      TableName: "leads.users",
      Item: {
        user_id: {
          S: req.body.user_id,
        },
        first_name: {
          S: req.body.first_name ? req.body.first_name : "",
        },
        last_name: {
          S: req.body.last_name ? req.body.last_name : "",
        },
        email: {
          S: req.body.email,
        },
        has_bought: {
          BOOL: false,
        },
        current_date: {
          S: curr_date,
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
}
