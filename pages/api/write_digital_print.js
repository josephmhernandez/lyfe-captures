var AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
// Generate a UUID

// Set the region
AWS.config.update({ region: "us-east-2" });

var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

export default async function writeDigitalPrint(payload, res) {
  const uuid = uuidv4();
  let body = payload.body;
  try {
    const curr_date = new Date().toISOString();
    console.log("all payload: ", body);
    console.log("requestId: ", uuid);
    console.log("mapInput: ", body.mapInput);
    console.log("typeof mapIN put", typeof body.mapInput);
    var params = {
      TableName: "ecommerce.digital-prints",
      Item: {
        email: {
          S: body.email,
        },
        requestId: {
          S: uuid,
        },
        orderStatus: {
          S: "PENDING",
        },
        createdAt: {
          S: curr_date,
        },
        mapInput: {
          S: JSON.stringify(body.mapInput),
        },
        firstName: {
          S: body.firstName,
        },
        lastName: {
          S: body.lastName,
        },
      },
    };
    ddb.putItem(params, function (err, data) {
      if (err) {
        console.log("[write_digital_print: writeDigitalPrint] Error", err);
        return res.status(500).json({ success: false });
      } else {
        console.log("[write_digital_print: writeDigitalPrint] Success", data);
      }
      return res.status(200).json({ success: true });
    });
  } catch (err) {
    console.log("[write_digital_print: writeDigitalPrint] big error");
    console.log(err);
    return res.status(500).json({ success: false });
  }
}
