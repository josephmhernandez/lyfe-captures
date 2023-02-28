// import ddbDocClient from "../../config/ddbDocClient";

import { uuid } from "uuidv4";

var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

export default async function writeReview(req, res) {
  try {
    // Get current date UTC.
    const curr_date = new Date().toISOString();
    const review_id = uuid();
    // Get s3 client from aws-sdk
    var params = {
      TableName: "ecommerce.reviews",
      Item: {
        id: {
          S: review_id,
        },
        cart_id: {
          S: req.body.cart_id,
        },
        product_id: {
          S: req.body.product_id,
        },
        order_id: {
          S: req.body.order_id,
        },
        rating: {
          S: req.body.rating.toString(),
        },
        review: {
          L: [
            {
              M: {
                question: { S: req.body.questions[0].question },
                answer: { S: req.body.questions[0].answer },
              },
            },
            {
              M: {
                question: { S: req.body.questions[1].question },
                answer: { S: req.body.questions[1].answer },
              },
            },
          ],
        },
        current_date: {
          S: curr_date,
        },
      },
    };
    console.log("params", params);
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
